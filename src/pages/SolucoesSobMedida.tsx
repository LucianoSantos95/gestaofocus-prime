import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TalkToLuciano, { WA_LINK } from "@/components/TalkToLuciano";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Check, X as XIcon, Brain, FileText, Users, Zap, Star } from "lucide-react";

const SolucoesSobMedida = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <SEOHead
        title="Focus Custom — Consultoria de Operações com IA | Focus"
        description="Mapeamento de processos, Notion como hub operacional e agentes de IA. Para PMEs, agências e consultorias que operam no improviso."
        canonical="/solucoes-sob-medida"
        keywords="consultoria de operações, notion partner, agentes de IA, mapeamento de processos, POPs, playbooks"
      />

      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: "92vh", padding: "140px 24px 100px" }}>
        <div className="hero-grid" />
        <span className="corner corner-tl" />
        <span className="corner corner-tr" />
        <span className="corner corner-bl" />
        <span className="corner corner-br" />

        <div className="container-focus relative z-10 text-center">
          {/* 4 tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 anim-up">
            {["MAPEAMENTO DE PROCESSOS", "IMPLEMENTAÇÃO NOTION", "AGENTES DE IA", "PLAYBOOKS E POPS"].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "var(--font-mono)", fontSize: 10,
                  color: "var(--text3)", border: "1px solid var(--line2)",
                  borderRadius: 4, padding: "4px 10px",
                  letterSpacing: "0.08em",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="hero-title anim-up-1 mx-auto" style={{ maxWidth: 1000 }}>
            Você tem processos na <em>cabeça</em>.<br />
            Eu transformo isso em <strong>sistema que funciona sem você.</strong>
          </h1>

          <p className="hero-subtitle anim-up-2 mx-auto mt-8" style={{ maxWidth: 720 }}>
            Mapeamento de processos + Notion como hub operacional + agentes de IA — para PMEs, agências e
            consultorias que operam no improviso.
          </p>

          <div className="anim-up-3 mt-10 flex flex-col items-center gap-4">
            <TalkToLuciano />
            <a href="#como-funciona" className="btn-ghost">Ver como funciona ↓</a>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {["150+ sistemas implementados", "Notion Certified Partner", "Lean Six Sigma Yellow Belt"].map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5" style={{ fontSize: 12, color: "var(--text2)" }}>
                <Check className="w-3.5 h-3.5" style={{ color: "#6D8FE8" }} />
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMAS — BENTO */}
      <section className="container-focus section-padding">
        <p className="sec-label">O que está travando você</p>
        <h2 style={{ maxWidth: 720 }}>
          Sintomas de uma operação <strong>no improviso</strong>.
        </h2>

        <div className="bento">
          {[
            { n: "01", t: "Processos sem documentação", d: "Tudo está na cabeça do dono ou de um funcionário-chave. Se sai, vai junto.", col: 5, row: 2, featured: true },
            { n: "02", t: "Gestão por WhatsApp", d: "Decisões importantes perdidas em grupos. Sem histórico, sem rastreabilidade.", col: 4, row: 1 },
            { n: "03", t: "Sem padrão entre equipes", d: "Cada um faz do seu jeito. Qualidade inconsistente.", col: 3, row: 1 },
            { n: "04", t: "Crescimento travado", d: "Você sabe que precisa escalar — mas não consegue tirar a mão da operação.", col: 7, row: 1 },
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

      {/* RESULTADOS REAIS */}
      <section className="container-focus section-padding">
        <p className="sec-label">Resultados reais</p>
        <h2 style={{ maxWidth: 720, marginBottom: 40 }}>
          Casos <strong>em produção</strong>.
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Card 1 */}
          <div
            className="card"
            style={{
              borderColor: "rgba(59,130,246,0.30)",
              background: "linear-gradient(160deg, rgba(30,64,175,0.10) 0%, var(--bg2) 60%)",
              padding: 36,
            }}
          >
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
              Em Andamento · Jun 2026
            </span>
            <p className="card-num" style={{ color: "#6D8FE8" }}>Espaço de serviços</p>
            <h3 style={{ fontSize: 22 }}>Espaço Natividade</h3>
            <p style={{ color: "var(--text2)", marginTop: 12, marginBottom: 28, fontSize: 14 }}>
              Reestruturação completa: mapeamento de processos, Notion como hub e agentes de IA para
              tirar o dono da operação.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6" style={{ borderTop: "1px solid var(--line)" }}>
              {[
                { n: "8+", l: "processos mapeados" },
                { n: "3", l: "semanas de entrega" },
                { n: "0", l: "dependência do dono" },
              ].map((s) => (
                <div key={s.l}>
                  <p style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1 }}>{s.n}</p>
                  <p style={{ fontSize: 11, color: "var(--text3)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em", marginTop: 8 }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="card" style={{ padding: 36 }}>
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
              Concluído
            </span>
            <p className="card-num">Agência Digital</p>
            <h3 style={{ fontSize: 22 }}>Centralização de processos</h3>
            <p style={{ color: "var(--text2)", marginTop: 12, marginBottom: 28, fontSize: 14 }}>
              Onboarding de clientes que levava 3 semanas passou a funcionar em 4 dias.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6" style={{ borderTop: "1px solid var(--line)" }}>
              {[
                { n: "5×", l: "mais rápido no onboarding" },
                { n: "12h", l: "economizadas por semana" },
              ].map((s) => (
                <div key={s.l}>
                  <p style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1 }}>{s.n}</p>
                  <p style={{ fontSize: 11, color: "var(--text3)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em", marginTop: 8 }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARAÇÃO */}
      <section className="container-focus section-padding">
        <p className="sec-label">Por que Focus Custom</p>
        <h2 style={{ maxWidth: 720, marginBottom: 40 }}>
          DIY, CLT ou <strong>Focus Custom</strong>?
        </h2>

        <div className="grid grid-cols-1 gap-4 md:max-w-2xl">
          {/* DIY */}
          <div className="card" style={{ borderColor: "rgba(239,68,68,0.18)", background: "rgba(239,68,68,0.03)", padding: 28 }}>
            <p className="card-num" style={{ color: "#FCA5A5" }}>01 · Tentar sozinho (DIY)</p>
            <div className="grid grid-cols-2 gap-4 my-4">
              <div>
                <p style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.04em", color: "#FCA5A5", lineHeight: 1 }}>6+</p>
                <p style={{ fontSize: 11, color: "var(--text3)", fontFamily: "var(--font-mono)", marginTop: 4 }}>meses até funcionar</p>
              </div>
              <div>
                <p style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.04em", color: "#FCA5A5", lineHeight: 1 }}>Alto</p>
                <p style={{ fontSize: 11, color: "var(--text3)", fontFamily: "var(--font-mono)", marginTop: 4 }}>custo de retrabalho</p>
              </div>
            </div>
            <ul style={{ padding: 0, listStyle: "none" }}>
              {["Sem método comprovado", "Sem documentação padronizada", "Equipe não adota", "Você continua fazendo tudo"].map((f) => (
                <li key={f} style={{ color: "var(--text2)", fontSize: 13, marginBottom: 6, display: "flex", gap: 8 }}>
                  <XIcon className="w-3.5 h-3.5 mt-1 flex-shrink-0" style={{ color: "#FCA5A5" }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CLT */}
          <div className="card" style={{ borderColor: "rgba(239,68,68,0.18)", background: "rgba(239,68,68,0.03)", padding: 28 }}>
            <p className="card-num" style={{ color: "#FCA5A5" }}>02 · Contratar CLT</p>
            <div className="grid grid-cols-2 gap-4 my-4">
              <div>
                <p style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.04em", color: "#FCA5A5", lineHeight: 1 }}>R$5k+</p>
                <p style={{ fontSize: 11, color: "var(--text3)", fontFamily: "var(--font-mono)", marginTop: 4 }}>por mês para sempre</p>
              </div>
              <div>
                <p style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.04em", color: "#FCA5A5", lineHeight: 1 }}>3+</p>
                <p style={{ fontSize: 11, color: "var(--text3)", fontFamily: "var(--font-mono)", marginTop: 4 }}>meses para resultado</p>
              </div>
            </div>
            <ul style={{ padding: 0, listStyle: "none" }}>
              {["Custo fixo mesmo sem resultado", "Você ainda precisa gerenciar", "Conhecimento vai embora com a pessoa", "Sem garantia de entrega"].map((f) => (
                <li key={f} style={{ color: "var(--text2)", fontSize: 13, marginBottom: 6, display: "flex", gap: 8 }}>
                  <XIcon className="w-3.5 h-3.5 mt-1 flex-shrink-0" style={{ color: "#FCA5A5" }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Custom */}
          <div
            className="card"
            style={{
              border: "2px solid rgba(59,130,246,0.55)",
              background: "linear-gradient(160deg, rgba(30,64,175,0.10) 0%, var(--bg2) 60%)",
              padding: 28,
            }}
          >
            <p className="card-num" style={{ color: "#6D8FE8" }}>03 · Focus Custom ✓</p>
            <div className="grid grid-cols-2 gap-4 my-4">
              <div>
                <p style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.04em", color: "#6D8FE8", lineHeight: 1 }}>2–4</p>
                <p style={{ fontSize: 11, color: "var(--text3)", fontFamily: "var(--font-mono)", marginTop: 4 }}>semanas até operar</p>
              </div>
              <div>
                <p style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.04em", color: "#6D8FE8", lineHeight: 1 }}>R$0</p>
                <p style={{ fontSize: 11, color: "var(--text3)", fontFamily: "var(--font-mono)", marginTop: 4 }}>custo fixo depois</p>
              </div>
            </div>
            <ul style={{ padding: 0, listStyle: "none" }}>
              {["Método comprovado em 150+ projetos", "Documentação + POPs entregues", "Onboarding da equipe incluído", "Tudo seu — zero dependência"].map((f) => (
                <li key={f} style={{ color: "var(--text2)", fontSize: 13, marginBottom: 6, display: "flex", gap: 8 }}>
                  <Check className="w-3.5 h-3.5 mt-1 flex-shrink-0" style={{ color: "#6D8FE8" }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUÍDO */}
      <section className="container-focus section-padding">
        <p className="sec-label">O que está incluído</p>
        <h2 style={{ maxWidth: 720, marginBottom: 40 }}>
          Tudo o que você precisa <strong>para sair do improviso</strong>.
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            { Icon: Brain, t: "Diagnóstico completo", d: "Sessão de 90 min de deep dive na sua operação. Saímos com fluxo atual mapeado." },
            { Icon: FileText, t: "Hub no Notion", d: "Workspace estruturado: CRM, projetos, processos, conhecimento — tudo conectado." },
            { Icon: Star, t: "POPs e playbooks", d: "Procedimentos documentados em vídeo + texto. Equipe roda sem você." },
            { Icon: Zap, t: "Agentes de IA", d: "Automações inteligentes para tarefas repetitivas. Triagem, resposta, classificação." },
            { Icon: Users, t: "Onboarding da equipe", d: "Treinamento ao vivo + material de apoio. Adoção real, não só entrega." },
            { Icon: Check, t: "Suporte 2 semanas", d: "Acompanhamento próximo após go-live para ajustes finos e dúvidas." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="card" style={{ padding: 28 }}>
              <Icon className="w-5 h-5 mb-4" style={{ color: "#6D8FE8" }} />
              <h3>{t}</h3>
              <p style={{ color: "var(--text2)", marginTop: 8, fontSize: 14 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="container-focus section-padding" id="como-funciona">
        <p className="sec-label">Como funciona</p>
        <h2 style={{ maxWidth: 720, marginBottom: 40 }}>
          Do diagnóstico ao <strong>go-live</strong> em 4 passos.
        </h2>

        <div className="space-y-4 max-w-3xl">
          {[
            { n: "01", t: "Diagnóstico gratuito", time: "~30 min", d: "Conversa por WhatsApp ou call para entender seu cenário. Sem compromisso." },
            { n: "02", t: "Proposta e escopo", time: "24–48h", d: "Você recebe escopo detalhado, prazo e investimento. Tudo claro antes de começar." },
            { n: "03", t: "Implementação", time: "1–3 semanas", d: "Mapeamento, construção do hub, POPs e agentes. Você acompanha em tempo real." },
            { n: "04", t: "Onboarding e suporte", time: "2 semanas", d: "Treinamento da equipe, ajustes e acompanhamento próximo até estar 100% no ar." },
          ].map((s) => (
            <div key={s.n} className="card flex gap-6 items-start" style={{ padding: 28 }}>
              <p className="card-num" style={{ marginBottom: 0, minWidth: 32, fontSize: 14 }}>{s.n}</p>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3>{s.t}</h3>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text3)", letterSpacing: "0.06em" }}>· {s.time}</span>
                </div>
                <p style={{ color: "var(--text2)", marginTop: 6, fontSize: 14 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="container-focus section-padding">
        <div
          className="card text-center"
          style={{
            padding: 60, maxWidth: 720, margin: "0 auto",
            border: "2px solid rgba(59,130,246,0.45)",
            background: "linear-gradient(160deg, rgba(30,64,175,0.10) 0%, var(--bg2) 60%)",
          }}
        >
          <p className="sec-label" style={{ justifyContent: "center" }}>
            <span style={{ flex: 0, color: "#6D8FE8" }}>Investimento</span>
          </p>
          <p style={{ color: "var(--text2)", fontSize: 14, marginBottom: 8 }}>A partir de</p>
          <p style={{ fontSize: 56, fontWeight: 700, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1 }}>
            R$ 3.800
          </p>
          <p style={{ color: "var(--text3)", fontSize: 13, fontFamily: "var(--font-mono)", marginTop: 8, marginBottom: 32, letterSpacing: "0.04em" }}>
            ou R$ 180/hora
          </p>
          <div className="flex justify-center">
            <TalkToLuciano />
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="container-focus section-padding">
        <p className="sec-label">Quem já passou pelo processo</p>
        <h2 style={{ maxWidth: 720, marginBottom: 40 }}>
          Resultado de quem <strong>saiu do improviso</strong>.
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { q: "O Luciano mapeou processos que estavam só na minha cabeça. Hoje a operação roda sem eu precisar estar em todas as decisões.", n: "Bruno R.", r: "Sócio · Espaço Natividade" },
            { q: "Em 3 semanas saímos de planilhas e WhatsApp para um hub centralizado no Notion. A equipe adotou de cara.", n: "Marcela P.", r: "CEO · Agência Digital" },
            { q: "Os agentes de IA que ele implementou economizam pelo menos 10h por semana só na triagem de leads.", n: "Henrique L.", r: "Diretor · Consultoria" },
          ].map((t) => (
            <div key={t.n} className="card" style={{ padding: 28 }}>
              <div style={{ color: "#FBBF24", fontSize: 13, letterSpacing: 2, marginBottom: 14 }}>★★★★★</div>
              <p style={{ fontSize: 14, color: "rgba(235,235,235,0.78)", lineHeight: 1.65, fontWeight: 300 }}>"{t.q}"</p>
              <div className="mt-6">
                <p style={{ color: "var(--text)", fontSize: 13, fontWeight: 600 }}>{t.n}</p>
                <p style={{ color: "var(--text3)", fontSize: 12 }}>{t.r}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-focus section-padding">
        <p className="sec-label">Perguntas frequentes</p>
        <h2 style={{ marginBottom: 40 }}>FAQ</h2>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { q: "Como é a primeira conversa?", a: "Uma call ou conversa pelo WhatsApp de cerca de 30 minutos. Você me conta sua operação e seus desafios. Saio dessa conversa com uma proposta concreta ou te digo honestamente se Focus Custom não é para você." },
                { q: "Quanto tempo demora?", a: "Entre 1 e 3 semanas de implementação, mais 2 semanas de suporte e onboarding. Total: 3 a 5 semanas até estar 100% operando." },
                { q: "Preciso pagar mensalidade?", a: "Não. É pagamento único pelo projeto. Você fica com tudo: Notion, POPs, agentes — sem dependência minha depois." },
                { q: "E se eu já uso Notion?", a: "Ótimo. Avalio o que você tem, reaproveito o que faz sentido e reestruturo o que precisa. Sem reinventar a roda." },
                { q: "Atende fora de São Paulo?", a: "Sim. 100% remoto. Atendo empresas em todo o Brasil." },
              ].map((f, i) => (
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
          </div>

          {/* Sticky founder card */}
          <aside className="md:w-72 flex-shrink-0">
            <div className="md:sticky" style={{ top: 88 }}>
              <div
                className="card"
                style={{
                  padding: 24,
                  background: "linear-gradient(160deg, rgba(30,64,175,0.10) 0%, var(--bg2) 60%)",
                  borderColor: "rgba(59,130,246,0.30)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    style={{
                      width: 48, height: 48, borderRadius: "50%",
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      background: "rgba(30,64,175,0.18)",
                      border: "1px solid rgba(59,130,246,0.30)",
                      color: "#6D8FE8", fontSize: 14, fontWeight: 700,
                    }}
                  >
                    LS
                  </div>
                  <div>
                    <p style={{ color: "var(--text)", fontSize: 13, fontWeight: 600 }}>Luciano Santos</p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text3)", letterSpacing: "0.04em" }}>Fundador</p>
                  </div>
                </div>
                <p style={{ color: "var(--text2)", fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
                  Respondo pessoalmente em até 24h.
                </p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-accent w-full" style={{ marginBottom: 8 }}>
                  Falar no WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#como-funciona" className="btn-ghost w-full" style={{ display: "flex" }}>
                  Ver como funciona ↓
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container-focus section-padding">
        <div
          className="card text-center"
          style={{
            padding: "60px 32px",
            background: "linear-gradient(160deg, rgba(30,64,175,0.10) 0%, var(--bg2) 60%)",
            borderColor: "rgba(59,130,246,0.30)",
          }}
        >
          <p className="sec-label" style={{ justifyContent: "center" }}>
            <span style={{ flex: 0, color: "#6D8FE8" }}>Próximo passo</span>
          </p>
          <h2 style={{ maxWidth: 640, margin: "0 auto 16px" }}>
            Vamos transformar sua operação <strong>juntos</strong>?
          </h2>
          <p style={{ color: "var(--text2)", maxWidth: 560, margin: "0 auto 32px", fontSize: 15 }}>
            Diagnóstico gratuito de 30 minutos. Sem pitch, sem pressão — só uma análise honesta do seu cenário.
          </p>
          <div className="flex justify-center">
            <TalkToLuciano />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolucoesSobMedida;
