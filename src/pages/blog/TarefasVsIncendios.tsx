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
        title="Sua Agência Gerencia Tarefas ou Apaga Incêndios? | Focus"
        description="Gestão proativa vs reativa em agências e consultorias. Identifique se sua equipe está no modo urgência e construa um sistema preventivo."
        canonical="/blog/gerenciando-tarefas-ou-apagando-incendios"
        image={imageUrl}
        type="article"
        publishedTime="2025-01-28"
        modifiedTime="2025-01-28"
        keywords="gestão tarefas agência, gestão reativa consultoria, apagar incêndios prestadores serviço, gestão proativa agências"
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />

        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <BlogBreadcrumb articleTitle="Tarefas vs. Incêndios" articleSlug="tarefas-vs-incendios" />

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Sua Agência Está Gerenciando Tarefas… ou Apenas Apagando Incêndios?
              </h1>
              <p className="text-xl text-muted-foreground">
                A diferença entre gestão proativa e reativa em agências e consultorias pode ser a linha entre crescimento e estagnação.
              </p>
            </header>

            <ArticleEngagement
              publishDate="28 de janeiro de 2025"
              readTime="8 min"
              articleUrl={articleUrl}
              articleTitle="Tarefas vs. Incêndios: Gestão Proativa"
            />

            <img src={coverImage} alt="Gestão proativa vs reativa em agências e consultorias - organizar tarefas ou apagar incêndios" className="w-full h-[400px] object-cover rounded-lg mb-8" />

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

                <p className="text-muted-foreground leading-relaxed mb-6">
                  A transição do modo reativo para o proativo não acontece da noite para o dia — e tentar fazer tudo ao mesmo tempo costuma falhar. O que funciona é uma mudança gradual, onde cada semana você adiciona um layer de prevenção até que o planejamento vire o modo padrão de operar.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-2">1. Separe urgente de importante</h3>
                    <p className="text-muted-foreground mb-3">A Matriz de Eisenhower divide tarefas em quatro quadrantes: urgente + importante (faça agora), importante + não urgente (agende), urgente + não importante (delegue), não urgente + não importante (elimine).</p>
                    <p className="text-muted-foreground">O insight crucial: a maioria dos incêndios mora no quadrante "urgente + não importante" — barulhosos, mas sem impacto real. Quando você começa a classificar antes de agir, percebe que muitas "urgências" podiam esperar ou ser delegadas.</p>
                  </div>
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-2">2. Bloqueie tempo para prevenção</h3>
                    <p className="text-muted-foreground mb-3">Reserve pelo menos 2 horas por semana — em horário fixo, no calendário, marcado como indisponível — para trabalho estratégico e preventivo. Segunda de manhã ou sexta à tarde costumam funcionar bem.</p>
                    <p className="text-muted-foreground">Nesse tempo: revise o que está vindo na próxima semana, identifique o que pode virar problema se ninguém agir agora, e tome uma ação preventiva concreta. Isso quebra o ciclo antes que o incêndio apareça.</p>
                  </div>
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-2">3. Documente processos que se repetem</h3>
                    <p className="text-muted-foreground mb-3">Cada vez que você apaga o mesmo incêndio pela segunda vez, é um sinal: esse problema precisa de um processo, não de mais uma solução ad hoc.</p>
                    <p className="text-muted-foreground">Crie um processo simples para os 3 problemas mais recorrentes. Não precisa ser perfeito — uma página no Notion com 5 passos numerados já é infinitamente melhor que depender da memória. Com o processo documentado, qualquer membro da equipe pode lidar sem precisar de você.</p>
                  </div>
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-2">4. Estabeleça reuniões de planejamento curtas e consistentes</h3>
                    <p className="text-muted-foreground mb-3">Uma reunião semanal de 30 minutos com a equipe para revisar o que está em andamento, o que vence nos próximos 7 dias e onde estão os bloqueios — isso vale mais que horas de alinhamento reativo ao longo da semana.</p>
                    <p className="text-muted-foreground">A consistência é mais importante que a duração. Um standup de 15 minutos toda segunda, sem falhas, transforma a cultura de reativa para proativa em 4-6 semanas.</p>
                  </div>
                </div>
              </section>

              <section id="sistema" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  Construindo um Sistema Preventivo
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  O antídoto para o modo reativo é um sistema de gestão que antecipa problemas, organiza prioridades e mantém tudo documentado em um lugar acessível a toda a equipe. A palavra-chave é <strong>sistema</strong> — não ferramenta, não processo isolado, mas a combinação dos três.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-muted p-5 rounded-lg">
                    <h4 className="font-bold mb-3">📋 Visibilidade</h4>
                    <p className="text-muted-foreground text-sm">Um lugar onde todos podem ver o status de cada projeto, quem é responsável e o que vence quando. Sem precisar perguntar.</p>
                  </div>
                  <div className="bg-muted p-5 rounded-lg">
                    <h4 className="font-bold mb-3">📌 Prioridade clara</h4>
                    <p className="text-muted-foreground text-sm">Uma forma consensual de definir o que é realmente importante versus o que é apenas barulhento. A Matriz de Eisenhower é um bom começo.</p>
                  </div>
                  <div className="bg-muted p-5 rounded-lg">
                    <h4 className="font-bold mb-3">📖 Processos documentados</h4>
                    <p className="text-muted-foreground text-sm">Para as situações recorrentes, um passo a passo escrito que qualquer pessoa da equipe pode seguir sem precisar perguntar.</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  O Notion funciona muito bem como hub central para esse sistema: projetos e tarefas com responsáveis e prazos visíveis para todos, base de conhecimento com processos documentados, e um dashboard que mostra o que precisa de atenção esta semana. Não porque o Notion seja mágico — mas porque centralizar em um lugar elimina o tempo gasto procurando informação espalhada em 5 ferramentas.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Com esse sistema em operação, a dinâmica muda gradualmente: a equipe começa a checar o sistema antes de perguntar, os incêndios se tornam exceção porque os problemas foram resolvidos antes de virar crise, e você começa a ter espaço para pensar estrategicamente — não apenas reagir.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="font-semibold mb-2">⚡ Por onde começar</p>
                  <p className="text-muted-foreground">Esta semana: mapeie os 3 incêndios mais recorrentes da sua agência e crie um processo simples para prevenir cada um. Não precisa ser perfeito. Só precisa existir e ser acessível para a equipe.</p>
                </div>
              </section>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
              <p className="text-lg leading-relaxed mb-6">
                Se você se identificou com os sinais acima, a mudança é possível — mas exige uma decisão consciente de parar de apenas reagir. O primeiro passo é reconhecer que estar sempre ocupado não é o mesmo que ser produtivo. O segundo passo é criar um sistema que trabalhe a seu favor: visibilidade, prioridade clara e processos documentados.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Gestão proativa não é para quando você tiver mais tempo. É o que cria mais tempo. Comece essa semana, com um processo simples, e vá expandindo. Cada incêndio prevenido é uma hora devolvida para o trabalho que realmente importa.
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
