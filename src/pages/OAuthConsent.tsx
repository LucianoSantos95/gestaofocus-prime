import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

// Typed local wrapper for the beta supabase.auth.oauth namespace.
type OAuthApi = {
  getAuthorizationDetails: (id: string) => Promise<{
    data: { client?: { name?: string; client_uri?: string }; redirect_url?: string; redirect_to?: string; scopes?: string[] } | null;
    error: { message: string } | null;
  }>;
  approveAuthorization: (id: string) => Promise<{
    data: { redirect_url?: string; redirect_to?: string } | null;
    error: { message: string } | null;
  }>;
  denyAuthorization: (id: string) => Promise<{
    data: { redirect_url?: string; redirect_to?: string } | null;
    error: { message: string } | null;
  }>;
};

function oauthApi(): OAuthApi {
  return (supabase.auth as unknown as { oauth: OAuthApi }).oauth;
}

export default function OAuthConsent() {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) {
        setError("Parâmetro authorization_id ausente.");
        return;
      }
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        window.location.href = "/login?next=" + encodeURIComponent(next);
        return;
      }
      const { data, error } = await oauthApi().getAuthorizationDetails(authorizationId);
      if (!active) return;
      if (error) return setError(error.message);
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) {
        window.location.href = immediate;
        return;
      }
      setDetails(data);
    })();
    return () => {
      active = false;
    };
  }, [authorizationId]);

  async function decide(approve: boolean) {
    setBusy(true);
    const api = oauthApi();
    const { data, error } = approve
      ? await api.approveAuthorization(authorizationId)
      : await api.denyAuthorization(authorizationId);
    if (error) {
      setBusy(false);
      return setError(error.message);
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      return setError("O servidor de autorização não retornou uma URL de redirecionamento.");
    }
    window.location.href = target;
  }

  const clientName = details?.client?.name ?? "um aplicativo";

  return (
    <>
      <SEOHead
        title="Autorizar acesso · Focus Gestão"
        description="Autorizar aplicativo a acessar sua conta Focus."
        canonical="https://focusinteligente.com.br/.lovable/oauth/consent"
        noindex
      />
      <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-xl">
          {error ? (
            <>
              <h1 className="text-xl font-semibold text-foreground mb-2">Não foi possível carregar</h1>
              <p className="text-sm text-muted-foreground">{error}</p>
            </>
          ) : !details ? (
            <p className="text-sm text-muted-foreground">Carregando…</p>
          ) : (
            <>
              <h1 className="text-xl font-semibold text-foreground mb-2">
                Conectar <span className="text-primary">{clientName}</span>
              </h1>
              <p className="text-sm text-muted-foreground mb-6">
                Isso permite que <strong>{clientName}</strong> use o Focus MCP em seu nome, com acesso às
                ferramentas expostas pelo servidor.
              </p>

              {Array.isArray(details.scopes) && details.scopes.length > 0 && (
                <ul className="text-xs text-muted-foreground bg-muted/40 border border-border rounded-lg p-3 mb-6 space-y-1">
                  {details.scopes.map((s: string) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              )}

              <div className="flex gap-3">
                <Button className="flex-1" disabled={busy} onClick={() => decide(true)}>
                  Autorizar
                </Button>
                <Button className="flex-1" variant="outline" disabled={busy} onClick={() => decide(false)}>
                  Recusar
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
