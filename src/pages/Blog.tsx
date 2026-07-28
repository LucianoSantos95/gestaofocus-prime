import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen, Search, X } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useMemo, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";



// Blog images imports
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
import planejamentoMensalImage from "@/assets/blog/planejamento-mensal-sistema.jpg";
import organizarDocumentosImage from "@/assets/blog/organizar-documentos-empresa.jpg";
import gestaoTempoImage from "@/assets/blog/gestao-tempo-quem-vive-ocupado.jpg";
import reunioesProdutavasImage from "@/assets/blog/reunioes-produtivas.jpg";
import matrizEisenhowerImage from "@/assets/blog/matriz-eisenhower-prioridades.jpg";
import organizarTarefasImage from "@/assets/blog/organizar-tarefas-dia-dia.jpg";
import planejamentoSemanalImage from "@/assets/blog/planejamento-semanal-passo-passo.jpg";
import metodoPessoalImage from "@/assets/blog/metodo-pessoal-produtividade.jpg";
import organizacaoPessoalProfissionalImage from "@/assets/blog/organizacao-pessoal-profissional.jpg";
import reduzirEstresseImage from "@/assets/blog/reduzir-estresse-trabalho-organizacao.jpg";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleArticles, setVisibleArticles] = useState(4);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const blogPosts = [
    {
      id: -10,
      title: "Notion para Agências em 2026: Guia Completo do Workspace que Substitui 5 Ferramentas",
      excerpt: "Como montar um workspace no Notion que centraliza CRM, projetos, equipe e processos da sua agência — com roteiro de implementação em 8 semanas.",
      date: "2026-06-01",
      readTime: "18 min",
      category: "Gestão para Agências",
      slug: "notion-para-agencias-guia-completo-2026",
      image: gestaoProjetosImage
    },
    {
      id: -9,
      title: "IA para PMEs: Como Automatizar Processos sem Precisar de Equipe de TI",
      excerpt: "Guia prático para agências, consultorias e pequenas empresas usarem IA para recuperar 10-15 horas semanais — sem código e sem contratar desenvolvedores.",
      date: "2026-06-05",
      readTime: "16 min",
      category: "Sistemas e Processos",
      slug: "ia-para-pmes-automatizar-processos",
      image: processosInteligentesImage
    },
    {
      id: -8,
      title: "Mapeamento de Processos para Agências: Da Teoria à Prática",
      excerpt: "Como documentar os processos operacionais da sua agência com exemplos reais de onboarding e entrega de projetos que a equipe realmente vai seguir.",
      date: "2026-06-10",
      readTime: "15 min",
      category: "Sistemas e Processos",
      slug: "mapeamento-processos-agencias",
      image: mapeamentoImage
    },
    {
      id: -7,
      title: "Como Reduzir o Estresse Operacional na Sua Agência com Organização",
      excerpt: "Técnicas práticas de organização e planejamento para reduzir o estresse da equipe em agências, consultorias e prestadores de serviço.",
      date: "2026-01-06",
      readTime: "13 min",
      category: "Produtividade Operacional",
      slug: "reduzir-estresse-trabalho-organizacao",
      image: reduzirEstresseImage
    },
    {
      id: -6,
      title: "Como Equilibrar Operação e Estratégia na Sua Consultoria",
      excerpt: "Estratégias para gestores de agências e consultorias equilibrarem a rotina operacional com o planejamento estratégico do negócio.",
      date: "2026-01-06",
      readTime: "11 min",
      category: "Gestão para Agências",
      slug: "organizacao-pessoal-profissional",
      image: organizacaoPessoalProfissionalImage
    },
    {
      id: -5,
      title: "Como Criar um Sistema de Produtividade Sob Medida Para Sua Operação",
      excerpt: "Monte um método de produtividade personalizado para a realidade da sua agência ou consultoria — sem depender de fórmulas genéricas.",
      date: "2026-01-06",
      readTime: "12 min",
      category: "Sistemas e Processos",
      slug: "metodo-pessoal-produtividade",
      image: metodoPessoalImage
    },
    {
      id: -4,
      title: "Planejamento Semanal Para Gestores de Agências e Consultorias",
      excerpt: "Guia passo a passo para planejar a semana da sua equipe de forma estratégica, mesmo com uma rotina cheia de entregas e demandas de clientes.",
      date: "2026-01-06",
      readTime: "10 min",
      category: "Produtividade Operacional",
      slug: "planejamento-semanal-passo-passo",
      image: planejamentoSemanalImage
    },
    {
      id: -3,
      title: "Como Organizar as Demandas Diárias da Sua Agência Sem Sobrecarga",
      excerpt: "Sistema prático para gestores organizarem tarefas e demandas de clientes sem se sentirem sobrecarregados no dia a dia.",
      date: "2026-01-06",
      readTime: "10 min",
      category: "Produtividade Operacional",
      slug: "organizar-tarefas-dia-dia",
      image: organizarTarefasImage
    },
    {
      id: -2,
      title: "Matriz de Eisenhower: Priorize Entregas e Projetos na Sua Agência",
      excerpt: "Use a Matriz de Eisenhower para definir prioridades entre projetos de clientes, tarefas internas e demandas urgentes na sua agência.",
      date: "2025-12-22",
      readTime: "11 min",
      category: "Gestão para Agências",
      slug: "matriz-eisenhower-prioridades",
      image: matrizEisenhowerImage
    },
    {
      id: 0,
      title: "Reuniões Produtivas: O Guia Para Agências Que Perdem Tempo em Alinhamentos",
      excerpt: "Transforme reuniões improdutivas em alinhamentos rápidos e eficientes. Passo a passo para agências e consultorias que precisam de agilidade.",
      date: "2025-12-22",
      readTime: "12 min",
      category: "Gestão para Agências",
      slug: "reunioes-produtivas-parar-perder-tempo",
      image: reunioesProdutavasImage
    },
    {
      id: 5,
      title: "Gestão do Tempo Para Gestores de Agências Que Vivem Apagando Incêndios",
      excerpt: "Recupere o controle da sua agenda com técnicas práticas para gestores de agências e consultorias sobrecarregados.",
      date: "2025-02-20",
      readTime: "9 min",
      category: "Produtividade Operacional",
      slug: "gestao-tempo-ocupado-estrategias-funcionam",
      image: gestaoTempoImage
    },
    {
      id: 7,
      title: "Checklist Diário Para Agências: Aumente a Produtividade da Equipe em 40%",
      excerpt: "O sistema de checklist que agências de alta performance usam para garantir entregas no prazo e reduzir retrabalho.",
      date: "2025-02-15",
      readTime: "8 min",
      category: "Produtividade Operacional",
      slug: "checklist-diario-produtividade",
      image: checklistDiarioImage
    },
    {
      id: 8,
      title: "Planejamento Semanal Para Equipes de Agência: Modelo Pronto Incluso",
      excerpt: "O método completo de planejamento semanal para equipes que gerenciam múltiplos clientes e projetos simultâneos.",
      date: "2025-02-14",
      readTime: "9 min",
      category: "Gestão para Agências",
      slug: "organizar-rotina-semanal",
      image: organizarRotinaImage
    },
    {
      id: 11,
      title: "Planejamento Mensal Para Agências: Framework de 4 Pilares",
      excerpt: "Framework prático para planejar o mês da sua agência de forma estratégica, com metas claras para cada projeto e cliente.",
      date: "2025-02-11",
      readTime: "9 min",
      category: "Gestão para Agências",
      slug: "planejamento-mensal-sistema",
      image: planejamentoMensalImage
    },
    {
      id: 16,
      title: "Como Centralizar Documentos e Processos da Sua Agência em Um Só Lugar",
      excerpt: "Sistema completo para centralizar SOPs, briefings, contratos e documentos da agência, acabando com informações perdidas.",
      date: "2025-02-06",
      readTime: "8 min",
      category: "Sistemas e Processos",
      slug: "organizar-documentos-empresa",
      image: organizarDocumentosImage
    },
    {
      id: 17,
      title: "Visão 360° dos Projetos da Sua Agência: Como Ter Clareza Total com Sistemas",
      excerpt: "O método para configurar dashboards e ter visão completa de todos os projetos e entregas da sua agência em minutos.",
      date: "2025-02-05",
      readTime: "9 min",
      category: "Sistemas e Processos",
      slug: "clareza-projetos-notion",
      image: clarezaNotionImage
    },
    {
      id: 18,
      title: "Sua Agência Está Sempre Apagando Incêndios? Veja Como Parar Com Isso",
      excerpt: "O ciclo vicioso do modo bombeiro está matando agências promissoras. Descubra como construir uma operação estratégica e previsível.",
      date: "2025-02-04",
      readTime: "11 min",
      category: "Gestão para Agências",
      slug: "parar-apagar-incendios-empresa",
      image: pararIncendiosImage
    },
    {
      id: 19,
      title: "Como Transformar Demandas Soltas em Entregas Consistentes na Sua Agência",
      excerpt: "O método testado para transformar demandas desorganizadas de clientes em um fluxo previsível de entregas e resultados.",
      date: "2025-02-03",
      readTime: "10 min",
      category: "Gestão para Agências",
      slug: "tarefas-soltas-em-resultados",
      image: tarefasResultadosImage
    },
    {
      id: 20,
      title: "Pare de Confiar na Memória: Sistemas Que Escalam Sua Consultoria",
      excerpt: "Sua consultoria não pode depender da memória dos sócios. Descubra como sistemas externos liberam o potencial da equipe.",
      date: "2025-02-02",
      readTime: "9 min",
      category: "Sistemas e Processos",
      slug: "confiar-sistemas-producao",
      image: confiarSistemasImage
    },
    {
      id: 21,
      title: "Produtividade em Agências: Pare de Fazer Mais e Foque no Que Gera Resultado",
      excerpt: "Sua agência está ocupada ou produtiva? Descubra como focar nas entregas que realmente movem a agulha dos resultados.",
      date: "2025-02-01",
      readTime: "8 min",
      category: "Produtividade Operacional",
      slug: "produtividade-fazer-o-que-importa",
      image: produtividadeFazerImage
    },
    {
      id: 22,
      title: "O Erro Silencioso Que Destrói a Produtividade em Agências e Consultorias",
      excerpt: "Descubra o erro invisível que custa horas de produtividade nas equipes de agências e o método prático para eliminá-lo.",
      date: "2025-01-29",
      readTime: "12 min",
      category: "Gestão para Agências",
      slug: "erro-silencioso-produtividade-equipe",
      image: erroSilenciosoImage
    },
    {
      id: 23,
      title: "Do Caos à Rotina Produtiva: Organize a Operação da Sua Agência",
      excerpt: "Método prático para transformar dias caóticos em uma operação organizada e produtiva na sua agência ou consultoria.",
      date: "2025-01-28",
      readTime: "10 min",
      category: "Sistemas e Processos",
      slug: "transformar-caos-rotina-produtiva-notion",
      image: caosRotinaImage
    },
    {
      id: 24,
      title: "Gestão Proativa vs. Modo Bombeiro: Sua Agência Está em Qual?",
      excerpt: "A diferença entre gestão proativa e reatividade constante em agências. Saia do modo bombeiro e torne-se um gestor estratégico.",
      date: "2025-01-27",
      readTime: "9 min",
      category: "Gestão para Agências",
      slug: "gerenciando-tarefas-ou-apagando-incendios",
      image: tarefasIncendiosImage
    },
    {
      id: 25,
      title: "Sistema de Produtividade Para Agências: Passo a Passo Sem Complicar",
      excerpt: "Guia completo para criar um sistema de produtividade simples e funcional que se adapta à realidade de agências e consultorias.",
      date: "2025-01-26",
      readTime: "11 min",
      category: "Sistemas e Processos",
      slug: "criar-sistema-produtividade-funciona",
      image: sistemaProdutividadeImage
    },
    {
      id: 26,
      title: "Lições de +150 Sistemas Criados Para Agências e Consultorias",
      excerpt: "Insights valiosos de quem já organizou mais de 150 sistemas para empresas de serviço. O que funciona e o que evitar.",
      date: "2025-01-25",
      readTime: "13 min",
      category: "Sistemas e Processos",
      slug: "150-sistemas-notion-licoes-praticas",
      image: sistemas150Image
    },
    {
      id: 27,
      title: "Por Que 80% das Agências Perdem Tempo Todo Dia (e Como Resolver)",
      excerpt: "Os principais vilões da produtividade que consomem 2-3 horas por dia em agências e o método para recuperar esse tempo.",
      date: "2025-01-22",
      readTime: "8 min",
      category: "Produtividade Operacional",
      slug: "perda-tempo-profissionais",
      image: perdaTempoImage
    },
    {
      id: 28,
      title: "Sistemas Integrados vs. Planilhas: O Que Agências Modernas Estão Usando",
      excerpt: "Compare planilhas com sistemas integrados e descubra por que agências em crescimento estão migrando para plataformas unificadas.",
      date: "2025-01-21",
      readTime: "9 min",
      category: "Sistemas e Processos",
      slug: "notion-vs-planilhas",
      image: notionVsPlanilhasImage
    },
    {
      id: 29,
      title: "Como Organizar Projetos Caóticos e Dobrar a Eficiência da Sua Agência",
      excerpt: "O método testado que transforma projetos de clientes caóticos em fluxos organizados, dobrando a eficiência da equipe em 30 dias.",
      date: "2025-01-20",
      readTime: "9 min",
      category: "Gestão para Agências",
      slug: "organizar-projetos-caoticos",
      image: organizarProjetosImage
    },
    {
      id: 30,
      title: "Processos Inteligentes: Automatize a Operação da Sua Agência",
      excerpt: "Framework para criar processos que funcionam no piloto automático, liberando sua equipe para focar em entregas estratégicas.",
      date: "2025-01-20",
      readTime: "10 min",
      category: "Sistemas e Processos",
      slug: "processos-inteligentes-autonomos",
      image: processosInteligentesImage
    },
    {
      id: 31,
      title: "3 Sistemas Essenciais Que Toda Agência ou Consultoria Deveria Ter",
      excerpt: "Conheça os 3 sistemas que transformam agências e consultorias desorganizadas em operações profissionais e escaláveis.",
      date: "2025-01-20",
      readTime: "7 min",
      category: "Sistemas e Processos",
      slug: "sistemas-notion-pequenas-empresas",
      image: sistemasNotionPequenasImage
    },
    {
      id: 32,
      title: "O Segredo Das Agências Produtivas: Sistemas de Gestão Que Realmente Funcionam",
      excerpt: "Descubra como agências de alta performance usam sistemas de gestão para multiplicar produtividade e organizar o negócio.",
      date: "2025-01-20",
      readTime: "7 min",
      category: "Gestão para Agências",
      slug: "poder-do-notion-empresas-produtivas",
      image: notionPoderImage
    },
    {
      id: 33,
      title: "Mapeamento de Processos: Desbloqueie o Crescimento da Sua Agência",
      excerpt: "Identifique gargalos, elimine retrabalho e crie fluxos de trabalho que realmente funcionam para sua agência escalar.",
      date: "2025-01-18",
      readTime: "8 min",
      category: "Crescimento e Escala",
      slug: "mapeamento-processos-crescimento",
      image: mapeamentoImage
    },
    {
      id: 34,
      title: "5 Erros de Produtividade Que Agências Cometem Sem Perceber",
      excerpt: "Identifique os erros mais comuns que sabotam a produtividade em agências e consultorias e aprenda a corrigi-los.",
      date: "2025-01-15",
      readTime: "6 min",
      category: "Produtividade Operacional",
      slug: "5-erros-produtividade",
      image: errosImage
    },
    {
      id: 35,
      title: "Gestão de Projetos Para Agências: Do Briefing à Entrega Sem Perder Tempo",
      excerpt: "Monte um sistema completo de gestão de projetos para sua agência e transforme a forma como sua equipe entrega resultados.",
      date: "2025-01-12",
      readTime: "9 min",
      category: "Gestão para Agências",
      slug: "gestao-projetos-notion",
      image: gestaoProjetosImage
    },
    {
      id: 36,
      title: "Como Montar Uma Operação Que Funciona No Piloto Automático Para Agências",
      excerpt: "Crie automações e processos integrados que fazem sua agência operar com previsibilidade enquanto você foca no estratégico.",
      date: "2025-01-10",
      readTime: "10 min",
      category: "Crescimento e Escala",
      slug: "sistema-completo-notion-automacao",
      image: sistemaCompletoImage
    }
  ];

  // Main categories for filtering (chips Sanjaya-style)
  const mainCategories = [
    "Gestão para Agências",
    "Produtividade Operacional",
    "Sistemas e Processos",
    "Crescimento e Escala",
  ];

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        debouncedSearchTerm === "" ||
        post.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(debouncedSearchTerm.toLowerCase());

      const matchesCategory = !selectedCategory || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [debouncedSearchTerm, selectedCategory, blogPosts]);

  const getCategoryCount = (category: string) =>
    blogPosts.filter((post) => post.category === category).length;

  const isFiltering = !!selectedCategory || !!debouncedSearchTerm;
  const postsToShow = isFiltering ? filteredPosts : filteredPosts.slice(0, visibleArticles);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <SEOHead
        title="Blog Focus | Gestão para Agências, Consultorias e Prestadores de Serviço"
        description="Artigos práticos sobre gestão de projetos, financeiro, CRM e produtividade para agências, consultorias e prestadores de serviço."
        canonical="/blog"
        keywords="gestão para agências, sistema para consultoria, produtividade prestadores de serviço, gestão de projetos agências"
        type="website"
      />

      <Navigation />

      {/* HERO — Sanjaya /blog */}
      <section
        className="relative overflow-hidden"
        style={{ padding: "180px 24px 60px", borderBottom: "1px solid var(--line)" }}
      >
        <div className="container-focus relative z-10 text-center">
          <span
            className="anim-up inline-block mb-8"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#9DE89D",
              border: "1px solid rgba(157,232,157,0.30)",
              borderRadius: 4,
              padding: "5px 12px",
              letterSpacing: "0.10em",
            }}
          >
            &lt;:BLOG&gt;
          </span>

          <h1
            className="hero-title anim-up-1 mx-auto"
            style={{ maxWidth: 1000, fontSize: "clamp(36px, 5.5vw, 68px)" }}
          >
            Conteúdo para quem <strong>opera no improviso</strong> e quer sair dele.
          </h1>

          <p className="hero-subtitle anim-up-2 mx-auto mt-8" style={{ maxWidth: 680 }}>
            Ideias, métodos e guias práticos para agências, consultorias e PMEs de serviço
            organizarem operação, processos e produtividade.
          </p>
        </div>
      </section>

      {/* FILTERS — Sanjaya chip row + search */}
      <section className="container-focus" style={{ padding: "48px 24px 24px" }}>
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className="snj-chip"
              data-active={selectedCategory === null}
            >
              Todos · {blogPosts.length}
            </button>
            {mainCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                className="snj-chip"
                data-active={selectedCategory === cat}
              >
                {cat} · {getCategoryCount(cat)}
              </button>
            ))}
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
              style={{ color: "var(--text3)" }}
            />
            <Input
              type="text"
              placeholder="Buscar por título ou tema..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-11 pr-11 h-12 rounded-full border-0"
              style={{
                background: "var(--bg2)",
                border: "1px solid var(--line)",
                color: "var(--text)",
                fontSize: 14,
              }}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2"
                style={{ color: "var(--text3)" }}
                aria-label="Limpar busca"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="container-focus" style={{ padding: "24px 24px 80px" }}>
        <div className="max-w-6xl mx-auto">
          <div
            className="flex items-center justify-between mb-8"
            style={{
              paddingBottom: 16,
              borderBottom: "1px solid var(--line)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--text3)",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                fontWeight: 400,
                margin: 0,
              }}
            >
              {isFiltering ? "Resultados" : "Últimos artigos"} ·{" "}
              {filteredPosts.length} {filteredPosts.length === 1 ? "artigo" : "artigos"}
            </h2>
          </div>

          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {postsToShow.map((post) => (
                  <article
                    key={`${post.id}-${post.slug}`}
                    className="group snj-article"
                    style={{
                      background: "var(--bg2)",
                      border: "1px solid var(--line)",
                      borderRadius: 16,
                      overflow: "hidden",
                      transition: "border-color 0.3s ease, transform 0.3s ease",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="block overflow-hidden"
                      style={{ aspectRatio: "16 / 10", background: "var(--bg3)" }}
                    >
                      <img
                        src={post.image}
                        alt={`Artigo sobre ${post.title.toLowerCase()}`}
                        loading="lazy"
                        className="group-hover:scale-[1.04]"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.6s ease",
                        }}
                      />
                    </Link>
                    <div
                      style={{
                        padding: "22px 22px 24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        flex: 1,
                      }}
                    >
                      <div
                        className="flex items-center gap-3"
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                          color: "var(--text3)",
                          letterSpacing: "0.10em",
                          textTransform: "uppercase",
                        }}
                      >
                        <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
                        <span style={{ opacity: 0.4 }}>•</span>
                        <span>{post.category}</span>
                      </div>

                      <h3
                        style={{
                          fontSize: 18,
                          fontWeight: 600,
                          lineHeight: 1.3,
                          letterSpacing: "-0.01em",
                          color: "var(--text)",
                        }}
                        className="line-clamp-3"
                      >
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p
                        className="line-clamp-2"
                        style={{
                          color: "var(--text2)",
                          fontSize: 13,
                          lineHeight: 1.6,
                        }}
                      >
                        {post.excerpt}
                      </p>

                      <div
                        className="flex items-center justify-between mt-auto pt-4"
                        style={{ borderTop: "1px solid var(--line)" }}
                      >
                        <span
                          className="inline-flex items-center gap-1.5"
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 10,
                            color: "var(--text3)",
                            letterSpacing: "0.08em",
                          }}
                        >
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1.5"
                          style={{ fontSize: 12, color: "var(--text)", fontWeight: 500 }}
                        >
                          Ler artigo <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {!isFiltering && visibleArticles < filteredPosts.length && (
                <div className="flex justify-center mt-12">
                  <button
                    onClick={() => setVisibleArticles((prev) => prev + 6)}
                    className="inline-flex items-center gap-2"
                    style={{
                      border: "1px solid var(--line2)",
                      background: "rgba(255,255,255,0.04)",
                      color: "var(--text)",
                      padding: "12px 24px",
                      borderRadius: 999,
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                  >
                    Carregar mais artigos <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div
              className="text-center"
              style={{
                padding: "60px 24px",
                background: "var(--bg2)",
                border: "1px solid var(--line)",
                borderRadius: 16,
              }}
            >
              <BookOpen
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "var(--text3)" }}
              />
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
                Nenhum artigo encontrado
              </h3>
              <p style={{ color: "var(--text2)", fontSize: 14, marginBottom: 20 }}>
                {searchTerm
                  ? `Sem resultados para "${searchTerm}".`
                  : "Não há artigos nesta categoria."}
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory(null);
                }}
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ===================== NEWSLETTER ===================== */}
      <section style={{ padding: "0 24px 80px" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            border: "1px solid rgba(157,232,157,0.18)",
            borderRadius: 28,
            padding: "40px 40px",
            background: "linear-gradient(135deg, rgba(157,232,157,0.05) 0%, transparent 55%), var(--bg2)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 32,
              alignItems: "center",
            }}
            className="flex-newsletter"
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--text2)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Newsletter semanal · Gratuita
              </p>
              <h3
                style={{
                  fontSize: "clamp(18px, 3vw, 24px)",
                  fontWeight: 600,
                  color: "var(--text)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.3,
                  marginBottom: 12,
                }}
              >
                Quantas assinaturas você paga e <em style={{ color: "#9DE89D", fontStyle: "normal" }}>não usa nem 30%?</em>
              </h3>
              <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.65, maxWidth: 500 }}>
                Toda semana: o que cortar, o que vale manter, e como fazer mais com menos ferramenta.
              </p>
            </div>
            <a
              href="https://gestaofocus.notion.site/39dbe653a5aa80faa03ed0546b257556?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 24px",
                background: "rgba(157,232,157,0.10)",
                border: "1px solid rgba(157,232,157,0.28)",
                borderRadius: 12,
                color: "#9DE89D",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "var(--font-sans)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              ✉ Quero receber
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .snj-chip {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 8px 16px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: var(--bg2);
          color: var(--text2);
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .snj-chip:hover { border-color: var(--line2); color: var(--text); }
        .snj-chip[data-active="true"] {
          background: var(--text);
          color: var(--bg);
          border-color: var(--text);
        }
        .snj-article:hover { border-color: var(--line2) !important; transform: translateY(-2px); }
      `}</style>
    </div>
  );
};

export default Blog;
