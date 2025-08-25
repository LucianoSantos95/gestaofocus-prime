import { Button } from "@/components/ui/button";
import { 
  Building2, 
  ArrowRight, 
  CheckCircle, 
  DollarSign,
  Users,
  BarChart3,
  Headphones,
  Zap,
  Shield,
  TrendingUp
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HubEmpresarial = () => {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Controle Financeiro",
      description: "Fluxo de caixa, contas a pagar/receber, relatórios financeiros e análise de rentabilidade.",
      details: ["Dashboard financeiro", "Previsão de caixa", "Relatórios automáticos", "Controle de custos"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Área Comercial",
      description: "CRM completo, pipeline de vendas, controle de leads e acompanhamento de performance.",
      details: ["Gestão de leads", "Pipeline visual", "Histórico de contatos", "Metas de vendas"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Marketing Integrado",
      description: "Campanhas, métricas, ROI e análise de performance de todos os canais de marketing.",
      details: ["Tracking de campanhas", "ROI por canal", "Análise de conversão", "Planejamento"]
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Suporte ao Cliente",
      description: "Sistema de tickets, base de conhecimento e acompanhamento de satisfação.",
      details: ["Gestão de tickets", "SLA automático", "Base de conhecimento", "NPS integrado"]
    }
  ];

  const benefits = [
    "Visão completa do negócio em um só lugar",
    "Dashboards em tempo real",
    "Integração entre todas as áreas", 
    "Controle de permissões por usuário",
    "Backup automático na nuvem",
    "Suporte técnico especializado"
  ];

  const carouselImages = [
    {
      src: "/lovable-uploads/e7cb35d7-2048-4ad6-841f-d0cebc69f29b.png",
      alt: "Hub Empresarial Dashboard"
    },
    {
      src: "/lovable-uploads/9a534dd9-2fc7-4069-b764-020f532fe69c.png",
      alt: "Módulo Finanças"
    },
    {
      src: "/lovable-uploads/2f76d4c5-3684-494b-b193-4b8f4a3c15fb.png",
      alt: "Módulo Projetos"
    },
    {
      src: "/lovable-uploads/b1b84ecc-e932-4297-af10-a6f7bc45041d.png",
      alt: "Módulo Atividades"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "R$ 297",
      period: "mensal",
      description: "Para pequenas empresas iniciando a organização",
      features: [
        "Até 5 usuários",
        "Módulos básicos",
        "Suporte por email",
        "1 integração inclusa"
      ],
      highlighted: false
    },
    {
      name: "Professional", 
      price: "R$ 497",
      period: "mensal",
      description: "Para empresas em crescimento",
      features: [
        "Até 15 usuários",
        "Todos os módulos",
        "Suporte prioritário",
        "5 integrações inclusas",
        "Relatórios avançados",
        "Personalização básica"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Sob consulta",
      period: "",
      description: "Para grandes empresas", 
      features: [
        "Usuários ilimitados",
        "Personalização completa",
        "Suporte dedicado",
        "Integrações ilimitadas",
        "Treinamento incluído",
        "SLA garantido"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-8">
              <Building2 className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-foreground-muted">
                Hub Empresarial Pro
              </span>
            </div>
            
            <h1 className="hero-title mb-6">
              A ferramenta completa para gerir seu negócio
            </h1>
            
            <p className="hero-subtitle mb-12 max-w-3xl mx-auto">
              Sistema integrado que centraliza financeiro, comercial, marketing e suporte, 
              oferecendo visão estratégica completa do seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="btn-hero group"
                onClick={() => window.open('https://buy.stripe.com/8x23cv2VCbsN1l2aVngUM0b', '_blank')}
              >
                Comece agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                className="btn-secondary"
                onClick={() => window.open('https://www.notion.com/templates/hub-empresarial-pro', '_blank')}
              >
                Ver demonstração
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-foreground-muted">Módulos integrados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">+100</div>
                <div className="text-sm text-foreground-muted">Downloads</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Funcionalidades completas
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Cada módulo foi desenvolvido para trabalhar em perfeita sintonia, 
              oferecendo uma visão 360° do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="service-card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-foreground-muted mb-6">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-sm text-foreground-muted">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {detail}
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
                Por que escolher o Hub Empresarial?
              </h2>
              <p className="text-xl text-foreground-muted leading-relaxed mb-8">
                Mais que um software, é a evolução da gestão empresarial. 
                Integração total, insights inteligentes e crescimento sustentável.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground-muted">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="btn-hero group"
                onClick={() => window.open('https://www.notion.com/templates/hub-empresarial-pro', '_blank')}
              >
                Solicitar demonstração
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="service-card">
                <TrendingUp className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-card-foreground mb-3">Analytics Inteligente</h3>
                <p className="text-foreground-muted">
                  Dashboards em tempo real com insights automáticos e análise preditiva 
                  para tomada de decisões estratégicas.
                </p>
              </div>
              
              <div className="service-card">
                <Zap className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-card-foreground mb-3">Automações Avançadas</h3>
                <p className="text-foreground-muted">
                  Workflows automatizados que conectam todos os setores, 
                  eliminando trabalho manual e reduzindo erros.
                </p>
              </div>
              
              <div className="service-card">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-card-foreground mb-3">Segurança Enterprise</h3>
                <p className="text-foreground-muted">
                  Controle granular de permissões, backup automático e 
                  conformidade com LGPD garantida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Conheça mais
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Explore as principais funcionalidades do Hub Empresarial Pro 
              através das imagens dos módulos em ação.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="service-card p-1">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Pronto para revolucionar sua gestão?
            </h2>
            <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
              Experimente o Hub Empresarial Pro por 14 dias grátis. 
              Sem compromisso, com suporte completo para implementação.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="btn-hero group"
                onClick={() => window.open('https://www.notion.com/templates/hub-empresarial-free', '_blank')}
              >
                Começar teste gratuito
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                className="btn-secondary"
                onClick={() => window.open('https://www.notion.com/templates/hub-empresarial-pro', '_blank')}
              >
                Agendar apresentação
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HubEmpresarial;