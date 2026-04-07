import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import ApplicationFormModal from "@/components/ApplicationFormModal";
import QuickLeadForm from "@/components/QuickLeadForm";
import ResultadosReais from "@/components/ResultadosReais";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import PageBreadcrumb from "@/components/PageBreadcrumb";
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
  Phone,
  ChevronDown,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import hubEmpresarialPro from "@/assets/hub-empresarial-pro.png";
import hubLogo from "@/assets/hub-logo.png";

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

const homeFaqs = [
  {
    q: "Quanto tempo leva para ter meu sistema funcionando?",
    a: "Projetos sob medida são entregues em até 30 dias. O Hub Empresarial tem acesso imediato após a assinatura.",
  },
  {
    q: "Preciso saber programar para usar?",
    a: "Não. Todas as soluções Focus são visuais e intuitivas. Oferecemos treinamento completo na entrega.",
  },
  {
    q: "E se eu não gostar do resultado?",
    a: "Oferecemos garantia de satisfação. Se o sistema não atender suas expectativas em 30 dias, devolvemos seu investimento.",
  },
  {
    q: "Funciona para empresas pequenas?",
    a: "Sim! A maioria dos nossos clientes são empresas de 1 a 20 colaboradores que precisam profissionalizar a gestão.",
  },
  {
    q: "Qual a diferença entre Focus Custom e Hub Empresarial?",
    a: "O Focus Custom é um software 100% personalizado para sua empresa. O Hub Empresarial é uma plataforma pronta com módulos pré-configurados a partir de R$ 69/mês.",
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
        title="Leads Qualificados em 30 Dias | Focus Gestão Inteligente"
        description="Google Ads + SEO Local = Clientes pagantes. Sistemas de gestão sob medida para agências e consultorias. 200+ empresas atendidas. Fale com um especialista."
        canonical="/"
        keywords="gestão para agências, sistema para consultoria, software para prestadores de serviço, gestão empresarial, CRM agência, leads qualificados"
        type="website"
        speakable={['[data-speakable]', 'h1', '.hero-subtitle']}
      />

      <StickyMobileCTA />

      {/* ===========================
          SEÇÃO 1 — HERO (Conversão 10X)
      =========================== */}
      <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />

        <div className="container-focus relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Copy */}
            <div className="animate-fade-in">
              {/* Social proof mini */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-2">
                  {[Building2, Briefcase, Users].map((Icon, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-foreground-muted">
                  <span className="text-primary font-semibold">200+</span> empresas atendidas
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-foreground leading-[1.1] mb-6">
                Leads Qualificados em 30 Dias{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  ou Devolvemos Seu Dinheiro
                </span>
              </h1>

              <p className="text-base lg:text-lg text-foreground-muted mb-8 leading-relaxed max-w-xl">
                Google Ads + SEO Local = Clientes Pagantes. Sistemas sob medida para agências, consultorias e prestadores de serviço que querem escalar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href="https://wa.me/5511916742443?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista%20Focus"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCTAClick("hero_fale_especialista", "whatsapp")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-white bg-[#EF4444] hover:bg-[#DC2626] transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl min-h-[48px] text-base"
                >
                  <Phone className="w-5 h-5" />
                  Fale com Especialista
                </a>
                <Button className="btn-secondary group min-h-[48px]" asChild>
                  <Link
                    to="/hub-empresarial"
                    onClick={() => handleCTAClick("hero_hub_empresarial", "/hub-empresarial")}
                  >
                    Conheça o Hub Empresarial
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-4 text-foreground-muted text-sm">
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  Garantia 30 dias
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Sem fidelidade
                </span>
              </div>
            </div>

            {/* Right — Lead Form */}
            <div className="animate-slide-up">
              <QuickLeadForm />
            </div>
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
              Isso é o dia a dia da sua agência ou consultoria?
            </h2>
            <p className="text-foreground-muted text-lg">
              Problemas que travam o crescimento de prestadores de serviço como você.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Projetos atrasados", description: "Ninguém sabe o status real. Clientes cobram atualização por WhatsApp o tempo todo." },
              { icon: AlertTriangle, title: "Financeiro no Excel", description: "Você descobre o prejuízo tarde demais. Sem fluxo de caixa confiável." },
              { icon: XCircle, title: "Cada um faz de um jeito", description: "Sem processo padrão, cada colaborador usa um método diferente." },
              { icon: TrendingUp, title: "Crescimento travado", description: "A operação manual impede sua agência ou consultoria de escalar." },
            ].map((problem, index) => (
              <Card key={index} className="service-card text-center">
                <div className="w-12 h-12 rounded-xl bg-destructive/15 flex items-center justify-center mx-auto mb-4">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{problem.title}</h3>
                <p className="text-foreground-muted text-sm">{problem.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          SEÇÃO — RESULTADOS REAIS
      =========================== */}
      <ResultadosReais />

      {/* ===========================
          SEÇÃO 3 — NOSSAS SOLUÇÕES
      =========================== */}
      <section className="section-padding bg-background-secondary">
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
                  "Suporte dedicado pós-entrega",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground-muted text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-foreground-muted text-sm mb-4">
                Projeto sob medida com escopo personalizado. Solicite um diagnóstico gratuito.
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
                <div className="w-14 h-14 rounded-xl bg-emerald-500/15 flex items-center justify-center overflow-hidden">
                  <img src={hubLogo} alt="Hub Empresarial" className="w-10 h-10 object-contain" loading="lazy" width={40} height={40} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Hub Empresarial</h3>
              <p className="text-emerald-400 text-sm font-medium mb-4">Plataforma de gestão para agências e consultorias</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Financeiro completo",
                  "Recursos Humanos",
                  "Marketing",
                  "Gestão de Projetos",
                  "Dashboards e relatórios",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground-muted text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-foreground-muted text-sm mb-4">
                A partir de <span className="text-foreground font-bold text-lg">R$ 69</span>{" "}
                <span className="text-foreground-muted">/mês</span>
              </p>
              <Button className="btn-secondary w-full group" asChild>
                <Link
                  to="/hub-empresarial"
                  onClick={() => handleCTAClick("card_hub_empresarial", "/hub-empresarial")}
                >
                  Conhecer Hub Empresarial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* ===========================
          SEÇÃO 4 — PROVA SOCIAL
      =========================== */}
      <section className="section-padding bg-background">
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
                role: "Sócia, Consultoria de RH",
                icon: Briefcase,
              },
              {
                quote: "Em 3 semanas, tínhamos um portal do cliente funcionando. Profissionalizou totalmente nossa entrega.",
                name: "Lucas A.",
                role: "Diretor, Escritório de Contabilidade",
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
          SEÇÃO — NÚMEROS
      =========================== */}
      <section className="py-16 bg-background-secondary">
        <div className="container-focus">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { number: "200+", label: "Empresas atendidas" },
              { number: "150+", label: "Sistemas entregues" },
              { number: "98%", label: "Satisfação dos clientes" },
              { number: "30", label: "Dias de entrega média" },
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                <p className="text-foreground-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          SEÇÃO — FAQ COLAPSÍVEL
      =========================== */}
      <section className="section-padding bg-background">
        <div className="container-focus max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {homeFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-card-border rounded-xl px-6 bg-background-elevated">
                <AccordionTrigger className="text-foreground text-left text-base font-medium hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground-muted text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ===========================
          SEÇÃO — BLOG
      =========================== */}
      <section className="section-padding bg-background-secondary">
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
            <Button className="btn-secondary group" asChild>
              <Link to="/blog" onClick={() => handleCTAClick("ver_todos_artigos", "/blog")}>
                Ver todos os artigos
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===========================
          SEÇÃO — SOBRE NÓS (GEO para IA)
      =========================== */}
      <section className="section-padding bg-background" id="sobre-nos">
        <div className="container-focus max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">
            Sobre a Focus Gestão Inteligente
          </h2>
          <div className="text-foreground-muted text-base lg:text-lg leading-relaxed space-y-4 text-center" data-speakable="true">
            <p>
              A Focus Gestão Inteligente é especialista em sistemas de gestão sob medida para agências de marketing, consultorias e prestadores de serviço no Brasil. Fundada com o propósito de eliminar o caos operacional de empresas que ainda gerenciam tudo por WhatsApp e planilhas, a Focus já entregou mais de 150 sistemas personalizados para 200+ empresas, com 98% de satisfação. Oferecemos duas soluções: o Focus Custom — software exclusivo com CRM, dashboards e portais do cliente — e o Hub Empresarial, plataforma completa pronta para usar a partir de R$ 69/mês. Atendimento 100% online em todo o Brasil, com entrega média de 30 dias.
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <Button className="btn-secondary" asChild>
              <Link to="/sobre-focus" onClick={() => handleCTAClick("sobre_nos_saiba_mais", "/sobre-focus")}>
                Saiba mais sobre a Focus
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===========================
          SEÇÃO — CTA FINAL
      =========================== */}
      <section className="section-padding bg-background-secondary mb-16 md:mb-0">
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
                Ou comece agora com o Hub Empresarial — acesso imediato, sem fila.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5511916742443?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista%20Focus"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCTAClick("cta_final_especialista", "whatsapp")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-white bg-[#EF4444] hover:bg-[#DC2626] transition-all hover:-translate-y-0.5 min-h-[48px] text-base"
                >
                  <Phone className="w-5 h-5" />
                  Fale com Especialista
                </a>
                <Button className="btn-secondary group text-base min-h-[48px]" asChild>
                  <Link to="/hub-empresarial" onClick={() => handleCTAClick("cta_final_hub", "/hub-empresarial")}>
                    Conhecer Hub Empresarial
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
