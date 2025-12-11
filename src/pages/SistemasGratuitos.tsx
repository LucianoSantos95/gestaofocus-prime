import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  CheckCircle2, 
  Star, 
  Download, 
  Briefcase, 
  Target, 
  User, 
  Video,
  ArrowRight,
  Sparkles,
  Gift,
  Zap,
  Settings
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

interface Template {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  link: string;
  categoria: string;
  badge?: string;
}

const templates: Template[] = [
  {
    id: 1,
    nome: "Hub Empresarial Free",
    descricao: "Sistema completo para gestão de empresas com finanças, RH, marketing e projetos integrados.",
    imagem: "/lovable-uploads/hub-empresarial-free.jpg",
    link: "https://www.notion.com/templates/hub-empresarial-free",
    categoria: "empresarial",
    badge: "Mais Popular"
  },
  {
    id: 2,
    nome: "Central Social Media",
    descricao: "Gerencie suas redes sociais com calendário de conteúdo, campanhas e análises.",
    imagem: "/lovable-uploads/central-social-media.jpg",
    link: "https://www.notion.com/templates/central-social-media-basic",
    categoria: "criadores"
  },
  {
    id: 3,
    nome: "Controle Financeiro Básico",
    descricao: "Organize suas finanças pessoais com controle de gastos, receitas e metas.",
    imagem: "/lovable-uploads/controle-financeiro.jpg",
    link: "https://www.notion.com/templates/controle-financeiro-b-sico",
    categoria: "pessoal",
    badge: "Mais Baixado"
  },
  {
    id: 4,
    nome: "Hub Vida Pessoal",
    descricao: "Organize sua vida em um só lugar: finanças, viagens, rotina, saúde e metas.",
    imagem: "/lovable-uploads/hub-vida-pessoal.jpg",
    link: "https://www.notion.com/templates/hub-vida-pessoal",
    categoria: "pessoal"
  },
  {
    id: 5,
    nome: "Easy Travel",
    descricao: "Planeje viagens perfeitas com roteiros, controle de gastos e organização completa.",
    imagem: "/lovable-uploads/easy-travel.jpg",
    link: "https://www.notion.com/templates/easy-travel",
    categoria: "produtividade"
  },
  {
    id: 6,
    nome: "Facilitador de Treino",
    descricao: "Organize seus treinos de musculação e cardio com planos personalizados.",
    imagem: "/lovable-uploads/facilitador-treino.jpg",
    link: "https://www.notion.com/templates/facilitador-de-treino-b-sico",
    categoria: "pessoal"
  },
  {
    id: 7,
    nome: "Biblioteca Digital",
    descricao: "Organize seus livros e conteúdos digitais com praticidade e sistema de categorias.",
    imagem: "/lovable-uploads/biblioteca-digital.jpg",
    link: "https://www.notion.com/templates/biblioteca-digital-588",
    categoria: "produtividade"
  },
];

const categories = [
  {
    id: "empresarial",
    title: "Gestão Empresarial",
    description: "Sistemas para organizar sua empresa do zero",
    icon: Briefcase,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "produtividade",
    title: "Produtividade",
    description: "Templates para otimizar sua rotina e execução",
    icon: Target,
    color: "from-green-500 to-green-600"
  },
  {
    id: "pessoal",
    title: "Organização Pessoal",
    description: "Ferramentas para vida pessoal e finanças",
    icon: User,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "criadores",
    title: "Criadores de Conteúdo",
    description: "Sistemas para redes sociais e marketing",
    icon: Video,
    color: "from-pink-500 to-pink-600"
  }
];

const proProducts = [
  {
    title: "Hub Empresarial PRO",
    description: "Sistema completo de gestão empresarial com CRM, projetos, financeiro, RH e dashboards avançados.",
    link: "/hub-empresarial",
    badge: "Mais Completo"
  },
  {
    title: "Controle Financeiro PRO",
    description: "Gestão financeira avançada com fluxo de caixa, DRE, contas a pagar/receber e relatórios.",
    link: "/hub-empresarial",
    badge: "Em Breve"
  },
  {
    title: "Sprint de Produtividade",
    description: "Método de 7 dias para destravar sua produtividade e criar uma rotina de execução real.",
    link: "/sprint-produtividade",
    badge: "R$ 37,90"
  }
];

const whyFreeReasons = [
  {
    icon: Gift,
    title: "100% gratuitos",
    description: "Sem custos ocultos, sem pegadinhas"
  },
  {
    icon: Zap,
    title: "Prontos para usar",
    description: "Duplique e comece em segundos"
  },
  {
    icon: Settings,
    title: "Totalmente adaptáveis",
    description: "Personalize para sua realidade"
  },
  {
    icon: Sparkles,
    title: "Sem conhecimento técnico",
    description: "Não precisa dominar Notion"
  }
];

