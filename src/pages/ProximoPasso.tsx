import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
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
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const ProximoPasso = () => {
  const handleCTA = (location: string) => {
    trackEvent("proximo_passo_cta_click", {
      event_category: "conversion",
      event_label: location,
      utm_source: "notion",
    });
  };

  return (
    <>
      <Helmet>
        <title>Você baixou o template. E agora? | Hub Empresarial Free</title>
        <meta
          name="description"
          content="A evolução natural do template Notion: migre sua operação para o Hub Empresarial sem perder nada do que você já construiu. Versão gratuita."
        />
        <link rel="canonical" href="https://focusinteligente.com.br/proximo-passo" />
        <meta property="og:title" content="Você baixou o template. E agora?" />
        <meta property="og:description" content="A evolução natural de quem já usa templates Notion. Hub Empresarial Free." />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
          <div className="container-focus relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Pra quem já baixou um template nosso no Notion
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Você baixou o template.
                <br />
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  E agora?
                </span>
              </h1>

              <p className="text-xl text-foreground-muted mb-8 leading-relaxed">
                Você já provou que quer organização. Mas mexer no template, conectar bases,
                manter tudo funcionando vira um trabalho à parte — e o medo de perder o que
                construiu trava qualquer evolução.
              </p>

              <p className="text-lg text-foreground mb-10">
                <strong className="text-primary">A boa notícia:</strong> o Hub Empresarial é a
                evolução natural do que você já tem. Sem migração manual, sem perder dados,
                sem começar do zero.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/auth/signup?utm_source=notion&utm_medium=banner&utm_campaign=proximo_passo"
                  onClick={() => handleCTA("hero")}
                >
                  <Button size="lg" className="btn-hero text-lg px-8 py-6">
                    Criar minha conta no Hub Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-foreground-muted mt-4">
                ✓ Grátis pra sempre   ✓ Sem cartão de crédito   ✓ Seus dados continuam seus
              </p>
            </div>
          </div>
        </section>

        {/* Pain Section - Medo de perder */}
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
                  É o medo (legítimo) de perder o que você já construiu.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Database,
                    title: "Dados espalhados",
                    text: "Cada cliente, projeto e tarefa em uma página diferente. Migrar parece um pesadelo.",
                  },
                  {
                    icon: Lock,
                    title: "Customizações que quebraram",
                    text: "Você adaptou o template e agora qualquer mudança quebra alguma relação importante.",
                  },
                  {
                    icon: Shield,
                    title: "Histórico que importa",
                    text: "Meses de informação registrada. Recomeçar do zero não é uma opção real.",
                  },
                ].map((item, i) => (
                  <Card key={i} className="p-6 bg-card/50 border-border/50">
                    <item.icon className="w-8 h-8 text-destructive mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground-muted">{item.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solution - Continuidade */}
        <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background border-t border-border/50">
          <div className="container-focus">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Hub Empresarial: a evolução, não a substituição.
                </h2>
                <p className="text-lg text-foreground-muted">
                  Continue de onde parou. Sem perder nada.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-sm font-semibold text-foreground-muted uppercase tracking-wide mb-4">
                    O template te deu
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Estrutura inicial pra organizar",
                      "Visão de como pode funcionar",
                      "Primeiros dados cadastrados",
                      "Hábito de centralizar informação",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-foreground-muted shrink-0 mt-0.5" />
                        <span className="text-foreground-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                    O Hub te dá a partir disso
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Sistema pronto, sem manutenção sua",
                      "Dados conectados de verdade (não páginas soltas)",
                      "Backup e segurança automáticos",
                      "Crescimento sem quebrar nada",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-card border border-border text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-lg font-semibold mb-2">
                  Garantia: você não perde nada.
                </p>
                <p className="text-foreground-muted">
                  O Hub Free convive com seu Notion. Você migra no seu ritmo, mantendo tudo
                  que já construiu como referência. Sem prazos, sem pressão.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 border-t border-border/50">
          <div className="container-focus">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dê o próximo passo agora.
              </h2>
              <p className="text-lg text-foreground-muted mb-8">
                Crie sua conta no Hub Free em menos de 1 minuto. Sem perder nada do que você
                já tem no Notion.
              </p>

              <Link
                to="/auth/signup?utm_source=notion&utm_medium=landing&utm_campaign=proximo_passo"
                onClick={() => handleCTA("footer")}
              >
                <Button size="lg" className="btn-hero text-lg px-8 py-6">
                  Quero meu Hub Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <p className="text-sm text-foreground-muted mt-6">
                Prefere conhecer antes?{" "}
                <Link to="/hub-empresarial" className="text-primary hover:underline">
                  Veja como o Hub funciona →
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProximoPasso;
