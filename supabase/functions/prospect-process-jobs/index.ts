// Cron: processa jobs pendentes da cadência. Roda a cada 10 min via pg_cron.
// Respeita daily_send_limit por campanha. Pula leads que já responderam.
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

    const now = new Date().toISOString();
    const { data: jobs } = await admin
      .from("prospect_sequence_jobs")
      .select("*, prospect_leads!inner(id, status, email), prospect_campaigns!inner(id, status, daily_send_limit)")
      .eq("status", "pending")
      .lte("scheduled_for", now)
      .limit(20);

    if (!jobs || jobs.length === 0) {
      return new Response(JSON.stringify({ processed: 0, message: "Nenhum job pendente" }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    let processed = 0, sent = 0, skipped = 0, failed = 0;

    for (const job of jobs) {
      processed++;
      const lead: any = (job as any).prospect_leads;
      const campaign: any = (job as any).prospect_campaigns;

      // pula se campanha pausada
      if (campaign.status !== "active") {
        await admin.from("prospect_sequence_jobs").update({ status: "skipped", processed_at: now, last_error: "campaign not active" }).eq("id", job.id);
        skipped++;
        continue;
      }

      // pula se lead respondeu, agendou ou foi descartado
      if (["replying", "booked", "lost", "discarded", "bounced"].includes(lead.status)) {
        await admin.from("prospect_sequence_jobs").update({ status: "skipped", processed_at: now, last_error: `lead status: ${lead.status}` }).eq("id", job.id);
        skipped++;
        continue;
      }

      // checa daily limit
      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);
      const { count } = await admin
        .from("prospect_messages")
        .select("*", { count: "exact", head: true })
        .eq("campaign_id", campaign.id)
        .eq("direction", "outbound")
        .eq("status", "sent")
        .gte("sent_at", startOfDay.toISOString());

      if ((count || 0) >= campaign.daily_send_limit) {
        // não falha o job, só posterga 1h
        const newSchedule = new Date(Date.now() + 3600 * 1000).toISOString();
        await admin.from("prospect_sequence_jobs").update({ scheduled_for: newSchedule, last_error: "daily limit reached, postponed" }).eq("id", job.id);
        skipped++;
        continue;
      }

      // marca processing
      await admin.from("prospect_sequence_jobs").update({ status: "processing", attempts: job.attempts + 1 }).eq("id", job.id);

      // chama send-email
      try {
        const sendRes = await fetch(`${SUPABASE_URL}/functions/v1/prospect-send-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")}`,
          },
          body: JSON.stringify({
            lead_id: lead.id,
            sequence_step: job.sequence_step,
            source: "cron",
          }),
        });

        if (sendRes.ok) {
          await admin.from("prospect_sequence_jobs").update({ status: "completed", processed_at: new Date().toISOString() }).eq("id", job.id);
          sent++;
        } else {
          const errText = await sendRes.text();
          const finalStatus = job.attempts >= 2 ? "failed" : "pending"; // 3 tentativas
          const newSchedule = finalStatus === "pending" ? new Date(Date.now() + 1800 * 1000).toISOString() : job.scheduled_for;
          await admin.from("prospect_sequence_jobs").update({
            status: finalStatus,
            scheduled_for: newSchedule,
            last_error: errText.substring(0, 500),
            processed_at: finalStatus === "failed" ? new Date().toISOString() : null,
          }).eq("id", job.id);
          failed++;
        }
      } catch (e) {
        const finalStatus = job.attempts >= 2 ? "failed" : "pending";
        await admin.from("prospect_sequence_jobs").update({
          status: finalStatus,
          last_error: String(e).substring(0, 500),
        }).eq("id", job.id);
        failed++;
      }
    }

    return new Response(JSON.stringify({ processed, sent, skipped, failed }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("process-jobs error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
