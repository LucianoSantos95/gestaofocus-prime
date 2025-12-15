import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  TrendingUp,
  PieChart,
  FileText,
  Calendar,
  BarChart3,
  Wallet,
  Target,
  Clock,
  CheckCircle2,
  ArrowRight,
  Play,
  Shield,
  Sparkles,
  AlertTriangle,
  XCircle,
  Users,
  Briefcase,
  Building2,
  Lightbulb,
  Star,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const ControleFinanceiroPro = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const problems = [
    {
      icon: XCircle,
      title: "Planilhas desorganizadas",
      description: "Múltiplos arquivos espalhados, fórmulas quebradas e dados desatualizados que geram confusão",
    },
    {
      icon: AlertTriangle,
      title: "Falta de visão clara",
      description: "Você não sabe exatamente quanto entra, quanto sai e qual o real lucro do seu negócio",
    },
    {
      icon: Clock,
      title: "Decisões no escuro",
      description: "Sem dados confiáveis, você toma decisões baseadas em achismo e intuição",
    },
    {
      icon: Target,
      title: "Surpresas no final do mês",
      description: "Contas inesperadas, fluxo de caixa negativo e falta de previsibilidade financeira",
    },
  ];

  const solutions = [
    {
      icon: PieChart,
      title: "Dashboard visual completo",
      description: "Veja receitas, despesas, lucro e indicadores em um único painel intuitivo",
    },
    {
      icon: TrendingUp,
      title: "Fluxo de caixa inteligente",
      description: "Acompanhe entradas e saídas com projeções automáticas para os próximos meses",
    },
    {
      icon: FileText,
      title: "Gestão de contratos",
      description: "Controle todos os seus contratos, vencimentos e valores recorrentes",
    },
    {
      icon: BarChart3,
      title: "Relatórios e projeções",
      description: "Análises automáticas que mostram tendências e ajudam no planejamento",
    },
  ];

  const includes = [
    { icon: PieChart, title: "Dashboard financeiro visual", description: "Painel com todos os indicadores importantes" },
    { icon: TrendingUp, title: "Fluxo de caixa completo", description: "Controle de entradas e saídas com categorias" },
    { icon: FileText, title: "Gestão de contratos", description: "Controle de contratos ativos e vencimentos" },
    { icon: Sparkles, title: "Categorias automáticas", description: "Organização inteligente de transações" },
    { icon: BarChart3, title: "Relatórios mensais", description: "Análises automáticas de performance" },
    { icon: Calendar, title: "Calendário financeiro", description: "Visualize compromissos e vencimentos" },
    { icon: Target, title: "Visão anual completa", description: "Planejamento e acompanhamento do ano" },
    { icon: Play, title: "Tutoriais em vídeo", description: "Aprenda a usar cada funcionalidade" },
  ];

  const benefits = [
    "Clareza total sobre a saúde financeira do seu negócio",
    "Previsibilidade de caixa para os próximos meses",
    "Decisões baseadas em dados reais, não em achismo",
    "Economia de tempo com automações inteligentes",
    "Redução de surpresas e imprevistos financeiros",
    "Controle profissional sem complexidade",
  ];

  const audiences = [
    { icon: Users, title: "MEIs e autônomos", description: "Que precisam organizar receitas e despesas de forma simples" },
    { icon: Briefcase, title: "Freelancers e prestadores", description: "Que querem controlar contratos e fluxo de caixa" },
    { icon: Building2, title: "Pequenas empresas", description: "Que buscam gestão financeira profissional sem ERP complexo" },
    { icon: Lightbulb, title: "Agências e consultorias", description: "Que precisam acompanhar projetos e receitas recorrentes" },
    { icon: Target, title: "Empreendedores digitais", description: "Que querem visão clara do crescimento do negócio" },
  ];

  const faqs = [
    {
      question: "Preciso saber usar o Notion para utilizar o sistema?",
      answer: "Não! O sistema vem pronto para usar com tutoriais em vídeo que ensinam tudo do zero. Você só precisa duplicar o template e começar a preencher seus dados.",
    },
    {
      question: "Consigo adaptar o sistema para o meu negócio?",
      answer: "Sim! O Notion é totalmente personalizável. Você pode ajustar categorias, criar novas visualizações e adaptar às necessidades específicas da sua empresa.",
    },
    {
      question: "O sistema funciona para pessoa física também?",
      answer: "O Controle Financeiro PRO foi desenhado para gestão empresarial, mas pode ser adaptado para uso pessoal se você preferir.",
    },
    {
      question: "Recebo atualizações futuras?",
      answer: "Sim! Todas as atualizações e melhorias do sistema são enviadas gratuitamente para quem já adquiriu.",
    },
    {
      question: "Como funciona a garantia?",
      answer: "Você tem 7 dias para testar o sistema. Se não gostar por qualquer motivo, devolvemos 100% do seu investimento.",
    },
    {
      question: "Posso usar no celular?",
      answer: "Sim! O Notion funciona perfeitamente no celular, tablet e computador. Seus dados ficam sincronizados em todos os dispositivos.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Controle Financeiro PRO | Sistema Financeiro em Notion para Empresas</title>
        <meta
          name="description"
          content="Sistema de controle financeiro empresarial em Notion. Dashboard visual, fluxo de caixa, gestão de contratos e projeções. Clareza total para decisões melhores."
        />
        <meta
          name="keywords"
          content="controle financeiro Notion, sistema financeiro, fluxo de caixa, gestão empresarial, produtividade financeira, dashboard financeiro"
        />
        <link rel="canonical" href="https://focusinteligente.com.br/controle-financeiro-pro" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Controle Financeiro PRO",
            description: "Sistema de controle financeiro empresarial em Notion com dashboard, fluxo de caixa e gestão de contratos.",
            brand: { "@type": "Brand", name: "Focus" },
            offers: {
              "@type": "Offer",
              price: "297.00",
              priceCurrency: "BRL",
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-24 pb-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/">Início</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Controle Financeiro PRO</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center space-y-8">
              <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 text-primary">
                <Wallet className="w-4 h-4 mr-2" />
                Sistema Financeiro Completo
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Controle financeiro empresarial{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  claro, simples e inteligente
                </span>{" "}
                — 100% em Notion
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                O Controle Financeiro PRO centraliza receitas, despesas, contratos, projeções e indicadores 
                em um único sistema visual e fácil de usar. Ganhe clareza, tome decisões melhores e 
                acompanhe o crescimento do seu negócio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                  <Wallet className="w-5 h-5 mr-2" />
                  Quero o Controle Financeiro PRO
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Play className="w-5 h-5 mr-2" />
                  Ver demonstração
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  Garantia de 7 dias
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Acesso imediato
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Você reconhece algum desses problemas?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A maioria dos empreendedores enfrenta os mesmos desafios financeiros todos os dias
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <Card key={index} className="bg-red-500/5 border-red-500/20 hover:border-red-500/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <problem.icon className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                        <p className="text-muted-foreground">{problem.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                A solução: gestão financeira visual e inteligente
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                O Controle Financeiro PRO transforma dados confusos em clareza e controle real
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <Card key={index} className="bg-primary/5 border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <solution.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{solution.title}</h3>
                        <p className="text-muted-foreground">{solution.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Quero organizar minhas finanças
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                O que está incluso no sistema
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Tudo o que você precisa para ter controle financeiro profissional
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {includes.map((item, index) => (
                <Card key={index} className="bg-background/50 hover:bg-background transition-colors">
                  <CardContent className="p-5 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Veja o sistema em ação
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Interface limpa, visual e fácil de usar — do jeito que gestão financeira deveria ser
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/50">
              <video
                className="w-full"
                controls
                poster="/lovable-uploads/controle-financeiro-video-cover.png"
              >
                <source src="/videos/controle-financeiro-demo.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                O que você ganha com o Controle Financeiro PRO
              </h2>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/30">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-10">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Quero esses resultados
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Audience Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Para quem é o Controle Financeiro PRO
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                O sistema foi criado para quem precisa de gestão financeira profissional sem complexidade
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {audiences.map((audience, index) => (
                <Card key={index} className="bg-background/50 hover:bg-background transition-colors">
                  <CardContent className="p-5">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <audience.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{audience.title}</h3>
                        <p className="text-sm text-muted-foreground">{audience.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                O que dizem nossos clientes
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-background/50">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "Depoimento em breve..."
                    </p>
                      <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20" />
                      <div>
                        <p className="font-medium text-sm">Nome do Cliente</p>
                        <p className="text-xs text-muted-foreground">Empresa</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <CardContent className="p-8 md:p-12 text-center">
                <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
                  Oferta Especial
                </Badge>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Controle Financeiro PRO
                </h2>

                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                  Tenha controle total das suas finanças empresariais com um sistema visual e inteligente
                </p>

                <div className="mb-8">
                  <p className="text-sm text-muted-foreground line-through mb-1">De R$ 497</p>
                  <p className="text-5xl font-bold text-primary">R$ 297</p>
                  <p className="text-sm text-muted-foreground mt-2">Pagamento único • Acesso vitalício</p>
                </div>

                <Button size="lg" className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 mb-6">
                  <Wallet className="w-5 h-5 mr-2" />
                  Quero organizar minhas finanças agora
                </Button>

                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Garantia de 7 dias
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Acesso imediato
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Perguntas frequentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background/50 rounded-xl border border-border/50 px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-t from-primary/5 to-transparent">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comece hoje sua gestão financeira inteligente
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Organize suas finanças, tenha clareza nos números e tome decisões melhores para o seu negócio
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Wallet className="w-5 h-5 mr-2" />
                Comprar agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                Ver demonstração
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ControleFinanceiroPro;
