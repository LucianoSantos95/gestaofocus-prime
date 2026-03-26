import { Link } from "react-router-dom";
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
import articleImage from "@/assets/blog/tarefas-em-resultados.jpg";

const TarefasSoltasEmResultados = () => {
  const imageUrl = "https://focusinteligente.com.br" + articleImage;
  const articleUrl = "https://focusinteligente.com.br/blog/tarefas-soltas-em-resultados";

  const tocItems = [
    { id: "problema", text: "O problema das tarefas soltas", level: 2 },
    { id: "formula-coar", text: "A fórmula COAR: Coletar → Organizar → Agir → Revisar", level: 2 },
    { id: "antes-depois", text: "O antes e depois da fórmula COAR", level: 2 },
    { id: "implementacao", text: "Implementação prática: Seu primeiro passo", level: 2 },
    { id: "conclusao", text: "Conclusão: Sistemas vencem talento", level: 2 },
  ];

  const keyTakeaways = [
    "Tarefas soltas são como peças de LEGO espalhadas — impossível construir algo com elas",
    "Use a fórmula COAR: Coletar, Organizar, Agir e Revisar",
    "Nunca deixe tarefas na cabeça — capture tudo em um Inbox único",
    "Revisão diária (5 min) e semanal (30 min) mantêm o sistema vivo",
    "A diferença entre amadores e profissionais está nos sistemas que usam",
  ];

  return (
    <>
      <ReadingProgressBar />
      <SEOHead
        title="Tarefas Soltas em Resultados para Agências | Focus"
        description="O método COAR para agências e consultorias transformarem tarefas dispersas em resultados previsíveis. Organização para prestadores de serviço."
        canonical="/blog/tarefas-soltas-em-resultados"
        image={imageUrl}
        type="article"
        publishedTime="2025-02-03"
        modifiedTime="2025-02-03"
        keywords="organização tarefas agência, resultados consultoria, produtividade prestadores serviço, método COAR, gestão entregas"
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <BlogBreadcrumb articleTitle="Tarefas em resultados" articleSlug="tarefas-soltas-em-resultados" />

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Como agências e consultorias transformam tarefas soltas em resultados consistentes
              </h1>
              <p className="text-xl text-muted-foreground">
                O método COAR que transforma a lista caótica de entregas da sua agência em um sistema previsível de execução e resultados.
              </p>
            </header>

            <ArticleEngagement publishDate="3 de fevereiro de 2025" readTime="10 min" articleUrl={articleUrl} articleTitle="Transformar tarefas soltas em resultados consistentes" />

            <img src={articleImage} alt="Tarefas de agências e consultorias transformando-se em resultados organizados com método COAR" className="w-full h-[400px] object-cover rounded-lg mb-8" />

            <KeyTakeaways items={keyTakeaways} readTime="10 min" />
            <TableOfContents items={tocItems} />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Se você tem dezenas de tarefas espalhadas em post-its, emails, aplicativos diferentes e "lembretes mentais", este artigo é para você. A diferença entre profissionais medíocres e extraordinários não está no volume de trabalho — está no <strong>sistema que eles usam para organizar e executar</strong>.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Vou compartilhar a fórmula exata que uso para transformar caos em consistência.
              </p>

              <h2 id="problema" className="text-3xl font-bold mt-12 mb-6 text-foreground">O problema das "tarefas soltas"</h2>

              <p className="text-lg leading-relaxed mb-6">
                Tarefas soltas são como peças de LEGO espalhadas pelo chão. Você sabe que poderia construir algo incrível com elas, mas está perdendo tempo tentando encontrar as peças certas no momento certo.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                O resultado? <strong>Retrabalho constante, decisões ruins sobre o que fazer primeiro</strong>, e a sensação permanente de estar "correndo atrás do rabo".
              </p>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-3">❌ Sintomas de tarefas mal organizadas:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Começar o dia sem saber por onde começar</li>
                  <li>• Trabalhar muito mas não ver progresso real</li>
                  <li>• Lembrar de tarefas importantes tarde demais</li>
                  <li>• Nunca saber quantas pendências você realmente tem</li>
                  <li>• Sensação de estar sempre "apagando incêndios"</li>
                </ul>
              </div>

              <h2 id="formula-coar" className="text-3xl font-bold mt-12 mb-6 text-foreground">A fórmula: COAR (Coletar → Organizar → Agir → Revisar)</h2>

              <p className="text-lg leading-relaxed mb-6">
                Depois de testar dezenas de metodologias e implementar sistemas para mais de 150 empresas, cheguei a uma fórmula simples mas poderosa. Eu chamo de <strong>COAR</strong>:
              </p>

              <div className="space-y-8 my-12">
                <div className="bg-primary/5 p-8 rounded-xl border-l-4 border-primary">
                  <h3 className="text-2xl font-bold mb-4">1. Coletar (Capture Tudo)</h3>
                  <p className="text-muted-foreground mb-4">
                    Primeira regra: <strong>NUNCA deixe tarefas na cabeça</strong>. Todo pensamento, ideia ou compromisso deve ser capturado imediatamente em um único lugar confiável.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-mono text-muted-foreground">
                      💡 Dica: Configure atalhos rápidos para capturar em segundos, de qualquer lugar.
                    </p>
                  </div>
                </div>

                <div className="bg-primary/5 p-8 rounded-xl border-l-4 border-primary">
                  <h3 className="text-2xl font-bold mb-4">2. Organizar (Classifique Estrategicamente)</h3>
                  <p className="text-muted-foreground mb-4">
                    Pegue cada item do seu Inbox e classifique usando 3 perguntas:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li><strong>• É ação ou informação?</strong> (Tarefa vs. Nota)</li>
                    <li><strong>• Qual o impacto?</strong> (Alto / Médio / Baixo)</li>
                    <li><strong>• A qual objetivo se conecta?</strong> (Projetos estratégicos)</li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-8 rounded-xl border-l-4 border-primary">
                  <h3 className="text-2xl font-bold mb-4">3. Agir (Execute com Foco)</h3>
                  <p className="text-muted-foreground mb-4">
                    Organização sem execução é procrastinação sofisticada. O sistema deve te mostrar <strong>claramente O QUE fazer AGORA</strong>.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Tarefas de alto impacto para hoje</li>
                    <li>• Próximas ações de cada projeto ativo</li>
                    <li>• Itens urgentes que exigem atenção</li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-8 rounded-xl border-l-4 border-primary">
                  <h3 className="text-2xl font-bold mb-4">4. Revisar (Mantenha o Sistema Vivo)</h3>
                  <p className="text-muted-foreground mb-4">
                    Um sistema que não é revisado morre. Reserve 2 momentos sagrados:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li><strong>• Revisão Diária (5 min):</strong> Final do dia — o que foi feito, o que fica para amanhã</li>
                    <li><strong>• Revisão Semanal (30 min):</strong> Domingo ou segunda — limpar inbox, ajustar prioridades</li>
                  </ul>
                </div>
              </div>

              <div className="my-12">
                <BlogCTA variant="download" location="tarefas_resultados_mid" />
              </div>

              <h2 id="antes-depois" className="text-3xl font-bold mt-12 mb-6 text-foreground">O antes e depois da fórmula COAR</h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-destructive/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-destructive">❌ Antes (Caos)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 40+ tarefas em lugares diferentes</li>
                    <li>• Nunca sabe o que fazer primeiro</li>
                    <li>• Esquece coisas importantes</li>
                    <li>• Sensação de estar sempre atrasado</li>
                    <li>• Trabalha muito, resultados fracos</li>
                  </ul>
                </div>
                <div className="bg-green-500/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">✅ Depois (Controle)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Tudo em 1 lugar confiável</li>
                    <li>• Prioridades cristalinas</li>
                    <li>• 100% de confiança no sistema</li>
                    <li>• Trabalha com foco e paz mental</li>
                    <li>• Resultados consistentes e previsíveis</li>
                  </ul>
                </div>
              </div>

              <h2 id="implementacao" className="text-3xl font-bold mt-12 mb-6 text-foreground">Implementação prática: Seu primeiro passo</h2>

              <p className="text-lg leading-relaxed mb-6">Você não precisa implementar tudo de uma vez. Comece simples:</p>

              <div className="bg-muted p-6 rounded-lg my-6">
                <h3 className="text-xl font-bold mb-4">🎯 Desafio de 7 dias:</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Dia 1-2:</strong> Crie seu Inbox e capture TUDO por 2 dias</p>
                  <p><strong>Dia 3-4:</strong> Aprenda a organizar — classifique cada item do Inbox</p>
                  <p><strong>Dia 5-6:</strong> Execute usando as views filtradas</p>
                  <p><strong>Dia 7:</strong> Faça sua primeira revisão semanal completa</p>
                </div>
              </div>

              <h2 id="conclusao" className="text-3xl font-bold mt-12 mb-6 text-foreground">Conclusão: Sistemas vencem talento</h2>

              <p className="text-lg leading-relaxed mb-6">
                A diferença entre <strong>amadores e profissionais</strong> não está no talento ou inteligência. Está nos sistemas que eles usam.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Amadores dependem de motivação e inspiração. Profissionais dependem de sistemas confiáveis que funcionam mesmo quando a motivação está baixa.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                A fórmula COAR não é complexa. Mas implementada consistentemente, ela transforma completamente seus resultados.
              </p>

              <div className="my-12">
                <BlogCTA variant="whatsapp" location="tarefas_resultados_end" />
              </div>

              <AuthorBio />
            </div>

            <RelatedArticles
              currentSlug="tarefas-soltas-em-resultados"
              category="Produtividade"
              allArticles={[
                { title: "Produtividade não é fazer mais — é fazer o que importa", excerpt: "Descubra como focar no que realmente move seus resultados.", slug: "produtividade-fazer-o-que-importa", readTime: "8 min", category: "Produtividade" },
                { title: "Por que sua empresa está sempre apagando incêndios", excerpt: "Descubra como sair do ciclo de urgências.", slug: "parar-apagar-incendios-empresa", readTime: "11 min", category: "Gestão Empresarial" },
                { title: "Confiar em sistemas ao invés da memória", excerpt: "Descubra o poder de confiar em sistemas de produção.", slug: "confiar-sistemas-producao", readTime: "7 min", category: "Produtividade" },
              ]}
            />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TarefasSoltasEmResultados;
