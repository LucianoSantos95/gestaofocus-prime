import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function WhatsAppButton() {
  const handleClick = () => {
    trackEvent("cta_click", {
      event_category: "conversion",
      event_label: "whatsapp_floating",
    });
  };

  return (
    <a
      href="https://wa.me/5511916742443?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es."
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
