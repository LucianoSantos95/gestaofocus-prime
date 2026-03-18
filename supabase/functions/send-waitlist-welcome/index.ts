import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const ALLOWED_ORIGINS = [
  "https://focusinteligente.com.br",
  "https://www.focusinteligente.com.br",
  "https://gestaofocus-prime.lovable.app",
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("origin") || "";
  const isAllowed = ALLOWED_ORIGINS.some((o) => origin === o) || origin.includes("lovable.app");
  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  };
}

interface WaitlistRequest {
  fullName: string;
  email: string;
  mainChallenge?: string;
  source?: string;
}

// HTML escape function to prevent XSS attacks
const escapeHtml = (str: string): string => {
  return str.replace(/[&<>"']/g, (match) => {
    const escapeMap: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return escapeMap[match] || match;
  });
};

// Validate that input doesn't contain suspicious patterns
const validateInput = (str: string): boolean => {
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /onclick/i,
    /onerror/i,
    /onload/i,
    /onmouseover/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
  ];
  return !suspiciousPatterns.some(pattern => pattern.test(str));
};

const getWelcomeEmailHtml = (fullName: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); border-radius: 16px; border: 1px solid #334155;">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px 40px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; font-weight: bold; color: #f8fafc;">
                Focus Inteligente
              </h1>
              <div style="width: 60px; height: 4px; background: linear-gradient(90deg, #8b5cf6, #06b6d4); margin: 16px auto 0; border-radius: 2px;"></div>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 20px 40px 40px 40px;">
              <h2 style="margin: 0 0 16px 0; font-size: 24px; color: #f8fafc;">
                Você está na lista! 🎉
              </h2>
              
              <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.6; color: #cbd5e1;">
                Olá, <strong style="color: #f8fafc;">${fullName}</strong>!
              </p>
              
              <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.6; color: #cbd5e1;">
                Bem-vindo(a) à Focus Pro! Seu interesse foi registrado com sucesso e você será um dos primeiros a saber sobre o lançamento.
              </p>
              
              <!-- Benefits Box -->
              <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                <h3 style="margin: 0 0 16px 0; font-size: 18px; color: #a78bfa;">
                  O que você vai receber:
                </h3>
                <ul style="margin: 0; padding: 0; list-style: none; color: #cbd5e1;">
                  <li style="padding: 8px 0; display: flex; align-items: center;">
                    <span style="color: #10b981; margin-right: 12px;">✓</span>
                    Acesso antecipado à plataforma
                  </li>
                  <li style="padding: 8px 0; display: flex; align-items: center;">
                    <span style="color: #10b981; margin-right: 12px;">✓</span>
                    30% de desconto no lançamento
                  </li>
                  <li style="padding: 8px 0; display: flex; align-items: center;">
                    <span style="color: #10b981; margin-right: 12px;">✓</span>
                    Conteúdos exclusivos sobre produtividade
                  </li>
                  <li style="padding: 8px 0; display: flex; align-items: center;">
                    <span style="color: #10b981; margin-right: 12px;">✓</span>
                    Novidades em primeira mão
                  </li>
                </ul>
              </div>
              
              <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 1.6; color: #cbd5e1;">
                Enquanto isso, continue acompanhando nosso conteúdo sobre gestão empresarial e produtividade!
              </p>
              
              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://focusinteligente.com.br" 
                       style="display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%); color: #ffffff; text-decoration: none; font-weight: 600; font-size: 16px; border-radius: 8px;">
                      Visitar o site
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; border-top: 1px solid #334155; text-align: center;">
              <p style="margin: 0 0 8px 0; font-size: 14px; color: #64748b;">
                Focus Inteligente — Gestão empresarial com Notion e IA
              </p>
              <p style="margin: 0; font-size: 12px; color: #475569;">
                © 2024 Focus Inteligente. Todos os direitos reservados.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

// Get client IP from request headers
const getClientIP = (req: Request): string => {
  // Try various headers that might contain the real IP
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIP = req.headers.get("x-real-ip");
  if (realIP) {
    return realIP.trim();
  }
  const cfConnectingIP = req.headers.get("cf-connecting-ip");
  if (cfConnectingIP) {
    return cfConnectingIP.trim();
  }
  // Fallback to a generic identifier if no IP found
  return "unknown";
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  // Get client IP for rate limiting
  const clientIP = getClientIP(req);

  // Create Supabase client early for rate limiting check
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  // Check rate limit: max 5 requests per hour per IP
  const { data: rateLimitAllowed, error: rateLimitError } = await supabase.rpc(
    "check_rate_limit",
    {
      p_ip_address: clientIP,
      p_endpoint: "send-waitlist-welcome",
      p_max_requests: 5,
      p_window_minutes: 60
    }
  );

  if (rateLimitError) {
    console.error("Rate limit check error:", rateLimitError);
    // Continue if rate limit check fails (fail open for user experience)
  } else if (rateLimitAllowed === false) {
    console.warn(`Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ error: "Muitas tentativas. Tente novamente mais tarde." }),
      { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    // Check for empty body
    const contentLength = req.headers.get("content-length");
    if (!contentLength || contentLength === "0") {
      return new Response(
        JSON.stringify({ error: "Request body is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body = await req.json();
    const { fullName, email, mainChallenge, source = "focus-pro" }: WaitlistRequest = body;

    // Validate required fields
    if (!fullName || !email) {
      return new Response(
        JSON.stringify({ error: "Nome e email são obrigatórios" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate input for suspicious content (XSS prevention)
    if (!validateInput(fullName)) {
      console.warn("Suspicious fullName input detected:", fullName);
      return new Response(
        JSON.stringify({ error: "Nome contém caracteres inválidos" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Sanitize fullName for email template (escape HTML)
    const sanitizedFullName = escapeHtml(fullName.trim());

    // Supabase client already created above for rate limiting

    // Insert into waitlist
    const { error: dbError } = await supabase.from("waitlist").insert({
      email: email.trim().toLowerCase(),
      full_name: fullName.trim(),
      main_challenge: mainChallenge?.trim() || null,
      source: source,
      interest: "focus-pro",
      wants_trial: true,
    });

    // Check for duplicate email
    if (dbError) {
      if (dbError.code === "23505") {
        // Email already exists - still return success but don't send another email
        console.log("Email already in waitlist:", email);
        return new Response(
          JSON.stringify({ success: true, message: "Email já cadastrado" }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw dbError;
    }

    // Send welcome email
    // TODO: Alterar para comercial@focusinteligente.com.br após verificar domínio no Resend
    const emailResponse = await resend.emails.send({
      from: "Focus Inteligente <onboarding@resend.dev>",
      to: [email],
      subject: "Você está na lista! 🎉 Bem-vindo(a) à Focus Pro",
      html: getWelcomeEmailHtml(sanitizedFullName),
    });

    console.log("Welcome email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Cadastrado com sucesso" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in send-waitlist-welcome function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Erro interno" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
