import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCTA from "@/components/BlogCTA";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeaways from "@/components/blog/KeyTakeaways";
import ArticleEngagement from "@/components/blog/ArticleEngagement";
import AuthorBio from "@/components/blog/AuthorBio";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import { Flame, ListTodo, AlertTriangle, CheckCircle2, Target, Shield } from "lucide-react";
import coverImage from "@/assets/blog/tarefas-vs-incendios.jpg";

const TarefasVsIncendios = () => {
  const imageUrl = "https://focusinteligente.com.br" + coverImage;
  const articleUrl = "https://focusinteligente.com.br/blog/tarefas-vs-incendios";

  const tocItems = [
    { id: "introducao", text: "O Ciclo Vicioso", level: 2 },
    { id: "diferenca", text: "A Diferença Entre Tarefas e Incêndios", level: 2 },
    { id: "sinais", text: "5 Sinais de Que Você Está Só Apagando Incêndios", level: 2 },
    { id: "custo", text: "O Custo Real da Gestão Reativa", level: 2 },
    { id: "transicao", text: "Como Fazer a Transição", level: 2 },
    { id: "sistema", text: "Construindo um Sistema Preventivo", level: 2 },
  ];

  const keyTakeaways = [
    "Gestão de tarefas é proativa; apagar incêndios é reativa — a diferença define seu crescimento",
    "Se cada tarefa parece um sprint de última hora, você não está planejando — está reagindo",
    "5 sinais claros indicam que você está preso no modo reativo",
    "O custo invisível: esgotamento da equipe, perda de oportunidades e erros recorrentes",
    "É possível sair do modo reativo com processos claros e sistemas preventivos",
  ];

  return (
    <>
      <ReadingProgressBar />
      <SEOHead
        title="Você Está Gerenciando Tarefas… ou Apenas Apagando Incêndios? | Focus Inteligente"
        description="Descubra a diferença entre gestão proativa e reativa, identifique se você está preso no modo urgência e aprenda a construir um sistema que previne crises."
        canonical="/blog/tarefas-vs-incendios"
        image={imageUrl}
        type="article"
        publishedTime="2025-01-28"
        modifiedTime="2025-01-28"
        keywords="gestão de tarefas, gestão reativa, produtividade, apagar incêndios, gestão proativa, organização empresarial"
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />

        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <BlogBreadcrumb articleTitle="Tarefas vs. Incêndios" articleSlug="tarefas-vs-incendios" />

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Você Está Gerenciando Tarefas… ou Apenas Apagando Incêndios?
              </h1>
              <p className="text-xl text-muted-foreground">
                A diferença entre gestão proativa e reativa pode ser a linha entre crescimento sustentável e estagnação disfarçada de produtividade.
              </p>
            </header>

            <ArticleEngagement
              publishDate="28 de janeiro de 2025"
              readTime="8 min"
              articleUrl={articleUrl}
              articleTitle="Tarefas vs. Incêndios: Gestão Proativa"
            />

            <img src={coverImage} alt="Gestão proativa vs reativa - diferença entre organizar tarefas e apagar incêndios" className="w-full h-[400px] object-cover rounded-lg mb-8" />

            <KeyTakeaways items={keyTakeaways} readTime="8 min" />
            <TableOfContents items={tocItems} />

            <div className="prose prose-lg max-w-none">
              <section id="introducao" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <Flame className="h-8 w-8 text-destructive" />
                  O Ciclo Vicioso
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Você já terminou um dia de trabalho completamente exausto, com a sensação de que não parou um segundo sequer, mas ao olhar para trás… percebeu que nada realmente importante foi feito?
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Isso acontece porque você não estava <strong>gerenciando tarefas</strong>. Você estava <strong>apagando incêndios</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  E existe uma diferença enorme entre essas duas coisas. Uma leva ao crescimento sustentável. A outra, à exaustão disfarçada de produtividade.
                </p>
              </section>

              <section id="diferenca" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <ListTodo className="h-8 w-8 text-primary" />
                  A Diferença Entre Tarefas e Incêndios
                </h2>

                <div className="bg-muted/30 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">📋 Gestão de Tarefas (Proativa)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><span>Você trabalha com base em planejamento e prioridades claras</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><span>Consegue enxergar o mês, a semana e o dia com antecedência</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><span>Sabe o que é importante e o que é urgente</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><span>Tem tempo para prevenção, melhoria e estratégia</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><span>Termina o dia com sensação de progresso real</span></li>
                  </ul>
                </div>

                <div className="bg-destructive/10 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">🔥 Apagar Incêndios (Reativa)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2"><AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" /><span>Você vive respondendo a urgências e imprevistos</span></li>
                    <li className="flex items-start gap-2"><AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" /><span>Não consegue planejar porque está sempre apagando fogo</span></li>
                    <li className="flex items-start gap-2"><AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" /><span>Tudo parece urgente, nada é realmente prioritário</span></li>
                    <li className="flex items-start gap-2"><AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" /><span>Nunca sobra tempo para pensar estrategicamente</span></li>
                    <li className="flex items-start gap-2"><AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" /><span>Termina o dia exausto, mas com sensação de vazio</span></li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>A verdade brutal:</strong> quem vive apagando incêndios não cresce. Apenas sobrevive.
                </p>
              </section>

              <section id="sinais" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">5 Sinais de Que Você Está Só Apagando Incêndios</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-destructive pl-4"><h3 className="text-xl font-semibold mb-2">1. Você sempre trabalha sob pressão</h3><p className="text-muted-foreground">Se cada tarefa parece um sprint de última hora, você não está planejando — está reagindo.</p></div>
                  <div className="border-l-4 border-destructive pl-4"><h3 className="text-xl font-semibold mb-2">2. Suas tarefas estratégicas nunca saem do papel</h3><p className="text-muted-foreground">Aquele projeto importante que fica sendo adiado? É porque você não tem sistema, só urgências.</p></div>
                  <div className="border-l-4 border-destructive pl-4"><h3 className="text-xl font-semibold mb-2">3. Você não consegue planejar a semana</h3><p className="text-muted-foreground">Sem visibilidade do que vem pela frente, cada dia é uma surpresa desagradável.</p></div>
                  <div className="border-l-4 border-destructive pl-4"><h3 className="text-xl font-semibold mb-2">4. Os mesmos problemas se repetem</h3><p className="text-muted-foreground">Se você apaga o mesmo incêndio toda semana, o problema não é a tarefa — é a falta de prevenção.</p></div>
                  <div className="border-l-4 border-destructive pl-4"><h3 className="text-xl font-semibold mb-2">5. Sua equipe vive perguntando o que fazer</h3><p className="text-muted-foreground">Falta de processos claros transforma você no gargalo de todas as decisões.</p></div>
                </div>
              </section>

              <section id="custo" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">O Custo Real da Gestão Reativa</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Trabalhar no modo "apagar incêndios" tem custos invisíveis que se acumulam com o tempo:
                </p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2"><span className="text-destructive font-bold mt-1">•</span><span><strong>Esgotamento da equipe:</strong> ninguém aguenta viver sob pressão constante</span></li>
                  <li className="flex items-start gap-2"><span className="text-destructive font-bold mt-1">•</span><span><strong>Perda de oportunidades:</strong> enquanto você apaga fogo, a concorrência inova</span></li>
                  <li className="flex items-start gap-2"><span className="text-destructive font-bold mt-1">•</span><span><strong>Erros recorrentes:</strong> sem prevenção, os mesmos problemas voltam</span></li>
                  <li className="flex items-start gap-2"><span className="text-destructive font-bold mt-1">•</span><span><strong>Crescimento travado:</strong> você está ocupado demais sobrevivendo para crescer</span></li>
                </ul>
              </section>

              <section id="transicao" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <Target className="h-8 w-8 text-primary" />
                  Como Fazer a Transição
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg"><h3 className="text-xl font-semibold mb-2">1. Separe urgente de importante</h3><p className="text-muted-foreground">Use a Matriz de Eisenhower para classificar tarefas.</p></div>
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg"><h3 className="text-xl font-semibold mb-2">2. Bloqueie tempo para prevenção</h3><p className="text-muted-foreground">Reserve pelo menos 2 horas por semana para trabalho estratégico e preventivo.</p></div>
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg"><h3 className="text-xl font-semibold mb-2">3. Documente processos</h3><p className="text-muted-foreground">Se um problema se repete, crie um processo para preveni-lo.</p></div>
                </div>
              </section>

              <section id="sistema" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  Construindo um Sistema Preventivo
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  O antídoto para o modo reativo é ter um sistema de gestão que antecipa problemas, organiza prioridades e mantém tudo documentado.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Com um sistema bem estruturado, você para de reagir e começa a liderar. Sua equipe sabe o que fazer, os processos são claros, e os incêndios se tornam exceção — não regra.
                </p>
              </section>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
              <p className="text-lg leading-relaxed mb-8">
                Se você se identificou com os sinais acima, não se preocupe — a mudança é possível. O primeiro passo é reconhecer que existe uma diferença entre estar ocupado e ser produtivo. O segundo passo é construir um sistema que trabalhe a seu favor, não contra você.
              </p>
            </div>

            <BlogCTA variant="default" location="tarefas-vs-incendios" />
            <AuthorBio />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TarefasVsIncendios;
