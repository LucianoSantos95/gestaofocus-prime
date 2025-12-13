import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sparkles,
  Target,
  LayoutGrid,
  Zap,
  Users,
  Briefcase,
  Building2,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Calendar,
  FileText,
  Settings,
  TrendingUp,
  Clock,
  Brain,
  Rocket,
  Gift,
  Star,
  ChevronRight,
  Play,
  BookOpen,
  Workflow,
  ListChecks,
} from "lucide-react";
import { Link } from "react-router-dom";
import WaitlistFormModal from "@/components/WaitlistFormModal";

const FocusPro = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const pillars = [
    {
      icon: LayoutGrid,
      title: "Gestão Empresarial Simplificada",
      description: "Aprenda a organizar finanças, projetos, clientes e processos de forma visual e prática — sem ferramentas complexas.",
    },
    {
      icon: Target,
      title: "Notion para Empresas",
      description: "Domine o Notion como ferramenta central de gestão. Crie sistemas, dashboards e fluxos de trabalho eficientes.",
    },
    {
      icon: Brain,
      title: "IA Aplicada ao Negócio",
      description: "Use inteligência artificial para automatizar tarefas, gerar insights e acelerar decisões no dia a dia.",
    },
  ];

  const audiences = [
    { icon: Users, title: "Empreendedores solo", description: "Que fazem tudo sozinhos e precisam de sistemas simples" },
    { icon: Briefcase, title: "Freelancers e autônomos", description: "Que querem profissionalizar a gestão do negócio" },
    { icon: Building2, title: "Pequenas empresas", description: "Que buscam organização sem ERP complexo" },
    { icon: Lightbulb, title: "Criadores de conteúdo", description: "Que precisam gerenciar projetos e rotinas" },
    { icon: Rocket, title: "Startups em fase inicial", description: "Que precisam estruturar processos rapidamente" },
  ];

  const features = [
    { icon: BookOpen, title: "Trilhas de aprendizado", description: "Conteúdos organizados por tema e nível" },
    { icon: Settings, title: "Ferramentas prontas", description: "Sistemas em Notion para usar imediatamente" },
    { icon: FileText, title: "Templates exclusivos", description: "Modelos prontos para cada área da gestão" },
    { icon: ListChecks, title: "Planos de ação", description: "Roteiros práticos para implementar mudanças" },
    { icon: Calendar, title: "Rotinas guiadas", description: "Checklists e rituais para manter a consistência" },
    { icon: Workflow, title: "Mini automações", description: "Processos automatizados para ganhar tempo" },
  ];

  const benefits = [
    "Clareza total sobre o que fazer e como fazer",
    "Processos organizados que funcionam sem você",
    "Produtividade real com rotinas que fazem sentido",
    "Decisões baseadas em dados, não em achismo",
    "Tempo livre para focar no que realmente importa",
    "Negócio estruturado para crescer com segurança",
  ];

  const waitlistBenefits = [
    { icon: Gift, title: "Benefícios de fundador", description: "Condições especiais para quem entra primeiro" },
    { icon: Star, title: "Descontos exclusivos", description: "Preços diferenciados no lançamento" },
    { icon: Rocket, title: "Acesso antecipado", description: "Entre antes de todo mundo" },
  ];

  const timeline = [
    { week: "Semana 1", title: "Clareza", description: "Diagnóstico e visão clara do negócio", color: "from-blue-500 to-blue-600" },
    { week: "Semana 2", title: "Processos", description: "Estruturação de fluxos essenciais", color: "from-purple-500 to-purple-600" },
    { week: "Semana 3", title: "Produtividade", description: "Rotinas e rituais que funcionam", color: "from-pink-500 to-pink-600" },
    { week: "Semana 4", title: "Financeiro", description: "Controle e visibilidade dos números", color: "from-orange-500 to-orange-600" },
    { week: "Continuidade", title: "IA + Evolução", description: "Automações e crescimento contínuo", color: "from-primary to-accent" },
  ];

  const faqs = [
    {
      question: "Preciso saber usar o Notion para participar?",
      answer: "Não! Temos trilhas específicas para iniciantes. Você vai aprender do zero, com tutoriais práticos e passo a passo.",
    },
    {
      question: "Como funciona o acesso às trilhas?",
      answer: "Você terá acesso a todas as trilhas disponíveis na sua assinatura, podendo estudar no seu ritmo e revisitar quando quiser.",
    },
    {
      question: "Os templates estão inclusos?",
      answer: "Sim! Todos os templates e ferramentas mencionados nas trilhas estão inclusos na sua assinatura, prontos para duplicar e usar.",
    },
    {
      question: "Terei suporte se tiver dúvidas?",
      answer: "Sim! Você terá acesso a uma comunidade exclusiva e suporte para tirar dúvidas sobre implementação.",
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento, sem multas ou burocracia.",
    },
    {
      question: "Quando a Focus Pro será lançada?",
      answer: "Estamos em fase final de desenvolvimento. Quem entrar na lista de espera será avisado em primeira mão e terá condições especiais.",
    },
  ];

  const openWaitlistModal = () => {
    setIsWaitlistOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Focus Pro | Gestão Empresarial, Notion e IA para Seu Negócio</title>
        <meta
          name="description"
          content="Área exclusiva com trilhas de gestão empresarial, Notion para empresas e IA aplicada ao negócio. Organize, estruture e escale seu negócio com clareza."
        />
        <meta
          name="keywords"
          content="gestão empresarial, Notion, produtividade, IA no negócio, área Pro, trilhas de gestão, ferramentas de gestão, Focus Pro"
        />
        <link rel="canonical" href="https://focusinteligente.com.br/focus-pro" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Focus Pro",
            description: "Área exclusiva com trilhas de gestão empresarial, Notion e IA para organizar seu negócio.",
            brand: { "@type": "Brand", name: "Focus" },
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center space-y-8">
              <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 text-primary">
                <Sparkles className="w-4 h-4 mr-2" />
                Em breve
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Focus Pro — Gestão empresarial{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  prática, inteligente e sem complicação
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Trilhas, ferramentas e conteúdos para você organizar seu negócio, estruturar processos, 
                dominar Notion e aplicar IA na sua gestão — tudo no seu ritmo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-lg px-8 py-6" onClick={openWaitlistModal}>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Entrar na lista de espera
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Seja avisado em primeira mão e garanta condições especiais de lançamento
              </p>
            </div>
          </div>
        </section>

        {/* What is Focus Pro */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                O que é a Focus Pro?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                A Focus Pro é uma área exclusiva com trilhas de aprendizado, ferramentas práticas e 
                conteúdos focados em gestão real de pequenos negócios. Aqui você aprende a organizar 
                finanças, processos, projetos e equipes usando Notion e inteligência artificial — 
                sem complicação, sem teoria excessiva, direto ao ponto.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Tudo foi pensado para quem precisa de resultados práticos, não de mais conteúdo para 
                acumular. Cada trilha entrega transformação real no seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Three Pillars */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                As 3 frentes principais
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Conteúdo organizado para você dominar o que realmente importa na gestão
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((pillar, index) => (
                <Card key={index} className="bg-background/50 border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <pillar.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground">{pillar.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* For Who */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Para quem é a Focus Pro
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Criamos a Focus Pro pensando em quem precisa de gestão prática, não de teoria
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

            <div className="text-center mt-10">
              <Button size="lg" onClick={openWaitlistModal}>
                Entrar na lista de espera
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* What You Find Inside */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                O que você encontra dentro
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Tudo o que você precisa para transformar sua gestão em um sistema que funciona
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="bg-primary/5 border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-5">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                O que você ganha com a Focus Pro
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
          </div>
        </section>

        {/* Why Join Waitlist */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por que entrar na lista de espera?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Quem entra agora garante vantagens exclusivas no lançamento
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {waitlistBenefits.map((benefit, index) => (
                <Card key={index} className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button size="lg" className="text-lg px-10 py-7" onClick={openWaitlistModal}>
                <Sparkles className="w-5 h-5 mr-2" />
                Entrar na lista da Focus Pro
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sua linha do tempo de transformação
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Veja como sua gestão evolui semana a semana dentro da Focus Pro
              </p>
            </div>

            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-5 rounded-xl bg-background/50 border border-border/30">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-xs text-center leading-tight px-2">
                      {item.week}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  {index < timeline.length - 1 && (
                    <ChevronRight className="w-5 h-5 text-muted-foreground hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
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
                  className="bg-card/50 rounded-xl border border-border/50 px-6"
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

        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-to-t from-primary/5 to-transparent">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Construa uma gestão inteligente — comece pela Focus Pro
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre na lista de espera e seja avisado em primeira mão quando abrirmos as vagas
            </p>

            <Button size="lg" className="text-lg px-10 py-7" onClick={openWaitlistModal}>
              <Sparkles className="w-5 h-5 mr-2" />
              Entrar na lista de espera
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>

        <WaitlistFormModal 
          open={isWaitlistOpen} 
          onOpenChange={setIsWaitlistOpen}
          source="focus-pro"
        />
      </main>
    </>
  );
};

export default FocusPro;
