import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
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
      title: "Sistemas Personalizados Notion",
      description: "Construa um sistema sob medida para centralizar operações, processos e gestão do seu negócio.",
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
      title: "Sprint de Produtividade",
      description: "7 dias para transformar sua rotina com aulas práticas e aplicação diária.",
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
      description: "A ferramenta completa para gerir seu negócio com visão financeira, comercial e estratégica.",
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
      title: "Comunidade Focus Club",
      description: "Aprendizado contínuo em produtividade, processos e gestão com networking qualificado.",
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
              Nossos Serviços
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Soluções completas para transformar sua gestão empresarial e aumentar 
              sua produtividade com metodologias comprovadas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
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
                Sobre a Focus
              </h2>
              <p className="text-xl text-foreground-muted leading-relaxed mb-8">
                Somos especialistas em gestão empresarial e produtividade. Ajudamos empresas 
                e profissionais a crescerem com eficiência por meio de sistemas personalizados, 
                processos organizados e metodologias comprovadas que geram resultados reais.
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
              <div className="service-card">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-card-foreground mb-3">Foco em Resultados</h3>
                <p className="text-foreground-muted">
                  Cada solução é desenvolvida com foco em gerar resultados mensuráveis 
                  para o seu negócio.
                </p>
              </div>
              
              <div className="service-card">
                <TrendingUp className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-card-foreground mb-3">Crescimento Sustentável</h3>
                <p className="text-foreground-muted">
                  Implementamos sistemas que crescem junto com sua empresa, 
                  sempre escaláveis e eficientes.
                </p>
              </div>
              
              <div className="service-card">
                <Workflow className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-card-foreground mb-3">Processos Otimizados</h3>
                <p className="text-foreground-muted">
                  Organizamos e otimizamos seus processos para máxima eficiência 
                  e produtividade.
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
              Pronto para evoluir sua gestão?
            </h2>
            <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
              Vamos construir juntos o sistema perfeito para o seu negócio. 
              Entre em contato e descubra como podemos ajudar.
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