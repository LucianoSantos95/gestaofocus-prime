import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, 
  Briefcase, 
  Building2, 
  Users, 
  Sparkles,
  Download,
  Star,
  CheckCircle,
  ChevronRight
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

// Importar imagens dos produtos
import hubEmpresarialPro from "@/assets/hub-empresarial-pro.png";
import controleFinanceiroPro from "@/assets/controle-financeiro-pro.png";
import sprintProdutividade from "@/assets/sprint-produtividade.png";

// Importar imagens do blog
import blogProdutividade from "@/assets/blog/produtividade-fazer-o-que-importa.jpg";
import blogIncendios from "@/assets/blog/parar-apagar-incendios.jpg";
import blogClareza from "@/assets/blog/clareza-projetos-notion.jpg";

// Blog articles data (últimos 3 artigos)
const blogArticles = [
  {
    title: "Produtividade não é fazer mais, é fazer o que importa",
    description: "Descubra como focar no que realmente gera resultado e parar de desperdiçar tempo.",
    slug: "produtividade-fazer-o-que-importa",
    image: blogProdutividade
  },
  {
    title: "Por que sua empresa está sempre apagando incêndios",
    description: "Entenda o que impede sua empresa de crescer e como sair do ciclo de urgências.",
    slug: "parar-apagar-incendios-empresa",
    image: blogIncendios
  },
  {
    title: "Como usar o Notion para ter clareza total nos seus projetos",
    description: "Um guia prático para organizar projetos no Notion de forma simples e eficiente.",
    slug: "clareza-projetos-notion",
    image: blogClareza
  }
];

