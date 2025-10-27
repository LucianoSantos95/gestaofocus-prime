import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Share2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import coverImage from "@/assets/blog/caos-rotina-produtiva.jpg";

const CaosRotinaProdutiva = () => {
  const publishDate = "2025-01-28";
  const articleUrl = "https://focusinteligente.com/blog/caos-rotina-produtiva";

  const tableOfContents = [
    { id: "introducao", title: "O Dia Que Nunca Acaba" },
    { id: "diagnostico", title: "Por Que Seu Dia Está Caótico" },
    { id: "custo", title: "O Custo Real do Caos" },
    { id: "solucao", title: "A Solução: Sistemas, Não Disciplina" },
    { id: "metodo", title: "O Método Para Organizar Seu Dia" },
    { id: "notion", title: "Como o Notion Transforma Caos em Ordem" },
    { id: "implementacao", title: "Implementação Passo a Passo" },
    { id: "estudo-caso", title: "Caso Real: De 10h Caóticas Para 6h Produtivas" },
    { id: "conclusao", title: "Conclusão" },
    { id: "faq", title: "Perguntas Frequentes" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Por que meu dia sempre parece caótico?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O caos não vem de falta de disciplina, mas da ausência de um sistema confiável. Quando você não tem um lugar único para gerenciar tudo, sua mente fica sobrecarregada tentando lembrar de todas as tarefas, compromissos e informações."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo leva para criar uma rotina organizada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Com o sistema certo, você pode ver resultados em 7 dias. A configuração inicial leva cerca de 2-3 horas, mas os ganhos de produtividade compensam esse investimento já na primeira semana."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso de várias ferramentas para organizar minha rotina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. Na verdade, ter muitas ferramentas piora o problema. O ideal é ter um sistema centralizado onde tudo vive no mesmo lugar - agenda, tarefas, notas, projetos e documentos."
        }
      },
      {
        "@type": "Question",
        "name": "O Notion realmente ajuda a sair do caos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. O Notion funciona como um cérebro digital externo, liberando sua mente para pensar estrategicamente em vez de tentar lembrar de tudo. Com a estrutura certa, ele transforma caos em clareza."
        }
      }
    ]
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Como Transformar o Caos do Seu Dia em uma Rotina Leve e Produtiva — Usando o Notion",
    "description": "Descubra o método prático para transformar dias caóticos em uma rotina organizada e produtiva usando o Notion como seu sistema de gestão pessoal.",
    "image": `https://focusinteligente.com${coverImage}`,
    "author": {
      "@type": "Organization",
      "name": "Focus Gestão Empresarial"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Focus Gestão Empresarial",
      "logo": {
        "@type": "ImageObject",
        "url": "https://focusinteligente.com/lovable-uploads/focus-logo.png"
      }
    },
    "datePublished": publishDate,
    "dateModified": publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
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
        "item": "https://focusinteligente.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://focusinteligente.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Transformar Caos em Rotina Produtiva",
        "item": articleUrl
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Como Transformar o Caos do Seu Dia em uma Rotina Leve e Produtiva | Focus</title>
        <meta 
          name="description" 
          content="Descubra o método prático para transformar dias caóticos em uma rotina organizada e produtiva usando o Notion como seu sistema de gestão pessoal." 
        />
        <meta name="keywords" content="rotina produtiva, organizar dia, caos produtividade, notion rotina, gestão pessoal, sistema produtividade" />
        <link rel="canonical" href={articleUrl} />
        <meta property="og:title" content="Como Transformar o Caos do Seu Dia em uma Rotina Leve e Produtiva" />
        <meta property="og:description" content="Método prático para transformar dias caóticos em rotina organizada usando o Notion." />
        <meta property="og:image" content={`https://focusinteligente.com${coverImage}`} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={publishDate} />
        <meta property="article:author" content="Focus Gestão Empresarial" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Como Transformar o Caos do Seu Dia em uma Rotina Leve e Produtiva" />
        <meta name="twitter:description" content="Método prático para transformar dias caóticos em rotina organizada." />
        <meta name="twitter:image" content={`https://focusinteligente.com${coverImage}`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
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

      <article className="min-h-screen pt-24 pb-16">
        <div className="container-focus mb-8">
          <nav className="flex items-center space-x-2 text-sm text-foreground-muted">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">Transformar Caos em Rotina Produtiva</span>
          </nav>
        </div>

        <header className="container-focus mb-12">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog"
              className="inline-flex items-center text-primary hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o blog
            </Link>

            <div className="inline-flex items-center px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-6">
              <BookOpen className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-foreground-muted">Produtividade Pessoal</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Como Transformar o Caos do Seu Dia em uma Rotina Leve e Produtiva — Usando o Notion
            </h1>

            <p className="text-xl text-foreground-muted mb-8">
              Descubra o método prático para transformar dias caóticos em uma rotina organizada e produtiva usando o Notion como seu sistema de gestão pessoal.
            </p>

            <div className="flex items-center gap-6 text-sm text-foreground-muted mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={publishDate}>
                  {new Date(publishDate).toLocaleDateString('pt-BR')}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min de leitura</span>
              </div>
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Compartilhar</span>
              </button>
            </div>

            <img 
              src={coverImage} 
              alt="Rotina produtiva Focus Inteligente - transformação de workspace caótico em organizado com Notion" 
              className="w-full rounded-lg shadow-xl mb-8"
            />
          </div>
        </header>

        <aside className="container-focus mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-card-border rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Índice de Conteúdo
              </h2>
              <nav>
                <ol className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <li key={item.id}>
                      <a 
                        href={`#${item.id}`}
                        className="text-foreground-muted hover:text-primary transition-colors"
                      >
                        {index + 1}. {item.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </aside>

        <div className="container-focus">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section id="introducao" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">O Dia Que Nunca Acaba</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                Você acorda com uma lista mental de tudo que precisa fazer. Durante o café, já está checando e-mails. No caminho para o trabalho, lembra de três coisas que esqueceu ontem. Chega no escritório e antes de fazer qualquer coisa importante, já gastou 2 horas respondendo mensagens urgentes.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Quando percebe, já é meio-dia e você não fez nenhuma das tarefas realmente importantes que planejou. O dia vira uma correria constante de apagar incêndios, responder demandas e tentar se lembrar do que ainda falta fazer.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Às 18h, você olha para trás e se pergunta: <strong>"Onde foi parar o meu dia?"</strong>
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Se você se identificou com essa descrição, saiba que não é falta de disciplina, vontade ou capacidade. É falta de um sistema.
              </p>
            </section>

            <section id="diagnostico" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Por Que Seu Dia Está Caótico</h2>
              
              <div className="bg-primary/10 rounded-lg p-6 mb-6">
                <p className="text-lg font-semibold mb-2">Resposta Direta:</p>
                <p className="text-lg">
                  Seu dia está caótico porque você está tentando gerenciar tudo na memória, sem um <strong>sistema externo confiável</strong> para capturar e organizar informações.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed mb-4">
                O caos não acontece porque você é desorganizado. Acontece porque você está tentando gerenciar sua vida inteira dentro da sua cabeça. Saiba mais sobre <Link to="/blog/erro-produtividade-equipe" className="text-primary hover:underline">como erros silenciosos destroem a produtividade</Link>.
              </p>

              <div className="bg-card border-l-4 border-primary p-6 my-8">
                <h3 className="text-xl font-bold mb-3">Os 5 Vilões do Caos Diário</h3>
                <ul className="space-y-3">
                  <li><strong>1. Sobrecarga Mental:</strong> Você tenta lembrar de tudo sem um sistema externo</li>
                  <li><strong>2. Ferramentas Espalhadas:</strong> Tarefas aqui, compromissos ali, notas em outro lugar</li>
                  <li><strong>3. Falta de Priorização:</strong> Todas as tarefas parecem igualmente urgentes</li>
                  <li><strong>4. Reatividade Constante:</strong> Você vive respondendo demandas em vez de executar seu plano</li>
                  <li><strong>5. Ausência de Rotina:</strong> Cada dia é uma surpresa diferente</li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed mb-4">
                Pesquisadores da UC Irvine descobriram que profissionais são interrompidos em média a cada 11 minutos. E levam 23 minutos para voltar ao foco original. Isso significa que <strong>você nunca entra em fluxo profundo</strong>.
              </p>
            </section>

            <section id="custo" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">O Custo Real do Caos</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                O caos tem um preço que você paga todos os dias:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Custo em Tempo</h3>
                  <ul className="space-y-2 text-foreground-muted">
                    <li>• 2-3 horas por dia em retrabalho</li>
                    <li>• 1 hora procurando informações</li>
                    <li>• 45 min em reuniões desnecessárias</li>
                    <li>• 30 min "se organizando"</li>
                  </ul>
                  <p className="mt-4 font-bold">Total: 4-5 horas perdidas/dia</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Custo Mental</h3>
                  <ul className="space-y-2 text-foreground-muted">
                    <li>• Estresse constante</li>
                    <li>• Sensação de sempre estar atrasado</li>
                    <li>• Dificuldade para desconectar</li>
                    <li>• Falta de clareza sobre prioridades</li>
                    <li>• Decisões ruins por sobrecarga</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="solucao" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">A Solução: Sistemas, Não Disciplina</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                Você não precisa de mais força de vontade. Você precisa de um <strong>Sistema de Comando e Controle</strong> para o seu dia. Descubra <Link to="/blog/tarefas-vs-incendios" className="text-primary hover:underline">a diferença entre gerenciar tarefas e apagar incêndios</Link>.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Um sistema que:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Captura tudo que precisa ser feito</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Organiza automaticamente por prioridade e contexto</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Mostra exatamente o que fazer agora</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Libera sua mente para pensar estrategicamente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Funciona consistentemente, sem depender de motivação</span>
                </li>
              </ul>
            </section>

            <section id="metodo" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">O Método Para Organizar Seu Dia</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                Este é o framework de 4 pilares que transforma caos em clareza:
              </p>

              <div className="space-y-8 my-8">
                <div className="bg-gradient-primary rounded-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Pilar 1: Captura Total</h3>
                  <p className="mb-4">Tire absolutamente TUDO da sua cabeça e coloque em um sistema único.</p>
                  <ul className="space-y-2">
                    <li>• Tarefas, projetos, ideias, compromissos</li>
                    <li>• Tudo que você precisa lembrar</li>
                    <li>• Tudo que alguém te pediu</li>
                  </ul>
                  <p className="mt-4 italic">Regra: Se está na sua cabeça, não está no sistema.</p>
                </div>

                <div className="bg-card border-l-4 border-primary p-6">
                  <h3 className="text-2xl font-bold mb-4">Pilar 2: Organização Inteligente</h3>
                  <p className="mb-4">Classifique cada item por:</p>
                  <ul className="space-y-2">
                    <li><strong>Prioridade:</strong> Alta / Média / Baixa</li>
                    <li><strong>Contexto:</strong> Onde/quando pode ser feito</li>
                    <li><strong>Projeto:</strong> A qual objetivo maior pertence</li>
                    <li><strong>Tempo estimado:</strong> 5min / 30min / 2h+</li>
                  </ul>
                </div>

                <div className="bg-card border-l-4 border-primary p-6">
                  <h3 className="text-2xl font-bold mb-4">Pilar 3: Execução Focada</h3>
                  <p className="mb-4">Trabalhe por blocos de tempo dedicados:</p>
                  <ul className="space-y-2">
                    <li>• Bloco de Foco Profundo (2-3h sem interrupções)</li>
                    <li>• Bloco de Comunicação (e-mails, mensagens, reuniões)</li>
                    <li>• Bloco de Tarefas Rápidas (micro-tarefas e urgências)</li>
                  </ul>
                </div>

                <div className="bg-card border-l-4 border-primary p-6">
                  <h3 className="text-2xl font-bold mb-4">Pilar 4: Revisão e Ajuste</h3>
                  <p className="mb-4">Rituais não negociáveis:</p>
                  <ul className="space-y-2">
                    <li><strong>Diário (5min):</strong> Revisar o dia seguinte toda noite</li>
                    <li><strong>Semanal (30min):</strong> Planejar a semana todo domingo</li>
                    <li><strong>Mensal (1h):</strong> Revisar metas e ajustar direção</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="notion" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Como o Notion Transforma Caos em Ordem</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                O Notion é perfeito para implementar este sistema porque:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3">📋 Tudo em Um Lugar</h3>
                  <p className="text-foreground-muted">Tarefas, agenda, notas, projetos e documentos vivem no mesmo espaço.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3">🔄 Visualizações Múltiplas</h3>
                  <p className="text-foreground-muted">Veja suas tarefas como lista, kanban, calendário ou timeline.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3">🏷️ Tags e Filtros Inteligentes</h3>
                  <p className="text-foreground-muted">Organize por projeto, prioridade, contexto e encontre tudo instantaneamente.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3">📱 Sincronização Total</h3>
                  <p className="text-foreground-muted">Acesse de qualquer dispositivo, sempre atualizado em tempo real.</p>
                </div>
              </div>
            </section>

            <section id="implementacao" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Implementação Passo a Passo</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Faça um Brain Dump (30min)</h3>
                    <p>Escreva TUDO que está na sua cabeça: tarefas pendentes, projetos, ideias, compromissos. Não organize ainda, apenas despeje tudo no Notion.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Crie Sua Base de Tarefas (20min)</h3>
                    <p>Monte um database com: Título, Status, Prioridade, Projeto, Contexto, Tempo Estimado, Data de Vencimento.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Configure Suas Visualizações (15min)</h3>
                    <p>Crie views filtradas: "Hoje", "Esta Semana", "Por Projeto", "Tarefas Rápidas" (menos de 15min).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Defina Sua Rotina de Revisão (10min)</h3>
                    <p>Agende 5min toda noite para revisar o dia seguinte e 30min todo domingo para planejar a semana.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Comece Amanhã (Literalmente)</h3>
                    <p>No seu ritual noturno de hoje, planeje completamente o dia de amanhã. Acorde e execute o plano.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="estudo-caso" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Caso Real: De 10h Caóticas Para 6h Produtivas</h2>
              
              <div className="bg-card border border-card-border rounded-lg p-8">
                <p className="text-lg font-semibold mb-4">Profissional: Designer freelancer, 3 clientes simultâneos</p>
                
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Antes do Sistema:</strong> Trabalhava 10-12 horas por dia em pânico constante, sempre atrasando entregas. Usava 5 ferramentas diferentes para gerenciar trabalho. Nunca sabia o que fazer primeiro.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  <strong>Implementação:</strong> Montou sistema completo no Notion em um sábado (3 horas). Começou na segunda-feira seguinte com tudo mapeado.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  <strong>Resultados após 30 dias:</strong>
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• Reduziu jornada de trabalho para 6-7 horas produtivas</li>
                  <li>• Zero entregas atrasadas no mês</li>
                  <li>• Aceitou um quarto cliente sem aumentar horas trabalhadas</li>
                  <li>• Níveis de estresse caíram 70% (auto-avaliação)</li>
                  <li>• Passou a ter tempo para projetos pessoais</li>
                </ul>

                <p className="text-lg leading-relaxed italic">
                  "Não é exagero dizer que o Notion mudou minha vida. Pela primeira vez em anos, eu sei exatamente o que fazer quando acordo. E o mais importante: eu consigo desligar no final do dia sem aquela ansiedade constante."
                </p>
              </div>
            </section>

            <section id="conclusao" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Conclusão</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                O caos do seu dia não é culpa sua. É consequência natural de tentar gerenciar tudo mentalmente em um mundo que exige cada vez mais da nossa atenção.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                A solução não é trabalhar mais horas ou ter mais disciplina. A solução é construir um sistema externo que libera sua mente para fazer o que ela faz de melhor: pensar, criar e decidir.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Com o Notion e o método certo, você pode transformar dias caóticos em rotinas leves e produtivas. E o melhor: isso não leva meses. <strong>Você começa a ver resultados na primeira semana</strong>.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                A pergunta não é se você deve fazer isso. É quanto tempo mais você vai aceitar viver no caos quando a solução está a três horas de distância.
              </p>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes</h2>
              
              <div className="space-y-6">
                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Por que meu dia sempre parece caótico?</h3>
                  <p className="text-foreground-muted">
                    O caos não vem de falta de disciplina, mas da ausência de um sistema confiável. Quando você não tem um lugar único para gerenciar tudo, sua mente fica sobrecarregada tentando lembrar de todas as tarefas, compromissos e informações.
                  </p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Quanto tempo leva para criar uma rotina organizada?</h3>
                  <p className="text-foreground-muted">
                    Com o sistema certo, você pode ver resultados em 7 dias. A configuração inicial leva cerca de 2-3 horas, mas os ganhos de produtividade compensam esse investimento já na primeira semana.
                  </p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Preciso de várias ferramentas para organizar minha rotina?</h3>
                  <p className="text-foreground-muted">
                    Não. Na verdade, ter muitas ferramentas piora o problema. O ideal é ter um sistema centralizado onde tudo vive no mesmo lugar - agenda, tarefas, notas, projetos e documentos.
                  </p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">O Notion realmente ajuda a sair do caos?</h3>
                  <p className="text-foreground-muted">
                    Sim. O Notion funciona como um cérebro digital externo, liberando sua mente para pensar estrategicamente em vez de tentar lembrar de tudo. Com a estrutura certa, ele transforma caos em clareza.
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white mt-16">
              <h2 className="text-3xl font-bold mb-4">
                Pronto Para Sair do Caos?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Conheça os sistemas prontos da Focus que organizam sua rotina no Notion em minutos.
              </p>
              <Link to="/sistemas-notion">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Ver Sistemas Prontos
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <section className="container-focus mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Artigos Relacionados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/blog/erro-silencioso-produtividade-equipe" className="group bg-card border border-card-border rounded-lg p-6 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  O Erro Silencioso Que Destrói a Produtividade
                </h3>
                <p className="text-foreground-muted">Descubra o erro invisível que está custando horas...</p>
              </Link>
              <Link to="/blog/criar-sistema-produtividade-funciona" className="group bg-card border border-card-border rounded-lg p-6 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Sistema de Produtividade Que Realmente Funciona
                </h3>
                <p className="text-foreground-muted">Passo a passo completo para criar seu sistema...</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default CaosRotinaProdutiva;
