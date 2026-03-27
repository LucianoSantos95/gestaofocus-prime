import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeaways from "@/components/blog/KeyTakeaways";
import ArticleEngagement from "@/components/blog/ArticleEngagement";
import AuthorBio from "@/components/blog/AuthorBio";
import InlineRelatedArticles from "@/components/blog/InlineRelatedArticles";
import SEOHead from "@/components/SEOHead";
import articleImage from "@/assets/blog/tecnica-pomodoro-guia.jpg";

const TecnicaPomodoroGuia = () => {
  const articleUrl = "https://focusinteligente.com.br/blog/tecnica-pomodoro-guia-definitivo";
  const imageUrl = "https://focusinteligente.com.br" + articleImage;

  const tocItems = [
    { id: "o-que-e", text: "O Que É a Técnica Pomodoro", level: 2 },
    { id: "como-usar", text: "Como Usar Pomodoro: Passo a Passo", level: 2 },
    { id: "variacoes", text: "Variações do Pomodoro", level: 2 },
    { id: "apps", text: "Melhores Apps e Ferramentas", level: 2 },
    { id: "erros", text: "5 Erros Fatais ao Usar Pomodoro", level: 2 },
    { id: "notion", text: "Pomodoro + Notion: Combinação Perfeita", level: 2 },
  ];

  const keyTakeaways = [
    "25 minutos de foco + 5 minutos de pausa = 1 pomodoro",
    "A técnica cria urgência artificial que aumenta o foco",
    "Pausas são obrigatórias, não opcionais",
    "Experimente variações (15/3, 50/10, 90/20) para seu ritmo",
    "Forest e Pomofocus são os melhores apps gratuitos",
  ];

  const inlineRelated = [
    { title: "Método GTD: complemento ideal para Pomodoro", slug: "metodo-gtd-guia-completo" },
    { title: "Como organizar sua rotina semanal", slug: "organizar-rotina-semanal" },
  ];

  return (
    <>
      <ReadingProgressBar />
      <SEOHead
        title="Técnica Pomodoro para Equipes de Agência e Consultoria"
        description="Aplique a Técnica Pomodoro na sua agência ou consultoria. Guia com variações, apps e como aumentar o foco da equipe em entregas de clientes."
        canonical="/blog/tecnica-pomodoro-guia-definitivo"
        image={imageUrl}
        type="article"
        publishedTime="2025-01-19"
        modifiedTime="2025-01-19"
        keywords="técnica pomodoro agência, pomodoro equipe consultoria, foco produtividade serviços, gestão tempo prestadores"
      />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <article className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <BlogBreadcrumb 
              articleTitle="Técnica Pomodoro" 
              articleSlug="tecnica-pomodoro-guia-definitivo" 
            />

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
                Técnica Pomodoro para Agências: Como Aumentar o Foco da Equipe em Entregas
              </h1>
              <p className="text-xl text-muted-foreground">
                O método de produtividade mais famoso aplicado à realidade de agências e consultorias
              </p>
            </header>

            <ArticleEngagement 
              publishDate="19 de janeiro de 2025"
              readTime="12 min"
              articleUrl={articleUrl}
              articleTitle="Técnica Pomodoro: Funciona Mesmo?"
            />

            <div className="mb-12 rounded-xl overflow-hidden">
              <img 
                src={articleImage} 
                alt="Técnica Pomodoro com timer e pessoa focada trabalhando"
                className="w-full h-auto"
              />
            </div>

            <KeyTakeaways items={keyTakeaways} readTime="12 min" />

            <TableOfContents items={tocItems} />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Você já tentou usar a Técnica Pomodoro e desistiu depois de 2 dias? Ou leu sobre o método mas ficou na dúvida se realmente funciona?
              </p>

              <p className="text-lg leading-relaxed mb-6">
                A verdade é: <strong>Pomodoro funciona, mas não do jeito que todo mundo ensina</strong>. Há detalhes críticos que fazem a diferença entre "só mais uma técnica" e "o método que mudou minha produtividade".
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Neste guia, vou te mostrar exatamente como aplicar Pomodoro da forma correta (com ciência, apps e ajustes personalizados).
              </p>

              <h2 id="o-que-e" className="text-3xl font-bold mt-12 mb-6 text-foreground">
                O Que É a Técnica Pomodoro (e Por Que Ela Funciona)
              </h2>

              <p className="mb-4">
                Criada nos anos 80 por Francesco Cirillo, a Técnica Pomodoro é um método de gestão de tempo baseado em:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="mb-4"><strong>🍅 25 minutos de foco total</strong> em uma única tarefa</p>
                <p className="mb-4"><strong>☕ 5 minutos de pausa</strong> para descanso</p>
                <p className="mb-0"><strong>🔄 Repetir</strong> 4 vezes, depois fazer pausa longa (15-30 min)</p>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Por Que Funciona? (A Ciência Por Trás)
              </h3>

              <p className="mb-4">
                Estudos de neurociência mostram que nosso cérebro tem <strong>capacidade limitada de atenção sustentada</strong>. Após 20-30 minutos de foco intenso, a performance começa a cair.
              </p>

              <ul className="space-y-3 mb-8">
                <li>✓ <strong>Cria urgência artificial:</strong> "Tenho só 25 minutos" aumenta o foco</li>
                <li>✓ <strong>Combate a procrastinação:</strong> 25 minutos parece mais gerenciável</li>
                <li>✓ <strong>Previne burnout:</strong> Pausas regulares mantêm a energia mental</li>
                <li>✓ <strong>Melhora a autoconsciência:</strong> Você mede quantos "pomodoros" cada tarefa requer</li>
              </ul>

              <InlineRelatedArticles articles={inlineRelated} title="Artigos relacionados" />

              <h2 id="como-usar" className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Como Usar Pomodoro: Passo a Passo Completo
              </h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Passo 1: Prepare Sua Lista de Tarefas
              </h3>

              <p className="mb-4">
                Antes de começar, você precisa saber <strong>o que vai fazer</strong> em cada pomodoro:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="mb-2"><strong>❌ Errado:</strong></p>
                <p className="mb-4 text-muted-foreground">"Vou trabalhar no projeto X"</p>
                
                <p className="mb-2"><strong>✅ Correto:</strong></p>
                <p className="text-muted-foreground">"Escrever introdução do relatório (estimativa: 2 pomodoros)"</p>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Passo 2: Configure Seu Ambiente
              </h3>

              <ul className="space-y-2 mb-6">
                <li>📱 <strong>Celular:</strong> Modo avião ou "Não Perturbe"</li>
                <li>💬 <strong>Notificações:</strong> Desative todas</li>
                <li>🎧 <strong>Som:</strong> Silêncio ou ruído branco</li>
                <li>🚪 <strong>Espaço:</strong> Avise que não quer ser interrompido</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Passo 3: Inicie o Timer e Trabalhe
              </h3>

              <ul className="space-y-3 mb-6">
                <li>✓ Foque APENAS na tarefa escolhida</li>
                <li>✓ Se lembrar de algo urgente, anote e volte ao foco</li>
                <li>✓ Não cheque celular, e-mail ou redes sociais</li>
                <li>✓ Se terminar antes do timer, revise ou melhore o trabalho</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Passo 4: Faça a Pausa (Sério, Não Pule!)
              </h3>

              <p className="mb-4">
                <strong>Erro mais comum:</strong> Pular pausas para "adiantar o trabalho". Isso sabota a técnica!
              </p>

              <ul className="space-y-2 mb-6">
                <li>✅ Levante e caminhe</li>
                <li>✅ Alongue o corpo</li>
                <li>✅ Beba água</li>
                <li>❌ <strong>NÃO</strong> use redes sociais</li>
                <li>❌ <strong>NÃO</strong> comece outra tarefa</li>
              </ul>

              <h2 id="variacoes" className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Variações do Pomodoro: Personalize Para Você
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">🔥 Pomodoro Intenso (50/10)</p>
                  <p className="mb-2">50 min de trabalho + 10 min de pausa</p>
                  <p className="text-sm text-muted-foreground"><strong>Para quem:</strong> Tarefas que exigem contexto profundo</p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">⚡ Pomodoro Sprint (15/3)</p>
                  <p className="mb-2">15 min de trabalho + 3 min de pausa</p>
                  <p className="text-sm text-muted-foreground"><strong>Para quem:</strong> Iniciantes, tarefas rápidas</p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">🎯 Pomodoro Flow (90/20)</p>
                  <p className="mb-2">90 min de trabalho + 20 min de pausa</p>
                  <p className="text-sm text-muted-foreground"><strong>Para quem:</strong> Trabalho criativo profundo</p>
                </div>
              </div>

              <h2 id="apps" className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Melhores Apps e Ferramentas para Pomodoro
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-2">1. Forest (iOS/Android)</p>
                  <p className="text-muted-foreground">Gamificação: plante árvores virtuais enquanto trabalha.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-2">2. Pomofocus (Web)</p>
                  <p className="text-muted-foreground">Simples, direto, gratuito. Funciona no navegador.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-2">3. Notion (Multi-plataforma)</p>
                  <p className="text-muted-foreground">Integração com sistema de tarefas.</p>
                </div>
              </div>

              <h2 id="erros" className="text-3xl font-bold mt-12 mb-6 text-foreground">
                5 Erros Fatais ao Usar Pomodoro
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Erro 1: Não planejar o que vai fazer</p>
                  <p className="text-sm"><strong>Solução:</strong> Liste tarefas no início do dia.</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Erro 2: Pular pausas</p>
                  <p className="text-sm"><strong>Solução:</strong> Trate a pausa como parte obrigatória.</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Erro 3: Usar 25 min para tudo</p>
                  <p className="text-sm"><strong>Solução:</strong> Experimente variações.</p>
                </div>
              </div>

              <h2 id="notion" className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Pomodoro + Notion: A Combinação Perfeita
              </h2>

              <p className="mb-4">
                Integrar Pomodoro com um sistema de produtividade potencializa os resultados.
              </p>

              <div className="bg-muted p-8 rounded-lg my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Sistema de Produtividade Completo
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Nossos sistemas no Notion incluem tracking de Pomodoro integrado.
                </p>
                <Link 
                  to="/sistemas-notion" 
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Ver Sistemas Notion
                </Link>
              </div>

              <AuthorBio />
            </div>

            <div className="mt-16 pt-8 border-t border-border">
              <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/blog/metodo-gtd-guia-completo" className="group">
                  <div className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      Método GTD: Guia Completo
                    </h4>
                  </div>
                </Link>
                <Link to="/blog/organizar-rotina-semanal" className="group">
                  <div className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      Como Organizar Sua Rotina Semanal
                    </h4>
                  </div>
                </Link>
                <Link to="/blog/guia-foco-evitar-distracoes" className="group">
                  <div className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      Guia Definitivo do Foco
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default TecnicaPomodoroGuia;
