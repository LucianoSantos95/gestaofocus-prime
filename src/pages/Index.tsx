import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import TalkToLuciano from "@/components/TalkToLuciano";
import { ArrowRight, Star, Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { CountUp } from "@/hooks/useCountUp";

import hubEmpresarialPro from "@/assets/hub-empresarial-pro.webp";

const Index = () => {
  const cta = (label: string) =>
    trackEvent("cta_click", { event_category: "conversion", event_label: label });

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <SEOHead
        title="Focus Gestão | Arquitetura de Operação com IA para PMEs e Agências"
        description="Consultoria de operações com IA + Hub Empresarial SaaS. Para PMEs, agências e consultorias que querem sair do improviso e operar como empresa de verdade."
        canonical="/"
        keywords="consultoria notion, arquitetura de operação, IA para PMEs, hub empresarial, agentes de IA, mapeamento de processos"
        type="website"
        speakable={["[data-speakable]", "h1", ".hero-subtitle"]}
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden" style={{ minHeight: "92vh", padding: "140px 24px 100px" }}>
        <div className="hero-grid" />
        <span className="corner corner-tl" />
        <span className="corner corner-tr" />
        <span className="corner corner-bl" />
        <span className="corner corner-br" />

        <div className="container-focus relative z-10 text-center">
          <p className="hero-eyebrow anim-up" style={{ justifyContent: "center" }}>
            <span style={{ color: "var(--accent-hex)" }}>●</span>
            Focus · Arquitetura de Operação com IA
          </p>

          <h1 className="hero-title anim-up-1 mx-auto" style={{ maxWidth: 940 }}>
            Arquitetura de <em>Operação com IA</em><br />para <strong>PMEs e agências.</strong>
          </h1>

          <p className="hero-subtitle anim-up-2 mx-auto mt-8" style={{ maxWidth: 620 }}>
            Mapeamento de processos, Notion como hub operacional e agentes de IA — para empresas que querem
            parar de operar no improviso e ganhar previsibilidade.
          </p>

          <div className="anim-up-3 mt-10 flex flex-col items-center gap-4">
            <TalkToLuciano />
            <Link
              to="/auth/signup"
              onClick={() => cta("hero_signup")}
              className="btn-ghost"
            >
              Começar grátis no Hub →
            </Link>
          </div>

          {/* Social proof inline */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-x-6 gap-y-2" style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            <span>50+ empresas</span>
            <span style={{ color: "var(--line2)" }}>·</span>
            <span>150+ sistemas</span>
            <span style={{ color: "var(--line2)" }}>·</span>
            <span>Notion Certified Partner</span>
          </div>

          {/* Product mockup */}
          <div className="mockup-outer mt-16 hidden md:block">
            <div className="browser-chrome">
              <span className="product-frame__dot" style={{ background: "#FF5F57" }} />
              <span className="product-frame__dot" style={{ background: "#FEBC2E" }} />
              <span className="product-frame__dot" style={{ background: "#28C840" }} />
              <span className="product-frame__url">app.focusinteligente.com.br</span>
            </div>
            <img
              src={hubEmpresarialPro}
              alt="Dashboard Focus — gestão para agências e consultorias"
              className="product-frame__img"
              loading="eager"
              width={960}
              height={540}
            />
          </div>
        </div>
      </section>

      {/* ===== METRICS ===== */}
      <section className="container-focus" style={{ paddingTop: 80, paddingBottom: 0 }}>
        <p className="sec-label">Resultados em números</p>
        <div className="metrics-row">
          {[
            { n: "50+", l: "Empresas atendidas" },
            { n: "150+", l: "Sistemas entregues" },
            { n: "98%", l: "Satisfação dos clientes" },
            { n: "30d", l: "Entrega média" },
          ].map((m) => (
            <div key={m.l} className="mr-item">
              <p className="mr-num"><CountUp value={m.n} /></p>
              <p className="mr-label">{m.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROBLEMS — BENTO ===== */}
      <section className="container-focus section-padding">
        <p className="sec-label">O dia a dia hoje</p>
        <h2 style={{ maxWidth: 720 }}>
          Isso é a rotina da sua <strong>PME ou agência</strong>?
        </h2>

        <div className="bento">
          {[
            { n: "01", t: "Projetos atrasados", d: "Ninguém sabe o status real. Clientes cobram atualização por WhatsApp o tempo todo.", col: 5, row: 2, featured: true },
            { n: "02", t: "Financeiro no Excel", d: "Você descobre o prejuízo tarde demais. Sem fluxo de caixa confiável.", col: 4, row: 1 },
            { n: "03", t: "Sem padrão", d: "Cada colaborador usa um método diferente.", col: 3, row: 1 },
            { n: "04", t: "Crescimento travado", d: "A operação manual impede sua empresa de escalar.", col: 7, row: 1 },
          ].map((c) => (
            <div
              key={c.n}
              className={`card${c.featured ? " card-featured" : ""}`}
              style={{ gridColumn: `span ${c.col}`, gridRow: `span ${c.row}` }}
            >
              <p className="card-num">{c.n}</p>
              <h3>{c.t}</h3>
              <p style={{ color: "var(--text2)", marginTop: 8, fontSize: 14 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== RESULTADOS EM NÚMEROS — CASES ===== */}
      <section className="container-focus section-padding">
        <p className="sec-label">Resultados em números</p>
        <h2 style={{ maxWidth: 720, marginBottom: 40 }}>
          Empresas reais, <strong>números reais</strong>.
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Card 1 — Consultoria Focus Custom */}
          <div
            className="card"
            style={{
              borderColor: "rgba(59,130,246,0.30)",
              background: "linear-gradient(160deg, rgba(30,64,175,0.10) 0%, var(--bg2) 60%)",
              padding: 36,
            }}
          >
            <p className="card-num" style={{ color: "#6D8FE8" }}>CONSULTORIA · FOCUS CUSTOM</p>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)", fontSize: 10,
                color: "#6D8FE8", background: "rgba(30,64,175,0.18)",
                border: "1px solid rgba(59,130,246,0.30)", borderRadius: 4,
                padding: "3px 8px", letterSpacing: "0.08em", textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Espaço Natividade
            </span>
            <h3 style={{ fontSize: 22, lineHeight: 1.3 }}>
              Processos na cabeça do dono → hub operacional no Notion
            </h3>
            <p style={{ color: "var(--text2)", marginTop: 12, marginBottom: 28, fontSize: 14 }}>
              Reestruturação completa com mapeamento de processos, Notion e agentes de IA em 3 semanas.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6" style={{ borderTop: "1px solid var(--line)" }}>
              {[
                { n: "8+", l: "processos mapeados" },
                { n: "3", l: "semanas de entrega" },
                { n: "0", l: "dependência do dono" },
              ].map((s) => (
                <div key={s.l}>
                  <p style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1 }}>{s.n}</p>
                  <p style={{ fontSize: 11, color: "var(--text3)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em", marginTop: 8 }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 — SaaS Hub */}
          <div className="card" style={{ padding: 36 }}>
            <p className="card-num">SAAS · HUB EMPRESARIAL</p>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)", fontSize: 10,
                color: "var(--text3)", border: "1px solid var(--line2)",
                borderRadius: 4, padding: "3px 8px",
                letterSpacing: "0.08em", textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Agência Digital
            </span>
            <h3 style={{ fontSize: 22, lineHeight: 1.3 }}>
              5 planilhas desconexas → sistema único com IA
            </h3>
            <p style={{ color: "var(--text2)", marginTop: 12, marginBottom: 28, fontSize: 14 }}>
              CRM, financeiro e projetos centralizados. Onboarding de clientes de 3 semanas para 4 dias.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6" style={{ borderTop: "1px solid var(--line)" }}>
              {[
                { n: "5×", l: "mais rápido no onboarding" },
                { n: "12h", l: "economizadas por semana" },
              ].map((s) => (
                <div key={s.l}>
                  <p style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1 }}>{s.n}</p>
                  <p style={{ fontSize: 11, color: "var(--text3)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em", marginTop: 8 }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONSULTORIA OU SAAS ===== */}
      <section className="container-focus section-padding" id="planos">
        <p className="sec-label">Dois caminhos</p>
        <h2 style={{ maxWidth: 720 }}>
          Consultoria ou <strong>SaaS</strong>?
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {/* Focus Custom */}
          <div
            className="card relative"
            style={{
              padding: 36,
              border: "2px solid rgba(59,130,246,0.45)",
              background: "linear-gradient(160deg, rgba(30,64,175,0.10) 0%, var(--bg2) 60%)",
            }}
          >
            <span
              style={{
                position: "absolute", top: 20, right: 20,
                fontFamily: "var(--font-mono)", fontSize: 10,
                color: "#6D8FE8", background: "rgba(30,64,175,0.18)",
                border: "1px solid rgba(59,130,246,0.30)", borderRadius: 4,
                padding: "3px 8px", letterSpacing: "0.08em", textTransform: "uppercase",
              }}
            >
              Vagas Abertas
            </span>
            <p className="card-num" style={{ color: "#6D8FE8" }}>01 · Focus Custom</p>
            <h3 style={{ fontSize: 22 }}>Consultoria de Operações com IA</h3>
            <p style={{ color: "var(--text2)", fontSize: 14, marginTop: 8, marginBottom: 20 }}>
              Para empresas que precisam reestruturar a operação do zero.
            </p>
            <ul style={{ marginBottom: 28, padding: 0, listStyle: "none" }}>
              {["Diagnóstico e mapeamento de processos", "Notion como hub operacional", "POPs e playbooks", "Agentes de IA personalizados", "Onboarding + suporte 2 semanas"].map((f) => (
                <li key={f} style={{ color: "var(--text2)", fontSize: 14, marginBottom: 10, display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#6D8FE8" }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p style={{ color: "var(--text2)", fontSize: 13, marginBottom: 16 }}>
              A partir de <strong style={{ color: "var(--text)", fontSize: 18 }}>R$ 3.800</strong>
              <span style={{ color: "var(--text3)" }}> · R$ 180/h</span>
            </p>
            <TalkToLuciano className="!flex w-full" label="Agendar diagnóstico" />
          </div>

          {/* Hub Empresarial */}
          <div className="card relative" style={{ padding: 36 }}>
            <span
              style={{
                position: "absolute", top: 20, right: 20,
                fontFamily: "var(--font-mono)", fontSize: 10,
                color: "var(--text3)", border: "1px solid var(--line2)",
                borderRadius: 4, padding: "3px 8px",
                letterSpacing: "0.08em", textTransform: "uppercase",
              }}
            >
              Acesso Imediato
            </span>
            <p className="card-num">02 · Hub Empresarial</p>
            <h3 style={{ fontSize: 22 }}>Plataforma SaaS pronta para usar</h3>
            <p style={{ color: "var(--text2)", fontSize: 14, marginTop: 8, marginBottom: 20 }}>
              Para começar agora, sem espera. CRM, financeiro, projetos e mais.
            </p>
            <ul style={{ marginBottom: 28, padding: 0, listStyle: "none" }}>
              {["Financeiro completo", "Gestão de Projetos", "CRM Inteligente", "Recursos Humanos", "Dashboards e IA Assistant"].map((f) => (
                <li key={f} style={{ color: "var(--text2)", fontSize: 14, marginBottom: 10, display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--text3)" }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p style={{ color: "var(--text2)", fontSize: 13, marginBottom: 16 }}>
              A partir de <strong style={{ color: "var(--text)", fontSize: 18 }}>R$ 97</strong>
              <span style={{ color: "var(--text3)" }}> /mês</span>
            </p>
            <Link to="/hub-empresarial" onClick={() => cta("card_hub")} className="btn-ghost w-full" style={{ display: "flex" }}>
              Conhecer Hub Empresarial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="container-focus section-padding">
        <p className="sec-label">Quem confia na Focus</p>
        <h2 style={{ maxWidth: 720 }}>
          Empresas que já <strong>transformaram</strong> sua gestão.
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          <div className="tc-featured md:col-span-1">
            <div className="flex gap-1 mb-4" style={{ color: "#FBBF24", fontSize: 13, letterSpacing: 2 }}>
              ★★★★★
            </div>
            <p style={{ fontSize: 18, color: "rgba(235,235,235,0.85)", lineHeight: 1.6, fontWeight: 300 }}>
              "Saímos de 5 planilhas para um sistema único. A equipe agora tem clareza total do que precisa fazer."
            </p>
            <div className="mt-6">
              <p style={{ color: "var(--text)", fontSize: 13, fontWeight: 600 }}>Rafael M.</p>
              <p style={{ color: "var(--text3)", fontSize: 12 }}>CEO · Agência Digital</p>
            </div>
          </div>

          {[
            { q: "O controle financeiro mudou completamente. Hoje sei exatamente o fluxo de caixa e posso planejar com segurança.", n: "Camila S.", r: "Sócia · Consultoria de RH" },
            { q: "Em 3 semanas, tínhamos um portal do cliente funcionando. Profissionalizou totalmente nossa entrega.", n: "Lucas A.", r: "Diretor · Escritório de Contabilidade" },
          ].map((t) => (
            <div key={t.n} className="tc">
              <div className="flex gap-1 mb-4" style={{ color: "#FBBF24", fontSize: 13, letterSpacing: 2 }}>★★★★★</div>
              <p style={{ fontSize: 15, color: "rgba(235,235,235,0.75)", lineHeight: 1.65, fontWeight: 300 }}>"{t.q}"</p>
              <div className="mt-6">
                <p style={{ color: "var(--text)", fontSize: 13, fontWeight: 600 }}>{t.n}</p>
                <p style={{ color: "var(--text3)", fontSize: 12 }}>{t.r}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-10" style={{ color: "var(--text3)", fontSize: 12 }}>
          <Star className="w-3.5 h-3.5" style={{ color: "var(--accent-hex)", fill: "var(--accent-hex)" }} />
          <span>Criador destaque no marketplace oficial do Notion Brasil</span>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
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
            Vamos conversar sobre a sua <strong>operação</strong>?
          </h2>
          <p style={{ color: "var(--text2)", maxWidth: 540, margin: "0 auto 32px", fontSize: 15 }}>
            Diagnóstico gratuito de 30 minutos. Sem pitch comercial — só análise honesta do seu cenário.
          </p>

          <div className="flex justify-center">
            <TalkToLuciano />
          </div>

          <div
            className="mt-10 pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{ borderTop: "1px solid var(--line)" }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Prefere começar com o software?
            </span>
            <Link to="/hub-empresarial" onClick={() => cta("cta_final_hub")} className="btn-ghost">
              Conhecer Hub Empresarial →
            </Link>
            <Link to="/auth/signup" onClick={() => cta("cta_final_signup")} className="btn-ghost">
              Começar grátis →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
