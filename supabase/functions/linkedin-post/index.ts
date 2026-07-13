import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "https://esm.sh/zod@3.23.8";

const GATEWAY = "https://connector-gateway.lovable.dev/linkedin";
const BASE_SITE = "https://focusinteligente.com.br";

const BodySchema = z.object({
  slug: z.string().min(1).max(200),
  title: z.string().min(1).max(300),
  summary: z.string().min(1).max(1200),
});

async function requireAdmin(req: Request) {
  const auth = req.headers.get("Authorization");
  if (!auth) return { error: "Unauthorized", status: 401 };
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,
    { global: { headers: { Authorization: auth } } },
  );
  const { data: userData, error: userErr } = await supabase.auth.getUser();
  if (userErr || !userData?.user) return { error: "Unauthorized", status: 401 };
  const { data: isAdmin } = await supabase.rpc("has_role", {
    _user_id: userData.user.id,
    _role: "admin",
  });
  if (!isAdmin) return { error: "Forbidden", status: 403 };
  return { userId: userData.user.id, auth };
}

async function liFetch(path: string, init?: RequestInit) {
  const res = await fetch(`${GATEWAY}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${Deno.env.get("LOVABLE_API_KEY")}`,
      "X-Connection-Api-Key": Deno.env.get("LINKEDIN_API_KEY")!,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
  const body = await res.text();
  if (!res.ok) {
    throw new Error(`LinkedIn ${res.status}: ${body}`);
  }
  return body ? JSON.parse(body) : {};
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const gate = await requireAdmin(req);
    if ("error" in gate) {
      return new Response(JSON.stringify({ error: gate.error }), {
        status: gate.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const { slug, title, summary } = parsed.data;
    const url = `${BASE_SITE}${slug.startsWith("/") ? slug : `/${slug}`}`;

    // Get author URN
    const me = await liFetch("/v2/userinfo", { method: "GET" });
    const authorUrn = `urn:li:person:${me.sub}`;

    const text = `${title}\n\n${summary}\n\nLeia o artigo: ${url}\n\n#gestao #pme #consultoria #agencias`;

    const postBody = {
      author: authorUrn,
      lifecycleState: "PUBLISHED",
      specificContent: {
        "com.linkedin.ugc.ShareContent": {
          shareCommentary: { text },
          shareMediaCategory: "ARTICLE",
          media: [{ status: "READY", originalUrl: url }],
        },
      },
      visibility: { "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" },
    };

    let linkedinUrn: string | null = null;
    let status = "published";
    let errorMessage: string | null = null;

    try {
      const posted = await liFetch("/v2/ugcPosts", {
        method: "POST",
        body: JSON.stringify(postBody),
        headers: { "X-Restli-Protocol-Version": "2.0.0" },
      });
      linkedinUrn = posted.id ?? null;
    } catch (e) {
      status = "failed";
      errorMessage = e instanceof Error ? e.message : String(e);
    }

    // Log to DB
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: gate.auth } } },
    );
    await supabase.from("linkedin_posts").insert({
      blog_slug: slug,
      blog_title: title,
      linkedin_urn: linkedinUrn,
      posted_by: gate.userId,
      status,
      error_message: errorMessage,
    });

    if (status === "failed") {
      return new Response(JSON.stringify({ error: errorMessage }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true, urn: linkedinUrn }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("linkedin-post error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
