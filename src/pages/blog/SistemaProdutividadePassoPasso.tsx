import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Share2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import coverImage from "@/assets/blog/sistema-produtividade-passo-passo.jpg";

const SistemaProdutividadePassoPasso = () => {
  const publishDate = "2025-01-28";
  const articleUrl = "https://focusinteligente.com/blog/criar-sistema-produtividade-funciona";

  const tableOfContents = [
    { id: "introducao", title: "Por Que a Maioria Falha ao Tentar Ser Mais Produtiva?" },
    { id: "armadilhas", title: "As 3 Armadilhas Que Te Impedem de Criar um Sistema Eficaz" },
    { id: "passo1", title: "Passo 1: Defina Seus Objetivos Reais (e Não Suas Fantasias)" },
    { id: "passo2", title: "Passo 2: Simplifique ao Máximo (Menos Ferramentas, Mais Foco)" },
    { id: "passo3", title: "Passo 3: Crie Um Fluxo de Trabalho Visual (e Que Faça Sentido)" },
    { id: "passo4", title: "Passo 4: Automatize o Que For Possível (Para Não Se Sobrecarregar)" },
    { id: "passo5", title: "Passo 5: Monitore e Ajuste Constantemente (A Produtividade É Dinâmica)" },
    { id: "conclusao", title: "Conclusão: A Produtividade Sustentável Está Mais Perto do Que Você Imagina" },
    { id: "cta", title: "Pronto Para Criar Seu Sistema de Produtividade?" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Por que a maioria das pessoas não consegue criar um sistema de produtividade eficaz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A maioria das pessoas falha porque tenta complicar demais, usando dezenas de ferramentas e técnicas complexas. Um sistema eficaz é simples, focado e adaptado às suas necessidades."
        }
      },
      {
        "@type": "Question",
        "name": "Quais são as armadilhas mais comuns na criação de um sistema de produtividade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As armadilhas mais comuns são: não definir objetivos claros, usar ferramentas demais e não monitorar o sistema para ajustá-lo ao longo do tempo."
        }
      },
      {
        "@type": "Question",
        "name": "Como o Notion pode ajudar na criação de um sistema de produtividade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O Notion é uma ferramenta flexível que permite criar um sistema de produtividade visual, integrado e adaptado às suas necessidades. Você pode centralizar tarefas, projetos, notas e informações em um só lugar."
        }
      },
      {
        "@type": "Question",
        "name": "Qual é o primeiro passo para criar um sistema de produtividade que realmente funcione?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O primeiro passo é definir seus objetivos reais, ou seja, o que você quer alcançar com o sistema. Não se prenda a fantasias ou modismos, foque no que é importante para você."
        }
      }
    ]
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "O Passo a Passo Para Criar um Sistema de Produtividade Que Realmente Funciona (Sem Complicar)",
    "description": "Guia completo e prático para criar um sistema de produtividade simples, funcional e sustentável que transforma sua forma de trabalhar.",
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
        "name": "Sistema de Produtividade Que Funciona",
        "item": articleUrl
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>O Passo a Passo Para Criar um Sistema de Produtividade Que Realmente Funciona | Focus</title>
        <meta 
          name="description" 
          content="Guia completo e prático para criar um sistema de produtividade simples, funcional e sustentável que transforma sua forma de trabalhar." 
        />
        <meta name="keywords" content="sistema de produtividade, como ser mais produtivo, gestão de tempo, organização pessoal, notion, ferramentas de produtividade" />
        <link rel="canonical" href={articleUrl} />
        <meta property="og:title" content="O Passo a Passo Para Criar um Sistema de Produtividade Que Realmente Funciona" />
        <meta property="og:description" content="Guia completo e prático para criar um sistema de produtividade simples, funcional e sustentável." />
        <meta property="og:image" content={`https://focusinteligente.com${coverImage}`} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={publishDate} />
        <meta property="article:author" content="Focus Gestão Empresarial" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="O Passo a Passo Para Criar um Sistema de Produtividade Que Realmente Funciona" />
        <meta name="twitter:description" content="Guia completo e prático para criar um sistema de produtividade simples, funcional e sustentável." />
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
            <span className="text-foreground">Sistema de Produtividade Que Funciona</span>
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
              <span className="text-sm text-foreground-muted">Produtividade</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              O Passo a Passo Para Criar um Sistema de Produtividade Que Realmente Funciona (Sem Complicar)
            </h1>

            <p className="text-xl text-foreground-muted mb-8">
              Guia completo e prático para criar um sistema de produtividade simples, funcional e sustentável que transforma sua forma de trabalhar.
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
              alt="Pessoa organizando tarefas em um sistema visual" 
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
              <h2 className="text-3xl font-bold mb-6">Por Que a Maioria Falha ao Tentar Ser Mais Produtiva?</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                Você já se sentiu perdido em meio a tantas ferramentas, técnicas e "gurus" da produtividade? A sensação de que, quanto mais você tenta se organizar, mais sobrecarregado você fica?
              </p>

              <p className="text-lg leading-relaxed mb-4">
                A verdade é que a maioria das pessoas falha ao tentar criar um sistema de produtividade porque comete um erro fatal: <strong>complica demais</strong>.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Em vez de simplificar e focar no que realmente importa, elas se perdem em planilhas complexas, aplicativos mirabolantes e métodos que consomem mais tempo do que economizam.
              </p>
            </section>

            <section id="armadilhas" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">As 3 Armadilhas Que Te Impedem de Criar um Sistema Eficaz</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                Antes de mergulharmos no passo a passo, é fundamental que você conheça as armadilhas que sabotam a maioria dos sistemas de produtividade:
              </p>

              <div className="space-y-6">
                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">1. Não Definir Objetivos Claros</h3>
                  <p>Você começa a usar ferramentas e técnicas sem saber o que realmente quer alcançar. O resultado é um sistema que não te leva a lugar nenhum.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">2. Usar Ferramentas Demais</h3>
                  <p>Você se torna escravo de dezenas de aplicativos e planilhas, gastando mais tempo gerenciando as ferramentas do que executando as tarefas.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">3. Não Monitorar e Ajustar</h3>
                  <p>Você cria um sistema estático que não se adapta às suas mudanças de rotina e prioridades. O resultado é um sistema que se torna obsoleto rapidamente.</p>
                </div>
              </div>
            </section>

            <section id="passo1" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Passo 1: Defina Seus Objetivos Reais (e Não Suas Fantasias)</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                O primeiro passo para criar um sistema de produtividade que realmente funcione é ter clareza sobre o que você quer alcançar. Mas não se engane: não estamos falando de "metas de ano novo" genéricas e vagas.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Estamos falando de <strong>objetivos reais</strong>, ou seja, aqueles que estão alinhados com seus valores, paixões e propósito de vida.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Pergunte-se: o que eu realmente quero realizar? Quais são as áreas da minha vida que eu quero melhorar? Quais são os projetos que me dão energia e me fazem sentir vivo?
              </p>
            </section>

            <section id="passo2" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Passo 2: Simplifique ao Máximo (Menos Ferramentas, Mais Foco)</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                Agora que você tem clareza sobre seus objetivos, é hora de simplificar. Elimine tudo o que não é essencial e foque no que realmente importa.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Isso significa <strong>reduzir o número de ferramentas</strong> que você usa. Em vez de ter um aplicativo para cada tarefa, escolha um ou dois que sejam flexíveis e integrados.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                O Notion, por exemplo, é uma excelente opção para centralizar tarefas, projetos, notas e informações em um só lugar.
              </p>
            </section>

            <section id="passo3" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Passo 3: Crie Um Fluxo de Trabalho Visual (e Que Faça Sentido)</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                Um sistema de produtividade eficaz precisa ser visual e intuitivo. Ele precisa te mostrar, de forma clara e organizada, o que você precisa fazer, quando precisa fazer e como precisa fazer.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Uma ótima maneira de fazer isso é criar um <strong>fluxo de trabalho visual</strong>, ou seja, um mapa que te guia desde o momento em que você recebe uma tarefa até o momento em que você a conclui.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Você pode usar quadros Kanban, listas de tarefas, calendários ou qualquer outra ferramenta que te ajude a visualizar seu trabalho de forma clara e organizada.
              </p>
            </section>

            <section id="passo4" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Passo 4: Automatize o Que For Possível (Para Não Se Sobrecarregar)</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                A automação é uma das chaves para a produtividade sustentável. Ela te permite eliminar tarefas repetitivas e burocráticas, liberando tempo e energia para o que realmente importa.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Você pode automatizar tarefas como: agendamento de reuniões, envio de e-mails, criação de backups, organização de arquivos e muito mais.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Existem diversas ferramentas que te ajudam a automatizar tarefas, como o Zapier, o IFTTT e o próprio Notion.
              </p>
            </section>

            <section id="passo5" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Passo 5: Monitore e Ajuste Constantemente (A Produtividade É Dinâmica)</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                Por fim, lembre-se de que a produtividade não é um destino, mas sim uma jornada. Seu sistema de produtividade precisa ser flexível e adaptável, para que você possa ajustá-lo ao longo do tempo.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Monitore seus resultados, identifique seus pontos fortes e fracos, e faça os ajustes necessários para otimizar seu sistema.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Lembre-se: a produtividade é dinâmica, e o que funciona hoje pode não funcionar amanhã.
              </p>
            </section>

            <section id="conclusao" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Conclusão: A Produtividade Sustentável Está Mais Perto do Que Você Imagina</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                Criar um sistema de produtividade que realmente funcione não precisa ser complicado. Basta ter clareza sobre seus objetivos, simplificar ao máximo, criar um fluxo de trabalho visual, automatizar o que for possível e monitorar seus resultados.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Lembre-se: a produtividade sustentável está mais perto do que você imagina. Basta dar o primeiro passo e começar a construir seu sistema hoje mesmo.
              </p>
            </section>

            <section id="cta" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Pronto Para Criar Seu Sistema de Produtividade?</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                Descubra os sistemas prontos da Focus que te ajudam a organizar suas tarefas, projetos e informações no Notion.
              </p>
            </section>

            {/* CTA */}
            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white mt-16">
              <h2 className="text-3xl font-bold mb-4">
                Crie Seu Sistema de Produtividade no Notion
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Descubra os sistemas prontos da Focus que te ajudam a organizar suas tarefas, projetos e informações no Notion.
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
              <Link to="/blog/organizar-projetos-caoticos" className="group bg-card border border-card-border rounded-lg p-6 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  O Método Para Organizar Projetos Caóticos
                </h3>
                <p className="text-foreground-muted">Transforme projetos caóticos em sistemas organizados...</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default SistemaProdutividadePassoPasso;
