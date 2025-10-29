import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleImage from "@/assets/blog/tarefas-em-resultados.jpg";

const TarefasSoltasEmResultados = () => {
  const relatedPosts = [
    {
      title: "Produtividade não é fazer mais — é fazer o que importa (e o Notion pode provar)",
      slug: "produtividade-fazer-o-que-importa"
    },
    {
      title: "Por que sua empresa está sempre apagando incêndios — e como parar com isso de uma vez",
      slug: "parar-apagar-incendios-empresa"
    },
    {
      title: "O que acontece quando você para de confiar na sua memória e começa a confiar em sistemas",
      slug: "confiar-sistemas-producao"
    }
  ];

  const publishDate = "2025-02-03";
  const modifiedDate = "2025-02-03";
  const articleUrl = "https://focusinteligente.com.br/blog/tarefas-soltas-em-resultados";
  const imageUrl = "https://focusinteligente.com.br" + articleImage;

  return (
    <>
      <Helmet>
        <title>A fórmula para transformar tarefas soltas em resultados consistentes | Focus</title>
        <meta name="description" content="Descubra o método passo a passo para organizar tarefas dispersas e transformá-las em um sistema que gera resultados previsíveis e consistentes." />
        <meta name="keywords" content="organização tarefas, gestão resultados, notion, produtividade, metodologia, execução, planejamento, sistemas trabalho" />
        <link rel="canonical" href={articleUrl} />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content="A fórmula para transformar tarefas soltas em resultados consistentes" />
        <meta property="og:description" content="Método passo a passo para organizar tarefas e gerar resultados previsíveis." />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={articleUrl} />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={modifiedDate} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Transformar tarefas soltas em resultados consistentes" />
        <meta name="twitter:description" content="Descubra o método para organizar tarefas e gerar resultados previsíveis." />
        <meta name="twitter:image" content={imageUrl} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "A fórmula que uso para transformar tarefas soltas em resultados consistentes",
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
            <span className="text-foreground">Tarefas em resultados</span>
          </nav>
        </div>

        <div className="container-focus mb-8">
          <div className="aspect-video overflow-hidden rounded-2xl">
            <img 
              src={articleImage} 
              alt="Visualização de tarefas transformando-se em resultados organizados"
              title="Fórmula para transformar tarefas em resultados"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="container-focus max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-sm text-foreground-muted flex-wrap">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                Metodologia
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>3 de fevereiro de 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min de leitura</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              A fórmula que uso para transformar tarefas soltas em resultados consistentes
            </h1>

            <p className="text-xl text-foreground-muted leading-relaxed">
              O método testado que transforma sua lista caótica de tarefas em um sistema previsível de execução e resultados.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground-muted leading-relaxed mb-6">
              Se você tem dezenas de tarefas espalhadas em post-its, emails, aplicativos diferentes e "lembretes mentais", este artigo é para você. A diferença entre profissionais medíocres e extraordinários não está no volume de trabalho — está no <strong>sistema que eles usam para organizar e executar</strong>.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Vou compartilhar a fórmula exata que uso para transformar caos em consistência. E sim, <strong>o Notion é a ferramenta perfeita</strong> para implementar esse sistema.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">O problema das "tarefas soltas"</h2>
            
            <p className="text-foreground-muted leading-relaxed mb-6">
              Tarefas soltas são como peças de LEGO espalhadas pelo chão. Você sabe que poderia construir algo incrível com elas, mas está perdendo tempo tentando encontrar as peças certas no momento certo.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O resultado? <strong>Retrabalho constante, decisões ruins sobre o que fazer primeiro</strong>, e a sensação permanente de estar "correndo atrás do rabo".
            </p>

            <div className="bg-card border border-card-border rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold mb-3">❌ Sintomas de tarefas mal organizadas:</h3>
              <ul className="space-y-2 text-foreground-muted">
                <li>• Começar o dia sem saber por onde começar</li>
                <li>• Trabalhar muito mas não ver progresso real</li>
                <li>• Lembrar de tarefas importantes tarde demais</li>
                <li>• Nunca saber quantas pendências você realmente tem</li>
                <li>• Sensação de estar sempre "apagando incêndios"</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">A fórmula: COAR (Coletar → Organizar → Agir → Revisar)</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Depois de testar dezenas de metodologias e implementar sistemas para mais de 150 empresas, cheguei a uma fórmula simples mas poderosa. Eu chamo de <strong>COAR</strong>:
            </p>

            <div className="space-y-8 my-12">
              <div className="bg-primary/5 p-8 rounded-xl border-l-4 border-primary">
                <h3 className="text-2xl font-bold mb-4">1. Coletar (Capture Tudo)</h3>
                <p className="text-foreground-muted mb-4">
                  Primeira regra: <strong>NUNCA deixe tarefas na cabeça</strong>. Todo pensamento, ideia ou compromisso deve ser capturado imediatamente em um único lugar confiável.
                </p>
                <p className="text-foreground-muted mb-4">
                  <strong>No Notion:</strong> Crie um "Inbox" — uma base de dados simples onde TUDO é capturado primeiro. Não se preocupe com organização nesta fase, apenas capture.
                </p>
                <div className="bg-card p-4 rounded-lg">
                  <p className="text-sm font-mono text-foreground-muted">
                    💡 Dica: Configure atalhos rápidos no Notion para capturar em segundos, de qualquer lugar.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-xl border-l-4 border-primary">
                <h3 className="text-2xl font-bold mb-4">2. Organizar (Classifique Estrategicamente)</h3>
                <p className="text-foreground-muted mb-4">
                  Aqui acontece a mágica. Pegue cada item do seu Inbox e classifique usando 3 perguntas:
                </p>
                <ul className="space-y-3 text-foreground-muted mb-4">
                  <li><strong>• É ação ou informação?</strong> (Tarefa vs. Nota)</li>
                  <li><strong>• Qual o impacto?</strong> (Alto / Médio / Baixo)</li>
                  <li><strong>• A qual objetivo se conecta?</strong> (Projetos estratégicos)</li>
                </ul>
                <p className="text-foreground-muted">
                  <strong>No Notion:</strong> Use propriedades customizadas (select, relation, formula) para automatizar essa classificação. Em 30 segundos você transforma "tarefa solta" em "ação estratégica conectada a resultados".
                </p>
              </div>

              <div className="bg-primary/5 p-8 rounded-xl border-l-4 border-primary">
                <h3 className="text-2xl font-bold mb-4">3. Agir (Execute com Foco)</h3>
                <p className="text-foreground-muted mb-4">
                  Organização sem execução é procrastinação sofisticada. O sistema deve te mostrar <strong>claramente O QUE fazer AGORA</strong>.
                </p>
                <p className="text-foreground-muted mb-4">
                  <strong>No Notion:</strong> Crie views filtradas que mostram apenas:
                </p>
                <ul className="space-y-2 text-foreground-muted">
                  <li>• Tarefas de alto impacto para hoje</li>
                  <li>• Próximas ações de cada projeto ativo</li>
                  <li>• Itens urgentes que exigem atenção</li>
                </ul>
                <p className="text-foreground-muted mt-4">
                  Resultado: Você abre o Notion e sabe EXATAMENTE onde focar. Zero indecisão.
                </p>
              </div>

              <div className="bg-primary/5 p-8 rounded-xl border-l-4 border-primary">
                <h3 className="text-2xl font-bold mb-4">4. Revisar (Mantenha o Sistema Vivo)</h3>
                <p className="text-foreground-muted mb-4">
                  Um sistema que não é revisado morre. Reserve 2 momentos sagrados:
                </p>
                <ul className="space-y-3 text-foreground-muted">
                  <li><strong>• Revisão Diária (5 min):</strong> Final do dia — o que foi feito, o que fica para amanhã</li>
                  <li><strong>• Revisão Semanal (30 min):</strong> Domingo ou segunda — limpar inbox, ajustar prioridades, planejar semana</li>
                </ul>
                <p className="text-foreground-muted mt-4">
                  <strong>No Notion:</strong> Crie um template de revisão com checkboxes que te guiam pelo processo. Torna a revisão fácil e rápida.
                </p>
              </div>
            </div>

            <div className="bg-gradient-primary rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Quer implementar a fórmula COAR no seu Notion?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Nossos <strong>sistemas prontos</strong> já trazem a metodologia COAR implementada e pronta para usar
              </p>
              <Link to="/sistemas-notion">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Ver Sistemas Notion
                </Button>
              </Link>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">O antes e depois da fórmula COAR</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-red-600 dark:text-red-400">❌ Antes (Caos)</h3>
                <ul className="space-y-2 text-foreground-muted">
                  <li>• 40+ tarefas em lugares diferentes</li>
                  <li>• Nunca sabe o que fazer primeiro</li>
                  <li>• Esquece coisas importantes</li>
                  <li>• Sensação de estar sempre atrasado</li>
                  <li>• Trabalha muito, resultados fracos</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">✅ Depois (Controle)</h3>
                <ul className="space-y-2 text-foreground-muted">
                  <li>• Tudo em 1 lugar confiável</li>
                  <li>• Prioridades cristalinas</li>
                  <li>• 100% de confiança no sistema</li>
                  <li>• Trabalha com foco e paz mental</li>
                  <li>• Resultados consistentes e previsíveis</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Implementação prática: Seu primeiro passo</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Você não precisa implementar tudo de uma vez. Comece simples:
            </p>

            <div className="bg-card border border-card-border rounded-lg p-6 my-6">
              <h3 className="text-xl font-bold mb-4">🎯 Desafio de 7 dias:</h3>
              <div className="space-y-3 text-foreground-muted">
                <p><strong>Dia 1-2:</strong> Crie seu Inbox no Notion e capture TUDO por 2 dias</p>
                <p><strong>Dia 3-4:</strong> Aprenda a organizar — classifique cada item do Inbox</p>
                <p><strong>Dia 5-6:</strong> Execute usando as views filtradas</p>
                <p><strong>Dia 7:</strong> Faça sua primeira revisão semanal completa</p>
              </div>
              <p className="text-foreground-muted mt-4">
                Depois de 7 dias, você terá um sistema funcional. E vai sentir a diferença.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão: Sistemas vencem talento</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              A diferença entre <strong>amadores e profissionais</strong> não está no talento ou inteligência. Está nos sistemas que eles usam.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Amadores dependem de motivação e inspiração. Profissionais dependem de sistemas confiáveis que funcionam mesmo quando a motivação está baixa.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              A fórmula COAR não é complexa. Mas implementada consistentemente, ela transforma completamente seus resultados.
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
              Quer um sistema pronto com a fórmula COAR?
            </h3>
            <p className="text-foreground-muted mb-6">
              Nossos sistemas no Notion já trazem tudo implementado e pronto para usar
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

export default TarefasSoltasEmResultados;
