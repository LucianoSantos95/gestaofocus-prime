import { Link } from "react-router-dom";
import { Calendar, Clock, CheckCircle, Target, AlertTriangle, ArrowRight } from "lucide-react";
import BlogCTA from "@/components/BlogCTA";
import RelatedArticles from "@/components/RelatedArticles";
import SEOHead from "@/components/SEOHead";
import articleImage from "@/assets/blog/planejamento-semanal-passo-passo.jpg";

// Articles data for RelatedArticles component
const allArticles = [
  {
    title: "Como Organizar Sua Rotina Semanal",
    slug: "organizar-rotina-semanal",
    excerpt: "Descubra como criar uma rotina semanal que funciona para você.",
    readTime: "9 min",
    category: "Organização"
  },
  {
    title: "Como Organizar Tarefas no Dia a Dia",
    slug: "organizar-tarefas-dia-dia",
    excerpt: "Aprenda a organizar suas tarefas sem se sentir sobrecarregado.",
    readTime: "10 min",
    category: "Produtividade"
  },
  {
    title: "Gestão do Tempo para Quem Vive Ocupado",
    slug: "gestao-tempo-ocupado-estrategias-funcionam",
    excerpt: "Técnicas práticas para gerenciar melhor seu tempo no dia a dia.",
    readTime: "9 min",
    category: "Produtividade"
  },
  {
    title: "Planejamento Semanal Passo a Passo",
    slug: "planejamento-semanal-passo-passo",
    excerpt: "Aprenda a planejar sua semana de forma prática.",
    readTime: "10 min",
    category: "Organização"
  }
];

