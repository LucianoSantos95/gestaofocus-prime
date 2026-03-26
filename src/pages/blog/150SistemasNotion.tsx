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
import { BookOpen, Lightbulb, AlertTriangle, Wrench, TrendingUp } from "lucide-react";
import coverImage from "@/assets/blog/150-sistemas-notion.jpg";

const OneFiftySystemsNotion = () => {
  const imageUrl = "https://focusinteligente.com.br" + coverImage;
  const articleUrl = "https://focusinteligente.com.br/blog/150-sistemas-notion";

  const tocItems = [
    { id: "introducao", text: "A Jornada", level: 2 },
    { id: "licao-1", text: "Lição 1: Simplicidade Vence Complexidade", level: 2 },
    { id: "licao-2", text: "Lição 2: Processos Antes de Ferramentas", level: 2 },
    { id: "licao-3", text: "Lição 3: O Perigo da Personalização Excessiva", level: 2 },
    { id: "licao-4", text: "Lição 4: Documentação É Prevenção", level: 2 },
    { id: "licao-5", text: "Lição 5: Sistemas Morrem Sem Revisão", level: 2 },
    { id: "armadilhas", text: "As 7 Armadilhas Mais Comuns", level: 2 },
  ];

  const keyTakeaways = [
    "Sistemas complexos são difíceis de manter — comece simples e evolua gradualmente",
    "Defina processos antes de construir ferramentas",
    "Personalização excessiva é uma armadilha — foque na funcionalidade",
    "Sem revisão periódica, qualquer sistema degrada em semanas",
    "Se você passa mais tempo organizando que executando, complicou demais",
  ];

  return (
    <>
      <ReadingProgressBar />
      <SEOHead
        title="150 Sistemas Notion para Agências: Lições Reais | Focus"
        description="Lições de quem organizou 150+ workspaces Notion para agências e consultorias. Armadilhas, erros comuns e o que realmente funciona."
        canonical="/blog/150-sistemas-notion"
        image={imageUrl}
        type="article"
        publishedTime="2025-01-30"
        modifiedTime="2025-01-30"
        keywords="sistemas notion agências, workspace notion consultoria, organização prestadores serviço, templates notion empresas serviço"
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />

        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <BlogBreadcrumb articleTitle="150 Sistemas no Notion" articleSlug="150-sistemas-notion" />

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                O que aprendi organizando 150+ sistemas Notion para agências e consultorias
              </h1>
              <p className="text-xl text-muted-foreground">
                Lições reais, armadilhas comuns e o que ninguém conta sobre criar sistemas que funcionam para prestadores de serviço
              </p>
            </header>

            <ArticleEngagement
              publishDate="30 de janeiro de 2025"
              readTime="10 min"
              articleUrl={articleUrl}
              articleTitle="150 Sistemas no Notion: Lições e Armadilhas"
            />

            <img src={coverImage} alt="Experiência organizando 150+ workspaces Notion para agências e consultorias" className="w-full h-[400px] object-cover rounded-lg mb-8" />

            <KeyTakeaways items={keyTakeaways} readTime="10 min" />
            <TableOfContents items={tocItems} />

            <div className="prose prose-lg max-w-none">
              <section id="introducao" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-primary" />
                  A Jornada
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nos últimos anos, mergulhei de cabeça no mundo do Notion. Não apenas como usuário, mas como construtor e organizador de sistemas.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O resultado? Mais de <strong>150 sistemas diferentes</strong> criados, testados e otimizados. De gestão de projetos a controle financeiro, de organização pessoal a planejamento de conteúdo.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  E nessa jornada, aprendi lições valiosas que quero compartilhar com você.
                </p>
              </section>

              <section id="licao-1" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <Lightbulb className="h-8 w-8 text-primary" />
                  Lição 1: Simplicidade Vence Complexidade
                </h2>
                <div className="bg-primary/10 rounded-lg p-6 mb-6">
                  <p className="text-lg font-semibold mb-2">Lição Principal:</p>
                  <p className="text-lg">Sistemas complexos são difíceis de manter. Comece simples e evolua gradualmente conforme suas necessidades reais.</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A tentação de criar sistemas complexos é grande. Bancos de dados interligados, fórmulas mirabolantes, automações infinitas…
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mas a verdade é que <strong>sistemas complexos são difíceis de manter</strong>. Comece simples. Use por algumas semanas. Ajuste ou descarte.
                </p>
              </section>

              <section id="licao-2" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <Wrench className="h-8 w-8 text-primary" />
                  Lição 2: Processos Antes de Ferramentas
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O Notion é poderoso, mas é só uma ferramenta. Ele não resolve seus problemas se você não souber o que está fazendo.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Defina seus processos primeiro.</strong> Entenda como você trabalha. Só então construa o sistema.
                </p>
              </section>

              <section id="licao-3" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                  Lição 3: O Perigo da Personalização Excessiva
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  É fácil se perder em detalhes, gastar horas ajustando cores e layouts… e esquecer do propósito principal: <strong>resolver um problema</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Personalize com moderação. Use templates como ponto de partida. Foque na funcionalidade, não na estética.
                </p>
              </section>

              <section id="licao-4" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-primary" />
                  Lição 4: Documentação É Prevenção
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sistemas complexos exigem documentação. Documente os processos, regras e convenções. Crie guias e tutoriais.
                </p>
              </section>

              <section id="licao-5" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  Lição 5: Sistemas Morrem Sem Revisão
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sistemas não são estáticos. O que funcionava há um mês pode não funcionar mais.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Agende revisões semanais ou quinzenais.</strong> Analise o que funciona, o que não funciona e o que pode ser melhorado.
                </p>
              </section>

              <section id="armadilhas" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">As 7 Armadilhas Mais Comuns</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-destructive pl-4"><h3 className="text-xl font-semibold mb-2">1. A Síndrome do Acumulador de Sistemas</h3><p className="text-muted-foreground">Criar sistemas por criar, sem propósito claro.</p></div>
                  <div className="border-l-4 border-destructive pl-4"><h3 className="text-xl font-semibold mb-2">2. O Labirinto das Relações Complexas</h3><p className="text-muted-foreground">Interligar bancos de dados de forma excessiva.</p></div>
                  <div className="border-l-4 border-destructive pl-4"><h3 className="text-xl font-semibold mb-2">3. A Ilusão do Controle Total</h3><p className="text-muted-foreground">Tentar controlar cada detalhe em vez de focar no que importa.</p></div>
                  <div className="border-l-4 border-destructive pl-4"><h3 className="text-xl font-semibold mb-2">4. A Paralisia da Customização</h3><p className="text-muted-foreground">Gastar horas personalizando mas nunca realmente usando.</p></div>
                  <div className="border-l-4 border-destructive pl-4"><h3 className="text-xl font-semibold mb-2">5. A Falácia da Automação Perfeita</h3><p className="text-muted-foreground">Ignorar a importância do trabalho manual e revisão humana.</p></div>
                  <div className="border-l-4 border-destructive pl-4"><h3 className="text-xl font-semibold mb-2">6. A Armadilha da Migração Completa</h3><p className="text-muted-foreground">Tentar migrar tudo, mesmo o que funciona melhor em outras ferramentas.</p></div>
                  <div className="border-l-4 border-destructive pl-4"><h3 className="text-xl font-semibold mb-2">7. A Morte por Abandono</h3><p className="text-muted-foreground">Criar um sistema incrível e nunca revisá-lo, deixando-o morrer lentamente.</p></div>
                </div>
              </section>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
              <p className="text-lg leading-relaxed mb-8">
                A jornada de 150+ sistemas me ensinou que o melhor sistema não é o mais complexo — é o que você realmente usa. Comece simples, defina processos antes de ferramentas, e revise regularmente. Essa é a fórmula.
              </p>
            </div>

            <BlogCTA variant="default" location="150-sistemas-notion" />
            <AuthorBio />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OneFiftySystemsNotion;
