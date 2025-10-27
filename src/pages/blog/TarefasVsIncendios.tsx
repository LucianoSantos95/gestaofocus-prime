import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Share2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import coverImage from "@/assets/blog/tarefas-vs-incendios.jpg";

const TarefasVsIncendios = () => {
  const publishDate = "2025-01-27";
  const articleUrl = "https://focusinteligente.com/blog/gerenciando-tarefas-ou-apagando-incendios";

  const tableOfContents = [
    { id: "introducao", title: "A Realidade da Maioria das Empresas" },
    { id: "tarefas-vs-incendios", title: "Gerenciando Tarefas vs. Apagando Incêndios" },
    { id: "armadilhas", title: "As Armadilhas da Reatividade Constante" },
    { id: "estrategias", title: "Estratégias Para Uma Gestão Proativa" },
    { id: "notion", title: "Como o Notion Pode Ajudar" },
    { id: "conclusao", title: "Conclusão" },
    { id: "faq", title: "Perguntas Frequentes" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual a diferença entre gerenciar tarefas e apagar incêndios?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gerenciar tarefas é planejar e executar atividades de forma organizada e antecipada. Apagar incêndios é reagir a problemas urgentes e inesperados, muitas vezes negligenciando o planejamento."
        }
      },
      {
        "@type": "Question",
        "name": "Quais os riscos de apenas apagar incêndios?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A reatividade constante leva ao estresse, falta de foco, perda de oportunidades estratégicas e, no longo prazo, à exaustão da equipe."
        }
      },
      {
        "@type": "Question",
        "name": "Como o Notion pode ajudar na gestão proativa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O Notion permite centralizar informações, planejar projetos, definir prioridades e acompanhar o progresso das tarefas, facilitando a gestão proativa e a prevenção de crises."
        }
      }
    ]
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Você Está Gerenciando Tarefas… ou Apenas Apagando Incêndios?",
    "description": "Aprenda a diferenciar gestão proativa de reatividade constante e descubra como sair do modo bombeiro para se tornar um gestor estratégico.",
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
        "name": "Gerenciando Tarefas ou Apagando Incêndios?",
        "item": articleUrl
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Você Está Gerenciando Tarefas… ou Apenas Apagando Incêndios? | Focus</title>
        <meta 
          name="description" 
          content="Aprenda a diferenciar gestão proativa de reatividade constante e descubra como sair do modo bombeiro para se tornar um gestor estratégico." 
        />
        <meta name="keywords" content="gestão de tarefas, apagar incêndios, gestão proativa, reatividade, planejamento, priorização, foco, produtividade" />
        <link rel="canonical" href={articleUrl} />
        <meta property="og:title" content="Você Está Gerenciando Tarefas… ou Apenas Apagando Incêndios?" />
        <meta property="og:description" content="Aprenda a diferenciar gestão proativa de reatividade constante." />
        <meta property="og:image" content={`https://focusinteligente.com${coverImage}`} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={publishDate} />
        <meta property="article:author" content="Focus Gestão Empresarial" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Você Está Gerenciando Tarefas… ou Apenas Apagando Incêndios?" />
        <meta name="twitter:description" content="Aprenda a diferenciar gestão proativa de reatividade constante." />
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
        {/* Breadcrumbs */}
        <div className="container-focus mb-8">
          <nav className="flex items-center space-x-2 text-sm text-foreground-muted">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">Gerenciando Tarefas ou Apagando Incêndios?</span>
          </nav>
        </div>

        {/* Header */}
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
              <span className="text-sm text-foreground-muted">Gestão de Tempo</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Você Está Gerenciando Tarefas… ou Apenas Apagando Incêndios?
            </h1>

            <p className="text-xl text-foreground-muted mb-8">
              Aprenda a diferenciar gestão proativa de reatividade constante e descubra como sair do modo bombeiro para se tornar um gestor estratégico.
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
              alt="Profissional exausto tentando apagar vários focos de incêndio simultaneamente" 
              className="w-full rounded-lg shadow-xl mb-8"
            />
          </div>
        </header>

        {/* Table of Contents */}
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

        {/* Content */}
        <div className="container-focus">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section id="introducao" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">A Realidade da Maioria das Empresas</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                Você chega para trabalhar e já é recebido com uma enxurrada de e-mails, mensagens e notificações urgentes. A lista de tarefas só aumenta, e a sensação é de que você está sempre correndo atrás do próprio rabo.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Se essa cena te parece familiar, saiba que você não está sozinho. A maioria das empresas opera em um ciclo constante de reatividade, onde o "modo bombeiro" se torna a norma.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Mas será que essa é a única forma de trabalhar? Existe uma alternativa para quem deseja ter mais controle sobre o próprio tempo e resultados?
              </p>
            </section>

            <section id="tarefas-vs-incendios" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Gerenciando Tarefas vs. Apagando Incêndios</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                A diferença entre gerenciar tarefas e apagar incêndios é simples, mas crucial:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li><strong>Gerenciar tarefas:</strong> é planejar, organizar e executar atividades de forma proativa, com foco em metas e prioridades.</li>
                <li><strong>Apagar incêndios:</strong> é reagir a problemas urgentes e inesperados, muitas vezes negligenciando o planejamento e a organização.</li>
              </ul>

              <p className="text-lg leading-relaxed mb-4">
                Enquanto o gerenciamento de tarefas te coloca no controle da situação, o ato de apagar incêndios te transforma em refém das circunstâncias.
              </p>
            </section>

            <section id="armadilhas" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">As Armadilhas da Reatividade Constante</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                Viver no "modo bombeiro" pode parecer emocionante no curto prazo, mas as consequências a longo prazo são devastadoras:
              </p>

              <div className="space-y-6">
                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">1. Estresse e Exaustão</h3>
                  <p>A pressão constante para resolver problemas urgentes leva ao esgotamento físico e mental.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">2. Falta de Foco</h3>
                  <p>A reatividade impede que você se concentre em tarefas importantes e estratégicas.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">3. Perda de Oportunidades</h3>
                  <p>Ao focar apenas no urgente, você perde a chance de identificar e aproveitar oportunidades de crescimento.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">4. Queda na Produtividade</h3>
                  <p>A falta de planejamento e organização leva a retrabalho, erros e perda de tempo.</p>
                </div>
              </div>
            </section>

            <section id="estrategias" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Estratégias Para Uma Gestão Proativa</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                A boa notícia é que é possível sair do ciclo de reatividade e adotar uma gestão mais proativa. Aqui estão algumas estratégias:
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Planeje Seu Dia/Semana</h3>
                    <p>Defina as tarefas mais importantes e reserve tempo para executá-las sem interrupções.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Priorize Tarefas</h3>
                    <p>Use a matriz de Eisenhower (urgente/importante) para identificar as tarefas que realmente importam.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Delegue Tarefas</h3>
                    <p>Não tente fazer tudo sozinho. Delegue tarefas para membros da equipe e confie em suas habilidades.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Automatize Processos</h3>
                    <p>Use ferramentas e tecnologias para automatizar tarefas repetitivas e liberar tempo para atividades mais estratégicas.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Aprenda a Dizer Não</h3>
                    <p>Não se sobrecarregue com tarefas que não são prioritárias ou que podem ser feitas por outras pessoas.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="notion" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Como o Notion Pode Ajudar</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                O Notion é uma ferramenta poderosa para quem busca uma gestão mais proativa e organizada. Com ele, você pode:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li>Centralizar todas as informações em um só lugar.</li>
                <li>Criar painéis de controle personalizados para acompanhar o progresso das tarefas.</li>
                <li>Definir prioridades e prazos para cada atividade.</li>
                <li>Automatizar processos e fluxos de trabalho.</li>
                <li>Colaborar com a equipe de forma eficiente.</li>
              </ul>

              <p className="text-lg leading-relaxed mb-4">
                Com o Notion, você terá uma visão clara de tudo o que precisa ser feito e poderá tomar decisões mais informadas e estratégicas.
              </p>
            </section>

            <section id="conclusao" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Conclusão</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                Gerenciar tarefas é muito mais do que simplesmente apagar incêndios. É ter o controle da situação, planejar o futuro e focar no que realmente importa.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Ao adotar uma gestão mais proativa, você não apenas aumenta sua produtividade, mas também reduz o estresse, melhora o foco e abre espaço para novas oportunidades.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Então, da próxima vez que você se sentir sobrecarregado e perdido em meio a tantos "incêndios", pare, respire e lembre-se: você tem o poder de mudar essa realidade.
              </p>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes</h2>
              
              <div className="space-y-6">
                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Qual a diferença entre gerenciar tarefas e apagar incêndios?</h3>
                  <p className="text-foreground-muted">
                    Gerenciar tarefas é planejar e executar atividades de forma organizada e antecipada. Apagar incêndios é reagir a problemas urgentes e inesperados, muitas vezes negligenciando o planejamento.
                  </p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Quais os riscos de apenas apagar incêndios?</h3>
                  <p className="text-foreground-muted">
                    A reatividade constante leva ao estresse, falta de foco, perda de oportunidades estratégicas e, no longo prazo, à exaustão da equipe.
                  </p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Como o Notion pode ajudar na gestão proativa?</h3>
                  <p className="text-foreground-muted">
                    O Notion permite centralizar informações, planejar projetos, definir prioridades e acompanhar o progresso das tarefas, facilitando a gestão proativa e a prevenção de crises.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white mt-16">
              <h2 className="text-3xl font-bold mb-4">
                Transforme Sua Gestão com o Notion
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Descubra os sistemas prontos da Focus que te ajudam a planejar, organizar e executar suas tarefas de forma eficiente no Notion.
              </p>
              <Link to="/sistemas-notion">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Conhecer os Sistemas Focus
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <section className="container-focus mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Artigos Relacionados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/blog/erro-silencioso-produtividade-equipe" className="group bg-card border border-card-border rounded-lg p-6 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  O Erro Silencioso que Destrói a Produtividade de Qualquer Equipe
                </h3>
                <p className="text-foreground-muted">Descubra o erro invisível que está custando horas de produtividade...</p>
              </Link>
              <Link to="/blog/como-organizar-rotina-produtiva-notion" className="group bg-card border border-card-border rounded-lg p-6 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Como Transformar o Caos do Seu Dia em uma Rotina Leve e Produtiva
                </h3>
                <p className="text-foreground-muted">Descubra o método prático para transformar dias caóticos...</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default TarefasVsIncendios;
