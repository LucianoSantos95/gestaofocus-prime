import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/hub/StickyMobileCTA";
import NotionReferrerBanner from "@/components/hub/NotionReferrerBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Check,
  DollarSign,
  UserCheck,
  FolderKanban,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { trackCTAClick, trackEvent } from "@/lib/analytics";
import { openLeadModal } from "@/lib/leadModal";

const APP_URL = "https://app.focusinteligente.com.br";

type Module = {
  code: string;
  category: string;
  brand: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const HubEmpresarial = () => {
  const heroRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);

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
    trackEvent("hub_signup_intent", { event_category: "conversion", event_label: `hub_empresarial_${label}` });
  };

  const modules: Module[] = [
    {
      code: "01",
      category: "Vendas & Receita",
      brand: "CRM Inteligente",
      title: "Pipeline visual com leads automatizados e funil sob controle",
      description:
        "Captura, qualifica e movimenta leads automaticamente no funil. Visão clara do que está em negociação e do que precisa de ação hoje.",
      icon: UserCheck,
    },
    {
      code: "02",
      category: "Financeiro",
      brand: "Financeiro Completo",
      title: "Fluxo de caixa, DRE e contas em tempo real",
      description:
        "Contas a pagar e receber, conciliação e gráficos vivos. Pare de descobrir o resultado do mês 20 dias depois do mês acabar.",
      icon: DollarSign,
    },
    {
      code: "03",
      category: "Operação",
      brand: "Gestão de Projetos",
      title: "Kanban, cronograma e entregas no prazo",
      description:
        "Cada projeto com responsáveis, marcos e status visíveis. A equipe sabe o que fazer hoje sem precisar perguntar.",
      icon: FolderKanban,
    },
    {
      code: "04",
      category: "Inteligência",
      brand: "Dashboards & IA",
      title: "Métricas do negócio em segundos, com análise de IA",
      description:
        "Receita, margem, ticket, recorrência e produtividade num só painel. IA integrada para responder perguntas sobre seus próprios dados.",
      icon: BarChart3,
    },
  ];

  const freeFeatures = [
    "Registros ilimitados em todos os módulos",
    "Finanças, CRM, Projetos, Atividades, RH, Marketing e Processos",
    "Relatórios, exportações e dashboards de BI",
    "Análises e assistente de IA",
    "Integrações com Google, WhatsApp e Slack",
    "Servidor MCP — use o Hub no ChatGPT e Claude",
    "Usuários da sua equipe",
    "Atualizações e suporte",
  ];

  const faqs = [
    { q: "O que é o Hub Empresarial?", a: "Plataforma SaaS completa de gestão para agências, consultorias e prestadores de serviço. Centraliza CRM, financeiro, projetos, RH e dashboards em um único lugar — sem planilhas, sem caos." },
    { q: "Quanto custa?", a: "Nada. O Hub Empresarial é gratuito e não tem versão paga. Todos os módulos, a IA, as integrações e os relatórios estão liberados desde o primeiro dia, sem limite de registros e sem pedir cartão de crédito." },
    { q: "Tem pegadinha? Como vocês se sustentam?", a: "Não tem pegadinha. O Hub é gratuito de verdade e continua assim. A Focus se sustenta com os projetos de software sob medida — quem precisa de algo que nenhum sistema pronto resolve contrata a consultoria. O Hub é a porta de entrada, não uma isca." },
    { q: "Meus dados estão seguros?", a: "Sim. Criptografia AES-256, backups automáticos diários e infraestrutura segura. Seus dados são seus — nunca compartilhamos com terceiros." },
    { q: "Funciona no celular?", a: "Sim. Totalmente responsivo: desktop, tablet ou celular." },
    { q: "Posso exportar meus dados e sair quando quiser?", a: "Sim. Seus dados são seus: exporta em PDF ou Excel a qualquer momento, sem precisar falar com ninguém. Não existe fidelidade nem período mínimo — não há cobrança envolvida." },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <SEOHead
        title="Hub Empresarial para Agências | CRM, Projetos e IA — Focus"
        description="Chega de gerenciar em planilhas e WhatsApp. CRM, Financeiro, Projetos e IA em uma só plataforma para agências e consultorias. Gratuito, sem versão paga e sem cartão."
        canonical="/hub-empresarial"
        image="https://focusinteligente.com.br/lovable-uploads/hub-empresarial-og.jpg"
        type="product"
        keywords="hub empresarial, plataforma gestão agências, sistema para consultoria, software gestão PME, CRM agência, financeiro consultoria, gestão com IA"
      />
      <NotionReferrerBanner />
      <Navigation />

      {/* HERO — Sanjaya /projects */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ padding: "180px 24px 80px", borderBottom: "1px solid var(--line)" }}
      >
        <div className="container-focus relative z-10 text-center">
          <span
            className="anim-up inline-block mb-8"
            style={{
              fontFamily: "var(--font-mono)", fontSize: 11, color: "#9DE89D",
              border: "1px solid rgba(157,232,157,0.30)", borderRadius: 4,
              padding: "5px 12px", letterSpacing: "0.10em",
            }}
          >
            &lt;:HUB EMPRESARIAL&gt;
          </span>

          <h1
            className="hero-title anim-up-1 mx-auto"
            style={{ maxWidth: 1000, fontSize: "clamp(40px, 6vw, 76px)" }}
          >
            O Hub que <strong>centraliza a gestão</strong> de agências e consultorias.
          </h1>

          <p className="hero-subtitle anim-up-2 mx-auto mt-8" style={{ maxWidth: 680 }}>
            CRM, financeiro, projetos e dashboards com IA num único hub. Sem planilhas paralelas,
            sem sistemas desconectados — uma fonte de verdade para o negócio inteiro.
          </p>

          <div className="anim-up-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`${APP_URL}/auth?mode=signup`}
              onClick={() => handleCTA("hero_signup")}
              className="inline-flex items-center gap-2"
              style={{
                background: "var(--text)", color: "var(--bg)",
                padding: "12px 22px", borderRadius: 8, fontSize: 14, fontWeight: 600,
              }}
            >
              Começar grátis <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#gratuito"
              onClick={() => handleCTA("hero_pricing")}
              style={{
                border: "1px solid var(--line2)", color: "var(--text)",
                padding: "12px 22px", borderRadius: 8, fontSize: 14, fontWeight: 500,
              }}
            >
              O que está incluso
            </a>
          </div>

          <p
            style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              color: "var(--text3)", letterSpacing: "0.08em", marginTop: 18,
            }}
          >
