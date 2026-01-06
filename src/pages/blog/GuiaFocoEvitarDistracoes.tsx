import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import focoImage from "@/assets/blog/guia-foco-evitar-distracoes.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";

const GuiaFocoEvitarDistracoes = () => {
  return (
    <>
      <SEOHead
        title="Guia Definitivo do Foco: Como Evitar Distrações no Trabalho e em Casa | Focus"
        description="Descubra técnicas práticas e comprovadas para manter o foco profundo e eliminar distrações. Guia completo com métodos aplicáveis hoje mesmo."
        canonical="/blog/guia-foco-evitar-distracoes"
        image={`https://focusinteligente.com.br${focoImage}`}
        type="article"
        publishedTime="2025-01-15"
        modifiedTime="2025-01-15"
        keywords="foco profundo, evitar distrações, concentração, produtividade, deep work, flow state"
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/blog">Blog</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Guia do Foco</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Guia Definitivo do Foco: Como Evitar Distrações no Trabalho e em Casa
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Foco não é talento nato - é habilidade treinável. Descubra como eliminar distrações e alcançar concentração profunda com técnicas comprovadas.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>📚 Tempo de leitura: 10 min</span>
                <span>📅 15 de janeiro, 2025</span>
              </div>
            </header>

            <img 
              src={focoImage} 
              alt="Pessoa em estado de foco profundo trabalhando sem distrações" 
              className="w-full h-[400px] object-cover rounded-lg mb-12 shadow-lg" 
            />

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Por Que Perdemos o Foco Tão Facilmente?</h2>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vivemos na era da distração. Notificações pipocam na tela a cada 3 minutos, colegas interrompem constantemente, e nossa própria mente parece programada para fugir do trabalho profundo.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mas aqui está a verdade libertadora: <strong>foco não é dom natural</strong>. É uma habilidade que pode ser desenvolvida e fortalecida, assim como um músculo. O problema não é você - é o ambiente e os hábitos que você criou ao seu redor.
                </p>

                <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg my-8">
                  <p className="text-foreground font-semibold mb-2">💡 Insight Chave</p>
                  <p className="text-muted-foreground">
                    Estudos mostram que leva em média <strong>23 minutos</strong> para recuperar o foco profundo após uma interrupção. Se você é interrompido a cada 15 minutos, nunca alcança o estado de flow.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  A boa notícia? Com as técnicas certas, você pode criar um sistema à prova de distrações e transformar sua capacidade de concentração.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Os 3 Tipos de Distração (E Como Combatê-los)</h2>

                <div className="space-y-6">
                  <div className="bg-background border border-border rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">1. Distrações Externas</h3>
                    <p className="text-muted-foreground mb-4">
                      Notificações, ruídos, pessoas, ambiente desorganizado. Tudo que vem de fora e quebra sua concentração.
                    </p>
                    <p className="text-foreground font-semibold mb-2">Como combater:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Use modo "Não Perturbe" no celular e computador durante blocos de foco</li>
                      <li>Crie um "ritual de entrada" no trabalho profundo (fone, música, timer)</li>
                      <li>Sinalize visualmente quando estiver em foco profundo (porta fechada, sinal visual)</li>
                      <li>Organize seu espaço de trabalho para minimizar estímulos visuais</li>
                    </ul>
                  </div>

                  <div className="bg-background border border-border rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">2. Distrações Internas</h3>
                    <p className="text-muted-foreground mb-4">
                      Pensamentos aleatórios, ansiedade, tarefas que você "precisa lembrar". A voz interna que te puxa para longe do trabalho.
                    </p>
                    <p className="text-foreground font-semibold mb-2">Como combater:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Tenha um "caderno de captura" ao lado para anotar pensamentos intrusivos</li>
                      <li>Pratique técnica Pomodoro: 25 min de foco puro, 5 min de pausa</li>
                      <li>Use meditação mindfulness por 5 minutos antes de sessões de foco</li>
                      <li>Estabeleça horários específicos para checar email e mensagens</li>
                    </ul>
                  </div>

                  <div className="bg-background border border-border rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">3. Distrações Digitais</h3>
                    <p className="text-muted-foreground mb-4">
                      Redes sociais, YouTube, notícias, navegação sem propósito. O buraco negro da internet.
                    </p>
                    <p className="text-foreground font-semibold mb-2">Como combater:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Use bloqueadores de sites durante horários de trabalho (Freedom, Cold Turkey)</li>
                      <li>Deixe celular em outro cômodo durante sessões de foco profundo</li>
                      <li>Desative todas as notificações não-essenciais permanentemente</li>
                      <li>Use navegador separado apenas para trabalho (sem logins sociais)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">O Framework de Foco Profundo (4 Pilares)</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Este framework transforma foco de algo que "acontece às vezes" em um sistema previsível e controlável.
                </p>

                <div className="space-y-6">
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Pilar 1: Ambiente Preparado</h3>
                    <p className="text-muted-foreground mb-3">
                      Seu ambiente determina 80% da sua capacidade de foco. Um ambiente preparado remove a necessidade de força de vontade.
                    </p>
                    <p className="text-foreground font-semibold mb-2">Checklist do ambiente ideal:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>✅ Espaço limpo e organizado (apenas essencial à vista)</li>
                      <li>✅ Iluminação adequada (luz natural quando possível)</li>
                      <li>✅ Temperatura confortável (18-22°C é ideal)</li>
                      <li>✅ Fones de ouvido com noise cancelling ou música ambiente</li>
                      <li>✅ Água, café ou chá já preparados (evita levantar)</li>
                      <li>✅ Celular longe da vista e do alcance</li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Pilar 2: Blocos de Tempo Sagrados</h3>
                    <p className="text-muted-foreground mb-3">
                      Foco não acontece "quando sobra tempo". Precisa ser agendado e protegido ferozmente.
                    </p>
                    <p className="text-foreground font-semibold mb-2">Como implementar:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Identifique seu horário de pico mental (manhã cedo, tarde, noite)</li>
                      <li>Bloqueie 2-4 horas diárias para trabalho profundo nesse horário</li>
                      <li>Trate esses blocos como reuniões inegociáveis</li>
                      <li>Use time blocking: cada hora do dia tem um propósito claro</li>
                      <li>Separe trabalho profundo de trabalho administrativo (email, reuniões)</li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Pilar 3: Ritual de Entrada</h3>
                    <p className="text-muted-foreground mb-3">
                      Um ritual consistente "avisa" seu cérebro que é hora de entrar em modo foco. Elimina a procrastinação inicial.
                    </p>
                    <p className="text-foreground font-semibold mb-2">Exemplo de ritual (5 minutos):</p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Limpe a mesa, deixe apenas o essencial</li>
                      <li>Coloque fones de ouvido, inicie playlist de foco</li>
                      <li>Abra apenas as ferramentas necessárias para a tarefa</li>
                      <li>Escreva a meta clara da sessão ("terminar relatório seção 3")</li>
                      <li>Inicie timer de 25 ou 50 minutos</li>
                      <li>Respire fundo 3 vezes e comece</li>
                    </ol>
                  </div>

                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Pilar 4: Sistema de Captura</h3>
                    <p className="text-muted-foreground mb-3">
                      Distrações internas destroem foco. Um sistema de captura esvazia sua mente e permite concentração total.
                    </p>
                    <p className="text-foreground font-semibold mb-2">Como funciona:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Tenha caderno ou nota digital sempre acessível</li>
                      <li>Quando surgir pensamento ("preciso responder João"), anote e volte ao foco</li>
                      <li>Revise captura no final do dia, não durante trabalho profundo</li>
                      <li>Use inbox única para todas as ideias/tarefas que surgirem</li>
                      <li>Processe inbox 1x por dia em horário fixo</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Técnicas Avançadas de Foco</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">🎯 Técnica: Timeboxing Extremo</h3>
                    <p className="text-muted-foreground mb-3">
                      Ao invés de trabalhar "até terminar" (que nunca acaba), defina tempo fixo e trabalhe com urgência saudável.
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Exemplo:</strong> "Tenho 45 minutos para escrever primeira versão deste relatório" vs "vou escrever o relatório hoje".
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">🎯 Técnica: Batching (Agrupamento)</h3>
                    <p className="text-muted-foreground mb-3">
                      Agrupe tarefas similares e faça todas de uma vez. Evita troca de contexto que mata produtividade.
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Exemplo:</strong> Reserve 30min para responder TODOS os emails do dia, ao invés de checar email 20x.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">🎯 Técnica: Modo Monje Digital</h3>
                    <p className="text-muted-foreground mb-3">
                      Para projetos críticos: desconecte completamente por 2-4 horas. Sem internet, sem celular, zero distrações.
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Resultado:</strong> O que levaria 8 horas com distrações, você faz em 3 horas de foco puro.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Erros Que Destroem Seu Foco (E Como Evitá-los)</h2>

                <div className="space-y-4">
                  <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-r-lg">
                    <p className="text-foreground font-semibold mb-2">❌ Erro #1: Multitarefa</p>
                    <p className="text-muted-foreground">
                      <strong>Realidade:</strong> Multitarefa é ilusão. Você só troca entre tarefas rapidamente, perdendo energia mental a cada troca. 
                      <strong className="text-foreground"> Solução:</strong> Uma tarefa por vez, sempre.
                    </p>
                  </div>

                  <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-r-lg">
                    <p className="text-foreground font-semibold mb-2">❌ Erro #2: Começar o dia checando email/mensagens</p>
                    <p className="text-muted-foreground">
                      <strong>Realidade:</strong> Você entrega controle do seu dia para agenda dos outros. 
                      <strong className="text-foreground"> Solução:</strong> Primeira hora do dia é para SEU trabalho mais importante.
                    </p>
                  </div>

                  <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-r-lg">
                    <p className="text-foreground font-semibold mb-2">❌ Erro #3: Trabalhar sem objetivo claro</p>
                    <p className="text-muted-foreground">
                      <strong>Realidade:</strong> Sem meta específica, sua mente vagueia e procrastina. 
                      <strong className="text-foreground"> Solução:</strong> Sempre defina resultado esperado ANTES de começar.
                    </p>
                  </div>

                  <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-r-lg">
                    <p className="text-foreground font-semibold mb-2">❌ Erro #4: Sessões muito longas sem pausas</p>
                    <p className="text-muted-foreground">
                      <strong>Realidade:</strong> Cérebro precisa de recuperação. Sem pausas, qualidade despenca. 
                      <strong className="text-foreground"> Solução:</strong> Máximo 90 minutos de foco, depois pausa obrigatória de 10-15min.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Plano de Ação: Seus Próximos Passos</h2>

                <div className="bg-primary/10 border border-primary rounded-lg p-6">
                  <p className="text-foreground font-semibold mb-4">📋 Implementação em 7 Dias:</p>
                  
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">Dia 1-2:</span>
                      <p className="text-muted-foreground">Prepare seu ambiente. Elimine distrações visuais, configure bloqueadores, organize espaço físico.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">Dia 3-4:</span>
                      <p className="text-muted-foreground">Crie seu ritual de entrada. Teste variações até encontrar o que funciona para você.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">Dia 5-6:</span>
                      <p className="text-muted-foreground">Implemente blocos de foco de 90 minutos. Comece com 1 por dia, expanda gradualmente.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">Dia 7:</span>
                      <p className="text-muted-foreground">Revise e ajuste. O que funcionou? O que precisa melhorar?</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-foreground font-semibold mb-2">🎯 Meta de 30 Dias:</p>
                    <p className="text-muted-foreground">
                      Alcançar estado de foco profundo consistentemente, eliminando 80% das distrações e dobrando sua produtividade em trabalho cognitivo.
                    </p>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg my-12 text-center border border-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Sistema Completo de Produtividade e Foco</h3>
                <p className="text-muted-foreground mb-6">
                  Implemente todos esses conceitos com nossos sistemas prontos no Notion. Time blocking, gestão de distrações, rastreamento de foco e mais.
                </p>
                <Link 
                  to="/sistemas-notion" 
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Ver Sistemas de Foco
                </Link>
              </div>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Perguntas Frequentes</h2>
                
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-5">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Quanto tempo leva para desenvolver foco profundo?</h3>
                    <p className="text-muted-foreground">
                      Primeiros resultados aparecem em 7-10 dias. Após 30 dias de prática consistente, foco profundo se torna natural e previsível.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-5">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Como manter foco trabalhando de casa com família?</h3>
                    <p className="text-muted-foreground">
                      Comunique claramente seus horários de foco profundo. Use sinalizações visuais (porta fechada, placa). Negocie horários onde todos respeitam seu espaço.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-5">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">E se meu trabalho exige estar disponível o tempo todo?</h3>
                    <p className="text-muted-foreground">
                      Negocie 2 horas diárias de foco ininterrupto. Explique que essas 2 horas renderão mais que 8 horas com interrupções. Se não for possível, considere horários alternativos (muito cedo/tarde).
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-5">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Café ajuda ou atrapalha o foco?</h3>
                    <p className="text-muted-foreground">
                      Café melhora foco quando usado estrategicamente: 1-2 xícaras antes de sessões de trabalho profundo. Evite após 14h para não prejudicar sono (que afeta foco no dia seguinte).
                    </p>
                  </div>
                </div>
              </section>

              <section className="mt-12 pt-8 border-t border-border">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Continue Lendo</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link to="/blog/checklist-diario-produtividade" className="group">
                    <div className="border border-border rounded-lg p-5 hover:border-primary transition-colors">
                      <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary">
                        Checklist Diário de Produtividade
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Rotina matinal e noturna que garante dias produtivos
                      </p>
                    </div>
                  </Link>
                  
                  <Link to="/blog/metodos-produtividade-2025" className="group">
                    <div className="border border-border rounded-lg p-5 hover:border-primary transition-colors">
                      <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary">
                        Métodos de Produtividade 2025
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Quais métodos funcionam e quais são apenas hype
                      </p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GuiaFocoEvitarDistracoes;
