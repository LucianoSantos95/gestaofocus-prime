import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Share2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import coverImage from "@/assets/blog/150-sistemas-notion.jpg";

const SistemasNotion150 = () => {
  const publishDate = "2025-01-29";
  const articleUrl = "https://focusinteligente.com/blog/150-sistemas-notion-licoes-praticas";

  const tableOfContents = [
    { id: "introducao", title: "A Jornada de 150 Sistemas" },
    { id: "licoes", title: "Lições Essenciais" },
    { id: "armadilhas", title: "Armadilhas Comuns" },
    { id: "ferramentas", title: "Ferramentas Indispensáveis" },
    { id: "exemplos", title: "Exemplos Práticos" },
    { id: "conclusao", title: "Conclusão" },
    { id: "faq", title: "Perguntas Frequentes" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual é a maior lição ao organizar sistemas no Notion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A maior lição é entender que o Notion é uma ferramenta flexível, mas requer uma estrutura bem definida. Comece pequeno, valide o sistema com usuários reais e itere continuamente."
        }
      },
      {
        "@type": "Question",
        "name": "Quais são as armadilhas mais comuns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As armadilhas incluem criar sistemas excessivamente complexos, não envolver a equipe no processo de design, e não documentar os processos de forma clara."
        }
      },
      {
        "@type": "Question",
        "name": "Quais ferramentas são indispensáveis no Notion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ferramentas indispensáveis incluem databases para organizar informações, views para visualizar dados de diferentes formas, fórmulas para automatizar cálculos, e integrações com outras ferramentas como Google Calendar e Slack."
        }
      },
      {
        "@type": "Question",
        "name": "Como garantir que o sistema seja adotado pela equipe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para garantir a adoção, ofereça treinamento adequado, peça feedback constante, mostre os benefícios do sistema, e incentive a colaboração e o compartilhamento de conhecimento."
        }
      }
    ]
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "O Que Aprendi Organizando Mais de 150 Sistemas no Notion (e o que ninguém te conta sobre isso)",
    "description": "Lições práticas e insights valiosos de quem já organizou mais de 150 sistemas empresariais no Notion - o que funciona de verdade e o que evitar.",
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
        "name": "Lições de 150 Sistemas no Notion",
        "item": articleUrl
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>O Que Aprendi Organizando Mais de 150 Sistemas no Notion | Focus</title>
        <meta 
          name="description" 
          content="Lições práticas e insights valiosos de quem já organizou mais de 150 sistemas empresariais no Notion - o que funciona de verdade e o que evitar." 
        />
        <meta name="keywords" content="sistemas notion, organização notion, produtividade notion, gestão empresarial, templates notion" />
        <link rel="canonical" href={articleUrl} />
        <meta property="og:title" content="O Que Aprendi Organizando Mais de 150 Sistemas no Notion" />
        <meta property="og:description" content="Lições práticas e insights valiosos de quem já organizou mais de 150 sistemas empresariais no Notion." />
        <meta property="og:image" content={`https://focusinteligente.com${coverImage}`} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={publishDate} />
        <meta property="article:author" content="Focus Gestão Empresarial" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="O Que Aprendi Organizando Mais de 150 Sistemas no Notion" />
        <meta name="twitter:description" content="Lições práticas e insights valiosos de quem já organizou mais de 150 sistemas empresariais no Notion." />
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
            <span className="text-foreground">Lições de 150 Sistemas no Notion</span>
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
              <span className="text-sm text-foreground-muted">Notion</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              O Que Aprendi Organizando Mais de 150 Sistemas no Notion (e o que ninguém te conta sobre isso)
            </h1>

            <p className="text-xl text-foreground-muted mb-8">
              Lições práticas e insights valiosos de quem já organizou mais de 150 sistemas empresariais no Notion - o que funciona de verdade e o que evitar.
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
                <span>14 min de leitura</span>
              </div>
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Compartilhar</span>
              </button>
            </div>

            <img 
              src={coverImage} 
              alt="Pessoa organizando sistemas no Notion" 
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
              <h2 className="text-3xl font-bold mb-6">A Jornada de 150 Sistemas</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                Nos últimos anos, tive a oportunidade de mergulhar fundo no universo do Notion, organizando e otimizando mais de 150 sistemas para empresas de diversos portes e segmentos.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                O Notion se tornou uma ferramenta essencial para a gestão do conhecimento e produtividade, mas sua flexibilidade pode ser tanto uma bênção quanto uma maldição.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Neste artigo, compartilho as principais lições que aprendi ao longo dessa jornada, revelando o que funciona de verdade e as armadilhas que você deve evitar ao implementar sistemas no Notion.
              </p>
            </section>

            <section id="licoes" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Lições Essenciais</h2>
              
              <div className="space-y-6">
                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">1. Comece com um problema claro</h3>
                  <p>Antes de criar qualquer sistema, defina qual problema você quer resolver. Um sistema de gestão de projetos? Um sistema de CRM? Um sistema de gestão de conhecimento?</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">2. Simplifique ao máximo</h3>
                  <p>Evite criar sistemas complexos demais. Quanto mais simples, mais fácil será para a equipe adotar e manter o sistema.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">3. Envolva a equipe desde o início</h3>
                  <p>Peça feedback da equipe durante o processo de criação. Eles são os usuários finais e podem oferecer insights valiosos.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">4. Documente tudo</h3>
                  <p>Crie um manual de uso do sistema. Explique como cada funcionalidade funciona e como a equipe deve utilizá-la.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">5. Integre com outras ferramentas</h3>
                  <p>O Notion funciona ainda melhor quando integrado com outras ferramentas que você já utiliza, como Google Calendar, Slack e Trello.</p>
                </div>
              </div>
            </section>

            <section id="armadilhas" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Armadilhas Comuns</h2>
              
              <div className="space-y-6">
                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">1. Excesso de personalização</h3>
                  <p>Personalizar demais o sistema pode torná-lo difícil de manter e atualizar. Use templates como ponto de partida.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">2. Falta de estrutura</h3>
                  <p>Não definir uma estrutura clara pode levar ao caos. Crie uma hierarquia de páginas e databases bem definida.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">3. Ignorar a experiência do usuário</h3>
                  <p>Um sistema bonito não garante que ele seja fácil de usar. Priorize a usabilidade e a experiência do usuário.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">4. Não treinar a equipe</h3>
                  <p>A falta de treinamento é uma das principais causas de fracasso na implementação de sistemas no Notion.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">5. Achar que o Notion resolve tudo</h3>
                  <p>O Notion é uma ferramenta poderosa, mas não é uma bala de prata. Ele precisa ser combinado com outras ferramentas e processos.</p>
                </div>
              </div>
            </section>

            <section id="ferramentas" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Ferramentas Indispensáveis</h2>
              
              <div className="space-y-6">
                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">1. Databases</h3>
                  <p>As databases são a base de qualquer sistema no Notion. Use-as para organizar informações de forma estruturada.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">2. Views</h3>
                  <p>As views permitem visualizar os dados das databases de diferentes formas, como tabelas, calendários e quadros Kanban.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">3. Fórmulas</h3>
                  <p>As fórmulas permitem automatizar cálculos e criar campos dinâmicos nas databases.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">4. Integrações</h3>
                  <p>As integrações permitem conectar o Notion com outras ferramentas, como Google Calendar, Slack e Trello.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">5. Templates</h3>
                  <p>Os templates são sistemas pré-configurados que podem ser utilizados como ponto de partida para criar seus próprios sistemas.</p>
                </div>
              </div>
            </section>

            <section id="exemplos" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Exemplos Práticos</h2>
              
              <div className="space-y-6">
                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">1. Sistema de gestão de projetos</h3>
                  <p>Utilize uma database para organizar as tarefas, views para visualizar o progresso e fórmulas para calcular prazos.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">2. Sistema de CRM</h3>
                  <p>Utilize uma database para organizar os contatos, views para segmentar os clientes e integrações para enviar e-mails.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">3. Sistema de gestão de conhecimento</h3>
                  <p>Utilize uma database para organizar os artigos, views para categorizar os temas e fórmulas para calcular o tempo de leitura.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">4. Sistema de gestão de tarefas pessoais</h3>
                  <p>Utilize uma database para organizar as tarefas, views para priorizar as atividades e integrações para receber lembretes.</p>
                </div>
              </div>
            </section>

            <section id="conclusao" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Conclusão</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                Organizar sistemas no Notion pode ser um desafio, mas com as lições e ferramentas certas, você pode transformar a forma como sua equipe trabalha e aumentar a produtividade da sua empresa.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Lembre-se de começar com um problema claro, simplificar ao máximo, envolver a equipe, documentar tudo e integrar com outras ferramentas.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                E o mais importante: não tenha medo de experimentar e adaptar o sistema às suas necessidades. O Notion é uma ferramenta flexível e permite que você crie sistemas personalizados que realmente funcionam.
              </p>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes</h2>
              
              <div className="space-y-6">
                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Qual é a maior lição ao organizar sistemas no Notion?</h3>
                  <p className="text-foreground-muted">
                    A maior lição é entender que o Notion é uma ferramenta flexível, mas requer uma estrutura bem definida. Comece pequeno, valide o sistema com usuários reais e itere continuamente.
                  </p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Quais são as armadilhas mais comuns?</h3>
                  <p className="text-foreground-muted">
                    As armadilhas incluem criar sistemas excessivamente complexos, não envolver a equipe no processo de design, e não documentar os processos de forma clara.
                  </p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Quais ferramentas são indispensáveis no Notion?</h3>
                  <p className="text-foreground-muted">
                    Ferramentas indispensáveis incluem databases para organizar informações, views para visualizar dados de diferentes formas, fórmulas para automatizar cálculos, e integrações com outras ferramentas como Google Calendar e Slack.
                  </p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Como garantir que o sistema seja adotado pela equipe?</h3>
                  <p className="text-foreground-muted">
                    Para garantir a adoção, ofereça treinamento adequado, peça feedback constante, mostre os benefícios do sistema, e incentive a colaboração e o compartilhamento de conhecimento.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white mt-16">
              <h2 className="text-3xl font-bold mb-4">
                Domine o Notion e Transforme Sua Produtividade
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Descubra os sistemas prontos da Focus que centralizam e organizam todas as informações da sua empresa no Notion.
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
              <Link to="/blog/sistema-produtividade-passo-passo" className="group bg-card border border-card-border rounded-lg p-6 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  O Passo a Passo Para Criar um Sistema de Produtividade Que Realmente Funciona
                </h3>
                <p className="text-foreground-muted">Guia completo e prático para criar um sistema de produtividade simples...</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default SistemasNotion150;
