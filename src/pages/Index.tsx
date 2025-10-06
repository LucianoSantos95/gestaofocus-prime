import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Database, 
  Zap, 
  Building2, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Target,
  TrendingUp,
  Workflow
} from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Sistemas Notion Personalizados",
      description: "Desenvolva sistemas empresariais sob medida no Notion para centralizar operações, otimizar processos e ter dashboards estratégicos em tempo real.",
      features: [
        "Templates customizados para sua empresa",
        "Automações inteligentes",
        "Dashboards executivos",
        "Integração com ferramentas existentes"
      ],
      href: "/sistemas-notion",
      icon: <Database className="w-7 h-7" />,
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Sprint de Produtividade Empresarial",
      description: "Programa intensivo de 7 dias com metodologias de produtividade, gestão de tempo e ferramentas práticas para transformar sua rotina profissional.",
      features: [
        "Metodologias comprovadas",
        "Exercícios práticos diários",
        "Acompanhamento personalizado",
        "Ferramentas de produtividade"
      ],
      href: "/sprint-produtividade",
      icon: <Zap className="w-7 h-7" />,
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Hub Empresarial Pro",
      description: "Sistema completo de gestão empresarial com controle financeiro, CRM integrado, dashboards em tempo real e relatórios automáticos para decisões estratégicas.",
      features: [
        "Controle financeiro completo",
        "CRM integrado",
        "Dashboards em tempo real",
        "Relatórios automáticos"
      ],
      href: "/hub-empresarial",
      icon: <Building2 className="w-7 h-7" />,
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Focus Club - Comunidade Empresarial",
      description: "Comunidade exclusiva de empreendedores e gestores com aprendizado contínuo em produtividade, otimização de processos, gestão estratégica e networking qualificado.",
      features: [
        "Aulas exclusivas semanais",
        "Networking qualificado",
        "Mentorias em grupo",
        "Recursos exclusivos"
      ],
      href: "/focus-club",
      icon: <Users className="w-7 h-7" />,
      gradient: "from-pink-500/20 to-violet-500/20"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Serviços de Consultoria e Sistemas Empresariais
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Soluções completas em gestão empresarial: sistemas Notion personalizados, 
              sprint de produtividade, hub empresarial e comunidade exclusiva para transformar 
              processos e aumentar resultados com metodologias comprovadas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <Card 
                  className="card-hover h-full border-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-elegant cursor-pointer"
                  onClick={() => window.location.href = service.href}
                >
                  <div className="p-8">
                    <div className="relative mb-6 flex justify-start">
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 shadow-lg`}>
                        <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                          {service.icon}
                        </div>
                      </div>
                      <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-30`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-foreground-muted mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-foreground-muted">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-primary hover:text-primary/80 transition-colors">
                      Saiba mais →
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Focus Section */}
      <section className="section-padding">
        <div className="container-focus">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Consultoria Especializada em Gestão Empresarial
              </h2>
              <p className="text-xl text-foreground-muted leading-relaxed mb-8">
                A Focus é referência em consultoria empresarial, sistemas Notion personalizados e 
                metodologias de produtividade. Transformamos a gestão de empresas e profissionais 
                por meio de processos otimizados, automação inteligente, dashboards estratégicos e 
                soluções escaláveis que geram crescimento sustentável e resultados mensuráveis.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground-muted">Metodologia comprovada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground-muted">Suporte especializado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground-muted">Resultados garantidos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground-muted">Sistemas personalizados</span>
                </div>
              </div>
              <Button 
                className="btn-hero group"
                onClick={() => window.open('https://wa.me/5511916742443?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20personaliza%C3%A7%C3%A3o%20de%20sistemas.', '_blank')}
              >
                Conhecer a Focus
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="card-hover border-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-elegant">
                <div className="p-6">
                  <div className="relative mb-4 flex justify-start">
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5 shadow-lg">
                      <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                        <Target className="w-7 h-7 text-foreground" />
                      </div>
                    </div>
                    <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 blur-xl opacity-30" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Foco em Resultados</h3>
                  <p className="text-foreground-muted">
                    Cada solução é desenvolvida com foco em gerar resultados mensuráveis 
                    para o seu negócio.
                  </p>
                </div>
              </Card>
              
              <Card className="card-hover border-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-elegant">
                <div className="p-6">
                  <div className="relative mb-4 flex justify-start">
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 p-0.5 shadow-lg">
                      <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                        <TrendingUp className="w-7 h-7 text-foreground" />
                      </div>
                    </div>
                    <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 blur-xl opacity-30" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Crescimento Sustentável</h3>
                  <p className="text-foreground-muted">
                    Implementamos sistemas que crescem junto com sua empresa, 
                    sempre escaláveis e eficientes.
                  </p>
                </div>
              </Card>
              
              <Card className="card-hover border-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-elegant">
                <div className="p-6">
                  <div className="relative mb-4 flex justify-start">
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 shadow-lg">
                      <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                        <Workflow className="w-7 h-7 text-foreground" />
                      </div>
                    </div>
                    <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 blur-xl opacity-30" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Processos Otimizados</h3>
                  <p className="text-foreground-muted">
                    Organizamos e otimizamos seus processos para máxima eficiência 
                    e produtividade.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Transforme sua Gestão Empresarial Hoje
            </h2>
            <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
              Implemente sistemas empresariais personalizados, otimize processos e aumente 
              a produtividade da sua equipe. Consultoria especializada para crescimento real. 
              Entre em contato e descubra nossas soluções.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="btn-hero group"
                onClick={() => window.open('https://wa.me/5511916742443?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20personaliza%C3%A7%C3%A3o%20de%20sistemas.', '_blank')}
              >
                Fale com a Focus
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                className="btn-secondary"
                onClick={() => window.open('https://www.notion.com/pt/@focusgestao', '_blank')}
              >
                Conhecer sistema gratuito
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;