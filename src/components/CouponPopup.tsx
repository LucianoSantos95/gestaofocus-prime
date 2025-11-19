import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gift, Sparkles, X, ArrowRight } from "lucide-react";
import { trackStripeClick, trackCTAClick } from "@/lib/analytics";

const CouponPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenCoupon = sessionStorage.getItem("hasSeenCoupon");
      if (!hasSeenCoupon) {
        setIsOpen(true);
        setShowFireworks(true);
        setTimeout(() => setShowFireworks(false), 3000);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handlePurchase = () => {
    trackStripeClick("popup-coupon");
    trackCTAClick("Adquirir Hub Empresarial", "popup-coupon");
    window.open("https://buy.stripe.com/5kAcPg22odJZ7YceVb", "_blank");
    handleClose();
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
              Ganhe <span className="text-primary font-semibold">20% de desconto</span> no Hub Empresarial PRO 1.0 usando o cupom abaixo!
            </p>

            <div className="space-y-4 w-full">
              <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-2 border-primary/30 rounded-lg p-6 relative overflow-hidden">
                {showFireworks && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-500 rounded-full animate-ping" />
                    <div className="absolute top-0 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: "0.2s" }} />
                    <div className="absolute bottom-0 left-1/3 w-2 h-2 bg-yellow-500 rounded-full animate-ping" style={{ animationDelay: "0.4s" }} />
                    <div className="absolute bottom-0 right-1/3 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: "0.6s" }} />
                  </div>
                )}
                <div className="text-sm font-semibold text-primary mb-2">🎉 CUPOM EXCLUSIVO</div>
                <div className="text-4xl font-bold text-primary mb-2">FOCUS20</div>
                <p className="text-sm text-muted-foreground">20% de desconto na sua compra!</p>
              </div>

              <Button
                onClick={handlePurchase}
                size="lg"
                className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-all"
              >
                Adquirir Hub Empresarial PRO
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <div className="bg-muted/50 rounded-lg p-4 border border-border">
                <p className="text-sm text-muted-foreground">
                  🎁 <strong>Bônus:</strong> Atualizações gratuitas vitalícias + Suporte via WhatsApp
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              Use o cupom no checkout para ativar seu desconto
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CouponPopup;
