// Gera email personalizado com Gemini e envia via Resend
// Pode ser chamado: (1) pelo cron pra cadência, (2) manualmente pra resposta
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const RESEND_GATEWAY = "https://connector-gateway.lovable.dev/resend";
const AI_URL = "https://ai.gateway.lovable.dev/v1/chat/completions";

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function textToHtml(text: string, calendlyUrl: string, senderName: string): string {
  const paragraphs = text.split(/\n\n+/).map(p => `<p style="margin: 0 0 16px 0; line-height: 1.6;">${escapeHtml(p).replace(/\n/g, "<br>")}</p>`).join("");
  return `<!DOCTYPE html><html><body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px;">
${paragraphs}
<p style="margin: 20px 0 8px 0; line-height: 1.6;">Quer conversar 15 min? <a href="${escapeHtml(calendlyUrl)}" style="color: #1E40AF;">Agende aqui</a>.</p>
<p style="margin: 24px 0 0 0; color: #555;">Abraço,<br>${escapeHtml(senderName)}</p>
</body></html>`;
}

async function generateEmailContent(opts: {
  step: number;
  lead: any;
  campaign: any;
  history: any[];
  isReply?: boolean;
  replyContent?: string;
  apiKey: string;
}) {
  const { step, lead, campaign, history, isReply, replyContent, apiKey } = opts;

  const systemPrompt = `Você é ${campaign.sender_name}, especialista em sistemas operacionais sob medida para agências, consultorias e prestadores de serviço B2B no Brasil. Foco: tirar a operação do WhatsApp/planilhas e dar visibilidade real.

Tom de voz: ${campaign.tone_of_voice}

REGRAS CRÍTICAS:
- NUNCA mencione Notion. Posicionamento é "software proprietário sob medida".
- Português brasileiro, natural, como humano escreve.
- Sem jargão de marketing. Sem "espero que esteja bem". Sem emoji excessivo.
- Curto: 80-120 palavras no máximo.
- Sem assinatura no corpo (será adicionada depois).
- Sem "Att," ou "Abraço" no final (adicionado depois).
- Foco em UMA dor específica do prospect, não vomitar serviços.`;

  let userPrompt = "";

  if (isReply) {
    const historyStr = history.map(m => `[${m.direction === "outbound" ? "EU" : "ELES"}]: ${m.body_text || m.subject}`).join("\n\n");
    userPrompt = `Lead respondeu nosso email. Gere resposta breve e útil.

Empresa: ${lead.company_name}
Decisor: ${lead.contact_name || "—"} (${lead.contact_role || "—"})
Dores identificadas: ${(lead.pain_points || []).join("; ")}

Histórico da conversa:
${historyStr}

Última mensagem deles:
"${replyContent}"

Calendly: ${campaign.calendly_url}

Responda objetivamente. Se houve interesse, empurre pra conversa de 15 min no Calendly. Se houve objeção, responda com curiosidade e ofereça caso/exemplo. Se pediu informação, dê resposta direta. Mantenha tom humano.`;
  } else {
    const stepGuide = {
      1: `EMAIL 1 (cold). Apresentação rápida + gancho personalizado + pergunta aberta.
Estrutura:
- Linha 1-2: Gancho ESPECÍFICO sobre a empresa (use o personalized_hook)
- Linha 3-4: O que a gente faz, em 1 frase, conectando com a dor
- Linha 5: Pergunta curta convidando conversa`,
      2: `EMAIL 2 (follow-up, 3 dias depois). Aborda dor específica + mini case ou dado.
Estrutura:
- Reconheça que ainda não responderam (sem culpa)
- Traga insight novo: dado, exemplo de cliente parecido, ou pergunta provocativa
- CTA suave pra conversa`,
      3: `EMAIL 3 (última tentativa, 5 dias depois). Curto, honesto, "última chance".
Estrutura:
- Frase direta tipo "última vez que escrevo"
- Resumo do valor em 1 linha
- Pergunta binária fácil de responder (sim/não/depois)`,
    }[step] || "";

    userPrompt = `Gere ${stepGuide}

Empresa: ${lead.company_name}
Setor: ${lead.industry || "—"}
Decisor: ${lead.contact_name || "—"} (${lead.contact_role || "—"})
Dores prováveis: ${(lead.pain_points || []).join("; ")}
Gancho personalizado: ${lead.personalized_hook || "—"}

Devolva também um assunto curto (3-7 palavras), específico, sem clickbait.`;
  }

  const res = await fetch(AI_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash",
      messages: [{ role: "system", content: systemPrompt }, { role: "user", content: userPrompt }],
      tools: [{
        type: "function",
        function: {
          name: "compose_email",
          description: "Compõe email de prospecção",
          parameters: {
            type: "object",
            properties: {
              subject: { type: "string", description: "Assunto do email (3-7 palavras)" },
              body: { type: "string", description: "Corpo do email em texto puro, com quebras de linha duplas entre parágrafos. SEM assinatura, SEM CTA do calendly (serão adicionados)." },
            },
            required: ["subject", "body"],
            additionalProperties: false,
          },
        },
      }],
      tool_choice: { type: "function", function: { name: "compose_email" } },
    }),
  });

  if (!res.ok) {
    const t = await res.text();
    console.error("AI compose error:", res.status, t);
    if (res.status === 429) throw new Error("RATE_LIMIT");
    if (res.status === 402) throw new Error("NO_CREDITS");
    throw new Error("AI compose failed");
  }

  const data = await res.json();
  const args = JSON.parse(data.choices?.[0]?.message?.tool_calls?.[0]?.function?.arguments || "{}");
  return { subject: args.subject || "Conversa rápida", body: args.body || "" };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY não configurada");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY não configurada");

    const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

    // pode vir do cron (sem auth user) ou do front (com auth admin)
    const body = await req.json();
    const { lead_id, sequence_step, is_reply, reply_content, source } = body;

    if (!lead_id) return new Response(JSON.stringify({ error: "lead_id obrigatório" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    // se chamado do front, exigir admin
    if (source !== "cron" && source !== "webhook") {
      const authHeader = req.headers.get("Authorization");
      if (!authHeader) return new Response(JSON.stringify({ error: "Não autorizado" }), { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      const userClient = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, { global: { headers: { Authorization: authHeader } } });
      const { data: { user } } = await userClient.auth.getUser();
      if (!user) return new Response(JSON.stringify({ error: "Não autenticado" }), { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      const { data: roleCheck } = await admin.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin").maybeSingle();
      if (!roleCheck) return new Response(JSON.stringify({ error: "Apenas admins" }), { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const { data: lead, error: leadErr } = await admin.from("prospect_leads").select("*, prospect_campaigns(*)").eq("id", lead_id).single();
    if (leadErr || !lead) throw new Error("Lead não encontrado");
    if (!lead.email) throw new Error("Lead sem email");

    const campaign = lead.prospect_campaigns;
    if (!campaign) throw new Error("Campanha não encontrada");

    // histórico
    const { data: history } = await admin.from("prospect_messages").select("*").eq("lead_id", lead_id).order("created_at", { ascending: true });

    // gera conteúdo
    const { subject, body: bodyText } = await generateEmailContent({
      step: sequence_step || 1,
      lead,
      campaign,
      history: history || [],
      isReply: is_reply,
      replyContent: reply_content,
      apiKey: LOVABLE_API_KEY,
    });

    const html = textToHtml(bodyText, campaign.calendly_url, campaign.sender_name);

    // envia via Resend
    const fromHeader = `${campaign.sender_name} <${campaign.sender_email}>`;
    const resendRes = await fetch(`${RESEND_GATEWAY}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: fromHeader,
        to: [lead.email],
        subject,
        html,
        reply_to: campaign.sender_email,
        tags: [
          { name: "campaign_id", value: campaign.id },
          { name: "lead_id", value: lead.id },
          { name: "sequence_step", value: String(sequence_step || (is_reply ? 99 : 1)) },
        ],
      }),
    });

    const resendData = await resendRes.json();

    if (!resendRes.ok) {
      console.error("Resend error:", resendRes.status, resendData);
      // registra falha
      await admin.from("prospect_messages").insert({
        lead_id,
        campaign_id: campaign.id,
        direction: "outbound",
        sequence_step: sequence_step || null,
        subject,
        body_text: bodyText,
        body_html: html,
        from_email: campaign.sender_email,
        to_email: lead.email,
        status: "failed",
        error_message: JSON.stringify(resendData).substring(0, 500),
      });
      return new Response(JSON.stringify({ error: "Falha ao enviar", details: resendData }), { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // registra sucesso
    await admin.from("prospect_messages").insert({
      lead_id,
      campaign_id: campaign.id,
      direction: "outbound",
      sequence_step: sequence_step || null,
      subject,
      body_text: bodyText,
      body_html: html,
      from_email: campaign.sender_email,
      to_email: lead.email,
      external_id: resendData.id,
      status: "sent",
      sent_at: new Date().toISOString(),
    });

    // atualiza lead
    const updates: any = {
      last_contacted_at: new Date().toISOString(),
      status: lead.status === "replying" ? "replying" : "contacted",
    };
    if (sequence_step) updates.current_sequence_step = sequence_step;
    await admin.from("prospect_leads").update(updates).eq("id", lead_id);

    return new Response(JSON.stringify({ success: true, message_id: resendData.id, subject }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("send-email error:", e);
    const msg = e instanceof Error ? e.message : "Erro";
    const status = msg === "RATE_LIMIT" ? 429 : msg === "NO_CREDITS" ? 402 : 500;
    return new Response(JSON.stringify({ error: msg }), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
