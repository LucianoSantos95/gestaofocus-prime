import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCTA from "@/components/BlogCTA";
import RelatedArticles from "@/components/RelatedArticles";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeaways from "@/components/blog/KeyTakeaways";
import ArticleEngagement from "@/components/blog/ArticleEngagement";
import AuthorBio from "@/components/blog/AuthorBio";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import { CheckCircle2 } from "lucide-react";
import rotinaMatinalImage from "@/assets/blog/rotina-matinal-poderosa.jpg";

const allArticles = [
  {
    title: "Checklist Diário: O Método Simples Que Aumenta Sua Produtividade em Até 40%",
    excerpt: "Descubra o sistema de checklist que profissionais de alta performance usam para maximizar resultados.",
    slug: "checklist-diario-produtividade",
    readTime: "8 min",
    category: "Produtividade"
  },
  {
    title: "Como Organizar Sua Rotina Semanal Para Ter Mais Foco",
    excerpt: "O método completo de planejamento semanal que elimina decisões desnecessárias.",
    slug: "organizar-rotina-semanal",
    readTime: "9 min",
    category: "Organização"
  },
  {
    title: "Como Parar de Procrastinar Usando Sistemas Visuais",
    excerpt: "O método baseado em gatilhos visuais que elimina procrastinação sem precisar de força de vontade.",
    slug: "parar-procrastinar-sistemas-visuais",
    readTime: "7 min",
    category: "Produtividade"
  }
];

