import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Users, FolderKanban, Zap, TrendingUp, CheckCircle, ArrowRight, Database, Lightbulb, Repeat } from "lucide-react";
import { Link } from "react-router-dom";

const FocusClub = () => {
  const steps = [
    {
      icon: Target,
      letter: "F",
      title: "Fundamento",
      subtitle: "Diagnóstico e clareza do cenário",
      description: "Identificamos os principais gargalos e definimos metas realistas.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FolderKanban,
      letter: "O",
      title: "Organização",
      subtitle: "Estrutura que sustenta o crescimento",
      description: "Mapeamos processos, definimos prioridades e estruturamos o fluxo de trabalho.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      letter: "C",
      title: "Centralização",
      subtitle: "Um único ambiente, todas as informações",
      description: "Implementamos o sistema Notion para reunir tudo em um só lugar.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      letter: "U",
      title: "Utilização Produtiva",
      subtitle: "Aplicação prática no dia a dia",
      description: "Transformamos ferramenta em resultado com hábitos e rotinas produtivas.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      letter: "S",
      title: "Sustentação",
      subtitle: "Evolução contínua",
      description: "O sistema cresce junto com o negócio.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const solutions = [
    {
      title: "Sprint de Produtividade",
      stages: ["F", "O"],
      description: "7 dias para organizar sua vida e trabalho",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Hub Empresarial PRO",
      stages: ["O", "C", "U"],
      description: "Sistema completo de gestão empresarial",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Consultoria Notion",
      stages: ["F", "O", "C", "U", "S"],
      description: "Metodologia completa personalizada",
      gradient: "from-pink-500 to-orange-500",
      highlight: true
    }
  ];

  const results = [
    "Redução de ruído operacional",
    "Clareza de prioridades",
    "Mais foco e produtividade real",
    "Processos simples e escaláveis",
    "Equipes alinhadas"
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Método FOCUS™ | Metodologia Gestão Empresarial e Produtividade - Focus</title>
        <meta name="description" content="Método FOCUS™: metodologia completa gestão empresarial em 5 etapas - Fundamento, Organização, Centralização, Utilização Produtiva e Sustentação. Transforme rotinas empresariais com sistemas personalizados, clareza nos processos e foco na execução." />
        <meta name="keywords" content="método focus, metodologia gestão empresarial, método produtividade, transformação empresarial, gestão processos, organização empresarial, centralização operações, sistemas escaláveis, evolução contínua, consultoria metodologia" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://focusinteligente.com.br/focus-club" />
        <meta property="og:title" content="Método FOCUS™ - Metodologia de Gestão Empresarial" />
        <meta property="og:description" content="Metodologia completa em 5 etapas para transformar gestão empresarial: diagnóstico, organização, centralização, aplicação e evolução." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://focusinteligente.com.br/focus-club" />
        <meta property="og:image" content="https://focusinteligente.com.br/lovable-uploads/focus-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Método FOCUS™ - Focus Gestão" />
        <meta name="twitter:description" content="Metodologia completa para transformar gestão empresarial do diagnóstico à evolução contínua." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Método FOCUS™",
            "description": "Metodologia em 5 etapas para transformar gestão empresarial",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Fundamento - Diagnóstico e clareza do cenário",
                "text": "Identificamos os principais gargalos e definimos metas realistas."
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Organização - Estrutura que sustenta o crescimento",
                "text": "Mapeamos processos, definimos prioridades e estruturamos o fluxo de trabalho."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Centralização - Um único ambiente, todas as informações",
                "text": "Implementamos o sistema Notion para reunir tudo em um só lugar."
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Utilização Produtiva - Aplicação prática no dia a dia",
                "text": "Transformamos ferramenta em resultado com hábitos e rotinas produtivas."
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Sustentação - Evolução contínua",
                "text": "O sistema cresce junto com o negócio."
              }
            ],
            "provider": {
              "@type": "Organization",
              "name": "Focus Gestão Empresarial",
              "url": "https://focusinteligente.com.br"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Início",
              "item": "https://focusinteligente.com.br/"
            }, {
              "@type": "ListItem",
              "position": 2,
              "name": "Método FOCUS",
              "item": "https://focusinteligente.com.br/focus-club"
            }]
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-dark py-20">
        <div className="relative z-10 container-focus">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-6 animate-fade-in">
              <Lightbulb className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-foreground-muted">
                Metodologia Focus Gestão Empresarial
              </span>
            </div>
            
            <h1 className="hero-title mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Método FOCUS™
            </h1>
            
            <p className="text-2xl md:text-3xl text-foreground max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '200ms' }}>
              Organize o essencial. Execute com foco. Cresça com clareza.
            </p>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              A Base de Tudo que Fazemos
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed text-center">
              Na Focus Gestão Empresarial, acreditamos que a organização é o ponto de partida para o crescimento. 
              O Método FOCUS™ é uma metodologia prática criada para transformar rotinas e empresas por meio de 
              sistemas personalizados, clareza nos processos e foco na execução. Essa estrutura está presente em 
              todas as nossas soluções — do Sprint de Produtividade à Consultoria Notion — e garante que cada 
              cliente tenha um caminho claro da desorganização à eficiência real.
            </p>
          </div>
        </div>
      </section>

      {/* As 5 Etapas */}
      <section className="section-padding">
        <div className="container-focus">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              As 5 Etapas do Método FOCUS™
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Uma jornada estruturada do diagnóstico à evolução contínua
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card
                  key={step.letter}
                  className="card-hover h-full border-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-elegant"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-8">
                    <div className="relative mb-6 flex justify-start">
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} p-0.5 shadow-lg`}>
                        <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-foreground" />
                        </div>
                      </div>
                      <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} blur-xl opacity-30`} />
                      <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.letter}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-primary font-semibold mb-3">
                      {step.subtitle}
                    </p>

                    <p className="text-foreground-muted">
                      {step.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como Aplicar */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Como Aplicar o Método
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Escolha a solução ideal para o seu momento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <Card
                key={solution.title}
                className={`card-hover h-full border-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-elegant ${
                  solution.highlight ? 'ring-2 ring-primary' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  {solution.highlight && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold mb-4">
                      Mais Completo
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-card-foreground mb-4">
                    {solution.title}
                  </h3>

                  <div className="flex gap-2 mb-4 flex-wrap">
                    {solution.stages.map((stage) => (
                      <div
                        key={stage}
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center text-white font-bold shadow-lg`}
                      >
                        {stage}
                      </div>
                    ))}
                  </div>

                  <p className="text-foreground-muted mb-6">
                    {solution.description}
                  </p>

                  <div className="text-sm text-muted-foreground">
                    Etapas: {solution.stages.join(' + ')}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="section-padding">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
              Resultados Esperados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((result, index) => (
                <div
                  key={result}
                  className="flex items-start gap-4 p-6 rounded-lg bg-card border border-primary/10 animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground text-lg">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-8">
              <Repeat className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-foreground-muted">
                Transformação Contínua
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Pronto para Transformar o Caos em Clareza?
            </h2>
            
            <p className="text-xl text-foreground-muted mb-12 max-w-3xl mx-auto">
              O Método FOCUS™ é mais que uma metodologia — é uma nova forma de enxergar 
              a produtividade e a gestão empresarial. Comece hoje a transformar o caos em clareza.
            </p>

            <Button className="btn-hero group" asChild>
              <Link to="/sistemas-notion">
                Aplicar o Método FOCUS™ no meu negócio
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FocusClub;