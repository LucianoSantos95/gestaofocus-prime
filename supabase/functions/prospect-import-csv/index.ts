// Recebe array de leads parseado de CSV no front e insere no banco
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

    const { campaign_id, leads } = await req.json();
    if (!campaign_id || !Array.isArray(leads)) {
      return new Response(JSON.stringify({ error: "campaign_id e leads[] obrigatórios" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const valid = leads.filter((l: any) => l.company_name).slice(0, 500).map((l: any) => ({
      campaign_id,
      company_name: String(l.company_name).substring(0, 200),
      website: l.website ? String(l.website).substring(0, 500) : null,
      email: l.email ? String(l.email).toLowerCase().substring(0, 255) : null,
      contact_name: l.contact_name ? String(l.contact_name).substring(0, 100) : null,
      contact_role: l.contact_role ? String(l.contact_role).substring(0, 100) : null,
      industry: l.industry ? String(l.industry).substring(0, 100) : null,
      location: l.location ? String(l.location).substring(0, 100) : null,
      source: "csv",
      status: "new",
    }));

    if (valid.length === 0) {
      return new Response(JSON.stringify({ error: "Nenhum lead válido (company_name obrigatório)" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const { data, error } = await admin.from("prospect_leads").insert(valid).select();
    if (error) throw error;

    return new Response(JSON.stringify({ success: true, inserted: data?.length || 0 }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("import-csv error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