SEM CARTÃO · SEM VERSÃO PAGA · GRÁTIS PARA SEMPRE
          </p>
        </div>
      </section>

      {/* MODULES — icon grid (landing.love style) */}
      <section ref={mockupRef} className="container-focus" style={{ padding: "80px 24px 60px" }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ marginBottom: 40, maxWidth: 640 }}>
            <span
              style={{
                fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text3)",
                letterSpacing: "0.10em",
              }}
            >
              / MÓDULOS
            </span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.1,
                fontWeight: 600, letterSpacing: "-0.02em", marginTop: 16,
                color: "var(--text)",
              }}
            >
              Quatro módulos, <em>uma operação inteira</em>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {modules.map((m) => {
              const Icon = m.icon;
              return (
                <article
                  key={m.code}
                  className="focus-module-card focus-spotlight"
                >
                  <span className="focus-icon-tile">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "#9DE89D",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    {m.category}
                  </span>
                  <h3
                    style={{
                      fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em",
                      color: "var(--text)", lineHeight: 1.3,
                    }}
                  >
                    {m.title}
                  </h3>
                  <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.65 }}>
                    {m.description}
                  </p>
                  <a
                    href={`${APP_URL}/auth?mode=signup`}
                    onClick={() => handleCTA(`module_${m.code}`)}
                    className="inline-flex items-center gap-2 self-start"
                    style={{
                      marginTop: 8,
                      fontSize: 13, fontWeight: 500, color: "var(--text)",
                      textDecoration: "none",
                      borderBottom: "1px solid var(--line2)",
                      paddingBottom: 2,
                    }}
                  >
                    Experimentar módulo <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* GRATUITO */}
      <section
        ref={pricingRef}
        id="gratuito"
        className="container-focus"
        style={{ padding: "80px 24px" }}
      >
        <div className="text-center mb-12">
          <span
            style={{
              fontFamily: "var(--font-mono)", fontSize: 11, color: "#9DE89D",
              border: "1px solid rgba(157,232,157,0.30)", borderRadius: 4,
              padding: "5px 12px", letterSpacing: "0.10em",
            }}
          >
            &lt;:GRATUITO&gt;
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.1,
              fontWeight: 600, letterSpacing: "-0.02em", marginTop: 20,
            }}
          >
            O Hub inteiro é <em style={{ color: "#9DE89D", fontStyle: "italic" }}>gratuito</em>.
          </h2>
          <p
            style={{
              color: "var(--text2)", fontSize: 16, lineHeight: 1.6,
              maxWidth: 560, margin: "20px auto 0",
            }}
          >
            Não existe versão paga nem recurso bloqueado. Tudo o que você vê aqui
            está liberado desde o primeiro dia.
          </p>
        </div>

        <div
          className="max-w-3xl mx-auto"
          style={{
            background: "var(--bg2)",
            border: "1px solid rgba(157,232,157,0.45)",
            borderRadius: 16, padding: 40,
          }}
        >
          <div className="flex items-baseline gap-3">
            <span style={{ fontSize: 56, fontWeight: 600, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1 }}>
              R$ 0
            </span>
            <span style={{ color: "var(--text2)", fontSize: 15 }}>para sempre</span>
          </div>

          <ul
            className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mt-8"
            style={{ listStyle: "none", padding: 0 }}
          >
            {freeFeatures.map((f) => (
              <li key={f} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--text2)", lineHeight: 1.5 }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#9DE89D" }} />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <a
            href={`${APP_URL}/auth?mode=signup`}
            onClick={() => handleCTA("free_signup")}
            className="inline-flex items-center justify-center gap-2 mt-10"
            style={{
              background: "#9DE89D", color: "#0a0a0a",
              padding: "13px 26px", borderRadius: 8, fontSize: 14, fontWeight: 600,
            }}
          >
            Começar grátis <ArrowRight className="w-4 h-4" />
          </a>

          <p
            style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              color: "var(--text3)", letterSpacing: "0.08em", marginTop: 16,
            }}
          >
            SEM CARTÃO · SEM LIMITE DE REGISTROS
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-focus" style={{ padding: "60px 24px 100px" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span
              style={{
                fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text3)",
                border: "1px solid var(--line2)", borderRadius: 4,
                padding: "5px 12px", letterSpacing: "0.10em",
              }}
            >
              &lt;:FAQ&gt;
            </span>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.1,
              fontWeight: 600, letterSpacing: "-0.02em", marginTop: 20,
            }}>
              Perguntas <strong>frequentes</strong>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border rounded-lg px-5"
                style={{ borderColor: "var(--line)", background: "var(--bg2)" }}
              >
                <AccordionTrigger
                  className="text-left hover:no-underline"
                  style={{ color: "var(--text)", fontSize: 15, fontWeight: 500 }}
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.6 }}>
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ===================== NEWSLETTER ===================== */}
      <section style={{ padding: "0 24px 80px" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            border: "1px solid rgba(157,232,157,0.18)",
            borderRadius: 28,
            padding: "40px",
            background: "linear-gradient(135deg, rgba(157,232,157,0.05) 0%, transparent 55%), var(--bg2)",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 32,
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--text2)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Newsletter semanal · Gratuita
            </p>
            <h3
              style={{
                fontSize: "clamp(18px, 3vw, 24px)",
                fontWeight: 600,
                color: "var(--text)",
                letterSpacing: "-0.03em",
                lineHeight: 1.3,
                marginBottom: 12,
              }}
            >
              Quantas assinaturas você paga e{" "}
              <em style={{ color: "#9DE89D", fontStyle: "normal" }}>não usa nem 30%?</em>
            </h3>
            <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.65, maxWidth: 500 }}>
              Toda semana: o que cortar, o que vale manter, e como fazer mais com menos ferramenta.
            </p>
          </div>
          <a
            href="https://gestaofocus.notion.site/39dbe653a5aa80faa03ed0546b257556?pvs=105"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "13px 24px",
              background: "rgba(157,232,157,0.10)",
              border: "1px solid rgba(157,232,157,0.28)",
              borderRadius: 12,
              color: "#9DE89D",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "var(--font-sans)",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            ✉ Quero receber
          </a>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA />

      <style>{`
        .snj-project-card:hover { border-color: var(--line2) !important; }
        @media (max-width: 860px) {
          .snj-project-card {
            grid-template-columns: 1fr !important;
          }
          .snj-project-card > div:first-child {
            min-height: 240px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HubEmpresarial;
