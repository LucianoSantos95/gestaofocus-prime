import { Button } from "@/components/ui/button";
import { 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Clock,
  Target,
  BookOpen,
  Users,
  Award
} from "lucide-react";

const SprintProdutividade = () => {
  const dailyProgram = [
    {
      day: "Dia 1",
      title: "Captura mental",
      topics: ["Transforme o caos mental em clareza organizando pensamentos, ideias e preocupações em um único espaço."]
    },
    {
      day: "Dia 2", 
      title: "Classificação de tarefas",
      topics: ["Aprenda a priorizar com clareza o que é urgente, importante ou apenas ruído."]
    },
    {
      day: "Dia 3",
      title: "Semana ideal",
      topics: ["Crie uma visão realista da semana distribuindo suas atividades com equilíbrio."]
    },
    {
      day: "Dia 4",
      title: "Cortando distrações", 
      topics: ["Mapeie o que rouba seu foco e crie um plano simples para manter a mente limpa."]
    },
    {
      day: "Dia 5",
      title: "Rotina estratégica",
      topics: ["Construa uma rotina sob medida para sua realidade, seus objetivos e seu ritmo."]
    },
    {
      day: "Dia 6",
      title: "Organização digital",
      topics: ["Limpe, organize e otimize seus ambientes digitais para fluir com leveza."]
    },
    {
      day: "Dia 7",
      title: "Planejamento final",
      topics: ["Una tudo em um sistema pessoal e funcional e termine com clareza e direção."]
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Metodologia Comprovada",
      description: "Técnicas testadas e aprovadas por milhares de profissionais."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Aplicação Imediata",
      description: "Cada dia inclui exercícios práticos para aplicar na sua rotina."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Suporte Personalizado",
      description: "Acompanhamento diário para garantir seu sucesso."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Resultados Garantidos",
      description: "Ou devolvemos 100% do seu investimento."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
              <Zap className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-foreground-muted">
                Sprint de Produtividade
              </span>
            </div>
            
            <h1 className="hero-title mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              7 dias para transformar sua rotina
            </h1>
            
            <p className="hero-subtitle mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Um programa intensivo de produtividade com aulas práticas diárias, 
              exercícios aplicados e acompanhamento personalizado para resultados reais.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Button className="btn-hero group" asChild>
                <a href="https://pay.hub.la/bZk8tJXer0JtaUU3l10n" target="_blank" rel="noopener noreferrer">
                  Garanta seu acesso
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              
              <Button variant="outline" className="btn-secondary">
                Ver cronograma completo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">7</div>
                <div className="text-sm text-foreground-muted">Dias de transformação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">+2hrs</div>
                <div className="text-sm text-foreground-muted">Ganho médio diário</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-foreground-muted">Taxa de satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              O que você vai aprender
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Cada dia é cuidadosamente estruturado para construir suas habilidades 
              de produtividade de forma progressiva e sustentável.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {dailyProgram.map((day, index) => (
              <div key={day.day} className="service-card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-sm text-foreground-muted">{day.day}</span>
                </div>
                
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {day.title}
                </h3>
                
                <div className="space-y-2">
                  {day.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center text-sm text-foreground-muted">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-focus">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Por que o Sprint funciona?
              </h2>
              <p className="text-xl text-foreground-muted leading-relaxed mb-8">
                Nosso método combina teoria comprovada com prática intensiva, 
                garantindo que você não apenas aprenda, mas implemente e veja 
                resultados imediatos.
              </p>
              
              <div className="space-y-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={benefit.title} className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-foreground-muted">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="btn-hero group" asChild>
                <a href="https://pay.hub.la/bZk8tJXer0JtaUU3l10n" target="_blank" rel="noopener noreferrer">
                  Começar hoje mesmo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>

            <div className="space-y-6">
              <div className="service-card">
                <BookOpen className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-card-foreground mb-3">Material Exclusivo</h3>
                <p className="text-foreground-muted">
                  Templates, checklists e guias práticos para aplicar imediatamente 
                  em sua rotina de trabalho.
                </p>
              </div>
              
              <div className="service-card">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-card-foreground mb-3">Grupo Exclusivo</h3>
                <p className="text-foreground-muted">
                  Acesso ao grupo privado com outros participantes para trocar 
                  experiências e manter a motivação.
                </p>
              </div>
              
              <div className="service-card">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-card-foreground mb-3">Acompanhamento</h3>
                <p className="text-foreground-muted">
                  Suporte direto durante os 7 dias para esclarecer dúvidas 
                  e garantir sua evolução.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Pronto para a transformação?
            </h2>
            <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de profissionais que já transformaram sua produtividade 
              com nosso Sprint. Garantia de 30 dias ou seu dinheiro de volta.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="btn-hero group" asChild>
                <a href="https://pay.hub.la/bZk8tJXer0JtaUU3l10n" target="_blank" rel="noopener noreferrer">
                  Garantir minha vaga
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button variant="outline" className="btn-secondary">
                Ver depoimentos
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SprintProdutividade;