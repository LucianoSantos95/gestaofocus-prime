import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, ChevronRight, BookOpen, AlertTriangle, Wrench, Lightbulb, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import coverImage from "@/assets/blog/150-sistemas-notion.jpg";
import relatedImage1 from "@/assets/blog/sistema-produtividade-passo-passo.jpg";
import relatedImage2 from "@/assets/blog/caos-rotina-produtiva.jpg";
import relatedImage3 from "@/assets/blog/tarefas-vs-incendios.jpg";

const OneFiftySystemsNotion = () => {
  const publishDate = "2025-01-30";
  const articleUrl = "https://focusinteligente.com.br/blog/150-sistemas-notion";
  
  const tableOfContents = [
    { id: "introducao", title: "Introdução: A Jornada" },
    { id: "licao-1", title: "Lição 1: Simplicidade Vence Complexidade" },
    { id: "licao-2", title: "Lição 2: Processos Antes de Ferramentas" },
    { id: "licao-3", title: "Lição 3: O Perigo da Personalização Excessiva" },
    { id: "licao-4", title: "Lição 4: Documentação É Prevenção" },
    { id: "licao-5", title: "Lição 5: Sistemas Morrem Sem Revisão" },
    { id: "armadilhas", title: "As 7 Armadilhas Mais Comuns" },
    { id: "verdades", title: "Verdades Que Ninguém Conta" },
    { id: "conclusao", title: "Conclusão" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quantos sistemas no Notion é demais?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não existe número mágico, mas se você passa mais tempo organizando do que executando, é sinal de que complicou demais. Foque em sistemas que resolvem problemas reais, não em organização pela organização."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo leva para montar um sistema eficaz no Notion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A estrutura inicial pode ser criada em 2-4 horas. Mas o sistema só se consolida após 2-4 semanas de uso real, quando você ajusta conforme sua rotina e identifica o que realmente funciona."
        }
      },
      {
        "@type": "Question",
        "name": "Vale a pena migrar tudo para o Notion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não migre por migrar. Migre apenas o que realmente precisa de centralização. Muitas ferramentas especializadas fazem um trabalho melhor que o Notion em suas áreas. O Notion é ideal para conectar sistemas, não necessariamente substituir todos eles."
        }
      },
      {
        "@type": "Question",
        "name": "Como evitar que o sistema fique desatualizado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Agende revisões semanais fixas (30-60 min). Trate como compromisso inegociável. Sem revisão periódica, qualquer sistema degrada em poucas semanas, por mais bem estruturado que seja."
        }
      }
    ]
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "O Que Aprendi Organizando Mais de 150 Sistemas no Notion",
    "description": "Lições práticas, armadilhas comuns e verdades brutais sobre criar sistemas no Notion que ninguém te conta. Experiência real de quem já viu de tudo.",
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
        "name": "150 Sistemas no Notion",
        "item": articleUrl
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>O Que Aprendi Organizando Mais de 150 Sistemas no Notion | Focus Inteligente</title>
        <meta name="description" content="Lições práticas, armadilhas comuns e verdades brutais sobre criar sistemas no Notion. Experiência real de quem já organizou centenas de workspaces." />
        <meta name="keywords" content="notion, sistemas notion, organização notion, produtividade notion, workspace notion, templates notion" />
        <link rel="canonical" href={articleUrl} />
        
        <meta property="og:title" content="O Que Aprendi Organizando Mais de 150 Sistemas no Notion" />
        <meta property="og:description" content="Lições práticas e verdades que ninguém conta sobre criar sistemas no Notion." />
        <meta property="og:image" content={`https://focusinteligente.com.br${coverImage}`} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="150 Sistemas no Notion: Lições Práticas" />
        <meta name="twitter:description" content="O que aprendi organizando centenas de sistemas no Notion." />
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
            <span className="text-foreground">150 Sistemas no Notion</span>
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
              O Que Aprendi Organizando Mais de 150 Sistemas no Notion (e o que ninguém te conta sobre isso)
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Lições práticas, armadilhas comuns e verdades brutais sobre criar sistemas que realmente funcionam — direto da experiência de quem já viu de tudo.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={publishDate}>30 de janeiro de 2025</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10 min de leitura</span>
              </div>
            </div>

            <img 
              src={coverImage} 
              alt="Ilustração representando centenas de sistemas organizados no Notion" 
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
                <BookOpen className="h-8 w-8 text-primary" />
                Introdução: A Jornada
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nos últimos anos, mergulhei de cabeça no mundo do <Link to="https://www.notion.so/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Notion</Link>. Não apenas como usuário, mas como construtor e organizador de sistemas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O resultado? Mais de <strong>150 sistemas diferentes</strong> criados, testados e otimizados. De gestão de projetos a controle financeiro, de organização pessoal a planejamento de conteúdo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                E nessa jornada, aprendi lições valiosas que quero compartilhar com você. Lições que ninguém te conta sobre criar sistemas no Notion.
              </p>
            </section>

            <section id="licao-1" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Lightbulb className="h-8 w-8 text-primary" />
                Lição 1: Simplicidade Vence Complexidade
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A tentação de criar sistemas complexos é grande. Bancos de dados interligados, fórmulas mirabolantes, automações infinitas…
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mas a verdade é que <strong>sistemas complexos são difíceis de manter</strong>. Quanto mais complexo, maior a chance de algo quebrar e mais tempo você gasta consertando.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>A solução:</strong> comece simples. Crie um sistema básico que resolva um problema específico. Use-o por algumas semanas. Se funcionar, ótimo. Se não, ajuste ou descarte.
              </p>
            </section>

            <section id="licao-2" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                <Wrench className="h-8 w-8 text-primary" />
                Lição 2: Processos Antes de Ferramentas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Não adianta ter o sistema mais sofisticado do mundo se você não tem um <strong>processo claro</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O Notion é uma ferramenta poderosa, mas é só uma ferramenta. Ele não vai resolver seus problemas de organização se você não souber o que está fazendo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>A solução:</strong> defina seus processos primeiro. Entenda como você trabalha, quais são suas necessidades e quais problemas você quer resolver. Só então comece a construir o sistema no Notion.
              </p>
            </section>

            <section id="licao-3" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                <AlertTriangle className="h-8 w-8 text-destructive" />
                Lição 3: O Perigo da Personalização Excessiva
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O Notion é altamente personalizável, o que é ótimo. Mas também pode ser uma armadilha.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                É fácil se perder em detalhes, gastar horas ajustando cores, fontes e layouts… e esquecer do propósito principal: <strong>resolver um problema</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>A solução:</strong> personalize com moderação. Use templates como ponto de partida. Foque na funcionalidade, não na estética.
              </p>
            </section>

            <section id="licao-4" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-primary" />
                Lição 4: Documentação É Prevenção
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sistemas complexos exigem documentação. Se você não documentar como o sistema funciona, você vai esquecer. E sua equipe também.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Documente os processos, as regras, as convenções. Crie guias, tutoriais, vídeos. Quanto mais documentado, mais fácil de usar e manter.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>A solução:</strong> crie uma página de documentação para cada sistema. Use o próprio Notion para isso.
              </p>
            </section>

            <section id="licao-5" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                Lição 5: Sistemas Morrem Sem Revisão
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sistemas não são estáticos. Eles precisam ser revisados e atualizados regularmente.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O que funcionava há um mês pode não funcionar mais. Suas necessidades mudam, seus processos evoluem, o Notion lança novas funcionalidades.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>A solução:</strong> agende revisões semanais ou quinzenais. Analise o que está funcionando, o que não está e o que pode ser melhorado.
              </p>
            </section>

            <section id="armadilhas" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                As 7 Armadilhas Mais Comuns
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-destructive pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">1. A Síndrome do Acumulador de Sistemas</h3>
                  <p className="text-muted-foreground">
                    Criar sistemas por criar, sem um propósito claro. Resultado: uma coleção de sistemas inúteis que só ocupam espaço.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">2. O Labirinto das Relações Complexas</h3>
                  <p className="text-muted-foreground">
                    Interligar bancos de dados de forma excessiva, criando um sistema tão complexo que ninguém consegue entender.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">3. A Ilusão do Controle Total</h3>
                  <p className="text-muted-foreground">
                    Tentar controlar cada detalhe do sistema, perdendo tempo com microgerenciamento em vez de focar no que realmente importa.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">4. A Paralisia da Customização</h3>
                  <p className="text-muted-foreground">
                    Gastar horas personalizando o sistema, mas nunca realmente usá-lo para resolver problemas reais.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">5. A Falácia da Automação Perfeita</h3>
                  <p className="text-muted-foreground">
                    Acreditar que a automação vai resolver todos os problemas, ignorando a importância do trabalho manual e da revisão humana.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">6. A Armadilha da Migração Completa</h3>
                  <p className="text-muted-foreground">
                    Tentar migrar tudo para o Notion, mesmo o que funciona melhor em outras ferramentas.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">7. A Morte por Abandono</h3>
                  <p className="text-muted-foreground">
                    Criar um sistema incrível, mas abandoná-lo depois de algumas semanas por falta de revisão e manutenção.
                  </p>
                </div>
              </div>
            </section>

            <section id="verdades" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Verdades Que Ninguém Conta
              </h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
                <li><strong>O Notion não é a solução para tudo.</strong> Ele é ótimo para conectar sistemas, mas muitas ferramentas especializadas fazem um trabalho melhor em suas áreas.</li>
                <li><strong>Você nunca vai terminar de construir seu sistema.</strong> Ele estará sempre em evolução. E isso é bom.</li>
                <li><strong>A maioria dos templates são inúteis.</strong> Eles podem ser um bom ponto de partida, mas você sempre precisará adaptá-los à sua realidade.</li>
                <li><strong>Você vai perder tempo.</strong> Construir sistemas no Notion exige tempo e dedicação. Não espere resultados imediatos.</li>
                <li><strong>Você vai se frustrar.</strong> Nem tudo vai funcionar como você espera. Mas não desista. A persistência é fundamental.</li>
              </ul>
            </section>

            <section id="conclusao" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Conclusão
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Criar sistemas no Notion pode ser uma experiência transformadora. Mas exige <strong>conhecimento, planejamento e disciplina</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Evite as armadilhas, siga as lições e não se iluda com falsas promessas. O Notion é uma ferramenta poderosa, mas o sucesso depende de você.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>A pergunta final:</strong> você está pronto para embarcar nessa jornada?
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
                    Quantos sistemas no Notion é demais?
                  </h3>
                  <p className="text-muted-foreground">
                    Não existe número mágico, mas se você passa mais tempo organizando do que executando, é sinal de que complicou demais. Foque em sistemas que resolvem problemas reais, não em organização pela organização.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Quanto tempo leva para montar um sistema eficaz no Notion?
                  </h3>
                  <p className="text-muted-foreground">
                    A estrutura inicial pode ser criada em 2-4 horas. Mas o sistema só se consolida após 2-4 semanas de uso real, quando você ajusta conforme sua rotina e identifica o que realmente funciona.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Vale a pena migrar tudo para o Notion?
                  </h3>
                  <p className="text-muted-foreground">
                    Não migre por migrar. Migre apenas o que realmente precisa de centralização. Muitas ferramentas especializadas fazem um trabalho melhor que o Notion em suas áreas. O Notion é ideal para conectar sistemas, não necessariamente substituir todos eles.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Como evitar que o sistema fique desatualizado?
                  </h3>
                  <p className="text-muted-foreground">
                    Agende revisões semanais fixas (30-60 min). Trate como compromisso inegociável. Sem revisão periódica, qualquer sistema degrada em poucas semanas, por mais bem estruturado que seja.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/10 rounded-lg p-8 mb-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Quer começar com o pé direito?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Conheça os sistemas profissionais da Focus Inteligente — estruturas testadas em centenas de empresas, prontas para você adaptar e usar.
            </p>
            <Button asChild size="lg">
              <Link to="/produtos">
                Ver Sistemas Focus
              </Link>
            </Button>
          </div>

          {/* Related Articles */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Artigos Relacionados
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/blog/sistema-produtividade-passo-passo" className="group">
                <article className="bg-card rounded-lg overflow-hidden border hover:border-primary transition-colors">
                  <img 
                    src={relatedImage1} 
                    alt="Sistema de produtividade passo a passo" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors text-foreground">
                      Sistema de Produtividade Passo a Passo
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
                    src={relatedImage2} 
                    alt="Como transformar o caos em rotina produtiva" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors text-foreground">
                      Do Caos à Rotina Produtiva
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Transforme dias caóticos em uma rotina leve e eficiente.
                    </p>
                  </div>
                </article>
              </Link>

              <Link to="/blog/tarefas-vs-incendios" className="group">
                <article className="bg-card rounded-lg overflow-hidden border hover:border-primary transition-colors">
                  <img 
                    src={relatedImage3} 
                    alt="Tarefas vs Incêndios" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors text-foreground">
                      Tarefas vs. Incêndios
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Você está gerenciando ou apenas apagando fogo?
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

export default OneFiftySystemsNotion;
