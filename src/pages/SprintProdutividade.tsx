import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Clock,
  Target,
  Brain,
  Calendar,
  TrendingUp,
  Shield,
  Star,
  Play,
  Sparkles,
  Users,
  FileText,
  Video,
  MessageCircle,
  Gift,
  Quote,
  XCircle,
  AlertTriangle
} from "lucide-react";
import { trackStripeClick, trackCTAClick } from "@/lib/analytics";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import sprintImage from "@/assets/sprint-produtividade.png";

const SprintProdutividade = () => {
  const handlePurchase = () => {
    trackStripeClick('sprint_produtividade');
    window.open('https://www.notion.com/templates/sprint-de-organiza-o-7-dias', '_blank');
  };

  const handleDemo = () => {
    trackCTAClick('ver_demonstracao_sprint', 'sprint_produtividade');
    // Scroll to demo section
    document.getElementById('demonstracao')?.scrollIntoView({ behavior: 'smooth' });
  };

  const painPoints = [
    {
      icon: XCircle,
      title: "Você começa o dia sem saber por onde começar",
      description: "Abre o computador, olha a lista de tarefas... e trava. Tudo parece urgente, nada parece certo."
    },
    {
      icon: AlertTriangle,
      title: "Sua rotina é controlada por emergências",
      description: "Você passa o dia apagando incêndios. No fim, percebe que não avançou nada do que realmente importa."
    },
    {
      icon: Brain,
      title: "Procrastinação constante",
      description: "Você sabe o que precisa fazer, mas não consegue começar. A ansiedade cresce e o ciclo se repete."
    },
    {
      icon: Clock,
      title: "Falta de clareza sobre prioridades",
      description: "Tudo parece importante. Você trabalha muito, mas sente que não sai do lugar."
    }
  ];

  const roadmap = [
    { day: "Dia 1", title: "Captura Mental", result: "Mente limpa e todas as tarefas organizadas em um único lugar" },
    { day: "Dia 2", title: "Classificação Inteligente", result: "Prioridades definidas com clareza absoluta" },
    { day: "Dia 3", title: "Semana Ideal", result: "Rotina estruturada que respeita sua energia e foco" },
    { day: "Dia 4", title: "Cortando Distrações", result: "Ambiente digital otimizado para máxima concentração" },
    { day: "Dia 5", title: "Rotina Estratégica", result: "Rituais diários que sustentam sua produtividade" },
    { day: "Dia 6", title: "Organização Digital", result: "Arquivos e informações acessíveis em segundos" },
    { day: "Dia 7", title: "Planejamento Contínuo", result: "Sistema sustentável para manter os resultados" }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Clareza absoluta",
      description: "Saiba exatamente o que fazer a cada momento do dia, sem dúvidas ou ansiedade."
    },
    {
      icon: Zap,
      title: "Foco real",
      description: "Elimine distrações e entre em estado de fluxo com muito mais facilidade."
    },
    {
      icon: TrendingUp,
      title: "Ritmo consistente",
      description: "Construa uma rotina que funciona todos os dias, não apenas na segunda-feira."
    },
    {
      icon: Brain,
      title: "Menos ansiedade",
      description: "Pare de carregar tudo na cabeça. Confie no seu sistema e relaxe."
    },
    {
      icon: CheckCircle,
      title: "Execução de verdade",
      description: "Transforme intenções em ações. Finalmente risque tarefas importantes da lista."
    },
    {
      icon: Calendar,
      title: "Tempo para o que importa",
      description: "Recupere horas do seu dia para projetos pessoais, família e descanso."
    }
  ];

  const targetAudience = [
    "Empreendedores que se sentem sobrecarregados com demandas infinitas",
    "Profissionais que trabalham de casa e lutam com a autogestão",
    "Freelancers que precisam organizar múltiplos projetos",
    "Estudantes que querem otimizar tempo de estudo",
    "Qualquer pessoa que já tentou apps e métodos sem sucesso duradouro",
    "Quem quer parar de procrastinar e começar a executar de verdade"
  ];

  const includedItems = [
    { icon: FileText, title: "Template completo no Notion", description: "Sistema pronto para usar com todas as páginas e dashboards" },
    { icon: Video, title: "7 módulos em vídeo", description: "Aulas práticas e diretas explicando cada etapa do método" },
    { icon: CheckCircle, title: "Exercícios diários", description: "Desafios simples para aplicar imediatamente na sua rotina" },
    { icon: FileText, title: "Checklists e guias", description: "Material de apoio para consulta rápida" },
    { icon: MessageCircle, title: "Suporte via grupo", description: "Tire dúvidas e troque experiências com outros participantes" },
    { icon: Gift, title: "Bônus exclusivos", description: "Templates extras e recursos adicionais para potencializar resultados" }
  ];

  const testimonials = [
    {
      name: "Mariana Costa",
      role: "Gerente de Projetos",
      text: "Depois do Sprint consegui organizar melhor meu dia e parei de deixar tarefas importantes para última hora. O método da captura mental mudou tudo.",
      rating: 5
    },
    {
      name: "Roberto Silva",
      role: "Empreendedor",
      text: "Eu estava perdido com tantas tarefas. O Sprint me ensinou a priorizar o que realmente importa. Hoje consigo focar no que gera resultado.",
      rating: 5
    },
    {
      name: "Juliana Mendes",
      role: "Analista de Marketing",
      text: "A parte de cortando distrações foi um divisor de águas. Identifiquei que perdia mais de 2 horas por dia com notificações. Mudou minha vida.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Preciso saber usar o Notion?",
      answer: "Não! O Sprint foi criado para iniciantes. Os vídeos explicam tudo passo a passo, desde a criação da conta até a configuração completa do sistema."
    },
    {
      question: "Quanto tempo preciso dedicar por dia?",
      answer: "Cada módulo leva de 15 a 30 minutos para assistir e aplicar. O importante é a consistência, não a quantidade de horas."
    },
    {
      question: "E se o método não funcionar para mim?",
      answer: "Você tem 30 dias de garantia incondicional. Se não gostar ou não ver resultados, devolvemos 100% do seu investimento sem perguntas."
    },
    {
      question: "O acesso é vitalício?",
      answer: "Sim! Uma vez adquirido, você tem acesso permanente ao template, aos vídeos e a todas as atualizações futuras."
    },
    {
      question: "Funciona para qualquer profissão?",
      answer: "O Sprint é baseado em princípios universais de produtividade. Funciona para empreendedores, freelancers, CLT, estudantes e qualquer pessoa que queira organizar melhor sua rotina."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sprint de Produtividade | Destrave sua Rotina em 7 Dias - Focus</title>
        <meta name="description" content="Método de 7 dias para organizar sua rotina, criar foco real e executar o que importa. Sistema prático em Notion com exercícios diários. R$ 37,90 com garantia de 30 dias." />
        <meta name="keywords" content="produtividade, rotina produtiva, foco, organização pessoal, Notion, gestão pessoal, planejamento, sprint produtividade, método 7 dias, produtividade pessoal" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://focusinteligente.com.br/sprint-produtividade" />
        <meta property="og:title" content="Sprint de Produtividade | Destrave sua Rotina em 7 Dias" />
        <meta property="og:description" content="Método de 7 dias para organizar sua rotina, criar foco real e executar o que importa. Sistema prático em Notion com exercícios diários." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://focusinteligente.com.br/sprint-produtividade" />
        <meta property="og:image" content="https://focusinteligente.com.br/lovable-uploads/sprint-produtividade.png" />
        <meta property="product:price:amount" content="37.90" />
        <meta property="product:price:currency" content="BRL" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sprint de Produtividade | Focus" />
        <meta name="twitter:description" content="Método de 7 dias para destravara sua produtividade. Sistema em Notion com garantia de 30 dias." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Sprint de Produtividade 7 Dias",
            "description": "Método de 7 dias para organizar sua rotina, criar foco real e executar o que importa com sistema prático em Notion",
            "brand": {
              "@type": "Brand",
              "name": "Focus Gestão Empresarial"
            },
            "offers": {
              "@type": "Offer",
              "price": "37.90",
              "priceCurrency": "BRL",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-background-secondary border-b border-border/50">
        <div className="container-focus py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Sprint de Produtividade</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="container-focus relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-primary/30 bg-primary/5">
              <Zap className="w-4 h-4 mr-2 text-primary" />
              Método validado por +1.000 pessoas
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Destrave sua produtividade em 7 dias — com um sistema simples e direto no Notion
            </h1>
            
            <p className="text-xl text-foreground-muted mb-10 max-w-3xl mx-auto leading-relaxed">
              O Sprint de Produtividade é um método rápido para organizar sua rotina, criar foco real e executar o que importa — mesmo se você já tentou de tudo sem conseguir manter.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="btn-hero group text-lg px-8 py-6"
                onClick={handlePurchase}
              >
                Começar agora o Sprint
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6"
                onClick={handleDemo}
              >
                <Play className="w-5 h-5 mr-2" />
                Ver como funciona
              </Button>
            </div>

            {/* Social Proof Mini */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-foreground-muted">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                  ))}
                </div>
                <span className="text-sm">+1.000 pessoas transformadas</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
                <span className="text-sm ml-1">4.9/5 de avaliação</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-background">
        <div className="container-focus">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Você se reconhece aqui?
            </h2>
            <p className="text-lg text-foreground-muted">
              Esses são os sinais de que sua rotina precisa de um sistema de verdade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {painPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <Card key={index} className="p-6 border-destructive/20 bg-destructive/5 hover:border-destructive/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-destructive/10">
                      <IconComponent className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
                      <p className="text-foreground-muted text-sm">{point.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-foreground-muted italic">
              "Se você se identificou com pelo menos um desses pontos, o Sprint foi feito para você."
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30 bg-primary/5">
                <Sparkles className="w-4 h-4 mr-2 text-primary" />
                A Solução
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                O Sprint de Produtividade resolve isso em 7 dias
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-foreground-muted leading-relaxed">
                  O Sprint é um programa prático de <strong className="text-foreground">7 dias guiados</strong> que te ensina a construir um sistema de produtividade pessoal no Notion — simples de manter e poderoso nos resultados.
                </p>
                <p className="text-lg text-foreground-muted leading-relaxed">
                  Cada dia você aplica um passo concreto: da captura mental à organização digital, passando por priorização, rotinas e eliminação de distrações. No final, você terá uma <strong className="text-foreground">rotina clara, um sistema confiável e a sensação de controle</strong> que faltava.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Sem teoria excessiva</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">100% prático</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl -z-10" />
                <Card className="p-8 bg-card/80 backdrop-blur border-primary/20">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">7</div>
                    <div className="text-foreground font-semibold mb-4">dias de transformação</div>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-2 text-foreground-muted">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Exercícios diários práticos</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground-muted">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Sistema pronto no Notion</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground-muted">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Progresso visível a cada dia</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-background">
        <div className="container-focus">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sua jornada de 7 dias
            </h2>
            <p className="text-lg text-foreground-muted">
              Cada dia é um passo concreto rumo à sua nova rotina produtiva.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {roadmap.map((item, index) => (
                <Card key={index} className="p-6 hover:border-primary/30 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <span className="text-primary font-bold">{item.day}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                      </div>
                    </div>
                    <div className="md:ml-auto md:text-right">
                      <div className="flex items-center gap-2 text-primary">
                        <ArrowRight className="w-4 h-4 hidden md:block" />
                        <span className="text-sm font-medium">{item.result}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Intermediário */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="btn-hero group"
              onClick={handlePurchase}
            >
              Quero começar minha transformação
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demonstracao" className="py-20 bg-background-secondary">
        <div className="container-focus">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Veja o sistema na prática
            </h2>
            <p className="text-lg text-foreground-muted">
              Um preview do que você vai construir durante o Sprint.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <img 
                src={sprintImage} 
                alt="Preview do Sistema Sprint de Produtividade no Notion" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex items-end justify-center pb-8">
                <Button 
                  size="lg" 
                  className="btn-hero group"
                  onClick={handlePurchase}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Assistir demonstração completa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container-focus">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que você vai conquistar
            </h2>
            <p className="text-lg text-foreground-muted">
              Resultados reais que você vai sentir no dia a dia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-6 hover:border-primary/30 transition-all hover:shadow-elegant group">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-foreground-muted text-sm">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Para quem é o Sprint?
              </h2>
              <p className="text-lg text-foreground-muted">
                O método foi criado para quem quer resultados práticos, não teoria.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {targetAudience.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border/50">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-background">
        <div className="container-focus">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que está incluso no Sprint
            </h2>
            <p className="text-lg text-foreground-muted">
              Tudo que você precisa para transformar sua rotina.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {includedItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="p-6 border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-foreground-muted text-sm">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container-focus">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quem já fez, recomenda
            </h2>
            <p className="text-lg text-foreground-muted">
              Histórias reais de pessoas que transformaram sua produtividade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-3" />
                <p className="text-foreground-muted mb-4 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border/50 pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-foreground-muted">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container-focus">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 border-primary/20 bg-card/80 backdrop-blur text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10" />
              
              <Badge className="mb-6 bg-primary text-primary-foreground">
                Oferta especial
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comece agora sua transformação
              </h2>
              
              <p className="text-foreground-muted mb-8">
                Investimento único com acesso vitalício e garantia de 30 dias.
              </p>

              <div className="mb-8">
                <div className="text-foreground-muted line-through text-lg">De R$ 97,00</div>
                <div className="text-5xl font-bold text-foreground mb-2">
                  R$ <span className="text-primary">37,90</span>
                </div>
                <div className="text-foreground-muted text-sm">Pagamento único • Acesso imediato</div>
              </div>

              <Button 
                size="lg" 
                className="btn-hero group text-lg px-12 py-6 w-full md:w-auto"
                onClick={handlePurchase}
              >
                Quero começar meu Sprint
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex items-center justify-center gap-2 mt-6 text-foreground-muted text-sm">
                <Shield className="w-4 h-4 text-primary" />
                Garantia incondicional de 30 dias
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container-focus">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Perguntas frequentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground-muted">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-background-secondary border-t border-border/50">
        <div className="container-focus">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comece agora sua mudança de rotina com o Sprint de Produtividade
            </h2>
            <p className="text-lg text-foreground-muted mb-8">
              Em 7 dias você terá clareza, foco e um sistema que funciona de verdade.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="btn-hero group text-lg px-8"
                onClick={handlePurchase}
              >
                Começar agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8"
                onClick={handleDemo}
              >
                Ver demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SprintProdutividade;
