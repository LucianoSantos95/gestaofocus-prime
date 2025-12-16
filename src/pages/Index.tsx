import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  ArrowRight, 
  Briefcase, 
  Building2, 
  Users, 
  Download,
  CheckCircle,
  ChevronRight,
  Sparkles,
  Bot,
  Target,
  Clock,
  Layers,
  Zap,
  BookOpen,
  Star
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Importar imagens dos produtos
import hubEmpresarialPro from "@/assets/hub-empresarial-pro.png";
import controleFinanceiroPro from "@/assets/controle-financeiro-pro.png";
import sprintProdutividade from "@/assets/sprint-produtividade.png";

// Blog articles data (últimos 3 artigos)
const blogArticles = [
  {
    title: "Produtividade não é fazer mais, é fazer o que importa",
    description: "Descubra como focar no que realmente gera resultado e parar de desperdiçar tempo.",
    slug: "produtividade-fazer-o-que-importa",
  },
  {
    title: "Por que sua empresa está sempre apagando incêndios",
    description: "Entenda o que impede sua empresa de crescer e como sair do ciclo de urgências.",
    slug: "parar-apagar-incendios-empresa",
  },
  {
    title: "Como usar o Notion para ter clareza total nos seus projetos",
    description: "Um guia prático para organizar projetos no Notion de forma simples e eficiente.",
    slug: "clareza-projetos-notion",
  }
];

// Templates gratuitos
const freeTemplates = [
  { name: "Controle Financeiro Básico", description: "Organize receitas e despesas de forma simples" },
  { name: "Hub Empresarial Free", description: "Versão gratuita do sistema de gestão empresarial" },
  { name: "Biblioteca Digital", description: "Organize livros, cursos e materiais de estudo" },
  { name: "Easy Travel", description: "Planeje suas viagens com eficiência" },
  { name: "Central Social Media", description: "Gerencie suas redes sociais em um só lugar" },
  { name: "Hub Vida Pessoal", description: "Organize metas, hábitos e rotinas pessoais" },
  { name: "Facilitador de Treino", description: "Acompanhe seus treinos e evolução física" },
];

