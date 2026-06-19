import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TalkToLuciano, { WA_LINK } from "@/components/TalkToLuciano";
import { ArrowRight } from "lucide-react";
import founderHeroAsset from "@/assets/about-founder-luciano.jpg.asset.json";
const founderHero = founderHeroAsset.url;

const AboutFocus = () => {
  const numbers = [
    { v: "50+", l: "PROJETOS ENTREGUES" },
    { v: "8 anos", l: "DE OPERAÇÕES B2B" },
    { v: "1", l: "FUNDADOR · 1 PROMESSA" },
    { v: "R$180", l: "/HORA · TRANSPARENTE" },
  ];

  const principles = [
    {
      n: "01",
      t: "Operação acima de software",
      d: "Antes de implantar qualquer ferramenta, eu mapeio o processo. Software ruim em cima de operação ruim só amplifica o caos.",
    },
    {
      n: "02",
      t: "Documentação como ativo",
      d: "POPs, playbooks e fluxos viram patrimônio da empresa. Se um funcionário-chave sai, o conhecimento fica.",
    },
    {
      n: "03",
      t: "IA como alavanca, não enfeite",
      d: "Agentes de IA aplicados em pontos que removem trabalho repetitivo de verdade — triagem, resposta, classificação, conciliação.",
    },
    {
      n: "04",
      t: "Cobrança por hora, sem teatro",
      d: "Você paga apenas pelas horas usadas. Sem pacote inflado, sem retainer obrigatório, sem fee por entregar deck.",
    },
  ];

  const timeline = [
    { y: "2018", t: "Início em consultoria de processos para PMEs de serviço." },
    { y: "2021", t: "Certificação Notion e foco em hubs operacionais." },
    { y: "2024", t: "Integração de agentes de IA em fluxos de PMEs e agências." },
    { y: "2026", t: "Lançamento do Hub Empresarial (SaaS) e estrutura Focus Custom." },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <SEOHead
        title="Sobre · Focus — A consultoria por trás de operações que rodam sem o dono"
        description="Focus é a consultoria de operações com IA de Luciano Santos. 50+ projetos entregues para agências, consultorias e PMEs de serviço."
        canonical="/sobre"
        keywords="sobre focus, luciano focus, consultoria operações IA, notion partner brasil"
      />

      <Navigation />

      {/* HERO — big portrait background */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "90vh", borderBottom: "1px solid var(--line)" }}
      >
        <img
          src={founderHero}
          alt="Luciano · Fundador da Focus"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "auto",
            maxWidth: "75%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center top",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(6,6,8,0.55) 0%, rgba(6,6,8,0.30) 35%, rgba(6,6,8,0.90) 100%)",
          }}
        />

        <div
          className="container-focus relative z-10 flex flex-col items-center justify-end text-center"
          style={{ minHeight: "90vh", padding: "180px 24px 80px" }}
        >
          <span
            className="anim-up inline-block mb-6"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#9DE89D",
              border: "1px solid rgba(157,232,157,0.30)",
              borderRadius: 4,
              padding: "5px 12px",
              letterSpacing: "0.10em",
              background: "rgba(6,6,8,0.5)",
            }}
          >
            &lt;:SOBRE&gt;
          </span>

          <h1
            className="hero-title anim-up-1"
            style={{
              maxWidth: 1000,
              fontSize: "clamp(40px, 6vw, 76px)",
              color: "var(--text)",
            }}
          >
            A mente por trás das <strong>operações que rodam sem o dono</strong>.
          </h1>

          <p
            className="hero-subtitle anim-up-2 mx-auto mt-8"
            style={{ maxWidth: 640, color: "rgba(230,230,232,0.85)" }}
          >
            Focus é uma consultoria de um só fundador. Mapeio processos, construo hubs no Notion e
            implanto agentes de IA para agências, consultorias e PMEs de serviço.
          </p>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="container-focus" style={{ padding: "80px 24px 40px" }}>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
          style={{
            border: "1px solid var(--line)",
            borderRadius: 16,
            padding: "40px 32px",
            background: "var(--bg2)",
          }}
        >
          {numbers.map((n) => (
            <div key={n.l} className="text-center md:text-left">
              <p
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                  color: "var(--text)",
                  lineHeight: 1,
                }}
              >
                {n.v}
              </p>
              <p
                style={{
                  fontSize: 10,
                  color: "var(--text3)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.10em",
                  marginTop: 12,
                }}
              >
                {n.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="container-focus" style={{ padding: "80px 24px" }}>
        <div className="max-w-3xl mx-auto">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--text3)",
              border: "1px solid var(--line2)",
              borderRadius: 4,
              padding: "5px 12px",
              letterSpacing: "0.10em",
            }}
          >
            &lt;:MANIFESTO&gt;
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.15,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginTop: 24,
            }}
          >
            "A maioria das PMEs de serviço{" "}
            <strong>não tem problema de software.</strong> Tem problema de operação."
          </h2>
          <p style={{ color: "var(--text2)", fontSize: 16, lineHeight: 1.7, marginTop: 28 }}>
            Trabalho com um único princípio: processo claro primeiro, ferramenta depois. Cada hora
            cobrada é uma hora aplicada — sem deck comercial, sem proposta de 30 páginas, sem
            kickoff de uma semana só para começar a entregar.
          </p>
          <p style={{ color: "var(--text2)", fontSize: 16, lineHeight: 1.7, marginTop: 18 }}>
            O resultado é uma operação que para de depender do dono — e um time que finalmente sabe
            o que fazer hoje sem precisar perguntar.
          </p>
        </div>
      </section>

      {/* PRINCIPLES — Sanjaya cards */}
      <section className="container-focus" style={{ padding: "40px 24px 80px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span
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
              &lt;:PRINCÍPIOS&gt;
            </span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.1,
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginTop: 20,
              }}
            >
              Como eu <strong>opero por dentro</strong>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {principles.map((p) => (
              <article
                key={p.n}
                style={{
                  background: "var(--bg2)",
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  padding: "32px 28px",
                  transition: "border-color 0.3s ease",
                }}
                className="hover:border-[color:var(--line2)]"
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--text3)",
                    letterSpacing: "0.10em",
                    marginBottom: 14,
                  }}
                >
                  {p.n}
                </p>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: "var(--text)",
                    marginBottom: 10,
                  }}
                >
                  {p.t}
                </h3>
                <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.6 }}>{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-focus" style={{ padding: "40px 24px 80px" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--text3)",
                border: "1px solid var(--line2)",
                borderRadius: 4,
                padding: "5px 12px",
                letterSpacing: "0.10em",
              }}
            >
              &lt;:TIMELINE&gt;
            </span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.1,
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginTop: 20,
              }}
            >
              De consultor solo a <strong>plataforma própria</strong>.
            </h2>
          </div>

          <div className="flex flex-col">
            {timeline.map((t, i) => (
              <div
                key={t.y}
                className="grid grid-cols-[100px_1fr] gap-6"
                style={{
                  padding: "24px 0",
                  borderTop: i === 0 ? "1px solid var(--line)" : "none",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    color: "#9DE89D",
                    letterSpacing: "0.08em",
                  }}
                >
                  {t.y}
                </p>
                <p style={{ color: "var(--text)", fontSize: 16, lineHeight: 1.5 }}>{t.t}</p>
              </div>
            ))}
          </div>
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
            &lt;:CONVERSA DIRETA&gt;
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
            Quer entender se faz sentido para você?
          </h2>
          <p style={{ color: "var(--text2)", fontSize: 15, marginBottom: 32 }}>
            ~30 min por WhatsApp. Sem deck, sem proposta inflada, sem pressão.
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

export default AboutFocus;
