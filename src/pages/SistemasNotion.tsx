import { Button } from "@/components/ui/button";
import { 
  Database, 
  ArrowRight, 
  CheckCircle, 
  Layers,
  BarChart3,
  Workflow,
  Zap,
  Shield
} from "lucide-react";

const SistemasNotion = () => {
  const benefits = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Centralização Total",
      description: "Todos os processos, dados e informações em um só lugar, organizados e acessíveis."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automação Inteligente",
      description: "Workflows automatizados que eliminam trabalho manual e reduzem erros."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Visão Estratégica",
      description: "Dashboards e relatórios que transformam dados em insights acionáveis."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Segurança e Controle",
      description: "Permissões personalizadas e controle total sobre acesso às informações."
    }
  ];

  const features = [
    "Páginas personalizados para seu setor",
    "Dashboards executivos em tempo real",
    "Integrações com ferramentas existentes",
    "Banco de dados relacionais",
    "Sistema de permissões avançado",
    "Relatórios automáticos",
    "Suporte e treinamento inclusos"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-8">
              <Database className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-foreground-muted">
                Sistemas Personalizados Notion
              </span>
            </div>
            
            <h1 className="hero-title mb-6">
              Processos soltos? Centralize tudo em um sistema sob medida.
            </h1>
            
            <p className="hero-subtitle mb-12 max-w-3xl mx-auto">
              Criamos sistemas empresariais no Notion que organizam operações, eliminam retrabalho e entregam relatórios estratégicos para decisões mais rápidas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="btn-hero group"
                onClick={() => window.open('https://gestaofocus.notion.site/276be653a5aa80818bd3d4ca142884f6?pvs=105', '_blank')}
              >
                Analisar meu negócio
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                className="btn-secondary"
                onClick={() => window.open('https://www.notion.com/pt/@focusgestao', '_blank')}
              >
                Ver exemplos de sistemas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Por que escolher nossos sistemas?
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Cada sistema é desenvolvido especificamente para as necessidades do seu negócio, 
              garantindo máxima eficiência e resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="service-card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-foreground-muted">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-focus">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                O que está incluído
              </h2>
              <p className="text-xl text-foreground-muted leading-relaxed mb-8">
                Desenvolvemos uma solução completa, personalizada para sua empresa, 
                com tudo que você precisa para organizar e fazer crescer seu negócio.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground-muted">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="btn-hero group"
                onClick={() => window.open('https://gestaofocus.notion.site/276be653a5aa80818bd3d4ca142884f6?pvs=105', '_blank')}
              >
                Analisar meu negócio
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="relative">
              <div className="service-card p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-sm text-foreground-muted">Sistema Empresarial</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
                    <span className="text-sm text-foreground-muted">Dashboard Executivo</span>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
                    <span className="text-sm text-foreground-muted">Gestão de Projetos</span>
                    <BarChart3 className="w-4 h-4 text-primary" />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
                    <span className="text-sm text-foreground-muted">Controle Financeiro</span>
                    <Workflow className="w-4 h-4 text-primary" />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
                    <span className="text-sm text-foreground-muted">Base de Clientes</span>
                    <Database className="w-4 h-4 text-primary" />
                  </div>
                </div>
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
              Pronto para ter seu sistema personalizado?
            </h2>
            <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
              Vamos conversar sobre suas necessidades e criar a solução perfeita 
              para o seu negócio. Solicite uma consultoria gratuita.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="btn-hero group"
                onClick={() => window.open('https://gestaofocus.notion.site/276be653a5aa80818bd3d4ca142884f6?pvs=105', '_blank')}
              >
                Analisar meu negócio
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                className="btn-secondary"
                onClick={() => window.open('https://www.notion.com/pt/@focusgestao', '_blank')}
              >
                Ver portfólio de sistemas
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SistemasNotion;