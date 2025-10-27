import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, ChevronRight, Inbox, Filter, FolderTree, Calendar as CalendarIcon, CheckCircle2, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import coverImage from "@/assets/blog/sistema-produtividade-passo-passo.jpg";
import relatedImage1 from "@/assets/blog/150-sistemas-notion.jpg";
import relatedImage2 from "@/assets/blog/tarefas-vs-incendios.jpg";
import relatedImage3 from "@/assets/blog/erro-silencioso-produtividade.jpg";

const SistemaProdutividadePassoPasso = () => {
  const publishDate = "2025-01-29";
  const articleUrl = "https://focusinteligente.com.br/blog/sistema-produtividade-passo-passo";
  
  const tableOfContents = [
    { id: "introducao", title: "Por Que Você Precisa de um Sistema" },
    { id: "fundamentos", title: "Os 4 Pilares de um Sistema Eficaz" },
    { id: "passo-1", title: "Passo 1: Capture Tudo" },
    { id: "passo-2", title: "Passo 2: Processe com Clareza" },
    { id: "passo-3", title: "Passo 3: Organize por Contexto" },
    { id: "passo-4", title: "Passo 4: Revise Regularmente" },
    { id: "implementacao", title: "Como Implementar no Notion" },
    { id: "conclusao", title: "Conclusão" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é um sistema de produtividade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Um sistema de produtividade é um conjunto estruturado de processos, ferramentas e hábitos que permite capturar, organizar, priorizar e executar tarefas de forma consistente e eficiente, sem depender apenas da memória ou improviso."
        }
      },
      {
        "@type": "Question",
        "name": "Por que preciso de um sistema de produtividade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sem um sistema, você fica refém da memória, perde informações importantes, não consegue priorizar com clareza e vive no modo reativo. Um sistema bem estruturado libera sua mente para pensar estrategicamente e garante que nada importante seja esquecido."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a melhor ferramenta para criar um sistema de produtividade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O Notion é uma das melhores opções por sua flexibilidade, permitindo criar sistemas personalizados com bancos de dados, múltiplas visões, templates e automações — tudo em um único lugar e acessível de qualquer dispositivo."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo leva para implementar um sistema de produtividade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A estrutura inicial pode ser criada em 2-3 horas. Mas o sistema se consolida ao longo de 2-4 semanas de uso consistente, conforme você ajusta e refina os processos para sua realidade."
        }
      }
    ]
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "O Passo a Passo para Criar um Sistema de Produtividade que Realmente Funciona",
    "description": "Aprenda a construir um sistema de produtividade eficaz do zero, sem complicação. Guia prático com os 4 pilares essenciais e implementação passo a passo no Notion.",
    "image": `https://focusinteligente.com.br${coverImage}`,
    "datePublished": publishDate,
    "dateModified": publishDate,
    "author": {
      "@type": "Person",
      "name": "Focus Inteligente"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Focus Inteligente",
      "logo": {
        "@type": "ImageObject",
        "url": "https://focusinteligente.com.br/lovable-uploads/focus-logo.png"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://focusinteligente.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://focusinteligente.com.br/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Sistema de Produtividade Passo a Passo",
        "item": articleUrl
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Sistema de Produtividade Passo a Passo (Sem Complicação) | Focus Inteligente</title>
        <meta name="description" content="Aprenda a construir um sistema de produtividade eficaz do zero. Guia prático com os 4 pilares essenciais e implementação passo a passo no Notion." />
        <meta name="keywords" content="sistema de produtividade, produtividade pessoal, organização pessoal, notion produtividade, gtd, gestão de tarefas" />
        <link rel="canonical" href={articleUrl} />
        
        <meta property="og:title" content="Sistema de Produtividade Passo a Passo (Sem Complicação)" />
        <meta property="og:description" content="Guia prático para criar um sistema de produtividade que realmente funciona." />
        <meta property="og:image" content={`https://focusinteligente.com.br${coverImage}`} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sistema de Produtividade Passo a Passo" />
        <meta name="twitter:description" content="Guia prático para criar um sistema que realmente funciona." />
        <meta name="twitter:image" content={`https://focusinteligente.com.br${coverImage}`} />
        
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Focus Inteligente" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:author" content="Focus Inteligente" />
        
        <script type="application/ld+json">
          {JSON.stringify(blogPostingSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <article className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">
              Início
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Sistema de Produtividade</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para o blog
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              O Passo a Passo para Criar um Sistema de Produtividade que Realmente Funciona (Sem Complicar)
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Um sistema simples, prático e eficaz que você pode implementar hoje — sem perder horas configurando ferramentas complexas.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={publishDate}>29 de janeiro de 2025</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>9 min de leitura</span>
              </div>
            </div>

            <img 
              src={coverImage} 
              alt="Sistema de produtividade Focus Inteligente - guia completo Notion organizado e funcional" 
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </header>

          {/* Table of Contents */}
          <nav className="bg-muted/50 rounded-lg p-6 mb-12">
            <h2 className="text-lg font-semibold mb-4 text-foreground">Neste artigo:</h2>
            <ul className="space-y-2">
              {tableOfContents.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" />
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section id="introducao" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                Por Que Você Precisa de um Sistema
              </h2>
              
              <div className="bg-primary/10 rounded-lg p-6 mb-6">
                <p className="text-lg font-semibold mb-2">O Que É Sistema de Produtividade:</p>
                <p className="text-lg">
                  Um <strong>sistema de produtividade</strong> é uma estrutura organizada com processos claros para capturar, organizar, priorizar e executar tarefas sem depender da memória.
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                A maioria das pessoas não tem um <strong>sistema de produtividade</strong>. Elas têm uma coleção caótica de listas, lembretes, post-its e ferramentas que não conversam entre si. Se isso parece familiar, veja <Link to="/blog/150-sistemas-notion" className="text-primary hover:underline">lições de quem já organizou 150+ sistemas no Notion</Link>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O resultado? Tarefas esquecidas, prioridades confusas, sensação constante de estar perdendo algo importante e, pior ainda, uma mente que nunca descansa porque está sempre tentando lembrar de tudo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>A boa notícia:</strong> criar um sistema de produtividade eficaz não precisa ser complicado. Na verdade, quanto mais simples, melhor.
              </p>
            </section>

            <section id="fundamentos" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Os 4 Pilares de um Sistema Eficaz
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Todo sistema de produtividade que realmente funciona se apoia em 4 pilares fundamentais:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-primary/10 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Inbox className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">1. Captura</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Um lugar único onde TUDO que chega na sua cabeça é registrado imediatamente, sem exceção.
                  </p>
                </div>

                <div className="bg-primary/10 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Filter className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">2. Processamento</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Um método claro para decidir o que fazer com cada item capturado: fazer, delegar, agendar ou arquivar.
                  </p>
                </div>

                <div className="bg-primary/10 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FolderTree className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">3. Organização</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Estrutura lógica que permite encontrar qualquer informação em segundos, sem precisar vasculhar dezenas de pastas.
                  </p>
                </div>

                <div className="bg-primary/10 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <CalendarIcon className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">4. Revisão</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Ritual periódico para garantir que o sistema está atualizado e alinhado com suas prioridades reais.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Se qualquer um desses pilares estiver faltando, o sistema desmorona. Vamos construir cada um deles.
              </p>
            </section>

            <section id="passo-1" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Inbox className="h-8 w-8 text-primary" />
                Passo 1: Capture Tudo
              </h2>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Regra de ouro:</strong> sua mente é para ter ideias, não para guardar ideias.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cada vez que você tenta lembrar de algo, você gasta energia mental que poderia estar sendo usada para pensar, criar ou executar.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-foreground">Como implementar a captura:</h3>
              
              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2 text-foreground">Crie uma Inbox Universal</h4>
                  <p className="text-muted-foreground text-sm">
                    Um único lugar onde TUDO é capturado: tarefas, ideias, links, referências. No Notion, isso pode ser uma database simples com apenas dois campos: "Item" e "Data de Captura".
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2 text-foreground">Torne a Captura Instantânea</h4>
                  <p className="text-muted-foreground text-sm">
                    Use o app do Notion no celular, atalhos de teclado no desktop, comandos rápidos. Quanto mais rápido você captura, mais você usa.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2 text-foreground">Não Julgue, Apenas Capture</h4>
                  <p className="text-muted-foreground text-sm">
                    No momento da captura, não perca tempo decidindo se é importante ou não. Jogue tudo na Inbox. Você vai processar depois.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                <strong>Resultado:</strong> sua mente fica livre. Você sabe que nada será esquecido porque tudo está registrado.
              </p>
            </section>

            <section id="passo-2" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Filter className="h-8 w-8 text-primary" />
                Passo 2: Processe com Clareza
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                A Inbox não pode virar um cemitério de tarefas. Processar significa <strong>decidir o que fazer</strong> com cada item capturado.
              </p>

              <div className="bg-primary/10 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Fluxo de Processamento</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                    <div>
                      <p className="font-semibold text-foreground">Isso é acionável?</p>
                      <p className="text-muted-foreground">Se não: arquive ou delete. Se sim: continue.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                    <div>
                      <p className="font-semibold text-foreground">Leva menos de 2 minutos?</p>
                      <p className="text-muted-foreground">Se sim: faça AGORA. Se não: continue.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                    <div>
                      <p className="font-semibold text-foreground">Você é a pessoa certa para isso?</p>
                      <p className="text-muted-foreground">Se não: delegue. Se sim: continue.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
                    <div>
                      <p className="font-semibold text-foreground">Quando você vai fazer?</p>
                      <p className="text-muted-foreground">Agende uma data/hora específica ou adicione à sua lista de tarefas.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Dica crucial:</strong> processe sua Inbox diariamente, de preferência no início ou final do dia. Nunca deixe passar mais de 48h sem processar.
              </p>
            </section>

            <section id="passo-3" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <FolderTree className="h-8 w-8 text-primary" />
                Passo 3: Organize por Contexto
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Depois de processar, cada item precisa ir para o lugar certo. A organização ideal não é por projeto, nem por urgência, mas por <strong>contexto</strong>.
              </p>

              <div className="space-y-6 mb-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">📅 Agenda</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Tudo que tem data e hora específica. Reuniões, compromissos, deadlines.
                  </p>
                  <p className="text-muted-foreground text-xs italic">
                    Exemplo: "Reunião com cliente - 10h de terça"
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">✅ Tarefas Ativas</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    O que você precisa fazer em breve, organizado por área de foco (trabalho, pessoal, finanças, etc).
                  </p>
                  <p className="text-muted-foreground text-xs italic">
                    Exemplo: "Revisar proposta comercial [Trabalho]"
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">📋 Projetos</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Qualquer resultado que exige mais de uma ação. Cada projeto tem suas próprias tarefas.
                  </p>
                  <p className="text-muted-foreground text-xs italic">
                    Exemplo: "Lançamento novo produto" → [15 tarefas]
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">💭 Algum Dia/Talvez</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Ideias, projetos futuros, coisas que você quer fazer mas não agora.
                  </p>
                  <p className="text-muted-foreground text-xs italic">
                    Exemplo: "Aprender espanhol", "Viajar para Portugal"
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">📚 Referências</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Informações que você quer guardar para consulta futura. Documentos, artigos, anotações.
                  </p>
                  <p className="text-muted-foreground text-xs italic">
                    Exemplo: "Guia de branding", "Artigo sobre SEO"
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                <strong>Lembre-se:</strong> organização não é sobre ter milhares de categorias. É sobre conseguir encontrar rapidamente o que você precisa quando precisa.
              </p>
            </section>

            <section id="passo-4" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <CalendarIcon className="h-8 w-8 text-primary" />
                Passo 4: Revise Regularmente
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Um sistema sem revisão morre em poucas semanas. A revisão é o que mantém tudo atualizado e alinhado com suas prioridades reais.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-primary/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">🔄 Revisão Diária (5 min)</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Processe a Inbox</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Revise a agenda do dia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Defina 3 prioridades</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">📅 Revisão Semanal (30 min)</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Revise todos os projetos ativos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Atualize prazos e prioridades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Planeje a semana seguinte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Limpe o que não é mais relevante</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                <strong>Agende essas revisões no calendário.</strong> Trate como compromisso inegociável. É isso que separa quem usa o sistema de quem abandona em duas semanas.
              </p>
            </section>

            <section id="implementacao" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Lightbulb className="h-8 w-8 text-primary" />
                Como Implementar no Notion
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                O Notion é ideal para construir esse sistema porque permite flexibilidade sem perder simplicidade. Aqui está uma estrutura básica:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-muted/30 rounded-lg p-5">
                  <h3 className="font-semibold mb-2 text-foreground">1. Crie uma database "Tarefas"</h3>
                  <p className="text-muted-foreground text-sm">
                    Com campos: Nome, Status (Inbox/Ativa/Concluída/Arquivada), Área, Projeto, Data, Prioridade
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-5">
                  <h3 className="font-semibold mb-2 text-foreground">2. Configure múltiplas visões</h3>
                  <p className="text-muted-foreground text-sm">
                    • Inbox: mostra apenas itens não processados<br/>
                    • Esta Semana: filtro por data<br/>
                    • Por Área: agrupa por trabalho/pessoal/etc<br/>
                    • Projetos: visão board ou timeline
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-5">
                  <h3 className="font-semibold mb-2 text-foreground">3. Use templates</h3>
                  <p className="text-muted-foreground text-sm">
                    Crie templates de projetos recorrentes para acelerar o setup de novos trabalhos
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-5">
                  <h3 className="font-semibold mb-2 text-foreground">4. Integre com calendário</h3>
                  <p className="text-muted-foreground text-sm">
                    Sincronize eventos importantes com Google Calendar para ter visão completa
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Não complique. Comece simples e ajuste conforme necessário. Um sistema usado é melhor que um sistema perfeito e abandonado.
              </p>
            </section>

            <section id="conclusao" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Conclusão
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Um sistema de produtividade não é sobre ter a ferramenta mais sofisticada ou o método mais complexo. É sobre ter <strong>clareza, controle e consistência</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Quando você captura tudo, processa com clareza, organiza com lógica e revisa regularmente, algo mágico acontece: sua mente finalmente descansa. Você para de viver no modo reativo e começa a trabalhar de forma proativa.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Comece hoje.</strong> Crie sua Inbox, processe o que está na sua cabeça agora, organize em contextos claros e agende sua primeira revisão semanal. Em 2-4 semanas, isso se torna natural.
              </p>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Perguntas Frequentes
              </h2>
              <div className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    O que é um sistema de produtividade?
                  </h3>
                  <p className="text-muted-foreground">
                    Um sistema de produtividade é um conjunto estruturado de processos, ferramentas e hábitos que permite capturar, organizar, priorizar e executar tarefas de forma consistente e eficiente, sem depender apenas da memória ou improviso.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Por que preciso de um sistema de produtividade?
                  </h3>
                  <p className="text-muted-foreground">
                    Sem um sistema, você fica refém da memória, perde informações importantes, não consegue priorizar com clareza e vive no modo reativo. Um sistema bem estruturado libera sua mente para pensar estrategicamente.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Qual a melhor ferramenta para criar um sistema?
                  </h3>
                  <p className="text-muted-foreground">
                    O Notion é uma das melhores opções por sua flexibilidade, permitindo criar sistemas personalizados com bancos de dados, múltiplas visões, templates e automações — tudo em um único lugar.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Quanto tempo leva para implementar?
                  </h3>
                  <p className="text-muted-foreground">
                    A estrutura inicial pode ser criada em 2-3 horas. Mas o sistema se consolida ao longo de 2-4 semanas de uso consistente, conforme você ajusta para sua realidade.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/10 rounded-lg p-8 mb-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Quer um sistema pronto para usar?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Conheça os sistemas profissionais da Focus Inteligente — estruturas completas e personalizáveis para você implementar em minutos no Notion.
            </p>
            <Button asChild size="lg">
              <Link to="/produtos">
                Explorar Sistemas Notion
              </Link>
            </Button>
          </div>

          {/* Related Articles */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Artigos Relacionados
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/blog/150-sistemas-notion" className="group">
                <article className="bg-card rounded-lg overflow-hidden border hover:border-primary transition-colors">
                  <img 
                    src={relatedImage1} 
                    alt="O que aprendi organizando mais de 150 sistemas no Notion" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors text-foreground">
                      150 Sistemas no Notion
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Lições práticas de quem já organizou centenas de sistemas.
                    </p>
                  </div>
                </article>
              </Link>

              <Link to="/blog/tarefas-vs-incendios" className="group">
                <article className="bg-card rounded-lg overflow-hidden border hover:border-primary transition-colors">
                  <img 
                    src={relatedImage2} 
                    alt="Tarefas vs Incêndios" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors text-foreground">
                      Tarefas vs. Incêndios
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Descubra se você está gerenciando ou apenas reagindo.
                    </p>
                  </div>
                </article>
              </Link>

              <Link to="/blog/erro-silencioso-produtividade" className="group">
                <article className="bg-card rounded-lg overflow-hidden border hover:border-primary transition-colors">
                  <img 
                    src={relatedImage3} 
                    alt="O erro silencioso que destrói a produtividade" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors text-foreground">
                      O erro silencioso
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      O erro invisível que sabota toda a equipe.
                    </p>
                  </div>
                </article>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default SistemaProdutividadePassoPasso;