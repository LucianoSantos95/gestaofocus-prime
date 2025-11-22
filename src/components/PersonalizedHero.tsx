import { useEffect, useState } from "react";
import { ArrowRight, Play, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick, trackCTAClick } from "@/lib/analytics";
import HeroTestimonial from "./HeroTestimonial";

type HeroVersion = "A" | "B" | "C";

interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCTA: string;
  primaryAction: () => void;
  secondaryCTA: string;
  secondaryAction: () => void;
}

const PersonalizedHero = () => {
  const [version, setVersion] = useState<HeroVersion>("A");

  useEffect(() => {
    // Check if user already has a version assigned
    const savedVersion = localStorage.getItem("hero_version") as HeroVersion;
    
    if (savedVersion) {
      setVersion(savedVersion);
    } else {
      // Randomly assign version for A/B testing (33% each)
      const random = Math.random();
      const newVersion: HeroVersion = random < 0.33 ? "A" : random < 0.66 ? "B" : "C";
      setVersion(newVersion);
      localStorage.setItem("hero_version", newVersion);
      
      // Track which version user sees
      trackCTAClick(`hero_version_${newVersion}`, "assignment");
    }
  }, []);

  const heroContent: Record<HeroVersion, HeroContent> = {
    A: {
      headline: "Sua empresa está um caos? Centralize tudo em 1 sistema",
      subheadline: "Mais de 150 empresas já eliminaram planilhas soltas e WhatsApps perdidos com nossos sistemas Notion. Sem contratar TI.",
      primaryCTA: "Ver Como Funciona",
      primaryAction: () => {
        trackCTAClick("Ver Como Funciona - Version A", "hero");
        document.getElementById("video-demo")?.scrollIntoView({ behavior: "smooth" });
      },
      secondaryCTA: "Calcular Meu ROI",
      secondaryAction: () => {
        trackCTAClick("Calcular ROI - Version A", "hero");
        document.getElementById("roi-calculator")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    B: {
      headline: "Trabalha 12h/dia e ainda não dá conta? Automatize 70% das tarefas",
      subheadline: "Sistema completo que economiza 15h/semana em média - comprovado por 150+ clientes",
      primaryCTA: "Calcular Meu ROI",
      primaryAction: () => {
        trackCTAClick("Calcular ROI - Version B", "hero");
        document.getElementById("roi-calculator")?.scrollIntoView({ behavior: "smooth" });
      },
      secondaryCTA: "Ver Casos de Sucesso",
      secondaryAction: () => {
        trackCTAClick("Ver Casos de Sucesso - Version B", "hero");
        window.location.href = "/sobre#depoimentos";
      }
    },
    C: {
      headline: "Escalando mas perdendo controle? Sistema que cresce com você",
      subheadline: "Do freelancer à equipe de 50+. Um único sistema, zero implementação de software.",
      primaryCTA: "Ver Demonstração",
      primaryAction: () => {
        trackCTAClick("Ver Demonstração - Version C", "hero");
        window.location.href = "/hub-empresarial";
      },
      secondaryCTA: "Agendar Consultoria",
      secondaryAction: () => {
        trackWhatsAppClick("hero_cta_secondary_version_c");
        trackCTAClick("Agendar Consultoria - Version C", "hero");
        window.open('https://wa.me/5511916742443?text=Ol%C3%A1%2C%20quero%20agendar%20minha%20consultoria%20gratuita%20de%2030%20minutos!', '_blank');
      }
    }
  };

  const content = heroContent[version];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="relative z-10 container-focus text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Main Title - Personalized */}
          <h1 className="hero-title mb-6 animate-slide-up">
            {content.headline}
          </h1>

          {/* Subtitle - Personalized */}
          <p className="hero-subtitle mb-8 max-w-3xl mx-auto animate-slide-up delay-200">
            {content.subheadline}
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-foreground-muted">
            <div className="flex items-center gap-2">
              <span className="text-primary">⭐</span>
              <span>4.9/5 - 150+ avaliações</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✅</span>
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">⚡</span>
              <span>Setup em menos de 2h</span>
            </div>
          </div>

          {/* CTA Buttons - Optimized & Less Intimidating */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up delay-300">
            <Button 
              className="btn-hero group text-lg px-10 py-6"
              onClick={content.primaryAction}
            >
              {content.primaryCTA}
              {version === "B" ? (
                <Calculator className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              className="btn-secondary group"
              onClick={content.secondaryAction}
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              {content.secondaryCTA}
            </Button>
          </div>

          {/* Hero Testimonial */}
          <div className="mb-16 animate-slide-up delay-400">
            <HeroTestimonial />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto animate-slide-up delay-500">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">+12.000</div>
              <div className="text-sm text-foreground-muted">Downloads de sistemas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15h/semana</div>
              <div className="text-sm text-foreground-muted">Tempo economizado em média</div>
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

export default PersonalizedHero;
