import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle2, MessageCircle, Calendar, Smartphone, Brain, Wrench, Building2, Sparkles } from "lucide-react";

const Onboarding = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const timelineSteps = [
    {
      icon: Smartphone,
      title: "Contato inicial",
      description: "Você preencheu o formulário ou nos chamou no WhatsApp.",
      gradient: "from-blue-500 to-cyan-500",
      details: "Este é o primeiro passo da sua jornada! Seja através do nosso formulário de contato ou de uma mensagem direta no WhatsApp, você nos conta um pouco sobre seus desafios e objetivos. É rápido, sem compromisso, e já nos ajuda a entender como podemos ajudar você."
    },
    {
      icon: Brain,
      title: "Bate-papo gratuito",
      description: "Entendemos suas necessidades e objetivos.",
      gradient: "from-purple-500 to-pink-500",
      details: "Agendamos uma conversa de 30-45 minutos totalmente gratuita. Nesse momento, mergulhamos no seu dia a dia, entendemos seus processos atuais, identificamos pontos de melhoria e exploramos como um sistema personalizado pode transformar sua produtividade. É uma consultoria sem custo!"
    },
    {
      icon: Wrench,
      title: "Proposta personalizada",
      description: "Recebe um plano sob medida.",
      gradient: "from-orange-500 to-red-500",
      details: "Baseado na nossa conversa, criamos uma proposta detalhada e personalizada para você. Incluímos o escopo completo do projeto, cronograma, investimento e todos os recursos que serão desenvolvidos. Tudo transparente e claro, para que você tome a melhor decisão."
    },
    {
      icon: Building2,
      title: "Construção e implementação",
      description: "Criamos seu sistema Notion.",
      gradient: "from-green-500 to-emerald-500",
      details: "Aqui é onde a mágica acontece! Nossa equipe trabalha na construção do seu sistema personalizado no Notion. Durante o processo, mantemos você atualizado e coletamos feedbacks para garantir que tudo esteja alinhado com suas expectativas. Seu sistema é construído pensando em cada detalhe do seu negócio."
    },
    {
      icon: Sparkles,
      title: "Entrega + Box Focus",
      description: "Encerramento com experiência premium.",
      gradient: "from-yellow-500 to-amber-500",
      details: "O grande momento! Entregamos seu sistema completo com uma sessão de onboarding personalizada para garantir que você e sua equipe dominem todas as funcionalidades. E como surpresa especial, você recebe nossa exclusiva Box Focus - um presente premium cuidadosamente selecionado para celebrar essa nova fase de produtividade!"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5511916742443&text=Ol%C3%A1%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+personaliza%C3%A7%C3%A3o+de+sistemas.&type=phone_number&app_absent=0', '_blank');
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
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-card-border mb-8 max-w-3xl mx-auto animate-slide-up delay-300 shadow-elegant">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="/lovable-uploads/onboarding-cover.png"
              >
                <source src="/onboarding-video.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
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
            {timelineSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <Card 
                    className="card-hover h-full border-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-elegant cursor-pointer"
                    onClick={() => setSelectedStep(index)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="relative mb-6 flex justify-center">
                        <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} p-0.5 shadow-lg`}>
                          <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-foreground" />
                          </div>
                        </div>
                        <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} blur-xl opacity-30`} />
                      </div>
                      <div className="text-sm font-semibold text-primary mb-2">
                        Passo {index + 1}
                      </div>
                      <h3 className="font-bold mb-2 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-foreground-muted mb-3">
                        {step.description}
                      </p>
                      <p className="text-xs text-primary hover:text-primary/80 transition-colors">
                        Clique para saber mais →
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Connector Line */}
                  {index < timelineSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Details Dialog */}
          <Dialog open={selectedStep !== null} onOpenChange={(open) => !open && setSelectedStep(null)}>
            <DialogContent className="max-w-2xl">
              {selectedStep !== null && (
                <>
                  <DialogHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${timelineSteps[selectedStep].gradient} p-0.5 shadow-lg`}>
                        <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                          {(() => {
                            const IconComponent = timelineSteps[selectedStep].icon;
                            return <IconComponent className="w-8 h-8 text-foreground" />;
                          })()}
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-primary mb-1">
                          Passo {selectedStep + 1}
                        </div>
                        <DialogTitle className="text-2xl">
                          {timelineSteps[selectedStep].title}
                        </DialogTitle>
                      </div>
                    </div>
                    <DialogDescription className="text-base leading-relaxed text-foreground-muted">
                      {timelineSteps[selectedStep].details}
                    </DialogDescription>
                  </DialogHeader>
                </>
              )}
            </DialogContent>
          </Dialog>
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
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-foreground-muted">Sistemas Entregues</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="text-4xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-foreground-muted">Estados Atendidos</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
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
            <div className="flex justify-center items-center mb-12">
              <Button 
                className="btn-hero group"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Quero falar no WhatsApp
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