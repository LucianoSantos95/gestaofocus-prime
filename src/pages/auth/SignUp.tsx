import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { z } from 'zod';
import { trackEvent } from '@/lib/analytics';
import { Loader2 } from 'lucide-react';

const signupSchema = z.object({
  fullName: z.string().trim().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100),
  email: z.string().trim().email('Email inválido').max(255),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres').max(100),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      signupSchema.parse({ fullName, email, password, confirmPassword });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
        return;
      }
    }

    setLoading(true);

    const redirectUrl = `${window.location.origin}/dashboard`;

    const { error } = await supabase.auth.signUp({
      email: email.trim().toLowerCase(),
      password,
      options: {
        data: { full_name: fullName.trim() },
        emailRedirectTo: redirectUrl,
      },
    });

    if (error) {
      toast.error(error.message.includes('already registered') ? 'Este email já está cadastrado. Faça login.' : error.message);
      setLoading(false);
      return;
    }

    // Send welcome email (fire and forget)
    supabase.functions.invoke('send-welcome-email', {
      body: { email: email.trim().toLowerCase(), fullName: fullName.trim() },
    }).catch(console.error);

    trackEvent('signup', { event_category: 'authentication', event_label: 'email_signup' });

    toast.success('Conta criada com sucesso! Redirecionando...');
    setTimeout(() => navigate('/dashboard'), 1000);
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
          <h1 className="text-2xl font-bold text-foreground">Criar Conta</h1>
          <p className="text-foreground-muted mt-2">Entre no Focus Club e comece sua jornada de produtividade</p>
        </div>

        <div className="rounded-2xl border border-card-border bg-background-elevated p-8">
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <Label className="text-foreground-muted">Nome Completo *</Label>
              <Input
                type="text"
                placeholder="Seu nome"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                maxLength={100}
                className="bg-background border-card-border text-foreground"
              />
            </div>

            <div>
              <Label className="text-foreground-muted">Email *</Label>
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
              <Label className="text-foreground-muted">Senha *</Label>
              <Input
                type="password"
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                maxLength={100}
                className="bg-background border-card-border text-foreground"
              />
            </div>

            <div>
              <Label className="text-foreground-muted">Confirmar Senha *</Label>
              <Input
                type="password"
                placeholder="Digite a senha novamente"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="bg-background border-card-border text-foreground"
              />
            </div>

            <Button type="submit" disabled={loading} className="btn-hero w-full">
              {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              {loading ? 'Criando conta...' : 'Criar Conta Gratuita'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-foreground-muted">
              Já tem uma conta?{' '}
              <Link to="/auth/login" className="text-primary hover:underline font-medium">
                Fazer login
              </Link>
            </p>
          </div>

          <div className="mt-4 text-xs text-center text-foreground-muted">
            Ao criar uma conta, você concorda com nossos{' '}
            <Link to="/termos-uso" className="text-primary hover:underline">Termos de Uso</Link>{' '}e{' '}
            <Link to="/privacidade" className="text-primary hover:underline">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
