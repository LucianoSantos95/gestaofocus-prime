import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export const ComingSoonBadge = () => {
  return (
    <Link
      to="/lista-espera"
      className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground py-3 px-4 text-center shadow-lg hover:from-primary hover:to-primary/90 transition-all duration-300 group"
    >
      <div className="container-focus flex items-center justify-center gap-2">
        <Rocket className="w-4 h-4 animate-bounce" />
        <span className="text-sm md:text-base font-semibold">
          🚀 Lançamento em breve - Garanta seu acesso antecipado com 30% OFF
        </span>
        <span className="hidden sm:inline text-sm opacity-90 group-hover:opacity-100 transition-opacity">
          → Clique aqui
        </span>
      </div>
    </Link>
  );
};
