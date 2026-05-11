import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { z } from 'zod';
import { trackEvent } from '@/lib/analytics';
import { Loader2 } from 'lucide-react';
import GoogleSignInButton from '@/components/auth/GoogleSignInButton';

const loginSchema = z.object({
  email: z.string().trim().email('Email inválido').max(255),
  password: z.string().min(1, 'Senha é obrigatória'),
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) navigate('/dashboard');
    });
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      loginSchema.parse({ email, password });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
        return;
      }
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

    if (error) {
      toast.error(error.message.includes('Invalid login credentials') ? 'Email ou senha incorretos' : error.message);
      setLoading(false);
      return;
    }

    trackEvent('login', { event_category: 'authentication', event_label: 'email_login' });
    toast.success('Login realizado com sucesso!');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/8 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <img src="/lovable-uploads/focus-logo.png" alt="Focus" className="h-10 mx-auto" />
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Bem-vindo de Volta</h1>
          <p className="text-foreground-muted mt-2">Acesse seus projetos exclusivos e nossa biblioteca de gestão.</p>
        </div>

        <div className="rounded-2xl border border-card-border bg-background-elevated p-8">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label className="text-foreground-muted">Email</Label>
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                className="bg-background border-card-border text-foreground"
              />
            </div>

            <div>
              <Label className="text-foreground-muted">Senha</Label>
              <Input
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-background border-card-border text-foreground"
              />
            </div>

            <div className="text-right">
              <Link to="/auth/forgot-password" className="text-sm text-primary hover:underline">
                Esqueceu a senha?
              </Link>
            </div>

            <Button type="submit" disabled={loading} className="btn-hero w-full">
              {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>

          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-card-border" />
            <span className="text-xs text-foreground-muted">ou</span>
            <div className="h-px flex-1 bg-card-border" />
          </div>
          <GoogleSignInButton redirectAfterAuth="/dashboard" />

          <div className="mt-6 text-center text-sm">
            <p className="text-foreground-muted">
              Não tem uma conta?{' '}
              <Link to="/auth/signup" className="text-primary hover:underline font-medium">
                Criar conta gratuita
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
