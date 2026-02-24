import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface WelcomeEmailRequest {
  email: string;
  fullName: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, fullName } = (await req.json()) as WelcomeEmailRequest;

    if (!email || !fullName) {
      return new Response(
        JSON.stringify({ error: "Email and fullName are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const firstName = fullName.split(" ")[0];

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#080b10;font-family:'Inter',Arial,sans-serif;color:#e8ecf4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#080b10;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#111827;border-radius:16px;border:1px solid #1e293b;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="padding:32px 40px 24px;text-align:center;background:linear-gradient(135deg,rgba(96,165,250,0.1),rgba(147,197,253,0.05));">
              <h1 style="margin:0;font-size:24px;font-weight:700;color:#e8ecf4;">
                Bem-vindo à Focus, ${firstName}! 🚀
              </h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:24px 40px 32px;">
              <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#94a3b8;">
                Sua conta foi criada com sucesso. Agora você tem acesso ao seu painel exclusivo onde poderá acompanhar seus projetos e acessar nossa biblioteca de recursos.
              </p>
              <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#94a3b8;">
                Aqui está o que você pode fazer agora:
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:12px 16px;background-color:#0f172a;border-radius:8px;margin-bottom:8px;">
                    <p style="margin:0;font-size:14px;color:#e8ecf4;">✅ Acessar seu painel de projetos</p>
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#0f172a;border-radius:8px;">
                    <p style="margin:0;font-size:14px;color:#e8ecf4;">✅ Explorar a biblioteca de recursos</p>
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#0f172a;border-radius:8px;">
                    <p style="margin:0;font-size:14px;color:#e8ecf4;">✅ Entrar em contato com nosso suporte</p>
                  </td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://gestaofocus-prime.lovable.app/dashboard" style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#60a5fa,#93c5fd);color:#0f172a;font-size:16px;font-weight:600;text-decoration:none;border-radius:12px;">
                      Acessar meu Painel
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #1e293b;text-align:center;">
              <p style="margin:0;font-size:12px;color:#64748b;">
                Focus Gestão Inteligente — contato@focusinteligente.com.br
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Focus Gestão <onboarding@resend.dev>",
        to: [email],
        subject: `Bem-vindo à Focus, ${firstName}! 🚀`,
        html: htmlContent,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend API error:", data);
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: data }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
