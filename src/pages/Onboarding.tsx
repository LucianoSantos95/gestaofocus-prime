import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, MessageCircle, Calendar } from "lucide-react";

const Onboarding = () => {
  const timelineSteps = [
    {
      icon: "📲",
      title: "Contato inicial",
      description: "Você preencheu o formulário ou nos chamou no WhatsApp."
    },
    {
      icon: "🧠",
      title: "Bate-papo gratuito",
      description: "Entendemos suas necessidades e objetivos."
    },
    {
      icon: "🛠️",
      title: "Proposta personalizada",
      description: "Recebe um plano sob medida."
    },
    {
      icon: "🧱",
      title: "Construção e implementação",
      description: "Criamos seu sistema Notion."
    },
    {
      icon: "✨",
      title: "Entrega + Box Focus",
      description: "Encerramento com experiência premium."
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Vi a página de onboarding e gostaria de agendar uma conversa.', '_blank');
  };

  const handleCalendarClick = () => {
    // Link para Calendly/TidyCal aqui
    window.open('https://calendly.com/seu-link', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative z-10 container-focus text-center">
          <div className="max-w-5xl mx-auto animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
              <span className="text-sm text-foreground-muted">
                Experiência exclusiva Focus
              </span>
            </div>

            {/* Main Title */}
            <h1 className="hero-title mb-6 animate-slide-up">
              🚀 Bem-vindo(a) à sua Experiência Focus
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle mb-12 max-w-3xl mx-auto animate-slide-up delay-200">
              Antes da nossa conversa, veja como funciona nosso processo e o que podemos construir juntos.
            </p>

            {/* Video Container */}
            <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl overflow-hidden border border-card-border mb-8 max-w-3xl mx-auto animate-slide-up delay-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-foreground-muted">
                    Adicione seu vídeo de boas-vindas aqui
                  </p>
                </div>
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

      {/* Timeline Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Como Funciona
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Nosso processo é simples, transparente e focado em resultados. 
              Veja cada etapa da sua jornada com a Focus.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {timelineSteps.map((step, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <Card className="card-hover h-full border-primary/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4">{step.icon}</div>
                    <div className="text-sm font-semibold text-primary mb-2">
                      Passo {index + 1}
                    </div>
                    <h3 className="font-bold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground-muted">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Connector Line */}
                {index < timelineSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-padding">
        <div className="container-focus">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Resultados Reais
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Veja o que nossos clientes alcançaram com a Focus
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Testimonial Card 1 */}
            <Card className="card-hover border-primary/10">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
                    M
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Maria Silva</div>
                    <div className="text-sm text-foreground-muted">CEO, Startup Tech</div>
                  </div>
                </div>
                <p className="text-foreground-muted italic mb-4">
                  "O sistema que a Focus construiu transformou totalmente a organização da nossa empresa. O processo foi claro, rápido e profissional."
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">⭐</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Card 2 */}
            <Card className="card-hover border-primary/10">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
                    J
                  </div>
                  <div>
                    <div className="font-bold text-foreground">João Santos</div>
                    <div className="text-sm text-foreground-muted">Gestor de Projetos</div>
                  </div>
                </div>
                <p className="text-foreground-muted italic mb-4">
                  "Nunca imaginei que um sistema Notion poderia ser tão completo e personalizado. A entrega superou minhas expectativas."
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">⭐</span>
                  ))}
                </div>
              </CardContent>
            </Card>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-foreground-muted">Sistemas Entregues</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-foreground-muted">Estados Atendidos</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-foreground-muted">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Pronto para dar o próximo passo?
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Em breve entraremos em contato para agendar nossa conversa. Enquanto isso, fique à vontade para explorar e anotar suas ideias.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="btn-hero group w-full sm:w-auto"
              onClick={handleCalendarClick}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar direto na agenda
            </Button>

            <Button 
              variant="outline"
              className="btn-secondary w-full sm:w-auto"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Quero falar pelo WhatsApp
            </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-foreground-muted">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm">Consulta gratuita e sem compromisso</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Onboarding;