const Index = () => {
  const handleCTAClick = (ctaName: string, destination: string) => {
    trackEvent('cta_click', {
      event_category: 'conversion',
      event_label: ctaName,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Focus - Sistemas e Templates Notion para Gestão Empresarial</title>
        <meta name="description" content="Consultoria personalizada, templates prontos e soluções em Notion para produtividade, gestão e organização. Organize sua vida e sua empresa com clareza." />
        <meta name="keywords" content="sistemas notion, templates notion, gestão empresarial, produtividade, consultoria notion, organização empresarial" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://focusinteligente.com.br/" />
        <meta property="og:title" content="Focus - Sistemas e Templates Notion para Gestão Empresarial" />
        <meta property="og:description" content="Consultoria personalizada, templates prontos e soluções em Notion para produtividade, gestão e organização." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://focusinteligente.com.br/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Focus Gestão Empresarial",
            "url": "https://focusinteligente.com.br",
            "description": "Sistemas e templates Notion para gestão empresarial e produtividade"
          })}
        </script>
      </Helmet>

      {/* SEÇÃO 1 — HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        
        <div className="container-focus relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Sistemas e Templates em Notion que{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Organizam sua Vida e sua Empresa.
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-foreground-muted mb-10 leading-relaxed">
                Consultoria personalizada, templates prontos e soluções em Notion para produtividade, gestão e organização.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button 
                  className="btn-hero group text-base"
                  onClick={() => {
                    handleCTAClick('hero_ver_templates', '/sistemas-notion');
                    window.location.href = '/sistemas-notion';
                  }}
                >
                  Ver Templates
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  className="btn-secondary group text-base"
                  onClick={() => {
                    handleCTAClick('hero_consultoria', 'whatsapp');
                    window.open('https://wa.me/5511916742443?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20consultoria%20empresarial.', '_blank');
                  }}
                >
                  Consultoria Empresarial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <Link 
                to="/sistemas-gratuitos"
                className="inline-flex items-center text-foreground-muted hover:text-primary transition-colors text-sm"
                onClick={() => handleCTAClick('hero_template_gratis', '/sistemas-gratuitos')}
              >
                <Download className="w-4 h-4 mr-2" />
                Baixar Template Grátis
              </Link>
            </div>

            {/* Dashboard Mockup */}
            <div className="relative animate-slide-up hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-card-border shadow-elegant">
                <img 
                  src={hubEmpresarialPro} 
                  alt="Dashboard Notion Focus - Hub Empresarial PRO" 
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-[60px]" />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — PARA QUEM É */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Para Quem é a Focus?
            </h2>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              Soluções personalizadas para cada perfil
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card Empreendedores */}
            <Card className="service-card group">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Empreendedores</h3>
              <p className="text-foreground-muted mb-6">
                Organize rotinas, tarefas, estudos e finanças com templates prontos para usar.
              </p>
              <Link 
                to="/sistemas-notion"
                className="inline-flex items-center text-primary hover:text-primary-glow transition-colors font-medium"
                onClick={() => handleCTAClick('card_empreendedores', '/sistemas-notion')}
              >
                Ver Soluções
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Card>

            {/* Card Empresas */}
            <Card className="service-card group">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Empresas</h3>
              <p className="text-foreground-muted mb-6">
                Sistemas em Notion para padronizar processos, projetos e rotinas internas.
              </p>
              <Link 
                to="/hub-empresarial"
                className="inline-flex items-center text-primary hover:text-primary-glow transition-colors font-medium"
                onClick={() => handleCTAClick('card_empresas', '/hub-empresarial')}
              >
                Ver Soluções
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Card>

            {/* Card Criadores */}
            <Card className="service-card group">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Criadores de Conteúdo</h3>
              <p className="text-foreground-muted mb-6">
                Fluxo completo de criação, agenda editorial, CRM e automações.
              </p>
              <Link 
                to="/sistemas-notion"
                className="inline-flex items-center text-primary hover:text-primary-glow transition-colors font-medium"
                onClick={() => handleCTAClick('card_criadores', '/sistemas-notion')}
              >
                Ver Soluções
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — PRODUTOS DE DESTAQUE */}
      <section className="section-padding bg-background">
        <div className="container-focus">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nossos Produtos
            </h2>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              Templates e sistemas prontos para você começar agora
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hub Empresarial PRO */}
            <Card className="service-card group h-full flex flex-col">
              <div className="mb-4">
                <img 
                  src={hubEmpresarialPro} 
                  alt="Hub Empresarial PRO" 
                  className="w-full h-40 object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Hub Empresarial PRO</h3>
              <p className="text-foreground-muted text-sm mb-4 flex-grow">
                Sistema completo de gestão com CRM, financeiro e dashboards.
              </p>
              <Button 
                className="btn-secondary w-full text-sm"
                onClick={() => {
                  handleCTAClick('produto_hub_empresarial', '/hub-empresarial');
                  window.location.href = '/hub-empresarial';
                }}
              >
                Ver produto
              </Button>
            </Card>

            {/* Controle Financeiro PRO */}
            <Card className="service-card group h-full flex flex-col">
              <div className="mb-4">
                <img 
                  src={controleFinanceiroPro} 
                  alt="Controle Financeiro PRO" 
                  className="w-full h-40 object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Controle Financeiro PRO</h3>
              <p className="text-foreground-muted text-sm mb-4 flex-grow">
                Organize suas finanças pessoais e empresariais em um só lugar.
              </p>
              <Button 
                className="btn-secondary w-full text-sm"
                onClick={() => {
                  handleCTAClick('produto_financeiro', '/sistemas-notion');
                  window.location.href = '/sistemas-notion';
                }}
              >
                Ver produto
              </Button>
            </Card>

            {/* Sprint de Produtividade */}
            <Card className="service-card group h-full flex flex-col">
              <div className="mb-4">
                <img 
                  src={sprintProdutividade} 
                  alt="Sprint de Produtividade" 
                  className="w-full h-40 object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Sprint de Produtividade</h3>
              <p className="text-foreground-muted text-sm mb-4 flex-grow">
                7 dias de transformação na sua rotina com metodologias práticas.
              </p>
              <Button 
                className="btn-secondary w-full text-sm"
                onClick={() => {
                  handleCTAClick('produto_sprint', '/sprint-produtividade');
                  window.location.href = '/sprint-produtividade';
                }}
              >
                Ver produto
              </Button>
            </Card>

            {/* Templates Gratuitos */}
            <Card className="service-card group h-full flex flex-col border-primary/30">
              <div className="mb-4 relative">
                <img 
                  src="/lovable-uploads/hub-empresarial-free.jpg" 
                  alt="Templates Gratuitos" 
                  className="w-full h-40 object-contain rounded-xl bg-background-elevated"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                  GRÁTIS
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Templates Gratuitos</h3>
              <p className="text-foreground-muted text-sm mb-4 flex-grow">
                Comece agora com templates prontos para organizar sua vida.
              </p>
              <Button 
                className="btn-hero w-full text-sm"
                onClick={() => {
                  handleCTAClick('produto_gratis', '/sistemas-gratuitos');
                  window.location.href = '/sistemas-gratuitos';
                }}
              >
                Baixar grátis
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — OFERTA IMÃ (Lead Magnet) */}
      <section className="py-16 bg-background-secondary">
        <div className="container-focus">
          <div className="relative bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 rounded-3xl p-10 lg:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                Template Gratuito
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Comece hoje com um Template Grátis de Produtividade.
              </h2>
              <p className="text-foreground-muted text-lg mb-8">
                Ferramentas práticas para organizar sua vida e sua rotina. Sem custos, sem complicação.
              </p>
              
              <Button 
                className="btn-hero group"
                onClick={() => {
                  handleCTAClick('lead_magnet_download', '/sistemas-gratuitos');
                  window.location.href = '/sistemas-gratuitos';
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Baixar Template Grátis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — PROVA SOCIAL */}
      <section className="section-padding bg-background">
        <div className="container-focus">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Por Que Confiar na Focus?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                +13 mil
              </div>
              <p className="text-foreground-muted">Downloads nos templates</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                +20
              </div>
              <p className="text-foreground-muted">Projetos entregues</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-foreground-muted">Clientes satisfeitos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                5★
              </div>
              <p className="text-foreground-muted">Avaliação média</p>
            </div>
          </div>

          {/* Depoimentos */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="service-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground-muted mb-4">
                "Os sistemas da Focus transformaram completamente a gestão da minha empresa. Recomendo muito!"
              </p>
              <p className="text-sm font-medium text-foreground">— Cliente satisfeito</p>
            </Card>

            <Card className="service-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground-muted mb-4">
                "Finalmente consegui organizar minha rotina e aumentar minha produtividade. Os templates são incríveis."
              </p>
              <p className="text-sm font-medium text-foreground">— Empreendedor</p>
            </Card>

            <Card className="service-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground-muted mb-4">
                "A consultoria personalizada fez toda a diferença. Sistemas sob medida para nossa realidade."
              </p>
              <p className="text-sm font-medium text-foreground">— Gestor de empresa</p>
            </Card>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — BLOG / CONTEÚDO */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                Conteúdos para Evoluir
              </h2>
              <p className="text-foreground-muted">
                Produtividade e gestão na prática
              </p>
            </div>
            <Link 
              to="/blog"
              className="hidden md:inline-flex items-center text-primary hover:text-primary-glow transition-colors font-medium"
            >
              Ver todos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <Card key={article.slug} className="service-card group overflow-hidden">
                <div className="mb-4 -mx-8 -mt-8">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-foreground-muted text-sm mb-4 line-clamp-2">
                  {article.description}
                </p>
                <Link 
                  to={`/blog/${article.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary-glow transition-colors text-sm font-medium"
                >
                  Ler artigo
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link 
              to="/blog"
              className="inline-flex items-center text-primary hover:text-primary-glow transition-colors font-medium"
            >
              Ver todos os artigos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 — SOBRE / QUEM SOMOS */}
      <section className="section-padding bg-background">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Sobre a Focus
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              A Focus Gestão Empresarial cria sistemas, consultorias e templates em Notion para aumentar produtividade, clareza e desempenho. Atuamos com empreendedores, empresas e criadores que buscam estrutura e resultados reais.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-foreground-muted">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Metodologia comprovada</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-muted">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Suporte humanizado</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-muted">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Resultados mensuráveis</span>
              </div>
            </div>

            <Button 
              className="btn-secondary group"
              onClick={() => {
                handleCTAClick('sobre_conhecer_focus', '/sobre-focus');
                window.location.href = '/sobre-focus';
              }}
            >
              Conhecer a Focus
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 — CTA FINAL */}
      <section className="py-24 lg:py-32 bg-background-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background-secondary to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
        
        <div className="container-focus relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Organize sua vida e sua empresa com{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">clareza.</span>
            </h2>
            <p className="text-lg text-foreground-muted mb-10">
              Comece agora com nossos templates ou converse com um especialista.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-hero group text-base"
                onClick={() => {
                  handleCTAClick('cta_final_templates', '/sistemas-notion');
                  window.location.href = '/sistemas-notion';
                }}
              >
                Ver Templates
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                className="btn-secondary group text-base"
                onClick={() => {
                  handleCTAClick('cta_final_consultoria', 'whatsapp');
                  window.open('https://wa.me/5511916742443?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20consultoria%20empresarial.', '_blank');
                }}
              >
                Consultoria Empresarial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
