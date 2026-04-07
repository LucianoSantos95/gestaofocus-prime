import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-background/95 backdrop-blur-md border-t border-card-border/30 md:hidden safe-area-bottom">
      <a
        href="https://wa.me/5511916742443?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista%20Focus"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("cta_click", { event_category: "conversion", event_label: "sticky_mobile_cta" })}
        className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#EF4444] hover:bg-[#DC2626] text-white font-semibold text-base transition-colors min-h-[48px]"
      >
        <Phone className="w-5 h-5" />
        Fale com Especialista Agora
      </a>
    </div>
  );
};

export default StickyMobileCTA;
