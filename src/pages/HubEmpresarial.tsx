import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { 
  CheckCircle, 
  ArrowRight,
  Shield,
  Zap,
  TrendingUp,
  Star,
  MousePointerClick,
  Users,
  Building2,
  Rocket,
  Target,
  Clock,
  DollarSign,
  Check,
  X
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
    window.open("https://buy.stripe.com/fZu28rbs8gN73ta6F7gUM0d", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Hub Empresarial PRO: Sistema Completo de Gestão no Notion | 7 Módulos Integrados - R$ 349</title>
        <meta name="description" content="🚀 Transforme sua gestão com o Hub Empresarial PRO! 7 módulos integrados no Notion: Financeiro, RH, CRM, Marketing, Projetos. Por apenas R$ 349 + cupom FOCUS20. Garantia de 7 dias! ✅" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hub Empresarial PRO - 7 Módulos Integrados no Notion" />
        <meta property="og:description" content="Sistema completo de gestão empresarial: Financeiro, RH, CRM, Marketing, Projetos por R$ 349. Acesso vitalício + atualizações gratuitas!" />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="https://focusinteligente.com.br/lovable-uploads/hub-empresarial-og.jpg" />
        <meta property="og:url" content="https://focusinteligente.com.br/hub-empresarial" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hub Empresarial PRO - 7 Módulos Integrados" />
        <meta name="twitter:description" content="Sistema completo de gestão empresarial no Notion por R$ 349" />
        <meta name="twitter:image" content="https://focusinteligente.com.br/lovable-uploads/hub-empresarial-og.jpg" />
        
        <link rel="canonical" href="https://focusinteligente.com.br/hub-empresarial" />
        
        {/* Structured Data - Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Hub Empresarial PRO 1.0",
            "description": "Sistema completo de gestão empresarial no Notion com 7 módulos integrados: Financeiro, RH, CRM, Marketing, Projetos, Atividades e Comece por Aqui. Inclui aulas gravadas e suporte via WhatsApp.",
            "image": "https://focusinteligente.com.br/lovable-uploads/hub-empresarial-og.jpg",
            "brand": {
              "@type": "Brand",
              "name": "Focus Inteligente"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://focusinteligente.com.br/hub-empresarial",
              "priceCurrency": "BRL",
              "price": "349.00",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2026-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "4",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>
        
        {/* Structured Data - BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://focusinteligente.com.br"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Hub Empresarial PRO",
                "item": "https://focusinteligente.com.br/hub-empresarial"
              }
            ]
          })}
        </script>
        
        {/* Structured Data - FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "O que é o Hub Empresarial PRO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "É um sistema completo de gestão empresarial desenvolvido no Notion, com 7 módulos integrados: Financeiro, RH, CRM, Marketing, Projetos, Atividades e Comece por Aqui. Tudo em um só lugar para você gerenciar sua empresa de forma profissional."
                }
              },
              {
                "@type": "Question",
                "name": "Quais módulos estão incluídos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "7 módulos completos: (1) Comece por Aqui com aulas gravadas, (2) Financeiro com controle completo, (3) RH para gestão de pessoas, (4) Marketing para campanhas, (5) Projetos com análise de riscos, (6) CRM para vendas, (7) Atividades para tarefas diárias."
                }
              },
              {
                "@type": "Question",
                "name": "Preciso ter experiência com Notion?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não! O módulo Comece por Aqui inclui aulas gravadas que ensinam desde o básico até recursos avançados. Mesmo iniciantes conseguem implementar o sistema seguindo o passo a passo detalhado."
                }
              },
              {
                "@type": "Question",
                "name": "Tem garantia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim! Oferecemos garantia de 7 dias. Se não gostar do sistema por qualquer motivo, devolvemos 100% do seu dinheiro sem perguntas. Seu risco é zero."
                }
              },
              {
                "@type": "Question",
                "name": "Como recebo acesso ao sistema?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Imediatamente após a compra, você recebe um e-mail com o link para duplicar o template no seu Notion. O acesso é instantâneo e vitalício."
                }
              },
              {
                "@type": "Question",
                "name": "Preciso pagar mensalidade?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não! É um pagamento único de R$ 349. Você tem acesso vitalício ao sistema e a todas as atualizações futuras sem custo adicional. Apenas o Notion cobra sua assinatura própria (tem plano gratuito disponível)."
                }
              },
              {
                "@type": "Question",
                "name": "Posso personalizar o sistema?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Totalmente! O Notion permite personalização completa. Você pode adicionar campos, mudar cores, criar novas visualizações e adaptar tudo ao seu fluxo de trabalho específico."
                }
              },
              {
                "@type": "Question",
                "name": "Funciona para qualquer tipo de empresa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim! O sistema é flexível e funciona para freelancers, pequenas empresas, médias empresas, startups, agências, consultorias e diversos outros tipos de negócio. A estrutura modular se adapta à sua realidade."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Navigation />
      <CouponPopup />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-24 pb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Hub Empresarial PRO</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="container relative z-10 px-4 mx-auto text-center">
          <Badge className="mb-6 text-lg px-6 py-2 bg-primary/10 text-primary border-primary/20 animate-fade-in">
            🚀 Versão 1.0 Atualizada
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-fade-in">
            Hub Empresarial PRO - Sistema Completo de Gestão Empresarial no Notion
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
                    alt={`Módulo ${module.title} - ${module.description}`}
                    loading="lazy"
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
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que nossos clientes dizem
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Depoimento 1 */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 hover:border-primary transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-bold text-lg mb-1">NOTA 9,9!</p>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-foreground mb-4">
                PERFEITO! É COMPLETO, E SUPRE MINHA ORGANIZAÇÃO TOTALMENTE
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-semibold">Diego Kirch</span>
                <span>•</span>
                <span>2 de out. de 2025</span>
              </div>
            </Card>

            {/* Depoimento 2 */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 hover:border-primary transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-bold text-lg mb-1">mt bom</p>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-foreground mb-4">
                completo demais. varias funcionalidades. meus parabens aos criadores
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-semibold">joao costa</span>
                <span>•</span>
                <span>23 de ago. de 2025</span>
              </div>
            </Card>

            {/* Depoimento 3 */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 hover:border-primary transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-bold text-lg mb-1">Muito bom!</p>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-foreground mb-4">
                O modelo salvou a organização da minha empresa, super recomendo e agradeço a toda a equipe responsável!!!
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-semibold">Apexia Marketing</span>
                <span>•</span>
                <span>5 de jun. de 2025</span>
              </div>
            </Card>

            {/* Depoimento 4 */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 hover:border-primary transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-bold text-lg mb-1">mt bom</p>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-foreground mb-4">
                gostei muito do modelo. serviu muito bem no que planejava
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-semibold">bidwise</span>
                <span>•</span>
                <span>27 de mai. de 2025</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Como o Hub Empresarial PRO funciona?
            </h2>
            <p className="text-xl text-muted-foreground">
              Simples e rápido: em 5 passos você transforma a gestão da sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", icon: DollarSign, title: "Compra Segura", desc: "Pagamento 100% seguro via Stripe com garantia de 7 dias" },
              { step: "2", icon: Zap, title: "Acesso Imediato", desc: "Receba o link de acesso instantaneamente por e-mail" },
              { step: "3", icon: MousePointerClick, title: "Duplicate no Notion", desc: "Com 1 clique, duplique o template completo para seu workspace" },
              { step: "4", icon: Rocket, title: "Assista as Aulas", desc: "Vídeos práticos ensinam como configurar cada módulo" },
              { step: "5", icon: Target, title: "Personalize", desc: "Ajuste o sistema para o seu negócio e comece a usar" }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all border-2 hover:border-primary bg-card/50 backdrop-blur-sm relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Para Quem É Section */}
      <section className="py-20 bg-muted/20">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Para quem é o Hub Empresarial PRO?
            </h2>
            <p className="text-xl text-muted-foreground">
              Ideal para quem busca organização e crescimento sustentável
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: Users, 
                title: "Empreendedores e PMEs", 
                desc: "Donos de pequenas e médias empresas que precisam centralizar e profissionalizar a gestão sem gastar fortunas com softwares complexos."
              },
              { 
                icon: Building2, 
                title: "Startups em Crescimento", 
                desc: "Times que estão estruturando processos e precisam de um sistema escalável que cresce junto com o negócio."
              },
              { 
                icon: Target, 
                title: "Consultores e Agências", 
                desc: "Profissionais que gerenciam múltiplos projetos e clientes simultaneamente e precisam de visibilidade total."
              },
              { 
                icon: Rocket, 
                title: "Gestores e Líderes", 
                desc: "Profissionais que querem ter controle dos processos da empresa e tomar decisões baseadas em dados organizados."
              },
              { 
                icon: Clock, 
                title: "Freelancers Profissionais", 
                desc: "Autônomos que querem profissionalizar a gestão do próprio negócio com ferramentas de nível empresarial."
              },
              { 
                icon: TrendingUp, 
                title: "Empresas em Transformação", 
                desc: "Negócios que estão migrando de planilhas e ferramentas fragmentadas para um sistema integrado e moderno."
              }
            ].map((persona, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all border-2 hover:border-primary bg-card/50 backdrop-blur-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <persona.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{persona.title}</h3>
                <p className="text-muted-foreground">{persona.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparação Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hub Empresarial vs. Ferramentas Tradicionais
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja por que o Hub Empresarial PRO é a escolha mais inteligente
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="p-4 text-left">Característica</th>
                  <th className="p-4 text-center bg-primary/5">
                    <div className="font-bold text-lg text-primary">Hub Empresarial PRO</div>
                  </th>
                  <th className="p-4 text-center">Ferramentas Tradicionais</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Custo Mensal", pro: "R$ 0 (pag. único)", trad: "R$ 200-500/mês" },
                  { feature: "Integração entre módulos", pro: "100% integrado", trad: "Ferramentas separadas" },
                  { feature: "Curva de aprendizado", pro: "Rápida (com aulas)", trad: "Complexa e demorada" },
                  { feature: "Personalização", pro: "Totalmente flexível", trad: "Limitada" },
                  { feature: "Atualizações", pro: "Gratuitas vitalícias", trad: "Pagas ou limitadas" },
                  { feature: "Mobilidade", pro: "Desktop + Mobile", trad: "Depende da ferramenta" },
                  { feature: "Suporte", pro: "WhatsApp direto", trad: "Tickets ou chat bot" }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/10">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="font-semibold text-primary">{row.pro}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{row.trad}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => handlePurchaseClick("comparison-cta")}
            >
              Começar com o Hub Empresarial PRO
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/20">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire todas as suas dúvidas sobre o Hub Empresarial PRO
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">O que é o Hub Empresarial PRO?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                É um sistema completo de gestão empresarial desenvolvido no Notion, com 7 módulos integrados: Financeiro, RH, CRM, Marketing, Projetos, Atividades e Comece por Aqui. Tudo em um só lugar para você gerenciar sua empresa de forma profissional.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Quais módulos estão incluídos?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                7 módulos completos: (1) Comece por Aqui com aulas gravadas, (2) Financeiro com controle completo, (3) RH para gestão de pessoas, (4) Marketing para campanhas, (5) Projetos com análise de riscos, (6) CRM para vendas, (7) Atividades para tarefas diárias.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Como funciona a integração entre os módulos?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Todos os módulos são interligados através de bancos de dados relacionais do Notion. Por exemplo, você pode vincular tarefas de Marketing a Projetos específicos, ou associar despesas financeiras a campanhas, tudo de forma automática e visual.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Preciso ter experiência com Notion?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Não! O módulo "Comece por Aqui" inclui aulas gravadas que ensinam desde o básico até recursos avançados. Mesmo iniciantes conseguem implementar o sistema seguindo o passo a passo detalhado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">O sistema funciona em mobile?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! Como é desenvolvido no Notion, funciona perfeitamente em desktop, mobile (iOS e Android) e tablet. Acesse sua gestão de qualquer lugar, a qualquer momento.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Tem garantia?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! Oferecemos garantia de 7 dias. Se não gostar do sistema por qualquer motivo, devolvemos 100% do seu dinheiro sem perguntas. Seu risco é zero.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Como recebo acesso ao sistema?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Imediatamente após a compra, você recebe um e-mail com o link para duplicar o template no seu Notion. O acesso é instantâneo e vitalício.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Preciso pagar mensalidade?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Não! É um pagamento único de R$ 349. Você tem acesso vitalício ao sistema e a todas as atualizações futuras sem custo adicional. Apenas o Notion cobra sua assinatura própria (tem plano gratuito disponível).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Posso personalizar o sistema?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Totalmente! O Notion permite personalização completa. Você pode adicionar campos, mudar cores, criar novas visualizações e adaptar tudo ao seu fluxo de trabalho específico.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Recebo atualizações?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! Todas as atualizações e melhorias futuras são gratuitas e vitalícias. Quando lançarmos novas funcionalidades ou módulos, você será notificado e poderá atualizar seu sistema.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="border bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Tem suporte disponível?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! Oferecemos suporte via WhatsApp para tirar dúvidas sobre implementação e uso do sistema. Nossa equipe está pronta para ajudar você a ter sucesso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12" className="border bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Funciona para qualquer tipo de empresa?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! O sistema é flexível e funciona para freelancers, pequenas empresas, médias empresas, startups, agências, consultorias e diversos outros tipos de negócio. A estrutura modular se adapta à sua realidade.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13" className="border bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Posso usar com minha equipe?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! O Notion permite colaboração em tempo real. Você pode convidar membros da equipe, definir permissões e todos trabalham no mesmo sistema simultaneamente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14" className="border bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Meus dados ficam seguros?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutamente! Todos os dados ficam no SEU workspace do Notion, com a segurança de nível empresarial que o Notion oferece. Nós não temos acesso aos seus dados, eles são 100% seus.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15" className="border bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Quanto tempo leva para implementar?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                A duplicação do template leva apenas 1 minuto. A configuração inicial básica pode ser feita em 1-2 horas seguindo as aulas. A implementação completa e personalização depende do tamanho da sua empresa, mas é muito mais rápido que criar do zero.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-16" className="border bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Posso integrar com outras ferramentas?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! O Notion tem integrações nativas e via API com diversas ferramentas como Google Calendar, Slack, Zapier, Make e centenas de outras. Você pode automatizar processos e conectar seu stack de ferramentas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-17" className="border bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">E se eu já uso outras ferramentas?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                O Hub Empresarial foi projetado para substituir ou complementar suas ferramentas atuais. Você pode fazer uma migração gradual, começando por um módulo e expandindo conforme se adapta ao sistema.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-18" className="border bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Posso revender ou redistribuir o sistema?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Não. A licença é de uso pessoal ou empresarial interno apenas. Revenda, redistribuição ou compartilhamento público não são permitidos e violam os termos de uso.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Ainda tem dúvidas? <Link to="/central-ajuda" className="text-primary hover:underline font-semibold">Entre em contato conosco</Link>
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => handlePurchaseClick("faq-cta")}
            >
              Quero o Hub Empresarial PRO Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
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
