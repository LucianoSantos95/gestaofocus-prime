import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState, useMemo, useEffect } from "react";
import BlogCTA from "@/components/BlogCTA";
import notionPoderImage from "@/assets/blog/notion-poder-empresas.jpg";
import mapeamentoImage from "@/assets/blog/mapeamento-processos.jpg";
import errosImage from "@/assets/blog/erros-produtividade.jpg";
import gestaoProjetosImage from "@/assets/blog/gestao-projetos-notion.jpg";
import sistemaCompletoImage from "@/assets/blog/sistema-completo-notion.jpg";
import perdaTempoImage from "@/assets/blog/perda-tempo-profissionais.jpg";
import notionVsPlanilhasImage from "@/assets/blog/notion-vs-planilhas.jpg";
import organizarProjetosImage from "@/assets/blog/organizar-projetos-caoticos.jpg";
import processosInteligentesImage from "@/assets/blog/processos-inteligentes-autonomos.jpg";
import sistemasNotionPequenasImage from "@/assets/blog/sistemas-notion-pequenas-empresas.jpg";
import erroSilenciosoImage from "@/assets/blog/erro-silencioso-produtividade.jpg";
import caosRotinaImage from "@/assets/blog/caos-rotina-produtiva.jpg";
import tarefasIncendiosImage from "@/assets/blog/tarefas-vs-incendios.jpg";
import sistemaProdutividadeImage from "@/assets/blog/sistema-produtividade-passo-passo.jpg";
import sistemas150Image from "@/assets/blog/150-sistemas-notion.jpg";
import produtividadeFazerImage from "@/assets/blog/produtividade-fazer-o-que-importa.jpg";
import confiarSistemasImage from "@/assets/blog/confiar-em-sistemas.jpg";
import tarefasResultadosImage from "@/assets/blog/tarefas-em-resultados.jpg";
import pararIncendiosImage from "@/assets/blog/parar-apagar-incendios.jpg";
import clarezaNotionImage from "@/assets/blog/clareza-projetos-notion.jpg";
import checklistDiarioImage from "@/assets/blog/checklist-diario-produtividade.jpg";
import organizarRotinaImage from "@/assets/blog/organizar-rotina-semanal.jpg";
import produtividadeAutonomosImage from "@/assets/blog/produtividade-autonomos-freelancers.jpg";
import pararProcrastinarImage from "@/assets/blog/parar-procrastinar-sistemas-visuais.jpg";
import planejamentoMensalImage from "@/assets/blog/planejamento-mensal-sistema.jpg";
import organizacaoPessoalImage from "@/assets/blog/organizacao-pessoal-tecnologia.jpg";
import metasSmartImage from "@/assets/blog/metas-inteligentes-smart.jpg";
import guiaFocoImage from "@/assets/blog/guia-foco-evitar-distracoes.jpg";
import metodosProdutividadeImage from "@/assets/blog/metodos-produtividade-2025.jpg";
import organizarDocumentosImage from "@/assets/blog/organizar-documentos-empresa.jpg";
import rotinaMatinalImage from "@/assets/blog/rotina-matinal-poderosa.jpg";
import organizacaoFinanceiraImage from "@/assets/blog/organizacao-financeira-pessoal.jpg";
import concentracaoImage from "@/assets/blog/melhorar-concentracao-distracoes.jpg";

