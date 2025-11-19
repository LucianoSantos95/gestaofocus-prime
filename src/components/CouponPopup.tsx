import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gift, Sparkles, X } from "lucide-react";

const CouponPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [couponRevealed, setCouponRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenCoupon = sessionStorage.getItem("hasSeenCoupon");
      if (!hasSeenCoupon) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleRevealCoupon = () => {
    setCouponRevealed(true);
    setShowFireworks(true);
    
    setTimeout(() => {
      setShowFireworks(false);
    }, 3000);
  };

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenCoupon", "true");
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md border-2 border-primary/30 bg-gradient-to-br from-background via-background to-primary/5">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Fechar</span>
          </button>

          <div className="flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-6 relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 animate-pulse">
                <Gift className="h-10 w-10 text-primary" />
              </div>
              {showFireworks && (
                <>
                  <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-500 animate-ping" />
                  <Sparkles className="absolute -bottom-2 -left-2 h-6 w-6 text-yellow-500 animate-ping" style={{ animationDelay: "0.2s" }} />
                  <Sparkles className="absolute top-0 -left-2 h-6 w-6 text-primary animate-ping" style={{ animationDelay: "0.4s" }} />
                  <Sparkles className="absolute -top-2 right-0 h-6 w-6 text-primary animate-ping" style={{ animationDelay: "0.6s" }} />
                </>
              )}
            </div>

            <h2 className="text-3xl font-bold mb-4">
              ⚡ Espere! Temos um Presente Para Você
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Antes de sair, que tal uma <span className="text-primary font-semibold">consultoria gratuita de 30 minutos</span> para analisar seus processos atuais e identificar oportunidades de melhoria?
            </p>

            {!couponRevealed ? (
              <Button
                onClick={handleRevealCoupon}
                size="lg"
                className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-all mb-4"
              >
                <Gift className="mr-2 h-5 w-5" />
                Quero minha consultoria gratuita
              </Button>
            ) : (
              <div className="space-y-4 w-full animate-scale-in">
                <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-2 border-primary/30 rounded-lg p-6 relative overflow-hidden">
                  {showFireworks && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-500 rounded-full animate-ping" />
                      <div className="absolute top-0 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: "0.2s" }} />
                      <div className="absolute bottom-0 left-1/3 w-2 h-2 bg-yellow-500 rounded-full animate-ping" style={{ animationDelay: "0.4s" }} />
                      <div className="absolute bottom-0 right-1/3 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: "0.6s" }} />
                    </div>
                  )}
                  <div className="text-sm font-semibold text-primary mb-2">🎉 BÔNUS EXCLUSIVO</div>
                  <div className="text-3xl font-bold text-primary mb-2">FOCUS20</div>
                  <p className="text-sm text-muted-foreground">Use este cupom e ganhe 20% de desconto!</p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 border border-border">
                  <p className="text-sm text-muted-foreground mb-2">🎁 <strong>Bônus:</strong> Receba também nossa checklist exclusiva de produtividade</p>
                  <p className="text-sm text-primary font-semibold">⏰ Apenas 3 vagas disponíveis esta semana</p>
                </div>
              </div>
            )}

            {couponRevealed && (
              <p className="text-xs text-muted-foreground mt-4">
                Clique fora para fechar e aproveitar sua oferta
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CouponPopup;
