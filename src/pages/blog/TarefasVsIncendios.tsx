import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, ChevronRight, Flame, ListTodo, AlertTriangle, CheckCircle2, Target, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import coverImage from "@/assets/blog/tarefas-vs-incendios.jpg";
import relatedImage1 from "@/assets/blog/erro-silencioso-produtividade.jpg";
import relatedImage2 from "@/assets/blog/sistema-produtividade-passo-passo.jpg";
import relatedImage3 from "@/assets/blog/caos-rotina-produtiva.jpg";

const TarefasVsIncendios = () => {
  const publishDate = "2025-01-28";
  const articleUrl = "https://focusinteligente.com.br/blog/tarefas-vs-incendios";
  
  const tableOfContents = [
    { id: "introducao", title: "Introdução: O Ciclo Vicioso" },
    { id: "diferenca", title: "A Diferença Entre Tarefas e Incêndios" },
    { id: "sinais", title: "5 Sinais de Que Você Está Só Apagando Incêndios" },
    { id: "custo", title: "O Custo Real da Gestão Reativa" },
    { id: "transicao", title: "Como Fazer a Transição" },
    { id: "sistema", title: "Construindo um Sistema Preventivo" },
    { id: "notion", title: "Como o Notion Pode Ajudar" },
    { id: "conclusao", title: "Conclusão" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual a diferença entre gestão de tarefas e apagar incêndios?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gestão de tarefas é trabalhar de forma proativa, planejando e executando atividades que trazem resultado. Apagar incêndios é reagir a urgências constantes, sem tempo para pensar estrategicamente. A primeira gera crescimento sustentável; a segunda, apenas sobrevivência."
        }
      },
      {
        "@type": "Question",
        "name": "Como saber se estou apenas apagando incêndios?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Principais sinais: você sempre trabalha sob pressão, não tem tempo para planejar, vive de imprevistos, termina o dia exausto mas com sensação de que nada importante foi feito, e suas tarefas estratégicas nunca saem do papel."
        }
      },
      {
        "@type": "Question",
        "name": "É possível sair do modo reativo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, mas exige mudança de mentalidade e sistema. É preciso separar tempo para prevenção, criar processos claros, documentar padrões e usar ferramentas que organizem o trabalho de forma visual e acessível."
        }
      },
      {
        "@type": "Question",
        "name": "O Notion ajuda a evitar a gestão reativa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. O Notion permite criar sistemas de gestão com visões, filtros e automações que antecipam problemas, organizam prioridades e mantêm tudo documentado em um só lugar, reduzindo drasticamente os imprevistos."
        }
      }
    ]
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Você Está Gerenciando Tarefas… ou Apenas Apagando Incêndios?",
    "description": "Descubra a diferença entre gestão proativa e reativa, identifique se você está preso no modo urgência e aprenda a construir um sistema que previne crises ao invés de apenas reagir a elas.",
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
        "name": "Você Está Gerenciando Tarefas… ou Apenas Apagando Incêndios?",
        "item": articleUrl
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Você Está Gerenciando Tarefas… ou Apenas Apagando Incêndios? | Focus Inteligente</title>
        <meta name="description" content="Descubra a diferença entre gestão proativa e reativa, identifique se você está preso no modo urgência e aprenda a construir um sistema que previne crises." />
        <meta name="keywords" content="gestão de tarefas, gestão reativa, produtividade, apagar incêndios, gestão proativa, organização empresarial, sistemas notion" />
        <link rel="canonical" href={articleUrl} />
        
        <meta property="og:title" content="Você Está Gerenciando Tarefas… ou Apenas Apagando Incêndios?" />
        <meta property="og:description" content="Descubra a diferença entre gestão proativa e reativa e aprenda a sair do modo urgência." />
        <meta property="og:image" content={`https://focusinteligente.com.br${coverImage}`} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Você Está Gerenciando Tarefas… ou Apenas Apagando Incêndios?" />
        <meta name="twitter:description" content="Descubra a diferença entre gestão proativa e reativa." />
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
            <span className="text-foreground">Tarefas vs. Incêndios</span>
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
              Você Está Gerenciando Tarefas… ou Apenas Apagando Incêndios?
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              A diferença entre gestão proativa e reativa pode ser a linha entre crescimento sustentável e estagnação disfarçada de produtividade.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={publishDate}>28 de janeiro de 2025</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min de leitura</span>
              </div>
            </div>

            <img 
              src={coverImage} 
              alt="Ilustração representando a diferença entre gestão de tarefas e combate a incêndios" 
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
                <Flame className="h-8 w-8 text-destructive" />
                Introdução: O Ciclo Vicioso
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Você já terminou um dia de trabalho completamente exausto, com a sensação de que não parou um segundo sequer, mas ao olhar para trás… percebeu que nada realmente importante foi feito?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Isso acontece porque você não estava <strong>gerenciando tarefas</strong>. Você estava <strong>apagando incêndios</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                E existe uma diferença enorme entre essas duas coisas. Uma leva ao crescimento sustentável. A outra, à exaustão disfarçada de produtividade.
              </p>
            </section>

            <section id="diferenca" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <ListTodo className="h-8 w-8 text-primary" />
                A Diferença Entre Tarefas e Incêndios
              </h2>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">📋 Gestão de Tarefas (Proativa)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Você trabalha com base em planejamento e prioridades claras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Consegue enxergar o mês, a semana e o dia com antecedência</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Sabe o que é importante e o que é urgente (e age de acordo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Tem tempo para prevenção, melhoria e estratégia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Termina o dia com sensação de progresso real</span>
                  </li>
                </ul>
              </div>

              <div className="bg-destructive/10 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">🔥 Apagar Incêndios (Reativa)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <span>Você vive respondendo a urgências e imprevistos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <span>Não consegue planejar porque está sempre apagando fogo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <span>Tudo parece urgente, nada é realmente prioritário</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <span>Nunca sobra tempo para pensar estrategicamente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <span>Termina o dia exausto, mas com sensação de vazio</span>
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                <strong>A verdade brutal:</strong> quem vive apagando incêndios não cresce. Apenas sobrevive.
              </p>
            </section>

            <section id="sinais" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                5 Sinais de Que Você Está Só Apagando Incêndios
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-destructive pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">1. Você sempre trabalha sob pressão</h3>
                  <p className="text-muted-foreground">
                    Se cada tarefa parece um sprint de última hora, você não está planejando — está reagindo.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">2. Suas tarefas estratégicas nunca saem do papel</h3>
                  <p className="text-muted-foreground">
                    Aquele projeto importante que fica sendo adiado? É porque você não tem sistema, só urgências.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">3. Você não consegue planejar a semana</h3>
                  <p className="text-muted-foreground">
                    Sem visibilidade do que vem pela frente, cada dia é uma surpresa desagradável.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">4. Os mesmos problemas se repetem</h3>
                  <p className="text-muted-foreground">
                    Se você apaga o mesmo incêndio toda semana, o problema não é a tarefa — é a falta de prevenção.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">5. Sua equipe vive perguntando o que fazer</h3>
                  <p className="text-muted-foreground">
                    Falta de processos claros transforma você no gargalo de todas as decisões.
                  </p>
                </div>
              </div>
            </section>

            <section id="custo" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                O Custo Real da Gestão Reativa
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Trabalhar no modo "apagar incêndios" tem custos invisíveis que se acumulam com o tempo:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold mt-1">•</span>
                  <span><strong>Esgotamento da equipe:</strong> ninguém aguenta viver sob pressão constante</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold mt-1">•</span>
                  <span><strong>Perda de oportunidades:</strong> enquanto você apaga fogo, a concorrência inova</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold mt-1">•</span>
                  <span><strong>Decisões ruins:</strong> urgência elimina tempo para pensar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold mt-1">•</span>
                  <span><strong>Falta de documentação:</strong> ninguém registra nada, então os erros se repetem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold mt-1">•</span>
                  <span><strong>Dependência de pessoas:</strong> sem processo, tudo depende de alguém específico</span>
                </li>
              </ul>
            </section>

            <section id="transicao" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                Como Fazer a Transição
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sair do modo reativo não acontece da noite para o dia. Mas é possível. Aqui está o caminho:
              </p>

              <div className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Passo 1: Reconheça o padrão</h3>
                  <p className="text-muted-foreground">
                    Admitir que você está preso no ciclo reativo é o primeiro passo. Faça uma auditoria honesta: quantas horas por dia você gasta apagando incêndios vs. trabalhando em tarefas estratégicas?
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Passo 2: Separe tempo para prevenção</h3>
                  <p className="text-muted-foreground">
                    Reserve 2-3 horas por semana (não negociáveis) para trabalhar EM processos, não apenas NOS processos. Use esse tempo para documentar, melhorar e prevenir.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Passo 3: Crie processos visuais</h3>
                  <p className="text-muted-foreground">
                    Transforme conhecimento tácito em processos explícitos. Use ferramentas visuais como o Notion para mapear fluxos, criar checklists e padronizar o trabalho.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Passo 4: Implemente revisões semanais</h3>
                  <p className="text-muted-foreground">
                    Dedique 30-60 minutos toda sexta-feira para revisar a semana e planejar a próxima. Isso cria o hábito de pensar estrategicamente.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Passo 5: Automatize o que for repetitivo</h3>
                  <p className="text-muted-foreground">
                    Use templates, automações e integrações para reduzir trabalho manual. Cada minuto economizado é um minuto a mais para pensar.
                  </p>
                </div>
              </div>
            </section>

            <section id="sistema" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Construindo um Sistema Preventivo
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Um sistema preventivo não elimina imprevistos, mas reduz drasticamente sua frequência e impacto. Elementos essenciais:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-primary/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Visibilidade Total</h3>
                  <p className="text-muted-foreground text-sm">
                    Tenha uma visão clara de todas as tarefas, projetos e responsabilidades em um único lugar. Sem visibilidade, não há controle.
                  </p>
                </div>

                <div className="bg-primary/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Priorização Clara</h3>
                  <p className="text-muted-foreground text-sm">
                    Use frameworks como Matriz de Eisenhower para separar urgente de importante. Nem tudo que grita é prioridade.
                  </p>
                </div>

                <div className="bg-primary/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Documentação Viva</h3>
                  <p className="text-muted-foreground text-sm">
                    Processos documentados não apenas evitam erros — eles permitem delegar e escalar sem perder qualidade.
                  </p>
                </div>

                <div className="bg-primary/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Revisões Periódicas</h3>
                  <p className="text-muted-foreground text-sm">
                    Sem revisão regular, o sistema degrada. Dedique tempo para ajustar, melhorar e manter tudo atualizado.
                  </p>
                </div>
              </div>
            </section>

            <section id="notion" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Como o Notion Pode Ajudar
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O Notion é a ferramenta ideal para fazer a transição de reativo para proativo porque permite:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Centralizar tudo:</strong> tarefas, projetos, documentos e processos em um só lugar</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Criar visões múltiplas:</strong> veja suas tarefas por projeto, por semana, por prioridade</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Automatizar processos:</strong> reduza trabalho manual com templates e automações</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Documentar de forma visual:</strong> crie wikis, guias e processos que sua equipe realmente usa</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Com um sistema bem estruturado no Notion, você deixa de ser refém dos imprevistos e passa a ter controle real sobre o seu tempo e resultados.
              </p>
            </section>

            <section id="conclusao" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Conclusão
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A diferença entre gestão de tarefas e apagar incêndios é simples: uma é escolha, a outra é consequência.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Se você quer crescer de forma sustentável, precisa sair do modo reativo. E isso começa com um sistema que organize, priorize e antecipe — não apenas reaja.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>A pergunta final:</strong> você quer continuar apagando incêndios até se esgotar… ou está pronto para construir um sistema que previne crises?
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
                    Qual a diferença entre gestão de tarefas e apagar incêndios?
                  </h3>
                  <p className="text-muted-foreground">
                    Gestão de tarefas é trabalhar de forma proativa, planejando e executando atividades que trazem resultado. Apagar incêndios é reagir a urgências constantes, sem tempo para pensar estrategicamente. A primeira gera crescimento sustentável; a segunda, apenas sobrevivência.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Como saber se estou apenas apagando incêndios?
                  </h3>
                  <p className="text-muted-foreground">
                    Principais sinais: você sempre trabalha sob pressão, não tem tempo para planejar, vive de imprevistos, termina o dia exausto mas com sensação de que nada importante foi feito, e suas tarefas estratégicas nunca saem do papel.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    É possível sair do modo reativo?
                  </h3>
                  <p className="text-muted-foreground">
                    Sim, mas exige mudança de mentalidade e sistema. É preciso separar tempo para prevenção, criar processos claros, documentar padrões e usar ferramentas que organizem o trabalho de forma visual e acessível.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    O Notion ajuda a evitar a gestão reativa?
                  </h3>
                  <p className="text-muted-foreground">
                    Sim. O Notion permite criar sistemas de gestão com visões, filtros e automações que antecipam problemas, organizam prioridades e mantêm tudo documentado em um só lugar, reduzindo drasticamente os imprevistos.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/10 rounded-lg p-8 mb-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Pronto para sair do modo reativo?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Conheça os sistemas profissionais da Focus Inteligente e transforme a forma como você gerencia tarefas, projetos e processos no Notion.
            </p>
            <Button asChild size="lg">
              <Link to="/produtos">
                Descobrir Sistemas Focus
              </Link>
            </Button>
          </div>

          {/* Related Articles */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Artigos Relacionados
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/blog/erro-silencioso-produtividade" className="group">
                <article className="bg-card rounded-lg overflow-hidden border hover:border-primary transition-colors">
                  <img 
                    src={relatedImage1} 
                    alt="O erro silencioso que destrói a produtividade" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors text-foreground">
                      O erro silencioso que destrói a produtividade
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Descubra o erro invisível que pode estar sabotando toda a sua equipe.
                    </p>
                  </div>
                </article>
              </Link>

              <Link to="/blog/sistema-produtividade-passo-passo" className="group">
                <article className="bg-card rounded-lg overflow-hidden border hover:border-primary transition-colors">
                  <img 
                    src={relatedImage2} 
                    alt="Sistema de produtividade passo a passo" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors text-foreground">
                      Sistema de produtividade passo a passo
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Aprenda a criar um sistema que realmente funciona, sem complicação.
                    </p>
                  </div>
                </article>
              </Link>

              <Link to="/blog/caos-rotina-produtiva" className="group">
                <article className="bg-card rounded-lg overflow-hidden border hover:border-primary transition-colors">
                  <img 
                    src={relatedImage3} 
                    alt="Como transformar o caos em rotina produtiva" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors text-foreground">
                      Do caos à rotina produtiva
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Transforme dias caóticos em uma rotina leve e produtiva.
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

export default TarefasVsIncendios;