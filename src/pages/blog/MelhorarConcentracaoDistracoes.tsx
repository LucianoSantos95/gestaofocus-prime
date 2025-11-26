import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Brain } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCTA from "@/components/BlogCTA";
import RelatedArticles from "@/components/RelatedArticles";
import concentracaoImage from "@/assets/blog/melhorar-concentracao-distracoes.jpg";

const allArticles = [
  {
    title: "Guia Definitivo do Foco: Como Evitar Distrações no Trabalho e em Casa",
    excerpt: "Técnicas práticas e comprovadas para eliminar distrações digitais e criar ambientes de foco profundo.",
    slug: "guia-foco-evitar-distracoes",
    readTime: "10 min",
    category: "Foco"
  },
  {
    title: "Como Parar de Procrastinar Usando Sistemas Visuais",
    excerpt: "O método baseado em gatilhos visuais que elimina procrastinação sem precisar de força de vontade.",
    slug: "parar-procrastinar-sistemas-visuais",
    readTime: "7 min",
    category: "Produtividade"
  },
  {
    title: "Checklist Diário: O Método Simples Que Aumenta Sua Produtividade",
    excerpt: "Descubra o sistema de checklist que profissionais de alta performance usam para maximizar resultados.",
    slug: "checklist-diario-produtividade",
    readTime: "8 min",
    category: "Produtividade"
  }
];

