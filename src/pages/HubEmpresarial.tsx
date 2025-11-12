import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
import { trackStripeClick, trackNotionClick, trackCTAClick } from "@/lib/analytics";

const HubEmpresarial = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [selectedAdvantage, setSelectedAdvantage] = useState<number | null>(null);
  const features = [
    {
      icon: DollarSign,
      title: "Controle Financeiro",
      description: "Fluxo de caixa, contas a pagar/receber, relatórios financeiros e análise de rentabilidade.",
      details: ["Dashboard financeiro", "Previsão de caixa", "Relatórios automáticos", "Controle de custos"],
      gradient: "from-green-500 to-emerald-500",
      fullDetails: "Tenha controle total sobre as finanças da sua empresa com nosso módulo financeiro completo. Acompanhe o fluxo de caixa em tempo real com gráficos intuitivos, gerencie todas as contas a pagar e receber com alertas automáticos de vencimento, gere relatórios financeiros detalhados com apenas um clique, analise a rentabilidade por produto, serviço ou projeto. Inclui previsão de caixa inteligente, controle de despesas por categoria, conciliação bancária automatizada e muito mais. Tome decisões financeiras com dados precisos e atualizados."
    },
    {
      icon: Users,
      title: "Área Comercial",
      description: "CRM completo, pipeline de vendas, controle de leads e acompanhamento de performance.",
      details: ["Gestão de leads", "Pipeline visual", "Histórico de contatos", "Metas de vendas"],
      gradient: "from-blue-500 to-cyan-500",
      fullDetails: "Transforme sua gestão comercial com um CRM completo e intuitivo. Organize todos os seus leads em um funil visual interativo, acompanhe cada etapa da jornada do cliente, registre todas as interações e histórico de comunicação, defina e monitore metas de vendas individuais e da equipe. O sistema inclui pontuação automática de leads, notificações de follow-up, relatórios de performance de vendedores, previsão de fechamento e integração com WhatsApp e email. Nunca mais perca uma oportunidade de venda."
    },
    {
      icon: BarChart3,
      title: "Marketing Integrado",
      description: "Campanhas, métricas, ROI e análise de performance de todos os canais de marketing.",
      details: ["Tracking de campanhas", "ROI por canal", "Análise de conversão", "Planejamento"],
      gradient: "from-purple-500 to-pink-500",
      fullDetails: "Gerencie todas as suas campanhas de marketing em um único lugar. Planeje e acompanhe campanhas de todos os canais (Facebook, Instagram, Google Ads, Email Marketing), calcule automaticamente o ROI de cada campanha, analise taxas de conversão em cada etapa do funil, visualize métricas unificadas de performance. Inclui calendário editorial, biblioteca de criativos, controle de orçamento por campanha, análise de público e relatórios visuais personalizados. Maximize seus resultados com decisões baseadas em dados reais."
    },
    {
      icon: Headphones,
      title: "Suporte ao Cliente",
      description: "Sistema de tickets, base de conhecimento e acompanhamento de satisfação.",
      details: ["Gestão de tickets", "SLA automático", "Base de conhecimento", "NPS integrado"],
      gradient: "from-orange-500 to-red-500",
      fullDetails: "Eleve o nível do seu atendimento ao cliente com um sistema completo de suporte. Gerencie todos os tickets de suporte em uma interface organizada, controle automaticamente os SLAs e prazos de resposta, crie uma base de conhecimento para reduzir tickets repetitivos, meça a satisfação com pesquisas NPS integradas. O sistema inclui categorização automática de tickets, distribuição inteligente entre atendentes, histórico completo do cliente, relatórios de tempo de resposta e resolução, e muito mais. Clientes satisfeitos, negócio crescendo."
    }
  ];

  const advantages = [
    {
      icon: TrendingUp,
      title: "Analytics Inteligente",
      description: "Dashboards em tempo real com insights automáticos e análise preditiva para tomada de decisões estratégicas.",
      gradient: "from-cyan-500 to-blue-500",
      details: "Transforme dados em decisões estratégicas com nosso módulo de analytics inteligente. Visualize KPIs essenciais em dashboards customizáveis que atualizam em tempo real, receba insights automáticos sobre tendências e anomalias nos seus dados, use análise preditiva para antecipar cenários futuros e planejar com antecedência. O sistema cruza dados de todos os módulos para gerar análises completas: correlação entre investimento em marketing e vendas, impacto do atendimento na retenção, saúde financeira projetada e muito mais. Relatórios visuais e executivos gerados automaticamente."
    },
    {
      icon: Zap,
      title: "Automações Avançadas",
      description: "Workflows automatizados que conectam todos os setores, eliminando trabalho manual e reduzindo erros.",
      gradient: "from-yellow-500 to-orange-500",
      details: "Elimine tarefas repetitivas e ganhe horas no seu dia com automações inteligentes. Configure workflows que conectam diferentes módulos: quando um lead vira cliente no CRM, cria automaticamente no financeiro e envia boas-vindas; quando um pagamento atrasa, cria ticket de cobrança automático; quando meta é batida, notifica a equipe e atualiza dashboard. Inclui automações de email, notificações, atualizações de status, cálculos financeiros, distribuição de tarefas e muito mais. Tudo funciona 24/7 sem intervenção manual, reduzindo erros humanos e aumentando eficiência operacional."
    },
    {
      icon: Shield,
      title: "Segurança Enterprise",
      description: "Controle granular de permissões, backup automático e conformidade com LGPD garantida.",
      gradient: "from-emerald-500 to-green-500",
      details: "Seus dados empresariais protegidos com segurança de nível corporativo. Configure permissões granulares: cada usuário vê e edita apenas o que é relevante para sua função, com controle por módulo, página e até campo específico. Backup automático diário com versionamento, permitindo recuperar qualquer informação de até 30 dias atrás. Sistema 100% em conformidade com LGPD: registro de acessos, consentimento documentado, portabilidade e exclusão de dados sob demanda. Inclui autenticação de dois fatores, log de auditoria completo, criptografia de dados sensíveis e políticas de retenção customizáveis."
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
    <div className="min-h-screen">
      <Helmet>
        <title>Hub Empresarial PRO | Sistema Completo Gestão Empresarial - Focus</title>
        <meta name="description" content="Sistema integrado completo para gestão empresarial: controle financeiro com fluxo caixa, CRM com pipeline vendas, marketing integrado, suporte cliente e dashboards em tempo real. Centralize tudo em um único lugar." />
        <meta name="keywords" content="hub empresarial, sistema gestão empresarial, ERP notion, controle financeiro empresarial, CRM vendas, gestão marketing, suporte cliente, dashboards executivos, gestão integrada, software gestão, analytics empresarial" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://focusinteligente.com.br/hub-empresarial" />
        <meta property="og:title" content="Hub Empresarial PRO - Sistema Completo de Gestão" />
        <meta property="og:description" content="Sistema integrado: financeiro, CRM, marketing, suporte e analytics. Dashboards em tempo real para decisões estratégicas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://focusinteligente.com.br/hub-empresarial" />
        <meta property="og:image" content="https://focusinteligente.com.br/lovable-uploads/focus-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hub Empresarial PRO - Focus" />
        <meta name="twitter:description" content="Sistema completo de gestão empresarial com módulos integrados e dashboards em tempo real." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Hub Empresarial PRO",
            "applicationCategory": "BusinessApplication",
            "description": "Sistema integrado de gestão empresarial com controle financeiro, CRM, marketing, suporte e analytics",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "297",
              "priceCurrency": "BRL",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "100",
              "bestRating": "5"
            },
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
              "name": "Hub Empresarial",
              "item": "https://focusinteligente.com.br/hub-empresarial"
            }]
          })}
        </script>
      </Helmet>
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 border-b border-yellow-500/30">
        <div className="container-focus py-3">
          <div className="flex items-center justify-center gap-2 text-center">
            <Zap className="w-4 h-4 text-yellow-500 animate-pulse" />
            <span className="text-sm font-semibold text-foreground">
              🔥 Oferta de Lançamento: Apenas R$ 349 (valor normal R$ 497) • Últimas 15 vagas
            </span>
            <Zap className="w-4 h-4 text-yellow-500 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-dark">
        <div className="relative z-10 container-focus">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
              <Building2 className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-foreground-muted">
                Hub Empresarial Pro
              </span>
            </div>
            
            <h1 className="hero-title mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              A ferramenta completa para gerir seu negócio
            </h1>
            
            <p className="hero-subtitle mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Sistema integrado que centraliza financeiro, comercial, marketing e suporte, 
              oferecendo visão estratégica completa do seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Button 
                className="btn-hero group"
                onClick={() => {
                  trackStripeClick('hero_cta');
                  trackCTAClick('Comece agora', 'hero');
                  window.open('https://buy.stripe.com/fZu28rbs8gN73ta6F7gUM0d', '_blank');
                }}
              >
                Comece agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                className="btn-secondary"
                onClick={() => {
                  trackNotionClick('hub_pro', 'hero');
                  trackCTAClick('Ver demonstração', 'hero');
                  window.open('https://www.notion.com/templates/hub-empresarial-pro', '_blank');
                }}
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
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <Card 
                    className="card-hover h-full border-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-elegant cursor-pointer"
                    onClick={() => setSelectedFeature(index)}
                  >
                    <div className="p-8">
                      <div className="relative mb-6 flex justify-start">
                        <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 shadow-lg`}>
                          <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                            <IconComponent className="w-7 h-7 text-foreground" />
                          </div>
                        </div>
                        <div className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-30`} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-card-foreground mb-3">
                        {feature.title}
                      </h3>
                      
                      <p className="text-foreground-muted mb-6">
                        {feature.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        {feature.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center text-sm text-foreground-muted">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                            {detail}
                          </div>
                        ))}
                      </div>

                      <p className="text-sm text-primary hover:text-primary/80 transition-colors">
                        Clique para saber mais →
                      </p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Features Dialog */}
          <Dialog open={selectedFeature !== null} onOpenChange={(open) => !open && setSelectedFeature(null)}>
            <DialogContent className="max-w-2xl">
              {selectedFeature !== null && (
                <>
                  <DialogHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${features[selectedFeature].gradient} p-0.5 shadow-lg`}>
                        <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                          {(() => {
                            const IconComponent = features[selectedFeature].icon;
                            return <IconComponent className="w-8 h-8 text-foreground" />;
                          })()}
                        </div>
                      </div>
                      <div className="text-left">
                        <DialogTitle className="text-2xl">
                          {features[selectedFeature].title}
                        </DialogTitle>
                      </div>
                    </div>
                    <DialogDescription className="text-base leading-relaxed text-foreground-muted">
                      {features[selectedFeature].fullDetails}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    <Button 
                      className="btn-hero w-full group"
                      onClick={() => {
                        trackNotionClick('hub_pro', 'feature_dialog');
                        trackCTAClick('Ver demonstração', 'feature_dialog');
                        window.open('https://www.notion.com/templates/hub-empresarial-pro', '_blank');
                      }}
                    >
                      Ver demonstração completa
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
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
                onClick={() => {
                  trackNotionClick('hub_pro', 'benefits');
                  trackCTAClick('Solicitar demonstração', 'benefits');
                  window.open('https://www.notion.com/templates/hub-empresarial-pro', '_blank');
                }}
              >
                Solicitar demonstração
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="space-y-6">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <div key={advantage.title}>
                    <Card 
                      className="card-hover border-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-elegant cursor-pointer"
                      onClick={() => setSelectedAdvantage(index)}
                    >
                      <div className="p-6">
                        <div className="relative mb-4 flex justify-start">
                          <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${advantage.gradient} p-0.5 shadow-lg`}>
                            <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                              <IconComponent className="w-7 h-7 text-foreground" />
                            </div>
                          </div>
                          <div className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${advantage.gradient} blur-xl opacity-30`} />
                        </div>
                        <h3 className="text-xl font-bold text-card-foreground mb-3">
                          {advantage.title}
                        </h3>
                        <p className="text-foreground-muted mb-3">
                          {advantage.description}
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

            {/* Advantages Dialog */}
            <Dialog open={selectedAdvantage !== null} onOpenChange={(open) => !open && setSelectedAdvantage(null)}>
              <DialogContent className="max-w-2xl">
                {selectedAdvantage !== null && (
                  <>
                    <DialogHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${advantages[selectedAdvantage].gradient} p-0.5 shadow-lg`}>
                          <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                            {(() => {
                              const IconComponent = advantages[selectedAdvantage].icon;
                              return <IconComponent className="w-8 h-8 text-foreground" />;
                            })()}
                          </div>
                        </div>
                        <div className="text-left">
                          <DialogTitle className="text-2xl">
                            {advantages[selectedAdvantage].title}
                          </DialogTitle>
                        </div>
                      </div>
                      <DialogDescription className="text-base leading-relaxed text-foreground-muted">
                        {advantages[selectedAdvantage].details}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-6">
                      <Button 
                        className="btn-hero w-full group"
                        onClick={() => {
                          trackStripeClick('advantage_dialog');
                          trackCTAClick('Comece agora', 'advantage_dialog');
                          window.open('https://buy.stripe.com/fZu28rbs8gN73ta6F7gUM0d', '_blank');
                        }}
                      >
                        Comece agora
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </>
                )}
              </DialogContent>
            </Dialog>
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

      {/* Guarantee Section */}
      <section className="section-padding">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="p-8 md:p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
                  <Shield className="w-10 h-10" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Garantia de 30 Dias
                </h2>
                <p className="text-xl text-foreground-muted mb-6 max-w-2xl mx-auto">
                  Se em 30 dias você não perceber melhoria significativa na organização 
                  e eficiência do seu negócio, devolvemos 100% do seu investimento.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground-muted">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Sem perguntas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Reembolso total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Suporte completo incluído</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Pronto para revolucionar sua gestão?
            </h2>
            <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
              Garanta sua vaga na oferta de lançamento. Apenas R$ 349 (valor normal R$ 497).
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="btn-hero group"
                onClick={() => {
                  trackStripeClick('cta_final');
                  trackCTAClick('Garantir minha vaga', 'cta');
                  window.open('https://buy.stripe.com/fZu28rbs8gN73ta6F7gUM0d', '_blank');
                }}
              >
                Garantir minha vaga agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                className="btn-secondary"
                onClick={() => {
                  trackNotionClick('hub_pro', 'cta_secondary');
                  trackCTAClick('Ver demonstração', 'cta');
                  window.open('https://www.notion.com/templates/hub-empresarial-pro', '_blank');
                }}
              >
                Ver demonstração
              </Button>
            </div>
            <p className="text-sm text-foreground-muted mt-4">
              🔒 Garantia de 30 dias • Últimas 15 vagas disponíveis
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HubEmpresarial;