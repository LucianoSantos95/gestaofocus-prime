import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { CountUp } from "@/hooks/useCountUp";
import { openLeadModal } from "@/lib/leadModal";
import diagVideo from "@/assets/case-agente-diagnostico.mp4.asset.json";

const WA_LINK =
  "https://wa.me/5511916742443?text=Ol%C3%A1+Luciano%2C+quero+agendar+um+diagn%C3%B3stico+gratuito+para+minha+empresa";

const Index = () => {
  const cta = (label: string) =>
    trackEvent("cta_click", { event_category: "conversion", event_label: label });

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>
      <SEOHead
        title="Focus Gestão | Operação com IA para PMEs e Agências"
        description="Consultoria de operações com IA para PMEs, agências e consultorias que querem sair do improviso e operar como empresa de verdade."
        canonical="/"
        keywords="consultoria lovable, lovable partner, desenvolvimento sob medida, arquitetura de operação, IA para PMEs, agentes de IA, mapeamento de processos"
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
          <h1 className="snj-display focus-word-reveal" data-speakable>
            {["Clareza.", "Precisão.", "Operação."].map((w, i) => (
              <span key={w} style={{ animationDelay: `${0.08 + i * 0.14}s` }}>
                {w}
                {i < 2 && <br />}
              </span>
            ))}
          </h1>

          <aside className="snj-talk">
            <div className="snj-talk__row">
              <div className="snj-talk__avatar">LS</div>
              <div>
                <div className="snj-talk__name">Fale com Luciano</div>
                <div className="snj-talk__role">Fundador da Focus</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                cta("hero_talk_card");
                openLeadModal("hero_talk_card");
              }}
              className="snj-btn-primary focus-magnetic"
              style={{ border: "none", cursor: "pointer" }}
            >
              <span>Diagnóstico gratuito (30min)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </aside>
        </div>
      </section>

      {/* ===================== MARQUEE ===================== */}
      <section aria-hidden="true" className="focus-marquee">
        <div className="focus-marquee__track">
          {Array.from({ length: 2 }).flatMap((_, dupIdx) =>
            [
              "Lovable Partner Oficial",
              "Consultoria de Operação",
              "Agentes de IA",
              "Mapeamento de Processos",
              "Sistemas sob medida",
              "Diagnóstico gratuito",
              "Entrega em semanas",
            ].map((item, i) => (
              <span key={`${dupIdx}-${i}`} className="focus-marquee__item">
                <span className="focus-marquee__dot" />
                {item}
              </span>
            )),
          )}
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

      {/* ===================== ADVISOR TEASER ===================== */}
      <section className="snj-section container-focus">
        <div
          style={{
            border: "1px solid var(--line)",
            borderRadius: 22,
            padding: "40px 36px",
            background: "var(--bg2)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 24,
            justifyContent: "space-between",
          }}
        >
          <div style={{ maxWidth: 560 }}>
            <span className="snj-tag" style={{ marginBottom: 12, display: "block" }}>/ Advisor</span>
            <h3 style={{ fontSize: 22, fontWeight: 500, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: 10 }}>
              Depois da consultoria, sua operação continua acompanhada.
            </h3>
            <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.6 }}>
              Clientes têm acesso ao Advisor dentro do Hub Central — um assistente de IA que olha os
              dados reais da operação e sugere o próximo passo, sem você precisar caçar relatório.
            </p>
          </div>
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

      {/* ===================== FOCUS × LOVABLE ===================== */}
      <section className="snj-section container-focus">
        <div
          style={{
            border: "1px solid var(--line2)",
            borderRadius: 28,
            overflow: "hidden",
          }}
        >
          <div className="grid md:grid-cols-2" style={{ background: "var(--bg2)" }}>
            <div style={{ padding: "48px 40px", borderRight: "1px solid var(--line)" }}>
              <span className="snj-tag" style={{ display: "block", marginBottom: 20 }}>
                Focus × Lovable
              </span>
              <h2 className="snj-h2">
                Parceira certificada <em>Lovable no Brasil</em>
              </h2>
              <p style={{ color: "var(--text2)", marginTop: 20, fontSize: 15, lineHeight: 1.7 }}>
                A Focus é uma das poucas consultorias com parceria oficial Lovable no Brasil.
                Construímos sistemas funcionais em semanas — com código real e infraestrutura
                escalável, não templates genéricos.
              </p>
              <p style={{ color: "var(--text2)", marginTop: 12, fontSize: 15, lineHeight: 1.7 }}>
                Já ouviu falar da Lovable? A gente mapeia sua operação e constrói exatamente
                o sistema que você precisa — sem freelancer, sem agência de software tradicional.
              </p>
              <button
                type="button"
                onClick={() => {
                  cta("lovable_section");
                  openLeadModal("lovable_section");
                }}
                className="snj-btn-primary focus-magnetic"
                style={{ marginTop: 28, display: "inline-flex", border: "none", cursor: "pointer" }}
              >
                Quero um sistema Lovable <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "⚡", t: "Entrega em semanas", d: "Sistemas prontos para uso sem espera de meses de desenvolvimento tradicional." },
                { icon: "🔒", t: "Você é dono do código", d: "Acesso total ao repositório. Sem lock-in. Migração e versionamento incluídos." },
                { icon: "🤖", t: "IA embarcada", d: "Agentes customizados integrados direto na operação que construímos para você." },
                { icon: "🔄", t: "Parceria contínua", d: "Ajustes e expansão após a entrega enquanto seu negócio cresce." },
              ].map((item) => (
                <div
                  key={item.t}
                  style={{
                    display: "flex",
                    gap: 16,
                    padding: "16px 20px",
                    border: "1px solid var(--line)",
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <span style={{ fontSize: 18, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{item.t}</p>
                    <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.5 }}>{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CASES ===================== */}
      <section className="snj-section container-focus">
        <div className="snj-section__head">
          <span className="snj-tag">Produtos Focus</span>
          <h2 className="snj-h2">
            Construídos com <em>Lovable, usados de verdade</em>
          </h2>
        </div>

        <div className="grid gap-5" style={{ maxWidth: 480, margin: "0 auto" }}>
          {/* Case — Agente de Diagnóstico */}
          <div
            style={{
              border: "1px solid var(--line2)",
              borderRadius: 22,
              overflow: "hidden",
              background: "var(--bg2)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                background: "var(--bg3)",
                overflow: "hidden",
              }}
            >
              <video
                src={diagVideo.url}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/case-indica.png"
                aria-label="Focus Indica — agente de IA que mapeia qual automação sua empresa precisa"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <div style={{ padding: "28px 32px 32px", display: "flex", flexDirection: "column", gap: 12, flexGrow: 1 }}>
              <span className="snj-step__num">/ Agente de Diagnóstico</span>
              <h3 style={{ fontSize: 22, fontWeight: 500, color: "var(--text)", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
                Descubra qual Agente de IA sua empresa precisa em 2 minutos
              </h3>
              <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.65 }}>
                6 perguntas. Diagnóstico técnico gratuito. O agente mapeia seus gargalos e indica
                a automação certa para Atendimento, Vendas, Operação ou Financeiro.
              </p>
              <div style={{ marginTop: "auto", paddingTop: 16 }}>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => cta("case_indica")}
                  className="snj-btn-primary"
                  style={{ fontSize: 13 }}
                >
                  Iniciar diagnóstico <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== NEWSLETTER ===================== */}
      <section className="snj-section container-focus">
        <div
          style={{
            border: "1px solid rgba(157,232,157,0.18)",
            borderRadius: 28,
            padding: "48px 40px",
            background: "linear-gradient(135deg, rgba(157,232,157,0.05) 0%, transparent 55%), var(--bg2)",
          }}
        >
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <span className="snj-tag" style={{ display: "block", marginBottom: 16 }}>
                Newsletter semanal · Gratuita
              </span>
              <h2
                style={{
                  fontSize: "clamp(22px, 4vw, 30px)",
                  fontWeight: 600,
                  color: "var(--text)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.25,
                  marginBottom: 16,
                }}
              >
                Quantas assinaturas você paga e <em>não usa nem 30%?</em>
              </h2>
              <p style={{ color: "var(--text2)", fontSize: 15, lineHeight: 1.7, maxWidth: 540 }}>
                Eu mando toda semana o que aprendo ajudando empresas a saírem da bagunça de
                ferramenta — o que dá pra cortar, o que vale manter, e como fazer mais com menos.
              </p>
            </div>
            <a
              href="https://gestaofocus.notion.site/39dbe653a5aa80faa03ed0546b257556?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => cta("newsletter")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 28px",
                background: "rgba(157,232,157,0.10)",
                border: "1px solid rgba(157,232,157,0.28)",
                borderRadius: 12,
                color: "#9DE89D",
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "var(--font-sans)",
                cursor: "pointer",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              ✉ Quero receber
            </a>
          </div>
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

        <div className="grid gap-5" style={{ maxWidth: 480, margin: "0 auto" }}>
          {/* Consultoria — valor sob consulta (popular) */}
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
            <button
              type="button"
              onClick={() => {
                cta("final_wa");
                openLeadModal("final_cta");
              }}
              className="snj-btn-primary focus-magnetic"
              style={{ border: "none", cursor: "pointer" }}
            >
              Diagnóstico gratuito <ArrowUpRight className="w-4 h-4" />
            </button>
            <Link
              to="/solucoes-sob-medida"
              onClick={() => cta("final_consultoria")}
              className="snj-btn-outline"
              style={{ textDecoration: "none" }}
            >
              Conhecer Consultoria <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
