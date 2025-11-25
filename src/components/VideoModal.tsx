import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface VideoModalProps {
  trigger?: React.ReactNode;
}

const VideoModal = ({ trigger }: VideoModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasWatched, setHasWatched] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    trackEvent("video_modal_opened", { source: "hero_section" });
  };

  const handleVideoEnd = () => {
    setHasWatched(true);
    trackEvent("video_modal_completed", { duration: "full" });
  };

  const handleWhatsAppClick = () => {
    trackEvent("video_modal_cta_clicked", { 
      watched: hasWatched ? "complete" : "partial" 
    });
    window.open(
      "https://wa.me/5511916742443?text=Ol%C3%A1%2C%20vi%20o%20v%C3%ADdeo%20demonstrativo%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Hub%20Empresarial",
      '_blank'
    );
  };

  return (
    <>
      {trigger ? (
        <div onClick={handleOpen}>{trigger}</div>
      ) : (
        <Button 
          onClick={handleOpen}
          variant="outline"
          size="lg"
          className="gap-2"
        >
          <Play className="w-5 h-5" />
          Ver Como Funciona
        </Button>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-background/80 p-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Fechar</span>
          </button>

          <div className="p-6">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl">
                🎯 Veja o Hub Empresarial em Ação
              </DialogTitle>
              <DialogDescription className="text-base">
                Descubra como organizar toda sua empresa em um único lugar
              </DialogDescription>
            </DialogHeader>

            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-6">
              <video
                className="w-full h-full"
                controls
                onEnded={handleVideoEnd}
                poster="/lovable-uploads/hub-empresarial-og.jpg"
              >
                <source src="/onboarding-video.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 rounded-lg bg-primary/10">
                  <div className="text-2xl font-bold text-primary">150+</div>
                  <div className="text-sm text-foreground-muted">Sistemas</div>
                </div>
                <div className="p-3 rounded-lg bg-primary/10">
                  <div className="text-2xl font-bold text-primary">7 dias</div>
                  <div className="text-sm text-foreground-muted">Para Dominar</div>
                </div>
                <div className="p-3 rounded-lg bg-primary/10">
                  <div className="text-2xl font-bold text-primary">30%</div>
                  <div className="text-sm text-foreground-muted">Mais Produtivo</div>
                </div>
              </div>

              <Button 
                onClick={handleWhatsAppClick}
                className="w-full"
                size="lg"
              >
                Quero Implementar no Meu Negócio
              </Button>

              <p className="text-center text-sm text-foreground-muted">
                💬 Fale com um especialista e receba orientação personalizada
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoModal;
