import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Database,
  Lock,
  Sparkles,
  FileText,
  Zap,
  Clock,
  Users,
  TrendingUp,
  X,
  Star,
  Gift,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const HUB_URL = "https://appfocus.lovable.app/auth";

const ProximoPasso = () => {
  const handleCTA = (location: string) => {
    trackEvent("proximo_passo_cta_click", {
      event_category: "conversion",
      event_label: location,
      utm_source: "notion",
    });
  };

  const ctaHref = `${HUB_URL}?utm_source=notion&utm_medium=template&utm_campaign=proximo_passo`;

  const faqItems = [
    {
      question: "O Hub Empresarial Free é realmente gratuito?",
      answer: "Sim. A versão Beta do Hub é 100% gratuita, sem cartão de crédito, sem prazo limite e com todos os módulos liberados (CRM, financeiro, projetos, tarefas e dashboards).",
    },
    {
      question: "Vou perder o que já tenho organizado no template do Notion?",
      answer: "Não. O Hub convive com seu Notion. Você migra no seu ritmo, mantendo o template como referência. Nada é apagado, nada é forçado.",
    },
    {
      question: "Qual a diferença entre o template e o Hub?",
      answer: "O template é uma estrutura que você precisa manter. O Hub é um sistema pronto, conectado, com backup automático, multiusuário e que evolui sozinho — você só usa.",
    },
    {
      question: "Quanto tempo leva pra começar?",
      answer: "Menos de 1 minuto pra criar a conta. Os primeiros dados de exemplo já vêm pré-cadastrados pra você testar imediatamente.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Próximo passo do template Notion: Hub Empresarial Free"
        description="A evolução natural do template Notion. Migre pro Hub Empresarial Free sem perder nada: CRM, financeiro e projetos integrados. Grátis, sem cartão."
        canonical="/proximo-passo"
        keywords="hub empresarial, alternativa notion, sistema de gestão gratuito, evolução template notion, crm gratuito pme"
        faqItems={faqItems}
        breadcrumbItems={[{ name: "Próximo Passo", url: "/proximo-passo" }]}
      />

      <main className="min-h-screen bg-background">
        {/* Scarcity / Authority Bar */}
        <div className="bg-primary/10 border-b border-primary/20 py-2 px-4 text-center text-sm">
          <span className="text-foreground">
            <Star className="w-3 h-3 inline mr-1 text-primary fill-primary" />
            <strong>+5.000 pessoas</strong> baixaram nosso template no Notion. <strong className="text-primary">Você é uma delas.</strong>
          </span>
        </div>

        {/* Hero */}
        <section className="relative pt-20 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
          <div className="container-focus relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Pra quem já baixou o template no Notion
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Você baixou o template.
                <br />
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  E daqui pra frente?
                </span>
              </h1>

              <p className="text-xl text-foreground-muted mb-6 leading-relaxed">
                Você já investiu <strong className="text-foreground">horas</strong> organizando suas bases.
                Agora sente o peso: cada nova ideia exige mexer no template, conectar relação,
                rezar pra nada quebrar. <strong className="text-foreground">Esse trabalho não devia ser seu.</strong>
              </p>

              <p className="text-lg text-foreground mb-10">
                <strong className="text-primary">A boa notícia:</strong> existe um próximo passo natural.
                Sem migração manual. Sem perder dados. Sem começar do zero.
                <br />
                <span className="text-foreground-muted">E é grátis.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCTA("hero")}
                >
                  <Button size="lg" className="btn-hero text-lg px-8 py-6 animate-glow">
                    Acessar o Hub Free agora
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>

              <p className="text-sm text-foreground-muted mt-4">
                ✓ Grátis pra sempre   ✓ Sem cartão   ✓ Seus dados continuam seus   ✓ 1 minuto pra começar
              </p>
            </div>
          </div>
        </section>

        {/* Pain Section - Loss Aversion */}
        <section className="py-20 border-t border-border/50">
          <div className="container-focus">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-destructive/10 border border-destructive/20 mb-4">
                  <AlertTriangle className="w-7 h-7 text-destructive" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  O que trava você não é falta de vontade.
                </h2>
                <p className="text-lg text-foreground-muted">
                  É o medo (legítimo) de perder o que já construiu.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Database,
                    title: "Dados espalhados",
                    text: "Cada cliente, projeto e tarefa em uma página diferente. Migrar parece pesadelo — então você adia.",
                  },
                  {
                    icon: Lock,
                    title: "Customizações frágeis",
                    text: "Você adaptou o template e agora qualquer mudança quebra alguma relação importante. Mexer dá medo.",
                  },
                  {
                    icon: Shield,
                    title: "Histórico que importa",
                    text: "Meses de informação registrada. Recomeçar do zero não é opção. Continuar como está, também não.",
                  },
                ].map((item, i) => (
                  <Card key={i} className="p-6 bg-card/50 border-border/50">
                    <item.icon className="w-8 h-8 text-destructive mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground-muted">{item.text}</p>
                  </Card>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl border border-destructive/20 bg-destructive/5 text-center">
                <p className="text-foreground">
                  <strong className="text-destructive">A verdade desconfortável:</strong> a cada semana que você adia,
                  mais customizações você acumula — e mais difícil fica sair depois.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison - Anchoring */}
        <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background border-t border-border/50">
          <div className="container-focus">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Hub Empresarial: a evolução, não a substituição.
                </h2>
                <p className="text-lg text-foreground-muted">
                  Tudo que o template te ensinou, levado pro próximo nível — sem manutenção sua.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-8 bg-card/30 border-border/50 relative">
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-muted/50 text-xs font-semibold text-foreground-muted">
                    HOJE
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-foreground-muted">Template Notion</h3>
                  <ul className="space-y-3">
                    {[
                      "Você mantém. Você atualiza. Você corrige.",
                      "Páginas soltas que você conecta na unha",
                      "Backup é responsabilidade sua",
                      "Quebra quando o time cresce",
                      "Customizar = risco de quebrar tudo",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                        <span className="text-foreground-muted line-through">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-8 bg-primary/10 border-primary/30 relative shadow-glow">
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    PRÓXIMO PASSO
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-primary">Hub Empresarial Free</h3>
                  <ul className="space-y-3">
                    {[
                      "Sistema pronto. Zero manutenção sua.",
                      "Dados conectados de verdade, não páginas",
                      "Backup automático e criptografado",
                      "Multiusuário desde o dia 1",
                      "Atualizações automáticas, sem quebrar nada",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-card border border-border text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-lg font-semibold mb-2">
                  Garantia: você não perde absolutamente nada.
                </p>
                <p className="text-foreground-muted">
                  O Hub Free convive com seu Notion. Use os dois. Migre no seu ritmo. Sem prazo, sem pressão, sem cartão.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 border-t border-border/50">
          <div className="container-focus">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: Users, value: "+5.000", label: "downloads do template" },
                  { icon: TrendingUp, value: "8 módulos", label: "liberados no plano free" },
                  { icon: Gift, value: "R$ 0", label: "pra sempre, sem pegadinha" },
                ].map((m, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-xl bg-card/50 border border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <m.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{m.value}</p>
                      <p className="text-sm text-foreground-muted">{m.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Future Pacing - Mental imagery */}
        <section className="py-20 border-t border-border/50 bg-gradient-to-b from-background to-primary/5">
          <div className="container-focus">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Imagine sua próxima segunda-feira.
              </h2>
              <p className="text-lg text-foreground-muted mb-6 leading-relaxed">
                Você abre seu sistema. Os clientes estão lá. Os projetos atualizados sozinhos.
                O financeiro consolidado. Nenhuma página quebrada. Nenhuma fórmula pra ajustar.
              </p>
              <p className="text-xl text-foreground font-semibold">
                Você só executa o que importa. <span className="text-primary">O sistema cuida do resto.</span>
              </p>
              <p className="text-sm text-foreground-muted mt-6">
                Essa é a diferença entre <em>ter um template</em> e <em>ter um sistema</em>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-t border-border/50">
          <div className="container-focus">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                Perguntas que travam a decisão
              </h2>
              <div className="space-y-4">
                {faqItems.map((item, i) => (
                  <Card key={i} className="p-6 bg-card/50 border-border/50">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{item.question}</h3>
                    <p className="text-foreground-muted">{item.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 border-t border-border/50 bg-gradient-to-t from-primary/10 to-transparent">
          <div className="container-focus">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Dê o próximo passo agora.
              </h2>
              <p className="text-lg text-foreground-muted mb-8">
                Em 1 minuto você está dentro do Hub Free. Sem perder nada. Sem cartão. Sem amarras.
              </p>

              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCTA("footer")}
              >
                <Button size="lg" className="btn-hero text-lg px-10 py-7 animate-glow">
                  Quero meu Hub Free agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>

              <p className="text-sm text-foreground-muted mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary" /> Grátis pra sempre</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary" /> Sem cartão</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary" /> 8 módulos liberados</span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProximoPasso;
