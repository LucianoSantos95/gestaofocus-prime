import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User, Briefcase, Target, CheckCircle2, Scale } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import BlogCTA from "@/components/BlogCTA";
import RelatedArticles from "@/components/RelatedArticles";
import articleImage from "@/assets/blog/organizacao-pessoal-profissional.jpg";

const OrganizacaoPessoalProfissional = () => {
  const publishDate = "2026-01-06";
  const modifiedDate = "2026-01-06";

  const relatedArticles = [
    {
      title: "Como Criar um Método Pessoal de Produtividade Que Funcione Para Você",
      slug: "metodo-pessoal-produtividade",
      excerpt: "Aprenda a criar um método de produtividade personalizado que funcione para você.",
      readTime: "12 min",
      category: "Organização"
    },
    {
      title: "Planejamento Semanal Passo a Passo para Quem Vive Sem Tempo",
      slug: "planejamento-semanal-passo-passo",
      excerpt: "Aprenda a planejar sua semana de forma prática e eficiente.",
      readTime: "10 min",
      category: "Organização"
    },
    {
      title: "Como Organizar Tarefas no Dia a Dia Sem Se Sentir Sobrecarregado",
      slug: "organizar-tarefas-dia-dia",
      excerpt: "Aprenda a organizar tarefas de forma simples e reduzir a sobrecarga mental.",
      readTime: "10 min",
      category: "Organização"
    }
  ];

  return (
    <article className="min-h-screen bg-background">
      <SEOHead
        title="Organização Pessoal e Profissional: Como Equilibrar Rotina e Trabalho | Focus"
        description="Aprenda como organizar vida pessoal e profissional sem conflito. Estratégias práticas para integrar rotina e trabalho de forma equilibrada."
        canonical="/blog/organizacao-pessoal-profissional"
        type="article"
        publishedTime={publishDate}
        modifiedTime={modifiedDate}
        image={articleImage}
        keywords="organização pessoal, organização profissional, equilíbrio vida trabalho, produtividade, gestão do tempo, rotina equilibrada"
      />

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Blog
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Briefcase className="w-4 h-4" />
              Organização
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Organização Pessoal e Profissional: Como Equilibrar Rotina e Trabalho
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Descubra como integrar vida pessoal e profissional sem conflitos, criando uma rotina equilibrada que funciona para você.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={publishDate}>6 de Janeiro de 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>11 min de leitura</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="container mx-auto px-4 max-w-4xl -mt-8">
        <figure className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={articleImage} 
            alt="Equilíbrio entre vida pessoal e profissional"
            className="w-full h-64 md:h-96 object-cover"
            loading="eager"
          />
        </figure>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 max-w-4xl py-12 lg:py-16">
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Você já sentiu que está sempre correndo, mas nunca consegue dar conta de tudo? Trabalho invade a vida pessoal, compromissos pessoais atrapalham a produtividade profissional, e no final do dia, a sensação é de que você não fez nada direito.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Esse desequilíbrio não é apenas estressante — ele compromete sua saúde, seus relacionamentos e até mesmo a qualidade do seu trabalho. A boa notícia é que existe uma forma de organizar as duas esferas da sua vida de maneira integrada e sustentável.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Neste artigo, você vai aprender a diferença entre organização pessoal e profissional, estratégias práticas para integrá-las e exemplos reais de como aplicar isso no seu dia a dia.
            </p>
          </section>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-6">
              <Scale className="w-8 h-8 text-primary" />
              Diferença entre Organização Pessoal e Profissional
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Embora pareçam semelhantes, organização pessoal e profissional têm propósitos e dinâmicas diferentes. Entender essa diferença é o primeiro passo para criar um sistema que funcione.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-accent/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Organização Pessoal</h3>
                </div>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Foco em bem-estar e qualidade de vida</li>
                  <li>• Flexibilidade maior nos horários</li>
                  <li>• Atividades de lazer, saúde e família</li>
                  <li>• Resultados medidos em satisfação pessoal</li>
                  <li>• Prioridades podem mudar rapidamente</li>
                </ul>
              </div>
              <div className="bg-primary/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Organização Profissional</h3>
                </div>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Foco em produtividade e resultados</li>
                  <li>• Horários mais estruturados</li>
                  <li>• Projetos, reuniões e entregas</li>
                  <li>• Resultados medidos em metas e KPIs</li>
                  <li>• Prioridades definidas por demandas externas</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-xl my-8">
              <p className="text-foreground/90 font-medium">
                ⚠️ O erro mais comum é tratar vida pessoal e profissional com as mesmas regras. Isso gera frustração, porque cada uma tem suas próprias necessidades e ritmos.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-6">
              <Target className="w-8 h-8 text-primary" />
              Por Que o Desequilíbrio Acontece?
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Antes de resolver o problema, precisamos entender suas causas. O desequilíbrio entre vida pessoal e profissional geralmente acontece por alguns motivos comuns:
            </p>

            <div className="space-y-4 my-8">
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-bold text-foreground mb-2">1. Falta de limites claros</h4>
                <p className="text-foreground/70">
                  Quando não definimos horários de início e fim para o trabalho, ele naturalmente invade outros momentos.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-bold text-foreground mb-2">2. Urgências constantes</h4>
                <p className="text-foreground/70">
                  Viver apagando incêndios faz com que o importante seja sempre adiado — tanto no trabalho quanto na vida pessoal.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-bold text-foreground mb-2">3. Culpa por descansar</h4>
                <p className="text-foreground/70">
                  Muitas pessoas se sentem culpadas quando não estão trabalhando, o que impede o descanso verdadeiro.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-bold text-foreground mb-2">4. Falta de sistema unificado</h4>
                <p className="text-foreground/70">
                  Quando tarefas pessoais e profissionais estão em lugares diferentes, é fácil esquecer de uma ou de outra.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              Estratégias para Integrar Vida Pessoal e Profissional
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              A chave não é separar completamente as duas esferas, mas criar um sistema que permita gerenciá-las de forma integrada. Veja as estratégias mais eficazes:
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
              1. Crie um sistema único de captura
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Use uma única ferramenta ou método para registrar todas as suas tarefas, compromissos e ideias — pessoais e profissionais. Isso evita que algo importante se perca entre anotações espalhadas.
            </p>
            <div className="bg-primary/5 rounded-xl p-6 my-6">
              <p className="text-foreground/90">
                <strong>Na prática:</strong> Ao invés de ter uma agenda de trabalho e outra pessoal, use um sistema integrado onde você visualiza tudo. Isso permite planejar seu dia considerando todas as suas responsabilidades.
              </p>
            </div>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
              2. Defina blocos de tempo para cada área
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Time blocking é uma técnica poderosa para garantir que tanto trabalho quanto vida pessoal recebam atenção. Defina horários específicos para cada tipo de atividade.
            </p>
            <div className="bg-accent/30 rounded-xl p-6 my-6">
              <h4 className="font-bold text-foreground mb-3">Exemplo de blocos diários:</h4>
              <ul className="space-y-2 text-foreground/80">
                <li>• <strong>6h-7h:</strong> Rotina matinal pessoal (exercício, meditação)</li>
                <li>• <strong>8h-12h:</strong> Trabalho focado (tarefas prioritárias)</li>
                <li>• <strong>12h-13h:</strong> Almoço + desconexão</li>
                <li>• <strong>14h-17h:</strong> Reuniões e tarefas administrativas</li>
                <li>• <strong>18h-20h:</strong> Tempo para família e lazer</li>
                <li>• <strong>21h-22h:</strong> Preparação para o dia seguinte</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
              3. Estabeleça rituais de transição
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Quando você trabalha de casa ou tem horários flexíveis, é essencial criar rituais que sinalizem a mudança de uma esfera para outra.
            </p>
            <div className="bg-muted/30 rounded-xl p-6 my-6">
              <h4 className="font-bold text-foreground mb-3">Exemplos de rituais de transição:</h4>
              <ul className="space-y-2 text-foreground/80">
                <li>• Trocar de roupa ao começar e terminar o trabalho</li>
                <li>• Fazer uma caminhada de 10 minutos entre "expedientes"</li>
                <li>• Fechar todas as abas do navegador no fim do dia</li>
                <li>• Escrever 3 coisas que você realizou antes de encerrar</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
              4. Use a regra das 3 prioridades
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Todo dia, escolha no máximo 3 prioridades: duas profissionais e uma pessoal (ou vice-versa, dependendo do momento). Isso força você a ser intencional sobre o que realmente importa.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
              5. Proteja seu tempo pessoal como compromisso profissional
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Atividades pessoais importantes devem ir para a agenda com o mesmo peso de uma reunião de trabalho. Academia às 7h? Bloqueia na agenda. Jantar em família às 19h? É compromisso não-negociável.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-6">
              <User className="w-8 h-8 text-primary" />
              Exemplos Práticos de Integração
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Veja como diferentes pessoas aplicam essas estratégias no dia a dia:
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-3">👩‍💼 Ana — Empreendedora</h4>
                <p className="text-foreground/80 mb-4">
                  Ana usa um sistema no Notion que unifica todas as suas tarefas. Na revisão semanal de domingo, ela distribui compromissos profissionais e pessoais nos mesmos blocos de tempo.
                </p>
                <p className="text-foreground/70 text-sm italic">
                  "Quando eu via trabalho e vida pessoal separados, sempre negligenciava um. Agora, vejo tudo junto e consigo equilibrar melhor."
                </p>
              </div>

              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-3">👨‍💻 Carlos — Desenvolvedor Remoto</h4>
                <p className="text-foreground/80 mb-4">
                  Carlos trabalha de casa e tinha dificuldade em "desligar". Criou um ritual de encerramento: às 18h, fecha o notebook, faz 15 minutos de alongamento e troca de ambiente.
                </p>
                <p className="text-foreground/70 text-sm italic">
                  "O ritual me ajuda a entrar no modo 'vida pessoal'. Antes, eu ficava pensando em código até na hora de dormir."
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-3">👩‍👧 Marina — Mãe e Gestora</h4>
                <p className="text-foreground/80 mb-4">
                  Marina bloqueia das 17h às 20h como "tempo sagrado" para os filhos. Durante esse período, notificações de trabalho ficam silenciadas. Isso exigiu conversas claras com a equipe.
                </p>
                <p className="text-foreground/70 text-sm italic">
                  "No começo, tinha medo de perder algo urgente. Mas descobri que 99% das coisas podem esperar 3 horas."
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-6">
              <Target className="w-8 h-8 text-primary" />
              Erros Comuns a Evitar
            </h2>
            
            <div className="space-y-4 my-8">
              <div className="flex items-start gap-4 bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Buscar equilíbrio perfeito todos os dias</h4>
                  <p className="text-foreground/70">
                    Haverá dias mais intensos de trabalho e dias mais focados em vida pessoal. O equilíbrio acontece ao longo de semanas e meses, não diariamente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Ignorar sinais de esgotamento</h4>
                  <p className="text-foreground/70">
                    Irritabilidade, insônia e falta de energia são alertas. Quando aparecem, é hora de reavaliar sua organização.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Não comunicar limites</h4>
                  <p className="text-foreground/70">
                    Colegas, clientes e família precisam saber seus limites. Sem comunicação clara, eles continuarão invadindo seu tempo.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Conclusão: Comece Hoje Mesmo
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Equilibrar organização pessoal e profissional não significa dividir seu dia em dois mundos separados. Significa criar um sistema integrado onde ambas as esferas da sua vida recebem a atenção que merecem.
            </p>

            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8 my-8">
              <h3 className="text-xl font-bold text-foreground mb-4">🎯 Próximos passos práticos:</h3>
              <ol className="space-y-3 text-foreground/80">
                <li><strong>1.</strong> Escolha uma ferramenta única para registrar todas as suas tarefas</li>
                <li><strong>2.</strong> Defina 3 blocos de tempo sagrado para esta semana (pessoais)</li>
                <li><strong>3.</strong> Crie um ritual de encerramento do trabalho</li>
                <li><strong>4.</strong> Comunique seus novos limites para quem precisa saber</li>
              </ol>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Lembre-se: organização não é sobre fazer mais, é sobre fazer o que importa nas horas certas. Quando você integra vida pessoal e profissional de forma inteligente, ambas melhoram.
            </p>
          </section>

          {/* CTA */}
          <BlogCTA 
            variant="download"
            location="organizacao-pessoal-profissional"
          />

          {/* Related Articles */}
          <RelatedArticles 
            currentSlug="organizacao-pessoal-profissional"
            category="Organização"
            allArticles={relatedArticles}
          />

        </div>
      </div>
    </article>
  );
};

export default OrganizacaoPessoalProfissional;
