// Busca empresas via Firecrawl /search baseado no ICP da campanha
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const FIRECRAWL_V2 = "https://api.firecrawl.dev/v2";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const FIRECRAWL_API_KEY = Deno.env.get("FIRECRAWL_API_KEY");
    if (!FIRECRAWL_API_KEY) throw new Error("FIRECRAWL_API_KEY não configurada");

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    // verifica usuário admin
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) return new Response(JSON.stringify({ error: "Não autorizado" }), { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    const userClient = createClient(SUPABASE_URL, Deno.env.get("SUPABASE_ANON_KEY")!, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user } } = await userClient.auth.getUser();
    if (!user) return new Response(JSON.stringify({ error: "Não autenticado" }), { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    const admin = createClient(SUPABASE_URL, SERVICE_KEY);
    const { data: roleCheck } = await admin.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin").maybeSingle();
    if (!roleCheck) return new Response(JSON.stringify({ error: "Apenas admins" }), { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    const { campaign_id, query, limit = 10 } = await req.json();
    if (!campaign_id || !query) {
      return new Response(JSON.stringify({ error: "campaign_id e query obrigatórios" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // chama Firecrawl /search
    const fcRes = await fetch(`${FIRECRAWL_V2}/search`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${FIRECRAWL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        limit: Math.min(limit, 30),
        lang: "pt",
        country: "br",
      }),
    });

    const fcData = await fcRes.json();
    if (!fcRes.ok) {
      console.error("Firecrawl search error:", fcData);
      return new Response(JSON.stringify({ error: fcData.error || "Erro na busca", details: fcData }), { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // results podem estar em data ou web
    const results = fcData.data || fcData.web || fcData.results?.web || [];
    const inserted: any[] = [];

    for (const r of results) {
      const url = r.url || r.link;
      const title = r.title || "Empresa sem nome";
      if (!url) continue;

      try {
        const host = new URL(url).hostname.replace(/^www\./, "");
        const { data, error } = await admin.from("prospect_leads").insert({
          campaign_id,
          company_name: title.substring(0, 200),
          website: url,
          enriched_data: { search_description: r.description, source_url: url, host },
          source: "search",
          status: "new",
        }).select().maybeSingle();

        if (!error && data) inserted.push(data);
      } catch (e) {
        console.warn("skip result:", e);
      }
    }

    return new Response(JSON.stringify({ success: true, found: results.length, inserted: inserted.length, leads: inserted }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("prospect-search error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
