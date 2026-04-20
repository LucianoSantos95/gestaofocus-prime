// Webhook do Resend: processa eventos (delivered, opened, bounced, complained) e respostas inbound
// Configurar no Resend: https://[project-ref].functions.supabase.co/prospect-resend-webhook
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const admin = createClient(SUPABASE_URL, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

    const event = await req.json();
    const type = event.type || event.event;
    const data = event.data || event;
    const externalId = data.email_id || data.id;

    console.log("Resend webhook event:", type, externalId);

    if (!externalId) {
      return new Response(JSON.stringify({ ok: true, ignored: "no email_id" }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const { data: msg } = await admin.from("prospect_messages").select("id, lead_id, campaign_id").eq("external_id", externalId).maybeSingle();
    if (!msg) {
      return new Response(JSON.stringify({ ok: true, ignored: "message not found" }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const now = new Date().toISOString();
    const updates: any = {};
    const leadUpdates: any = {};

    if (type === "email.delivered") {
      updates.status = "delivered";
      updates.delivered_at = now;
    } else if (type === "email.opened") {
      updates.status = "opened";
      updates.opened_at = now;
    } else if (type === "email.bounced") {
      updates.status = "bounced";
      leadUpdates.status = "bounced";
    } else if (type === "email.complained") {
      updates.status = "bounced";
      leadUpdates.status = "discarded";
    } else if (type === "email.replied" || type === "inbound.email") {
      // reply inbound
      const replyContent = data.text || data.html || data.body || "";
      const replyFrom = data.from?.email || data.from || "";

      // registra inbound
      await admin.from("prospect_messages").insert({
        lead_id: msg.lead_id,
        campaign_id: msg.campaign_id,
        direction: "inbound",
        subject: data.subject || "Re:",
        body_text: replyContent.substring(0, 8000),
        from_email: replyFrom,
        to_email: data.to?.[0] || data.to || "",
        status: "received",
        external_id: data.email_id || null,
      });

      // marca lead como respondendo
      await admin.from("prospect_leads").update({
        status: "replying",
        last_contacted_at: now,
      }).eq("id", msg.lead_id);

      // pausa cadência (cancela jobs pendentes)
      await admin.from("prospect_sequence_jobs").update({ status: "skipped", processed_at: now, last_error: "lead replied" })
        .eq("lead_id", msg.lead_id).eq("status", "pending");

      // dispara IA pra responder automaticamente
      try {
        await fetch(`${SUPABASE_URL}/functions/v1/prospect-send-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")}`,
          },
          body: JSON.stringify({
            lead_id: msg.lead_id,
            is_reply: true,
            reply_content: replyContent.substring(0, 4000),
            source: "webhook",
          }),
        });
      } catch (e) {
        console.error("auto-reply failed:", e);
      }
    }

    if (Object.keys(updates).length > 0) {
      await admin.from("prospect_messages").update(updates).eq("id", msg.id);
    }
    if (Object.keys(leadUpdates).length > 0) {
      await admin.from("prospect_leads").update(leadUpdates).eq("id", msg.lead_id);
    }

    return new Response(JSON.stringify({ ok: true, type, processed: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("webhook error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
