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
import { ArrowRight, Star } from "lucide-react";
import { trackCTAClick, trackEvent } from "@/lib/analytics";
import hubDashboardMockup from "@/assets/hub-dashboard-mockup.png";
import carlaPhoto from "@/assets/testimonials/carla.jpg";
import rafaelPhoto from "@/assets/testimonials/rafael.jpg";
import amandaPhoto from "@/assets/testimonials/amanda.jpg";

const APP_URL = "https://app.focusinteligente.com.br";

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

  const modules = [
    { n: "01", t: "CRM Inteligente", d: "Pipeline visual, leads automatizados e funil de vendas para consultorias e agências.", col: 5, row: 2 },
    { n: "02", t: "Financeiro Completo", d: "Fluxo de caixa, DRE, contas a pagar e receber com gráficos em tempo real.", col: 4, row: 1 },
    { n: "03", t: "Gestão de Projetos", d: "Kanban, responsáveis, cronograma e marcos. Entregas no prazo.", col: 3, row: 1 },
    { n: "04", t: "RH & Pessoas", d: "Onboarding, vagas, avaliações de desempenho e documentos.", col: 4, row: 1 },
    { n: "05", t: "Dashboards em Tempo Real", d: "Métricas, gráficos e a saúde completa do negócio em segundos.", col: 4, row: 1 },
    { n: "06", t: "Automações", d: "Processos repetitivos no piloto automático. Notificações e fluxos inteligentes.", col: 4, row: 1 },
    { n: "07", t: "Marketing & Atividades", d: "Campanhas, tarefas e acompanhamento de performance — tudo no mesmo lugar.", col: 4, row: 1 },
  ];

  const plans = [
    { name: "Plus", description: "Para agências e consultorias que precisam de gestão completa.", monthly: 69, annual: 660, annualMonthly: 55,
      features: ["Criar e editar dados em todos os módulos", "Até 5 usuários por conta", "Importação de planilhas (Excel/CSV/OFX)", "Guia de Uso completo", "Suporte por email"],
      highlighted: false },
    { name: "Pro", description: "Para operações em crescimento com necessidades avançadas.", monthly: 149, annual: 1428, annualMonthly: 119,
      features: ["Tudo do Plus", "Exportar relatórios (PDF/Excel)", "Análise de IA para Clientes", "Assistente de IA integrado", "Até 10 usuários", "Suporte prioritário"],
      highlighted: true },
    { name: "Enterprise", description: "Para agências com múltiplos times e clientes.", monthly: 297, annual: 2844, annualMonthly: 237,
      features: ["Tudo do Pro", "Integração Google Workspace", "Automação WhatsApp (lembretes)", "Usuários ilimitados", "Suporte dedicado + onboarding"],
      highlighted: false },
  ];

  const testimonials = [
    { name: "Carla Mendonça", role: "CEO · Agência Órbita Digital", photo: carlaPhoto, content: "Finalmente tenho visão real do financeiro da agência. Descobri gastos que nem sabia que tinha!" },
    { name: "Rafael Souza", role: "Sócio · Consultoria Estratégica", photo: rafaelPhoto, content: "Saí do caos das planilhas para um sistema que realmente funciona. Projetos nunca mais atrasaram." },
    { name: "Amanda Lopes", role: "Diretora · Vértice Consultoria", photo: amandaPhoto, content: "O CRM mudou minha forma de lidar com clientes. Não perco mais nenhuma oportunidade." },
  ];

  const faqs = [
    { q: "O que é o Hub Empresarial?", a: "Plataforma SaaS completa de gestão para agências, consultorias e prestadores de serviço. Centraliza CRM, financeiro, projetos, RH e dashboards em um único lugar — sem planilhas, sem caos." },
    { q: "Quanto custa?", a: "Comece grátis com uso limitado por aba. Plus R$ 69/mês (5 usuários). Pro R$ 149/mês (10 usuários + IA). Enterprise R$ 297/mês (usuários ilimitados + suporte dedicado)." },
    { q: "Posso testar grátis?", a: "Sim. Você usa gratuitamente até atingir o limite de cada aba. Para continuar, assine um plano. Sem cartão de crédito para começar." },
    { q: "Meus dados estão seguros?", a: "Sim. Utilizamos criptografia AES-256, backups automáticos diários e infraestrutura segura. Seus dados são seus — nunca compartilhamos com terceiros." },
    { q: "Funciona no celular?", a: "Sim. A plataforma é totalmente responsiva e funciona em qualquer dispositivo — desktop, tablet ou celular." },
    { q: "Posso cancelar a qualquer momento?", a: "Sim, sem multas e sem burocracia. Você pode cancelar diretamente na plataforma e continua com acesso até o fim do período pago." },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
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

      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ minHeight: "92vh", padding: "140px 24px 80px" }}>
        <div className="hero-grid" />
        <span className="corner corner-tl" />
        <span className="corner corner-tr" />
        <span className="corner corner-bl" />
        <span className="corner corner-br" />

        <div className="container-focus relative z-10 text-center">
          <p className="hero-eyebrow anim-up" style={{ justifyContent: "center" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 8px #10B981" }} />
              AO VIVO
            </span>
            Hub Empresarial · SaaS · 43 empresas
          </p>

          <h1 className="hero-title anim-up-1 mx-auto" style={{ maxWidth: 1000 }}>
            O sistema de gestão feito para <em>agências e consultorias</em> que querem{" "}
            <strong>escalar.</strong>
          </h1>

          <p className="hero-subtitle anim-up-2 mx-auto mt-8" style={{ maxWidth: 680 }}>
            Tudo que sua operação precisa — Financeiro, CRM, Projetos, RH, Marketing, Tarefas e Processos — em um
            único sistema com IA. Comece grátis. Planos completos a partir de <strong style={{ color: "var(--text)" }}>R$ 69/mês</strong>.
          </p>

          <div className="anim-up-3 mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" onClick={() => handleCTA("Hero")} className="btn-main">
              Começar Grátis
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="#mockup" className="btn-ghost">Ver demonstração →</a>
          </div>
          <p style={{ marginTop: 16, fontSize: 12, color: "var(--text3)", fontFamily: "var(--font-mono)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Sem cartão de crédito · Uso gratuito até o limite da aba
          </p>
        </div>
      </section>

      {/* MOCKUP */}
      <section ref={mockupRef} id="mockup" style={{ padding: "0 24px 80px" }}>
        <div className="mockup-outer">
          <div className="browser-chrome">
            <span className="product-frame__dot" style={{ background: "#FF5F57" }} />
            <span className="product-frame__dot" style={{ background: "#FEBC2E" }} />
            <span className="product-frame__dot" style={{ background: "#28C840" }} />
            <span className="product-frame__url">app.focusinteligente.com.br</span>
          </div>
          <img
            src={hubDashboardMockup}
            alt="Dashboard do Hub Empresarial — gestão completa para agências e consultorias"
            className="product-frame__img"
            loading="eager"
            width={960}
            height={540}
          />
        </div>
      </section>

      {/* METRICS */}
      <section className="container-focus">
        <p className="sec-label">Em produção</p>
        <div className="metrics-row">
          {[
            { n: "43", l: "Empresas ativas" },
            { n: "7", l: "Módulos integrados" },
            { n: "99.8%", l: "Uptime garantido" },
            { n: "92ms", l: "Tempo de resposta" },
          ].map((m) => (
            <div key={m.l} className="mr-item">
              <p className="mr-num">{m.n}</p>
              <p className="mr-label">{m.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES — BENTO */}
      <section className="container-focus section-padding">
        <p className="sec-label">Módulos</p>
        <h2 style={{ maxWidth: 760 }}>
          Tudo que sua operação precisa, <strong>em um único lugar</strong>.
        </h2>

        <div className="bento">
          {modules.map((m) => (
            <div key={m.n} className="card" style={{ gridColumn: `span ${m.col}`, gridRow: `span ${m.row}` }}>
              <p className="card-num">{m.n}</p>
              <h3>{m.t}</h3>
              <p style={{ color: "var(--text2)", marginTop: 8, fontSize: 14 }}>{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section ref={pricingRef} className="container-focus section-padding">
        <p className="sec-label">Planos</p>
        <h2 style={{ marginBottom: 32 }}>
          Escolha o plano <strong>ideal para o seu time</strong>.
        </h2>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-3 mb-12" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <button
            type="button"
            onClick={() => setBilling("mensal")}
            style={{ color: billing === "mensal" ? "var(--text)" : "var(--text3)" }}
          >
            Mensal
          </button>
          <button
            type="button"
            role="switch"
            aria-checked={billing === "anual"}
            onClick={() => setBilling((b) => (b === "mensal" ? "anual" : "mensal"))}
            style={{
              position: "relative",
              display: "inline-flex",
              height: 22,
              width: 40,
              alignItems: "center",
              borderRadius: 99,
              background: billing === "anual" ? "var(--accent-hex)" : "var(--bg3)",
              border: "1px solid var(--line2)",
              transition: "background .2s",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "var(--text)",
                transition: "transform .2s",
                transform: billing === "anual" ? "translateX(20px)" : "translateX(2px)",
              }}
            />
          </button>
          <span style={{ color: billing === "anual" ? "var(--text)" : "var(--text3)" }}>
            Anual <span style={{ color: "var(--accent-hex)", marginLeft: 4 }}>−20%</span>
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan) => {
            const isAnual = billing === "anual";
            return (
              <div
                key={plan.name}
                className={`card relative flex flex-col ${plan.highlighted ? "pc-featured" : ""}`}
                style={{ padding: 32 }}
              >
                {plan.highlighted && (
                  <span className="pc-popular" style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)" }}>
                    Mais popular
                  </span>
                )}
                <p className="card-num">{plan.name}</p>
                <h3 style={{ fontSize: 20 }}>{plan.name}</h3>
                <p style={{ color: "var(--text2)", fontSize: 13, marginTop: 6, marginBottom: 24, minHeight: 40 }}>
                  {plan.description}
                </p>
                <div style={{ marginBottom: 28 }}>
                  <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)" }}>
                    R$ {isAnual ? plan.annual.toLocaleString("pt-BR") : plan.monthly}
                  </span>
                  <span style={{ color: "var(--text3)", marginLeft: 4, fontSize: 14 }}>
                    {isAnual ? "/ano" : "/mês"}
                  </span>
                  {isAnual && (
                    <p style={{ color: "var(--accent-hex)", fontSize: 12, marginTop: 4, fontFamily: "var(--font-mono)" }}>
                      equivale a R$ {plan.annualMonthly}/mês
                    </p>
                  )}
                </div>

                <ul className="pc-list" style={{ paddingLeft: 0, marginBottom: 28, flex: 1 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ color: "var(--text2)", fontSize: 14, marginBottom: 10 }}>{f}</li>
                  ))}
                </ul>

                <a
                  href="https://app.focusinteligente.com.br/planos"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCTA(`Pricing-${plan.name}-${billing}`)}
                  className={plan.highlighted ? "btn-cta" : "btn-main"}
                  style={{ width: "100%", display: "flex" }}
                >
                  Assinar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-focus section-padding">
        <p className="sec-label">Quem usa</p>
        <h2 style={{ maxWidth: 720 }}>
          43 agências e consultorias <strong>já profissionalizaram</strong> a gestão.
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          <div className="tc-featured md:col-span-1">
            <div style={{ color: "#FBBF24", fontSize: 13, letterSpacing: 2, marginBottom: 16 }}>★★★★★</div>
            <p style={{ fontSize: 18, color: "rgba(235,235,235,0.85)", lineHeight: 1.6, fontWeight: 300 }}>
              "{testimonials[0].content}"
            </p>
            <div className="flex items-center gap-3 mt-6">
              <img src={testimonials[0].photo} alt={testimonials[0].name} width={36} height={36} loading="lazy" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", border: "1px solid var(--line2)" }} />
              <div>
                <p style={{ color: "var(--text)", fontSize: 13, fontWeight: 600 }}>{testimonials[0].name}</p>
                <p style={{ color: "var(--text3)", fontSize: 12 }}>{testimonials[0].role}</p>
              </div>
            </div>
          </div>

          {testimonials.slice(1).map((t) => (
            <div key={t.name} className="tc">
              <div style={{ color: "#FBBF24", fontSize: 13, letterSpacing: 2, marginBottom: 16 }}>★★★★★</div>
              <p style={{ fontSize: 15, color: "rgba(235,235,235,0.75)", lineHeight: 1.65, fontWeight: 300 }}>"{t.content}"</p>
              <div className="flex items-center gap-3 mt-6">
                <img src={t.photo} alt={t.name} width={36} height={36} loading="lazy" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", border: "1px solid var(--line2)" }} />
                <div>
                  <p style={{ color: "var(--text)", fontSize: 13, fontWeight: 600 }}>{t.name}</p>
                  <p style={{ color: "var(--text3)", fontSize: 12 }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-focus section-padding">
        <p className="sec-label">Perguntas frequentes</p>
        <h2 style={{ marginBottom: 40 }}>FAQ</h2>

        <Accordion type="single" collapsible className="space-y-3 max-w-3xl">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="card" style={{ padding: "4px 24px" }}>
              <AccordionTrigger className="hover:no-underline py-5 text-left" style={{ color: "var(--text)", fontSize: 15, fontWeight: 500 }}>
                {f.q}
              </AccordionTrigger>
              <AccordionContent style={{ color: "var(--text2)", paddingBottom: 20, fontSize: 14, lineHeight: 1.75 }}>
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA FINAL */}
      <section className="container-focus section-padding">
        <div
          className="card text-center"
          style={{
            padding: "60px 32px",
            background: "linear-gradient(160deg, rgba(30,64,175,0.10) 0%, var(--bg2) 60%)",
            borderColor: "rgba(30,64,175,0.30)",
          }}
        >
          <p className="sec-label" style={{ justifyContent: "center" }}>
            <span style={{ flex: 0 }}>Próximo passo</span>
          </p>
          <h2 style={{ maxWidth: 640, margin: "0 auto 16px" }}>
            Pronto para <strong>profissionalizar</strong> sua agência ou consultoria?
          </h2>
          <p style={{ color: "var(--text2)", maxWidth: 540, margin: "0 auto 32px", fontSize: 15 }}>
            Junte-se às 43 agências e consultorias que já simplificaram sua gestão com o Hub Empresarial.
          </p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCTA("CTA-Final")}
            className="btn-main"
          >
            Começar grátis agora
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
          <p style={{ marginTop: 16, fontSize: 12, color: "var(--text3)", fontFamily: "var(--font-mono)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Sem cartão de crédito
          </p>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default HubEmpresarial;