const SistemasGratuitos = () => {
  const handleDownloadClick = (templateName: string, link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const getTemplatesByCategory = (categoryId: string) => {
    return templates.filter(t => t.categoria === categoryId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Templates Notion Grátis | Sistemas Gratuitos para Produtividade e Empresas - Focus</title>
        <meta name="description" content="Baixe templates Notion gratuitos para gestão empresarial, produtividade e organização pessoal. Sistemas prontos para usar, 100% gratuitos e personalizáveis." />
        <meta name="keywords" content="templates notion grátis, sistemas gratuitos notion, notion para empresas, produtividade notion, organização notion, templates gestão grátis, notion português, sistemas notion download" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://focusinteligente.com.br/sistemas-gratuitos" />
        <meta property="og:title" content="Templates Notion Grátis - Sistemas para Produtividade e Empresas" />
        <meta property="og:description" content="Baixe gratuitamente templates Notion para gestão empresarial e produtividade. +12.000 downloads." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://focusinteligente.com.br/sistemas-gratuitos" />
        <meta property="og:image" content="https://focusinteligente.com.br/lovable-uploads/focus-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Templates Notion Grátis - Focus" />
        <meta name="twitter:description" content="Sistemas gratuitos Notion para produtividade e gestão empresarial." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Templates e Sistemas Gratuitos Notion",
            "description": "Coleção de templates gratuitos Notion para gestão empresarial, produtividade e organização pessoal",
            "url": "https://focusinteligente.com.br/sistemas-gratuitos",
            "provider": {
              "@type": "Organization",
              "name": "Focus Gestão Empresarial",
              "url": "https://focusinteligente.com.br"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "12000",
              "bestRating": "5"
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
              "name": "Templates Gratuitos",
              "item": "https://focusinteligente.com.br/sistemas-gratuitos"
            }]
          })}
        </script>
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container-focus">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Início</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Templates Gratuitos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge variant="secondary" className="mb-4">
              <Download className="w-3 h-3 mr-1" />
              +12.000 downloads
            </Badge>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Templates e sistemas gratuitos em Notion para organizar seu negócio e sua rotina
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comece agora sua jornada de gestão empresarial e produtividade com ferramentas gratuitas da Focus. 
              São sistemas prontos para usar, sem custo e sem complicação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="#categorias">
                  <Download className="w-5 h-5" />
                  Baixar todos os templates
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link to="/hub-empresarial">
                  Conhecer sistemas PRO
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Por que oferecemos sistemas gratuitos?
              </h2>
              <p className="text-muted-foreground text-lg">
                Acreditamos que todos merecem acesso a ferramentas de organização de qualidade.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyFreeReasons.map((reason, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm text-center p-6">
                  <CardContent className="p-0 space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                      <reason.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categorias" className="py-16 md:py-24">
        <div className="container-focus">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Categorias de sistemas grátis
            </h2>
            <p className="text-muted-foreground text-lg">
              Encontre o template ideal para sua necessidade
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((category) => {
              const categoryTemplates = getTemplatesByCategory(category.id);
              if (categoryTemplates.length === 0) return null;
              
              return (
                <div key={category.id} className="space-y-8">
                  {/* Category Header */}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">{category.title}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  {/* Templates Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryTemplates.map((template) => (
                      <Card 
                        key={template.id} 
                        className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden"
                      >
                        <CardContent className="p-0">
                          {/* Image */}
                          <div className="relative aspect-video overflow-hidden bg-muted">
                            <img
                              src={template.imagem}
                              alt={template.nome}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {template.badge && (
                              <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                                <Star className="w-3 h-3 mr-1 fill-current" />
                                {template.badge}
                              </Badge>
                            )}
                          </div>

                          {/* Content */}
                          <div className="p-6 space-y-4">
                            <div>
                              <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                {template.nome}
                              </h4>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {template.descricao}
                              </p>
                            </div>

                            <Button 
                              className="w-full gap-2" 
                              onClick={() => handleDownloadClick(template.nome, template.link)}
                            >
                              <ExternalLink className="w-4 h-4" />
                              Baixar agora
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upsell Section - Pro Products */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-focus">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Próximo passo</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Pronto para avançar? Conheça os sistemas completos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Os templates gratuitos são ótimos para começar. Mas se você quer uma solução profissional e completa, 
              conheça nossos sistemas PRO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {proProducts.map((product, index) => (
              <Card 
                key={index} 
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6 space-y-4">
                  <Badge variant="secondary">{product.badge}</Badge>
                  <h3 className="text-xl font-bold text-foreground">{product.title}</h3>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                  <Button variant="outline" className="w-full gap-2" asChild>
                    <Link to={product.link}>
                      Conhecer
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Pro Section */}
      <section className="py-16 md:py-24">
        <div className="container-focus">
          <Card className="max-w-4xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                <Badge className="bg-primary/20 text-primary border-0">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Em desenvolvimento
                </Badge>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Focus Pro — aprenda gestão com Notion e IA
                </h2>
                
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Uma área exclusiva com trilhas de gestão empresarial, conteúdos sobre IA, 
                  materiais práticos, integração com sistemas Notion e atualizações constantes. 
                  Seja um dos primeiros a ter acesso.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" className="gap-2" asChild>
                    <Link to="/lista-espera">
                      Entrar na lista de espera
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container-focus">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Comece agora com os sistemas gratuitos
            </h2>
            <p className="text-muted-foreground text-lg">
              Dê o primeiro passo para uma gestão mais organizada e produtiva.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="#categorias">
                  <Download className="w-5 h-5" />
                  Baixar agora
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link to="/hub-empresarial">
                  Conhecer sistemas PRO
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                100% gratuito
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Sem cadastro
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Pronto para usar
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SistemasGratuitos;
