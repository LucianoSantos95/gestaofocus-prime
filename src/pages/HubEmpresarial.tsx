import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { 
  CheckCircle, 
  ArrowRight,
  Shield,
  Zap,
  TrendingUp,
  Star,
  Play,
  Users,
  Target,
  Clock,
  DollarSign,
  BarChart3,
  FileText,
  Layers,
  AlertTriangle,
  XCircle,
  Sparkles,
  Calendar,
  UserCheck,
  PieChart,
  MessagesSquare,
  FolderKanban,
  Receipt
} from "lucide-react";
import { trackStripeClick, trackCTAClick } from "@/lib/analytics";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HubEmpresarial = () => {
  const handlePurchaseClick = (location: string) => {
    trackStripeClick(location);
    trackCTAClick("Adquirir Hub Empresarial", location);
    window.open("https://buy.stripe.com/fZu28rbs8gN73ta6F7gUM0d", "_blank");
  };

  const handleDemoClick = () => {
    trackCTAClick("Ver Demonstração", "demo-section");
    window.open("https://www.notion.so/Hub-Empresarial-PRO-Demo", "_blank");
  };

  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Planilhas espalhadas",
      description: "Informações em 10 arquivos diferentes que ninguém sabe onde estão"
    },
    {
      icon: MessagesSquare,
      title: "WhatsApp como CRM",
      description: "Leads perdidos em conversas antigas que você nem lembra mais"
    },
    {
      icon: Clock,
      title: "Sempre apagando incêndio",
      description: "O dia acaba e você não fez nada do que planejou"
    },
    {
      icon: XCircle,
      title: "Zero visão financeira",
      description: "Não sabe se está lucrando ou perdendo dinheiro no mês"
    },
    {
      icon: Users,
      title: "Equipe desalinhada",
      description: "Cada um faz de um jeito, sem padrão nem processo definido"
    },
    {
      icon: FileText,
      title: "Cabeça como HD",
      description: "Tudo guardado na memória — até o dia que você esquece algo importante"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Nunca mais perca um lead",
      description: "CRM visual com funil de vendas integrado. Saiba exatamente onde cada cliente está.",
      highlight: "CRM Completo"
    },
    {
      icon: Calendar,
      title: "Entregas sempre no prazo",
      description: "Gestão de projetos com cronograma, tarefas e responsáveis definidos.",
      highlight: "Projetos"
    },
    {
      icon: DollarSign,
      title: "Previsibilidade e lucro",
      description: "Controle financeiro com fluxo de caixa, categorias e gráficos claros.",
      highlight: "Financeiro"
    },
    {
      icon: BarChart3,
      title: "Visão rápida do que importa",
      description: "Dashboards prontos que mostram a saúde do seu negócio em segundos.",
      highlight: "Dashboards"
    },
    {
      icon: Zap,
      title: "Fluxo diário produtivo",
      description: "Rotinas e processos que funcionam no piloto automático.",
      highlight: "Rotinas"
    },
    {
      icon: UserCheck,
      title: "Equipe organizada",
      description: "RH estruturado com onboarding, vagas e avaliação de desempenho.",
      highlight: "RH"
    }
  ];

  const modules = [
    {
      title: "Comece por Aqui",
      items: ["Aulas gravadas de implementação", "Tutorial passo a passo", "Dicas de configuração", "Suporte via WhatsApp"]
    },
    {
      title: "Financeiro",
      items: ["Fluxo de caixa completo", "Categorias de receitas/despesas", "Controle de cartão de crédito", "Gráficos e análises", "Investimentos e economias"]
    },
    {
      title: "CRM & Vendas",
      items: ["Funil de vendas visual", "Base de leads organizada", "Formulário de captação", "Histórico de negociações", "Documentos e propostas"]
    },
    {
      title: "Projetos",
      items: ["Gestão completa de projetos", "Tarefas com responsáveis", "Análise de riscos", "Marcos e objetivos", "Decisões documentadas"]
    },
    {
      title: "Marketing",
      items: ["Planejamento de campanhas", "Calendário de conteúdo", "Análise de concorrência", "Ideias e referências", "Post campeão"]
    },
    {
      title: "RH",
      items: ["Gestão de pessoas", "Controle de vagas", "Onboarding estruturado", "Avaliação de desempenho", "Documentos de colaboradores"]
    },
    {
      title: "Atividades",
      items: ["Tarefas gerais", "Reuniões organizadas", "Processos e rotinas", "Objetivos e metas", "Visualizações personalizadas"]
    }
  ];

  const testimonials = [
    {
      name: "Carla M.",
      role: "Dona de agência de marketing",
      content: "Finalmente consegui enxergar meu financeiro de verdade. Descobri gastos que nem sabia que tinha!",
      rating: 5
    },
    {
      name: "Rafael S.",
      role: "Freelancer de design",
      content: "Saí do caos das planilhas pra um sistema que realmente funciona. Meus projetos nunca mais atrasaram.",
      rating: 5
    },
    {
      name: "Amanda L.",
      role: "Consultora empresarial",
      content: "O módulo de CRM mudou minha forma de lidar com clientes. Não perco mais nenhuma oportunidade.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Preciso saber usar o Notion?",
      answer: "Não! O módulo 'Comece por Aqui' inclui aulas gravadas que ensinam tudo do zero. Mesmo que você nunca tenha aberto o Notion, vai conseguir usar o sistema seguindo o passo a passo."
    },
    {
      question: "Como recebo acesso ao sistema?",
      answer: "Imediatamente após a compra, você recebe um e-mail com o link para duplicar o template no seu Notion. O acesso é instantâneo e vitalício."
    },
    {
      question: "Preciso pagar mensalidade?",
      answer: "Não! É um pagamento único de R$ 349. Você tem acesso vitalício ao sistema e a todas as atualizações futuras sem custo adicional. O Notion tem plano gratuito que já atende a maioria dos usuários."
    },
    {
      question: "Funciona para qualquer tipo de empresa?",
      answer: "Sim! O sistema é flexível e funciona para freelancers, pequenas empresas, startups, agências, consultorias e diversos outros tipos de negócio. A estrutura modular se adapta à sua realidade."
    },
    {
      question: "Posso personalizar o sistema?",
      answer: "Totalmente! O Notion permite personalização completa. Você pode adicionar campos, mudar cores, criar novas visualizações e adaptar tudo ao seu fluxo de trabalho."
    },
    {
      question: "E se eu não gostar?",
      answer: "Oferecemos garantia de 7 dias. Se não gostar do sistema por qualquer motivo, devolvemos 100% do seu dinheiro sem perguntas. Seu risco é zero."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Gestão Empresarial Completa em Notion | Hub Empresarial PRO - R$ 349</title>
        <meta name="description" content="Centralize clientes, tarefas, projetos e financeiro em um único sistema no Notion. 7 módulos integrados, dashboards claros e produtividade real. Acesso vitalício por R$ 349." />
        <meta name="keywords" content="gestão empresarial, sistemas em Notion, produtividade, CRM em Notion, dashboard, financeiro, processos, organização empresarial, Notion para empresas" />
        
        <meta property="og:title" content="Gestão Empresarial Completa em Notion | Hub Empresarial PRO" />
        <meta property="og:description" content="Centralize clientes, tarefas, projetos e financeiro em um único sistema. 7 módulos integrados por R$ 349." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="https://focusinteligente.com.br/lovable-uploads/hub-empresarial-og.jpg" />
        <meta property="og:url" content="https://focusinteligente.com.br/hub-empresarial" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gestão Empresarial Completa em Notion" />
        <meta name="twitter:description" content="Sistema completo de gestão empresarial no Notion por R$ 349" />
        
        <link rel="canonical" href="https://focusinteligente.com.br/hub-empresarial" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Hub Empresarial PRO",
            "description": "Sistema completo de gestão empresarial no Notion com 7 módulos integrados: Financeiro, RH, CRM, Marketing, Projetos, Atividades e tutoriais.",
            "image": "https://focusinteligente.com.br/lovable-uploads/hub-empresarial-og.jpg",
            "brand": { "@type": "Brand", "name": "Focus Inteligente" },
            "offers": {
              "@type": "Offer",
              "url": "https://focusinteligente.com.br/hub-empresarial",
              "priceCurrency": "BRL",
              "price": "349.00",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "47",
              "bestRating": "5"
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
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
      </Helmet>

      <Navigation />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-24 pb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Hub Empresarial PRO</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
        
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Sistema completo para sua empresa
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Gestão empresarial completa em Notion —{" "}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                organizada, visual e fácil de usar
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Centralize clientes, tarefas, projetos e financeiro em um único sistema com dashboards claros, produtividade real e visão estratégica do seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-all shadow-lg shadow-primary/25"
                onClick={() => handlePurchaseClick("hero")}
              >
                Quero o Hub Empresarial PRO
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
                onClick={() => document.getElementById('problema')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conhecer o sistema
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>7 módulos integrados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Acesso vitalício</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 1: Problema/Agitação */}
      <section id="problema" className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Você sente que está sempre correndo atrás do próprio rabo?
            </h2>
            <p className="text-lg text-muted-foreground">
              Se identificou com alguma dessas situações, você não está sozinho:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {painPoints.map((pain, index) => (
              <Card key={index} className="p-6 bg-card/50 border-border/50 hover:border-destructive/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-destructive/10">
                    <pain.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{pain.title}</h3>
                    <p className="text-sm text-muted-foreground">{pain.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 2: Solução */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                A Solução
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                O Hub Empresarial PRO resolve tudo isso em um único lugar
              </h2>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
              <p className="text-lg leading-relaxed mb-6">
                O <strong>Hub Empresarial PRO</strong> é um sistema completo de gestão empresarial desenvolvido no Notion que centraliza todas as áreas do seu negócio: <span className="text-primary font-medium">financeiro, clientes, projetos, marketing, RH e rotinas</span> — tudo conectado e visual.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Chega de informações espalhadas. Com dashboards claros e processos definidos, você finalmente tem controle real da sua empresa e toma decisões baseadas em dados, não em achismos.
              </p>
            </div>

            <div className="flex justify-center mt-10">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow"
                onClick={() => handlePurchaseClick("solution")}
              >
                Quero organizar minha empresa agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Demonstração Visual */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Veja o sistema na prática
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Interface limpa, visual e totalmente personalizável no Notion
            </p>

            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10 mb-10">
              <video
                className="w-full"
                controls
                poster="/lovable-uploads/hub-empresarial-og.jpg"
              >
                <source src="/videos/hub-empresarial-demo.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Benefícios */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que você ganha com o Hub PRO
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada módulo foi pensado para resolver um problema real da sua gestão
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group">
                <Badge variant="outline" className="mb-4 text-xs">{benefit.highlight}</Badge>
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 5: O que está incluso */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que está incluso no Hub Empresarial PRO
            </h2>
            <p className="text-lg text-muted-foreground">
              7 módulos completos + aulas + suporte por apenas <span className="text-primary font-bold">R$ 349</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {modules.map((module, index) => (
              <Card key={index} className="p-6 bg-card/80">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  {module.title}
                </h3>
                <ul className="space-y-2">
                  {module.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button 
              size="lg"
              className="text-lg px-10 py-6 bg-gradient-to-r from-primary to-primary-glow shadow-lg shadow-primary/25"
              onClick={() => handlePurchaseClick("modules")}
            >
              Quero o Hub Empresarial PRO agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Seção 6: Prova Social */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quem já usa, aprova
            </h2>
            <p className="text-lg text-muted-foreground">
              Veja o que nossos clientes estão dizendo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card/80">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 7: CTA Forte */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Shield className="w-4 h-4 mr-2" />
              Garantia de 7 dias
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para transformar sua gestão?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Acesso vitalício ao sistema completo + atualizações gratuitas + suporte via WhatsApp
            </p>

            <div className="bg-card rounded-2xl p-8 border border-border/50 mb-8 inline-block">
              <div className="text-sm text-muted-foreground line-through mb-1">De R$ 497</div>
              <div className="text-5xl font-bold text-primary mb-2">R$ 349</div>
              <div className="text-sm text-muted-foreground">Pagamento único • Acesso vitalício</div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Button 
                size="lg"
                className="text-xl px-12 py-7 bg-gradient-to-r from-primary to-primary-glow shadow-xl shadow-primary/30 hover:shadow-primary/40 transition-all"
                onClick={() => handlePurchaseClick("cta-section")}
              >
                Quero o Hub Empresarial PRO agora
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Shield className="h-4 w-4" />
                7 dias de garantia incondicional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 8: FAQ */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-lg text-muted-foreground">
                Tire suas dúvidas antes de comprar
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="bg-card/50 rounded-lg border border-border/50 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Rodapé com CTA Final */}
      <section className="py-16 bg-muted/30 border-t border-border/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Comece agora sua gestão empresarial inteligente com Notion
            </h2>
            <p className="text-muted-foreground mb-8">
              Junte-se a dezenas de empresários que já transformaram sua gestão
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow"
                onClick={() => handlePurchaseClick("footer")}
              >
                Comprar Agora — R$ 349
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleDemoClick}
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Demonstrativo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HubEmpresarial;
