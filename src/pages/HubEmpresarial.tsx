import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
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
  MessagesSquare,
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
    document.getElementById("demo-video")?.scrollIntoView({ behavior: "smooth" });
  };

  const painPoints = [
    { icon: AlertTriangle, title: "Planilhas espalhadas", description: "Informações em 10 arquivos diferentes que ninguém sabe onde estão" },
    { icon: MessagesSquare, title: "WhatsApp como CRM", description: "Leads perdidos em conversas antigas que você nem lembra mais" },
    { icon: Clock, title: "Sempre apagando incêndio", description: "O dia acaba e você não fez nada do que planejou" },
    { icon: XCircle, title: "Zero visão financeira", description: "Não sabe se está lucrando ou perdendo dinheiro no mês" },
    { icon: Users, title: "Equipe desalinhada", description: "Cada um faz de um jeito, sem padrão nem processo definido" },
    { icon: FileText, title: "Cabeça como HD", description: "Tudo guardado na memória — até o dia que você esquece algo importante" },
  ];

  const benefits = [
    { icon: Target, title: "Nunca mais perca um lead", description: "CRM visual com funil de vendas integrado. Saiba exatamente onde cada cliente está.", highlight: "CRM Completo" },
    { icon: Calendar, title: "Entregas sempre no prazo", description: "Gestão de projetos com cronograma, tarefas e responsáveis definidos.", highlight: "Projetos" },
    { icon: DollarSign, title: "Previsibilidade e lucro", description: "Controle financeiro com fluxo de caixa, categorias e gráficos claros.", highlight: "Financeiro" },
    { icon: BarChart3, title: "Visão rápida do que importa", description: "Dashboards prontos que mostram a saúde do seu negócio em segundos.", highlight: "Dashboards" },
    { icon: Zap, title: "Fluxo diário produtivo", description: "Rotinas e processos que funcionam no piloto automático.", highlight: "Rotinas" },
    { icon: UserCheck, title: "Equipe organizada", description: "RH estruturado com onboarding, vagas e avaliação de desempenho.", highlight: "RH" },
  ];

  const modules = [
    { title: "Comece por Aqui", items: ["Aulas gravadas de implementação", "Tutorial passo a passo", "Dicas de configuração", "Suporte via WhatsApp"] },
    { title: "Financeiro", items: ["Fluxo de caixa completo", "Categorias de receitas/despesas", "Controle de cartão de crédito", "Gráficos e análises", "Investimentos e economias"] },
    { title: "CRM & Vendas", items: ["Funil de vendas visual", "Base de leads organizada", "Formulário de captação", "Histórico de negociações", "Documentos e propostas"] },
    { title: "Projetos", items: ["Gestão completa de projetos", "Tarefas com responsáveis", "Análise de riscos", "Marcos e objetivos", "Decisões documentadas"] },
    { title: "Marketing", items: ["Planejamento de campanhas", "Calendário de conteúdo", "Análise de concorrência", "Ideias e referências", "Post campeão"] },
    { title: "RH", items: ["Gestão de pessoas", "Controle de vagas", "Onboarding estruturado", "Avaliação de desempenho", "Documentos de colaboradores"] },
    { title: "Atividades", items: ["Tarefas gerais", "Reuniões organizadas", "Processos e rotinas", "Objetivos e metas", "Visualizações personalizadas"] },
  ];

  const testimonials = [
    { name: "Carla M.", role: "Dona de agência de marketing", content: "Finalmente consegui enxergar meu financeiro de verdade. Descobri gastos que nem sabia que tinha!", rating: 5 },
    { name: "Rafael S.", role: "Freelancer de design", content: "Saí do caos das planilhas pra um sistema que realmente funciona. Meus projetos nunca mais atrasaram.", rating: 5 },
    { name: "Amanda L.", role: "Consultora empresarial", content: "O módulo de CRM mudou minha forma de lidar com clientes. Não perco mais nenhuma oportunidade.", rating: 5 },
  ];

  const faqs = [
    { question: "Preciso saber usar o Notion?", answer: "Não! O módulo 'Comece por Aqui' inclui aulas gravadas que ensinam tudo do zero. Mesmo que você nunca tenha aberto o Notion, vai conseguir usar o sistema seguindo o passo a passo." },
    { question: "Como recebo acesso ao sistema?", answer: "Imediatamente após a compra, você recebe um e-mail com o link para duplicar o template no seu Notion. O acesso é instantâneo e vitalício." },
    { question: "Preciso pagar mensalidade?", answer: "Não! É um pagamento único de R$ 349. Você tem acesso vitalício ao sistema e a todas as atualizações futuras sem custo adicional. O Notion tem plano gratuito que já atende a maioria dos usuários." },
    { question: "Funciona para qualquer tipo de empresa?", answer: "Sim! O sistema é flexível e funciona para freelancers, pequenas empresas, startups, agências, consultorias e diversos outros tipos de negócio. A estrutura modular se adapta à sua realidade." },
    { question: "Posso personalizar o sistema?", answer: "Totalmente! O Notion permite personalização completa. Você pode adicionar campos, mudar cores, criar novas visualizações e adaptar tudo ao seu fluxo de trabalho." },
    { question: "E se eu não gostar?", answer: "Oferecemos garantia de 7 dias. Se não gostar do sistema por qualquer motivo, devolvemos 100% do seu dinheiro sem perguntas. Seu risco é zero." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Gestão Empresarial Completa em Notion | Hub Empresarial PRO - R$ 349"
        description="Centralize clientes, tarefas, projetos e financeiro em um único sistema no Notion. 7 módulos integrados, dashboards claros e produtividade real. Acesso vitalício por R$ 349."
        canonical="/hub-empresarial"
        image="https://focusinteligente.com.br/lovable-uploads/hub-empresarial-og.jpg"
        type="product"
        keywords="gestão empresarial, sistemas em Notion, produtividade, CRM em Notion, dashboard, financeiro, processos, organização empresarial, Notion para empresas"
      />

      <Navigation />

      {/* ── HERO ── */}
      <section className="relative pt-32 lg:pt-44 pb-24 lg:pb-32 overflow-hidden">
        {/* Glow radial */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-glow/5 rounded-full blur-[120px]" />

        <div className="container-focus relative z-10 text-center max-w-4xl mx-auto">
          <Badge className="mb-6 text-sm px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Sistema completo para sua empresa
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Gestão empresarial completa em Notion —{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              organizada, visual e fácil de usar
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-foreground-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            Centralize clientes, tarefas, projetos e financeiro em um único sistema com dashboards claros, produtividade real e visão estratégica do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              onClick={() => handlePurchaseClick("hero")}
              className="btn-hero text-lg px-10 py-5 animate-glow"
            >
              Quero o Hub Empresarial PRO
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="btn-secondary text-lg px-10 py-5"
              onClick={handleDemoClick}
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Demonstração
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground-muted">
            {["7 módulos integrados", "Acesso vitalício", "Garantia de 7 dias"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMA / AGITAÇÃO ── */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Você sente que está sempre correndo atrás do próprio rabo?
            </h2>
            <p className="text-lg text-foreground-muted">
              Se identificou com alguma dessas situações, você não está sozinho:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((pain, i) => (
              <Card key={i} className="p-6 bg-card/50 backdrop-blur-sm border-card-border/30 hover:border-red-500/40 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                    <pain.icon className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{pain.title}</h3>
                    <p className="text-sm text-foreground-muted">{pain.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUÇÃO ── */}
      <section className="section-padding bg-background">
        <div className="container-focus max-w-4xl">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">A Solução</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              O Hub Empresarial PRO resolve tudo isso em um único lugar
            </h2>
          </div>

          <Card className="p-8 md:p-12 bg-primary/5 backdrop-blur-sm border-primary/20 shadow-glow">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              O <strong>Hub Empresarial PRO</strong> é um sistema completo de gestão empresarial desenvolvido no Notion que centraliza todas as áreas do seu negócio:{" "}
              <span className="text-primary font-medium">financeiro, clientes, projetos, marketing, RH e rotinas</span> — tudo conectado e visual.
            </p>
            <p className="text-lg leading-relaxed text-foreground-muted">
              Chega de informações espalhadas. Com dashboards claros e processos definidos, você finalmente tem controle real da sua empresa e toma decisões baseadas em dados, não em achismos.
            </p>
          </Card>

          <div className="flex justify-center mt-10">
            <Button onClick={() => handlePurchaseClick("solution")} className="btn-hero text-lg px-10 py-5 animate-glow">
              Quero organizar minha empresa agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── DEMO VISUAL ── */}
      <section id="demo-video" className="section-padding bg-background-secondary">
        <div className="container-focus max-w-5xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Veja o sistema na prática
          </h2>
          <p className="text-lg text-foreground-muted mb-10">
            Interface limpa, visual e totalmente personalizável no Notion
          </p>

          <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-glow">
            <video className="w-full" controls poster="/lovable-uploads/hub-empresarial-video-cover.png">
              <source src="/videos/hub-empresarial-demo.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      </section>

      {/* ── BENEFÍCIOS ── */}
      <section className="section-padding bg-background">
        <div className="container-focus max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              O que você ganha com o Hub PRO
            </h2>
            <p className="text-lg text-foreground-muted">
              Cada módulo foi pensado para resolver um problema real da sua gestão
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <Card key={i} className="p-6 bg-card/50 backdrop-blur-sm border-card-border/30 hover:border-primary/30 hover:shadow-glow transition-all group hover:-translate-y-1">
                <Badge variant="outline" className="mb-4 text-xs border-card-border/50 text-foreground-muted">{b.highlight}</Badge>
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-foreground-muted text-sm">{b.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÓDULOS INCLUSOS ── */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              O que está incluso no Hub Empresarial PRO
            </h2>
            <p className="text-lg text-foreground-muted">
              7 módulos completos + aulas + suporte por apenas{" "}
              <span className="text-primary font-bold">R$ 349</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((mod, i) => (
              <Card key={i} className="p-6 bg-card/50 backdrop-blur-sm border-card-border/30">
                <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  {mod.title}
                </h3>
                <ul className="space-y-2">
                  {mod.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground-muted">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button onClick={() => handlePurchaseClick("modules")} className="btn-hero text-lg px-10 py-5 animate-glow">
              Quero o Hub Empresarial PRO agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── PROVA SOCIAL ── */}
      <section className="section-padding bg-background">
        <div className="container-focus max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Quem já usa, aprova</h2>
            <p className="text-lg text-foreground-muted">Veja o que nossos clientes estão dizendo</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="p-6 bg-card/50 backdrop-blur-sm border-card-border/30">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground-muted mb-4 italic">"{t.content}"</p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-foreground-muted">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANCORAGEM DE PREÇO ── */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

        <div className="container-focus relative z-10 max-w-3xl text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            <Shield className="w-4 h-4 mr-2" />
            Garantia de 7 dias
          </Badge>

          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Pronto para transformar sua gestão?
          </h2>
          <p className="text-lg text-foreground-muted mb-8">
            Acesso vitalício ao sistema completo + atualizações gratuitas + suporte via WhatsApp
          </p>

          <Card className="inline-block p-8 bg-primary/5 border-primary/20 shadow-glow mb-8">
            <div className="text-sm text-foreground-muted line-through mb-1">De R$ 497</div>
            <div className="text-5xl font-bold text-primary mb-2">R$ 349</div>
            <div className="text-sm text-foreground-muted">Pagamento único • Acesso vitalício</div>
          </Card>

          <div className="flex flex-col items-center gap-4">
            <Button
              onClick={() => handlePurchaseClick("pricing")}
              className="btn-hero text-xl px-12 py-6 animate-glow"
            >
              Quero o Hub Empresarial PRO agora
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <p className="text-sm text-foreground-muted flex items-center gap-2">
              <Shield className="h-4 w-4" />
              7 dias de garantia incondicional
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-foreground-muted">Tire suas dúvidas antes de comprar</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-card-border/30 rounded-xl px-6 bg-card/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-foreground hover:no-underline py-5 text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground-muted pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

        <div className="container-focus relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comece agora sua gestão empresarial inteligente com Notion
          </h2>
          <p className="text-foreground-muted text-lg mb-8">
            Junte-se a dezenas de empresários que já transformaram sua gestão
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => handlePurchaseClick("footer")} className="btn-hero text-lg px-10 py-5 animate-glow">
              Comprar Agora — R$ 349
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="btn-secondary text-lg px-10 py-5" onClick={handleDemoClick}>
              <Play className="mr-2 h-5 w-5" />
              Ver Demonstrativo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HubEmpresarial;
