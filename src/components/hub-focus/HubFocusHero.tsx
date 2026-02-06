import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";

const HubFocusHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 text-primary">
            <Sparkles className="w-4 h-4 mr-2" />
            Beta Gratuito
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Seu negócio organizado{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              em um só lugar
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A evolução do template Notion com <strong className="text-foreground">5.000+ downloads</strong>. 
            Agora como plataforma completa: finanças, projetos, clientes e equipe — tudo integrado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://appfocus.lovable.app/" target="_blank" rel="noopener noreferrer">
                <Sparkles className="w-5 h-5 mr-2" />
                Comece Grátis
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <a href="#modulos">
                <LayoutGrid className="w-5 h-5 mr-2" />
                Ver Módulos
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Sem cartão de crédito. Acesso imediato a todos os módulos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HubFocusHero;
