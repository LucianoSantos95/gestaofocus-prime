import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";

function safeNext(raw: string | null): string {
  if (!raw) return "/";
  try {
    // Only allow same-origin relative paths beginning with a single slash.
    if (!raw.startsWith("/") || raw.startsWith("//")) return "/";
    return raw;
  } catch {
    return "/";
  }
}

export default function Login() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const next = safeNext(params.get("next"));

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate(next, { replace: true });
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session) navigate(next, { replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate, next]);

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/login?next=${encodeURIComponent(next)}`,
          },
        });
        if (error) throw error;
        toast({ title: "Confira seu email", description: "Enviamos um link de confirmação." });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (err: any) {
      toast({ title: "Erro ao entrar", description: err.message ?? String(err), variant: "destructive" });
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogle() {
    setBusy(true);
    try {
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: `${window.location.origin}/login?next=${encodeURIComponent(next)}`,
      });
      if (result.error) throw result.error;
      // If redirected, browser navigates away. Otherwise session is set and effect runs.
    } catch (err: any) {
      toast({ title: "Erro ao entrar com Google", description: err.message ?? String(err), variant: "destructive" });
      setBusy(false);
    }
  }

  return (
    <>
      <SEOHead
        title="Entrar · Focus Gestão"
        description="Acesse sua conta Focus Gestão."
        canonicalUrl="https://focusinteligente.com.br/login"
        noindex
      />
      <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-sm bg-card border border-border rounded-2xl p-8 shadow-xl">
          <h1 className="text-2xl font-semibold text-foreground mb-1">
            {mode === "signin" ? "Entrar" : "Criar conta"}
          </h1>
          <p className="text-sm text-muted-foreground mb-6">
            {mode === "signin" ? "Acesse sua conta Focus." : "Cadastre-se em segundos."}
          </p>

          <Button
            type="button"
            variant="outline"
            className="w-full mb-4"
            onClick={handleGoogle}
            disabled={busy}
          >
            Continuar com Google
          </Button>

          <div className="flex items-center gap-3 my-4 text-xs text-muted-foreground">
            <div className="flex-1 h-px bg-border" />
            ou
            <div className="flex-1 h-px bg-border" />
          </div>

          <form onSubmit={handleEmail} className="space-y-3">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button type="submit" className="w-full" disabled={busy}>
              {mode === "signin" ? "Entrar" : "Criar conta"}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-6 text-center">
            {mode === "signin" ? (
              <>Não tem conta?{" "}
                <button className="text-primary underline" onClick={() => setMode("signup")}>
                  Cadastre-se
                </button>
              </>
            ) : (
              <>Já tem conta?{" "}
                <button className="text-primary underline" onClick={() => setMode("signin")}>
                  Entrar
                </button>
              </>
            )}
          </p>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            <Link to="/" className="hover:text-foreground">← Voltar ao site</Link>
          </p>
        </div>
      </main>
    </>
  );
}
