import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Target, Calendar, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlogCTA from "@/components/BlogCTA";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeaways from "@/components/blog/KeyTakeaways";
import ArticleEngagement from "@/components/blog/ArticleEngagement";
import AuthorBio from "@/components/blog/AuthorBio";
import InlineRelatedArticles from "@/components/blog/InlineRelatedArticles";
import heroImage from "@/assets/blog/gestao-tempo-quem-vive-ocupado.jpg";

const GestaoTempoQuemViveOcupado = () => {
  const navigate = useNavigate();
  const imageUrl = "https://focusinteligente.com.br" + heroImage;
  const articleUrl = "https://focusinteligente.com.br/blog/gestao-tempo-quem-vive-ocupado";

  const tocItems = [
    { id: "problema", text: "O Problema Não é Falta de Tempo", level: 2 },
    { id: "priorize", text: "Estratégia 1: Priorize Ruthlessly", level: 2 },
    { id: "bloqueie", text: "Estratégia 2: Bloqueie Tempo", level: 2 },
    { id: "elimine", text: "Estratégia 3: Elimine Desperdiçadores", level: 2 },
    { id: "2min", text: "Estratégia 4: Regra dos 2 Minutos", level: 2 },
    { id: "planeje", text: "Estratégia 5: Planeje na Noite Anterior", level: 2 },
    { id: "delegue", text: "Estratégia 6: Aprenda a Delegar", level: 2 },
  ];

  const keyTakeaways = [
    "Pessoas produtivas fazem as coisas certas, não mais coisas",
    "Use a Matriz de Eisenhower para priorizar tarefas",
    "Reserve 80% do tempo para tarefas Importantes, mas Não Urgentes",
    "Regra dos 2 minutos: se leva menos tempo, faça agora",
    "Planeje o dia na noite anterior para começar com foco",
  ];

  const inlineRelated = [
    { title: "Matriz de Eisenhower para priorização", slug: "matriz-eisenhower-prioridades" },
    { title: "Técnica Pomodoro para foco", slug: "tecnica-pomodoro-guia-definitivo" },
  ];

  return (
    <>
      <ReadingProgressBar />
      <SEOHead
        title="Gestão do Tempo para Quem Vive Ocupado: Estratégias Simples que Funcionam | Focus Inteligente"
        description="Descubra estratégias práticas de gestão do tempo para pessoas ocupadas. Aprenda a priorizar, eliminar desperdiçadores de tempo e recuperar o controle da sua agenda."
        canonical="/blog/gestao-tempo-quem-vive-ocupado"
        image={imageUrl}
        type="article"
        publishedTime="2025-02-20"
        modifiedTime="2025-02-20"
        keywords="gestão do tempo, produtividade, ocupados, priorização, matriz eisenhower, time blocking"
      />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <BlogBreadcrumb 
            articleTitle="Gestão do Tempo" 
            articleSlug="gestao-tempo-quem-vive-ocupado" 
          />
          
          <Button
            variant="ghost"
            onClick={() => navigate("/blog")}
            className="mb-8 hover:bg-accent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o Blog
          </Button>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Gestão do Tempo para Quem Vive Ocupado: Estratégias Simples que Realmente Funcionam
            </h1>
            <p className="text-xl text-muted-foreground">
              Recupere o controle da sua agenda com técnicas práticas que cabem na rotina de quem tem pouco tempo
            </p>
          </header>

          <ArticleEngagement 
            publishDate="20 de fevereiro de 2025"
            readTime="9 min"
            articleUrl={articleUrl}
            articleTitle="Gestão do Tempo para Quem Vive Ocupado"
          />

          <img 
            src={heroImage}
            alt="Pessoa gerenciando tempo com tablet mostrando agenda organizada"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
          />

          <KeyTakeaways items={keyTakeaways} readTime="9 min" />

          <TableOfContents items={tocItems} />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Você sente que o dia não tem horas suficientes? Termina o expediente com a sensação de que fez muito, mas avançou pouco no que realmente importa?
            </p>

            <p className="text-lg leading-relaxed mb-8">
              <strong>Você não está sozinho.</strong> A maioria das pessoas ocupadas enfrenta o mesmo desafio: tempo limitado e demandas infinitas. A boa notícia? Existem estratégias simples e comprovadas que transformam sua relação com o tempo.
            </p>

            <h2 id="problema" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Clock className="h-8 w-8 text-primary" />
              O Problema Não é Falta de Tempo
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Todos temos as mesmas 24 horas por dia. A diferença está em como priorizamos e organizamos essas horas. Pessoas produtivas não fazem mais coisas — elas fazem as coisas certas.
            </p>

            <div className="bg-accent/20 border-l-4 border-primary p-6 rounded-r-lg my-8">
              <p className="text-lg font-semibold mb-2">⚠️ A Verdade Inconveniente:</p>
              <p className="text-base">
                Passar horas respondendo e-mails ou em reuniões improdutivas cria a ilusão de produtividade, mas não gera resultados reais. Estar ocupado não é o mesmo que ser produtivo.
              </p>
            </div>

            <InlineRelatedArticles articles={inlineRelated} title="Artigos relacionados" />

            <h2 id="priorize" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Target className="h-8 w-8 text-primary" />
              Estratégia 1: Priorize Ruthlessly (Implacavelmente)
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              A primeira regra da gestão do tempo é aprender a dizer NÃO. Não para tudo, mas para o que não está alinhado com suas prioridades principais.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Use a Matriz de Eisenhower</h3>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <span><strong>Urgente e Importante:</strong> Faça imediatamente</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <span><strong>Importante, mas Não Urgente:</strong> Agende</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">3.</span>
                <span><strong>Urgente, mas Não Importante:</strong> Delegue</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">4.</span>
                <span><strong>Nem Urgente, Nem Importante:</strong> Elimine</span>
              </li>
            </ul>

            <h2 id="bloqueie" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Calendar className="h-8 w-8 text-primary" />
              Estratégia 2: Bloqueie Tempo para o Que Importa
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Sua agenda deve refletir suas prioridades. Se algo é realmente importante, reserve um bloco de tempo específico para isso.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong>Manhã:</strong> Reserve para trabalho profundo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong>Tarde:</strong> Reuniões e comunicação</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong>Fim do dia:</strong> Planejamento do dia seguinte</span>
              </li>
            </ul>

            <h2 id="elimine" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Zap className="h-8 w-8 text-primary" />
              Estratégia 3: Elimine Desperdiçadores de Tempo
            </h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">1. Redes Sociais sem Propósito</h3>
            <p className="text-lg leading-relaxed mb-6">
              Use aplicativos como Forest ou Freedom para bloquear distrações. Defina horários específicos para checar redes sociais.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2. E-mails a Toda Hora</h3>
            <p className="text-lg leading-relaxed mb-6">
              Defina 2-3 horários fixos por dia para checar e-mails. Use a técnica de "processar, não revisar".
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3. Reuniões Desnecessárias</h3>
            <p className="text-lg leading-relaxed mb-6">
              Pergunte: "Isso pode ser resolvido por e-mail?" Se sim, decline e sugira alternativa.
            </p>

            <h2 id="2min" className="text-3xl font-bold mt-12 mb-6">Estratégia 4: Use a Regra dos 2 Minutos</h2>

            <p className="text-lg leading-relaxed mb-6">
              Se uma tarefa leva menos de 2 minutos, faça imediatamente. Não adicione à lista, não adie. Resolva na hora.
            </p>

            <h2 id="planeje" className="text-3xl font-bold mt-12 mb-6">Estratégia 5: Planeje o Dia na Noite Anterior</h2>

            <p className="text-lg leading-relaxed mb-6">
              Dedique 10 minutos no fim do dia para planejar o dia seguinte. Liste as 3 tarefas mais importantes (MIT).
            </p>

            <h2 id="delegue" className="text-3xl font-bold mt-12 mb-6">Estratégia 6: Aprenda a Delegar</h2>

            <p className="text-lg leading-relaxed mb-6">
              Você não precisa fazer tudo sozinho. Identifique tarefas que podem ser delegadas ou automatizadas.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>

            <p className="text-lg leading-relaxed mb-6">
              Gestão do tempo não é sobre fazer mais coisas — é sobre fazer as coisas certas com foco e intenção. Comece implementando uma estratégia por vez.
            </p>

            <AuthorBio />
          </div>

          <BlogCTA variant="default" location="gestao-tempo-quem-vive-ocupado" />
        </article>

        <Footer />
      </div>
    </>
  );
};

export default GestaoTempoQuemViveOcupado;
