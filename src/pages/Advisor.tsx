import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import AdvisorLeadModal, { openAdvisorModal } from "@/components/advisor/AdvisorLeadModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight, Video, FileText, Map } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const PRICE_LABEL = "Quero minha sessão — R$497";

const Advisor = () => {
  const offerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    trackEvent("advisor_page_view", {
      event_category: "advisor",
      page_path: "/advisor",
    });
  }, []);

  const cta = (location: string) => {
    trackEvent("advisor_cta_click", { event_category: "conversion", event_label: location });
    openAdvisorModal(location);
  };

  const included = [
    {
      icon: Video,
      title: "Call de 1 hora, gravada",
      desc: "Focada no seu problema específico. A gravação fica com você pra rever quando quiser.",
    },
    {
      icon: FileText,
      title: "Documento em PDF",
      desc: "Tudo o que foi conversado, organizado por escrito. Sem depender da sua memória.",
    },
    {
      icon: Map,
      title: "Playbook com os próximos passos",
      desc: "O caminho escrito pra você seguir sozinho depois — na ordem certa, sem depender de mim.",
    },
  ];

  const faqs = [
    {
      q: "Isso é diferente do template que eu baixei?",
      a: "Sim. O template é gratuito e você usa sozinho, do seu jeito. O Advisor é uma conversa comigo, sobre o seu caso específico — o que você já tem, o que está travando e o que fazer a seguir.",
    },
    {
      q: "Preciso ter o Hub Empresarial pra fazer isso?",
      a: "Não. A sessão é sobre qualquer ferramenta que você já usa hoje, não só as da Focus. Se você trabalha com Notion, planilha, Trello, ClickUp ou uma mistura de tudo isso, serve igual.",
    },
    {
      q: "E se eu não souber exatamente o que preciso?",
      a: "Normal, é justamente pra isso que a sessão existe. A maioria chega sem saber nomear o problema direito — sente que algo trava, mas não sabe onde. Descobrir isso é metade do trabalho.",
    },
    {
      q: "Isso vira um projeto depois?",
      a: "Só se fizer sentido pra você. Não tem obrigação nenhuma de contratar mais nada depois. Muita gente sai da call e executa sozinha com o playbook — e tudo bem.",
    },
  ];

  return (
    <div style={{ background: "var(--bg)" }}>
      <SEOHead
        title="Advisor — Sessão de diagnóstico de 1 hora | Focus"
        description="Uma conversa de uma hora pra enxergar o que já está ao seu alcance nas ferramentas que você paga. Call gravada, PDF e playbook escrito. R$497, pagamento único."
        canonical="/advisor"
        type="product"
        keywords="consultoria pontual, sessão de diagnóstico, mentoria operacional, diagnóstico de processos, consultoria para pequeno negócio"
        faqItems={faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />

      <AdvisorLeadModal />

      {/* HERO */}
      <section className="container-focus" style={{ padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: 760 }}>
          <span className="snj-tag" style={{ marginBottom: 22, display: "block" }}>
            / Advisor
          </span>
          <h1
            style={{
              fontSize: "clamp(30px, 5.2vw, 52px)",
              lineHeight: 1.12,
              fontWeight: 600,
              letterSpacing: "-0.025em",
              color: "var(--text)",
              marginBottom: 22,
            }}
          >
            Você baixou o template. Agora quer saber{" "}
            <em style={{ color: "#9DE89D", fontStyle: "italic" }}>
              o que mais dá pra fazer com ele?
            </em>
          </h1>
          <p
            style={{
              color: "var(--text2)",
              fontSize: "clamp(16px, 2.2vw, 19px)",
              lineHeight: 1.65,
              maxWidth: 620,
              marginBottom: 32,
            }}
          >
            Uma conversa de uma hora pra você enxergar o que já está ao seu alcance — antes de
            contratar ou construir algo novo.
          </p>

          <button
            onClick={() => cta("hero")}
            className="inline-flex items-center justify-center gap-2"
            style={{
              background: "#9DE89D",
              color: "#0a0a0a",
              padding: "15px 28px",
              borderRadius: 999,
              fontSize: 16,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              width: "100%",
              maxWidth: 340,
            }}
          >
            {PRICE_LABEL} <ArrowUpRight className="w-4 h-4" />
          </button>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--text3)",
              letterSpacing: "0.08em",
              marginTop: 16,
            }}
          >
            PAGAMENTO ÚNICO · SEM RECORRÊNCIA
          </p>
        </div>
      </section>

      {/* O PROBLEMA */}
      <section
        className="container-focus"
        style={{ padding: "56px 24px", borderTop: "1px solid var(--line)" }}
      >
        <div style={{ maxWidth: 700 }}>
          <span className="snj-tag" style={{ marginBottom: 22, display: "block" }}>
            / O que costuma acontecer
          </span>
          <p
            style={{
              color: "var(--text)",
              fontSize: "clamp(18px, 2.6vw, 22px)",
              lineHeight: 1.6,
              marginBottom: 24,
              letterSpacing: "-0.01em",
            }}
          >
            Você sente o gargalo. Sabe que tem algo bagunçado na operação. Mas entre resolver isso
            e tocar o dia a dia, sobra pouco tempo pra sentar e estudar cada ferramenta que você já
            paga.
          </p>
          <p style={{ color: "var(--text2)", fontSize: 16, lineHeight: 1.75 }}>
            A saída mais fácil parece ser contratar alguém ou construir algo novo. Só que, na
            maioria das vezes, o que falta não é ferramenta nova — é alguém de fora que já enxerga
            o que você não consegue ver de dentro.
          </p>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUSO */}
      <section
        ref={offerRef}
        className="container-focus"
        style={{ padding: "56px 24px", borderTop: "1px solid var(--line)" }}
      >
        <span className="snj-tag" style={{ marginBottom: 22, display: "block" }}>
          / O que você leva
        </span>

        <div className="grid md:grid-cols-3 gap-4" style={{ marginBottom: 28 }}>
          {included.map((item) => (
            <div
              key={item.title}
              style={{
                background: "var(--bg2)",
                border: "1px solid var(--line)",
                borderRadius: 14,
                padding: 26,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <item.icon className="w-5 h-5" style={{ color: "#9DE89D" }} />
              <p style={{ color: "var(--text)", fontSize: 16, fontWeight: 600, lineHeight: 1.35 }}>
                {item.title}
              </p>
              <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <p
          style={{
            color: "var(--text2)",
            fontSize: 16,
            lineHeight: 1.7,
            maxWidth: 620,
          }}
        >
          Você sai com direção falada e direção escrita. Nada além disso — sem letra miúda, sem
          venda escondida no meio.
        </p>
      </section>

      {/* PREÇO */}
      <section
        className="container-focus"
        style={{ padding: "56px 24px", borderTop: "1px solid var(--line)" }}
      >
        <div
          className="max-w-2xl"
          style={{
            background: "var(--bg2)",
            border: "1px solid rgba(157,232,157,0.45)",
            borderRadius: 16,
            padding: "36px 32px",
          }}
        >
          <div className="flex items-baseline gap-3" style={{ marginBottom: 6 }}>
            <span
              style={{
                fontSize: 52,
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
            SEM RECORRÊNCIA · SEM MENSALIDADE DEPOIS
          </p>

          <p style={{ color: "var(--text2)", fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>
            Não é o mesmo serviço da{" "}
            <Link
              to="/solucoes-sob-medida"
              style={{ color: "#9DE89D", textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              Consultoria
            </Link>
            . É o passo antes dele — pra quem ainda está entendendo o que precisa, não pra quem já
            sabe e quer o projeto inteiro construído.
          </p>

          <button
            onClick={() => cta("pricing")}
            className="inline-flex items-center justify-center gap-2"
            style={{
              background: "#9DE89D",
              color: "#0a0a0a",
              padding: "15px 28px",
              borderRadius: 999,
              fontSize: 16,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              width: "100%",
              maxWidth: 340,
            }}
          >
            {PRICE_LABEL} <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="container-focus"
        style={{ padding: "56px 24px", borderTop: "1px solid var(--line)" }}
      >
        <div style={{ maxWidth: 720 }}>
          <span className="snj-tag" style={{ marginBottom: 22, display: "block" }}>
            / Perguntas
          </span>
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
      <section
        className="container-focus"
        style={{ padding: "64px 24px 88px", borderTop: "1px solid var(--line)" }}
      >
        <div style={{ maxWidth: 640 }}>
          <h2
            className="snj-h2"
            style={{ marginBottom: 20 }}
          >
            Quer parar de adivinhar{" "}
            <em style={{ color: "#9DE89D", fontStyle: "italic" }}>o que fazer sozinho?</em>
          </h2>
          <p style={{ color: "var(--text2)", fontSize: 16, lineHeight: 1.7, marginBottom: 30 }}>
            Uma hora de conversa costuma economizar semanas de tentativa e erro. E se depois disso
            você quiser o projeto inteiro construído, a{" "}
            <Link
              to="/solucoes-sob-medida"
              style={{ color: "var(--text)", textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              Consultoria
            </Link>{" "}
            continua aqui.
          </p>
          <button
            onClick={() => cta("final")}
            className="inline-flex items-center justify-center gap-2"
            style={{
              background: "#9DE89D",
              color: "#0a0a0a",
              padding: "15px 28px",
              borderRadius: 999,
              fontSize: 16,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              width: "100%",
              maxWidth: 340,
            }}
          >
            {PRICE_LABEL} <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Advisor;