const Index = () => {
  const [focusProName, setFocusProName] = useState("");
  const [focusProEmail, setFocusProEmail] = useState("");
  const [focusProBusiness, setFocusProBusiness] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCTAClick = (ctaName: string, destination: string) => {
    trackEvent('cta_click', {
      event_category: 'conversion',
      event_label: ctaName,
    });
  };

  const handleFocusProSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!focusProName || !focusProEmail) {
      toast.error("Por favor, preencha seu nome e email");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert({
          email: focusProEmail.trim().toLowerCase(),
          full_name: focusProName.trim(),
          interest: focusProBusiness.trim() || null,
          source: 'focus-pro-home',
        });

      if (error) throw error;

      trackEvent('focus_pro_waitlist', {
        event_category: 'lead',
        event_label: 'home_form',
      });

      toast.success("Você está na lista! Avisaremos quando a Focus Pro for lançada.");
      setFocusProName("");
      setFocusProEmail("");
      setFocusProBusiness("");
    } catch (error) {
      console.error('Error:', error);
      toast.error("Erro ao cadastrar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Focus Gestão Empresarial | Sistemas Notion, IA e Produtividade</title>
        <meta name="description" content="Organize sua empresa com sistemas em Notion, IA e produtividade. Sistemas prontos, templates grátis e uma área Pro para gestão empresarial inteligente." />
        <meta name="keywords" content="gestão empresarial, sistemas em Notion, Notion para empresas, produtividade empresarial, sistemas de gestão em Notion, templates Notion grátis, automação com IA, gestão inteligente" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://focusinteligente.com.br/" />
        <meta property="og:title" content="Focus Gestão Empresarial | Sistemas Notion, IA e Produtividade" />
        <meta property="og:description" content="Organize sua empresa com sistemas em Notion, IA e produtividade. Sistemas prontos, templates grátis e uma área Pro para gestão empresarial inteligente." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://focusinteligente.com.br/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Focus Gestão Empresarial",
            "url": "https://focusinteligente.com.br",
            "description": "Sistemas em Notion, IA e produtividade para gestão empresarial inteligente",
            "sameAs": []
          })}
        </script>
      </Helmet>

      {/* =========================== */}
      {/* SEÇÃO 1 — HERO (H1) */}
      {/* =========================== */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[100px]" />
        
        <div className="container-focus relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-5">
                Gestão empresarial inteligente com{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Notion e IA
                </span>
              </h1>
              <p className="text-base lg:text-lg text-foreground-muted mb-6 leading-relaxed max-w-xl">
                Sistemas prontos em Notion, templates gratuitos e uma futura área Pro. Organize projetos, finanças e processos com mais produtividade — sem consultoria complexa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <Button 
                  className="btn-hero group"
                  onClick={() => {
                    handleCTAClick('hero_ver_sistemas', '/hub-empresarial');
                    window.location.href = '/hub-empresarial';
                  }}
                >
                  Ver sistemas para empresas
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  className="btn-secondary group"
                  onClick={() => {
                    handleCTAClick('hero_templates_gratis', '/sistemas-gratuitos');
                    window.location.href = '/sistemas-gratuitos';
                  }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Baixar templates gratuitos
                </Button>
              </div>
              
              <div className="flex items-center gap-2 text-foreground-muted text-sm">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span>Criador destaque no marketplace oficial do Notion Brasil</span>
              </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="relative animate-slide-up hidden lg:block">
              <div className="relative rounded-xl overflow-hidden border border-card-border/50 shadow-elegant bg-background-elevated">
                <img 
                  src={hubEmpresarialPro} 
                  alt="Dashboard de gestão empresarial em Notion - Hub Empresarial PRO Focus" 
                  className="w-full h-auto object-cover"
                  loading="eager"
                  fetchPriority="high"
                  width={574}
                  height={260}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/15 rounded-full blur-[50px]" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-[40px]" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* SEÇÃO 2 — PARA QUEM A FOCUS FOI CRIADA (H2) */}
      {/* =========================== */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Para quem a Focus foi criada
            </h2>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              Sistemas em Notion e templates para quem quer organizar a gestão do negócio de forma simples
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Pequenas empresas e MEIs */}
            <Card className="service-card group">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Pequenas empresas e MEIs</h3>
              <p className="text-foreground-muted mb-6">
                Centralize clientes, projetos e finanças em um único sistema. Nossos sistemas em Notion ajudam você a ter clareza sobre o que está acontecendo no seu negócio, sem planilhas confusas.
              </p>
              <Link 
                to="/hub-empresarial"
                className="inline-flex items-center text-primary hover:text-primary-glow transition-colors font-medium"
                onClick={() => handleCTAClick('card_pequenas_empresas', '/hub-empresarial')}
              >
                Ver soluções para empresas
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Card>

            {/* Card 2 - Prestadores de serviço */}
            <Card className="service-card group">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Prestadores de serviço e consultores</h3>
              <p className="text-foreground-muted mb-6">
                Organize suas entregas, controle financeiro e relacionamento com clientes. Aumente a produtividade empresarial com templates prontos que funcionam desde o primeiro dia.
              </p>
              <Link 
                to="/sistemas-notion"
                className="inline-flex items-center text-primary hover:text-primary-glow transition-colors font-medium"
                onClick={() => handleCTAClick('card_prestadores', '/sistemas-notion')}
              >
                Ver sistemas de gestão
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Card>

            {/* Card 3 - Empreendedores digitais */}
            <Card className="service-card group">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Empreendedores digitais e criadores</h3>
              <p className="text-foreground-muted mb-6">
                Gerencie conteúdo, agenda editorial e processos criativos. Os sistemas em Notion da Focus foram pensados para quem precisa de organização sem burocracia.
              </p>
              <Link 
                to="/sistemas-notion"
                className="inline-flex items-center text-primary hover:text-primary-glow transition-colors font-medium"
                onClick={() => handleCTAClick('card_criadores', '/sistemas-notion')}
              >
                Ver templates
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* SEÇÃO 3 — SOLUÇÕES DIGITAIS EM NOTION (H2) */}
      {/* =========================== */}
      <section className="section-padding bg-background">
        <div className="container-focus">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Soluções digitais em Notion para gestão empresarial
            </h2>
            <p className="text-foreground-muted text-lg max-w-3xl mx-auto">
              A Focus oferece sistemas prontos em Notion, pensados para pequenas empresas que querem uma gestão inteligente, com foco em produtividade e clareza. Sem complexidade, sem consultoria — apenas produtos digitais que funcionam.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Sistemas empresariais em Notion (produtos pagos)
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Hub Empresarial PRO */}
            <Card className="service-card group h-full flex flex-col">
              <div className="mb-4">
                <img 
                  src={hubEmpresarialPro} 
                  alt="Hub Empresarial PRO - Sistema de gestão empresarial em Notion" 
                  className="w-full h-48 object-contain rounded-xl bg-background-elevated"
                  loading="lazy"
                />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Hub Empresarial PRO</h4>
              <p className="text-foreground-muted mb-6 flex-grow">
                Sistema completo de gestão empresarial com CRM, controle de projetos, processos internos e dashboards. Ideal para quem quer centralizar toda a operação do negócio em um só lugar.
              </p>
              <Button 
                className="btn-secondary w-full"
                onClick={() => {
                  handleCTAClick('produto_hub_empresarial', '/hub-empresarial');
                  window.location.href = '/hub-empresarial';
                }}
              >
                Saiba mais
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            {/* Controle Financeiro PRO */}
            <Card className="service-card group h-full flex flex-col">
              <div className="mb-4">
                <img 
                  src={controleFinanceiroPro} 
                  alt="Controle Financeiro PRO - Sistema financeiro em Notion" 
                  className="w-full h-48 object-contain rounded-xl bg-background-elevated"
                  loading="lazy"
                />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Controle Financeiro PRO</h4>
              <p className="text-foreground-muted mb-6 flex-grow">
                Sistema de controle financeiro em Notion para empresas e profissionais. Gerencie receitas, despesas, fluxo de caixa e categorias de forma visual e intuitiva.
              </p>
              <Button 
                className="btn-secondary w-full"
                onClick={() => {
                  handleCTAClick('produto_financeiro', '/sistemas-notion');
                  window.location.href = '/sistemas-notion';
                }}
              >
                Ver detalhes
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            {/* Sprint de Produtividade */}
            <Card className="service-card group h-full flex flex-col">
              <div className="mb-4">
                <img 
                  src={sprintProdutividade} 
                  alt="Sprint de Produtividade - Sistema de rotinas e foco em Notion" 
                  className="w-full h-48 object-contain rounded-xl bg-background-elevated"
                  loading="lazy"
                />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Sprint de Produtividade</h4>
              <p className="text-foreground-muted mb-6 flex-grow">
                Programa de 7 dias para transformar sua rotina com metodologias práticas. Foco em produtividade empresarial, gestão de tempo e construção de hábitos que geram resultados.
              </p>
              <Button 
                className="btn-secondary w-full"
                onClick={() => {
                  handleCTAClick('produto_sprint', '/sprint-produtividade');
                  window.location.href = '/sprint-produtividade';
                }}
              >
                Ver programa
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* SEÇÃO 4 — TEMPLATES E SISTEMAS GRÁTIS (H2) */}
      {/* =========================== */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Templates e sistemas grátis em Notion para começar hoje
            </h2>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              Você pode começar agora mesmo com a versão gratuita dos nossos templates. Teste a lógica da Focus e veja como sistemas em Notion podem transformar sua gestão.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
            {freeTemplates.map((template, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-background-elevated border border-card-border hover:border-primary/30 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground text-sm">{template.name}</p>
                  <p className="text-foreground-muted text-xs">{template.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              className="btn-hero group"
              onClick={() => {
                handleCTAClick('ver_templates_gratis', '/sistemas-gratuitos');
                window.location.href = '/sistemas-gratuitos';
              }}
            >
              <Download className="w-5 h-5 mr-2" />
              Acessar todos os templates e sistemas grátis
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* SEÇÃO 5 — FOCUS PRO - LISTA DE ESPERA (H2) */}
      {/* =========================== */}
      <section className="section-padding bg-background">
        <div className="container-focus">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              Em breve
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Focus Pro – sua área de gestão, IA e aprendizado
            </h2>
            <p className="text-foreground-muted text-lg max-w-3xl mx-auto">
              A Focus Pro será uma área exclusiva com trilhas de gestão empresarial, produtividade e uso de automação com IA para pequenos negócios. Tudo pensado para quem quer organizar a empresa de forma inteligente.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Coluna 1 - O que vai oferecer */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground mb-4">O que a Focus Pro vai oferecer:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Trilhas de gestão empresarial</p>
                    <p className="text-foreground-muted text-sm">Conteúdos estruturados para organizar finanças, projetos e processos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Conteúdos sobre IA e automação</p>
                    <p className="text-foreground-muted text-sm">Aprenda a usar inteligência artificial na gestão do seu negócio</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Materiais práticos e playbooks</p>
                    <p className="text-foreground-muted text-sm">Guias diretos para implementar melhorias imediatas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Integração com sistemas em Notion</p>
                    <p className="text-foreground-muted text-sm">Acesso a templates exclusivos e atualizações constantes</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Atualizações constantes</p>
                    <p className="text-foreground-muted text-sm">Novos conteúdos e sistemas adicionados regularmente</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna 2 - Formulário */}
            <div className="bg-gradient-to-br from-primary/10 to-primary-glow/5 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Entre na lista de espera</h3>
              <p className="text-foreground-muted mb-6">Seja o primeiro a saber quando a Focus Pro for lançada.</p>
              
              <form onSubmit={handleFocusProSubmit} className="space-y-4">
                <div>
                  <label htmlFor="focusProName" className="block text-sm font-medium text-foreground mb-1">
                    Nome *
                  </label>
                  <Input
                    id="focusProName"
                    type="text"
                    placeholder="Seu nome completo"
                    value={focusProName}
                    onChange={(e) => setFocusProName(e.target.value)}
                    className="bg-background border-card-border"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="focusProEmail" className="block text-sm font-medium text-foreground mb-1">
                    E-mail *
                  </label>
                  <Input
                    id="focusProEmail"
                    type="email"
                    placeholder="seu@email.com"
                    value={focusProEmail}
                    onChange={(e) => setFocusProEmail(e.target.value)}
                    className="bg-background border-card-border"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="focusProBusiness" className="block text-sm font-medium text-foreground mb-1">
                    Tipo de negócio (opcional)
                  </label>
                  <Input
                    id="focusProBusiness"
                    type="text"
                    placeholder="Ex: Consultoria, E-commerce, Agência..."
                    value={focusProBusiness}
                    onChange={(e) => setFocusProBusiness(e.target.value)}
                    className="bg-background border-card-border"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-hero w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Cadastrando..." : "Quero entrar na lista da Focus Pro"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* SEÇÃO 6 — POR QUE USAR NOTION E IA (H2) */}
      {/* =========================== */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Por que usar Notion e IA na gestão da sua empresa
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Centralize todas as informações em um único lugar</p>
                  <p className="text-foreground-muted">Chega de procurar dados em planilhas, e-mails e aplicativos diferentes. Com sistemas em Notion, tudo fica organizado e acessível.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Crie rotinas claras e processos padronizados</p>
                  <p className="text-foreground-muted">A gestão empresarial inteligente começa com processos bem definidos. Notion para empresas permite criar fluxos de trabalho que sua equipe consegue seguir.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Automatize partes do trabalho com IA</p>
                  <p className="text-foreground-muted">Automação com IA reduz trabalho repetitivo e libera tempo para o que realmente importa no seu negócio.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Reduza retrabalho e aumente a produtividade</p>
                  <p className="text-foreground-muted">Sistemas de gestão em Notion eliminam a necessidade de refazer tarefas e melhoram a produtividade empresarial da equipe.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Tenha clareza sobre o que está acontecendo</p>
                  <p className="text-foreground-muted">Dashboards e visões organizadas mostram exatamente onde seu negócio está e para onde precisa ir.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* SEÇÃO 7 — BLOG (H2) */}
      {/* =========================== */}
      <section className="section-padding bg-background">
        <div className="container-focus">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Conteúdos sobre gestão empresarial, produtividade e Notion
            </h2>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              Artigos práticos para ajudar você a organizar melhor seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {blogArticles.map((article, index) => (
              <Card key={index} className="service-card group h-full flex flex-col">
                <h3 className="text-lg font-bold text-foreground mb-3">{article.title}</h3>
                <p className="text-foreground-muted text-sm mb-6 flex-grow">{article.description}</p>
                <Link 
                  to={`/blog/${article.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary-glow transition-colors font-medium"
                  onClick={() => handleCTAClick(`blog_${article.slug}`, `/blog/${article.slug}`)}
                >
                  Ler artigo
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              className="btn-secondary group"
              onClick={() => {
                handleCTAClick('ver_todos_artigos', '/blog');
                window.location.href = '/blog';
              }}
            >
              Ver todos os artigos do blog
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* SEÇÃO 8 — FAQ (H2) */}
      {/* =========================== */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Perguntas frequentes sobre gestão com Notion e Focus
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-card-border rounded-xl px-6 bg-background-elevated">
                <AccordionTrigger className="text-foreground hover:no-underline py-6">
                  Preciso saber usar o Notion para usar os sistemas da Focus?
                </AccordionTrigger>
                <AccordionContent className="text-foreground-muted pb-6">
                  Não. Nossos sistemas em Notion são pensados para serem intuitivos. Você não precisa ser especialista — basta duplicar o template para sua conta e começar a usar. Incluímos tutoriais e guias para facilitar o início.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-card-border rounded-xl px-6 bg-background-elevated">
                <AccordionTrigger className="text-foreground hover:no-underline py-6">
                  A Focus oferece consultoria personalizada?
                </AccordionTrigger>
                <AccordionContent className="text-foreground-muted pb-6">
                  Não. A Focus é uma empresa de produtos digitais. Trabalhamos exclusivamente com sistemas em Notion, templates e a futura área Focus Pro. Nosso foco é entregar soluções prontas que você mesmo pode implementar, sem depender de atendimento individual.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-card-border rounded-xl px-6 bg-background-elevated">
                <AccordionTrigger className="text-foreground hover:no-underline py-6">
                  Qual a diferença entre os sistemas pagos e os templates grátis?
                </AccordionTrigger>
                <AccordionContent className="text-foreground-muted pb-6">
                  Os templates Notion grátis são versões simplificadas, ótimas para quem quer começar. Os sistemas pagos são mais completos, com mais funcionalidades, dashboards avançados e estruturas profissionais para gestão empresarial de verdade.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-card-border rounded-xl px-6 bg-background-elevated">
                <AccordionTrigger className="text-foreground hover:no-underline py-6">
                  O que é a Focus Pro e quando será lançada?
                </AccordionTrigger>
                <AccordionContent className="text-foreground-muted pb-6">
                  A Focus Pro será uma área exclusiva com trilhas de aprendizado, conteúdos sobre gestão inteligente, automação com IA e acesso a sistemas exclusivos. Ainda não temos data de lançamento definida — entre na lista de espera para ser avisado em primeira mão.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* SEÇÃO 9 — CTA FINAL */}
      {/* =========================== */}
      <section className="section-padding bg-background">
        <div className="container-focus">
          <div className="relative bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 rounded-3xl p-10 lg:p-16 overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-glow/10 rounded-full blur-[100px]" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Comece hoje a organizar a gestão do seu negócio com Notion e IA
              </h2>
              <p className="text-foreground-muted text-lg mb-8">
                Pequenas empresas podem ter uma gestão profissional, organizada e inteligente — sem consultoria complexa. Escolha por onde começar:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-hero group text-base"
                  onClick={() => {
                    handleCTAClick('cta_final_sistemas', '/hub-empresarial');
                    window.location.href = '/hub-empresarial';
                  }}
                >
                  Ver sistemas empresariais em Notion
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  className="btn-secondary group text-base"
                  onClick={() => {
                    handleCTAClick('cta_final_gratis', '/sistemas-gratuitos');
                    window.location.href = '/sistemas-gratuitos';
                  }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Baixar templates grátis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
