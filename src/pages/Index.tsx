import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import ApplicationFormModal from "@/components/ApplicationFormModal";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Code2,
  LayoutDashboard,
  Sparkles,
  Clock,
  TrendingUp,
  Shield,
  Users,
  ChevronRight,
  Building2,
  Briefcase,
  Star,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

import hubEmpresarialPro from "@/assets/hub-empresarial-pro.png";

const blogArticles = [
  {
    title: "Produtividade não é fazer mais, é fazer o que importa",
    description: "Descubra como focar no que realmente gera resultado e parar de desperdiçar tempo.",
    slug: "produtividade-fazer-o-que-importa",
  },
  {
    title: "Por que sua empresa está sempre apagando incêndios",
    description: "Entenda o que impede sua empresa de crescer e como sair do ciclo de urgências.",
    slug: "parar-apagar-incendios-empresa",
  },
  {
    title: "Como usar o Notion para ter clareza total nos seus projetos",
    description: "Um guia prático para organizar projetos no Notion de forma simples e eficiente.",
    slug: "clareza-projetos-notion",
  },
];

const Index = () => {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  const handleCTAClick = (ctaName: string, destination: string) => {
    trackEvent("cta_click", {
      event_category: "conversion",
      event_label: ctaName,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Focus Gestão | Sistemas Sob Medida e Plataforma de Gestão"
        description="Transforme suas planilhas em um software próprio. Desenvolvimento de sistemas exclusivos com vagas limitadas ou acesso imediato ao Hub Empresarial."
        canonical="/"
        keywords="sistemas sob medida, software gestão empresarial, desenvolvimento software, hub empresarial, gestão inteligente, CRM, dashboard, automação empresarial"
        type="website"
      />

      {/* ===========================
          BARRA DE ESCASSEZ
      =========================== */}
      <div className="bg-primary/10 border-b border-primary/20 py-2.5 text-center">
        <p className="text-sm font-medium text-primary">
          <AlertTriangle className="w-4 h-4 inline mr-1.5 -mt-0.5" />
          AGENDA MARÇO/2026: Restam apenas <span className="font-bold">2 vagas</span> para Projetos de Alta Complexidade.
        </p>
      </div>

      {/* ===========================
          SEÇÃO 1 — HERO
      =========================== */}
      <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />

        <div className="container-focus relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
              Transforme suas planilhas em um{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                software próprio
              </span>
            </h1>
            <p className="text-base lg:text-lg text-foreground-muted mb-8 leading-relaxed max-w-2xl mx-auto">
              Desenvolvimento de sistemas exclusivos para sua empresa — dashboards, CRM, portais — com entrega em até 30 dias. Ou acesse agora o Hub Empresarial, pronto para usar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                className="btn-hero group"
                onClick={() => {
                  handleCTAClick("hero_aplicar_consultoria", "/solucoes-sob-medida");
                  setIsApplicationOpen(true);
                }}
              >
                Aplicar para Consultoria
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                className="btn-secondary group"
                asChild
              >
                <Link
                  to="/solucoes-sob-medida"
                  onClick={() => handleCTAClick("hero_ver_solucoes", "/solucoes-sob-medida")}
                >
                  Conhecer Soluções Sob Medida
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
            </div>

            <p className="text-foreground-muted text-sm">
              <Shield className="w-4 h-4 inline mr-1 -mt-0.5" />
              Análise gratuita de viabilidade do projeto
            </p>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative mt-12 max-w-3xl mx-auto animate-slide-up hidden lg:block">
            <div className="relative rounded-xl overflow-hidden border border-card-border/50 shadow-elegant bg-background-elevated">
              <img
                src={hubEmpresarialPro}
                alt="Dashboard de gestão empresarial - Focus Gestão Inteligente"
                className="w-full h-auto object-cover"
                loading="eager"
                fetchPriority="high"
                width={574}
                height={260}
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/15 rounded-full blur-[60px]" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-[50px]" />
          </div>
        </div>
      </section>

      {/* ===========================
          SEÇÃO 2 — O PROBLEMA
      =========================== */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Sua empresa ainda depende de planilhas?
            </h2>
            <p className="text-foreground-muted text-lg">
              A maioria das empresas perde tempo, dinheiro e clareza por não ter sistemas adequados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Horas desperdiçadas", description: "Retrabalho constante procurando dados em planilhas desatualizadas." },
              { icon: AlertTriangle, title: "Decisões no escuro", description: "Sem dashboards, você decide com base em achismo, não em dados." },
              { icon: XCircle, title: "Processos informais", description: "Cada pessoa faz de um jeito. Sem padrão, sem escala." },
              { icon: TrendingUp, title: "Crescimento travado", description: "A operação manual impede sua empresa de crescer com consistência." },
            ].map((problem, index) => (
              <Card key={index} className="service-card text-center">
                <div className="w-12 h-12 rounded-xl bg-red-500/15 flex items-center justify-center mx-auto mb-4">
                  <problem.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{problem.title}</h3>
                <p className="text-foreground-muted text-sm">{problem.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          SEÇÃO 3 — NOSSAS SOLUÇÕES
      =========================== */}
      <section className="section-padding bg-background">
        <div className="container-focus">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Duas formas de profissionalizar sua gestão
            </h2>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              Escolha o caminho ideal para o momento da sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Focus Custom */}
            <Card className="service-card relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-bl-xl">
                VAGAS LIMITADAS
              </div>
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Code2 className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Focus Custom</h3>
              <p className="text-primary text-sm font-medium mb-4">Software sob medida para sua empresa</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Dashboard exclusivo com seus KPIs",
                  "CRM personalizado para seu processo",
                  "Portal do cliente com sua marca",
                  "Entrega em até 30 dias",
                  "Suporte dedicado pós-entrega",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground-muted text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-foreground-muted text-sm mb-4">
                A partir de <span className="text-foreground font-bold text-lg">R$ 4.000</span>{" "}
                <span className="text-foreground-muted">(pagamento único)</span>
              </p>
              <Button
                className="btn-hero w-full group"
                onClick={() => {
                  handleCTAClick("card_focus_custom", "/solucoes-sob-medida");
                  setIsApplicationOpen(true);
                }}
              >
                Aplicar para Consultoria
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>

            {/* Hub Empresarial */}
            <Card className="service-card relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-bl-xl">
                ACESSO IMEDIATO
              </div>
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                  <LayoutDashboard className="w-7 h-7 text-emerald-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Hub Empresarial PRO</h3>
              <p className="text-emerald-400 text-sm font-medium mb-4">Sistema pronto em Notion</p>
              <ul className="space-y-3 mb-8">
                {[
                  "CRM completo com funil de vendas",
                  "Controle financeiro integrado",
                  "Gestão de projetos com Kanban",
                  "Processos e SOPs documentados",
                  "Dashboards prontos para usar",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground-muted text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-foreground-muted text-sm mb-4">
                Por apenas <span className="text-foreground font-bold text-lg">R$ 349</span>{" "}
                <span className="text-foreground-muted">(acesso vitalício)</span>
              </p>
              <Button
                className="btn-secondary w-full group"
                asChild
              >
                <a
                  href="https://pay.hotmart.com/hub-empresarial"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCTAClick("card_hub_empresarial", "hotmart")}
                >
                  Acessar Hub Empresarial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* ===========================
          SEÇÃO 4 — PROVA SOCIAL
      =========================== */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Empresas que já transformaram sua gestão
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                quote: "Saímos de 5 planilhas para um sistema único. A equipe agora tem clareza total do que precisa fazer.",
                name: "Rafael M.",
                role: "CEO, Agência Digital",
                icon: Building2,
              },
              {
                quote: "O controle financeiro mudou completamente. Hoje sei exatamente o fluxo de caixa e posso planejar com segurança.",
                name: "Camila S.",
                role: "Consultora Financeira",
                icon: Briefcase,
              },
              {
                quote: "Em 3 semanas, tínhamos um portal do cliente funcionando. Profissionalizou totalmente nossa entrega.",
                name: "Lucas A.",
                role: "Founder, Tech Startup",
                icon: Users,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="service-card">
                <div className="flex items-center gap-1 mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground-muted text-sm mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                    <testimonial.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-foreground-muted text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-foreground-muted text-sm">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span>Criador destaque no marketplace oficial do Notion Brasil</span>
          </div>
        </div>
      </section>

      {/* ===========================
          SEÇÃO 5 — BLOG
      =========================== */}
      <section className="section-padding bg-background">
        <div className="container-focus">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Conteúdos sobre gestão e produtividade
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {blogArticles.map((article, index) => (
              <Card key={index} className="service-card group h-full flex flex-col">
                <h3 className="text-lg font-bold text-foreground mb-3">{article.title}</h3>
                <p className="text-foreground-muted text-sm mb-6 flex-grow">{article.description}</p>
                <Link
                  to={`/blog/${article.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary-glow transition-colors font-medium"
                  onClick={() => handleCTAClick(`blog_${article.slug}`, `/blog/${article.slug}`)}
                >
                  Ler artigo
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              className="btn-secondary group"
              asChild
            >
              <Link to="/blog" onClick={() => handleCTAClick("ver_todos_artigos", "/blog")}>
                Ver todos os artigos
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===========================
          SEÇÃO 6 — CTA FINAL
      =========================== */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="relative bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 rounded-3xl p-10 lg:p-16 overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-glow/10 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Pronto para profissionalizar sua empresa?
              </h2>
              <p className="text-foreground-muted text-lg mb-4">
                Abrimos apenas <span className="text-primary font-semibold">3 vagas por mês</span> para projetos sob medida. Garanta a sua antes que feche.
              </p>
              <p className="text-foreground-muted text-sm mb-8">
                Ou comece agora com o Hub Empresarial PRO — acesso imediato, sem fila.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="btn-hero group text-base"
                  onClick={() => {
                    handleCTAClick("cta_final_aplicar", "/solucoes-sob-medida");
                    setIsApplicationOpen(true);
                  }}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Preencher Aplicação
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  className="btn-secondary group text-base"
                  asChild
                >
                  <Link to="/solucoes-sob-medida" onClick={() => handleCTAClick("cta_final_solucoes", "/solucoes-sob-medida")}>
                    Ver Soluções Sob Medida
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      <ApplicationFormModal
        open={isApplicationOpen}
        onOpenChange={setIsApplicationOpen}
        source="homepage"
      />
    </div>
  );
};

export default Index;