export default function MelhorarConcentracaoDistracoes() {
  return (
    <>
      <Helmet>
        <title>Como Melhorar Concentração em Mundo de Distrações | Guia Prático Focus</title>
        <meta 
          name="description" 
          content="Guia prático com 7 técnicas comprovadas para melhorar sua concentração, eliminar distrações e alcançar estado de foco profundo no trabalho e estudos." 
        />
        <meta name="keywords" content="melhorar concentração, foco profundo, eliminar distrações, produtividade, técnicas de concentração, deep work" />
        <link rel="canonical" href="https://focusinteligente.com.br/blog/melhorar-concentracao-mundo-distracoes" />
        
        <meta property="og:title" content="Como Melhorar Sua Concentração em Um Mundo Cheio de Distrações" />
        <meta property="og:description" content="Guia prático com técnicas comprovadas para melhorar sua concentração e eliminar distrações." />
        <meta property="og:image" content="https://focusinteligente.com.br/assets/blog/melhorar-concentracao-distracoes.jpg" />
        <meta property="og:url" content="https://focusinteligente.com.br/blog/melhorar-concentracao-mundo-distracoes" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Como Melhorar Sua Concentração em Um Mundo Cheio de Distrações",
            "image": "https://focusinteligente.com.br/assets/blog/melhorar-concentracao-distracoes.jpg",
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
            <span className="text-foreground">Melhorar Concentração</span>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para o Blog</span>
            </Link>

            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Foco</span>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Como Melhorar Sua Concentração em Um Mundo Cheio de Distrações (Guia Prático)
            </h1>

            <p className="text-xl text-foreground-muted mb-8">
              7 técnicas comprovadas para alcançar estado de foco profundo mesmo com notificações, redes sociais e interrupções constantes
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-foreground-muted mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime="2025-02-20">20 de Fevereiro, 2025</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min de leitura</span>
              </div>
            </div>

            <img 
              src={concentracaoImage} 
              alt="Pessoa concentrada trabalhando com foco profundo sem distrações" 
              className="w-full h-[400px] object-cover rounded-lg mb-12"
              width={1200}
              height={675}
              loading="eager"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                <strong>Você consegue trabalhar 2 horas seguidas sem checar o celular, e-mail ou redes sociais?</strong>
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Se a resposta é não, você não está sozinho. Estudos da Microsoft mostram que o trabalhador moderno é 
                <strong> interrompido a cada 3 minutos</strong> — e leva em média <strong>23 minutos para retomar o foco total</strong>.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                A boa notícia? Concentração não é talento, é habilidade. E como qualquer habilidade, pode ser treinada com 
                as técnicas certas. Neste guia, vou te mostrar o sistema completo para recuperar seu foco.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">As 7 Técnicas de Foco Profundo</h2>

              <div className="space-y-8 mb-12">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Brain className="w-6 h-6 text-primary" />
                    1. Blocos de Foco de 90 Minutos
                  </h3>
                  <p className="mb-4">Baseado nos ciclos ultradianos do cérebro:</p>
                  <ul className="space-y-2 text-foreground-muted">
                    <li>• Trabalhe em blocos de 90 minutos de foco total</li>
                    <li>• Pause 15-20 minutos entre blocos</li>
                    <li>• Máximo 2-3 blocos por dia (qualidade > quantidade)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">2. Ambiente Livre de Gatilhos</h3>
                  <p className="mb-4">Configure seu espaço físico e digital:</p>
                  <ul className="space-y-2 text-foreground-muted">
                    <li>✓ Celular em modo avião ou em outra sala</li>
                    <li>✓ Notificações 100% desligadas (sim, todas)</li>
                    <li>✓ Fones de ouvido (mesmo sem música)</li>
                    <li>✓ Navegador com apenas 1 aba aberta</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">3. Lista Única de Prioridades</h3>
                  <p className="mb-4">Antes de cada bloco de foco:</p>
                  <ul className="space-y-2 text-foreground-muted">
                    <li>• Escolha APENAS 1 tarefa para aquele bloco</li>
                    <li>• Escreva o resultado específico que quer alcançar</li>
                    <li>• Esconda todo o resto da sua lista de tarefas</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">4. Técnica do Timer Visível</h3>
                  <p className="mb-4">Use um timer físico ou digital onde você possa ver:</p>
                  <ul className="space-y-2 text-foreground-muted">
                    <li>• Timer de 90 minutos bem visível</li>
                    <li>• Cria pressão saudável ("tempo limitado")</li>
                    <li>• Gamifica o processo de manter foco</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">5. Bloco de Captura de Pensamentos</h3>
                  <p className="mb-4">Seu cérebro vai gerar distrações internas:</p>
                  <ul className="space-y-2 text-foreground-muted">
                    <li>• Tenha papel ao lado para anotar ideias que surgirem</li>
                    <li>• Não investigue a ideia agora — apenas anote</li>
                    <li>• Volte ao foco imediatamente</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">6. Ritual de Início e Fim</h3>
                  <p className="mb-4">Crie gatilhos comportamentais:</p>
                  <ul className="space-y-2 text-foreground-muted">
                    <li>• Início: Mesma música, mesmo copo d'água, mesma postura</li>
                    <li>• Fim: Registre o progresso, comemore pequenas vitórias</li>
                    <li>• Seu cérebro aprende: "agora é hora de focar"</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">7. Janelas de Distração Programadas</h3>
                  <p className="mb-4">Paradoxalmente, agende tempo para se distrair:</p>
                  <ul className="space-y-2 text-foreground-muted">
                    <li>• 15 min após cada bloco: cheque TUDO que quiser</li>
                    <li>• Elimina ansiedade de "estar perdendo algo"</li>
                    <li>• Você não está eliminando distrações — está controlando quando elas acontecem</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">O Sistema Completo na Prática</h2>

              <div className="bg-surface border border-border rounded-lg p-6 mb-8">
                <p className="font-bold mb-4">Exemplo: Seu Dia de Foco Profundo</p>
                <div className="space-y-3 text-foreground-muted">
                  <p><strong>8:30 - 10:00:</strong> Bloco 1 de Foco (90 min) - Projeto A</p>
                  <p><strong>10:00 - 10:20:</strong> Pausa + Janela de Distração</p>
                  <p><strong>10:20 - 11:50:</strong> Bloco 2 de Foco (90 min) - Projeto B</p>
                  <p><strong>11:50 - 13:00:</strong> Almoço + Descanso</p>
                  <p><strong>13:00 - 14:30:</strong> Bloco 3 de Foco (90 min) - Emails importantes</p>
                  <p><strong>14:30+:</strong> Tarefas leves, reuniões, checagem geral</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Use o Notion Para Gerenciar Seus Blocos</h2>

              <p className="text-lg leading-relaxed mb-6">
                No Notion, você pode criar um sistema visual para planejar e rastrear seus blocos de foco:
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-bold mb-4">Template: Dashboard de Foco Profundo</h3>
                <ul className="space-y-3 text-foreground-muted">
                  <li>✓ Calendário de blocos de 90 minutos</li>
                  <li>✓ Timer integrado</li>
                  <li>✓ Página de "Captura" para pensamentos intrusivos</li>
                  <li>✓ Métricas de quantos blocos você completou</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">O Que Esperar</h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-6">
                  <p className="font-bold mb-2">Semana 1: É difícil</p>
                  <p className="text-foreground-muted">Você vai querer checar o celular. Vai ficar ansioso. É normal — seu cérebro está se adaptando.</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <p className="font-bold mb-2">Semana 2-3: Fica mais fácil</p>
                  <p className="text-foreground-muted">Você consegue completar blocos inteiros. A qualidade do seu trabalho melhora visivelmente.</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <p className="font-bold mb-2">Mês 1+: Foco profundo vira padrão</p>
                  <p className="text-foreground-muted">Você produz em 3 horas o que antes levava o dia inteiro. Seu trabalho tem profundidade que os outros não conseguem alcançar.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão: Foco É Sua Nova Vantagem Competitiva</h2>

              <p className="text-lg leading-relaxed mb-6">
                Em um mundo onde todos estão distraídos, quem consegue focar tem superpoder. As técnicas deste artigo não 
                são teoria — são baseadas em neurociência e testadas por milhares de profissionais de alta performance.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                <strong>Comece com apenas 1 bloco de 90 minutos amanhã.</strong> Um bloco por dia, todos os dias, por uma 
                semana. Você vai se surpreender com o que consegue produzir quando finalmente consegue focar de verdade.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-6 my-8">
                <p className="text-lg">
                  <strong>💡 Próximo Passo:</strong> Organize todo seu sistema de produtividade no Notion — não apenas foco, 
                  mas tarefas, projetos e metas integradas.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-foreground-muted">Tags:</span>
                <span className="px-3 py-1 bg-surface rounded-full text-sm">concentração</span>
                <span className="px-3 py-1 bg-surface rounded-full text-sm">foco profundo</span>
                <span className="px-3 py-1 bg-surface rounded-full text-sm">produtividade</span>
                <span className="px-3 py-1 bg-surface rounded-full text-sm">deep work</span>
              </div>
            </div>

            <BlogCTA location="concentracao" />

            <RelatedArticles 
              currentSlug="melhorar-concentracao-mundo-distracoes"
              category="Foco"
              allArticles={allArticles}
            />
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}