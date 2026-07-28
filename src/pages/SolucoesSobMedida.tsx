import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { WA_LINK } from "@/components/TalkToLuciano";
import { ArrowRight, ArrowUpRight } from "lucide-react";


type Project = {
  year: string;
  category: string;
  brand: string;
  title: string;
  description: string;
  image?: string;
  imageContain?: boolean;
  ctaLabel: string;
  ctaUrl: string;
  metrics: { value: string; label: string }[];
};

const projects: Project[] = [
  {
    year: "2026",
    category: "Produto · SaaS",
    brand: "Hub Empresarial",
    title: "Um hub pra substituir suas 6 ferramentas de gestão",
    description:
      "Finanças, clientes, projetos e relatórios num lugar só — conectado ao seu Google, WhatsApp e ao ChatGPT. Construído na Lovable com plano gratuito para começar.",
    image: "/case-hub.png",
    ctaLabel: "Testar grátis",
    ctaUrl: "https://app.focusinteligente.com.br",
    metrics: [
      { value: "100+", label: "OPERAÇÕES RODANDO" },
      { value: "R$ 55", label: "A PARTIR DE /MÊS" },
    ],
  },
  {
    year: "2026",
    category: "Produto · IA",
    brand: "Agente de Diagnóstico",
    title: "Descubra qual Agente de IA sua empresa precisa em 2 minutos",
    description:
      "6 perguntas. Diagnóstico técnico gratuito. O agente mapeia seus gargalos e indica a automação ideal para Atendimento, Vendas, Operação ou Financeiro — sem cadastro.",
    image: "/case-indica.png",
    ctaLabel: "Iniciar diagnóstico",
    ctaUrl: WA_LINK,
    metrics: [
      { value: "2 min", label: "TEMPO ESTIMADO" },
      { value: "4", label: "ÁREAS DIAGNOSTICADAS" },
    ],
  },
];

