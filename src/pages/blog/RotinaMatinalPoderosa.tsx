import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCTA from "@/components/BlogCTA";
import RelatedArticles from "@/components/RelatedArticles";
import rotinaMatinalImage from "@/assets/blog/rotina-matinal-poderosa.jpg";

const allArticles = [
  {
    title: "Checklist Diário: O Método Simples Que Aumenta Sua Produtividade em Até 40%",
    excerpt: "Descubra o sistema de checklist que profissionais de alta performance usam para maximizar resultados e reduzir stress diário.",
    slug: "checklist-diario-produtividade",
    readTime: "8 min",
    category: "Produtividade"
  },
  {
    title: "Como Organizar Sua Rotina Semanal Para Ter Mais Foco",
    excerpt: "O método completo de planejamento semanal que elimina decisões desnecessárias e multiplica seu foco nas tarefas que importam.",
    slug: "organizar-rotina-semanal",
    readTime: "9 min",
    category: "Organização"
  },
  {
    title: "Como Parar de Procrastinar Usando Sistemas Visuais",
    excerpt: "O método baseado em gatilhos visuais que elimina procrastinação sem precisar de força de vontade ou motivação externa.",
    slug: "parar-procrastinar-sistemas-visuais",
    readTime: "7 min",
    category: "Produtividade"
  }
];

