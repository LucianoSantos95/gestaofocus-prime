import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ApplicationFormModal from "@/components/ApplicationFormModal";
import { ArrowRight, AlertTriangle, Star } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

import hubEmpresarialPro from "@/assets/hub-empresarial-pro.webp";

const Index = () => {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  const cta = (label: string) =>
    trackEvent("cta_click", { event_category: "conversion", event_label: label });

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <SEOHead
        title="Focus Gestão | Software para Agências e Consultorias"
        description="Sistemas sob medida para agências, consultorias e prestadores de serviço. Pare de gerenciar no WhatsApp e planilhas. Entrega em até 30 dias."
        canonical="/"
        keywords="gestão para agências, sistema para consultoria, software para prestadores de serviço, gestão empresarial, CRM agência, dashboard consultoria"
        type="website"
        speakable={["[data-speakable]", "h1", ".hero-subtitle"]}
      />

      {/* Scarcity strip */}
      <div
        style={{
          background: "rgba(239,68,68,0.08)",
          borderBottom: "1px solid rgba(239,68,68,0.18)",
          paddingTop: 76,
          paddingBottom: 10,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#FCA5A5",
          textAlign: "center",
        }}
      >
        <AlertTriangle className="w-3 h-3 inline mr-1.5 -mt-0.5" />
        Vagas Esgotadas para Projetos Sob Medida · Lista de Espera Aberta
      </div>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden" style={{ minHeight: "92vh", padding: "120px 24px 100px" }}>
        <div className="hero-grid" />
        <span className="corner corner-tl" />
        <span className="corner corner-tr" />
        <span className="corner corner-bl" />
        <span className="corner corner-br" />

        <div className="container-focus relative z-10 text-center">
          <p className="hero-eyebrow anim-up" style={{ justifyContent: "center" }}>
            <span style={{ color: "var(--accent-hex)" }}>●</span>
            Focus · Sistemas para agências e consultorias
          </p>

          <h1 className="hero-title anim-up-1 mx-auto" style={{ maxWidth: 980 }}>
            Sua agência ainda gerencia tudo no <em>WhatsApp</em> e <em>planilhas</em>?{" "}
            <strong>Profissionalize a operação.</strong>
          </h1>

          <p className="hero-subtitle anim-up-2 mx-auto mt-8" style={{ maxWidth: 640 }}>
            Criamos sistemas sob medida para agências, consultorias e prestadores de serviço —
            ou acesse o Hub Empresarial, pronto para usar.
          </p>

          <div className="anim-up-3 mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              className="btn-cta"
              onClick={() => {
                cta("hero_waitlist");
                setIsApplicationOpen(true);
              }}
            >
              Entrar na lista de espera
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <Link to="/hub-empresarial" onClick={() => cta("hero_hub")} className="btn-ghost">
              Conhecer Hub Empresarial →
            </Link>
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

      {/* ===== MEDIA STRIP ===== */}
      <div className="container-focus">
        <div className="media-strip flex-wrap md:flex-nowrap">
          <span className="ms-label">Em parceria com</span>
          <div className="ms-logos">
            <span className="ms-logo">Notion Partner</span>
            <span className="ms-logo">Lovable L4</span>
            <span className="ms-logo">Lean Six Sigma</span>
            <span className="ms-logo">Stripe</span>
            <span className="ms-logo">Supabase</span>
          </div>
        </div>
      </div>

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
              <p className="mr-num">{m.n}</p>
              <p className="mr-label">{m.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROBLEMS — BENTO ===== */}
      <section className="container-focus section-padding">
        <p className="sec-label">O dia a dia hoje</p>
        <h2 style={{ maxWidth: 720 }}>
          Isso é a rotina da sua <strong>agência ou consultoria</strong>?
        </h2>

        <div className="bento">
          {[
            { n: "01", t: "Projetos atrasados", d: "Ninguém sabe o status real. Clientes cobram atualização por WhatsApp o tempo todo.", col: 5, row: 2 },
            { n: "02", t: "Financeiro no Excel", d: "Você descobre o prejuízo tarde demais. Sem fluxo de caixa confiável.", col: 4, row: 1 },
            { n: "03", t: "Sem padrão", d: "Cada colaborador usa um método diferente.", col: 3, row: 1 },
            { n: "04", t: "Crescimento travado", d: "A operação manual impede sua agência ou consultoria de escalar.", col: 7, row: 1 },
          ].map((c) => (
            <div key={c.n} className="card" style={{ gridColumn: `span ${c.col}`, gridRow: `span ${c.row}` }}>
              <p className="card-num">{c.n}</p>
              <h3>{c.t}</h3>
              <p style={{ color: "var(--text2)", marginTop: 8, fontSize: 14 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SOLUTIONS COMPARISON ===== */}
      <section className="container-focus section-padding">
        <p className="sec-label">Duas formas de profissionalizar</p>
        <h2 style={{ maxWidth: 720 }}>
          Escolha o caminho ideal para o <strong>momento da sua empresa</strong>.
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {/* Focus Custom */}
          <div className="card relative" style={{ padding: 36 }}>
            <span
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "#FCA5A5",
                background: "rgba(239,68,68,0.10)",
                border: "1px solid rgba(239,68,68,0.25)",
                borderRadius: 4,
                padding: "3px 8px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Vagas esgotadas
            </span>
            <p className="card-num">01 · Focus Custom</p>
            <h3 style={{ fontSize: 22 }}>Software sob medida</h3>
            <p style={{ color: "var(--text2)", fontSize: 14, marginTop: 8, marginBottom: 20 }}>
              Para operações complexas. CRM personalizado, dashboards exclusivos, portal do cliente.
            </p>
            <ul className="pc-list" style={{ paddingLeft: 0, marginBottom: 28 }}>
              {["Dashboard exclusivo com seus KPIs", "CRM personalizado para seu processo", "Portal do cliente com sua marca", "Suporte dedicado pós-entrega"].map((f) => (
                <li key={f} style={{ color: "var(--text2)", fontSize: 14, marginBottom: 8 }}>{f}</li>
              ))}
            </ul>
            <button
              className="btn-cta w-full"
              onClick={() => {
                cta("card_custom_waitlist");
                setIsApplicationOpen(true);
              }}
            >
              Entrar na lista de espera
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Hub Empresarial */}
          <div className="card pc-featured" style={{ padding: 36 }}>
            <span className="pc-popular" style={{ position: "absolute", top: 20, right: 20 }}>
              Acesso imediato
            </span>
            <p className="card-num">02 · Hub Empresarial</p>
            <h3 style={{ fontSize: 22 }}>Plataforma SaaS pronta para usar</h3>
            <p style={{ color: "var(--text2)", fontSize: 14, marginTop: 8, marginBottom: 20 }}>
              Comece em minutos. CRM, Financeiro, Projetos, RH e Dashboards em um único sistema.
            </p>
            <ul className="pc-list" style={{ paddingLeft: 0, marginBottom: 28 }}>
              {["Financeiro completo", "Gestão de Projetos", "CRM Inteligente", "Recursos Humanos", "Dashboards em tempo real"].map((f) => (
                <li key={f} style={{ color: "var(--text2)", fontSize: 14, marginBottom: 8 }}>{f}</li>
              ))}
            </ul>
            <p style={{ color: "var(--text2)", fontSize: 13, marginBottom: 16 }}>
              A partir de <strong style={{ color: "var(--text)", fontSize: 18 }}>R$ 69</strong>
              <span style={{ color: "var(--text3)" }}> /mês</span>
            </p>
            <Link to="/hub-empresarial" onClick={() => cta("card_hub")} className="btn-main w-full" style={{ display: "flex" }}>
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

      {/* ===== ABOUT (GEO/IA) ===== */}
      <section className="container-focus section-padding" id="sobre-nos">
        <div className="max-w-3xl mx-auto text-center">
          <p className="sec-label" style={{ justifyContent: "center" }}>
            <span style={{ flex: 0 }}>Sobre a Focus</span>
          </p>
          <h2 style={{ marginBottom: 24 }}>
            <strong>Eliminamos o caos</strong> operacional de quem ainda gerencia tudo por WhatsApp e planilhas.
          </h2>
          <p data-speakable="true" style={{ color: "var(--text2)", fontSize: 15, lineHeight: 1.85, maxWidth: 640, margin: "0 auto" }}>
            A Focus Gestão Inteligente é especialista em sistemas de gestão sob medida para agências de marketing,
            consultorias e prestadores de serviço no Brasil. Já entregamos mais de <strong>150 sistemas</strong> para
            <strong> 43+ empresas</strong>, com 98% de satisfação. Atendimento 100% online em todo o Brasil, com entrega média de 30 dias.
          </p>
          <div className="mt-8">
            <Link to="/sobre-focus" onClick={() => cta("sobre_saiba_mais")} className="btn-ghost">
              Saiba mais sobre a Focus →
            </Link>
          </div>
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
            Pronto para <strong>profissionalizar</strong> sua empresa?
          </h2>
          <p style={{ color: "var(--text2)", maxWidth: 540, margin: "0 auto 32px", fontSize: 15 }}>
            As vagas para projetos sob medida estão esgotadas. Entre na lista de espera ou comece agora com o Hub
            Empresarial — sem fila.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              className="btn-cta"
              onClick={() => {
                cta("cta_final_waitlist");
                setIsApplicationOpen(true);
              }}
            >
              Entrar na lista de espera
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <Link to="/hub-empresarial" onClick={() => cta("cta_final_hub")} className="btn-ghost">
              Conhecer Hub Empresarial →
            </Link>
          </div>
        </div>
      </section>

      <ApplicationFormModal open={isApplicationOpen} onOpenChange={setIsApplicationOpen} source="homepage" />
    </div>
  );
};

export default Index;
