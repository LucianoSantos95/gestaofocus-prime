import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Clock,
  Target,
  BookOpen,
  Users,
  Award,
  Star,
  Quote
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import dia01 from "@/assets/sprint-dia-01.png";
import dia02 from "@/assets/sprint-dia-02.png";
import dia03 from "@/assets/sprint-dia-03.png";
import dia04 from "@/assets/sprint-dia-04.png";
import dia05 from "@/assets/sprint-dia-05.png";
import dia06 from "@/assets/sprint-dia-06.png";
import dia07 from "@/assets/sprint-dia-07.png";

const SprintProdutividade = () => {
  const [showTestimonials, setShowTestimonials] = useState(false);

  const testimonials = [
    {
      name: "Mariana Costa",
      role: "Gerente de Projetos",
      company: "Tech Solutions",
      text: "Depois do Sprint consegui organizar melhor meu dia e parei de deixar tarefas importantes para última hora. O método da captura mental mudou completamente minha forma de lidar com o excesso de informações.",
      rating: 5
    },
    {
      name: "Roberto Silva",
      role: "Empreendedor",
      company: "Startup Digital",
      text: "Eu estava totalmente perdido com tantas tarefas e projetos ao mesmo tempo. O Sprint me ensinou a priorizar o que realmente importa. Hoje consigo focar no que gera resultado e não apenas apagar incêndios.",
      rating: 5
    },
    {
      name: "Juliana Mendes",
      role: "Analista de Marketing",
      company: "Agência Criativa",
      text: "A parte de cortando distrações foi um divisor de águas pra mim. Identifiquei que perdia mais de 2 horas por dia com notificações e redes sociais. Agora tenho uma rotina muito mais produtiva e focada.",
      rating: 5
    },
    {
      name: "Carlos Eduardo",
      role: "Desenvolvedor",
      company: "Freelancer",
      text: "Como freelancer, eu sempre tive dificuldade em criar uma rotina. O módulo de rotina estratégica me ajudou a estruturar meu dia de forma que funciona para o MEU ritmo, não um modelo genérico que nunca dava certo.",
      rating: 5
    },
    {
      name: "Fernanda Oliveira",
      role: "Coordenadora Pedagógica",
      company: "Escola Integrada",
      text: "Aplicar a semana ideal na prática me fez perceber que eu estava tentando fazer tudo ao mesmo tempo. Agora distribuo melhor minhas atividades e consigo ter mais qualidade de vida sem comprometer o trabalho.",
      rating: 5
    },
    {
      name: "Lucas Rodrigues",
      role: "Designer",
      company: "Estúdio Criativo",
      text: "O Sprint foi direto ao ponto. Nada de enrolação, só métodos práticos que funcionam de verdade. A organização digital me ajudou a encontrar meus arquivos em segundos ao invés de perder tempo procurando. Valeu muito a pena!",
      rating: 5
    }
  ];

  const moduleImages = [
    { src: dia01, alt: "Módulo 1 - Captura mental" },
    { src: dia02, alt: "Módulo 2 - Classificação de tarefas" },
    { src: dia03, alt: "Módulo 3 - Semana ideal" },
    { src: dia04, alt: "Módulo 4 - Cortando distrações" },
    { src: dia05, alt: "Módulo 5 - Rotina estratégica" },
    { src: dia06, alt: "Módulo 6 - Organização digital" },
    { src: dia07, alt: "Módulo 7 - Planejamento final" }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Metodologia Comprovada",
      description: "Técnicas testadas e aprovadas por milhares de profissionais."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Aplicação Imediata",
      description: "Cada dia inclui exercícios práticos para aplicar na sua rotina."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Suporte Personalizado",
      description: "Acompanhamento diário para garantir seu sucesso."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Resultados Garantidos",
      description: "Ou devolvemos 100% do seu investimento."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
        <div className="relative z-10 container-focus">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
              <Zap className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-foreground-muted">
                Sprint de Produtividade
              </span>
            </div>
            
            <h1 className="hero-title mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              7 dias para transformar sua rotina
            </h1>
            
            <p className="hero-subtitle mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Um programa intensivo de produtividade com aulas práticas diárias, 
              exercícios aplicados e acompanhamento personalizado para resultados reais.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Button className="btn-hero group" asChild>
                <a href="https://pay.hub.la/bZk8tJXer0JtaUU3l10n" target="_blank" rel="noopener noreferrer">
                  Garanta seu acesso
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              
              <Button variant="outline" className="btn-secondary">
                Ver cronograma completo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">7</div>
                <div className="text-sm text-foreground-muted">Dias de transformação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">+2hrs</div>
                <div className="text-sm text-foreground-muted">Ganho médio diário</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-foreground-muted">Taxa de satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              O que você vai aprender
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Cada dia é cuidadosamente estruturado para construir suas habilidades 
              de produtividade de forma progressiva e sustentável.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {moduleImages.map((module, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="group cursor-pointer relative">
                      <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/40 blur-3xl transition-all duration-500 -z-10 scale-75 group-hover:scale-110" />
                      <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105">
                        <img
                          src={module.src}
                          alt={module.alt}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-focus">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Por que o Sprint funciona?
              </h2>
              <p className="text-xl text-foreground-muted leading-relaxed mb-8">
                Nosso método combina teoria comprovada com prática intensiva, 
                garantindo que você não apenas aprenda, mas implemente e veja 
                resultados imediatos.
              </p>
              
              <div className="space-y-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={benefit.title} className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-foreground-muted">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="btn-hero group" asChild>
                <a href="https://pay.hub.la/bZk8tJXer0JtaUU3l10n" target="_blank" rel="noopener noreferrer">
                  Começar hoje mesmo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>

            <div className="space-y-6">
              <div className="service-card">
                <BookOpen className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-card-foreground mb-3">Material Exclusivo</h3>
                <p className="text-foreground-muted">
                  Templates, checklists e guias práticos para aplicar imediatamente 
                  em sua rotina de trabalho.
                </p>
              </div>
              
              <div className="service-card">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-card-foreground mb-3">Grupo Exclusivo</h3>
                <p className="text-foreground-muted">
                  Acesso ao grupo privado com outros participantes para trocar 
                  experiências e manter a motivação.
                </p>
              </div>
              
              <div className="service-card">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-card-foreground mb-3">Acompanhamento</h3>
                <p className="text-foreground-muted">
                  Suporte direto durante os 7 dias para esclarecer dúvidas 
                  e garantir sua evolução.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Pronto para a transformação?
            </h2>
            <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de profissionais que já transformaram sua produtividade 
              com nosso Sprint. Garantia de 30 dias ou seu dinheiro de volta.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="btn-hero group" asChild>
                <a href="https://pay.hub.la/bZk8tJXer0JtaUU3l10n" target="_blank" rel="noopener noreferrer">
                  Garantir minha vaga
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="btn-secondary"
                onClick={() => setShowTestimonials(true)}
              >
                Ver depoimentos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Dialog */}
      <Dialog open={showTestimonials} onOpenChange={setShowTestimonials}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-card border-card-border">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-foreground mb-2">
              O que dizem os participantes
            </DialogTitle>
            <DialogDescription className="text-foreground-muted">
              Veja como o Sprint de Produtividade transformou a rotina de centenas de profissionais
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-background-secondary/50 p-6 rounded-xl border border-card-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-foreground-muted mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-card-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground-muted">{testimonial.role}</p>
                  <p className="text-xs text-foreground-muted/70">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SprintProdutividade;