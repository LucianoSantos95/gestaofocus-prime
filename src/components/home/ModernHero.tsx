import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick, trackCTAClick } from "@/lib/analytics";

const ModernHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="relative z-10 container-focus text-center px-6">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Sistemas em Notion que aumentam a produtividade e{" "}
            <span className="text-primary">organizam sua empresa em dias</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground-muted mb-10 max-w-3xl mx-auto">
            Templates profissionais e consultoria personalizada para transformar processos, 
            projetos e rotinas em resultados reais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              className="btn-hero group text-base px-8 py-6 w-full sm:w-auto"
              onClick={() => {
                trackCTAClick('Ver Templates', 'hero');
                window.location.href = '/sistemas-notion';
              }}
            >
              Ver Templates
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              className="btn-hero group text-base px-8 py-6 w-full sm:w-auto"
              onClick={() => {
                trackWhatsAppClick('hero_consultoria');
                trackCTAClick('Consultoria Empresarial', 'hero');
                window.open('https://wa.me/5511916742443?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20consultoria%20empresarial!', '_blank');
              }}
            >
              Consultoria Empresarial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Secondary CTA */}
          <Button 
            variant="ghost"
            className="text-foreground-muted hover:text-primary transition-colors text-sm"
            onClick={() => {
              trackCTAClick('Templates Gratuitos', 'hero');
              window.location.href = '/sistemas-gratuitos';
            }}
          >
            Templates Gratuitos →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