const RotinaMatinalPoderosa = () => {
  const imageUrl = "https://focusinteligente.com.br" + rotinaMatinalImage;
  const articleUrl = "https://focusinteligente.com.br/blog/rotina-matinal-poderosa-15-minutos";

  const tocItems = [
    { id: "por-que-falha", text: "Por Que a Maioria das Rotinas Matinais Falha", level: 2 },
    { id: "metodo-3x5", text: "O Método 3x5: Sua Rotina de 15 Minutos", level: 2 },
    { id: "implementar", text: "Como Implementar (E Não Abandonar)", level: 2 },
    { id: "resultados", text: "Os Resultados Que Você Pode Esperar", level: 2 },
    { id: "template", text: "Template Para Usar no Notion", level: 2 },
  ];

  const keyTakeaways = [
    "Pessoas com rotinas matinais são 40% mais produtivas e têm 32% menos stress",
    "O Método 3x5 divide 15 minutos em 3 blocos: Despertar, Clareza e Ativação",
    "Rotinas longas e complexas falham — simplicidade é a chave",
    "Consistência importa mais que perfeição: faça mesmo nos dias corridos",
    "Prepare tudo na noite anterior para eliminar fricção",
  ];

  return (
    <>
      <ReadingProgressBar />
      <SEOHead
        title="Rotina Matinal Para Donos de Agências e Consultores | Focus"
        description="Rotina matinal de 15 minutos para gestores de agências e consultores. Comece o dia com clareza e priorize entregas de impacto."
        canonical="/blog/rotina-matinal-poderosa-15-minutos"
        image={imageUrl}
        type="article"
        publishedTime="2025-02-20"
        modifiedTime="2025-02-20"
        keywords="rotina matinal gestor agência, produtividade matinal consultoria, hábitos prestadores de serviço"
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />

        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <BlogBreadcrumb
              articleTitle="Rotina Matinal Poderosa"
              articleSlug="rotina-matinal-poderosa-15-minutos"
            />

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Rotina Matinal de 15 Minutos Para Donos de Agências e Consultores
              </h1>
              <p className="text-xl text-muted-foreground">
                O método que gestores de agências usam para começar o dia com clareza e priorizar entregas de alto impacto
              </p>
            </header>

            <ArticleEngagement
              publishDate="20 de fevereiro de 2025"
              readTime="8 min"
              articleUrl={articleUrl}
              articleTitle="Como Criar uma Rotina Matinal Poderosa em 15 Minutos"
            />

            <img
              src={rotinaMatinalImage}
              alt="Gestor de agência iniciando rotina matinal produtiva com planejamento do dia"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
              width={1200}
              height={675}
            />

            <KeyTakeaways items={keyTakeaways} readTime="8 min" />
            <TableOfContents items={tocItems} />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                <strong>Você sabia que os primeiros 15 minutos do seu dia podem determinar o sucesso das próximas 16 horas?</strong>
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Pesquisas mostram que pessoas com rotinas matinais estruturadas são <strong>40% mais produtivas</strong>,
                têm <strong>32% menos stress</strong> e alcançam suas metas com muito mais consistência.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Mas aqui está o segredo: não precisa acordar às 5h da manhã ou meditar por uma hora. A rotina matinal
                poderosa que vou te ensinar leva apenas <strong>15 minutos</strong> e pode ser feita por qualquer pessoa.
              </p>

              <h2 id="por-que-falha" className="text-3xl font-bold mt-12 mb-6">Por Que a Maioria das Rotinas Matinais Falha</h2>

              <div className="bg-muted/50 border border-border rounded-lg p-6 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">❌</span>
                    <div><strong>São muito longas:</strong> Rotinas de 1-2 horas são insustentáveis para quem tem vida corrida</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">❌</span>
                    <div><strong>Exigem muito esforço:</strong> Meditação, yoga, journal extenso... tudo isso cria resistência</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">❌</span>
                    <div><strong>Não têm propósito claro:</strong> Fazer atividades "porque dizem que é bom" não funciona a longo prazo</div>
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed mb-8">
                A rotina matinal ideal precisa ser <strong>curta, simples e ter um propósito claro</strong>. É exatamente
                isso que o Método 3x5 oferece.
              </p>

              <h2 id="metodo-3x5" className="text-3xl font-bold mt-12 mb-6">O Método 3x5: Sua Rotina de 15 Minutos</h2>

              <p className="text-lg leading-relaxed mb-6">
                O Método 3x5 divide seus 15 minutos matinais em 3 blocos de 5 minutos, cada um com um objetivo específico:
              </p>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Bloco 1: Despertar (5 min)</h3>
                <p className="mb-4"><strong>Objetivo:</strong> Ativar o corpo e a mente</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><div><strong>2 minutos:</strong> Alongamento leve ou caminhada pela casa</div></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><div><strong>2 minutos:</strong> Beba um copo de água e respire fundo 5x</div></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><div><strong>1 minuto:</strong> Abra janelas e deixe luz natural entrar</div></li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Bloco 2: Clareza (5 min)</h3>
                <p className="mb-4"><strong>Objetivo:</strong> Definir o dia com intenção</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><div><strong>3 minutos:</strong> Escreva as 3 prioridades do dia</div></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><div><strong>2 minutos:</strong> Visualize mentalmente como será um dia bem-sucedido</div></li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Bloco 3: Ativação (5 min)</h3>
                <p className="mb-4"><strong>Objetivo:</strong> Criar momentum para o dia</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><div><strong>3 minutos:</strong> Comece a primeira tarefa da lista (mesmo que não termine)</div></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><div><strong>2 minutos:</strong> Leia algo inspirador ou ouça uma música que te energiza</div></li>
                </ul>
              </div>

              <h2 id="implementar" className="text-3xl font-bold mt-12 mb-6">Como Implementar (E Não Abandonar)</h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold mb-2">1. Comece com 1 semana de teste</h3>
                  <p className="text-muted-foreground">Não se comprometa com "para sempre". Teste por 7 dias e avalie os resultados.</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold mb-2">2. Prepare tudo na noite anterior</h3>
                  <p className="text-muted-foreground">Deixe um copo de água, seu caderno e o que mais precisar já prontos. Elimine fricção.</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold mb-2">3. Use um gatilho visual</h3>
                  <p className="text-muted-foreground">Coloque um post-it na mesinha de cabeceira: "15 minutos = dia incrível"</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold mb-2">4. Não pule mesmo que acorde tarde</h3>
                  <p className="text-muted-foreground">Se acordou atrasado, faça a versão de 7 minutos (2+3+2). Consistência &gt; Perfeição.</p>
                </div>
              </div>

              <h2 id="resultados" className="text-3xl font-bold mt-12 mb-6">Os Resultados Que Você Pode Esperar</h2>

              <div className="bg-muted/50 border border-border rounded-lg p-6 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><span className="text-2xl">✅</span><div><strong>Semana 1:</strong> Você acorda mais disposto e sabe exatamente o que fazer</div></li>
                  <li className="flex items-start gap-3"><span className="text-2xl">✅</span><div><strong>Semana 2-3:</strong> Sua produtividade aumenta 20-30% e o stress matinal diminui drasticamente</div></li>
                  <li className="flex items-start gap-3"><span className="text-2xl">✅</span><div><strong>Mês 1+:</strong> A rotina se torna automática e você não consegue mais viver sem ela</div></li>
                </ul>
              </div>

              <h2 id="template" className="text-3xl font-bold mt-12 mb-6">Template Para Usar no Notion</h2>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-bold mb-4">🌅 Rotina Matinal 3x5</h3>
                <div className="space-y-4 text-base">
                  <div>
                    <p className="font-semibold mb-2">[ ] Bloco 1: Despertar</p>
                    <ul className="ml-6 space-y-1 text-sm text-muted-foreground">
                      <li>• Alongamento (2 min)</li>
                      <li>• Água + respiração (2 min)</li>
                      <li>• Luz natural (1 min)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">[ ] Bloco 2: Clareza</p>
                    <ul className="ml-6 space-y-1 text-sm text-muted-foreground">
                      <li>• 3 prioridades do dia (3 min)</li>
                      <li>• Visualização (2 min)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">[ ] Bloco 3: Ativação</p>
                    <ul className="ml-6 space-y-1 text-sm text-muted-foreground">
                      <li>• Primeira tarefa (3 min)</li>
                      <li>• Conteúdo inspirador (2 min)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão: Comece Amanhã</h2>

              <p className="text-lg leading-relaxed mb-6">
                A diferença entre ter um dia produtivo e um dia desperdiçado está nos primeiros 15 minutos. O Método 3x5
                não exige que você seja um madrugador extremo ou tenha 2 horas livres toda manhã.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                <strong>Ele só exige 15 minutos e a disposição de dar ao seu dia o começo que ele merece.</strong>
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Comece amanhã. Teste por uma semana. E depois me conta o resultado.
              </p>
            </div>

            <BlogCTA variant="default" location="rotina-matinal-poderosa" />
            <AuthorBio />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RotinaMatinalPoderosa;
