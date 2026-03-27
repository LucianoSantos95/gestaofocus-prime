import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeaways from "@/components/blog/KeyTakeaways";
import ArticleEngagement from "@/components/blog/ArticleEngagement";
import AuthorBio from "@/components/blog/AuthorBio";
import BlogCTA from "@/components/BlogCTA";
import RelatedArticles from "@/components/RelatedArticles";
import articleImage from "@/assets/blog/produtividade-fazer-o-que-importa.jpg";

const ProdutividadeFazerOqueImporta = () => {
  const imageUrl = "https://focusinteligente.com.br" + articleImage;
  const articleUrl = "https://focusinteligente.com.br/blog/produtividade-fazer-o-que-importa";

  const tocItems = [
    { id: "mito-volume", text: "O mito da produtividade pelo volume", level: 2 },
    { id: "notion-prova", text: "Como o Notion pode provar isso?", level: 2 },
    { id: "regra-80-20", text: "A regra 80/20 aplicada à sua rotina", level: 2 },
    { id: "comecar", text: "Como começar a fazer o que importa", level: 2 },
    { id: "conclusao", text: "Conclusão: Produtividade com propósito", level: 2 },
  ];

  const keyTakeaways = [
    "Estar ocupado não significa ser produtivo — impacto é a métrica real",
    "20% das suas atividades geram 80% dos seus resultados (Princípio de Pareto)",
    "Use sistemas visuais para separar urgente de importante",
    "Defina no máximo 3 resultados importantes por mês",
    "Meça sucesso pelo impacto gerado, não por tarefas completadas",
  ];

  return (
    <>
      <ReadingProgressBar />
      <SEOHead
        title="Produtividade em Agências: Faça o Que Importa | Focus"
        description="Produtividade real para agências e consultorias não é fazer mais — é priorizar entregas de alto impacto para clientes."
        canonical="/blog/produtividade-fazer-o-que-importa"
        image={imageUrl}
        type="article"
        publishedTime="2025-02-01"
        modifiedTime="2025-02-01"
        keywords="produtividade agência, priorização consultoria, foco entregas, gestão tempo prestadores de serviço"
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />

        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <BlogBreadcrumb
              articleTitle="Produtividade é fazer o que importa"
              articleSlug="produtividade-fazer-o-que-importa"
            />

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Produtividade em Agências: Pare de Fazer Mais e Foque no Que Importa
              </h1>
              <p className="text-xl text-muted-foreground">
                Sua agência mede sucesso por tarefas entregues? Descubra como priorizar o que realmente move resultados para seus clientes.
              </p>
            </header>

            <ArticleEngagement
              publishDate="1 de fevereiro de 2025"
              readTime="8 min"
              articleUrl={articleUrl}
              articleTitle="Produtividade não é fazer mais — é fazer o que importa"
            />

            <img
              src={articleImage}
              alt="Gestor de agência priorizando entregas de alto impacto para clientes"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <KeyTakeaways items={keyTakeaways} readTime="8 min" />

            <TableOfContents items={tocItems} />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Você já terminou um dia de trabalho exausto, mas com a sensação de que não avançou em nada importante? Completou dezenas de tarefas, respondeu inúmeros emails, participou de várias reuniões... mas aquele projeto que realmente faria diferença continua parado?
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Bem-vindo ao paradoxo da produtividade moderna: <strong>estar ocupado não significa ser produtivo</strong>. E essa confusão está custando caro para profissionais e empresas.
              </p>

              <h2 id="mito-volume" className="text-3xl font-bold mt-12 mb-6 text-foreground">O mito da produtividade pelo volume</h2>

              <p className="text-lg leading-relaxed mb-6">
                Durante anos, fomos condicionados a acreditar que produtividade = quantidade. Mais tarefas completadas, mais emails respondidos, mais reuniões atendidas. O problema? <strong>Nenhuma dessas métricas mede o que realmente importa: impacto</strong>.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Peter Drucker, o pai da administração moderna, já dizia: "Não há nada tão inútil quanto fazer com eficiência algo que não deveria ser feito". E é exatamente isso que acontece quando confundimos movimento com progresso.
              </p>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-3">💡 A verdadeira definição de produtividade:</h3>
                <p className="text-muted-foreground mb-0">
                  Produtividade não é sobre fazer mais coisas. É sobre <strong>fazer as coisas certas</strong> — aquelas que geram os resultados que você realmente quer alcançar.
                </p>
              </div>

              <h2 id="notion-prova" className="text-3xl font-bold mt-12 mb-6 text-foreground">Como provar isso na prática?</h2>

              <p className="text-lg leading-relaxed mb-6">
                Quando você usa um <strong>sistema visual de priorização inteligente</strong>, ele força você a:
              </p>

              <div className="space-y-4 my-6">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">1.</span>
                  <p className="text-muted-foreground">
                    <strong>Definir o que é importante</strong> — Crie bases de dados que separam "urgente" de "importante", seguindo a Matriz de Eisenhower
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">2.</span>
                  <p className="text-muted-foreground">
                    <strong>Visualizar o impacto</strong> — Use propriedades customizadas para marcar o valor estratégico de cada tarefa
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">3.</span>
                  <p className="text-muted-foreground">
                    <strong>Medir resultados reais</strong> — Acompanhe KPIs e objetivos, não apenas tarefas completadas
                  </p>
                </div>
              </div>

              <div className="my-12">
                <BlogCTA variant="download" location="produtividade_importa_mid" />
              </div>

              <h2 id="regra-80-20" className="text-3xl font-bold mt-12 mb-6 text-foreground">A regra 80/20 aplicada à sua rotina</h2>

              <p className="text-lg leading-relaxed mb-6">
                O Princípio de Pareto nos ensina que <strong>20% das suas atividades geram 80% dos seus resultados</strong>. Mas quantas pessoas realmente identificam e focam nesses 20%?
              </p>

              <p className="text-lg leading-relaxed mb-6">
                A maioria dos profissionais gasta 80% do tempo em tarefas de baixo impacto (emails, reuniões desnecessárias, retrabalho) e apenas 20% nas atividades que realmente fazem diferença.
              </p>

              <div className="bg-muted p-6 rounded-lg my-6">
                <h3 className="text-xl font-bold mb-3">✅ Exercício prático:</h3>
                <p className="text-muted-foreground mb-4">
                  Liste todas as tarefas que você fez na última semana. Agora marque as 3 que tiveram maior impacto nos seus objetivos principais. Provavelmente não são as que consumiram mais tempo.
                </p>
                <p className="text-muted-foreground mb-0">
                  <strong>Com filtros inteligentes</strong>, você pode criar visualizações que mostram apenas suas tarefas de alto impacto, garantindo que elas sempre tenham prioridade.
                </p>
              </div>

              <h2 id="comecar" className="text-3xl font-bold mt-12 mb-6 text-foreground">Como começar a fazer o que importa</h2>

              <p className="text-lg leading-relaxed mb-6">
                Mudar sua mentalidade de "fazer mais" para "fazer o que importa" exige três passos fundamentais:
              </p>

              <div className="space-y-6 my-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold mb-2">Passo 1: Defina seus objetivos principais</h3>
                  <p className="text-muted-foreground">
                    Antes de planejar sua semana, pergunte: "Quais são os 3 resultados mais importantes que preciso alcançar este mês?" Tudo o mais é secundário.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold mb-2">Passo 2: Crie um sistema de priorização visual</h3>
                  <p className="text-muted-foreground">
                    Use um dashboard que mostra claramente suas prioridades estratégicas vs. tarefas operacionais. A visualização é fundamental.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold mb-2">Passo 3: Aprenda a dizer não</h3>
                  <p className="text-muted-foreground">
                    Cada "sim" para algo de baixo impacto é um "não" para algo importante. Proteja seu tempo como seu recurso mais valioso.
                  </p>
                </div>
              </div>

              <h2 id="conclusao" className="text-3xl font-bold mt-12 mb-6 text-foreground">Conclusão: Produtividade com propósito</h2>

              <p className="text-lg leading-relaxed mb-6">
                A verdadeira produtividade não te deixa exausto — ela te dá <strong>sensação de progresso e realização</strong>. Porque você sabe que está avançando nas coisas que realmente importam.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Um bom sistema de gestão não é apenas uma ferramenta. Quando bem usado, é um <strong>sistema que força você a pensar estrategicamente</strong> sobre onde investir seu tempo e energia.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Pare de medir seu sucesso pela quantidade de tarefas completadas. Comece a medir pelo impacto que você gera.
              </p>

              <div className="my-12">
                <BlogCTA variant="whatsapp" location="produtividade_importa_end" />
              </div>

              <AuthorBio />
            </div>

            <RelatedArticles
              currentSlug="produtividade-fazer-o-que-importa"
              category="Produtividade"
              allArticles={[
                {
                  title: "Como usar o Notion para ter clareza total nos seus projetos",
                  excerpt: "Descubra como ter clareza mesmo com pouco tempo disponível.",
                  slug: "clareza-projetos-notion",
                  readTime: "8 min",
                  category: "Produtividade"
                },
                {
                  title: "A fórmula para transformar tarefas soltas em resultados consistentes",
                  excerpt: "Pare de ter tarefas espalhadas e comece a gerar resultados.",
                  slug: "tarefas-soltas-em-resultados",
                  readTime: "7 min",
                  category: "Produtividade"
                },
                {
                  title: "O que acontece quando você confia em sistemas ao invés da memória",
                  excerpt: "Descubra o poder de confiar em sistemas de produção.",
                  slug: "confiar-sistemas-producao",
                  readTime: "7 min",
                  category: "Produtividade"
                }
              ]}
            />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProdutividadeFazerOqueImporta;
