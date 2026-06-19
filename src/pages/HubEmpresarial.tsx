import { useEffect, useRef, useState } from "react";
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
import { ArrowRight, Check } from "lucide-react";
import { trackCTAClick, trackEvent } from "@/lib/analytics";
import hubCrmAsset from "@/assets/hub-crm-clientes.png.asset.json";
import hubFinAsset from "@/assets/hub-financas.png.asset.json";
import hubProjAsset from "@/assets/hub-projetos.png.asset.json";
import hubPainelAsset from "@/assets/hub-painel.png.asset.json";

const caseCrm = hubCrmAsset.url;
const caseFin = hubFinAsset.url;
const casePortal = hubProjAsset.url;
const hubDashboardMockup = hubPainelAsset.url;

const APP_URL = "https://app.focusinteligente.com.br";

type Module = {
  code: string;
  category: string;
  brand: string;
  title: string;
  description: string;
  image: string;
  metrics: { value: string; label: string }[];
};

const HubEmpresarial = () => {
  const heroRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const [billing, setBilling] = useState<"mensal" | "anual">("anual");

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
      image: caseCrm,
      metrics: [
        { value: "100%", label: "DOS LEADS RASTREADOS" },
        { value: "0", label: "OPORTUNIDADES PERDIDAS" },
      ],
    },
    {
      code: "02",
      category: "Financeiro",
      brand: "Financeiro Completo",
      title: "Fluxo de caixa, DRE e contas em tempo real",
      description:
        "Contas a pagar e receber, conciliação e gráficos vivos. Pare de descobrir o resultado do mês 20 dias depois do mês acabar.",
      image: caseFin,
      metrics: [
        { value: "Tempo real", label: "VISÃO DO CAIXA" },
        { value: "1", label: "PAINEL ÚNICO" },
      ],
    },
    {
      code: "03",
      category: "Operação",
      brand: "Gestão de Projetos",
      title: "Kanban, cronograma e entregas no prazo",
      description:
        "Cada projeto com responsáveis, marcos e status visíveis. A equipe sabe o que fazer hoje sem precisar perguntar.",
      image: casePortal,
      metrics: [
        { value: "Kanban", label: "+ CRONOGRAMA" },
        { value: "On-time", label: "POR PADRÃO" },
      ],
    },
    {
      code: "04",
      category: "Inteligência",
      brand: "Dashboards & IA",
      title: "Métricas do negócio em segundos, com análise de IA",
      description:
        "Receita, margem, ticket, recorrência e produtividade num só painel. IA integrada para responder perguntas sobre seus próprios dados.",
      image: hubDashboardMockup,
      metrics: [
        { value: "1 clique", label: "PARA TODOS OS KPIs" },
        { value: "IA", label: "PRONTA PARA USO" },
      ],
    },
  ];

  const plans = [
    {
      name: "Plus", description: "Para agências e consultorias que precisam de gestão completa.",
      monthly: 69, annual: 660, annualMonthly: 55,
      features: ["Criar e editar dados em todos os módulos", "Até 5 usuários por conta", "Importação de planilhas (Excel/CSV/OFX)", "Guia de Uso completo", "Suporte por email"],
      highlighted: false,
    },
    {
      name: "Pro", description: "Para operações em crescimento com necessidades avançadas.",
      monthly: 149, annual: 1428, annualMonthly: 119,
      features: ["Tudo do Plus", "Exportar relatórios (PDF/Excel)", "Análise de IA para Clientes", "Assistente de IA integrado", "Até 10 usuários", "Suporte prioritário"],
      highlighted: true,
    },
    {
      name: "Enterprise", description: "Para agências com múltiplos times e clientes.",
      monthly: 297, annual: 2844, annualMonthly: 237,
      features: ["Tudo do Pro", "Integração Google Workspace", "Automação WhatsApp (lembretes)", "Usuários ilimitados", "Suporte dedicado + onboarding"],
      highlighted: false,
    },
  ];

  const faqs = [
    { q: "O que é o Hub Empresarial?", a: "Plataforma SaaS completa de gestão para agências, consultorias e prestadores de serviço. Centraliza CRM, financeiro, projetos, RH e dashboards em um único lugar — sem planilhas, sem caos." },
    { q: "Quanto custa?", a: "Plus R$ 69/mês (5 usuários). Pro R$ 149/mês (10 usuários + IA). Enterprise R$ 297/mês (usuários ilimitados + suporte dedicado). No anual sai mais barato." },
    { q: "Posso testar grátis?", a: "Sim. Você usa gratuitamente até atingir o limite de cada aba. Para continuar, assine um plano. Sem cartão de crédito para começar." },
    { q: "Meus dados estão seguros?", a: "Sim. Criptografia AES-256, backups automáticos diários e infraestrutura segura. Seus dados são seus — nunca compartilhamos com terceiros." },
    { q: "Funciona no celular?", a: "Sim. Totalmente responsivo: desktop, tablet ou celular." },
    { q: "Posso cancelar a qualquer momento?", a: "Sim, sem multas e sem burocracia. Cancela direto na plataforma e mantém acesso até o fim do período pago." },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <SEOHead
        title="Hub Empresarial — Gestão para Agências e Consultorias | Focus"
        description="Plataforma de gestão para agências, consultorias e prestadores. CRM, Financeiro, Projetos e Dashboards com IA — tudo em um único hub."
        canonical="/hub-empresarial"
        image="https://focusinteligente.com.br/lovable-uploads/hub-empresarial-og.jpg"
        type="product"
        keywords="plataforma gestão agências, sistema para consultoria, software gestão PME serviços, CRM agência, financeiro consultoria"
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
            O SaaS que <strong>centraliza a gestão</strong> de agências e consultorias.
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
              href="#planos"
              onClick={() => handleCTA("hero_pricing")}
              style={{
                border: "1px solid var(--line2)", color: "var(--text)",
                padding: "12px 22px", borderRadius: 8, fontSize: 14, fontWeight: 500,
              }}
            >
              Ver planos
            </a>
          </div>

          <p
            style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              color: "var(--text3)", letterSpacing: "0.08em", marginTop: 18,
            }}
          >
            SEM CARTÃO · CANCELE QUANDO QUISER
          </p>
        </div>
      </section>

      {/* MODULES — Sanjaya project cards */}
      <section ref={mockupRef} className="container-focus" style={{ padding: "80px 24px 60px" }}>
        <div className="flex flex-col gap-6 max-w-6xl mx-auto">
          {modules.map((m) => (
            <article
              key={m.code}
              className="snj-project-card group"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1.05fr) minmax(0,1fr)",
                background: "var(--bg2)",
                border: "1px solid var(--line)",
                borderRadius: 16, overflow: "hidden",
                transition: "border-color 0.3s ease",
              }}
            >
              <div style={{ background: "#0b0b0e", minHeight: 360, overflow: "hidden" }}>
                <img
                  src={m.image}
                  alt={m.brand}
                  loading="lazy"
                  className="group-hover:scale-[1.03]"
                  style={{
                    width: "100%", height: "100%", objectFit: "cover", display: "block",
                    transition: "transform 0.6s ease",
                  }}
                />
              </div>

              <div style={{ padding: "32px 36px", display: "flex", flexDirection: "column", gap: 18 }}>
                <div
                  className="flex items-center gap-3"
                  style={{
                    paddingBottom: 16, borderBottom: "1px solid var(--line)",
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    color: "var(--text3)", letterSpacing: "0.10em",
                  }}
                >
                  <span>MÓDULO {m.code}</span>
                  <span style={{ opacity: 0.4 }}>•</span>
                  <span style={{ textTransform: "uppercase" }}>{m.category}</span>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-display, var(--font-sans))",
                    fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em",
                    color: "var(--text2)",
                  }}
                >
                  {m.brand}
                </p>

                <h2
                  style={{
                    fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.15,
                    fontWeight: 600, letterSpacing: "-0.02em", color: "var(--text)",
                  }}
                >
                  {m.title}
                </h2>

                <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.6 }}>
                  {m.description}
                </p>

                <a
                  href={`${APP_URL}/auth?mode=signup`}
                  onClick={() => handleCTA(`module_${m.code}`)}
                  className="inline-flex items-center gap-2 self-start"
                  style={{
                    background: "rgba(255,255,255,0.06)", border: "1px solid var(--line2)",
                    color: "var(--text)", padding: "10px 18px", borderRadius: 8,
                    fontSize: 13, fontWeight: 500,
                  }}
                >
                  Experimentar este módulo <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <div
                  className="grid grid-cols-2 gap-6 mt-auto pt-6"
                  style={{ borderTop: "1px solid var(--line)" }}
                >
                  {m.metrics.map((x) => (
                    <div key={x.label}>
                      <p style={{ fontSize: 36, fontWeight: 600, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1 }}>
                        {x.value}
                      </p>
                      <p style={{ fontSize: 10, color: "var(--text3)", fontFamily: "var(--font-mono)", letterSpacing: "0.10em", marginTop: 10 }}>
                        {x.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section
        ref={pricingRef}
        id="planos"
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
            &lt;:PLANOS&gt;
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.1,
              fontWeight: 600, letterSpacing: "-0.02em", marginTop: 20,
            }}
          >
            Investimento que cabe <strong>na sua operação</strong>.
          </h2>
          <div className="inline-flex items-center gap-2 mt-8 p-1 rounded-full" style={{ border: "1px solid var(--line2)" }}>
            {(["mensal", "anual"] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                style={{
                  padding: "8px 18px", borderRadius: 999, fontSize: 13,
                  fontWeight: 500, fontFamily: "var(--font-mono)", letterSpacing: "0.06em",
                  background: billing === b ? "var(--text)" : "transparent",
                  color: billing === b ? "var(--bg)" : "var(--text2)",
                  textTransform: "uppercase", transition: "all 0.2s ease",
                }}
              >
                {b}{b === "anual" && " · -20%"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {plans.map((p) => {
            const price = billing === "anual" ? p.annualMonthly : p.monthly;
            return (
              <div
                key={p.name}
                style={{
                  background: "var(--bg2)",
                  border: p.highlighted ? "1px solid rgba(157,232,157,0.45)" : "1px solid var(--line)",
                  borderRadius: 16, padding: 32,
                  display: "flex", flexDirection: "column", gap: 16,
                  position: "relative",
                }}
              >
                {p.highlighted && (
                  <span
                    style={{
                      position: "absolute", top: -10, left: 32,
                      fontFamily: "var(--font-mono)", fontSize: 10,
                      background: "#9DE89D", color: "#0a0a0a",
                      padding: "4px 10px", borderRadius: 4, letterSpacing: "0.10em", fontWeight: 700,
                    }}
                  >
                    MAIS POPULAR
                  </span>
                )}
                <p style={{ fontSize: 20, fontWeight: 600, color: "var(--text)" }}>{p.name}</p>
                <p style={{ color: "var(--text2)", fontSize: 13, lineHeight: 1.5 }}>{p.description}</p>

                <div className="flex items-baseline gap-2 pt-2">
                  <span style={{ fontSize: 48, fontWeight: 600, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1 }}>
                    R${price}
                  </span>
                  <span style={{ color: "var(--text3)", fontSize: 13, fontFamily: "var(--font-mono)" }}>/mês</span>
                </div>
                {billing === "anual" && (
                  <p style={{ color: "var(--text3)", fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: "0.06em", marginTop: -8 }}>
                    R${p.annual} COBRADOS ANUALMENTE
                  </p>
                )}

                <a
                  href={`${APP_URL}/auth?mode=signup&plan=${p.name.toLowerCase()}`}
                  onClick={() => handleCTA(`plan_${p.name.toLowerCase()}`)}
                  className="inline-flex items-center justify-center gap-2"
                  style={{
                    background: p.highlighted ? "var(--text)" : "rgba(255,255,255,0.06)",
                    color: p.highlighted ? "var(--bg)" : "var(--text)",
                    border: p.highlighted ? "none" : "1px solid var(--line2)",
                    padding: "12px 18px", borderRadius: 8, fontSize: 13,
                    fontWeight: 600, marginTop: 8,
                  }}
                >
                  Começar com {p.name} <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <ul className="pt-4 space-y-2" style={{ borderTop: "1px solid var(--line)", listStyle: "none", padding: 0 }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: 10, fontSize: 13, color: "var(--text2)", marginTop: 10 }}>
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#9DE89D" }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
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
