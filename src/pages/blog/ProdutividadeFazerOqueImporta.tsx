import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleImage from "@/assets/blog/produtividade-fazer-o-que-importa.jpg";

const ProdutividadeFazerOqueImporta = () => {
  const relatedPosts = [
    {
      title: "Como usar o Notion para ter clareza total nos seus projetos (mesmo com pouco tempo)",
      slug: "clareza-projetos-notion"
    },
    {
      title: "A fórmula que uso para transformar tarefas soltas em resultados consistentes",
      slug: "tarefas-soltas-em-resultados"
    },
    {
      title: "O que acontece quando você para de confiar na sua memória e começa a confiar em sistemas",
      slug: "confiar-sistemas-producao"
    }
  ];

  const publishDate = "2025-02-01";
  const modifiedDate = "2025-02-01";
  const articleUrl = "https://focusinteligente.com.br/blog/produtividade-fazer-o-que-importa";
  const imageUrl = "https://focusinteligente.com.br" + articleImage;

  return (
    <>
      <Helmet>
        <title>Produtividade não é fazer mais — é fazer o que importa | Focus</title>
        <meta name="description" content="Descubra por que produtividade real não significa fazer mais tarefas, mas sim focar no que realmente importa. Veja como o Notion pode ajudar você a priorizar melhor." />
        <meta name="keywords" content="produtividade, priorização, foco, notion, gestão tempo, fazer o que importa, eficiência, tarefas importantes, objetivos, resultados" />
        <link rel="canonical" href={articleUrl} />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Produtividade não é fazer mais — é fazer o que importa" />
        <meta property="og:description" content="Descubra a diferença entre estar ocupado e ser produtivo, e como o Notion pode provar isso." />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={articleUrl} />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={modifiedDate} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Produtividade não é fazer mais — é fazer o que importa" />
        <meta name="twitter:description" content="Descubra por que produtividade real não significa fazer mais tarefas." />
        <meta name="twitter:image" content={imageUrl} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Produtividade não é fazer mais — é fazer o que importa (e o Notion pode provar)",
            "image": imageUrl,
            "author": {
              "@type": "Organization",
              "name": "Focus Gestão Empresarial"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Focus Gestão Empresarial",
              "logo": {
                "@type": "ImageObject",
                "url": "https://focusinteligente.com.br/lovable-uploads/focus-logo.png"
              }
            },
            "datePublished": publishDate,
            "dateModified": modifiedDate,
            "mainEntityOfPage": articleUrl
          })}
        </script>
      </Helmet>

      <article className="min-h-screen pt-24 pb-16">
        <div className="container-focus mb-8">
          <nav className="flex items-center space-x-2 text-sm text-foreground-muted">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">Produtividade é fazer o que importa</span>
          </nav>
        </div>

        <div className="container-focus mb-8">
          <div className="aspect-video overflow-hidden rounded-2xl">
            <img 
              src={articleImage} 
              alt="Profissional focado trabalhando no que realmente importa, mostrando produtividade estratégica"
              title="Produtividade focada no que importa"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="container-focus max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-sm text-foreground-muted flex-wrap">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                Produtividade
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>1 de fevereiro de 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min de leitura</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Produtividade não é fazer mais — é fazer o que importa (e o Notion pode provar)
            </h1>

            <p className="text-xl text-foreground-muted leading-relaxed">
              Pare de medir seu sucesso pela quantidade de tarefas completadas. Descubra como focar no que realmente move a agulha dos seus resultados.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground-muted leading-relaxed mb-6">
              Você já terminou um dia de trabalho exausto, mas com a sensação de que não avançou em nada importante? Completou dezenas de tarefas, respondeu inúmeros emails, participou de várias reuniões... mas aquele projeto que realmente faria diferença continua parado?
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Bem-vindo ao paradoxo da produtividade moderna: <strong>estar ocupado não significa ser produtivo</strong>. E essa confusão está custando caro para profissionais e empresas.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">O mito da produtividade pelo volume</h2>
            
            <p className="text-foreground-muted leading-relaxed mb-6">
              Durante anos, fomos condicionados a acreditar que produtividade = quantidade. Mais tarefas completadas, mais emails respondidos, mais reuniões atendidas. O problema? <strong>Nenhuma dessas métricas mede o que realmente importa: impacto</strong>.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Peter Drucker, o pai da administração moderna, já dizia: "Não há nada tão inútil quanto fazer com eficiência algo que não deveria ser feito". E é exatamente isso que acontece quando confundimos movimento com progresso.
            </p>

            <div className="bg-card border border-card-border rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold mb-3">💡 A verdadeira definição de produtividade:</h3>
              <p className="text-foreground-muted mb-0">
                Produtividade não é sobre fazer mais coisas. É sobre <strong>fazer as coisas certas</strong> — aquelas que geram os resultados que você realmente quer alcançar.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Como o Notion pode provar isso?</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O Notion é mais que uma ferramenta de organização — é um <strong>sistema visual de priorização inteligente</strong>. Quando você usa o Notion corretamente, ele força você a:
            </p>

            <div className="space-y-4 my-6">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">1.</span>
                <div>
                  <p className="text-foreground-muted">
                    <strong>Definir o que é importante</strong> — Crie bases de dados que separam "urgente" de "importante", seguindo a Matriz de Eisenhower
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">2.</span>
                <div>
                  <p className="text-foreground-muted">
                    <strong>Visualizar o impacto</strong> — Use propriedades customizadas para marcar o valor estratégico de cada tarefa
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">3.</span>
                <div>
                  <p className="text-foreground-muted">
                    <strong>Medir resultados reais</strong> — Acompanhe KPIs e objetivos, não apenas tarefas completadas
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-primary rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Quer um sistema que foca no que importa?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Conheça nossos <strong>sistemas personalizados no Notion</strong> que ajudam você a priorizar e executar o que realmente move seus resultados.
              </p>
              <Link to="/sistemas-notion">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Ver Sistemas Notion
                </Button>
              </Link>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">A regra 80/20 aplicada à sua rotina</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O Princípio de Pareto nos ensina que <strong>20% das suas atividades geram 80% dos seus resultados</strong>. Mas quantas pessoas realmente identificam e focam nesses 20%?
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              A maioria dos profissionais gasta 80% do tempo em tarefas de baixo impacto (emails, reuniões desnecessárias, retrabalho) e apenas 20% nas atividades que realmente fazem diferença.
            </p>

            <div className="bg-card border border-card-border rounded-lg p-6 my-6">
              <h3 className="text-xl font-bold mb-3">✅ Exercício prático:</h3>
              <p className="text-foreground-muted mb-4">
                Liste todas as tarefas que você fez na última semana. Agora marque as 3 que tiveram maior impacto nos seus objetivos principais. Provavelmente não são as que consumiram mais tempo.
              </p>
              <p className="text-foreground-muted mb-0">
                <strong>No Notion, você pode criar filtros inteligentes</strong> que mostram apenas suas tarefas de alto impacto, garantindo que elas sempre tenham prioridade.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Como começar a fazer o que importa</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Mudar sua mentalidade de "fazer mais" para "fazer o que importa" exige três passos fundamentais:
            </p>

            <div className="space-y-6 my-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">Passo 1: Defina seus objetivos principais</h3>
                <p className="text-foreground-muted">
                  Antes de planejar sua semana, pergunte: "Quais são os 3 resultados mais importantes que preciso alcançar este mês?" Tudo o mais é secundário.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">Passo 2: Crie um sistema de priorização visual</h3>
                <p className="text-foreground-muted">
                  Use o Notion para criar um dashboard que mostra claramente suas prioridades estratégicas vs. tarefas operacionais. A visualização é fundamental.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">Passo 3: Aprenda a dizer não</h3>
                <p className="text-foreground-muted">
                  Cada "sim" para algo de baixo impacto é um "não" para algo importante. Proteja seu tempo como seu recurso mais valioso.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão: Produtividade com propósito</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              A verdadeira produtividade não te deixa exausto — ela te dá <strong>sensação de progresso e realização</strong>. Porque você sabe que está avançando nas coisas que realmente importam.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O Notion não é apenas uma ferramenta. Quando bem usado, é um <strong>sistema que força você a pensar estrategicamente</strong> sobre onde investir seu tempo e energia.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Pare de medir seu sucesso pela quantidade de tarefas completadas. Comece a medir pelo impacto que você gera.
            </p>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8 border-t border-card-border">
            <h3 className="text-2xl font-bold mb-6">Artigos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post, index) => (
                <Link 
                  key={index}
                  to={`/blog/${post.slug}`}
                  className="group p-4 rounded-lg border border-card-border hover:border-primary transition-colors"
                >
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-12 p-8 bg-card border border-card-border rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-3">
              Pronto para organizar o que realmente importa?
            </h3>
            <p className="text-foreground-muted mb-6">
              Conheça nossos sistemas no Notion que te ajudam a focar no essencial
            </p>
            <Link to="/sistemas-notion">
              <Button size="lg" className="btn-hero">
                Ver Nossos Sistemas
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProdutividadeFazerOqueImporta;
