import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StickyMobileCTAProps {
  onOpenLeadModal?: () => void;
}

const StickyMobileCTA = ({ onOpenLeadModal }: StickyMobileCTAProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-background/90 backdrop-blur-md border-t border-card-border/30 md:hidden">
      <Button
        className="btn-hero w-full py-4 text-base animate-glow"
        asChild
      >
        <a href="https://appfocus.lovable.app/auth" target="_blank" rel="noopener noreferrer">
          Começar Grátis
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
      <p className="text-[10px] text-foreground-muted text-center mt-1">
        Sem cartão de crédito • Cancele quando quiser
      </p>
    </div>
  );
};

export default StickyMobileCTA;
