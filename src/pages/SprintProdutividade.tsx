import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  Quote,
  Shield
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
  const [selectedExclusive, setSelectedExclusive] = useState<number | null>(null);

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

  const exclusiveItems = [
    {
      icon: BookOpen,
      title: "Material Exclusivo",
      description: "Templates, checklists e guias práticos para aplicar imediatamente em sua rotina de trabalho.",
      gradient: "from-blue-500 to-cyan-500",
      details: "Você receberá acesso completo a uma biblioteca exclusiva com mais de 20 templates prontos para usar, checklists detalhados para cada metodologia ensinada, workbooks interativos em PDF para acompanhar seu progresso, guias rápidos de referência que você pode imprimir e deixar na sua mesa, além de planilhas e ferramentas digitais otimizadas. Todo material foi desenvolvido por especialistas em produtividade e já ajudou milhares de profissionais a transformar suas rotinas."
    },
    {
      icon: Users,
      title: "Grupo Exclusivo",
      description: "Acesso ao grupo privado com outros participantes para trocar experiências e manter a motivação.",
      gradient: "from-purple-500 to-pink-500",
      details: "Entre para uma comunidade vibrante de profissionais comprometidos com a produtividade. No grupo privado você compartilha suas conquistas e desafios, recebe apoio e motivação diária de outros participantes, troca experiências sobre a aplicação prática das técnicas, participa de desafios e dinâmicas exclusivas, faz networking qualificado com pessoas que pensam como você, e ainda tem acesso a conteúdos bônus compartilhados apenas no grupo. É um ambiente seguro e estimulante para seu crescimento."
    },
    {
      icon: Target,
      title: "Acompanhamento",
      description: "Suporte direto durante os 7 dias para esclarecer dúvidas e garantir sua evolução.",
      gradient: "from-orange-500 to-red-500",
      details: "Você não estará sozinho nessa jornada. Durante os 7 dias você terá suporte direto via grupo exclusivo para tirar todas as suas dúvidas, feedback personalizado sobre os exercícios que você realizar, orientação para adaptar as técnicas à sua realidade específica, acompanhamento do seu progresso para garantir que está no caminho certo, sessões de perguntas e respostas ao vivo, e motivação constante para manter seu foco e disciplina até o final. Nosso compromisso é com seu resultado real."
    }
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
      <Helmet>
        <title>Sprint de Produtividade 7 Dias | Transforme sua Rotina Profissional - Focus</title>
        <meta name="description" content="Programa intensivo de produtividade em 7 dias com metodologias comprovadas, exercícios práticos diários, material exclusivo e acompanhamento personalizado. GTD, Pomodoro, Time Blocking e mais técnicas para resultados reais." />
        <meta name="keywords" content="sprint produtividade, produtividade 7 dias, metodologias produtividade, GTD, pomodoro, time blocking, gestão tempo, rotina produtiva, organização pessoal, planejamento diário, foco concentração, eliminar distrações" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://focusinteligente.com.br/sprint-produtividade" />
        <meta property="og:title" content="Sprint de Produtividade 7 Dias - Transforme sua Rotina" />
        <meta property="og:description" content="Programa intensivo com metodologias comprovadas, exercícios práticos e acompanhamento. 98% de satisfação." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://focusinteligente.com.br/sprint-produtividade" />
        <meta property="og:image" content="https://focusinteligente.com.br/lovable-uploads/focus-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sprint de Produtividade 7 Dias - Focus" />
        <meta name="twitter:description" content="Programa intensivo de produtividade com metodologias comprovadas e resultados garantidos." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Sprint de Produtividade 7 Dias",
            "description": "Programa intensivo de produtividade com metodologias comprovadas, exercícios práticos diários e acompanhamento personalizado",
            "provider": {
              "@type": "Organization",
              "name": "Focus Gestão Empresarial",
              "url": "https://focusinteligente.com.br"
            },
            "educationalLevel": "Intermediário",
            "timeRequired": "P7D",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "1000",
              "bestRating": "5"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Início",
              "item": "https://focusinteligente.com.br/"
            }, {
              "@type": "ListItem",
              "position": 2,
              "name": "Sprint Produtividade",
              "item": "https://focusinteligente.com.br/sprint-produtividade"
            }]
          })}
        </script>
      </Helmet>
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
                <a href="https://www.notion.com/templates/sprint-de-organiza-o-7-dias" target="_blank" rel="noopener noreferrer">
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
                <a href="https://www.notion.com/templates/sprint-de-organiza-o-7-dias" target="_blank" rel="noopener noreferrer">
                  Começar hoje mesmo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>

            <div className="space-y-6">
              {exclusiveItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title}>
                    <Card 
                      className="card-hover border-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-elegant cursor-pointer"
                      onClick={() => setSelectedExclusive(index)}
                    >
                      <div className="p-6">
                        <div className="relative mb-4 flex justify-start">
                          <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 shadow-lg`}>
                            <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                              <IconComponent className="w-7 h-7 text-foreground" />
                            </div>
                          </div>
                          <div className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} blur-xl opacity-30`} />
                        </div>
                        <h3 className="text-xl font-bold text-card-foreground mb-3">
                          {item.title}
                        </h3>
                        <p className="text-foreground-muted mb-3">
                          {item.description}
                        </p>
                        <p className="text-sm text-primary hover:text-primary/80 transition-colors">
                          Clique para saber mais →
                        </p>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Exclusive Items Dialog */}
            <Dialog open={selectedExclusive !== null} onOpenChange={(open) => !open && setSelectedExclusive(null)}>
              <DialogContent className="max-w-2xl">
                {selectedExclusive !== null && (
                  <>
                    <DialogHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${exclusiveItems[selectedExclusive].gradient} p-0.5 shadow-lg`}>
                          <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                            {(() => {
                              const IconComponent = exclusiveItems[selectedExclusive].icon;
                              return <IconComponent className="w-8 h-8 text-foreground" />;
                            })()}
                          </div>
                        </div>
                        <div className="text-left">
                          <DialogTitle className="text-2xl">
                            {exclusiveItems[selectedExclusive].title}
                          </DialogTitle>
                        </div>
                      </div>
                      <DialogDescription className="text-base leading-relaxed text-foreground-muted">
                        {exclusiveItems[selectedExclusive].details}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-6">
                      <Button 
                        className="btn-hero w-full group"
                        asChild
                      >
                        <a href="https://pay.hub.la/bZk8tJXer0JtaUU3l10n" target="_blank" rel="noopener noreferrer">
                          Garantir meu acesso agora
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </Button>
                    </div>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Pricing & Guarantee Section */}
      <section className="section-padding">
        <div className="container-focus">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Pricing Card */}
              <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="p-8 md:p-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center px-3 py-1 bg-yellow-500/20 text-yellow-600 text-xs font-semibold rounded-full mb-4">
                      🔥 Oferta por Tempo Limitado
                    </div>
                    <div className="mb-2">
                      <span className="text-foreground-muted line-through text-2xl">R$ 197</span>
                    </div>
                    <div className="text-5xl font-bold text-foreground mb-2">
                      R$ 97
                    </div>
                    <p className="text-foreground-muted">pagamento único • acesso vitalício</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">7 dias de transformação</p>
                        <p className="text-sm text-foreground-muted">Conteúdo prático e aplicável</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Material exclusivo</p>
                        <p className="text-sm text-foreground-muted">Templates e checklists</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Grupo exclusivo</p>
                        <p className="text-sm text-foreground-muted">Networking e suporte</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Acompanhamento diário</p>
                        <p className="text-sm text-foreground-muted">Durante os 7 dias</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="btn-hero w-full group" asChild>
                    <a href="https://www.notion.com/templates/sprint-de-organiza-o-7-dias" target="_blank" rel="noopener noreferrer">
                      Garantir minha vaga agora
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                  
                  <p className="text-center text-xs text-foreground-muted mt-4">
                    🔒 Pagamento seguro • Últimas vagas
                  </p>
                </div>
              </Card>
              
              {/* Guarantee Card */}
              <Card className="border-2 border-primary/30">
                <div className="p-8 md:p-10">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4">
                      <Shield className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Garantia Incondicional de 30 Dias
                    </h3>
                  </div>
                  
                  <p className="text-foreground-muted leading-relaxed mb-6">
                    Estamos tão confiantes na qualidade do Sprint de Produtividade que oferecemos 
                    garantia total de 30 dias. Se você seguir os exercícios e não ver melhoria 
                    significativa na sua produtividade, devolvemos 100% do seu investimento.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground-muted">Sem perguntas complicadas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground-muted">Reembolso total em até 7 dias</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground-muted">Risco zero para você</span>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      <strong className="text-foreground">Por que oferecemos isso?</strong><br />
                      Porque sabemos que nosso método funciona. Mais de 98% dos participantes 
                      ficam satisfeitos e veem resultados reais. Queremos que você tenha total 
                      tranquilidade ao fazer sua inscrição.
                    </p>
                  </div>
                </div>
              </Card>
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
                <a href="https://www.notion.com/templates/sprint-de-organiza-o-7-dias" target="_blank" rel="noopener noreferrer">
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