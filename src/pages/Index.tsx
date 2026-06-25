import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { CountUp } from "@/hooks/useCountUp";

const WA_LINK =
  "https://wa.me/5511916742443?text=Ol%C3%A1+Luciano%2C+quero+agendar+um+diagn%C3%B3stico+gratuito+para+minha+empresa";

const Index = () => {
  const cta = (label: string) =>
    trackEvent("cta_click", { event_category: "conversion", event_label: label });

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>
      <SEOHead
        title="Focus Gestão | Operação com IA para PMEs e Agências"
        description="Consultoria de operações com IA + Hub Empresarial SaaS. Para PMEs, agências e consultorias que querem sair do improviso e operar como empresa de verdade."
        canonical="/"
        keywords="consultoria lovable, lovable partner, desenvolvimento sob medida, arquitetura de operação, IA para PMEs, hub empresarial, agentes de IA, mapeamento de processos"
        type="website"
        speakable={["[data-speakable]", "h1", ".snj-display"]}
      />

      {/* ===================== HERO ===================== */}
      <section className="snj-hero">
        {/* TOP — labels left, description right */}
        <div className="snj-hero__top container-focus" style={{ paddingTop: 8 }}>
          <div className="snj-hero__labels">
            <span className="snj-label-mono">/ Arquitetura de Operação</span>
            <span className="snj-label-mono">/ Lovable como Hub Central</span>
            <span className="snj-label-mono">/ Agentes de IA Customizados</span>
            <span className="snj-label-mono" style={{ color: "#6D8FE8" }}>/ Lovable Partner Oficial</span>
          </div>
          <p className="snj-hero__desc">
            Desenhamos operações que trazem clareza, precisão e eficiência ao
            modo como sua empresa funciona — do mapeamento de processos aos
            agentes de IA.
          </p>
        </div>

        {/* CENTER — pill */}
        <div className="snj-hero__center">
          <span className="snj-pill">
            <span style={{ color: "#6D8FE8" }}>●</span> 50+ empresas operando com Focus
          </span>
        </div>

        {/* BOTTOM — display title + talk card */}
        <div className="snj-hero__bottom container-focus" style={{ paddingBottom: 24 }}>
          <h1 className="snj-display" data-speakable>
            Clareza.<br />
            Precisão.<br />
            Operação.
          </h1>

          <aside className="snj-talk">
            <div className="snj-talk__row">
              <div className="snj-talk__avatar">LS</div>
              <div>
                <div className="snj-talk__name">Fale com Luciano</div>
                <div className="snj-talk__role">Fundador da Focus</div>
              </div>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => cta("hero_talk_card")}
              className="snj-btn-primary"
            >
              <span>Diagnóstico gratuito (30min)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </aside>
        </div>
      </section>

      {/* ===================== TRUSTED ===================== */}
      <section className="container-focus" style={{ padding: "60px 24px 20px" }}>
        <p className="snj-tag" style={{ textAlign: "center", marginBottom: 32 }}>
          Empresas que operam com Focus
        </p>
        <div
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
          style={{ opacity: 0.55 }}
        >
          {["Espaço Natividade", "Agência Digital", "Consultoria RH", "Escritório Contábil", "Studio Criativo", "PME Industrial"].map(
            (n) => (
              <span
                key={n}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: "var(--text2)",
                  letterSpacing: "0.04em",
                }}
              >
                {n}
              </span>
            )
          )}
        </div>
      </section>

      {/* ===================== HIDDEN COST ===================== */}
      <section className="snj-section container-focus">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-4">
            <span className="snj-tag">/ Falta de Visibilidade</span>
            <span className="snj-tag">/ Onboarding Manual</span>
            <span className="snj-tag">/ Fluxos Fragmentados</span>
            <span className="snj-tag">/ Comunicação em Silos</span>
            <span className="snj-tag">/ Recursos Desperdiçados</span>
          </div>
          <div>
            <p className="snj-tag" style={{ marginBottom: 16 }}>O custo oculto</p>
            <h2 className="snj-h2">
              O custo escondido <em>do trabalho manual</em>
            </h2>
            <p style={{ color: "var(--text2)", marginTop: 24, fontSize: 16, lineHeight: 1.6, maxWidth: 520 }}>
              Cada operação travada custa receita, tempo de equipe e clareza de
              decisão. A maioria das PMEs e agências paga esse preço todos os
              meses — sem perceber.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="snj-section container-focus">
        <div className="snj-section__head">
          <span className="snj-tag">Como funciona</span>
          <h2 className="snj-h2">
            Uma abordagem simples e <em>estruturada para automação</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              n: "01",
              t: "Entender seu fluxo",
              d: "Mapeamos seus processos, ferramentas e gargalos reais.",
              tags: ["Diagnóstico", "Mapeamento", "Entrevistas", "Auditoria"],
              accent: "#6D8FE8",
            },
            {
              n: "02",
              t: "Projetar e construir",
              d: "Construímos soluções sob medida na Lovable + IA, com entrega rápida e código próprio.",
              tags: ["Arquitetura", "Lovable Partner", "Agentes IA", "Integrações"],
              accent: "#9DE89D",
            },
            {
              n: "03",
              t: "Otimizar e escalar",
              d: "Refinamos e expandimos junto com o crescimento da operação.",
              tags: ["Dashboards", "POPs", "Treinamento", "Iteração"],
              accent: "#E8C56D",
            },
          ].map((s) => (
            <div key={s.n} className="snj-step">
              <div
                style={{
                  aspectRatio: "4 / 3",
                  borderRadius: 12,
                  border: "1px solid var(--line)",
                  background: `radial-gradient(circle at 30% 25%, ${s.accent}22, transparent 55%), linear-gradient(160deg, #0a0a14, #14141f)`,
                  position: "relative",
                  overflow: "hidden",
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 84,
                    fontWeight: 600,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: "transparent",
                    WebkitTextStroke: `1.5px ${s.accent}`,
                    opacity: 0.85,
                  }}
                >
                  {s.n}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: "var(--text2)",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--line)",
                        padding: "4px 9px",
                        borderRadius: 999,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: s.accent,
                    boxShadow: `0 0 16px ${s.accent}`,
                  }}
                />
              </div>
              <span className="snj-step__num" style={{ color: s.accent }}>/ ETAPA {s.n}</span>
              <h3 style={{ fontSize: 22, fontWeight: 500, color: "var(--text)", letterSpacing: "-0.02em" }}>
                {s.t}
              </h3>
              <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.6 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="snj-section container-focus">
        <div className="snj-section__head">
          <span className="snj-tag">Serviços</span>
          <h2 className="snj-h2">
            Construído para <em>simplificar operações</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              n: "01",
              t: "Mapeamento de Processos",
              d: "Sistemas estruturados que eliminam trabalho repetitivo.",
              i: ["Auditoria de fluxos", "Integração entre ferramentas", "POPs e playbooks", "Automação de operações internas"],
            },
            {
              n: "02",
              t: "Sistemas com IA",
              d: "Inteligência embarcada na sua operação.",
              i: ["Qualificação de leads com IA", "Enriquecimento de dados", "Assistentes GPT internos", "Roteamento inteligente"],
            },
            {
              n: "03",
              t: "Operação Comercial",
              d: "Infraestrutura previsível e escalável de receita.",
              i: ["Captura e distribuição de leads", "CRM automatizado", "Sequências de follow-up", "Dashboards de performance"],
            },
            {
              n: "04",
              t: "Hub Empresarial (SaaS)",
              d: "Plataforma pronta para usar — CRM, financeiro, projetos e IA.",
              i: ["Financeiro completo", "Gestão de projetos", "CRM inteligente", "IA Assistant integrado"],
            },
          ].map((s) => (
            <div
              key={s.n}
              style={{
                border: "1px solid var(--line)",
                borderRadius: 22,
                padding: 32,
                background: "var(--bg2)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <span className="snj-step__num">/ {s.n}</span>
              <h3 style={{ fontSize: 26, fontWeight: 500, color: "var(--text)", letterSpacing: "-0.025em" }}>{s.t}</h3>
              <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.6 }}>{s.d}</p>
              <ul style={{ listStyle: "none", padding: 0, marginTop: 8, display: "flex", flexDirection: "column", gap: 10 }}>
                {s.i.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 14,
                      color: "var(--text)",
                      paddingTop: 10,
                      borderTop: "1px solid var(--line)",
                    }}
                  >
                    <Check className="w-3.5 h-3.5" style={{ color: "#6D8FE8" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== WHY US — COMPARISON ===================== */}
      <section className="snj-section container-focus">
        <div className="snj-section__head">
          <span className="snj-tag">Por que Focus</span>
          <h2 className="snj-h2">
            Construído para <em>impacto real no negócio</em>
          </h2>
        </div>

        <div className="snj-compare">
          {[
            ["Critério", "Focus", "Outras agências", "Contratar interno"],
            ["Abordagem", "Processo primeiro", "Ferramenta primeiro", "Depende do hire"],
            ["Workflow", "Em volta da sua operação", "Templates genéricos", "Se já houver expertise"],
            ["Velocidade", "Semanas, não meses", "Quase sempre atrasa", "Recrutamento longo"],
            ["Otimização", "Melhoria contínua", "Entrega e some", "Limitado por banda"],
            ["Custo", "Escopo fixo, claro", "Scope creep comum", "Salário + encargos"],
          ].map((row, idx) => (
            <div key={idx} className="snj-compare__row">
              {row.map((cell, i) => (
                <div
                  key={i}
                  className={
                    idx === 0
                      ? "snj-compare__head"
                      : i === 1
                      ? "snj-compare__cell--us"
                      : i === 0
                      ? "snj-compare__label"
                      : ""
                  }
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="snj-section container-focus">
        <div className="grid md:grid-cols-4 gap-10 md:gap-5">
          {[
            { n: "150+", l: "Sistemas entregues" },
            { n: "50%", l: "Tempo economizado" },
            { n: "3×", l: "Mais eficiência" },
            { n: "98%", l: "Satisfação dos clientes" },
          ].map((m) => (
            <div key={m.l}>
              <div className="snj-stat-num"><CountUp value={m.n} /></div>
              <p className="snj-tag" style={{ marginTop: 14 }}>{m.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="snj-section container-focus">
        <div className="snj-section__head">
          <span className="snj-tag">Depoimentos</span>
          <h2 className="snj-h2">
            O que dizem nossos <em>clientes</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              q: "Saímos de 5 planilhas para um sistema único. A equipe agora tem clareza total do que precisa fazer.",
              n: "Rafael M.",
              r: "CEO · Agência Digital",
            },
            {
              q: "O controle financeiro mudou completamente. Hoje sei o fluxo de caixa e posso planejar com segurança.",
              n: "Camila S.",
              r: "Sócia · Consultoria de RH",
            },
            {
              q: "Em 3 semanas, tínhamos um portal do cliente funcionando. Profissionalizou nossa entrega.",
              n: "Lucas A.",
              r: "Diretor · Escritório Contábil",
            },
          ].map((t) => (
            <div
              key={t.n}
              style={{
                border: "1px solid var(--line)",
                borderRadius: 22,
                padding: 32,
                background: "var(--bg2)",
                display: "flex",
                flexDirection: "column",
                gap: 24,
                minHeight: 280,
              }}
            >
              <p style={{ fontSize: 18, color: "var(--text)", lineHeight: 1.5, fontWeight: 300, letterSpacing: "-0.01em" }}>
                "{t.q}"
              </p>
              <div style={{ marginTop: "auto" }}>
                <p style={{ color: "var(--text)", fontSize: 14, fontWeight: 600 }}>{t.n}</p>
                <p className="snj-tag" style={{ marginTop: 4 }}>{t.r}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== PRICING ===================== */}
      <section className="snj-section container-focus" id="planos">
        <div className="snj-section__head">
          <span className="snj-tag">Planos</span>
          <h2 className="snj-h2">
            Caminhos flexíveis <em>para sua operação</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Hub */}
          <div className="snj-price-card">
            <span className="snj-step__num">/ Hub Empresarial</span>
            <p style={{ color: "var(--text2)", fontSize: 14 }}>Para começar agora — SaaS pronto.</p>
            <div>
              <span className="snj-price-amount">R$ 119</span>
              <span style={{ color: "var(--text3)", fontSize: 14, marginLeft: 6 }}>/mês</span>
            </div>
            <Link to="/hub-empresarial" onClick={() => cta("price_hub")} className="snj-btn-outline" style={{ justifyContent: "center" }}>
              Conhecer Hub <ArrowRight className="w-4 h-4" />
            </Link>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10, marginTop: 8 }}>
              {["CRM + Financeiro + Projetos", "IA Assistant", "Dashboards prontos", "Suporte por WhatsApp"].map((f) => (
                <li key={f} style={{ display: "flex", gap: 10, fontSize: 13, color: "var(--text2)" }}>
                  <Check className="w-3.5 h-3.5 mt-0.5" style={{ color: "var(--text3)" }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Consultoria — R$ 180/h (popular) */}
          <div className="snj-price-card snj-price-card--popular">
            <span
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "#6D8FE8",
                background: "rgba(30,64,175,0.18)",
                border: "1px solid rgba(59,130,246,0.30)",
                borderRadius: 999,
                padding: "4px 10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Popular
            </span>
            <span className="snj-step__num" style={{ color: "#6D8FE8" }}>/ Consultoria</span>
            <p style={{ color: "var(--text2)", fontSize: 14 }}>
              Diagnóstico, arquitetura e construção da sua operação — entrega por projeto fechado.
            </p>
            <div>
              <span className="snj-price-amount" style={{ fontSize: 32 }}>Valor sob consulta</span>
            </div>
            <Link
              to="/solucoes-sob-medida"
              onClick={() => cta("price_consultoria")}
              className="snj-btn-primary"
              style={{ justifyContent: "center" }}
            >
              Conhecer Consultoria <ArrowRight className="w-4 h-4" />
            </Link>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10, marginTop: 8 }}>
              {[
                "Diagnóstico de processos",
                "Mapeamento de fluxos",
                "Arquitetura e desenvolvimento na Lovable (Partner oficial)",
                "Agentes de IA sob medida",
                "Escopo e preço fechados antes de começar",
                "Entrega acelerada (semanas, não meses)",
              ].map((f) => (
                <li key={f} style={{ display: "flex", gap: 10, fontSize: 13, color: "var(--text)" }}>
                  <Check className="w-3.5 h-3.5 mt-0.5" style={{ color: "#6D8FE8" }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="snj-section container-focus">
        <div
          style={{
            border: "1px solid var(--line2)",
            borderRadius: 28,
            padding: "80px 32px",
            background:
              "radial-gradient(ellipse at center, rgba(30,64,175,0.12), transparent 70%), var(--bg2)",
            textAlign: "center",
          }}
        >
          <span className="snj-tag" style={{ display: "block", marginBottom: 20 }}>
            Vamos começar
          </span>
          <h2 className="snj-h2" style={{ margin: "0 auto", textAlign: "center" }}>
            Pronto para <em>refinar sua operação?</em>
          </h2>
          <p style={{ color: "var(--text2)", maxWidth: 560, margin: "24px auto 36px", fontSize: 16, lineHeight: 1.6 }}>
            Compartilhe seu processo atual. Vamos identificar o que pode ser
            automatizado e onde dá para ganhar eficiência.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => cta("final_wa")}
              className="snj-btn-primary"
            >
              Diagnóstico gratuito <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link to="/hub-empresarial" onClick={() => cta("final_hub")} className="snj-btn-outline">
              Conhecer Hub Empresarial <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
