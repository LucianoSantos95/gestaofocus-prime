import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Clock, Zap, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { z } from "zod";

const emailSchema = z.string()
  .trim()
  .email({ message: "Email inválido" })
  .max(255, { message: "Email muito longo" });

type UserBehavior = "quick_visitor" | "engaged_visitor" | "browser";

interface ExitIntentMessage {
  icon: typeof Gift | typeof Clock | typeof Zap;
  title: string;
  description: string;
  cta: string;
  bonus: string;
}

const messages: Record<UserBehavior, ExitIntentMessage> = {
  quick_visitor: {
    icon: Clock,
    title: "⏰ Espere! Não Saia de Mãos Vazias",
    description: "Sabemos que seu tempo é valioso. Que tal uma consultoria gratuita de 30 minutos para analisar seus processos e identificar melhorias rápidas?",
    cta: "Quero minha consultoria gratuita",
    bonus: "Bônus: Checklist de Produtividade + Análise Personalizada"
  },
  engaged_visitor: {
    icon: Zap,
    title: "🚀 Gostou do Que Viu? Vamos Acelerar!",
    description: "Você demonstrou interesse real. Vamos conversar sobre como implementar essas soluções no seu negócio ainda esta semana?",
    cta: "Agendar implementação imediata",
    bonus: "Primeiros 3 sistemas grátis + Suporte prioritário"
  },
  browser: {
    icon: Gift,
    title: "✨ Presente Especial Para Você",
    description: "Antes de ir, receba nossa consultoria gratuita de 30 minutos para descobrir como otimizar seus processos e aumentar resultados.",
    cta: "Garantir minha vaga gratuita",
    bonus: "Análise completa + Roadmap personalizado"
  }
};

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [hasShown, setHasShown] = useState(false);
  const [error, setError] = useState("");
  const [userBehavior, setUserBehavior] = useState<UserBehavior>("browser");
  const [entryTime] = useState(Date.now());
  const [scrollDepth, setScrollDepth] = useState(0);
  const [pageViews, setPageViews] = useState(1);

  useEffect(() => {
    const wasShown = sessionStorage.getItem("exitIntentShown");
    if (wasShown) {
      setHasShown(true);
      return;
    }

    const trackScrollDepth = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollDepth(Math.max(scrollDepth, scrollPercent));
    };

    window.addEventListener("scroll", trackScrollDepth);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        const timeOnPage = (Date.now() - entryTime) / 1000; // seconds
        
        // Determine user behavior
        let behavior: UserBehavior = "browser";
        if (timeOnPage < 30) {
          behavior = "quick_visitor";
        } else if (scrollDepth > 50 || pageViews > 2) {
          behavior = "engaged_visitor";
        }
        
        setUserBehavior(behavior);
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
        trackEvent("exit_intent_v2_triggered", { 
          action: "popup_shown",
          behavior,
          timeOnPage: Math.round(timeOnPage),
          scrollDepth: Math.round(scrollDepth),
          pageViews
        });
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("scroll", trackScrollDepth);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown, entryTime, scrollDepth, pageViews]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    
    const validEmail = result.data;
    const encodedEmail = encodeURIComponent(validEmail);
    
    trackEvent("exit_intent_v2_email_captured", { 
      source: 'exit_popup_v2',
      behavior: userBehavior
    });
    
    const message = messages[userBehavior];
    window.open(
      `https://wa.me/5511916742443?text=Ol%C3%A1%2C%20me%20cadastrei%20via%20exit%20intent%20para%3A%20${encodeURIComponent(message.cta)}.%20Meu%20email%3A%20${encodedEmail}`,
      '_blank'
    );
    setIsOpen(false);
  };

  const currentMessage = messages[userBehavior];
  const IconComponent = currentMessage.icon;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md">
        <button 
          onClick={() => {
            setIsOpen(false);
            trackEvent("exit_intent_v2_closed", { behavior: userBehavior });
          }}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Fechar</span>
        </button>
        
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow p-0.5 shadow-lg">
              <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-primary" />
              </div>
            </div>
            <div className="absolute w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow blur-xl opacity-30" />
          </div>
          
          <DialogTitle className="text-2xl text-center">
            {currentMessage.title}
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            {currentMessage.description}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            {error && (
              <p className="text-sm text-destructive mt-1">{error}</p>
            )}
          </div>

          <Button type="submit" className="w-full">
            {currentMessage.cta}
          </Button>

          <p className="text-xs text-center text-foreground-muted">
            🎁 {currentMessage.bonus}
          </p>
        </form>

        <div className="mt-4 pt-4 border-t border-card-border text-center">
          <p className="text-sm text-foreground-muted">
            ⏰ <span className="font-semibold">Vagas limitadas - Garanta a sua agora</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