const PlanejamentoSemanalPassoPasso = () => {
  const publishDate = "2026-01-06";
  
  return (
    <>
      <SEOHead
        title="Planejamento Semanal para Agências: Passo a Passo"
        description="Planeje a semana da sua agência ou consultoria de forma prática. Guia passo a passo para alinhar equipe, priorizar entregas e evitar atrasos."
        canonical="https://focusinteligente.com.br/blog/planejamento-semanal-passo-passo"
        type="article"
        image={`https://focusinteligente.com.br${articleImage}`}
        keywords="planejamento semanal, organização pessoal, gestão do tempo, produtividade, rotina semanal, planejar semana"
        publishedTime={publishDate}
        modifiedTime={publishDate}
      />
      
      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <article className="container mx-auto px-4 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground">Planejamento Semanal</span>
            </nav>

            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Organização
                </span>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={publishDate}>6 de Janeiro, 2026</time>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" />
                  <span>10 min de leitura</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Planejamento Semanal Passo a Passo para Quem Vive Sem Tempo
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Você sente que os dias passam voando e as tarefas nunca acabam? Aprenda a planejar sua semana 
                de forma prática e recupere o controle da sua rotina, mesmo com uma agenda apertada.
              </p>
            </header>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img 
                src={articleImage} 
                alt="Planejamento semanal com calendário e post-its coloridos" 
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              
              {/* Introdução */}
              <section className="mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  "Não tenho tempo para nada." Se essa frase já saiu da sua boca, você não está sozinho. 
                  A sensação de correr contra o relógio é uma das queixas mais comuns entre profissionais, 
                  empreendedores e qualquer pessoa que tenta equilibrar trabalho, vida pessoal e autocuidado.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  O problema é que, sem um planejamento adequado, os dias se tornam uma sequência de 
                  emergências e tarefas urgentes. A boa notícia? Com apenas 15 a 20 minutos por semana, 
                  você pode transformar completamente sua produtividade e bem-estar.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Neste guia, vou te mostrar um passo a passo simples e prático para planejar sua semana, 
                  mesmo que você sinta que não tem tempo nem para respirar.
                </p>
              </section>

              {/* Por que planejar */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-primary" />
                  Por Que o Planejamento Semanal É Essencial?
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Planejar a semana não é sobre controlar cada minuto do seu dia. É sobre ter clareza 
                  do que realmente importa e garantir que essas prioridades ganhem espaço na sua agenda.
                </p>

                <div className="bg-muted/30 border border-border rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Benefícios comprovados do planejamento semanal:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Reduz a ansiedade:</strong> Quando você sabe o que precisa fazer, a mente relaxa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Aumenta o foco:</strong> Você trabalha com intenção, não por impulso</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Evita esquecimentos:</strong> Compromissos importantes não passam despercebidos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Libera espaço mental:</strong> Menos tempo pensando no que fazer, mais tempo fazendo</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Estudos mostram que pessoas que planejam suas semanas são até 25% mais produtivas e 
                  reportam níveis significativamente menores de estresse. O planejamento não rouba seu 
                  tempo — ele multiplica.
                </p>
              </section>

              {/* Passo a passo */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-primary" />
                  Passo a Passo do Planejamento Semanal
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Siga este roteiro simples toda semana. Com a prática, você fará em menos de 15 minutos.
                </p>

                {/* Passo 1 */}
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    1. Escolha o Momento Certo
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Reserve um horário fixo para planejar sua semana. As melhores opções são:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span><strong>Domingo à noite:</strong> Ideal para começar a semana com clareza</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span><strong>Sexta-feira à tarde:</strong> Fecha a semana e prepara a próxima</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span><strong>Segunda de manhã:</strong> Para quem prefere começar fresco</span>
                    </li>
                  </ul>
                </div>

                {/* Passo 2 */}
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    2. Revise Seus Compromissos Fixos
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Antes de adicionar tarefas, visualize o que já está marcado:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Reuniões e compromissos agendados</li>
                    <li>• Prazos e entregas importantes</li>
                    <li>• Eventos pessoais ou familiares</li>
                    <li>• Horários de trabalho fixos</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Isso te dá uma visão real do tempo disponível na semana.
                  </p>
                </div>

                {/* Passo 3 */}
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    3. Defina Suas 3 Prioridades da Semana
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Pergunte-se: "Se eu só pudesse fazer 3 coisas esta semana, quais seriam?"
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Essas são suas prioridades absolutas. Todo o resto é secundário. Anote-as em 
                    destaque no seu planejador ou sistema de organização.
                  </p>
                  <div className="bg-background/50 rounded-lg p-4 text-sm text-muted-foreground">
                    <strong className="text-foreground">Dica:</strong> Prioridades devem ser específicas. 
                    Em vez de "trabalhar no projeto", escreva "entregar relatório do projeto X até quinta".
                  </div>
                </div>

                {/* Passo 4 */}
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    4. Distribua as Tarefas nos Dias
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Agora, distribua suas prioridades e outras tarefas importantes ao longo da semana:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Tarefas complexas:</strong> Agende para seus horários de maior energia</li>
                    <li>• <strong>Tarefas rápidas:</strong> Agrupe em blocos de 30 minutos</li>
                    <li>• <strong>Reuniões:</strong> Tente concentrar em dias específicos</li>
                    <li>• <strong>Espaços vazios:</strong> Deixe margem para imprevistos (pelo menos 20%)</li>
                  </ul>
                </div>

                {/* Passo 5 */}
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    5. Inclua Tempo para Você
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Um erro comum é preencher a semana apenas com obrigações. Reserve blocos para:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Exercícios físicos ou caminhadas</li>
                    <li>• Tempo com família e amigos</li>
                    <li>• Hobbies e lazer</li>
                    <li>• Descanso e recuperação</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Esses momentos não são luxo — são necessários para manter sua produtividade sustentável.
                  </p>
                </div>

                {/* Passo 6 */}
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    6. Revise Diariamente (2 minutos)
                  </h3>
                  <p className="text-muted-foreground">
                    Toda manhã ou na noite anterior, dê uma olhada rápida no dia seguinte. 
                    Ajuste o que for necessário e mentalize suas prioridades. Essa micro-revisão 
                    mantém você no caminho certo sem precisar replanejar tudo.
                  </p>
                </div>
              </section>

              {/* Erros comuns */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-yellow-500" />
                  Erros Comuns ao Planejar a Semana (e Como Evitá-los)
                </h2>

                <div className="space-y-6">
                  <div className="border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      ❌ Erro 1: Superlotar a agenda
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Planejar 12 horas de trabalho por dia é receita para frustração e burnout.
                    </p>
                    <p className="text-primary font-medium">
                      ✅ Solução: Planeje no máximo 60-70% do seu tempo disponível. O resto é para imprevistos.
                    </p>
                  </div>

                  <div className="border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      ❌ Erro 2: Não definir prioridades claras
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Quando tudo é importante, nada é importante. Você acaba fazendo o que aparece primeiro.
                    </p>
                    <p className="text-primary font-medium">
                      ✅ Solução: Sempre identifique as 3 prioridades máximas da semana e proteja esse tempo.
                    </p>
                  </div>

                  <div className="border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      ❌ Erro 3: Planejar sem considerar sua energia
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Agendar tarefas complexas quando você está cansado é contraproducente.
                    </p>
                    <p className="text-primary font-medium">
                      ✅ Solução: Conheça seus horários de pico de energia e reserve-os para o que exige mais foco.
                    </p>
                  </div>

                  <div className="border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      ❌ Erro 4: Abandonar o plano na primeira mudança
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Imprevistos acontecem. Desistir do planejamento por isso é jogar fora o progresso.
                    </p>
                    <p className="text-primary font-medium">
                      ✅ Solução: Adapte o plano quando necessário, mas não abandone. Flexibilidade faz parte.
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusão */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Conclusão: Comece Hoje Mesmo
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  O planejamento semanal não é sobre ter uma agenda perfeita. É sobre ter clareza, 
                  reduzir o estresse e garantir que suas prioridades realmente aconteçam.
                </p>

                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Seu plano de ação para esta semana:
                  </h3>
                  <ol className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                      <span>Escolha um horário fixo para planejar (ex: domingo às 19h)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                      <span>Defina suas 3 prioridades para os próximos 7 dias</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                      <span>Distribua essas prioridades na sua agenda</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                      <span>Reserve pelo menos um bloco para descanso ou lazer</span>
                    </li>
                  </ol>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lembre-se: o objetivo não é fazer mais coisas. É fazer as coisas certas com 
                  menos esforço e mais satisfação. Comece simples, ajuste conforme necessário 
                  e observe sua semana se transformar.
                </p>
              </section>

              {/* CTA */}
              <BlogCTA location="article-end" />

              {/* Related Articles */}
              <RelatedArticles 
                currentSlug="planejamento-semanal-passo-passo"
                category="Organização"
                allArticles={allArticles}
              />
            </div>
          </article>
        </main>
      </div>
    </>
  );
};

export default PlanejamentoSemanalPassoPasso;