export default function RotinaMatinalPoderosa() {
  return (
    <>
      <Helmet>
        <title>Como Criar uma Rotina Matinal Poderosa em 15 Minutos | Focus</title>
        <meta 
          name="description" 
          content="Descubra o método simples e comprovado para criar uma rotina matinal que transforma seu dia em apenas 15 minutos. Comece bem, termine melhor." 
        />
        <meta name="keywords" content="rotina matinal, produtividade matinal, hábitos matinais, morning routine, produtividade, organização pessoal" />
        <link rel="canonical" href="https://focusinteligente.com.br/blog/rotina-matinal-poderosa-15-minutos" />
        
        <meta property="og:title" content="Como Criar uma Rotina Matinal Poderosa em 15 Minutos" />
        <meta property="og:description" content="Descubra o método simples e comprovado para criar uma rotina matinal que transforma seu dia em apenas 15 minutos." />
        <meta property="og:image" content="https://focusinteligente.com.br/assets/blog/rotina-matinal-poderosa.jpg" />
        <meta property="og:url" content="https://focusinteligente.com.br/blog/rotina-matinal-poderosa-15-minutos" />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Como Criar uma Rotina Matinal Poderosa em 15 Minutos" />
        <meta name="twitter:description" content="Descubra o método simples e comprovado para criar uma rotina matinal que transforma seu dia em apenas 15 minutos." />
        <meta name="twitter:image" content="https://focusinteligente.com.br/assets/blog/rotina-matinal-poderosa.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Como Criar uma Rotina Matinal Poderosa em 15 Minutos",
            "description": "Descubra o método simples e comprovado para criar uma rotina matinal que transforma seu dia em apenas 15 minutos.",
            "image": "https://focusinteligente.com.br/assets/blog/rotina-matinal-poderosa.jpg",
            "datePublished": "2025-02-20",
            "author": {
              "@type": "Organization",
              "name": "Focus Inteligente"
            }
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <article className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-8">
          <div className="flex items-center gap-2 text-sm text-foreground-muted mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">Rotina Matinal Poderosa</span>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8 group"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para o Blog</span>
            </Link>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Produtividade
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Como Criar uma Rotina Matinal Poderosa Que Melhora Seu Dia em 15 Minutos
            </h1>

            <p className="text-xl text-foreground-muted mb-8">
              O método simples e comprovado que transforma suas manhãs e multiplica sua produtividade diária
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-foreground-muted mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime="2025-02-20">20 de Fevereiro, 2025</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min de leitura</span>
              </div>
            </div>

            <img 
              src={rotinaMatinalImage} 
              alt="Rotina matinal produtiva com café e journal ao amanhecer" 
              className="w-full h-[400px] object-cover rounded-lg mb-12"
              width={1200}
              height={675}
              loading="eager"
            />

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
                poderosa que vou te ensinar leva apenas <strong>15 minutos</strong> e pode ser feita por qualquer pessoa, 
                mesmo as mais ocupadas.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Por Que a Maioria das Rotinas Matinais Falha</h2>

              <p className="text-lg leading-relaxed mb-6">
                Antes de mostrar o método, preciso revelar por que a maioria das rotinas matinais não funciona:
              </p>

              <div className="bg-surface border border-border rounded-lg p-6 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">❌</span>
                    <div>
                      <strong>São muito longas:</strong> Rotinas de 1-2 horas são insustentáveis para quem tem vida corrida
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">❌</span>
                    <div>
                      <strong>Exigem muito esforço:</strong> Meditação, yoga, journal extenso... tudo isso cria resistência
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">❌</span>
                    <div>
                      <strong>Não têm propósito claro:</strong> Fazer atividades "porque dizem que é bom" não funciona a longo prazo
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed mb-8">
                A rotina matinal ideal precisa ser <strong>curta, simples e ter um propósito claro</strong>. É exatamente 
                isso que o Método 3x5 oferece.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">O Método 3x5: Sua Rotina de 15 Minutos</h2>

              <p className="text-lg leading-relaxed mb-6">
                O Método 3x5 divide seus 15 minutos matinais em 3 blocos de 5 minutos, cada um com um objetivo específico:
              </p>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Bloco 1: Despertar (5 min)</h3>
                <p className="mb-4"><strong>Objetivo:</strong> Ativar o corpo e a mente</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>2 minutos:</strong> Alongamento leve ou caminhada pela casa
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>2 minutos:</strong> Beba um copo de água e respire fundo 5x
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>1 minuto:</strong> Abra janelas e deixe luz natural entrar
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Bloco 2: Clareza (5 min)</h3>
                <p className="mb-4"><strong>Objetivo:</strong> Definir o dia com intenção</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>3 minutos:</strong> Escreva as 3 prioridades do dia (use o Notion ou papel)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>2 minutos:</strong> Visualize mentalmente como será um dia bem-sucedido
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Bloco 3: Ativação (5 min)</h3>
                <p className="mb-4"><strong>Objetivo:</strong> Criar momentum para o dia</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>3 minutos:</strong> Comece a primeira tarefa da lista (mesmo que não termine)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>2 minutos:</strong> Leia algo inspirador ou ouça uma música que te energiza
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Como Implementar (E Não Abandonar)</h2>

              <p className="text-lg leading-relaxed mb-6">
                Ter o método é uma coisa. Fazer funcionar é outra. Aqui estão as 4 regras para ter sucesso:
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold mb-2">1. Comece com 1 semana de teste</h3>
                  <p className="text-foreground-muted">
                    Não se comprometa com "para sempre". Teste por 7 dias e avalie os resultados.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold mb-2">2. Prepare tudo na noite anterior</h3>
                  <p className="text-foreground-muted">
                    Deixe um copo de água, seu caderno e o que mais precisar já prontos. Elimine fricção.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold mb-2">3. Use um gatilho visual</h3>
                  <p className="text-foreground-muted">
                    Coloque um post-it na mesinha de cabeceira: "15 minutos = dia incrível"
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold mb-2">4. Não pule mesmo que acorde tarde</h3>
                  <p className="text-foreground-muted">
                    Se acordou atrasado, faça a versão de 7 minutos (2+3+2). Consistência &gt; Perfeição.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Os Resultados Que Você Pode Esperar</h2>

              <p className="text-lg leading-relaxed mb-6">
                Baseado em estudos e na experiência de centenas de pessoas que implementaram o Método 3x5:
              </p>

              <div className="bg-surface border border-border rounded-lg p-6 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <strong>Semana 1:</strong> Você acorda mais disposto e sabe exatamente o que fazer
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <strong>Semana 2-3:</strong> Sua produtividade aumenta 20-30% e o stress matinal diminui drasticamente
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <strong>Mês 1+:</strong> A rotina se torna automática e você não consegue mais viver sem ela
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Template Para Usar no Notion</h2>

              <p className="text-lg leading-relaxed mb-6">
                Para facilitar ainda mais, criei um template no Notion que você pode usar para rastrear sua rotina matinal:
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-bold mb-4">🌅 Rotina Matinal 3x5</h3>
                <div className="space-y-4 text-base">
                  <div>
                    <p className="font-semibold mb-2">[ ] Bloco 1: Despertar</p>
                    <ul className="ml-6 space-y-1 text-sm text-foreground-muted">
                      <li>• Alongamento (2 min)</li>
                      <li>• Água + respiração (2 min)</li>
                      <li>• Luz natural (1 min)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">[ ] Bloco 2: Clareza</p>
                    <ul className="ml-6 space-y-1 text-sm text-foreground-muted">
                      <li>• 3 prioridades do dia (3 min)</li>
                      <li>• Visualização (2 min)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">[ ] Bloco 3: Ativação</p>
                    <ul className="ml-6 space-y-1 text-sm text-foreground-muted">
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
                Teste por 7 dias. Se não funcionar, você só perdeu 105 minutos. Mas se funcionar... você terá descoberto 
                o segredo para transformar não apenas suas manhãs, mas toda sua vida.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-6 my-8">
                <p className="text-lg">
                  <strong>💡 Dica Extra:</strong> Use nossos sistemas no Notion para organizar não só sua rotina matinal, 
                  mas todo seu dia de forma estruturada e produtiva.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-foreground-muted">Tags:</span>
                <span className="px-3 py-1 bg-surface rounded-full text-sm">rotina matinal</span>
                <span className="px-3 py-1 bg-surface rounded-full text-sm">produtividade</span>
                <span className="px-3 py-1 bg-surface rounded-full text-sm">hábitos</span>
                <span className="px-3 py-1 bg-surface rounded-full text-sm">organização pessoal</span>
              </div>
            </div>

            <BlogCTA location="rotina-matinal" />

            <RelatedArticles 
              currentSlug="rotina-matinal-poderosa-15-minutos"
              category="Produtividade"
              allArticles={allArticles}
            />
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}