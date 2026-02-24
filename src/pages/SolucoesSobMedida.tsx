import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ApplicationFormModal from "@/components/ApplicationFormModal";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Search,
  Ruler,
  Hammer,
  Rocket,
  CheckCircle,
  XCircle,
  DollarSign,
  Users,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Zap,
  Smartphone,
  UserCheck,
  ArrowRight,
} from "lucide-react";

const SolucoesSobMedida = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Desenvolvimento de Software Sob Medida | Focus Custom"
        description="Pare de adaptar sua empresa ao software. Criamos sistemas exclusivos — dashboards, CRM, portais — com entrega em até 30 dias. Vagas limitadas."
        canonical="/solucoes-sob-medida"
      />

      <Navigation />

      {/* BARRA DE AVISO */}
      <div className="fixed top-16 lg:top-20 left-0 right-0 z-40 bg-red-900/90 backdrop-blur-sm border-b border-red-800/50">
        <div className="container-focus py-2 text-center">
          <p className="text-sm font-medium text-red-100">
            <span className="inline-block w-2 h-2 rounded-full bg-red-400 animate-pulse mr-2" />
            AGENDA MARÇO/2026: Restam apenas <strong>2 vagas</strong> para Projetos de Alta Complexidade.
          </p>
        </div>
      </div>

      {/* SEÇÃO 1 — HERO */}
      <section className="relative pt-40 lg:pt-48 pb-24 lg:pb-32 overflow-hidden">
        {/* Glow background */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-glow/5 rounded-full blur-[120px]" />

        <div className="container-focus relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Pare de adaptar sua empresa ao software.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Nós criamos o software perfeito para a sua empresa.
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-foreground-muted max-w-3xl mx-auto mb-8 leading-relaxed">
            Transformamos processos manuais, planilhas complexas e sistemas lentos em um{" "}
            <strong className="text-foreground">Aplicativo Próprio (Web & Mobile)</strong>. Tenha controle total da sua operação em até 30 dias, sem depender de "gambiarras".
          </p>
          <Button onClick={() => setFormOpen(true)} className="btn-hero text-lg px-10 py-5 animate-glow">
            APLICAR PARA CONSULTORIA
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-foreground-muted text-sm mt-4">Análise gratuita de viabilidade do projeto</p>
        </div>
      </section>

      {/* SEÇÃO 2 — PARA QUEM É */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus max-w-5xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
            Para quem é a Focus Custom?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* É para você */}
            <div className="space-y-4">
              {[
                { title: "Empresas em Crescimento", desc: "Que faturam bem, mas a gestão virou um caos de planilhas." },
                { title: "Operações Complexas", desc: "Que têm regras de comissão, logística ou aprovação que nenhum sistema pronto (SaaS) atende." },
                { title: "Prestadores de Serviço", desc: "Que querem oferecer um Portal do Cliente profissional para agregar valor e cobrar mais caro." },
              ].map((item, i) => (
                <Card key={i} className="p-5 bg-card/50 backdrop-blur-sm border-card-border/30 hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-foreground-muted text-sm">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Não é para você */}
            <div className="space-y-4">
              <p className="text-foreground-muted text-sm font-medium mb-2">Não é para você se...</p>
              {[
                "Você procura apenas uma planilha bonita no Excel/Notion.",
                "Você quer pagar preço de estagiário e arriscar seus dados.",
                "Sua empresa não tem nenhum processo definido (o caos é total).",
              ].map((text, i) => (
                <Card key={i} className="p-5 bg-card/50 backdrop-blur-sm border-card-border/30">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground-muted text-sm">{text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — COMPARAÇÃO */}
      <section className="section-padding bg-background">
        <div className="container-focus max-w-5xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
            Por que investir em um Software Próprio?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Caos */}
            <Card className="p-6 bg-red-950/20 backdrop-blur-sm border-red-900/30">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-red-400" />
                O CAOS DAS PLANILHAS 📉
              </h3>
              <ul className="space-y-3">
                {[
                  "Dados descentralizados e inseguros no WhatsApp.",
                  "Erros de fórmula invisíveis que custam dinheiro.",
                  "Lento, trava com muitos dados.",
                  "Depende de uma pessoa saber mexer.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground-muted text-sm">
                    <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Focus Custom */}
            <Card className="p-6 bg-primary/5 backdrop-blur-sm border-primary/20 shadow-glow">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                O PADRÃO FOCUS CUSTOM 🚀
              </h3>
              <ul className="space-y-3">
                {[
                  "Banco de Dados Blindado e Backup Automático.",
                  "Automação Inteligente (Cálculos infalíveis).",
                  "Rápido, roda no Celular e Computador.",
                  "Intuitivo, qualquer funcionário usa sem treinamento complexo.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground-muted text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — MÉTODO */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
            Do Diagnóstico à Entrega em 4 Passos
          </h2>

          <div className="space-y-6">
            {[
              { icon: Search, title: "O Diagnóstico (Deep Dive)", desc: "Entendemos sua dor, desenhamos o fluxo atual e identificamos onde você está perdendo dinheiro.", color: "from-blue-500 to-cyan-500" },
              { icon: Ruler, title: "O Arquiteto (Prototipagem)", desc: "Antes de escrever uma linha de código, desenhamos a solução. Você aprova o layout e as funcionalidades. Nada de surpresas.", color: "from-purple-500 to-pink-500" },
              { icon: Hammer, title: "A Construção (Sprint Ágil)", desc: "Nossa equipe desenvolve seu sistema usando tecnologia de ponta. O que demoraria 6 meses, entregamos em semanas.", color: "from-orange-500 to-amber-500" },
              { icon: Rocket, title: "A Entrega & Treinamento", desc: "Você recebe o acesso, o código e o treinamento gravado para sua equipe operar o sistema.", color: "from-green-500 to-emerald-500" },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  {i < 3 && <div className="w-px h-8 bg-card-border mt-2" />}
                </div>
                <div className="pb-2">
                  <h3 className="font-bold text-foreground text-lg mb-1">
                    <span className="text-foreground-muted mr-2">{i + 1}.</span>{step.title}
                  </h3>
                  <p className="text-foreground-muted text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — EXEMPLOS */}
      <section className="section-padding bg-background">
        <div className="container-focus max-w-5xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
            O que podemos construir para você?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Financeiro Blindado", desc: "Fluxo de Caixa, DRE, Contas a Pagar/Receber e Emissão de Notas em um clique." },
              { icon: Users, title: "CRM & Vendas", desc: "Pipeline de vendas personalizado, disparo de propostas e gestão de comissões." },
              { icon: UserCheck, title: "Portal do Cliente", desc: "Uma área exclusiva onde seu cliente faz login para ver o andamento do projeto, baixar boletos e aprovar demandas." },
            ].map((item, i) => (
              <Card key={i} className="p-6 bg-card/50 backdrop-blur-sm border-card-border/30 hover:border-primary/30 hover:shadow-glow transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-foreground-muted text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — ANCORAGEM DE PREÇO */}
      <section className="section-padding bg-gradient-to-b from-background-secondary via-background to-background-secondary">
        <div className="container-focus max-w-3xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Quanto custa ter paz mental na gestão?
          </h2>

          <div className="space-y-4 mb-8">
            <p className="text-foreground-muted">
              Contratar um programador sênior custaria <span className="text-foreground font-semibold line-through">R$ 15.000/mês</span>.
            </p>
            <p className="text-foreground-muted">
              Assinar 5 softwares diferentes custaria <span className="text-foreground font-semibold line-through">R$ 2.000/mês para sempre</span>.
            </p>
            <p className="text-foreground-muted">
              Na Focus Custom, você investe <strong className="text-foreground">uma única vez</strong> no desenvolvimento do <strong className="text-foreground">SEU ativo</strong>.
            </p>
          </div>

          <Card className="inline-block p-8 bg-primary/5 border-primary/20 shadow-glow">
            <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
              A partir de R$ 4.000
            </p>
            <p className="text-primary font-medium">(Pagamento Único)</p>
            <p className="text-foreground-muted text-sm mt-3">
              *Parcelamento disponível para empresas (CNPJ).
            </p>
          </Card>
        </div>
      </section>

      {/* SEÇÃO 7 — FAQ */}
      <section className="section-padding bg-background">
        <div className="container-focus max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
            Perguntas Frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-1" className="border border-card-border/30 rounded-xl px-6 bg-card/50 backdrop-blur-sm">
              <AccordionTrigger className="text-foreground hover:no-underline py-5">
                Preciso pagar mensalidade?
              </AccordionTrigger>
              <AccordionContent className="text-foreground-muted pb-5">
                Apenas a hospedagem do sistema (valor baixo, direto ao provedor). O desenvolvimento é pagamento único.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border border-card-border/30 rounded-xl px-6 bg-card/50 backdrop-blur-sm">
              <AccordionTrigger className="text-foreground hover:no-underline py-5">
                E se eu precisar mudar algo depois?
              </AccordionTrigger>
              <AccordionContent className="text-foreground-muted pb-5">
                O software é seu. Oferecemos pacotes de suporte ou horas avulsas para evoluir o sistema quando sua empresa crescer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border border-card-border/30 rounded-xl px-6 bg-card/50 backdrop-blur-sm">
              <AccordionTrigger className="text-foreground hover:no-underline py-5">
                Quanto tempo demora?
              </AccordionTrigger>
              <AccordionContent className="text-foreground-muted pb-5">
                A média de entrega é de 15 a 30 dias úteis, dependendo da complexidade.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* SEÇÃO 8 — CTA FINAL */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

        <div className="container-focus relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Pronto para profissionalizar sua empresa?
          </h2>
          <p className="text-foreground-muted text-lg mb-8">
            Devido à alta complexidade e dedicação exclusiva da nossa equipe sênior, abrimos apenas{" "}
            <strong className="text-foreground">3 vagas por mês</strong>. Garanta a sua agora.
          </p>
          <Button onClick={() => setFormOpen(true)} className="btn-hero text-lg px-10 py-5 animate-glow">
            PREENCHER APLICAÇÃO
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />

      <ApplicationFormModal
        open={formOpen}
        onOpenChange={setFormOpen}
        source="solucoes_sob_medida"
      />
    </div>
  );
};

export default SolucoesSobMedida;
