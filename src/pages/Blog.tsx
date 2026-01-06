import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen, Search, X, Building2, Zap, Layout, Brain, Sparkles } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
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
      title: "Como Reduzir o Estresse no Trabalho Usando Organização e Planejamento",
      excerpt: "Descubra como organização e planejamento podem reduzir o estresse no trabalho e melhorar sua qualidade de vida. Técnicas práticas para mais equilíbrio.",
      date: "2026-01-06",
      readTime: "13 min",
      category: "Bem-estar",
      slug: "reduzir-estresse-trabalho-organizacao",
      image: reduzirEstresseImage
    },
    {
      id: -6,
      title: "Organização Pessoal e Profissional: Como Equilibrar Rotina e Trabalho",
      excerpt: "Aprenda como organizar vida pessoal e profissional sem conflito. Estratégias práticas para integrar rotina e trabalho de forma equilibrada.",
      date: "2026-01-06",
      readTime: "11 min",
      category: "Organização",
      slug: "organizacao-pessoal-profissional",
      image: organizacaoPessoalProfissionalImage
    },
    {
      id: -5,
      title: "Como Criar um Método Pessoal de Produtividade Que Funcione Para Você",
      excerpt: "Aprenda a criar um método de produtividade personalizado que funcione para você. Descubra seu perfil e monte um sistema que se adapta à sua rotina.",
      date: "2026-01-06",
      readTime: "12 min",
      category: "Produtividade",
      slug: "metodo-pessoal-produtividade",
      image: metodoPessoalImage
    },
    {
      id: -4,
      title: "Planejamento Semanal Passo a Passo para Quem Vive Sem Tempo",
      excerpt: "Aprenda a planejar sua semana de forma prática e eficiente, mesmo com uma rotina corrida. Guia completo com passo a passo.",
      date: "2026-01-06",
      readTime: "10 min",
      category: "Organização",
      slug: "planejamento-semanal-passo-passo",
      image: planejamentoSemanalImage
    },
    {
      id: -3,
      title: "Como Organizar Tarefas no Dia a Dia Sem Se Sentir Sobrecarregado",
      excerpt: "Aprenda a organizar tarefas de forma simples, reduzir a sobrecarga mental e melhorar sua produtividade diária com dicas práticas.",
      date: "2026-01-06",
      readTime: "10 min",
      category: "Produtividade",
      slug: "organizar-tarefas-dia-dia",
      image: organizarTarefasImage
    },
    {
      id: -2,
      title: "Matriz de Eisenhower: Como Definir Prioridades e Focar no Que Importa",
      excerpt: "Aprenda a usar a Matriz de Eisenhower para organizar prioridades, tomar melhores decisões e focar no que realmente importa no trabalho.",
      date: "2025-12-22",
      readTime: "11 min",
      category: "Produtividade",
      slug: "matriz-eisenhower-prioridades",
      image: matrizEisenhowerImage
    },
    {
      id: -1,
      title: "Método GTD: O Que É, Como Funciona e Como Aplicar na Prática",
      excerpt: "Aprenda o método GTD (Getting Things Done) de David Allen. Guia completo com os 5 passos, exemplos práticos e dicas para organizar suas tarefas.",
      date: "2025-12-22",
      readTime: "14 min",
      category: "Produtividade",
      slug: "metodo-gtd-guia-completo",
      image: metodoGtdImage
    },
    {
      id: 0,
      title: "Como Fazer Reuniões Produtivas e Parar de Perder Tempo no Trabalho",
      excerpt: "Aprenda a transformar reuniões improdutivas em encontros eficientes. Passo a passo para planejar, conduzir e documentar reuniões que geram resultados.",
      date: "2025-12-22",
      readTime: "12 min",
      category: "Produtividade",
      slug: "reunioes-produtivas-parar-perder-tempo",
      image: reunioesProdutavasImage
    },
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
      category: "Gestão Empresarial",
      slug: "organizacao-financeira-pessoal-sistema-simples",
      image: organizacaoFinanceiraImage
    },
    {
      id: 3,
      title: "Como Melhorar Sua Concentração em Um Mundo Cheio de Distrações (Guia Prático)",
      excerpt: "7 técnicas comprovadas para alcançar estado de foco profundo mesmo com notificações, redes sociais e interrupções constantes.",
      date: "2025-02-20",
      readTime: "12 min",
      category: "Produtividade",
      slug: "melhorar-concentracao-mundo-distracoes",
      image: concentracaoImage
    },
    {
      id: 4,
      title: "Como Usar Mapas Mentais para Organizar Ideias e Aumentar a Produtividade",
      excerpt: "Transforme ideias complexas em visualizações simples que aceleram decisões e aumentam sua clareza mental.",
      date: "2025-02-20",
      readTime: "8 min",
      category: "Produtividade",
      slug: "mapas-mentais-organizar-ideias-produtividade",
      image: mapasMentaisImage
    },
    {
      id: 5,
      title: "Gestão do Tempo para Quem Vive Ocupado: Estratégias Simples que Realmente Funcionam",
      excerpt: "Recupere o controle da sua agenda com técnicas práticas que cabem na rotina de quem tem pouco tempo.",
      date: "2025-02-20",
      readTime: "9 min",
      category: "Produtividade",
      slug: "gestao-tempo-ocupado-estrategias-funcionam",
      image: gestaoTempoImage
    },
    {
      id: 6,
      title: "Como Criar um Sistema de Estudos Eficiente Usando Técnicas Modernas de Aprendizagem",
      excerpt: "Transforme sua forma de estudar com métodos científicos que maximizam retenção e economizam tempo.",
      date: "2025-02-20",
      readTime: "10 min",
      category: "Produtividade",
      slug: "sistema-estudos-eficiente-tecnicas-modernas",
      image: sistemaEstudosImage
    },
    {
      id: 7,
      title: "Checklist Diário: O Método Simples Que Aumenta Sua Produtividade em Até 40%",
      excerpt: "Descubra o sistema de checklist que profissionais de alta performance usam para maximizar resultados e reduzir stress diário.",
      date: "2025-02-15",
      readTime: "8 min",
      category: "Produtividade",
      slug: "checklist-diario-produtividade",
      image: checklistDiarioImage
    },
    {
      id: 8,
      title: "Como Organizar Sua Rotina Semanal Para Ter Mais Foco (Modelo Pronto Incluso)",
      excerpt: "O método completo de planejamento semanal que elimina decisões desnecessárias e multiplica seu foco nas tarefas que importam.",
      date: "2025-02-14",
      readTime: "9 min",
      category: "Produtividade",
      slug: "organizar-rotina-semanal",
      image: organizarRotinaImage
    },
    {
      id: 9,
      title: "Produtividade Para Quem Trabalha Sozinho: O Guia Essencial Para Autônomos e Freelancers",
      excerpt: "Estrutura completa para autônomos e freelancers criarem sistemas de produtividade sem depender de equipe ou estrutura corporativa.",
      date: "2025-02-13",
      readTime: "10 min",
      category: "Produtividade",
      slug: "produtividade-autonomos-freelancers",
      image: produtividadeAutonomosImage
    },
    {
      id: 10,
      title: "Como Parar de Procrastinar Usando Sistemas Visuais (Sem Depender de Motivação)",
      excerpt: "O método baseado em gatilhos visuais que elimina procrastinação sem precisar de força de vontade ou motivação externa.",
      date: "2025-02-12",
      readTime: "7 min",
      category: "Produtividade",
      slug: "parar-procrastinar-sistemas-visuais",
      image: pararProcrastinarImage
    },
    {
      id: 11,
      title: "Planejamento Mensal: Como Criar Um Sistema Que Realmente Funciona",
      excerpt: "Framework prático de 4 pilares para planejar seu mês de forma estratégica e executar com consistência.",
      date: "2025-02-11",
      readTime: "9 min",
      category: "Produtividade",
      slug: "planejamento-mensal-sistema",
      image: planejamentoMensalImage
    },
    {
      id: 12,
      title: "Organização Pessoal 2.0: Como Usar Tecnologia Para Ter Mais Clareza Mental",
      excerpt: "Como construir seu Second Brain usando ferramentas digitais para liberar espaço mental e aumentar sua capacidade criativa.",
      date: "2025-02-10",
      readTime: "8 min",
      category: "Notion para Empresas",
      slug: "organizacao-pessoal-tecnologia",
      image: organizacaoPessoalImage
    },
    {
      id: 13,
      title: "Como Criar Metas Inteligentes (SMART) Sem Complicar — Com Exemplos Reais",
      excerpt: "Aprenda a transformar desejos vagos em metas SMART acionáveis com exemplos práticos e template pronto para usar.",
      date: "2025-02-09",
      readTime: "7 min",
      category: "Gestão Empresarial",
      slug: "metas-inteligentes-smart",
      image: metasSmartImage
    },
    {
      id: 14,
      title: "Guia Definitivo do Foco: Como Evitar Distrações no Trabalho e em Casa",
      excerpt: "Técnicas práticas e comprovadas para eliminar distrações digitais e criar ambientes de foco profundo.",
      date: "2025-02-08",
      readTime: "10 min",
      category: "Produtividade",
      slug: "guia-foco-evitar-distracoes",
      image: guiaFocoImage
    },
    {
      id: 15,
      title: "Métodos de Produtividade Que Realmente Funcionam em 2025 (E Quais Evitar)",
      excerpt: "Análise completa dos métodos de produtividade mais eficazes em 2025. Saiba quais funcionam e quais são apenas hype.",
      date: "2025-02-07",
      readTime: "11 min",
      category: "Produtividade",
      slug: "metodos-produtividade-2025",
      image: metodosProdutividadeImage
    },
    {
      id: 16,
      title: "Como Organizar Documentos, Ideias e Informações da Empresa em Um Só Lugar",
      excerpt: "Sistema completo para centralizar conhecimento empresarial e acabar com informações perdidas em e-mails e chats.",
      date: "2025-02-06",
      readTime: "8 min",
      category: "Gestão Empresarial",
      slug: "organizar-documentos-empresa",
      image: organizarDocumentosImage
    },
    {
      id: 17,
      title: "Como usar o Notion para ter clareza total nos seus projetos (mesmo com pouco tempo)",
      excerpt: "O método completo para configurar o Notion e ter visão 360° dos seus projetos em minutos — não em horas de organização.",
      date: "2025-02-05",
      readTime: "9 min",
      category: "Notion para Empresas",
      slug: "clareza-projetos-notion",
      image: clarezaNotionImage
    },
    {
      id: 18,
      title: "Por que sua empresa está sempre apagando incêndios — e como parar com isso de uma vez",
      excerpt: "O ciclo vicioso do modo bombeiro está matando empresas promissoras. Descubra como quebrar esse padrão e construir uma operação verdadeiramente estratégica.",
      date: "2025-02-04",
      readTime: "11 min",
      category: "Gestão Empresarial",
      slug: "parar-apagar-incendios-empresa",
      image: pararIncendiosImage
    },
    {
      id: 19,
      title: "A fórmula que uso para transformar tarefas soltas em resultados consistentes",
      excerpt: "O método testado que transforma sua lista caótica de tarefas em um sistema previsível de execução e resultados.",
      date: "2025-02-03",
      readTime: "10 min",
      category: "Produtividade",
      slug: "tarefas-soltas-em-resultados",
      image: tarefasResultadosImage
    },
    {
      id: 20,
      title: "O que acontece quando você para de confiar na sua memória e começa a confiar em sistemas",
      excerpt: "Sua mente não foi feita para armazenar informações — foi feita para processar ideias. Descubra como sistemas externos podem liberar seu potencial criativo.",
      date: "2025-02-02",
      readTime: "9 min",
      category: "Notion para Empresas",
      slug: "confiar-sistemas-producao",
      image: confiarSistemasImage
    },
    {
      id: 21,
      title: "Produtividade não é fazer mais — é fazer o que importa (e o Notion pode provar)",
      excerpt: "Pare de medir seu sucesso pela quantidade de tarefas completadas. Descubra como focar no que realmente move a agulha dos seus resultados.",
      date: "2025-02-01",
      readTime: "8 min",
      category: "Produtividade",
      slug: "produtividade-fazer-o-que-importa",
      image: produtividadeFazerImage
    },
    {
      id: 22,
      title: "O erro silencioso que destrói a produtividade de qualquer equipe (e como evitar)",
      excerpt: "Descubra o erro invisível que está custando horas de produtividade da sua equipe todos os dias e aprenda o método prático para eliminá-lo.",
      date: "2025-01-29",
      readTime: "12 min",
      category: "Gestão Empresarial",
      slug: "erro-silencioso-produtividade-equipe",
      image: erroSilenciosoImage
    },
    {
      id: 23,
      title: "Como transformar o caos do seu dia em uma rotina leve e produtiva — usando o Notion",
      excerpt: "Aprenda o método prático para transformar dias caóticos em uma rotina organizada e produtiva usando o Notion como seu sistema de gestão pessoal.",
      date: "2025-01-28",
      readTime: "10 min",
      category: "Notion para Empresas",
      slug: "transformar-caos-rotina-produtiva-notion",
      image: caosRotinaImage
    },
    {
      id: 24,
      title: "Você está gerenciando tarefas… ou apenas apagando incêndios?",
      excerpt: "Descubra a diferença entre gestão proativa e reatividade constante e aprenda como sair do modo bombeiro para se tornar um gestor estratégico.",
      date: "2025-01-27",
      readTime: "9 min",
      category: "Gestão Empresarial",
      slug: "gerenciando-tarefas-ou-apagando-incendios",
      image: tarefasIncendiosImage
    },
    {
      id: 25,
      title: "O passo a passo para criar um sistema de produtividade que realmente funciona (sem complicar)",
      excerpt: "Guia completo e prático para criar um sistema de produtividade simples, funcional e sustentável que transforma sua forma de trabalhar.",
      date: "2025-01-26",
      readTime: "11 min",
      category: "Produtividade",
      slug: "criar-sistema-produtividade-funciona",
      image: sistemaProdutividadeImage
    },
    {
      id: 26,
      title: "O que aprendi organizando mais de 150 sistemas no Notion (e o que ninguém te conta sobre isso)",
      excerpt: "Lições práticas e insights valiosos de quem já organizou mais de 150 sistemas empresariais no Notion - o que funciona de verdade e o que evitar.",
      date: "2025-01-25",
      readTime: "13 min",
      category: "Notion para Empresas",
      slug: "150-sistemas-notion-licoes-praticas",
      image: sistemas150Image
    },
    {
      id: 27,
      title: "Por que 80% dos Profissionais Perdem Tempo Todos os Dias (e Como Resolver Isso)",
      excerpt: "Descubra os principais vilões da produtividade que consomem 2-3 horas por dia e aprenda o método prático para recuperar esse tempo perdido.",
      date: "2025-01-22",
      readTime: "8 min",
      category: "Produtividade",
      slug: "perda-tempo-profissionais",
      image: perdaTempoImage
    },
    {
      id: 28,
      title: "Notion vs Planilhas: O Que as Empresas Modernas Estão Usando Para Crescer Mais Rápido",
      excerpt: "Compare as duas ferramentas e descubra por que 73% das empresas em crescimento estão migrando para o Notion em 2025.",
      date: "2025-01-21",
      readTime: "9 min",
      category: "Notion para Empresas",
      slug: "notion-vs-planilhas",
      image: notionVsPlanilhasImage
    },
    {
      id: 29,
      title: "O Método Para Organizar Projetos Caóticos e Dobrar a Eficiência",
      excerpt: "Descubra o método testado que transforma projetos caóticos em sistemas organizados, dobrando a eficiência da equipe em 30 dias.",
      date: "2025-01-20",
      readTime: "9 min",
      category: "Gestão Empresarial",
      slug: "organizar-projetos-caoticos",
      image: organizarProjetosImage
    },
    {
      id: 30,
      title: "Como Criar Processos Inteligentes que Funcionam Sozinhos",
      excerpt: "Aprenda o framework para criar processos que funcionam no piloto automático, mesmo quando você não está presente.",
      date: "2025-01-20",
      readTime: "10 min",
      category: "Inteligência Artificial",
      slug: "processos-inteligentes-autonomos",
      image: processosInteligentesImage
    },
    {
      id: 31,
      title: "3 Sistemas Prontos no Notion Que Toda Pequena Empresa Deveria Ter",
      excerpt: "Conheça os 3 sistemas essenciais que transformam pequenas empresas em operações profissionais e escaláveis.",
      date: "2025-01-20",
      readTime: "7 min",
      category: "Notion para Empresas",
      slug: "sistemas-notion-pequenas-empresas",
      image: sistemasNotionPequenasImage
    },
    {
      id: 32,
      title: "O segredo que as empresas produtivas usam (e ninguém te contou): o poder do Notion",
      excerpt: "Descubra como o Notion se tornou a ferramenta preferida de empresas que multiplicam sua produtividade e organize seu negócio de forma inteligente.",
      date: "2025-01-20",
      readTime: "7 min",
      category: "Notion para Empresas",
      slug: "poder-do-notion-empresas-produtivas",
      image: notionPoderImage
    },
    {
      id: 33,
      title: "Seu negócio está travado? Veja como o mapeamento de processos pode destravar seu crescimento",
      excerpt: "Aprenda como identificar gargalos, eliminar retrabalho e criar um fluxo de trabalho que realmente funciona para sua empresa crescer.",
      date: "2025-01-18",
      readTime: "8 min",
      category: "Gestão Empresarial",
      slug: "mapeamento-processos-crescimento",
      image: mapeamentoImage
    },
    {
      id: 34,
      title: "Você comete esses 5 erros de produtividade sem perceber? Descubra agora como evitá-los",
      excerpt: "Identifique os erros mais comuns que sabotam sua produtividade e aprenda técnicas práticas para corrigi-los imediatamente.",
      date: "2025-01-15",
      readTime: "6 min",
      category: "Produtividade",
      slug: "5-erros-produtividade",
      image: errosImage
    },
    {
      id: 35,
      title: "Gestão de projetos no Notion: o passo a passo para parar de perder tempo e ganhar resultados",
      excerpt: "Monte um sistema completo de gestão de projetos no Notion e transforme a forma como sua equipe trabalha com eficiência comprovada.",
      date: "2025-01-12",
      readTime: "9 min",
      category: "Notion para Empresas",
      slug: "gestao-projetos-notion",
      image: gestaoProjetosImage
    },
    {
      id: 36,
      title: "Como montar um sistema completo no Notion e fazer sua empresa funcionar no piloto automático",
      excerpt: "Crie automações inteligentes e processos integrados que fazem sua empresa operar sozinha enquanto você foca no estratégico.",
      date: "2025-01-10",
      readTime: "10 min",
      category: "Inteligência Artificial",
      slug: "sistema-completo-notion-automacao",
      image: sistemaCompletoImage
    }
  ];

  // Main categories for filtering
  const mainCategories = [
    { name: "Gestão Empresarial", icon: Building2, color: "from-blue-500 to-blue-600" },
    { name: "Produtividade", icon: Zap, color: "from-yellow-500 to-orange-500" },
    { name: "Notion para Empresas", icon: Layout, color: "from-primary to-accent" },
    { name: "Inteligência Artificial", icon: Brain, color: "from-purple-500 to-pink-500" }
  ];

  // Featured articles (first 3 most important)
  const featuredSlugs = [
    "150-sistemas-notion-licoes-praticas",
    "parar-apagar-incendios-empresa",
    "gestao-projetos-notion"
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
        title="Blog Focus — Gestão Empresarial, Produtividade e Notion na Prática"
        description="Conteúdos diretos para quem deseja organizar o negócio, aumentar produtividade e usar Notion e IA de forma inteligente. Artigos práticos e aplicáveis."
        canonical="/blog"
        keywords="blog gestão empresarial, produtividade, notion para empresas, inteligência artificial, sistemas notion, organização empresarial"
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
              Blog Focus — Gestão empresarial, produtividade e Notion na prática
            </h1>
            
            <p className="text-xl text-foreground-muted leading-relaxed">
              Conteúdos diretos para quem deseja organizar o negócio, aumentar produtividade e usar Notion e IA de forma inteligente.
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
                        alt={post.title}
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
                        alt={post.title}
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

        {/* CTA Section - Quer avançar para a prática? */}
        <section className="container-focus mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Quer avançar para a prática?</h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Transforme conhecimento em resultados com nossos sistemas prontos para usar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group border-card-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Hub Empresarial PRO</h3>
                <p className="text-foreground-muted text-sm mb-4">
                  Sistema completo de gestão empresarial em Notion
                </p>
                <Link to="/hub-empresarial">
                  <Button className="w-full">Ver Sistema</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group border-card-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Controle Financeiro PRO</h3>
                <p className="text-foreground-muted text-sm mb-4">
                  Gestão financeira inteligente e visual
                </p>
                <Link to="/controle-financeiro-pro">
                  <Button className="w-full">Ver Sistema</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group border-card-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Focus Pro</h3>
                <p className="text-foreground-muted text-sm mb-4">
                  Área exclusiva com trilhas e ferramentas
                </p>
                <Link to="/lista-espera">
                  <Button variant="outline" className="w-full">Entrar na Lista</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer Links Section */}
        <section className="container-focus">
          <div className="bg-card border border-card-border rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center md:text-left">
              <Link to="/hub-empresarial" className="group">
                <span className="text-sm text-foreground-muted group-hover:text-primary transition-colors">
                  Sistemas PRO
                </span>
              </Link>
              <Link to="/sistemas-gratuitos" className="group">
                <span className="text-sm text-foreground-muted group-hover:text-primary transition-colors">
                  Templates Grátis
                </span>
              </Link>
              <Link to="/sprint-produtividade" className="group">
                <span className="text-sm text-foreground-muted group-hover:text-primary transition-colors">
                  Sprint de Produtividade
                </span>
              </Link>
              <Link to="/focus-pro" className="group">
                <span className="text-sm text-foreground-muted group-hover:text-primary transition-colors">
                  Focus Pro
                </span>
              </Link>
              <Link to="/sobre-focus" className="group">
                <span className="text-sm text-foreground-muted group-hover:text-primary transition-colors">
                  Sobre a Focus
                </span>
              </Link>
              <a href="mailto:contato@focusinteligente.com.br" className="group">
                <span className="text-sm text-foreground-muted group-hover:text-primary transition-colors">
                  Contato
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
