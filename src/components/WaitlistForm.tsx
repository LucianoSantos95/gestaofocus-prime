import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { trackEvent } from '@/lib/analytics';

interface WaitlistFormProps {
  source?: 'landing' | 'blog' | 'popup';
  onSuccess?: () => void;
}

export function WaitlistForm({ source = 'landing', onSuccess }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [mainChallenge, setMainChallenge] = useState('');
  const [wantsTrial, setWantsTrial] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !fullName) {
      toast.error('Por favor, preencha seu nome e email');
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from('waitlist')
      .insert({
        email: email.trim().toLowerCase(),
        full_name: fullName.trim(),
        main_challenge: mainChallenge.trim() || null,
        wants_trial: wantsTrial,
        source,
      });

    if (error) {
      if (error.code === '23505') {
        toast.error('Este email já está na lista de espera!');
      } else {
        toast.error('Erro ao cadastrar. Tente novamente.');
        console.error('Waitlist error:', error);
      }
      setLoading(false);
      return;
    }

    // Track conversion
    trackEvent('waitlist_signup', {
      event_category: 'conversion',
      event_label: source,
      custom_parameter_1: source,
    });

    toast.success('🎉 Você está na lista! Em breve enviaremos novidades.');
    
    // Reset form
    setEmail('');
    setFullName('');
    setMainChallenge('');
    setWantsTrial(false);
    setLoading(false);

    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="fullName">Nome completo *</Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Seu nome"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          maxLength={100}
        />
      </div>

      <div>
        <Label htmlFor="email">Email *</Label>
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

      <div>
        <Label htmlFor="mainChallenge">Qual seu maior desafio com organização? (opcional)</Label>
        <Textarea
          id="mainChallenge"
          placeholder="Ex: Perco muito tempo procurando informações, não consigo acompanhar todos os projetos..."
          value={mainChallenge}
          onChange={(e) => setMainChallenge(e.target.value)}
          maxLength={500}
          rows={3}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="wantsTrial"
          checked={wantsTrial}
          onCheckedChange={(checked) => setWantsTrial(checked as boolean)}
        />
        <Label htmlFor="wantsTrial" className="text-sm font-normal cursor-pointer">
          Quero testar gratuitamente por 7 dias quando lançar
        </Label>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full"
        size="lg"
      >
        {loading ? 'Cadastrando...' : 'Entrar na Lista de Espera'}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Ao se cadastrar, você concorda em receber emails sobre o Focus Club.
      </p>
    </form>
  );
}