const SolucoesSobMedida = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <SEOHead
        title="Focus Custom — Consultoria de Operações com IA | Focus"
        description="Cases reais de consultoria de operações com IA e Lovable Partner para PMEs, agências e consultorias. Projetos fechados, escopo e preço definidos antes de começar."
        canonical="/solucoes-sob-medida"
        keywords="consultoria de operações, lovable partner, desenvolvimento sob medida, agentes de IA, mapeamento de processos, POPs, playbooks"
      />

      <Navigation />

      {/* HERO — Sanjaya /projects */}
      <section
        className="relative overflow-hidden"
        style={{ padding: "180px 24px 80px", borderBottom: "1px solid var(--line)" }}
      >
        <div className="container-focus relative z-10 text-center">
          <span
            className="anim-up inline-block mb-8"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#9DE89D",
              border: "1px solid rgba(157,232,157,0.30)",
              borderRadius: 4,
              padding: "5px 12px",
              letterSpacing: "0.10em",
            }}
          >
            &lt;:CONSULTORIA&gt;
          </span>

          <h1
            className="hero-title anim-up-1 mx-auto"
            style={{ maxWidth: 1000, fontSize: "clamp(40px, 6vw, 76px)" }}
          >
            A consultoria <strong>por trás de operações</strong> que rodam sem o dono.
          </h1>

          <p className="hero-subtitle anim-up-2 mx-auto mt-8" style={{ maxWidth: 680 }}>
            Diagnóstico, mapeamento e arquitetura de processos com IA — para agências, consultorias
            e PMEs que decidiram parar de operar no improviso.
          </p>

          <div className="anim-up-3 mt-10 flex flex-col items-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
              style={{
                background: "var(--text)",
                color: "var(--bg)",
                padding: "14px 28px",
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Agendar diagnóstico gratuito <ArrowUpRight className="w-4 h-4" />
            </a>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--text3)",
                letterSpacing: "0.08em",
              }}
            >
              VALOR SOB CONSULTA · ESCOPO E PREÇO FECHADOS ANTES DE COMEÇAR
            </p>
          </div>
        </div>
      </section>

      {/* O QUE É — explicação do serviço */}
      <section className="snj-section container-focus" style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <div>
            <span className="snj-tag" style={{ marginBottom: 24, display: "block" }}>/ O que é</span>
            <h2 className="snj-h2" style={{ marginBottom: 24 }}>
              Consultoria de processos e{" "}
              <em>implementação de sistemas</em> para empresas que operam no caos.
            </h2>
            <p style={{ color: "var(--text2)", fontSize: 16, lineHeight: 1.75, marginBottom: 20 }}>
              Onde tudo depende da memória do dono e não existe nenhum processo documentado.
            </p>
            <p style={{ color: "var(--text2)", fontSize: 15, lineHeight: 1.75 }}>
              O serviço entrega três coisas juntas, não separadas.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {[
              {
                n: "01",
                t: "Mapeamento e documentação de processos",
                d: "Diagnóstico completo dos fluxos operacionais: vendas, financeiro, atendimento, operação, compras. Tudo que hoje só existe na cabeça do dono vira documento escrito, com passo a passo, exceções e checklist.",
              },
              {
                n: "02",
                t: "Construção da solução na Lovable",
                d: "Como Lovable Partner Oficial, desenvolvemos um sistema sob medida para a sua operação — código próprio, hospedado, integrado e pronto para escalar. Cada módulo é desenhado em cima do processo já mapeado, não o contrário.",
              },
              {
                n: "03",
                t: "Integração de agentes de IA nos processos",
                d: "Onde fizer sentido, agentes de IA entram para automatizar tarefas repetitivas: resumo de reuniões, geração de propostas, qualificação de leads, follow-up. Não é IA por modismo — é IA aplicada ao processo já mapeado.",
              },
            ].map((item, i) => (
              <div
                key={item.n}
                style={{
                  padding: "28px 0",
                  borderTop: i === 0 ? "1px solid var(--line)" : "none",
                  borderBottom: "1px solid var(--line)",
                  display: "grid",
                  gridTemplateColumns: "48px 1fr",
                  gap: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--text3)",
                    letterSpacing: "0.08em",
                    paddingTop: 4,
                  }}
                >
                  {item.n}
                </span>
                <div>
                  <p style={{ color: "var(--text)", fontSize: 15, fontWeight: 600, marginBottom: 10, letterSpacing: "-0.01em" }}>
                    {item.t}
                  </p>
                  <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.7 }}>
                    {item.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA — 4 etapas */}
      <section className="snj-section container-focus" style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="snj-section__head">
            <span className="snj-tag">/ Como funciona</span>
            <h2 className="snj-h2">Do diagnóstico à <em>operação rodando.</em></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                n: "Etapa 01",
                t: "Reunião de diagnóstico",
                time: "Gratuita · 45–60 min",
                d: "Conversa para entender a operação atual, identificar as maiores dores e mapear o que já existe (ou não existe) de processo.",
              },
              {
                n: "Etapa 02",
                t: "Proposta personalizada",
                time: "24–48h após o diagnóstico",
                d: "Orçamento por projeto fechado, com escopo, entregáveis e prazo definidos antes de começar. Pagamento 50% na assinatura, 50% na entrega.",
              },
              {
                n: "Etapa 03",
                t: "Implementação",
                time: "1–3 semanas",
                d: "Mapeamento de fluxos, criação de POPs e playbooks, construção da solução na Lovable, integração de agentes de IA, treinamento da equipe.",
              },
              {
                n: "Etapa 04",
                t: "Suporte pós-entrega",
                time: "2 semanas incluídas",
                d: "Acompanhamento para garantir que a equipe está usando o sistema corretamente e ajustar o que for necessário.",
              },
            ].map((step) => (
              <div
                key={step.n}
                style={{
                  background: "var(--bg2)",
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "var(--text3)",
                      letterSpacing: "0.10em",
                      textTransform: "uppercase",
                    }}
                  >
                    {step.n}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "#9DE89D",
                      border: "1px solid rgba(157,232,157,0.25)",
                      borderRadius: 4,
                      padding: "3px 8px",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {step.time}
                  </span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.02em" }}>
                  {step.t}
                </h3>
                <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.7 }}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É + DIFERENCIAL */}
      <section className="snj-section container-focus" style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Para quem é */}
          <div>
            <span className="snj-tag" style={{ marginBottom: 24, display: "block" }}>/ Para quem é</span>
            <h2 className="snj-h2" style={{ marginBottom: 32 }}>
              Donos de PME, agências, consultorias e{" "}
              <em>espaços de serviço</em> que:
            </h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                "Têm processos só na cabeça, sem documentação",
                "Já têm equipe mas não conseguem delegar com segurança",
                "Sentem que a empresa não funciona sem eles presentes",
                "Têm operação real rodando, mas crescendo de forma desorganizada",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    padding: "18px 0",
                    borderBottom: "1px solid var(--line)",
                    color: "var(--text2)",
                    fontSize: 15,
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "var(--text3)",
                      letterSpacing: "0.06em",
                      paddingTop: 4,
                      flexShrink: 0,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Diferencial */}
          <div>
            <span className="snj-tag" style={{ marginBottom: 24, display: "block" }}>/ Diferencial</span>
            <h2 className="snj-h2" style={{ marginBottom: 32 }}>
              A arquitetura proposta não é{" "}
              <em>teórica</em>.
            </h2>
            <p style={{ color: "var(--text2)", fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}>
              Quem entrega essa consultoria é o mesmo founder que construiu o Hub Empresarial —
              um SaaS de gestão usado por mais de 100 empresas.
            </p>
            <p style={{ color: "var(--text2)", fontSize: 15, lineHeight: 1.75, marginBottom: 36 }}>
              Isso significa que cada recomendação é testada na prática, todos os dias, no
              próprio produto. Não é consultoria de quadro branco.
            </p>
            <div
              style={{
                background: "var(--bg2)",
                border: "1px solid var(--line)",
                borderRadius: 12,
                padding: "24px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "#9DE89D",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Caso em andamento · Jun 2026
              </span>
              <p style={{ color: "var(--text)", fontSize: 15, fontWeight: 600 }}>
                Espaço Natividade
              </p>
              <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.7 }}>
                Espaço de bem-estar e eventos. Diagnóstico realizado, proposta de reestruturação
                de processos + sistema sob medida na Lovable em fase de aprovação. Inclui fluxo de
                eventos, parcerias, financeiro e onboarding de equipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS LIST */}
      <section className="container-focus" style={{ padding: "80px 24px 60px" }}>
        <div className="flex flex-col gap-6 max-w-6xl mx-auto">
          {projects.map((p, idx) => (
            <article
              key={idx}
              className="snj-project-card group"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1.05fr) minmax(0,1fr)",
                gap: 0,
                background: "var(--bg2)",
                border: "1px solid var(--line)",
                borderRadius: 16,
                overflow: "hidden",
                transition: "border-color 0.3s ease, transform 0.3s ease",
              }}
            >
              {/* Image */}
              <div
                style={{
                  background: "#0b0b0e",
                  minHeight: 360,
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {p.textOverlay ? (
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 42,
                      fontWeight: 600,
                      color: "#1E40AF",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.textOverlay}
                  </span>
                ) : (
                  <img
                    src={p.image}
                    alt={p.brand}
                    loading="lazy"
                    style={{
                      width: p.imageContain ? "55%" : "100%",
                      height: p.imageContain ? "auto" : "100%",
                      maxHeight: p.imageContain ? "60%" : undefined,
                      objectFit: p.imageContain ? "contain" : "cover",
                      display: "block",
                      transition: "transform 0.6s ease",
                    }}
                    className="group-hover:scale-[1.03]"
                  />
                )}
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "32px 36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                <div
                  className="flex items-center gap-3"
                  style={{
                    paddingBottom: 16,
                    borderBottom: "1px solid var(--line)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--text3)",
                    letterSpacing: "0.10em",
                  }}
                >
                  <span>{p.year}</span>
                  <span style={{ opacity: 0.4 }}>•</span>
                  <span style={{ textTransform: "uppercase" }}>{p.category}</span>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-display, var(--font-sans))",
                    fontSize: 22,
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    color: "var(--text2)",
                  }}
                >
                  {p.brand}
                </p>

                <h2
                  style={{
                    fontSize: "clamp(22px, 2.4vw, 30px)",
                    lineHeight: 1.15,
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "var(--text)",
                  }}
                >
                  {p.title}
                </h2>

                <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.6 }}>
                  {p.description}
                </p>

                <a
                  href={p.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid var(--line2)",
                    color: "var(--text)",
                    padding: "10px 18px",
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 500,
                    transition: "background 0.2s ease",
                    textDecoration: "none",
                  }}
                >
                  {p.ctaLabel} <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <div
                  className="grid grid-cols-2 gap-6 mt-auto pt-6"
                  style={{ borderTop: "1px solid var(--line)" }}
                >
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <p
                        style={{
                          fontSize: 40,
                          fontWeight: 600,
                          letterSpacing: "-0.04em",
                          color: "var(--text)",
                          lineHeight: 1,
                        }}
                      >
                        {m.value}
                      </p>
                      <p
                        style={{
                          fontSize: 10,
                          color: "var(--text3)",
                          fontFamily: "var(--font-mono)",
                          letterSpacing: "0.10em",
                          marginTop: 10,
                        }}
                      >
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container-focus" style={{ padding: "60px 24px 120px" }}>
        <div
          className="text-center mx-auto"
          style={{
            maxWidth: 720,
            border: "1px solid var(--line)",
            borderRadius: 16,
            padding: "60px 32px",
            background: "var(--bg2)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--text3)",
              letterSpacing: "0.10em",
              marginBottom: 18,
            }}
          >
            &lt;:DIAGNÓSTICO GRATUITO&gt;
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.1,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Quer o seu próximo case aqui?
          </h2>
          <p style={{ color: "var(--text2)", fontSize: 15, marginBottom: 32 }}>
            Conversa de ~30 min por WhatsApp para entender seu cenário. Sem compromisso, sem deck
            comercial.
          </p>
          <div className="flex justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
              style={{
                background: "var(--text)",
                color: "var(--bg)",
                padding: "14px 28px",
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Agendar diagnóstico gratuito <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />

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

export default SolucoesSobMedida;
