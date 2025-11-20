import { useState } from 'react';
import { Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { trackEvent } from '@/lib/analytics';
import { z } from 'zod';

const emailSchema = z.string().email('Email inválido').min(5).max(100).trim();

export default function LeadCaptureSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      emailSchema.parse(email);
    } catch (err) {
      setError('Por favor, insira um email válido');
      return;
    }

    setIsSubmitting(true);
    
    // Track lead capture
    trackEvent('lead_capture', {
      event_category: 'conversion',
      event_label: 'homepage_hero_section',
      email_captured: true,
    });

    // Redirect to Notion Playbooks page
    window.open('https://gestaofocus.notion.site/Central-de-Playbooks-Focus-2a7be653a5aa80eb867de9ef26aa4e73', '_blank');
    
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 rounded-2xl p-8 text-center backdrop-blur-sm">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
          <Sparkles className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Confirmado! 🎉</h3>
        <p className="text-foreground-muted">
          Acesse sua Central de Playbooks na nova aba que foi aberta
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 rounded-2xl p-8 backdrop-blur-sm">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4">
          <Mail className="w-6 h-6 text-primary" />
        </div>
        
        <h3 className="text-2xl font-bold mb-2">
          Baixe GRÁTIS: Playbook Gestor Organizado
        </h3>
        <p className="text-foreground-muted mb-6">
          3 sistemas Notion prontos + Guia de Produtividade para começar hoje mesmo
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Seu melhor email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-background/50 backdrop-blur-sm"
            disabled={isSubmitting}
          />
          <Button 
            type="submit" 
            className="btn-hero whitespace-nowrap"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Quero Receber'}
          </Button>
        </form>
        
        {error && (
          <p className="text-sm text-destructive mt-2">{error}</p>
        )}

        <p className="text-xs text-foreground-muted mt-3">
          🔒 Seus dados estão seguros. Sem spam.
        </p>
      </div>
    </div>
  );
}
