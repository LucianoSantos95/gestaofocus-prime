import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ArrowRight } from "lucide-react";

const AboutFocus = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <SEOHead
        title="Sobre a Focus | Gestão para Agências e Consultorias"
        description="Especialistas em gestão inteligente para agências, consultorias e prestadores de serviço. Sistemas sob medida e plataforma pronta para usar."
        canonical="/sobre-focus"
        keywords="gestão para agências, consultoria gestão empresarial, sistemas para prestadores de serviço"
      />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ padding: "140px 24px 80px" }}>
        <div className="hero-grid" />
        <span className="corner corner-tl" />
        <span className="corner corner-tr" />
        <span className="corner corner-bl" />
        <span className="corner corner-br" />

        <div className="container-focus relative z-10 text-center">
          <p className="hero-eyebrow anim-up" style={{ justifyContent: "center" }}>
            Quem está por trás
          </p>
          <h1 className="hero-title anim-up-1 mx-auto" style={{ maxWidth: 880, fontSize: "clamp(40px, 5.5vw, 72px)" }}>
            <em>Especialistas</em> em gestão inteligente para <strong>quem presta serviço</strong>.
          </h1>
          <p className="hero-subtitle anim-up-2 mx-auto mt-6" style={{ maxWidth: 600 }}>
            Sistemas sob medida e plataforma pronta para usar — para agências, consultorias e prestadores de serviço.
          </p>
        </div>
      </section>

      {/* BIO GRID */}
      <section className="container-focus section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar com anéis */}
          <div className="relative flex items-center justify-center" style={{ minHeight: 320 }}>
            <span className="sv-ring sv-ring-1" />
            <span className="sv-ring sv-ring-2" />
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(30,64,175,0.30), rgba(30,64,175,0.05))",
                border: "1px solid rgba(30,64,175,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono)",
                fontSize: 36,
                color: "var(--text)",
                position: "relative",
                zIndex: 1,
              }}
            >
              L
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="sec-label">Manifesto</p>
            <h2 style={{ marginBottom: 24 }}>
              Para resolver um <strong>problema claro</strong>.
            </h2>
            <div style={{ color: "var(--text2)", fontSize: 15, lineHeight: 1.85, marginBottom: 24 }}>
              <p style={{ marginBottom: 16 }}>
                A Focus Gestão Inteligente nasceu para resolver um problema claro: agências, consultorias e prestadores de
                serviço que crescem, mas continuam gerenciando tudo no WhatsApp, planilhas e e-mails soltos.
              </p>
              <p style={{ marginBottom: 16 }}>
                Nosso propósito é dar <strong>clareza, organização e controle</strong> para empresas de serviço que precisam
                profissionalizar sua operação — sem perder agilidade.
              </p>
              <p>
                Trabalhamos de duas formas: criamos sistemas sob medida para operações complexas (CRM, financeiro, portais
                do cliente) ou oferecemos o Hub Empresarial, uma plataforma completa pronta para usar.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="sb sb-w">Notion Solutions Partner</span>
              <span className="sb sb-b">Lovable L4 Platinum</span>
              <span className="sb sb-y">Lean Six Sigma Yellow Belt</span>
            </div>

            <Link to="/contato" className="btn-main">
              Fale com o Luciano
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="container-focus section-padding">
        <p className="sec-label">Pilares</p>
        <h2 style={{ maxWidth: 720, marginBottom: 40 }}>
          Como <strong>conduzimos cada projeto</strong>.
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { n: "01", t: "Visão de longo prazo", d: "Cada projeto é conduzido para gerar impacto real e duradouro no desempenho do negócio." },
            { n: "02", t: "Velocidade com método", d: "Entregamos em semanas o que levaria meses no desenvolvimento tradicional, sem abrir mão da qualidade." },
            { n: "03", t: "Foco no operacional", d: "Eliminamos o caos de WhatsApp e planilhas com sistemas que sua equipe realmente usa no dia a dia." },
          ].map((p) => (
            <div key={p.n} className="card">
              <p className="card-num">{p.n}</p>
              <h3>{p.t}</h3>
              <p style={{ color: "var(--text2)", marginTop: 8, fontSize: 14 }}>{p.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutFocus;
