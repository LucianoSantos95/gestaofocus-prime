import { useEffect, useRef, useState } from "react";
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
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/hub/StickyMobileCTA";
import NotionReferrerBanner from "@/components/hub/NotionReferrerBanner";
import HowItWorks from "@/components/hub/HowItWorks";

import {
  ArrowRight,
  Shield,
  Zap,
  Star,
  Users,
  Target,
  DollarSign,
  BarChart3,
  FileText,
  Sparkles,
  Calendar,
  UserCheck,
  CheckCircle,
  Clock,
  Lock,
  Smartphone,
  Mail,
  MessageCircle,
  TrendingUp,
  Layers,
  LayoutDashboard,
  Settings,
  FolderKanban,
  PieChart,
  CircleDot,
} from "lucide-react";
import { trackCTAClick, trackEvent } from "@/lib/analytics";
import hubLogo from "@/assets/hub-logo.png";
import hubDashboardMockup from "@/assets/hub-dashboard-mockup.png";
import carlaPhoto from "@/assets/testimonials/carla.jpg";
import rafaelPhoto from "@/assets/testimonials/rafael.jpg";
import amandaPhoto from "@/assets/testimonials/amanda.jpg";
import lucasPhoto from "@/assets/testimonials/lucas.jpg";
import fernandaPhoto from "@/assets/testimonials/fernanda.jpg";
import brunoPhoto from "@/assets/testimonials/bruno.jpg";
import julianaPhoto from "@/assets/testimonials/juliana.jpg";
import diegoPhoto from "@/assets/testimonials/diego.jpg";
import patriciaPhoto from "@/assets/testimonials/patricia.jpg";

/* ─── Marquee animation via inline style (3 rows, infinite scroll) ─── */
const marqueeStyle = (duration: number, reverse = false): React.CSSProperties => ({
  display: "flex",
  gap: "1.5rem",
  animation: `marquee ${duration}s linear infinite ${reverse ? "reverse" : ""}`,
  whiteSpace: "nowrap" as const,
});

