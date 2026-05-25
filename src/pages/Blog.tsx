import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen, Search, X, Building2, Zap, Layout, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useMemo, useEffect } from "react";
import Navigation from "@/components/Navigation";


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
import mapasMentaisImage from "@/assets/blog/mapas-mentais-organizar-ideias.jpg";
import gestaoTempoImage from "@/assets/blog/gestao-tempo-quem-vive-ocupado.jpg";
import sistemaEstudosImage from "@/assets/blog/sistema-estudos-eficiente.jpg";
import reunioesProdutavasImage from "@/assets/blog/reunioes-produtivas.jpg";
import metodoGtdImage from "@/assets/blog/metodo-gtd-guia.jpg";
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
      id: -1,
      title: "Método GTD Para Gestores: Organize Projetos e Entregas de Clientes",
      excerpt: "Aplique o método GTD (Getting Things Done) na gestão da sua agência ou consultoria. Guia completo com exemplos para equipes de serviço.",
      date: "2025-12-22",
      readTime: "14 min",
      category: "Sistemas e Processos",
      slug: "metodo-gtd-guia-completo",
      image: metodoGtdImage
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
      id: 1,
      title: "Rotina Matinal Para Gestores: 15 Minutos Que Transformam Seu Dia",
      excerpt: "O método simples que gestores de agências e consultorias usam para começar o dia com clareza e foco nas prioridades certas.",
      date: "2025-02-20",
      readTime: "8 min",
      category: "Produtividade Operacional",
      slug: "rotina-matinal-poderosa-15-minutos",
      image: rotinaMatinalImage
    },
    {
      id: 2,
      title: "Gestão Financeira Para Agências: Controle Receitas e Custos Por Projeto",
      excerpt: "Sistema prático para agências e consultorias controlarem receitas, custos por cliente e fluxo de caixa sem planilhas complexas.",
      date: "2025-02-20",
      readTime: "10 min",
      category: "Gestão para Agências",
      slug: "organizacao-financeira-pessoal-sistema-simples",
      image: organizacaoFinanceiraImage
    },
    {
      id: 3,
      title: "Como Manter o Foco da Equipe em Um Ambiente de Agência Cheio de Distrações",
      excerpt: "7 técnicas comprovadas para equipes de agências e consultorias alcançarem foco profundo mesmo com múltiplos projetos simultâneos.",
      date: "2025-02-20",
      readTime: "12 min",
      category: "Produtividade Operacional",
      slug: "melhorar-concentracao-mundo-distracoes",
      image: concentracaoImage
    },
    {
      id: 4,
      title: "Mapas Mentais Para Planejamento de Projetos em Agências",
      excerpt: "Use mapas mentais para planejar campanhas, escopos de projetos e brainstorms com sua equipe de forma visual e organizada.",
      date: "2025-02-20",
      readTime: "8 min",
      category: "Sistemas e Processos",
      slug: "mapas-mentais-organizar-ideias-produtividade",
      image: mapasMentaisImage
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
      id: 6,
      title: "Como Estruturar Treinamentos Internos na Sua Agência ou Consultoria",
      excerpt: "Monte um sistema de capacitação para sua equipe usando técnicas modernas de aprendizagem e onboarding eficiente.",
      date: "2025-02-20",
      readTime: "10 min",
      category: "Crescimento e Escala",
      slug: "sistema-estudos-eficiente-tecnicas-modernas",
      image: sistemaEstudosImage
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
      id: 9,
      title: "Produtividade Para Consultores Independentes e Freelancers",
      excerpt: "Estrutura completa para consultores e freelancers criarem sistemas de produtividade profissional sem depender de equipe.",
      date: "2025-02-13",
      readTime: "10 min",
      category: "Produtividade Operacional",
      slug: "produtividade-autonomos-freelancers",
      image: produtividadeAutonomosImage
    },
    {
      id: 10,
      title: "Sistemas Visuais Para Agências: Elimine a Procrastinação da Equipe",
      excerpt: "O método baseado em dashboards visuais que elimina procrastinação em equipes de agências sem depender de cobranças.",
      date: "2025-02-12",
      readTime: "7 min",
      category: "Sistemas e Processos",
      slug: "parar-procrastinar-sistemas-visuais",
      image: pararProcrastinarImage
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
      id: 12,
      title: "Second Brain Para Agências: Centralize Conhecimento e Processos",
      excerpt: "Como construir um repositório digital centralizado para sua agência, eliminando informações perdidas em chats e e-mails.",
      date: "2025-02-10",
      readTime: "8 min",
      category: "Sistemas e Processos",
      slug: "organizacao-pessoal-tecnologia",
      image: organizacaoPessoalImage
    },
    {
      id: 13,
      title: "Metas SMART Para Agências: Defina Objetivos Claros Por Projeto e Cliente",
      excerpt: "Aprenda a transformar metas vagas em objetivos SMART acionáveis para cada projeto, cliente e trimestre da sua agência.",
      date: "2025-02-09",
      readTime: "7 min",
      category: "Crescimento e Escala",
      slug: "metas-inteligentes-smart",
      image: metasSmartImage
    },
    {
      id: 14,
      title: "Como Evitar Distrações em Ambientes de Agência e Consultoria",
      excerpt: "Técnicas práticas para equipes de serviço eliminarem distrações digitais e criarem ambientes de foco profundo.",
      date: "2025-02-08",
      readTime: "10 min",
      category: "Produtividade Operacional",
      slug: "guia-foco-evitar-distracoes",
      image: guiaFocoImage
    },
    {
      id: 15,
      title: "Métodos de Produtividade Que Funcionam Para Agências em 2025",
      excerpt: "Análise dos métodos de produtividade mais eficazes para equipes de agências e consultorias. Quais adotar e quais evitar.",
      date: "2025-02-07",
      readTime: "11 min",
      category: "Produtividade Operacional",
      slug: "metodos-produtividade-2025",
      image: metodosProdutividadeImage
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

  // Main categories for filtering
  const mainCategories = [
    { name: "Gestão para Agências", icon: Building2, color: "from-blue-500 to-blue-600" },
    { name: "Produtividade Operacional", icon: Zap, color: "from-yellow-500 to-orange-500" },
    { name: "Sistemas e Processos", icon: Layout, color: "from-primary to-accent" },
    { name: "Crescimento e Escala", icon: TrendingUp, color: "from-purple-500 to-pink-500" }
  ];

  // Featured articles - most relevant for the niche
  const featuredSlugs = [
    "parar-apagar-incendios-empresa",
    "150-sistemas-notion-licoes-praticas",
    "organizar-projetos-caoticos"
  ];
  const featuredPosts = blogPosts.filter(post => featuredSlugs.includes(post.slug));

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = 
        debouncedSearchTerm === "" ||
        post.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
      
      const matchesCategory = 
        !selectedCategory || 
        post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [debouncedSearchTerm, selectedCategory, blogPosts]);

  const getCategoryCount = (category: string) => {
    return blogPosts.filter(post => post.category === category).length;
  };

  return (
    <>
      <SEOHead
        title="Blog Focus | Gestão para Agências, Consultorias e Prestadores de Serviço"
        description="Artigos práticos sobre gestão de projetos, financeiro, CRM e produtividade para agências, consultorias e prestadores de serviço."
        canonical="/blog"
        keywords="gestão para agências, sistema para consultoria, produtividade prestadores de serviço, gestão de projetos agências"
        type="website"
      />

      <Navigation />

      <div className="min-h-screen pt-24 pb-16">
        {/* Breadcrumbs */}
        <div className="container-focus mb-8">
          <nav className="flex items-center space-x-2 text-sm text-foreground-muted">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <span>/</span>
            <span className="text-foreground">Blog</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container-focus mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-6">
              <BookOpen className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-foreground-muted">Central de Conteúdo Focus</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Blog Focus — Gestão para Agências, Consultorias e Prestadores de Serviço
            </h1>
            
            <p className="text-xl text-foreground-muted leading-relaxed">
              Artigos práticos sobre gestão de projetos, produtividade operacional e sistemas para escalar sua agência ou consultoria.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="container-focus mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-12 h-14 text-base border-2 border-card-border bg-card/50 backdrop-blur-sm rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
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
        </section>

        {/* Categories Section */}
        <section className="container-focus mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Encontre artigos por categoria</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mainCategories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(isSelected ? null : category.name)}
                  className={`group relative overflow-hidden rounded-xl p-6 border transition-all duration-300 ${
                    isSelected 
                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/20" 
                      : "border-card-border bg-card hover:border-primary/50 hover:shadow-lg"
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  <div className="relative z-10 flex flex-col items-center text-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${category.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-sm md:text-base">{category.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {getCategoryCount(category.name)} artigos
                    </Badge>
                  </div>
                </button>
              );
            })}
          </div>

          {selectedCategory && (
            <div className="flex justify-center mt-6">
              <Button
                variant="outline"
                onClick={() => setSelectedCategory(null)}
                className="gap-2"
              >
                <X className="w-4 h-4" />
                Limpar filtro
              </Button>
            </div>
          )}
        </section>

        {/* Featured Articles Section */}
        {!selectedCategory && !debouncedSearchTerm && (
          <section className="container-focus mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Destaques da Focus</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <article 
                  key={post.id}
                  className={`group relative overflow-hidden rounded-2xl border border-card-border bg-card ${
                    index === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className={`aspect-video ${index === 0 ? "md:aspect-[16/10]" : ""} overflow-hidden`}>
                      <img 
                        src={post.image} 
                        alt={`Artigo sobre ${post.title.toLowerCase()} para agências e consultorias`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Badge className="mb-3 bg-primary/90">{post.category}</Badge>
                      <h3 className={`font-bold mb-2 group-hover:text-primary transition-colors ${
                        index === 0 ? "text-xl md:text-2xl" : "text-lg"
                      }`}>
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-foreground-muted">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('pt-BR')}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* All Articles Section */}
        <section className="container-focus mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              {selectedCategory || debouncedSearchTerm ? "Resultados" : "Últimos artigos publicados"}
            </h2>
            <span className="text-sm text-foreground-muted">
              {filteredPosts.length} artigos
            </span>
          </div>
          
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(selectedCategory || debouncedSearchTerm ? filteredPosts : filteredPosts.slice(0, visibleArticles)).map((post) => (
                  <article 
                    key={`${post.id}-${post.slug}`}
                    className="group bg-card border border-card-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <Link to={`/blog/${post.slug}`} className="block aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={`Artigo sobre ${post.title.toLowerCase()} para agências e consultorias`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </Link>
                    <div className="p-6">
                      <Badge variant="outline" className="mb-3 text-primary border-primary/30">
                        {post.category}
                      </Badge>
                      
                      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      
                      <p className="text-foreground-muted mb-4 line-clamp-2 text-sm">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-foreground-muted mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('pt-BR')}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                      >
                        Ler artigo
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Ver mais button - only show when not filtering and there are more articles */}
              {!selectedCategory && !debouncedSearchTerm && visibleArticles < filteredPosts.length && (
                <div className="flex justify-center mt-12">
                  <Button 
                    onClick={() => setVisibleArticles(prev => prev + 4)}
                    variant="outline"
                    size="lg"
                    className="gap-2 px-8"
                  >
                    Ver mais
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </>
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
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory(null); }}>
                Limpar Filtros
              </Button>
            </div>
          )}
        </section>



      </div>

      
    </>
  );
};

export default Blog;
