import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Loader2, TrendingUp, MousePointerClick, Eye, ArrowUpRight } from "lucide-react";

interface Row {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface Data {
  period: { startDate: string; endDate: string };
  siteUrl: string;
  queries: Row[];
  pages: Row[];
}

export default function AdminSeo() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) {
        setAuthorized(false);
        setLoading(false);
        return;
      }
      const { data: adminCheck } = await supabase.rpc("has_role", {
        _user_id: userData.user.id,
        _role: "admin",
      });
      if (!adminCheck) {
        setAuthorized(false);
        setLoading(false);
        return;
      }
      setAuthorized(true);
      const { data: res, error: fnErr } = await supabase.functions.invoke("seo-console");
      if (fnErr) {
        setError(fnErr.message);
      } else {
        setData(res as Data);
      }
      setLoading(false);
    })();
  }, []);

  if (authorized === false) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <Card className="p-8 max-w-md text-center">
          <h1 className="text-2xl font-bold mb-3">Acesso restrito</h1>
          <p className="text-foreground-muted">Este painel é apenas para administradores.</p>
          <a href="/login?next=/admin/seo" className="text-primary underline mt-4 inline-block">Fazer login</a>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <Helmet>
        <title>Admin · SEO Console</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp className="w-7 h-7 text-primary" />
          <h1 className="text-3xl font-bold">Search Console — últimos 28 dias</h1>
        </div>
        <p className="text-foreground-muted mb-8">
          Queries e páginas com impressão no Google. Priorize reescrever títulos das
          páginas com muita impressão e CTR baixo.
        </p>

        {loading && (
          <div className="flex items-center gap-2 text-foreground-muted">
            <Loader2 className="w-5 h-5 animate-spin" /> Carregando dados do Search Console…
          </div>
        )}

        {error && (
          <Card className="p-6 border-destructive/50">
            <p className="text-destructive font-semibold">Erro: {error}</p>
          </Card>
        )}

        {data && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MousePointerClick className="w-5 h-5" /> Top queries
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-card-border text-left text-foreground-muted">
                      <th className="py-2">Query</th>
                      <th className="py-2 text-right">Cliques</th>
                      <th className="py-2 text-right">Impr.</th>
                      <th className="py-2 text-right">CTR</th>
                      <th className="py-2 text-right">Pos.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.queries.map((r, i) => (
                      <tr key={i} className="border-b border-card-border/40">
                        <td className="py-2 pr-2">{r.keys[0]}</td>
                        <td className="py-2 text-right">{r.clicks}</td>
                        <td className="py-2 text-right">{r.impressions}</td>
                        <td className="py-2 text-right">{(r.ctr * 100).toFixed(1)}%</td>
                        <td className="py-2 text-right">{r.position.toFixed(1)}</td>
                      </tr>
                    ))}
                    {data.queries.length === 0 && (
                      <tr><td colSpan={5} className="py-6 text-center text-foreground-muted">Sem dados no período.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5" /> Top páginas
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-card-border text-left text-foreground-muted">
                      <th className="py-2">Página</th>
                      <th className="py-2 text-right">Cliques</th>
                      <th className="py-2 text-right">Impr.</th>
                      <th className="py-2 text-right">CTR</th>
                      <th className="py-2 text-right">Pos.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.pages.map((r, i) => {
                      const path = r.keys[0].replace(data.siteUrl.replace(/\/$/, ""), "") || "/";
                      return (
                        <tr key={i} className="border-b border-card-border/40">
                          <td className="py-2 pr-2">
                            <a href={r.keys[0]} target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                              {path} <ArrowUpRight className="w-3 h-3" />
                            </a>
                          </td>
                          <td className="py-2 text-right">{r.clicks}</td>
                          <td className="py-2 text-right">{r.impressions}</td>
                          <td className="py-2 text-right">{(r.ctr * 100).toFixed(1)}%</td>
                          <td className="py-2 text-right">{r.position.toFixed(1)}</td>
                        </tr>
                      );
                    })}
                    {data.pages.length === 0 && (
                      <tr><td colSpan={5} className="py-6 text-center text-foreground-muted">Sem dados no período.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