const HubEmpresarial = () => {
  const heroRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const [billing, setBilling] = useState<"mensal" | "anual">("mensal");

  // Section visibility tracking
  useEffect(() => {
    const sections = [
      { ref: heroRef, event: "hero_view" },
      { ref: mockupRef, event: "mockup_visible" },
      { ref: pricingRef, event: "pricing_visible" },
    ];
    const tracked = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const event = sections.find((s) => s.ref.current === entry.target)?.event;
          if (entry.isIntersecting && event && !tracked.has(event)) {
            tracked.add(event);
            trackEvent(event, { event_category: "hub_funnel", page_path: "/hub-empresarial" });
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => { if (s.ref.current) observer.observe(s.ref.current); });
    return () => observer.disconnect();
  }, []);

  const handleCTA = (label: string) => {
    trackCTAClick(label, "hub-empresarial");
    trackEvent("hub_signup_intent", {
      event_category: "conversion",
      event_label: `hub_empresarial_${label}`,
    });
  };

  const APP_URL = "https://app.focusinteligente.com.br";

  /* ─── DATA ─── */
  const features = [
    {
      icon: Target,
      title: "CRM Inteligente",
      description: "Pipeline de vendas para consultorias e agências. Funil visual e gestão de leads automatizada.",
      stats: [
        { label: "Conversão", value: "+34%" },
        { label: "Leads/mês", value: "2.4k" },
      ],
    },
    {
      icon: DollarSign,
      title: "Financeiro Completo",
      description: "Fluxo de caixa, DRE, contas a pagar e receber com gráficos em tempo real.",
      stats: [
        { label: "Economia", value: "12h/sem" },
        { label: "Precisão", value: "99.8%" },
      ],
    },
    {
      icon: FolderKanban,
      title: "Gestão de Projetos",
      description: "Gestão de projetos com entregas para clientes. Kanban, responsáveis, cronograma e marcos.",
      stats: [
        { label: "Entregas", value: "+47%" },
        { label: "On-time", value: "96%" },
      ],
    },
    {
      icon: UserCheck,
      title: "RH & Pessoas",
      description: "Onboarding, vagas abertas, avaliações de desempenho e documentos.",
      stats: [
        { label: "Onboarding", value: "3 dias" },
        { label: "Retenção", value: "+22%" },
      ],
    },
    {
      icon: BarChart3,
      title: "Dashboards em Tempo Real",
      description: "Métricas, gráficos e a saúde completa do negócio em segundos.",
      stats: [
        { label: "Relatórios", value: "1-click" },
        { label: "Atualização", value: "Real-time" },
      ],
    },
    {
      icon: Zap,
      title: "Automações",
      description: "Processos repetitivos no piloto automático. Notificações e fluxos inteligentes.",
      stats: [
        { label: "Processos", value: "50+" },
        { label: "Tempo salvo", value: "8h/sem" },
      ],
    },
  ];

  const testimonials = [
    { name: "Carla Mendonça", role: "CEO, Agência Órbita Digital", photo: carlaPhoto, content: "Finalmente tenho visão real do financeiro da agência. Descobri gastos que nem sabia que tinha!" },
    { name: "Rafael Souza", role: "Sócio, Consultoria Estratégica", photo: rafaelPhoto, content: "Saí do caos das planilhas para um sistema que realmente funciona. Projetos dos clientes nunca mais atrasaram." },
    { name: "Amanda Lopes", role: "Diretora, Vértice Consultoria", photo: amandaPhoto, content: "O CRM mudou minha forma de lidar com clientes. Não perco mais nenhuma oportunidade." },
    { name: "Lucas Pereira", role: "COO, Agência Nuvem Criativa", photo: lucasPhoto, content: "O dashboard me dá confiança para tomar decisões. Antes era tudo no achismo." },
    { name: "Fernanda Rocha", role: "Gerente, Consultoria de Marketing", photo: fernandaPhoto, content: "Onboarding de novos funcionários reduziu de 2 semanas para 3 dias." },
    { name: "Bruno Torres", role: "Sócio, Escritório Contábil Horizonte", photo: brunoPhoto, content: "A automação de processos cortou nosso retrabalho pela metade." },
    { name: "Juliana Keller", role: "Head de Vendas, Agência Impulso Digital", photo: julianaPhoto, content: "Pipeline visual transformou nossa taxa de fechamento. Aumento de 34% no primeiro mês." },
    { name: "Diego Martins", role: "Fundador, Consultoria em Saúde", photo: diegoPhoto, content: "Melhor investimento do ano. Centralizar tudo num lugar mudou o jogo da consultoria." },
    { name: "Patrícia Silva", role: "Diretora, Agência Conecta 360", photo: patriciaPhoto, content: "Minha equipe parou de perder tempo com planilhas. Agora foca no que importa." },
  ];

  const techFeatures = [
    {
      icon: Clock,
      title: "Ultra Rápido",
      description: "Crie orçamentos em 2 min, gere relatórios em 30s.",
      visual: (
        <div className="flex items-center gap-3 mt-3">
          <div className="h-2 flex-1 rounded-full bg-primary/20 overflow-hidden">
            <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-primary to-primary-glow animate-pulse" />
          </div>
          <span className="text-xs text-primary font-mono">92ms</span>
        </div>
      ),
    },
    {
      icon: Layers,
      title: "7 Módulos Prontos",
      description: "CRM, Financeiro, Projetos, Marketing, RH, Atividades e Dashboards.",
      visual: (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {["CRM", "Financeiro", "Projetos", "Marketing", "RH", "Atividades", "Dashboards"].map((m) => (
            <span key={m} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">{m}</span>
          ))}
        </div>
      ),
    },
    {
      icon: PieChart,
      title: "Inteligência de Dados",
      description: "Gráficos e insights automáticos para decisões baseadas em dados.",
      visual: (
        <div className="flex items-end gap-1 mt-3 h-8">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-primary/40 to-primary" style={{ height: `${h}%` }} />
          ))}
        </div>
      ),
    },
    {
      icon: Lock,
      title: "Segurança Total",
      description: "Dados criptografados, backup automático, controle de acessos.",
      visual: (
        <div className="flex items-center gap-2 mt-3">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-foreground-muted">Criptografia AES-256 • SSL</span>
        </div>
      ),
    },
  ];

  const plans = [
    {
      name: "Plus",
      description: "Para agências e consultorias que precisam de gestão completa",
      monthly: 69,
      features: [
        "Criar e editar dados em todos os módulos",
        "Até 5 usuários por conta",
        "Importação de planilhas (Excel/CSV/OFX)",
        "Guia de Uso completo",
        "Suporte por email",
      ],
      cta: "Assinar",
      highlighted: false,
    },
    {
      name: "Pro",
      description: "Para operações em crescimento com necessidades avançadas",
      monthly: 149,
      features: [
        "Tudo do Plus",
        "Exportar relatórios (PDF/Excel)",
        "Análise de IA para Clientes",
        "Assistente de IA integrado",
        "Até 10 usuários por conta",
        "Suporte prioritário",
      ],
      cta: "Assinar",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "Para agências com múltiplos times e clientes",
      monthly: 297,
      features: [
        "Tudo do Pro",
        "Integração Google Workspace",
        "Automação WhatsApp (lembretes)",
        "Usuários ilimitados",
        "Suporte dedicado + onboarding",
      ],
      cta: "Assinar",
      highlighted: false,
    },
  ];

  const faqs = [
    { q: "🤔 O que é o Hub Empresarial?", a: "É uma plataforma SaaS completa de gestão para pequenas e médias empresas. Centraliza CRM, financeiro, projetos, RH e dashboards em um único lugar — sem planilhas, sem caos." },
    { q: "💰 Quanto custa?", a: "Você pode começar grátis com uso limitado por aba. O plano Plus custa R$ 69/mês para até 5 usuários. O plano Pro custa R$ 149/mês com IA e até 10 usuários. O plano Enterprise custa R$ 297/mês com usuários ilimitados, API e suporte dedicado." },
    { q: "🆓 Posso testar grátis?", a: "Sim. Você usa a plataforma gratuitamente até atingir o limite de uso por aba. A partir desse ponto o acesso é bloqueado, e para continuar usando é necessário assinar um plano. Sem cartão de crédito para começar." },
    { q: "🔒 Meus dados estão seguros?", a: "Absolutamente. Utilizamos criptografia AES-256, backups automáticos diários e infraestrutura segura. Seus dados são seus — nunca compartilhamos com terceiros." },
    { q: "📱 Funciona no celular?", a: "Sim! A plataforma é totalmente responsiva e funciona perfeitamente em qualquer dispositivo — desktop, tablet ou celular." },
    { q: "❌ Posso cancelar a qualquer momento?", a: "Sim, sem multas e sem burocracia. Você pode cancelar seu plano a qualquer momento diretamente na plataforma e continua com acesso até o fim do período pago." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Hub Empresarial — Gestão para Agências e Consultorias | Focus"
        description="Plataforma de gestão completa para agências, consultorias e prestadores de serviço. CRM, Financeiro, Projetos e RH em um só lugar."
        canonical="/hub-empresarial"
        image="https://focusinteligente.com.br/lovable-uploads/hub-empresarial-og.jpg"
        type="product"
        keywords="plataforma gestão agências, sistema para consultoria, software gestão PME serviços, CRM agência, financeiro consultoria"
      />
      <NotionReferrerBanner />
      <Navigation />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative pt-32 lg:pt-44 pb-20 lg:pb-32 overflow-hidden">
        {/* Radial glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/15 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-primary-glow/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Floating document icons */}
        <div className="absolute top-32 left-[10%] opacity-20 animate-pulse">
          <FileText className="w-10 h-10 text-primary/50" />
        </div>
        <div className="absolute top-40 right-[12%] opacity-20 animate-pulse" style={{ animationDelay: "1s" }}>
          <FileText className="w-8 h-8 text-primary/50" />
        </div>

        <div className="container-focus relative z-10 text-center max-w-4xl mx-auto">
          {/* Logo + name */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <img src={hubLogo} alt="Hub Empresarial" className="w-10 h-10 rounded-xl" />
            <span className="text-xl font-bold text-foreground">Hub Empresarial</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight" style={{ perspective: "800px" }}>
            O sistema de gestão feito para agências e consultorias que querem{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent inline-block animate-rotate-word-in origin-bottom">
              escalar.
            </span>
          </h1>

          {/* Live badge */}
          <div className="inline-flex items-center gap-4 bg-card/60 backdrop-blur-sm border border-card-border/30 rounded-full px-5 py-2.5 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-green-400">AO VIVO</span>
            </div>
            <div className="flex -space-x-2">
              {["C", "R", "A", "L"].map((letter, i) => (
                <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/80 to-primary-glow/80 flex items-center justify-center text-[10px] font-bold text-white border-2 border-background">
                  {letter}
                </div>
              ))}
            </div>
            <div>
              <span className="text-sm font-bold text-foreground">43</span>
              <span className="text-xs text-foreground-muted ml-1">empresas já utilizam</span>
            </div>
          </div>

          <p className="text-lg lg:text-xl text-foreground-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Tudo que sua agência ou consultoria precisa — Financeiro, CRM, Projetos, RH, Marketing, Tarefas e Processos — em um único sistema com IA.
            <br />
            <span className="text-primary font-medium">Comece grátis (uso limitado por aba). Planos completos a partir de R$ 69/mês.</span>
          </p>

          <Button className="btn-hero text-lg px-10 py-5 animate-glow" asChild>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" onClick={() => handleCTA("Hero")}>
              Começar Grátis Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <p className="text-xs text-foreground-muted mt-3">Sem cartão de crédito • Uso gratuito até o limite da aba</p>
          
          {/* Urgência sutil */}
          <div className="mt-6 inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Primeiros 100 usuários ganham acesso antecipado a funcionalidades exclusivas</span>
          </div>

          {/* Scroll dot */}
          <div className="mt-16 flex justify-center">
            <div className="w-1.5 h-8 rounded-full bg-foreground-muted/20 relative overflow-hidden">
              <div className="w-full h-3 bg-primary/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ── APP MOCKUP ── */}
      <section ref={mockupRef} className="pb-20 lg:pb-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-card-border/30 bg-card/30 backdrop-blur-sm shadow-2xl overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-card-border/20 bg-card/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-background/50 text-xs text-foreground-muted">hub.focusinteligente.com.br</div>
              </div>
            </div>

            {/* Dashboard screenshot */}
            <img
              src={hubDashboardMockup}
              alt="Dashboard do Hub Empresarial - Gestão completa para PMEs"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <HowItWorks />

      {/* ── FEATURES SHOWCASE ── */}
      <section className="section-padding bg-background">
        <div className="container-focus max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Tudo que sua agência ou consultoria precisa
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Módulos pensados para o dia a dia de prestadores de serviço que querem escalar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Card key={i} className="p-6 bg-card/50 backdrop-blur-sm border-card-border/30 hover:border-primary/30 hover:shadow-glow transition-all group hover:-translate-y-1">
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-foreground-muted mb-4">{f.description}</p>
                <div className="flex gap-4">
                  {f.stats.map((s, j) => (
                    <div key={j}>
                      <div className="text-lg font-bold text-primary">{s.value}</div>
                      <div className="text-[10px] text-foreground-muted">{s.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF MARQUEE ── */}
      <section className="section-padding bg-background-secondary overflow-hidden">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Users className="w-3.5 h-3.5 mr-1.5" />
            Prova Social
          </Badge>
           <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
             43 Agências e Consultorias Já Utilizam o Hub
          </h2>
          <p className="text-foreground-muted">Veja o que estão dizendo sobre a plataforma</p>
        </div>

        {/* Marquee CSS */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <div className="space-y-6 max-w-[100vw]">
          {[0, 1, 2].map((row) => {
            const offset = row * 3;
            const items = [...testimonials.slice(offset, offset + 3), ...testimonials.slice(offset, offset + 3)];
            return (
              <div key={row} className="flex overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
                <div style={marqueeStyle(30 + row * 5, row === 1)}>
                  {items.map((t, i) => (
                    <div key={i} className="flex-shrink-0 w-[350px] p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-card-border/30">
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-sm text-foreground-muted mb-4 whitespace-normal">"{t.content}"</p>
                      <div className="flex items-center gap-3">
                        <img src={t.photo} alt={t.name} className="w-9 h-9 rounded-full object-cover border-2 border-primary/20" loading="lazy" width={36} height={36} />
                        <div>
                          <p className="text-sm font-semibold text-foreground">{t.name}</p>
                          <p className="text-[11px] text-foreground-muted">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── TECH FEATURES ── */}
      <section className="section-padding bg-background">
        <div className="container-focus max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ferramentas Profissionais. Zero Complexidade.
            </h2>
            <p className="text-lg text-foreground-muted">
              Tudo que você precisa, sem a curva de aprendizado
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {techFeatures.map((f, i) => (
              <Card key={i} className="p-6 bg-card/50 backdrop-blur-sm border-card-border/30 hover:border-primary/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                    <p className="text-sm text-foreground-muted">{f.description}</p>
                    {f.visual}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section ref={pricingRef} className="relative section-padding overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[160px] pointer-events-none" />

        <div className="container-focus relative z-10 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Planos que Crescem com Você
            </h2>
            <p className="text-lg text-foreground-muted">Comece grátis. Planos completos a partir de R$ 69/mês.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <Card key={i} className={`p-7 backdrop-blur-sm transition-all relative ${plan.highlighted ? "bg-primary/5 border-primary/30 shadow-glow scale-[1.03]" : "bg-card/50 border-card-border/30"}`}>
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground border-0">
                    <Sparkles className="w-3 h-3 mr-1" /> Mais Popular
                  </Badge>
                )}
                <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-xs text-foreground-muted mb-3">{plan.description}</p>
                <div className="mb-5">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-sm text-foreground-muted ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground-muted">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.highlighted ? "btn-hero animate-glow" : "btn-secondary"}`}
                  asChild
                >
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer" onClick={() => handleCTA(`Pricing-${plan.name}`)}>
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-foreground-muted">Tire suas dúvidas antes de começar</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-card-border/30 rounded-xl px-6 bg-card/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-foreground hover:no-underline py-5 text-left font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground-muted pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA FINAL + CONTATO ── */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container-focus relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Pronto para profissionalizar sua agência ou consultoria?
          </h2>
          <p className="text-foreground-muted text-lg mb-8">
            Junte-se às 43 agências e consultorias que já simplificaram sua gestão com o Hub Empresarial
          </p>

          <Button className="btn-hero text-xl px-12 py-6 animate-glow mb-4" asChild>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" onClick={() => handleCTA("CTA-Final")}>
              Começar Grátis Agora
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </Button>
          <p className="text-sm text-foreground-muted mb-12">Sem cartão de crédito • Uso gratuito até o limite da aba</p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Mail, label: "Email", value: "contato@focusinteligente.com.br" },
              { icon: MessageCircle, label: "WhatsApp", value: "Fale conosco" },
              { icon: Calendar, label: "Agendar Demo", value: "Escolha um horário" },
            ].map((c, i) => (
              <Card key={i} className="p-5 bg-card/50 backdrop-blur-sm border-card-border/30 text-center">
                <div className="p-2.5 rounded-xl bg-primary/10 w-fit mx-auto mb-3">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">{c.label}</p>
                <p className="text-xs text-foreground-muted">{c.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default HubEmpresarial;
