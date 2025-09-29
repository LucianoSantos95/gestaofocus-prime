import { Button } from "@/components/ui/button";
import focusLogo from "@/assets/focus-logo-about.png";

const AboutFocus = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container-focus">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="hero-title mb-6">
              Sobre a Focus
            </h1>
            <p className="hero-subtitle max-w-3xl mx-auto">
              Transformando empresas em organizações mais eficientes e estratégicas
            </p>
          </div>

          {/* Logo Image */}
          <div className="flex justify-center mb-16 animate-slide-up">
            <img 
              src={focusLogo} 
              alt="Focus Gestão Empresarial" 
              className="max-w-md w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed animate-fade-in">
            <p className="text-foreground/90">
              Focus Gestão Empresarial é uma consultoria dedicada a transformar empresas em organizações mais eficientes, estratégicas e preparadas para crescer de forma sustentável.
            </p>

            <p className="text-foreground/90">
              Nosso propósito é simplificar a gestão e potencializar resultados, ajudando líderes e equipes a ganhar clareza, organização e controle sobre seus processos e operações.
            </p>

            <p className="text-foreground/90">
              Acreditamos que uma empresa bem estruturada cria espaço para inovação e crescimento. Por isso, unimos metodologias de gestão consolidadas e tecnologia no-code para entregar soluções que tornam o dia a dia mais ágil e estratégico.
            </p>

            <p className="text-foreground/90">
              Na Focus, cada projeto é conduzido com visão de longo prazo, garantindo que as mudanças implementadas gerem impacto real e duradouro no desempenho do negócio.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-slide-up">
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/5511994921881?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20a%20Focus.', '_blank')}
              className="btn-hero"
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFocus;
