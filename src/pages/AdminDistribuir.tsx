import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Loader2, Linkedin, Send, CheckCircle2 } from "lucide-react";

interface BlogRoute {
  loc: string;
  lastmod?: string;
}

interface PostedLog {
  blog_slug: string;
  posted_at: string;
  status: string;
}

const slugToTitle = (slug: string) =>
  slug
    .replace(/^\/blog\//, "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

export default function AdminDistribuir() {
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [posts, setPosts] = useState<BlogRoute[]>([]);
  const [logs, setLogs] = useState<Record<string, PostedLog>>({});
  const [publishing, setPublishing] = useState<string | null>(null);
  const [summary, setSummary] = useState<Record<string, string>>({});

  useEffect(() => {
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) {
        setAuthorized(false);
        return;
      }
      const { data: adminCheck } = await supabase.rpc("has_role", {
        _user_id: userData.user.id,
        _role: "admin",
      });
      if (!adminCheck) {
        setAuthorized(false);
        return;
      }
      setAuthorized(true);

      const [routesRes, logsRes] = await Promise.all([
        fetch("/blog-routes.json").catch(() => null),
        supabase.from("linkedin_posts").select("blog_slug, posted_at, status").order("posted_at", { ascending: false }),
      ]);
      if (routesRes && routesRes.ok) {
        const routes: BlogRoute[] = await routesRes.json();
        setPosts(routes.filter((r) => r.loc.startsWith("/blog/")));
      } else {
        // Fallback: hard-coded top pillar posts
        setPosts([
          { loc: "/blog/notion-para-agencias-guia-completo-2026" },
          { loc: "/blog/ia-para-pmes-automatizar-processos" },
          { loc: "/blog/mapeamento-processos-agencias" },
          { loc: "/blog/metodo-pessoal-produtividade" },
        ]);
      }
      if (logsRes.data) {
        const map: Record<string, PostedLog> = {};
        for (const row of logsRes.data as PostedLog[]) {
          if (!map[row.blog_slug]) map[row.blog_slug] = row;
        }
        setLogs(map);
      }
    })();
  }, []);

  const publish = async (slug: string) => {
    setPublishing(slug);
    const title = slugToTitle(slug);
    const body = {
      slug,
      title,
      summary: summary[slug] || `Novo artigo no Focus: ${title}. Leia para colocar em prática hoje.`,
    };
    const { data, error } = await supabase.functions.invoke("linkedin-post", { body });
    setPublishing(null);
    if (error) {
      toast({ title: "Falha ao publicar", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Publicado no LinkedIn", description: (data as any)?.urn ?? "ok" });
    setLogs((prev) => ({ ...prev, [slug]: { blog_slug: slug, posted_at: new Date().toISOString(), status: "published" } }));
  };

  if (authorized === false) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <Card className="p-8 max-w-md text-center">
          <h1 className="text-2xl font-bold mb-3">Acesso restrito</h1>
          <a href="/login?next=/admin/distribuir" className="text-primary underline">Fazer login</a>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <Helmet>
        <title>Admin · Distribuir no LinkedIn</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Linkedin className="w-7 h-7 text-primary" />
          <h1 className="text-3xl font-bold">Distribuir posts no LinkedIn</h1>
        </div>
        <p className="text-foreground-muted mb-8">
          Publica o post do blog na conta LinkedIn conectada, com link canônico + hashtags fixas.
        </p>

        {authorized === null ? (
          <Loader2 className="w-6 h-6 animate-spin" />
        ) : (
          <div className="space-y-4">
            {posts.map((p) => {
              const already = logs[p.loc];
              return (
                <Card key={p.loc} className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold truncate">{slugToTitle(p.loc)}</p>
                      <a href={p.loc} target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline break-all">
                        {p.loc}
                      </a>
                      <Textarea
                        placeholder="Resumo/comentário (opcional) — 1-3 linhas que aparecem antes do link no LinkedIn"
                        className="mt-3 text-sm"
                        rows={2}
                        value={summary[p.loc] ?? ""}
                        onChange={(e) => setSummary((s) => ({ ...s, [p.loc]: e.target.value }))}
                      />
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      {already ? (
                        <span className="text-xs text-green-500 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> {new Date(already.posted_at).toLocaleDateString("pt-BR")}
                        </span>
                      ) : null}
                      <Button
                        size="sm"
                        onClick={() => publish(p.loc)}
                        disabled={publishing === p.loc}
                      >
                        {publishing === p.loc ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-1" /> Publicar
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
