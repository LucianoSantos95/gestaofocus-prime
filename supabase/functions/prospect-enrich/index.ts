// Enriquece um lead: scrapeia o site (Firecrawl) + IA extrai dores/decisor/score
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const FIRECRAWL_V2 = "https://api.firecrawl.dev/v2";
const AI_URL = "https://ai.gateway.lovable.dev/v1/chat/completions";

async function checkAdmin(req: Request, admin: any) {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return null;
  const userClient = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data: { user } } = await userClient.auth.getUser();
  if (!user) return null;
  const { data } = await admin.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin").maybeSingle();
  return data ? user : null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const FIRECRAWL_API_KEY = Deno.env.get("FIRECRAWL_API_KEY");
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!FIRECRAWL_API_KEY) throw new Error("FIRECRAWL_API_KEY não configurada");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY não configurada");

    const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
    const user = await checkAdmin(req, admin);
    if (!user) return new Response(JSON.stringify({ error: "Apenas admins" }), { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    const { lead_id } = await req.json();
    if (!lead_id) return new Response(JSON.stringify({ error: "lead_id obrigatório" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    const { data: lead, error: leadErr } = await admin.from("prospect_leads").select("*, prospect_campaigns(*)").eq("id", lead_id).single();
    if (leadErr || !lead) return new Response(JSON.stringify({ error: "Lead não encontrado" }), { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    if (!lead.website) {
      return new Response(JSON.stringify({ error: "Lead sem website pra scrapear" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // 1) Scrape com Firecrawl
    let scraped: any = {};
    try {
      const fcRes = await fetch(`${FIRECRAWL_V2}/scrape`, {
        method: "POST",
        headers: { Authorization: `Bearer ${FIRECRAWL_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          url: lead.website,
          formats: ["markdown", "links"],
          onlyMainContent: true,
        }),
      });
      const fcData = await fcRes.json();
      scraped = fcData.data || fcData;
    } catch (e) {
      console.warn("scrape failed:", e);
    }

    const markdown = (scraped.markdown || "").substring(0, 8000);
    const links: string[] = scraped.links || [];

    // tenta achar email no conteúdo
    const emailMatch = markdown.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
    const foundEmails = [...new Set(emailMatch || [])].filter(e => !e.match(/(example|test|sentry|wixpress|godaddy|noreply|no-reply)/i));

    // 2) IA extrai estrutura
    const icp = lead.prospect_campaigns?.icp_description || "";
    const aiRes = await fetch(AI_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: `Você é um analista de prospecção B2B. Receberá o conteúdo do site de uma empresa e o ICP (cliente ideal) que estamos buscando. Extraia informações estruturadas e avalie o fit.`,
          },
          {
            role: "user",
            content: `ICP que buscamos:\n${icp}\n\nConteúdo do site da empresa "${lead.company_name}":\n${markdown}\n\nEmails encontrados no site: ${foundEmails.join(", ") || "nenhum"}`,
          },
        ],
        tools: [{
          type: "function",
          function: {
            name: "extract_lead_intel",
            description: "Extrai dados estruturados do lead",
            parameters: {
              type: "object",
              properties: {
                company_name: { type: "string", description: "Nome real da empresa (refinado)" },
                industry: { type: "string" },
                location: { type: "string", description: "Cidade/estado se disponível" },
                contact_email: { type: "string", description: "Melhor email de contato (escolha o mais relevante: comercial, vendas, contato, ou do decisor). Vazio se nenhum." },
                contact_name: { type: "string" },
                contact_role: { type: "string" },
                pain_points: { type: "array", items: { type: "string" }, description: "3-5 dores prováveis baseadas no negócio" },
                services_offered: { type: "array", items: { type: "string" } },
                team_size_estimate: { type: "string" },
                personalized_hook: { type: "string", description: "Frase de abertura ultra-personalizada (1-2 linhas) referenciando algo ESPECÍFICO do site (serviço, cliente, conquista, post recente). Use português br." },
                fit_score: { type: "integer", description: "0-100. Quão bem essa empresa se encaixa no ICP." },
                fit_reasoning: { type: "string", description: "Por que esse score (1-2 linhas)" },
              },
              required: ["company_name", "pain_points", "personalized_hook", "fit_score", "fit_reasoning"],
              additionalProperties: false,
            },
          },
        }],
        tool_choice: { type: "function", function: { name: "extract_lead_intel" } },
      }),
    });

    if (!aiRes.ok) {
      const errText = await aiRes.text();
      console.error("AI error:", aiRes.status, errText);
      if (aiRes.status === 429) return new Response(JSON.stringify({ error: "Limite de IA atingido, tente em alguns segundos" }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (aiRes.status === 402) return new Response(JSON.stringify({ error: "Créditos de IA esgotados" }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      throw new Error(`AI gateway: ${aiRes.status}`);
    }

    const aiData = await aiRes.json();
    const toolCall = aiData.choices?.[0]?.message?.tool_calls?.[0];
    const intel = toolCall ? JSON.parse(toolCall.function.arguments) : {};

    // email final: IA escolheu, ou primeiro email encontrado
    const finalEmail = intel.contact_email || foundEmails[0] || lead.email;

    const updates: any = {
      company_name: intel.company_name || lead.company_name,
      industry: intel.industry,
      location: intel.location,
      email: finalEmail,
      contact_name: intel.contact_name,
      contact_role: intel.contact_role,
      pain_points: intel.pain_points,
      personalized_hook: intel.personalized_hook,
      score: intel.fit_score || 50,
      enriched_data: {
        ...lead.enriched_data,
        services_offered: intel.services_offered,
        team_size_estimate: intel.team_size_estimate,
        fit_reasoning: intel.fit_reasoning,
        all_emails_found: foundEmails,
        scraped_at: new Date().toISOString(),
      },
      status: finalEmail ? "enriched" : "discarded", // sem email não dá pra contatar
    };

    const { data: updated, error: updErr } = await admin.from("prospect_leads").update(updates).eq("id", lead_id).select().single();
    if (updErr) throw updErr;

    return new Response(JSON.stringify({ success: true, lead: updated, intel }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("prospect-enrich error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
