import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  ArrowRight,
  Shield,
  Zap,
  TrendingUp,
  Star,
  MousePointerClick
} from "lucide-react";
import { trackStripeClick, trackCTAClick } from "@/lib/analytics";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GuaranteeSection from "@/components/GuaranteeSection";
import CouponPopup from "@/components/CouponPopup";

const HubEmpresarial = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  // Módulos do sistema com suas funcionalidades
  const modules = [
    {
      id: "comece-aqui",
      title: "Comece por aqui",
      image: "/lovable-uploads/hub-comece-aqui.png",
      description: "Guia completo para começar a usar o sistema",
      features: [
        "Aulas gravadas para melhor utilização do sistema",
        "Tutorial passo a passo",
        "Dicas de configuração inicial",
        "Suporte via WhatsApp"
      ]
    },
    {
      id: "financeiro",
      title: "Financeiro",
      image: "/lovable-uploads/hub-financeiro.png",
      description: "Controle total das finanças da sua empresa",
      features: [
        "Visão geral mensal",
        "Categorias de despesas e entradas",
        "Entradas e Despesas",
        "Fluxo semanal e mensal - previsto e realizado",
        "Controle de Cartão de crédito",
        "Investimentos e economias",
        "Cadastros de bancos",
        "Controle financeiro mensal",
        "Gráficos para Análise"
      ]
    },
    {
      id: "rh",
      title: "Recursos Humanos",
      image: "/lovable-uploads/hub-rh.png",
      description: "Gestão completa de pessoas e processos de RH",
      features: [
        "Gestão de Pessoas",
        "Gestão de vagas",
        "Onboarding para novos funcionários",
        "Avaliação de desempenho",
        "Controle de Documentos"
      ]
    },
    {
      id: "marketing",
      title: "Marketing",
      image: "/lovable-uploads/hub-marketing.png",
      description: "Organize e potencialize suas estratégias de marketing",
      features: [
        "Tarefas e Responsabilidades + visualização dedicada",
        "Base de análise + visualização dedicada",
        "Controle de campanhas",
        "Ideias de conteúdo",
        "Planejamento de Lançamentos",
        "Monitoramento de concorrência",
        "Recursos e Referências",
        "Post Campeão"
      ]
    },
    {
      id: "projetos",
      title: "Projetos",
      image: "/lovable-uploads/hub-projetos.png",
      description: "Gestão eficiente de todos os seus projetos",
      features: [
        "Controle de Projetos + visualização dedicada",
        "Tarefas de Projetos + visualização dedicada",
        "Análise de riscos de Projetos",
        "Decisões e Mudanças",
        "Marcos e Objetivos"
      ]
    },
    {
      id: "crm",
      title: "CRM",
      image: "/lovable-uploads/hub-crm.png",
      description: "Gerencie leads e vendas de forma profissional",
      features: [
        "Entrada de leads + base dedicada + formulário personalizável",
        "Vendas + visualização dedicada",
        "Documentos e Notas",
        "Base de leads"
      ]
    },
    {
      id: "atividades",
      title: "Atividades",
      image: "/lovable-uploads/hub-atividades.png",
      description: "Organize tarefas, reuniões e processos diários",
      features: [
        "Tarefas Gerais + Visualização dedicada",
        "Controle de Reuniões",
        "Processos e Rotinas",
        "Objetivos e Metas"
      ]
    }
  ];

  const selectedModuleData = modules.find(m => m.id === selectedModule);

  const benefits = [
    {
      icon: Zap,
      title: "Tudo em um só lugar",
      description: "7 módulos integrados para gestão completa da sua empresa"
    },
    {
      icon: Shield,
      title: "Dados seguros",
      description: "Seus dados protegidos no Notion, uma das plataformas mais seguras do mundo"
    },
    {
      icon: TrendingUp,
      title: "Escalável",
      description: "Cresce com sua empresa, do freelancer à multinacional"
    }
  ];

  const handlePurchaseClick = (location: string) => {
    trackStripeClick(location);
    trackCTAClick("Adquirir Hub Empresarial", location);
    window.open("https://buy.stripe.com/5kAcPg22odJZ7YceVb", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Hub Empresarial PRO 1.0 - Sistema Completo de Gestão no Notion | Focus Inteligente</title>
        <meta name="description" content="Sistema completo de gestão empresarial no Notion: Financeiro, RH, CRM, Marketing, Projetos e muito mais. Tudo integrado em um só lugar." />
        <meta property="og:title" content="Hub Empresarial PRO 1.0 - Gestão Completa no Notion" />
        <meta property="og:description" content="7 módulos integrados para gestão total da sua empresa. Financeiro, RH, Marketing, CRM, Projetos, Atividades e muito mais." />
        <meta property="og:type" content="product" />
        <link rel="canonical" href="https://focusinteligente.com.br/hub-empresarial" />
      </Helmet>

      <Navigation />
      <CouponPopup />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="container relative z-10 px-4 mx-auto text-center">
          <Badge className="mb-6 text-lg px-6 py-2 bg-primary/10 text-primary border-primary/20 animate-fade-in">
            🚀 Versão 1.0 Atualizada
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-fade-in">
            Hub Empresarial PRO 1.0
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            O sistema mais completo de gestão empresarial no Notion.<br />
            <span className="text-primary font-semibold">7 módulos integrados</span> para você dominar todas as áreas do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-all"
              onClick={() => handlePurchaseClick("hero")}
            >
              Adquirir Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById('modulos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MousePointerClick className="mr-2 h-5 w-5" />
              Ver Módulos
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-center animate-fade-in">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">7</div>
              <div className="text-sm text-muted-foreground">Módulos Integrados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">No Notion</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Atualizações</div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos Section - Estilo Netflix */}
      <section id="modulos" className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Todos os Módulos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Clique em cada módulo para descobrir todas as funcionalidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {modules.map((module, index) => (
              <Card
                key={module.id}
                className="group cursor-pointer overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-card/50 backdrop-blur-sm"
                onClick={() => setSelectedModule(module.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={module.image}
                    alt={module.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4 transition-all duration-300 group-hover:scale-110 animate-pulse">
                    <MousePointerClick className="h-6 w-6 text-white drop-shadow-lg" />
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm text-white font-medium drop-shadow-lg">Clique para ver funcionalidades</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Por que escolher o Hub Empresarial?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow border-2 hover:border-primary bg-card/50 backdrop-blur-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-muted/20">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-semibold mb-4">
              "Transformou completamente a gestão da minha empresa"
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Mais de 500+ empresas já organizaram seus processos com o Hub Empresarial PRO
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <GuaranteeSection />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-4 mx-auto">
          <Card className="max-w-4xl mx-auto p-12 text-center border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para organizar sua empresa?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tenha acesso imediato ao Hub Empresarial PRO 1.0 e todas as atualizações futuras
            </p>
            
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8 mb-8 border border-primary/20">
              <div className="text-5xl font-bold text-primary mb-2">
                R$ 349
              </div>
              <div className="text-muted-foreground mb-6">
                Pagamento único • Acesso vitalício
              </div>
              
              <div className="space-y-3 text-left max-w-md mx-auto mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>7 módulos completos integrados</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Aulas gravadas de implementação</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Atualizações gratuitas vitalícias</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Suporte via WhatsApp</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Garantia de 30 dias</span>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="text-xl px-12 py-8 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-all"
              onClick={() => handlePurchaseClick("final-cta")}
            >
              Começar Agora
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>

            <p className="text-sm text-muted-foreground mt-6">
              🔒 Pagamento 100% seguro via Stripe
            </p>
          </Card>
        </div>
      </section>

      <Footer />

      {/* Module Details Dialog */}
      <Dialog open={!!selectedModule} onOpenChange={() => setSelectedModule(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold mb-2">
              {selectedModuleData?.title}
            </DialogTitle>
            <DialogDescription className="text-lg">
              {selectedModuleData?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6">
            <h4 className="text-xl font-semibold mb-4 text-foreground">Funcionalidades incluídas:</h4>
            <ul className="space-y-3">
              {selectedModuleData?.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t">
            <Button 
              className="w-full text-lg py-6"
              onClick={() => {
                handlePurchaseClick(`module-${selectedModule}`);
                setSelectedModule(null);
              }}
            >
              Adquirir Hub Empresarial PRO
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HubEmpresarial;
