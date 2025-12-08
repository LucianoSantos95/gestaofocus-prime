import { useState } from 'react';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { trackEvent } from '@/lib/analytics';

const waitlistSchema = z.object({
  email: z.string().trim().email('Email inválido').max(255, 'Email muito longo'),
  fullName: z.string().trim().min(2, 'Nome muito curto').max(100, 'Nome muito longo'),
  mainChallenge: z.string().trim().max(500, 'Texto muito longo').optional(),
});

interface WaitlistFormProps {
  source?: 'landing' | 'blog' | 'popup';
  onSuccess?: () => void;
}

export function WaitlistForm({ source = 'landing', onSuccess }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [mainChallenge, setMainChallenge] = useState('');
  const [interest, setInterest] = useState<string[]>([]);
  const [wantsTrial, setWantsTrial] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate with Zod schema
    const result = waitlistSchema.safeParse({ 
      email, 
      fullName, 
      mainChallenge: mainChallenge || undefined 
    });
    
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from('waitlist')
      .insert({
        email: result.data.email.toLowerCase(),
        full_name: result.data.fullName,
        main_challenge: result.data.mainChallenge || null,
        wants_trial: wantsTrial,
        source,
        interest: interest.length > 0 ? interest.join(', ') : null,
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
    setInterest([]);
    setWantsTrial(false);
    setLoading(false);

    // Redirect to success page
    window.location.href = '/lista-espera/sucesso';

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

      <div>
        <Label className="mb-3 block">Qual tipo de conteúdo te interessa mais? (opcional)</Label>
        <div className="space-y-2">
          {[
            { value: 'cursos', label: 'Cursos em vídeo' },
            { value: 'sistemas', label: 'Sistemas Notion' },
            { value: 'playbooks', label: 'Playbooks (PDFs)' },
            { value: 'comunidade', label: 'Comunidade' }
          ].map((item) => (
            <div key={item.value} className="flex items-center space-x-2">
              <Checkbox
                id={item.value}
                checked={interest.includes(item.value)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setInterest([...interest, item.value]);
                  } else {
                    setInterest(interest.filter(i => i !== item.value));
                  }
                }}
              />
              <Label htmlFor={item.value} className="text-sm font-normal cursor-pointer">
                {item.label}
              </Label>
            </div>
          ))}
        </div>
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
