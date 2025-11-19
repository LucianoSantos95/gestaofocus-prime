import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Gift, X, Download } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { z } from 'zod';

const emailSchema = z.string().email().min(5).max(100).trim();

export default function TimeBasedPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [hasShown, setHasShown] = useState(false);
  const [popupType, setPopupType] = useState<'time' | 'scroll'>('time');

  useEffect(() => {
    // Check if popup was already shown this session
    const popupShown = sessionStorage.getItem('timeBasedPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    // Show popup after 30 seconds
    const timeoutId = setTimeout(() => {
      if (!hasShown) {
        setPopupType('time');
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('timeBasedPopupShown', 'true');
        trackEvent('popup_shown', {
          event_category: 'engagement',
          event_label: 'time_based_popup',
          trigger: '30_seconds',
        });
      }
    }, 30000);

    // Show popup on 50% scroll
    const handleScroll = () => {
      if (hasShown) return;
      
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage >= 50) {
        setPopupType('scroll');
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('timeBasedPopupShown', 'true');
        trackEvent('popup_shown', {
          event_category: 'engagement',
          event_label: 'scroll_based_popup',
          trigger: '50_percent_scroll',
        });
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      emailSchema.parse(email);
    } catch (err) {
      setError('Por favor, insira um email válido');
      return;
    }

    trackEvent('time_popup_email_captured', {
      event_category: 'conversion',
      event_label: popupType,
      email_captured: true,
    });

    const message = `Olá! Quero baixar o Guia de Produtividade Empresarial. Meu email: ${encodeURIComponent(email)}`;
    window.open(`https://wa.me/5511916742443?text=${message}`, '_blank');
    
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    trackEvent('popup_closed', {
      event_category: 'engagement',
      event_label: `${popupType}_based_popup`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] bg-background border-primary/20">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Fechar</span>
        </button>

        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full">
              <Download className="w-8 h-8 text-primary animate-bounce" />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center">
            {popupType === 'time' ? 'Procurando algo específico?' : 'Antes de ir...'}
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Baixe nosso <strong className="text-primary">Guia de Produtividade Empresarial</strong> com 
            estratégias práticas para aumentar sua eficiência em 40%
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Input
              type="email"
              placeholder="Seu melhor email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
            {error && (
              <p className="text-sm text-destructive mt-1">{error}</p>
            )}
          </div>

          <Button type="submit" className="w-full btn-hero">
            <Gift className="w-4 h-4 mr-2" />
            Quero o Guia Grátis
          </Button>
        </form>

        <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
          <p className="text-sm text-center">
            ✨ <strong>Bônus:</strong> Também enviaremos 3 templates Notion prontos para usar
          </p>
        </div>

        <p className="text-xs text-foreground-muted text-center">
          🔒 100% seguro. Cancelar quando quiser.
        </p>
      </DialogContent>
    </Dialog>
  );
}
