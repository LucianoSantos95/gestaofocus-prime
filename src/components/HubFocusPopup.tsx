import { useState, useEffect } from "react";
import { X, Sparkles, ArrowRight, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

export default function HubFocusPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("hub_focus_popup_shown");
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("hub_focus_popup_shown", "true");
      sessionStorage.setItem("popup_shown", "true");
      trackEvent("popup_shown", { event_label: "hub_focus_popup" });
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    trackEvent("popup_closed", { event_label: "hub_focus_popup" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative w-full max-w-md bg-background border border-card-border rounded-2xl shadow-elegant overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 p-1.5 rounded-lg hover:bg-background-secondary transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5 text-foreground-muted" />
        </button>

        <div className="p-8 text-center space-y-5">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/15">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>

          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
              Beta Gratuito
            </p>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Conheça o Hub Focus
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              Uma plataforma completa para organizar finanças, projetos, clientes e equipe — 
              tudo em um só lugar. Acesso gratuito a todos os módulos.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <Button className="w-full" size="lg" asChild>
              <a
                href="https://appfocus.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent("cta_click", { event_label: "hub_focus_popup_comece_gratis" });
                  handleClose();
                }}
              >
                Comece Grátis
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="w-full"
              onClick={() => {
                trackEvent("cta_click", { event_label: "hub_focus_popup_ver_modulos" });
                handleClose();
                window.location.href = "/focus-pro#modulos";
              }}
            >
              <LayoutGrid className="w-5 h-5 mr-2" />
              Ver Módulos
            </Button>
          </div>

          <p className="text-xs text-foreground-muted">
            Sem cartão de crédito. Acesso imediato.
          </p>
        </div>
      </div>
    </div>
  );
}
