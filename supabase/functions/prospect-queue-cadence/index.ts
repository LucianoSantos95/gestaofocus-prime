// Quando um lead vira 'enriched' com email válido, agenda os 3 jobs da cadência
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

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) return new Response(JSON.stringify({ error: "Não autorizado" }), { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    const userClient = createClient(SUPABASE_URL, Deno.env.get("SUPABASE_ANON_KEY")!, { global: { headers: { Authorization: authHeader } } });
    const { data: { user } } = await userClient.auth.getUser();
    if (!user) return new Response(JSON.stringify({ error: "Não autenticado" }), { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    const { data: roleCheck } = await admin.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin").maybeSingle();
    if (!roleCheck) return new Response(JSON.stringify({ error: "Apenas admins" }), { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    const { lead_ids, campaign_id } = await req.json();
    if (!campaign_id) return new Response(JSON.stringify({ error: "campaign_id obrigatório" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    const { data: campaign } = await admin.from("prospect_campaigns").select("*").eq("id", campaign_id).single();
    if (!campaign) return new Response(JSON.stringify({ error: "Campanha não encontrada" }), { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    let query = admin.from("prospect_leads").select("id, email, status").eq("campaign_id", campaign_id).eq("status", "enriched").not("email", "is", null);
    if (Array.isArray(lead_ids) && lead_ids.length > 0) {
      query = query.in("id", lead_ids);
    }
    const { data: leads } = await query;

    if (!leads || leads.length === 0) {
      return new Response(JSON.stringify({ success: true, queued: 0, message: "Nenhum lead enriquecido com email" }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const now = new Date();
    const jobs: any[] = [];
    for (const lead of leads) {
      [1, 2, 3].forEach(step => {
        const delayHours = step === 1 ? campaign.email_1_delay_hours : step === 2 ? campaign.email_2_delay_hours : campaign.email_3_delay_hours;
        const scheduledFor = new Date(now.getTime() + delayHours * 3600 * 1000);
        jobs.push({
          lead_id: lead.id,
          campaign_id,
          sequence_step: step,
          scheduled_for: scheduledFor.toISOString(),
          status: "pending",
        });
      });
    }

    const { error: insErr } = await admin.from("prospect_sequence_jobs").insert(jobs);
    if (insErr) throw insErr;

    // marca leads como queued
    await admin.from("prospect_leads").update({ status: "queued" }).in("id", leads.map(l => l.id));

    return new Response(JSON.stringify({ success: true, leads_queued: leads.length, jobs_created: jobs.length }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("queue-cadence error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
