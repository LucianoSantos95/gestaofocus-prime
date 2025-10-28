import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Verificar se já foi mostrado nesta sessão
    const wasShown = sessionStorage.getItem("exitIntentShown");
    if (wasShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Detectar quando o mouse sai pela parte superior da página
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
        trackEvent("exit_intent_triggered", { action: "popup_shown" });
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      trackEvent("exit_intent_email_captured", { email });
      // Aqui você integraria com seu sistema de email marketing
      console.log("Email capturado:", email);
      
      // Redirecionar para WhatsApp com oferta especial
      window.open(
        `https://wa.me/5511916742443?text=Ol%C3%A1%2C%20me%20cadastrei%20para%20receber%20a%20consultoria%20gratuita.%20Meu%20email%3A%20${email}`,
        '_blank'
      );
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Fechar</span>
        </button>
        
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow p-0.5 shadow-lg">
              <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                <Gift className="w-8 h-8 text-primary" />
              </div>
            </div>
            <div className="absolute w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow blur-xl opacity-30" />
          </div>
          
          <DialogTitle className="text-2xl text-center">
            ⚡ Espere! Temos um Presente Para Você
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Antes de sair, que tal uma <span className="font-semibold text-primary">consultoria gratuita de 30 minutos</span> para 
            analisar seus processos atuais e identificar oportunidades de melhoria?
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
          </div>

          <Button type="submit" className="btn-hero w-full">
            Quero minha consultoria gratuita
          </Button>

          <p className="text-xs text-center text-foreground-muted">
            🎁 Bônus: Receba também nossa checklist exclusiva de produtividade
          </p>
        </form>

        <div className="mt-4 pt-4 border-t border-card-border text-center">
          <p className="text-sm text-foreground-muted">
            ⏰ <span className="font-semibold">Apenas 3 vagas disponíveis esta semana</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
