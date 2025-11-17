import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import sistemasVisuaisImage from "@/assets/blog/parar-procrastinar-sistemas-visuais.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PararProcrastinarSistemasVisuais = () => {
  const publishDate = "2025-01-18";
  const modifiedDate = "2025-01-18";
  const articleUrl = "https://focusinteligente.com/blog/parar-procrastinar-sistemas-visuais";
  const imageUrl = "https://focusinteligente.com" + sistemasVisuaisImage;

  return (
    <>
      <Helmet>
        <title>Como Parar de Procrastinar Usando Sistemas Visuais (Sem Depender de Motivação) | Focus</title>
        <meta name="description" content="Aprenda a vencer a procrastinação usando sistemas visuais ao invés de depender de motivação. Método prático e comprovado." />
        <meta name="keywords" content="parar procrastinar, procrastinação, sistemas visuais, kanban, produtividade visual, vencer procrastinação" />
        <link rel="canonical" href={articleUrl} />
        
        <meta property="og:title" content="Como Parar de Procrastinar Usando Sistemas Visuais" />
        <meta property="og:description" content="Aprenda a vencer a procrastinação usando sistemas visuais ao invés de depender de motivação. Método prático e comprovado." />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Como Parar de Procrastinar Usando Sistemas Visuais",
            "image": imageUrl,
            "datePublished": publishDate,
            "dateModified": modifiedDate,
            "author": {
              "@type": "Organization",
              "name": "Focus Inteligente"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <nav className="text-sm mb-8">
              <ol className="flex items-center space-x-2 text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Início</Link></li>
                <li>/</li>
                <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li>/</li>
                <li className="text-foreground">Como Parar de Procrastinar Usando Sistemas Visuais</li>
              </ol>
            </nav>

            <img 
              src={sistemasVisuaisImage} 
              alt="Sistema visual kanban com colunas coloridas organizadas" 
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Como Parar de Procrastinar Usando Sistemas Visuais
              </h1>
              <p className="text-xl text-muted-foreground">
                O método definitivo para vencer a procrastinação sem depender de motivação ou força de vontade
              </p>
              <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                <time dateTime={publishDate}>18 de janeiro de 2025</time>
                <span>•</span>
                <span>9 min de leitura</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Você já passou horas planejando o que fazer, criando listas perfeitas... e não fez nada? <strong>O problema não é você. É o sistema.</strong>
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Motivação é como o clima: às vezes está lá, às vezes não. Depender dela para ser produtivo é uma receita para o fracasso. Você precisa de um sistema que funcione mesmo quando você não está "com vontade".
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Por Que Sistemas Visuais Vencem a Procrastinação
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Nosso cérebro processa informações visuais 60.000 vezes mais rápido que texto. Quando você vê um sistema visual, três coisas acontecem instantaneamente:
              </p>

              <ul className="space-y-3 mb-6">
                <li><strong>1. Clareza instantânea:</strong> Você sabe exatamente onde está e o que fazer</li>
                <li><strong>2. Redução de sobrecarga:</strong> Informação organizada não gera ansiedade</li>
                <li><strong>3. Momentum natural:</strong> Mover tarefas entre colunas vicia (no bom sentido)</li>
              </ul>

              <div className="bg-primary/5 border-l-4 border-primary p-6 my-8">
                <p className="text-lg font-medium">
                  💡 <strong>Insight chave:</strong> Procrastinação não é preguiça. É uma resposta emocional à incerteza ou à sobrecarga. Sistemas visuais eliminam ambos.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                O Método Kanban Simplificado
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                O Kanban é o sistema visual mais eficaz contra procrastinação. Não porque é complicado — justamente o contrário: <strong>é simples demais para falhar.</strong>
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                As 3 Colunas Essenciais
              </h3>

              <div className="bg-muted p-6 rounded-lg my-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">📋 A FAZER</h4>
                    <p className="text-muted-foreground">Tarefas claras e prontas para começar (máximo 5-7)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">⚡ FAZENDO</h4>
                    <p className="text-muted-foreground">O que está em progresso agora (máximo 2-3)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">✅ FEITO</h4>
                    <p className="text-muted-foreground">Tarefas concluídas (celebre cada uma!)</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                As Regras de Ouro do Kanban Anti-Procrastinação
              </h3>

              <ol className="space-y-4 mb-6">
                <li><strong>Regra 1:</strong> Nunca mais de 3 tarefas em "Fazendo"</li>
                <li><strong>Regra 2:</strong> Cada tarefa precisa ter próxima ação clara</li>
                <li><strong>Regra 3:</strong> Se uma tarefa está parada há 3 dias, mova de volta para "A Fazer"</li>
                <li><strong>Regra 4:</strong> Celebre visualmente cada conclusão (sim, isso importa)</li>
                <li><strong>Regra 5:</strong> Revise seu quadro 2x por dia: manhã e tarde</li>
              </ol>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Sistema Visual de Cores Anti-Procrastinação
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Cores ativam diferentes partes do cérebro. Use isso a seu favor:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="inline-block w-6 h-6 bg-red-500 rounded mt-1"></span>
                  <div>
                    <strong>Vermelho - Urgente e Importante:</strong> Precisa ser feito hoje, impacto alto
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-block w-6 h-6 bg-orange-500 rounded mt-1"></span>
                  <div>
                    <strong>Laranja - Importante mas não urgente:</strong> Projetos estratégicos
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-block w-6 h-6 bg-yellow-500 rounded mt-1"></span>
                  <div>
                    <strong>Amarelo - Rápidas e Fáceis:</strong> Menos de 15 minutos
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-block w-6 h-6 bg-blue-500 rounded mt-1"></span>
                  <div>
                    <strong>Azul - Rotineiras:</strong> Tarefas recorrentes e previsíveis
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-block w-6 h-6 bg-green-500 rounded mt-1"></span>
                  <div>
                    <strong>Verde - Aprendizado:</strong> Desenvolvimento pessoal e profissional
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                A Técnica do "Próximo Passo Visível"
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                O maior assassino de produtividade é não saber exatamente o que fazer. Cada tarefa no seu sistema visual precisa ter um <strong>próximo passo específico e acionável</strong>.
              </p>

              <div className="bg-muted p-6 rounded-lg my-6">
                <h4 className="font-semibold mb-4">Exemplos de Próximos Passos Claros:</h4>
                <div className="space-y-3">
                  <div>
                    <p className="line-through text-muted-foreground mb-1">❌ "Trabalhar no relatório"</p>
                    <p>✅ "Escrever introdução do relatório Q1 (30 min)"</p>
                  </div>
                  <div>
                    <p className="line-through text-muted-foreground mb-1">❌ "Melhorar site"</p>
                    <p>✅ "Revisar e selecionar 3 imagens para página principal"</p>
                  </div>
                  <div>
                    <p className="line-through text-muted-foreground mb-1">❌ "Entrar em contato com cliente"</p>
                    <p>✅ "Enviar email para João com 3 opções de data para reunião"</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                O Método dos Gatilhos Visuais
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Crie gatilhos visuais que eliminam a necessidade de decidir:
              </p>

              <ul className="space-y-3 mb-6">
                <li><strong>🌅 Manhã:</strong> Sempre comece pela tarefa vermelha (urgente e importante)</li>
                <li><strong>☕ Após café:</strong> Faça 2-3 tarefas amarelas (rápidas)</li>
                <li><strong>🎯 Tarde:</strong> Dedique 2h para uma tarefa laranja (estratégica)</li>
                <li><strong>🌙 Final do dia:</strong> Revise quadro e prepare amanhã</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Implementando No Notion
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                O Notion é perfeito para sistemas visuais porque oferece:
              </p>

              <ol className="space-y-4 mb-6">
                <li><strong>Visualização Kanban nativa:</strong> Arraste e solte com facilidade</li>
                <li><strong>Propriedades personalizadas:</strong> Cores, prioridades, tempo estimado</li>
                <li><strong>Filtros inteligentes:</strong> Veja apenas o que importa agora</li>
                <li><strong>Templates reutilizáveis:</strong> Configure uma vez, use sempre</li>
              </ol>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold mb-4">Template Básico de Kanban Anti-Procrastinação</h3>
                <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
{`📊 MEU KANBAN

Propriedades de cada tarefa:
• Nome da tarefa
• Próxima ação específica
• Cor/Prioridade
• Tempo estimado
• Data limite
• Projeto relacionado

Colunas:
📋 INBOX (ideias e tarefas novas)
🎯 PRONTO PARA COMEÇAR (próxima ação clara)
⚡ EM PROGRESSO (máximo 3)
⏸️ AGUARDANDO (bloqueadas)
✅ CONCLUÍDO (últimos 7 dias)`}
                </pre>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Os 5 Erros Fatais em Sistemas Visuais
              </h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                1. Quadro Bagunçado
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Se está tudo lá, nada se destaca. Mantenha máximo 15 tarefas visíveis por vez.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                2. Tarefas Sem Próxima Ação
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                "Organizar casa" não é uma tarefa. "Separar roupas para doar" é.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                3. Não Limpar Coluna "Feito"
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Archive tarefas antigas semanalmente. Quadro limpo = mente limpa.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                4. Múltiplos Sistemas
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Um sistema visual funciona. Cinco sistemas matam a produtividade.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                5. Não Revisar Diariamente
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Sistema visual ignorado vira decoração. Revise 2x por dia: manhã e tarde.
              </p>

              <div className="bg-muted p-8 rounded-lg my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Sistema Visual Completo No Notion
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Templates prontos de Kanban integrados com gestão de projetos e revisões.
                </p>
                <Link 
                  to="/sistemas-notion" 
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Ver Sistemas Visuais
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-border">
              <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/blog/checklist-diario-produtividade" className="group">
                  <div className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      Checklist diário: método simples que aumenta produtividade
                    </h4>
                  </div>
                </Link>
                <Link to="/blog/guia-foco-evitar-distracoes" className="group">
                  <div className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      Guia definitivo do foco: como evitar distrações
                    </h4>
                  </div>
                </Link>
                <Link to="/blog/metodos-produtividade-2025" className="group">
                  <div className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      Métodos de produtividade que realmente funcionam em 2025
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PararProcrastinarSistemasVisuais;