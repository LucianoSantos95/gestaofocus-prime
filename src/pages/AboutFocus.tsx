import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const AboutFocus = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Sobre a Focus | Gestão para Agências e Consultorias"
        description="Especialistas em gestão inteligente para agências, consultorias e prestadores de serviço. Sistemas sob medida e plataforma pronta para usar."
        canonical="/sobre-focus"
        keywords="gestão para agências, consultoria gestão empresarial, sistemas para prestadores de serviço"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container-focus">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="hero-title mb-6">
              Sobre a Focus
            </h1>
            <p className="hero-subtitle max-w-3xl mx-auto">
              Especialistas em gestão inteligente para agências, consultorias e prestadores de serviço
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed animate-fade-in">
            <p className="text-foreground/90">
              A Focus Gestão Inteligente nasceu para resolver um problema claro: agências, consultorias e prestadores de serviço que crescem, mas continuam gerenciando tudo no WhatsApp, planilhas e e-mails soltos.
            </p>

            <p className="text-foreground/90">
              Nosso propósito é dar clareza, organização e controle para empresas de serviço que precisam profissionalizar sua operação — sem perder agilidade.
            </p>

            <p className="text-foreground/90">
              Trabalhamos de duas formas: criamos sistemas sob medida para operações complexas (CRM, financeiro, portais do cliente) ou oferecemos o Hub Empresarial, uma plataforma completa pronta para usar. Em ambos os casos, entregamos em semanas o que levaria meses com desenvolvimento tradicional.
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