const Blog = () => {
  const [showArchived, setShowArchived] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);
  
  const blogPosts = [
    {
      id: 1,
      title: "Como Criar uma Rotina Matinal Poderosa Que Melhora Seu Dia em 15 Minutos",
      excerpt: "O método simples e comprovado que transforma suas manhãs e multiplica sua produtividade diária em apenas 15 minutos.",
      date: "2025-02-20",
      readTime: "8 min",
      category: "Produtividade",
      slug: "rotina-matinal-poderosa-15-minutos",
      image: rotinaMatinalImage
    },
    {
      id: 2,
      title: "Organização Financeira Pessoal: Como Controlar Seus Gastos Usando Um Sistema Simples",
      excerpt: "O método prático que elimina a bagunça financeira sem precisar de planilhas complexas ou aplicativos complicados.",
      date: "2025-02-20",
      readTime: "10 min",
      category: "Finanças Pessoais",
      slug: "organizacao-financeira-pessoal-sistema-simples",
      image: organizacaoFinanceiraImage
    },
    {
      id: 3,
      title: "Como Melhorar Sua Concentração em Um Mundo Cheio de Distrações (Guia Prático)",
      excerpt: "7 técnicas comprovadas para alcançar estado de foco profundo mesmo com notificações, redes sociais e interrupções constantes.",
      date: "2025-02-20",
      readTime: "12 min",
      category: "Foco",
      slug: "melhorar-concentracao-mundo-distracoes",
      image: concentracaoImage
    },
    {
      id: 4,
      title: "Checklist Diário: O Método Simples Que Aumenta Sua Produtividade em Até 40%",
      excerpt: "Descubra o sistema de checklist que profissionais de alta performance usam para maximizar resultados e reduzir stress diário.",
      date: "2025-02-15",
      readTime: "8 min",
      category: "Produtividade",
      slug: "checklist-diario-produtividade",
      image: checklistDiarioImage
    },
    {
      id: 2,
      title: "Como Organizar Sua Rotina Semanal Para Ter Mais Foco (Modelo Pronto Incluso)",
      excerpt: "O método completo de planejamento semanal que elimina decisões desnecessárias e multiplica seu foco nas tarefas que importam.",
      date: "2025-02-14",
      readTime: "9 min",
      category: "Organização",
      slug: "organizar-rotina-semanal",
      image: organizarRotinaImage
    },
    {
      id: 3,
      title: "Produtividade Para Quem Trabalha Sozinho: O Guia Essencial Para Autônomos e Freelancers",
      excerpt: "Estrutura completa para autônomos e freelancers criarem sistemas de produtividade sem depender de equipe ou estrutura corporativa.",
      date: "2025-02-13",
      readTime: "10 min",
      category: "Freelancing",
      slug: "produtividade-autonomos-freelancers",
      image: produtividadeAutonomosImage
    },
    {
      id: 4,
      title: "Como Parar de Procrastinar Usando Sistemas Visuais (Sem Depender de Motivação)",
      excerpt: "O método baseado em gatilhos visuais que elimina procrastinação sem precisar de força de vontade ou motivação externa.",
      date: "2025-02-12",
      readTime: "7 min",
      category: "Produtividade",
      slug: "parar-procrastinar-sistemas-visuais",
      image: pararProcrastinarImage
    },
    {
      id: 5,
      title: "Planejamento Mensal: Como Criar Um Sistema Que Realmente Funciona",
      excerpt: "Framework prático de 4 pilares para planejar seu mês de forma estratégica e executar com consistência.",
      date: "2025-02-11",
      readTime: "9 min",
      category: "Planejamento",
      slug: "planejamento-mensal-sistema",
      image: planejamentoMensalImage
    },
    {
      id: 6,
      title: "Organização Pessoal 2.0: Como Usar Tecnologia Para Ter Mais Clareza Mental",
      excerpt: "Como construir seu Second Brain usando ferramentas digitais para liberar espaço mental e aumentar sua capacidade criativa.",
      date: "2025-02-10",
      readTime: "8 min",
      category: "Sistemas",
      slug: "organizacao-pessoal-tecnologia",
      image: organizacaoPessoalImage
    },
    {
      id: 7,
      title: "Como Criar Metas Inteligentes (SMART) Sem Complicar — Com Exemplos Reais",
      excerpt: "Aprenda a transformar desejos vagos em metas SMART acionáveis com exemplos práticos e template pronto para usar.",
      date: "2025-02-09",
      readTime: "7 min",
      category: "Gestão de Metas",
      slug: "metas-inteligentes-smart",
      image: metasSmartImage
    },
    {
      id: 8,
      title: "Guia Definitivo do Foco: Como Evitar Distrações no Trabalho e em Casa",
      excerpt: "Técnicas práticas e comprovadas para eliminar distrações digitais e criar ambientes de foco profundo.",
      date: "2025-02-08",
      readTime: "10 min",
      category: "Foco",
      slug: "guia-foco-evitar-distracoes",
      image: guiaFocoImage
    },
    {
      id: 9,
      title: "Métodos de Produtividade Que Realmente Funcionam em 2025 (E Quais Evitar)",
      excerpt: "Análise completa dos métodos de produtividade mais eficazes em 2025. Saiba quais funcionam e quais são apenas hype.",
      date: "2025-02-07",
      readTime: "11 min",
      category: "Métodos",
      slug: "metodos-produtividade-2025",
      image: metodosProdutividadeImage
    },
    {
      id: 10,
      title: "Como Organizar Documentos, Ideias e Informações da Empresa em Um Só Lugar",
      excerpt: "Sistema completo para centralizar conhecimento empresarial e acabar com informações perdidas em e-mails e chats.",
      date: "2025-02-06",
      readTime: "8 min",
      category: "Gestão Empresarial",
      slug: "organizar-documentos-empresa",
      image: organizarDocumentosImage
    },
    {
      id: 11,
      title: "Como usar o Notion para ter clareza total nos seus projetos (mesmo com pouco tempo)",
      excerpt: "O método completo para configurar o Notion e ter visão 360° dos seus projetos em minutos — não em horas de organização.",
      date: "2025-02-05",
      readTime: "9 min",
      category: "Notion",
      slug: "clareza-projetos-notion",
      image: clarezaNotionImage
    },
    {
      id: 2,
      title: "Por que sua empresa está sempre apagando incêndios — e como parar com isso de uma vez",
      excerpt: "O ciclo vicioso do modo bombeiro está matando empresas promissoras. Descubra como quebrar esse padrão e construir uma operação verdadeiramente estratégica.",
      date: "2025-02-04",
      readTime: "11 min",
      category: "Gestão Empresarial",
      slug: "parar-apagar-incendios-empresa",
      image: pararIncendiosImage
    },
    {
      id: 3,
      title: "A fórmula que uso para transformar tarefas soltas em resultados consistentes",
      excerpt: "O método testado que transforma sua lista caótica de tarefas em um sistema previsível de execução e resultados.",
      date: "2025-02-03",
      readTime: "10 min",
      category: "Metodologia",
      slug: "tarefas-soltas-em-resultados",
      image: tarefasResultadosImage
    },
    {
      id: 4,
      title: "O que acontece quando você para de confiar na sua memória e começa a confiar em sistemas",
      excerpt: "Sua mente não foi feita para armazenar informações — foi feita para processar ideias. Descubra como sistemas externos podem liberar seu potencial criativo.",
      date: "2025-02-02",
      readTime: "9 min",
      category: "Sistemas",
      slug: "confiar-sistemas-producao",
      image: confiarSistemasImage
    },
    {
      id: 5,
      title: "Produtividade não é fazer mais — é fazer o que importa (e o Notion pode provar)",
      excerpt: "Pare de medir seu sucesso pela quantidade de tarefas completadas. Descubra como focar no que realmente move a agulha dos seus resultados.",
      date: "2025-02-01",
      readTime: "8 min",
      category: "Produtividade",
      slug: "produtividade-fazer-o-que-importa",
      image: produtividadeFazerImage
    },
    {
      id: 6,
      title: "O erro silencioso que destrói a produtividade de qualquer equipe (e como evitar)",
      excerpt: "Descubra o erro invisível que está custando horas de produtividade da sua equipe todos os dias e aprenda o método prático para eliminá-lo.",
      date: "2025-01-29",
      readTime: "12 min",
      category: "Gestão de Equipes",
      slug: "erro-silencioso-produtividade-equipe",
      image: erroSilenciosoImage
    },
    {
      id: 2,
      title: "Como transformar o caos do seu dia em uma rotina leve e produtiva — usando o Notion",
      excerpt: "Aprenda o método prático para transformar dias caóticos em uma rotina organizada e produtiva usando o Notion como seu sistema de gestão pessoal.",
      date: "2025-01-28",
      readTime: "10 min",
      category: "Produtividade",
      slug: "transformar-caos-rotina-produtiva-notion",
      image: caosRotinaImage
    },
    {
      id: 3,
      title: "Você está gerenciando tarefas… ou apenas apagando incêndios?",
      excerpt: "Descubra a diferença entre gestão proativa e reatividade constante e aprenda como sair do modo bombeiro para se tornar um gestor estratégico.",
      date: "2025-01-27",
      readTime: "9 min",
      category: "Gestão",
      slug: "gerenciando-tarefas-ou-apagando-incendios",
      image: tarefasIncendiosImage
    },
    {
      id: 4,
      title: "O passo a passo para criar um sistema de produtividade que realmente funciona (sem complicar)",
      excerpt: "Guia completo e prático para criar um sistema de produtividade simples, funcional e sustentável que transforma sua forma de trabalhar.",
      date: "2025-01-26",
      readTime: "11 min",
      category: "Sistemas",
      slug: "criar-sistema-produtividade-funciona",
      image: sistemaProdutividadeImage
    },
    {
      id: 5,
      title: "O que aprendi organizando mais de 150 sistemas no Notion (e o que ninguém te conta sobre isso)",
      excerpt: "Lições práticas e insights valiosos de quem já organizou mais de 150 sistemas empresariais no Notion - o que funciona de verdade e o que evitar.",
      date: "2025-01-25",
      readTime: "13 min",
      category: "Notion",
      slug: "150-sistemas-notion-licoes-praticas",
      image: sistemas150Image
    },
    {
      id: 6,
      title: "Por que 80% dos Profissionais Perdem Tempo Todos os Dias (e Como Resolver Isso)",
      excerpt: "Descubra os principais vilões da produtividade que consomem 2-3 horas por dia e aprenda o método prático para recuperar esse tempo perdido.",
      date: "2025-01-22",
      readTime: "8 min",
      category: "Produtividade",
      slug: "perda-tempo-profissionais",
      image: perdaTempoImage
    },
    {
      id: 7,
      title: "Notion vs Planilhas: O Que as Empresas Modernas Estão Usando Para Crescer Mais Rápido",
      excerpt: "Compare as duas ferramentas e descubra por que 73% das empresas em crescimento estão migrando para o Notion em 2025.",
      date: "2025-01-21",
      readTime: "9 min",
      category: "Ferramentas",
      slug: "notion-vs-planilhas",
      image: notionVsPlanilhasImage
    },
    {
      id: 8,
      title: "O Método Para Organizar Projetos Caóticos e Dobrar a Eficiência",
      excerpt: "Descubra o método testado que transforma projetos caóticos em sistemas organizados, dobrando a eficiência da equipe em 30 dias.",
      date: "2025-01-20",
      readTime: "9 min",
      category: "Gestão de Projetos",
      slug: "organizar-projetos-caoticos",
      image: organizarProjetosImage
    },
    {
      id: 9,
      title: "Como Criar Processos Inteligentes que Funcionam Sozinhos",
      excerpt: "Aprenda o framework para criar processos que funcionam no piloto automático, mesmo quando você não está presente.",
      date: "2025-01-20",
      readTime: "10 min",
      category: "Automação",
      slug: "processos-inteligentes-autonomos",
      image: processosInteligentesImage
    },
    {
      id: 10,
      title: "3 Sistemas Prontos no Notion Que Toda Pequena Empresa Deveria Ter",
      excerpt: "Conheça os 3 sistemas essenciais que transformam pequenas empresas em operações profissionais e escaláveis.",
      date: "2025-01-20",
      readTime: "7 min",
      category: "Sistemas",
      slug: "sistemas-notion-pequenas-empresas",
      image: sistemasNotionPequenasImage
    },
    {
      id: 11,
      title: "O segredo que as empresas produtivas usam (e ninguém te contou): o poder do Notion",
      excerpt: "Descubra como o Notion se tornou a ferramenta preferida de empresas que multiplicam sua produtividade e organize seu negócio de forma inteligente.",
      date: "2025-01-20",
      readTime: "7 min",
      category: "Produtividade",
      slug: "poder-do-notion-empresas-produtivas",
      image: notionPoderImage
    },
    {
      id: 12,
      title: "Seu negócio está travado? Veja como o mapeamento de processos pode destravar seu crescimento",
      excerpt: "Aprenda como identificar gargalos, eliminar retrabalho e criar um fluxo de trabalho que realmente funciona para sua empresa crescer.",
      date: "2025-01-18",
      readTime: "8 min",
      category: "Gestão de Processos",
      slug: "mapeamento-processos-crescimento",
      image: mapeamentoImage
    },
    {
      id: 13,
      title: "Você comete esses 5 erros de produtividade sem perceber? Descubra agora como evitá-los",
      excerpt: "Identifique os erros mais comuns que sabotam sua produtividade e aprenda técnicas práticas para corrigi-los imediatamente.",
      date: "2025-01-15",
      readTime: "6 min",
      category: "Produtividade",
      slug: "5-erros-produtividade",
      image: errosImage
    },
    {
      id: 14,
      title: "Gestão de projetos no Notion: o passo a passo para parar de perder tempo e ganhar resultados",
      excerpt: "Monte um sistema completo de gestão de projetos no Notion e transforme a forma como sua equipe trabalha com eficiência comprovada.",
      date: "2025-01-12",
      readTime: "9 min",
      category: "Notion",
      slug: "gestao-projetos-notion",
      image: gestaoProjetosImage
    },
    {
      id: 15,
      title: "Como montar um sistema completo no Notion e fazer sua empresa funcionar no piloto automático",
      excerpt: "Crie automações inteligentes e processos integrados que fazem sua empresa operar sozinha enquanto você foca no estratégico.",
      date: "2025-01-10",
      readTime: "10 min",
      category: "Automação",
      slug: "sistema-completo-notion-automacao",
      image: sistemaCompletoImage
    }
  ];

  // Extract unique categories
  const allCategories = Array.from(new Set(blogPosts.map(post => post.category)));
  const categories = ["Todos", ...allCategories];

  // Count posts per category
  const getCategoryCount = (category: string) => {
    if (category === "Todos") return blogPosts.length;
    return blogPosts.filter(post => post.category === category).length;
  };

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = 
        debouncedSearchTerm === "" ||
        post.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === "Todos" || 
        post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [debouncedSearchTerm, selectedCategory, blogPosts]);

  const recentPosts = filteredPosts.slice(0, 5);
  const archivedPosts = filteredPosts.slice(5);
  const displayedPosts = showArchived ? filteredPosts : recentPosts;

  return (
    <>
      <Helmet>
        <title>Blog - Focus Gestão Empresarial | Artigos sobre Produtividade e Organização</title>
        <meta 
          name="description" 
          content="Explore artigos, dicas e insights sobre gestão empresarial, produtividade, Notion e o Método FOCUS™. Conteúdo prático para transformar sua rotina e negócio." 
        />
        <meta name="keywords" content="blog gestão empresarial, produtividade, notion, método focus, organização empresarial" />
        <link rel="canonical" href="https://focusinteligente.com/blog" />
      </Helmet>

      <div className="min-h-screen pt-24 pb-16">
        {/* Breadcrumbs */}
        <div className="container-focus mb-8">
          <nav className="flex items-center space-x-2 text-sm text-foreground-muted">
            <Link to="/" className="hover:text-primary transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-foreground">Blog</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container-focus mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-6">
              <BookOpen className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-foreground-muted">
                Conteúdo sobre Gestão e Produtividade
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Blog Focus
            </h1>
            
            <p className="text-xl text-foreground-muted leading-relaxed">
              Artigos, insights e dicas práticas sobre gestão empresarial, produtividade e organização. 
              Transforme sua rotina e negócio com conteúdo aplicável no dia a dia.
            </p>
          </div>
        </section>

        {/* Search and Filters Section */}
        <section className="container-focus mb-16">
          <div className="relative overflow-hidden bg-gradient-to-br from-card/60 via-card/50 to-card/40 border border-card-border rounded-2xl p-8 backdrop-blur-sm shadow-lg">
            {/* Decorative gradient orbs */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              {/* Search Input */}
              <div className="mb-8 relative group">
                <div className="absolute inset-0 bg-primary/5 rounded-xl blur-sm opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input
                    type="text"
                    placeholder="Buscar artigos por título ou conteúdo..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-12 h-14 text-base border-2 border-card-border bg-background/50 backdrop-blur-sm rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                      aria-label="Limpar busca"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Category Filters */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-card-border to-transparent"></div>
                  <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">Categorias</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-card-border to-transparent"></div>
                </div>
                
                <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent hover:scrollbar-thumb-muted-foreground">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className={`
                        cursor-pointer whitespace-nowrap px-5 py-2.5 text-sm font-medium transition-all duration-200
                        ${selectedCategory === category 
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 scale-105" 
                          : "border-2 border-card-border/60 hover:border-primary/40 hover:bg-primary/5 hover:scale-105"
                        }
                      `}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <span>{category}</span>
                      <span className={`ml-1.5 ${selectedCategory === category ? "opacity-90" : "opacity-60"}`}>
                        ({getCategoryCount(category)})
                      </span>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Results Counter */}
              <div className="flex items-center justify-between pt-4 border-t border-card-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  <p className="text-sm font-medium text-foreground">
                    Mostrando <span className="text-primary font-bold">{displayedPosts.length}</span> de {filteredPosts.length} artigos
                  </p>
                </div>
                {(searchTerm || selectedCategory !== "Todos") && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("Todos");
                    }}
                    className="group flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
                    <span>Limpar filtros</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="container-focus">
          <h2 className="text-2xl font-bold mb-8">
            {searchTerm || selectedCategory !== "Todos" ? "Resultados da Busca" : "Posts Recentes"}
          </h2>
          
          {displayedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPosts.map((post) => (
                <article 
                  key={post.id}
                  className="group bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Link to={`/blog/${post.slug}`} className="block aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-foreground-muted">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-foreground-muted mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-foreground-muted mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all"
                    >
                      Ler artigo
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-card/30 border border-card-border rounded-xl">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-bold mb-2">Nenhum artigo encontrado</h3>
              <p className="text-muted-foreground mb-6">
                {searchTerm 
                  ? `Não encontramos resultados para "${searchTerm}"`
                  : "Não há artigos nesta categoria"
                }
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Todos");
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          )}

          {/* CTA no meio da listagem de posts */}
          {displayedPosts.length > 0 && (
            <div className="mt-16 mb-8">
              <BlogCTA variant="default" location="blog_listing_page" />
            </div>
          )}

          {/* Ver Mais Button */}
          {archivedPosts.length > 0 && (
            <div className="mt-12 text-center">
              <Button
                size="lg"
                onClick={() => setShowArchived(!showArchived)}
                className="min-w-[200px]"
              >
                {showArchived ? "Ver Menos" : "Ver Mais"}
              </Button>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="container-focus mt-20">
          <div className="bg-gradient-primary rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Quer transformar seu negócio?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Conheça nossas soluções personalizadas e comece a aplicar o Método FOCUS™ na sua empresa.
            </p>
            <Link to="/sistemas-notion">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Conhecer Nossos Sistemas
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
