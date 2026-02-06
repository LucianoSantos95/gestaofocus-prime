import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HubFocusCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-t from-primary/5 to-transparent">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Comece agora —{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            é gratuito
          </span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Organize seu negócio em minutos. Todos os módulos disponíveis no Beta gratuito.
        </p>

        <Button size="lg" className="text-lg px-10 py-7" asChild>
          <a href="https://appfocus.lovable.app/" target="_blank" rel="noopener noreferrer">
            <Sparkles className="w-5 h-5 mr-2" />
            Criar Conta Grátis
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </Button>

        <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
          <Shield className="w-4 h-4" />
          <span>Sem cartão de crédito. Cancele quando quiser.</span>
        </div>
      </div>
    </section>
  );
};

export default HubFocusCTA;
