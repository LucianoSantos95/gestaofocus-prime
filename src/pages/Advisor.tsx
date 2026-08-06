import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdvisorLeadModal, { openAdvisorModal } from "@/components/advisor/AdvisorLeadModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const CTA_LABEL = "Quero minha sessão — R$497";

const Advisor = () => {
  useEffect(() => {
    trackEvent("advisor_page_view", { event_category: "advisor", page_path: "/advisor" });
  }, []);

  const cta = (location: string) => {
    trackEvent("advisor_cta_click", { event_category: "conversion", event_label: location });
    openAdvisorModal(location);
  };

  const entregaveis = [
    {
      n: "01",
      t: "Call de 1 hora, gravada",
      d: "Uma conversa focada no seu problema específico — não uma aula genérica. A gravação fica com você para rever quando quiser.",
    },
    {
      n: "02",
      t: "Documento em PDF",
      d: "O resumo do que a gente conversou, organizado por escrito. Você não depende de lembrar o que foi dito na call.",
    },
    {
      n: "03",
      t: "Playbook com os próximos passos",
      d: "O caminho escrito, na ordem certa, para você executar sozinho depois. É o que separa uma boa conversa de uma coisa que realmente sai do papel.",
    },
  ];

  const etapas = [
    {
      n: "Etapa 01",
      time: "2 minutos",
      t: "Você me conta a dor",
      d: "Formulário curto com nome, e-mail e o que está travando a sua operação hoje. Nenhum pagamento nessa etapa.",
    },
    {
      n: "Etapa 02",
      time: "Normalmente no mesmo dia",
      t: "Eu te respondo",
      d: "Leio o que você escreveu e te mando o link de pagamento junto com dois horários possíveis para a call.",
    },
    {
      n: "Etapa 03",
      time: "1 hora",
      t: "A sessão",
      d: "A gente entra fundo no seu cenário: o que você já paga, o que já tem montado, onde está o gargalo real e o que fazer a respeito.",
    },
    {
      n: "Etapa 04",
      time: "Até 2 dias úteis",
      t: "Entrega do material",
      d: "PDF com o resumo e o playbook escrito com os próximos passos chegam no seu e-mail.",
    },
  ];

  const paraQuem = [
    "Tem um negócio pequeno (1 a 15 pessoas) ou trabalha sozinho prestando serviço",
    "Já paga 2 ou 3 ferramentas e sente que usa uma fração do que elas fazem",
    "Sente que a operação está bagunçada, mas não consegue nomear exatamente o que falta",
    "Ainda não tem orçamento para um projeto fechado — e não quer contratar no escuro",
  ];

  const naoEhPraVoce = [
    {
      t: "Você já sabe exatamente o que quer construir",
      d: "Se o escopo já está claro na sua cabeça, pular direto para a Consultoria economiza seu tempo e seu dinheiro.",
    },
    {
      t: "Você quer que alguém execute por você",
      d: "Aqui você sai com o caminho. Quem percorre é você. Execução feita por mim é o outro serviço.",
    },
    {
      t: "Você procura acompanhamento contínuo",
      d: "É uma sessão única, com hora marcada e fim definido. Não é mentoria mensal nem retainer.",
    },
  ];

  const faqs = [
    {
      q: "Isso é uma consultoria completa?",
      a: "Não. É uma sessão única de uma hora, com entrega escrita no fim. A consultoria completa envolve mapear seus processos, construir o sistema e acompanhar a implementação — é outro serviço, com outro preço e outro prazo.",
    },
    {
      q: "Preciso usar alguma ferramenta específica?",
      a: "Não. A sessão é sobre as ferramentas que você já usa hoje, sejam elas quais forem — Notion, planilha, Trello, ClickUp, WhatsApp ou uma mistura de tudo isso. Não tem pré-requisito e você não precisa migrar para nada.",
    },
    {
      q: "E se eu não souber explicar direito o que eu preciso?",
      a: "Normal, e é justamente por isso que a sessão existe. A maioria chega sentindo que algo trava, sem saber onde. Colocar nome no problema já é metade do trabalho — essa parte é comigo.",
    },
    {
      q: "Isso vira um projeto depois?",
      a: "Só se fizer sentido para você. Não existe obrigação nenhuma de contratar mais nada. Muita gente sai da call e executa sozinha com o playbook, e está tudo certo — o material é seu.",
    },
    {
      q: "Como funciona o pagamento?",
      a: "Pagamento único de R$497, sem recorrência e sem cobrança depois. Você não paga no formulário: eu te mando o link junto com os horários, e a call só é marcada depois da confirmação.",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <SEOHead
        title="Advisor — Sessão de diagnóstico de 1 hora | Focus"
        description="Sessão única de diagnóstico para quem sente a operação bagunçada mas não sabe o que falta. Call de 1h gravada, PDF e playbook escrito. R$497, pagamento único."
        canonical="/advisor"
        type="product"
        keywords="sessão de diagnóstico, consultoria pontual, diagnóstico operacional, mentoria para pequeno negócio, consultoria avulsa"
        faqItems={faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />

      <AdvisorLeadModal />
      <Navigation />

      {/* HERO */}
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
            &lt;:ADVISOR&gt;
          </span>

          <h1
            className="hero-title anim-up-1 mx-auto"
            style={{ maxWidth: 1000, fontSize: "clamp(38px, 5.6vw, 70px)" }}
          >
            Você já paga as ferramentas. <strong>Só não sabe o que dá</strong> pra fazer com elas.
          </h1>

          <p className="hero-subtitle anim-up-2 mx-auto mt-8" style={{ maxWidth: 660 }}>
            Uma hora de conversa para achar o que está travando a sua operação — e sair com um
            plano escrito, antes de contratar alguém ou construir algo novo.
          </p>

          <div className="anim-up-3 mt-10 flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={() => cta("hero")}
              className="inline-flex items-center gap-2 focus-magnetic"
              style={{
                background: "#9DE89D",
                color: "#0a0a0a",
                padding: "14px 28px",
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              {CTA_LABEL} <ArrowUpRight className="w-4 h-4" />
            </button>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--text3)",
                letterSpacing: "0.08em",
              }}
            >
              SESSÃO ÚNICA · PAGAMENTO ÚNICO · SEM RECORRÊNCIA
            </p>
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <section
        className="snj-section container-focus"
        style={{ borderBottom: "1px solid var(--line)" }}
      >
        <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <div>
            <span className="snj-tag" style={{ marginBottom: 24, display: "block" }}>
              / O que é
            </span>
            <h2 className="snj-h2" style={{ marginBottom: 24 }}>
              Uma sessão única de <em>diagnóstico</em> — não um projeto, não uma mensalidade.
            </h2>
            <p style={{ color: "var(--text2)", fontSize: 16, lineHeight: 1.75, marginBottom: 20 }}>
              É para quem sente que a operação está bagunçada mas não sabe exatamente o que falta.
              Aquele momento antes de decidir se contrata alguém, se troca de ferramenta ou se
              constrói algo do zero.
            </p>
            <p style={{ color: "var(--text2)", fontSize: 15, lineHeight: 1.75 }}>
              Na maioria das vezes o que falta não é ferramenta nova. É alguém de fora enxergando o
              que você não consegue ver de dentro. Você sai com três coisas na mão.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {entregaveis.map((item, i) => (
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
                  <p
                    style={{
                      color: "var(--text)",
                      fontSize: 15,
                      fontWeight: 600,
                      marginBottom: 10,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.t}
                  </p>
                  <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.7 }}>{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section
        className="snj-section container-focus"
        style={{ borderBottom: "1px solid var(--line)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="snj-section__head">
            <span className="snj-tag">/ Como funciona</span>
            <h2 className="snj-h2">
              Do formulário ao <em>playbook na sua mão.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {etapas.map((step) => (
              <div
                key={step.n}
                style={{
                  background: "var(--bg2)",
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
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
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "var(--text)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {step.t}
                </h3>
                <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.7 }}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É + NÃO É PRA VOCÊ */}
      <section
        className="snj-section container-focus"
        style={{ borderBottom: "1px solid var(--line)" }}
      >
        <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <div>
            <span className="snj-tag" style={{ marginBottom: 24, display: "block" }}>
              / Para quem é
            </span>
            <h2 className="snj-h2" style={{ marginBottom: 32 }}>
              Serve pra você <em>se você</em>:
            </h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {paraQuem.map((item, i) => (
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

          <div>
            <span className="snj-tag" style={{ marginBottom: 24, display: "block" }}>
              / Não é pra você se
            </span>
            <h2 className="snj-h2" style={{ marginBottom: 28 }}>
              Prefiro dizer <em>antes</em> de você pagar.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {naoEhPraVoce.map((item) => (
                <div
                  key={item.t}
                  style={{
                    background: "var(--bg2)",
                    border: "1px solid var(--line)",
                    borderRadius: 12,
                    padding: "20px 24px",
                  }}
                >
                  <p
                    style={{
                      color: "var(--text)",
                      fontSize: 15,
                      fontWeight: 600,
                      marginBottom: 8,
                    }}
                  >
                    {item.t}
                  </p>
                  <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.7 }}>{item.d}</p>
                </div>
              ))}
            </div>
            <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.7, marginTop: 20 }}>
              Nesses casos, o caminho é a{" "}
              <Link
                to="/solucoes-sob-medida"
                style={{ color: "#9DE89D", textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                Consultoria
              </Link>{" "}
              — onde eu mapeio os processos e construo o sistema junto com você.
            </p>
          </div>
        </div>
      </section>

      {/* PREÇO */}
      <section
        className="snj-section container-focus"
        style={{ borderBottom: "1px solid var(--line)" }}
      >
        <div
          className="max-w-3xl mx-auto"
          style={{
            background: "var(--bg2)",
            border: "1px solid rgba(157,232,157,0.45)",
            borderRadius: 16,
            padding: "40px 36px",
          }}
        >
          <span className="snj-tag" style={{ marginBottom: 20, display: "block" }}>
            / Preço
          </span>
          <div className="flex items-baseline gap-3" style={{ marginBottom: 6 }}>
            <span
              style={{
                fontSize: "clamp(44px, 6vw, 56px)",
                fontWeight: 600,
                letterSpacing: "-0.04em",
                color: "var(--text)",
                lineHeight: 1,
              }}
            >
              R$497
            </span>
            <span style={{ color: "var(--text2)", fontSize: 15 }}>pagamento único</span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--text3)",
              letterSpacing: "0.08em",
              marginBottom: 26,
            }}
          >
            SEM RECORRÊNCIA · SEM COBRANÇA DEPOIS
          </p>

          <p style={{ color: "var(--text2)", fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}>
            É o degrau anterior à{" "}
            <Link
              to="/solucoes-sob-medida"
              style={{ color: "#9DE89D", textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              Consultoria
            </Link>
            , não uma versão reduzida dela. Aqui você descobre o que precisa. Lá, a gente constrói.
          </p>

          <button
            type="button"
            onClick={() => cta("pricing")}
            className="inline-flex items-center justify-center gap-2 focus-magnetic"
            style={{
              background: "#9DE89D",
              color: "#0a0a0a",
              padding: "14px 28px",
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              width: "100%",
              maxWidth: 320,
            }}
          >
            {CTA_LABEL} <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="snj-section container-focus"
        style={{ borderBottom: "1px solid var(--line)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="snj-section__head">
            <span className="snj-tag">/ Perguntas</span>
            <h2 className="snj-h2">
              Antes que você <em>pergunte.</em>
            </h2>
          </div>
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                style={{ borderBottom: "1px solid var(--line)" }}
              >
                <AccordionTrigger
                  style={{
                    color: "var(--text)",
                    fontSize: 16,
                    fontWeight: 500,
                    textAlign: "left",
                    padding: "20px 0",
                  }}
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent
                  style={{
                    color: "var(--text2)",
                    fontSize: 15,
                    lineHeight: 1.75,
                    paddingBottom: 20,
                  }}
                >
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
            &lt;:SESSÃO ADVISOR&gt;
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
            Quer parar de adivinhar o que fazer sozinho?
          </h2>
          <p style={{ color: "var(--text2)", fontSize: 15, marginBottom: 32 }}>
            Uma hora de conversa costuma economizar semanas de tentativa e erro.
          </p>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => cta("final")}
              className="inline-flex items-center gap-2 focus-magnetic"
              style={{
                background: "#9DE89D",
                color: "#0a0a0a",
                padding: "14px 28px",
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              {CTA_LABEL} <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Advisor;
