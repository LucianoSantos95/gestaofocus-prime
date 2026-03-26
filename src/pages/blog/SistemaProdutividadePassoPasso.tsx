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
import { Inbox, Filter, FolderTree, Calendar as CalendarIcon, Target } from "lucide-react";
import coverImage from "@/assets/blog/sistema-produtividade-passo-passo.jpg";

const SistemaProdutividadePassoPasso = () => {
  const imageUrl = "https://focusinteligente.com.br" + coverImage;
  const articleUrl = "https://focusinteligente.com.br/blog/sistema-produtividade-passo-passo";

  const tocItems = [
    { id: "introducao", text: "Por Que Você Precisa de um Sistema", level: 2 },
    { id: "fundamentos", text: "Os 4 Pilares de um Sistema Eficaz", level: 2 },
    { id: "passo-1", text: "Passo 1: Capture Tudo", level: 2 },
    { id: "passo-2", text: "Passo 2: Processe com Clareza", level: 2 },
    { id: "passo-3", text: "Passo 3: Organize por Contexto", level: 2 },
    { id: "passo-4", text: "Passo 4: Revise Regularmente", level: 2 },
  ];

  const keyTakeaways = [
    "Um sistema de produtividade eficaz se apoia em 4 pilares: Captura, Processamento, Organização, Revisão",
    "Sua mente é para ter ideias, não para guardar ideias — crie uma Inbox Universal",
    "Processar = decidir o que fazer com cada item: fazer, delegar, agendar ou arquivar",
    "Quanto mais simples o sistema, maior a chance de você realmente usá-lo",
    "Sem revisão regular, qualquer sistema desmorona em semanas",
  ];

  return (
    <>
      <ReadingProgressBar />
      <SEOHead
        title="Sistema de Produtividade para Agências e Consultorias | Focus"
        description="Monte um sistema de produtividade para sua agência ou consultoria em 4 passos. Guia prático para prestadores de serviço organizarem a operação."
        canonical="/blog/sistema-produtividade-passo-passo"
        image={imageUrl}
        type="article"
        publishedTime="2025-01-29"
        modifiedTime="2025-01-29"
        keywords="sistema produtividade agência, produtividade consultoria, gestão tarefas prestadores serviço, organização operacional"
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />

        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <BlogBreadcrumb articleTitle="Sistema de Produtividade" articleSlug="sistema-produtividade-passo-passo" />

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Como criar um sistema de produtividade para sua agência ou consultoria (sem complicar)
              </h1>
              <p className="text-xl text-muted-foreground">
                Um sistema simples e prático para prestadores de serviço organizarem entregas, prazos e equipe
              </p>
            </header>

            <ArticleEngagement
              publishDate="29 de janeiro de 2025"
              readTime="9 min"
              articleUrl={articleUrl}
              articleTitle="Sistema de Produtividade Passo a Passo"
            />

            <img src={coverImage} alt="Sistema de produtividade para agências e consultorias organizado e funcional" className="w-full h-[400px] object-cover rounded-lg mb-8" />

            <KeyTakeaways items={keyTakeaways} readTime="9 min" />
            <TableOfContents items={tocItems} />

            <div className="prose prose-lg max-w-none">
              <section id="introducao" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <Target className="h-8 w-8 text-primary" />
                  Por Que Você Precisa de um Sistema
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A maioria das pessoas não tem um <strong>sistema de produtividade</strong>. Elas têm uma coleção caótica de listas, lembretes, post-its e ferramentas que não conversam entre si.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O resultado? Tarefas esquecidas, prioridades confusas, sensação constante de estar perdendo algo importante e uma mente que nunca descansa.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>A boa notícia:</strong> criar um sistema eficaz não precisa ser complicado. Quanto mais simples, melhor.
                </p>
              </section>

              <section id="fundamentos" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Os 4 Pilares de um Sistema Eficaz</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-primary/10 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3"><Inbox className="h-6 w-6 text-primary" /><h3 className="text-lg font-semibold">1. Captura</h3></div>
                    <p className="text-muted-foreground text-sm">Um lugar único onde TUDO é registrado imediatamente.</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3"><Filter className="h-6 w-6 text-primary" /><h3 className="text-lg font-semibold">2. Processamento</h3></div>
                    <p className="text-muted-foreground text-sm">Método claro para decidir: fazer, delegar, agendar ou arquivar.</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3"><FolderTree className="h-6 w-6 text-primary" /><h3 className="text-lg font-semibold">3. Organização</h3></div>
                    <p className="text-muted-foreground text-sm">Estrutura lógica que permite encontrar qualquer informação em segundos.</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3"><CalendarIcon className="h-6 w-6 text-primary" /><h3 className="text-lg font-semibold">4. Revisão</h3></div>
                    <p className="text-muted-foreground text-sm">Ritual periódico para garantir que o sistema está atualizado.</p>
                  </div>
                </div>
              </section>

              <section id="passo-1" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <Inbox className="h-8 w-8 text-primary" />
                  Passo 1: Capture Tudo
                </h2>
                <div className="bg-muted/30 rounded-lg p-6 mb-6">
                  <p className="text-muted-foreground leading-relaxed mb-4"><strong>Regra de ouro:</strong> sua mente é para ter ideias, não para guardar ideias.</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-primary pl-4"><h4 className="font-semibold mb-2">Crie uma Inbox Universal</h4><p className="text-muted-foreground text-sm">Um único lugar onde TUDO é capturado: tarefas, ideias, links, referências.</p></div>
                  <div className="border-l-4 border-primary pl-4"><h4 className="font-semibold mb-2">Torne a Captura Instantânea</h4><p className="text-muted-foreground text-sm">Quanto mais rápido você captura, mais você usa o sistema.</p></div>
                  <div className="border-l-4 border-primary pl-4"><h4 className="font-semibold mb-2">Não Julgue, Apenas Capture</h4><p className="text-muted-foreground text-sm">No momento da captura, não perca tempo decidindo se é importante. Processe depois.</p></div>
                </div>
              </section>

              <section id="passo-2" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <Filter className="h-8 w-8 text-primary" />
                  Passo 2: Processe com Clareza
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A Inbox não pode virar um cemitério de tarefas. Processar significa <strong>decidir o que fazer</strong> com cada item: é acionável? Leva menos de 2 minutos? Faça agora. Senão, delegue, agende ou arquive.
                </p>
              </section>

              <section id="passo-3" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <FolderTree className="h-8 w-8 text-primary" />
                  Passo 3: Organize por Contexto
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Organize tarefas por contexto (onde ou como você vai fazer), não por projeto. Isso facilita a execução: quando está no computador, vê todas as tarefas de computador; quando está em reunião, vê as decisões pendentes.
                </p>
              </section>

              <section id="passo-4" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <CalendarIcon className="h-8 w-8 text-primary" />
                  Passo 4: Revise Regularmente
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sem revisão, o sistema morre. Agende revisões semanais de 30-60 minutos: limpe a Inbox, revise projetos ativos, ajuste prioridades e planeje a semana seguinte.
                </p>
              </section>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
              <p className="text-lg leading-relaxed mb-8">
                Um sistema de produtividade não precisa ser complicado para ser eficaz. Captura, processamento, organização e revisão — com esses 4 pilares, você terá uma estrutura sólida para gerenciar qualquer volume de trabalho sem perder o controle. Comece simples e evolua conforme suas necessidades.
              </p>
            </div>

            <BlogCTA variant="default" location="sistema-produtividade-passo-passo" />
            <AuthorBio />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SistemaProdutividadePassoPasso;
