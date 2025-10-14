import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  const [selectedBenefit, setSelectedBenefit] = useState<number | null>(null);
  const benefits = [
    {
      icon: Layers,
      title: "Centralização Total",
      description: "Todos os processos, dados e informações em um só lugar, organizados e acessíveis.",
      gradient: "from-blue-500 to-cyan-500",
      details: "Acabe com a fragmentação de informações entre diferentes ferramentas e planilhas. Nosso sistema centraliza absolutamente tudo em um único workspace Notion: processos operacionais, dados de clientes, projetos, tarefas, documentos, conhecimento interno e muito mais. Tudo perfeitamente organizado, com navegação intuitiva e busca poderosa. Sua equipe acessa tudo que precisa em segundos, de qualquer lugar, em qualquer dispositivo."
    },
    {
      icon: Zap,
      title: "Automação Inteligente",
      description: "Workflows automatizados que eliminam trabalho manual e reduzem erros.",
      gradient: "from-orange-500 to-red-500",
      details: "Chega de tarefas repetitivas e manuais que consomem tempo precioso. Implementamos automações inteligentes usando Make, Zapier e as próprias ferramentas do Notion. Atualizações automáticas de status, notificações personalizadas, geração de relatórios, sincronização entre databases, e muito mais. As automações trabalham 24/7 para você, eliminando erros humanos e liberando sua equipe para focar no que realmente importa."
    },
    {
      icon: BarChart3,
      title: "Visão Estratégica",
      description: "Dashboards e relatórios que transformam dados em insights acionáveis.",
      gradient: "from-purple-500 to-pink-500",
      details: "Dados soltos não servem para nada. Transformamos seus dados em dashboards visuais e intuitivos que mostram exatamente o que você precisa saber para tomar decisões estratégicas. KPIs em tempo real, gráficos interativos, análises de tendências, comparativos de performance e muito mais. Tudo atualizado automaticamente e acessível em uma visão executiva clara e objetiva. Decisões baseadas em dados reais, não em suposições."
    },
    {
      icon: Shield,
      title: "Segurança e Controle",
      description: "Permissões personalizadas e controle total sobre acesso às informações.",
      gradient: "from-green-500 to-emerald-500",
      details: "Segurança e privacidade são prioridades absolutas. Configuramos permissões granulares para cada membro da equipe, garantindo que cada pessoa veja apenas o que precisa ver. Controle total sobre edição, visualização e compartilhamento. Histórico completo de alterações, backups automáticos e possibilidade de restaurar versões anteriores. Seus dados corporativos protegidos e organizados com o mais alto nível de segurança."
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
        <div className="relative z-10 container-focus">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
              <Database className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-foreground-muted">
                Consultoria Notion Personalizada
              </span>
            </div>
            
            <h1 className="hero-title mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Processos soltos? Centralize tudo em um sistema sob medida.
            </h1>
            
            <p className="hero-subtitle mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Criamos sistemas empresariais no Notion que organizam operações, eliminam retrabalho e entregam relatórios estratégicos para decisões mais rápidas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
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
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.title} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <Card 
                    className="card-hover h-full border-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-elegant cursor-pointer"
                    onClick={() => setSelectedBenefit(index)}
                  >
                    <div className="p-8">
                      <div className="relative mb-6 flex justify-start">
                        <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-0.5 shadow-lg`}>
                          <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                            <IconComponent className="w-7 h-7 text-foreground" />
                          </div>
                        </div>
                        <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} blur-xl opacity-30`} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-foreground-muted mb-4">
                        {benefit.description}
                      </p>
                      <p className="text-sm text-primary hover:text-primary/80 transition-colors">
                        Clique para saber mais →
                      </p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Benefits Details Dialog */}
          <Dialog open={selectedBenefit !== null} onOpenChange={(open) => !open && setSelectedBenefit(null)}>
            <DialogContent className="max-w-2xl">
              {selectedBenefit !== null && (
                <>
                  <DialogHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${benefits[selectedBenefit].gradient} p-0.5 shadow-lg`}>
                        <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                          {(() => {
                            const IconComponent = benefits[selectedBenefit].icon;
                            return <IconComponent className="w-8 h-8 text-foreground" />;
                          })()}
                        </div>
                      </div>
                      <div className="text-left">
                        <DialogTitle className="text-2xl">
                          {benefits[selectedBenefit].title}
                        </DialogTitle>
                      </div>
                    </div>
                    <DialogDescription className="text-base leading-relaxed text-foreground-muted">
                      {benefits[selectedBenefit].details}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    <Button 
                      className="btn-hero w-full group"
                      onClick={() => window.open('https://gestaofocus.notion.site/276be653a5aa80818bd3d4ca142884f6?pvs=105', '_blank')}
                    >
                      Analisar meu negócio
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
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