import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ApplicationFormModal from "@/components/ApplicationFormModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, AlertTriangle, TrendingDown, Rocket, X as XIcon } from "lucide-react";

const SolucoesSobMedida = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <SEOHead
        title="Software Sob Medida para Agências e Consultorias | Focus"
        description="Software exclusivo para agências, consultorias e prestadores de serviço. Do diagnóstico à entrega em 30 dias. Dashboards, CRM e portais do cliente."
        canonical="/solucoes-sob-medida"
        keywords="software sob medida agência, sistema exclusivo consultoria, desenvolvimento software prestadores serviço, CRM personalizado, portal do cliente"
      />

      <Navigation />

      {/* Scarcity bar */}
      <div
        style={{
          position: "fixed",
          top: 60,
          left: 0,
          right: 0,
          zIndex: 40,
          background: "rgba(239,68,68,0.10)",
          borderBottom: "1px solid rgba(239,68,68,0.20)",
          padding: "8px 16px",
          textAlign: "center",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#FCA5A5",
          backdropFilter: "blur(12px)",
        }}
      >
        <AlertTriangle className="w-3 h-3 inline mr-1.5 -mt-0.5" />
        Vagas Esgotadas · Lista de Espera Aberta para a Próxima Turma
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: "92vh", padding: "160px 24px 100px" }}>
        <div className="hero-grid" />
        <span className="corner corner-tl" />
        <span className="corner corner-tr" />
        <span className="corner corner-bl" />
        <span className="corner corner-br" />

        <div className="container-focus relative z-10 text-center">
          <p className="hero-eyebrow anim-up" style={{ justifyContent: "center" }}>
            Focus Custom · Desenvolvimento sob medida
          </p>

          <h1 className="hero-title anim-up-1 mx-auto" style={{ maxWidth: 1000 }}>
            Software <em>exclusivo</em> para agências e consultorias —{" "}
            <strong>do diagnóstico à entrega em 30 dias.</strong>
          </h1>

          <p className="hero-subtitle anim-up-2 mx-auto mt-8" style={{ maxWidth: 680 }}>
            Pare de adaptar sua agência a sistemas genéricos. Criamos soluções sob medida para prestadores de serviço.
            Descreva seu desafio e entre na lista de espera para receber um diagnóstico personalizado.
          </p>

          <div className="anim-up-3 mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button className="btn-cta" onClick={() => setFormOpen(true)}>
              Entrar na lista de espera
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <Link to="/hub-empresarial" className="btn-ghost">
              Ver Hub Empresarial →
            </Link>
          </div>
          <p style={{ marginTop: 16, fontSize: 12, color: "var(--text3)", fontFamily: "var(--font-mono)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Sem compromisso · Análise gratuita de viabilidade
          </p>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="container-focus section-padding">
        <p className="sec-label">Para quem é</p>
        <h2 style={{ maxWidth: 720, marginBottom: 40 }}>
          Para quem é a <strong>Focus Custom</strong>?
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-4">
            {[
              { t: "Agências Digitais", d: "Que gerenciam 10+ projetos simultâneos no WhatsApp e precisam de um sistema profissional." },
              { t: "Consultorias em Crescimento", d: "Que precisam de portal do cliente, CRM e financeiro integrado para escalar." },
              { t: "Prestadores de Serviço", d: "Que querem profissionalizar a entrega, controlar comissões e ter dashboards com KPIs." },
            ].map((c, i) => (
              <div key={c.t} className="card">
                <p className="card-num">{String(i + 1).padStart(2, "0")} · É para você</p>
                <h3>{c.t}</h3>
                <p style={{ color: "var(--text2)", marginTop: 8, fontSize: 14 }}>{c.d}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <p className="sec-label">Não é para você se…</p>
            {[
              "Você procura apenas uma planilha bonita no Excel.",
              "Você quer pagar preço de estagiário e arriscar seus dados.",
              "Sua empresa não tem nenhum processo definido (o caos é total).",
            ].map((d, i) => (
              <div key={i} className="card" style={{ borderColor: "rgba(239,68,68,0.15)" }}>
                <p className="card-num inline-flex items-center gap-1.5" style={{ color: "#FCA5A5" }}><XIcon className="w-3 h-3" /> {String(i + 1).padStart(2, "0")}</p>
                <p style={{ color: "var(--text2)", fontSize: 14 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARAÇÃO */}
      <section className="container-focus section-padding">
        <p className="sec-label">Por que software próprio</p>
        <h2 style={{ maxWidth: 720, marginBottom: 40 }}>
          O fim do <strong>caos das planilhas</strong>.
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="card" style={{ borderColor: "rgba(239,68,68,0.18)", background: "rgba(239,68,68,0.04)" }}>
            <p className="card-num" style={{ color: "#FCA5A5" }}>Antes · Caos das planilhas</p>
            <h3 className="inline-flex items-center gap-2" style={{ marginBottom: 16 }}><TrendingDown className="w-5 h-5" style={{ color: "#FCA5A5" }} /> O custo invisível</h3>
            <ul className="pc-list" style={{ paddingLeft: 0 }}>
              {[
                "Dados descentralizados e inseguros no WhatsApp",
                "Erros de fórmula invisíveis que custam dinheiro",
                "Lento, trava com muitos dados",
                "Depende de uma pessoa saber mexer",
              ].map((f) => (
                <li key={f} style={{ color: "var(--text2)", fontSize: 14, marginBottom: 8 }}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="card pc-featured">
            <p className="card-num" style={{ color: "#6D8FE8" }}>Depois · Padrão Focus Custom</p>
            <h3 className="inline-flex items-center gap-2" style={{ marginBottom: 16 }}><Rocket className="w-5 h-5" style={{ color: "#6D8FE8" }} /> Operação profissional</h3>
            <ul className="pc-list" style={{ paddingLeft: 0 }}>
              {[
                "Banco de dados blindado e backup automático",
                "Automação inteligente (cálculos infalíveis)",
                "Rápido, roda em celular e computador",
                "Intuitivo, qualquer funcionário usa sem treinamento complexo",
              ].map((f) => (
                <li key={f} style={{ color: "var(--text2)", fontSize: 14, marginBottom: 8 }}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="container-focus section-padding">
        <p className="sec-label">Método</p>
        <h2 style={{ maxWidth: 720, marginBottom: 40 }}>
          Do diagnóstico à entrega em <strong>4 passos</strong>.
        </h2>

        <div className="space-y-4 max-w-3xl">
          {[
            { n: "01", t: "Diagnóstico (Deep Dive)", d: "Entendemos sua dor, desenhamos o fluxo atual e identificamos onde você está perdendo dinheiro." },
            { n: "02", t: "Arquiteto (Prototipagem)", d: "Antes de escrever uma linha de código, desenhamos a solução. Você aprova o layout e as funcionalidades. Nada de surpresas." },
            { n: "03", t: "Construção (Sprint Ágil)", d: "Nossa equipe desenvolve seu sistema com tecnologia de ponta. O que demoraria 6 meses, entregamos em semanas." },
            { n: "04", t: "Entrega & Treinamento", d: "Você recebe o acesso, o código e o treinamento gravado para sua equipe operar o sistema." },
          ].map((s) => (
            <div key={s.n} className="card flex gap-6 items-start">
              <p className="card-num" style={{ marginBottom: 0, minWidth: 32, fontSize: 14 }}>{s.n}</p>
              <div>
                <h3>{s.t}</h3>
                <p style={{ color: "var(--text2)", marginTop: 6, fontSize: 14 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXEMPLOS — BENTO */}
      <section className="container-focus section-padding">
        <p className="sec-label">O que podemos construir</p>
        <h2 style={{ maxWidth: 720, marginBottom: 8 }}>
          Sistemas <strong>desenhados para o seu negócio</strong>.
        </h2>
        <div className="bento">
          {[
            { n: "01", t: "Financeiro para Agências", d: "Fluxo de caixa, DRE, contas a pagar/receber e controle de comissões por projeto.", col: 5, row: 2 },
            { n: "02", t: "CRM para Consultorias", d: "Pipeline de vendas personalizado, propostas automáticas e gestão de carteira de clientes.", col: 4, row: 1 },
            { n: "03", t: "Portal do Cliente", d: "Área exclusiva onde seu cliente acompanha projetos, aprova demandas e acessa relatórios.", col: 3, row: 1 },
            { n: "04", t: "Dashboards executivos", d: "KPIs em tempo real, indicadores customizados e relatórios automáticos para a diretoria.", col: 7, row: 1 },
          ].map((c) => (
            <div key={c.n} className="card" style={{ gridColumn: `span ${c.col}`, gridRow: `span ${c.row}` }}>
              <p className="card-num">{c.n}</p>
              <h3>{c.t}</h3>
              <p style={{ color: "var(--text2)", marginTop: 8, fontSize: 14 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING / ANCHORAGE */}
      <section className="container-focus section-padding">
        <div className="card text-center" style={{ padding: 60, maxWidth: 720, margin: "0 auto" }}>
          <p className="sec-label" style={{ justifyContent: "center" }}>
            <span style={{ flex: 0 }}>Investimento</span>
          </p>
          <h2 style={{ marginBottom: 16 }}>
            Quanto custa ter <strong>paz mental</strong>?
          </h2>
          <p style={{ color: "var(--text2)", maxWidth: 480, margin: "0 auto 32px", fontSize: 15 }}>
            Cada projeto é único. O valor depende do escopo e da complexidade. Entre na lista de espera para receber
            uma proposta personalizada quando a próxima turma abrir.
          </p>
          <button className="btn-cta" onClick={() => setFormOpen(true)}>
            Solicitar diagnóstico
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-focus section-padding">
        <p className="sec-label">Perguntas frequentes</p>
        <h2 style={{ marginBottom: 40 }}>FAQ</h2>

        <Accordion type="single" collapsible className="space-y-3 max-w-3xl">
          {[
            { q: "Preciso pagar mensalidade?", a: "Apenas a hospedagem do sistema (valor baixo, direto ao provedor). O desenvolvimento é pagamento único." },
            { q: "E se eu precisar mudar algo depois?", a: "O software é seu. Oferecemos pacotes de suporte ou horas avulsas para evoluir o sistema quando sua empresa crescer." },
            { q: "Quanto tempo demora?", a: "A média de entrega é de 15 a 30 dias úteis, dependendo da complexidade." },
          ].map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="card"
              style={{ padding: "4px 24px" }}
            >
              <AccordionTrigger className="hover:no-underline py-5 text-left" style={{ color: "var(--text)", fontSize: 15, fontWeight: 500 }}>
                {f.q}
              </AccordionTrigger>
              <AccordionContent style={{ color: "var(--text2)", paddingBottom: 20, fontSize: 14, lineHeight: 1.75 }}>
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA FINAL */}
      <section className="container-focus section-padding">
        <div
          className="card text-center"
          style={{
            padding: "60px 32px",
            background: "linear-gradient(160deg, rgba(239,68,68,0.08) 0%, var(--bg2) 60%)",
            borderColor: "rgba(239,68,68,0.25)",
          }}
        >
          <p className="sec-label" style={{ justifyContent: "center" }}>
            <span style={{ flex: 0, color: "#FCA5A5" }}>Vagas esgotadas</span>
          </p>
          <h2 style={{ maxWidth: 640, margin: "0 auto 16px" }}>
            Entre na <strong>lista de espera</strong> para a próxima turma.
          </h2>
          <p style={{ color: "var(--text2)", maxWidth: 560, margin: "0 auto 32px", fontSize: 15 }}>
            No momento <strong>não estamos aceitando novos projetos sob medida</strong>. Cadastre-se e seja o primeiro a saber quando abrirmos novas vagas.
          </p>
          <button className="btn-cta" onClick={() => setFormOpen(true)}>
            Entrar na lista de espera
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </section>

      <Footer />

      <ApplicationFormModal open={formOpen} onOpenChange={setFormOpen} source="solucoes_sob_medida" />
    </div>
  );
};

export default SolucoesSobMedida;
