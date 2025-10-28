import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick, trackNotionClick, trackCTAClick } from "@/lib/analytics";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="relative z-10 container-focus text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Badge with urgency */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8 animate-pulse">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            <span className="text-sm text-primary font-medium">
              🔥 Apenas 5 vagas para consultoria este mês
            </span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title mb-6 animate-slide-up">
            Gestão empresarial com eficiência e resultados
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle mb-12 max-w-3xl mx-auto animate-slide-up delay-200">
            Sistemas personalizados, processos claros e produtividade real para empresas 
            e pessoas que querem crescer com eficiência.
          </p>

          {/* CTA Buttons - Simplified (1 primary + 1 secondary) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up delay-300">
            <Button 
              className="btn-hero group text-lg px-10 py-6"
              onClick={() => {
                trackWhatsAppClick('hero_cta_primary');
                trackCTAClick('Agendar consultoria gratuita', 'hero');
                window.open('https://wa.me/5511916742443?text=Ol%C3%A1%2C%20quero%20agendar%20minha%20consultoria%20gratuita%20de%2030%20minutos!', '_blank');
              }}
            >
              Agendar Consultoria Gratuita
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="ghost" 
              className="btn-secondary group"
              onClick={() => {
                trackNotionClick('demo', 'hero');
                trackCTAClick('Ver sistemas gratuitos', 'hero');
                window.location.href = '/sistemas-gratuitos';
              }}
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Ver Sistemas Gratuitos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto animate-slide-up delay-500">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">+12.000</div>
              <div className="text-sm text-foreground-muted">Downloads de sistemas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">+20</div>
              <div className="text-sm text-foreground-muted">Empresas atendidas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-card-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;