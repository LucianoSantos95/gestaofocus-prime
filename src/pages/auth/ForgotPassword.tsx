import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { z } from 'zod';
import { ArrowLeft } from 'lucide-react';

const emailSchema = z.object({
  email: z.string().trim().email('Email inválido').max(255),
});

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate input
    try {
      emailSchema.parse({ email });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
        return;
      }
    }

    setLoading(true);

    const redirectUrl = `${window.location.origin}/auth/reset-password`;

    const { error } = await supabase.auth.resetPasswordForEmail(
      email.trim().toLowerCase(),
      {
        redirectTo: redirectUrl,
      }
    );

    if (error) {
      toast.error(error.message);
      setLoading(false);
      return;
    }

    toast.success('Email de recuperação enviado!');
    setSent(true);
    setLoading(false);
  };

  return (
    <div className="min-h-[100dvh] flex items-center justify-center px-4 py-8 md:py-12 bg-gradient-to-br from-background to-muted/30">
      <Card className="w-full max-w-md md:max-w-lg">
        <CardHeader className="text-center">
          <Link to="/" className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/focus-logo.png" 
              alt="Focus" 
              className="h-10"
            />
          </Link>
          <CardTitle className="text-2xl">Recuperar Senha</CardTitle>
          <CardDescription>
            {sent 
              ? 'Enviamos um link de recuperação para seu email' 
              : 'Digite seu email para receber o link de recuperação'}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {!sent ? (
            <form onSubmit={handleReset} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  maxLength={255}
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full"
                size="lg"
              >
                {loading ? 'Enviando...' : 'Enviar Link de Recuperação'}
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.
              </p>
              <Button
                onClick={() => setSent(false)}
                variant="outline"
                className="w-full"
              >
                Enviar novamente
              </Button>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link 
              to="/auth/login" 
              className="text-sm text-primary hover:underline inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
