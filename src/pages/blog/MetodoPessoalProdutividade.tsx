import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Lightbulb, Target, Compass, Puzzle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import BlogCTA from "@/components/BlogCTA";
import RelatedArticles from "@/components/RelatedArticles";
import heroImage from "@/assets/blog/metodo-pessoal-produtividade.jpg";

const MetodoPessoalProdutividade = () => {
  const navigate = useNavigate();

  const allArticles = [
    {
      title: "Métodos de Produtividade Que Realmente Funcionam em 2025",
      slug: "metodos-produtividade-2025",
      excerpt: "Análise completa dos métodos mais eficazes e quais evitar.",
      readTime: "11 min",
      category: "Produtividade"
    },
    {
      title: "Como Organizar Tarefas no Dia a Dia Sem Se Sentir Sobrecarregado",
      slug: "organizar-tarefas-dia-dia",
      excerpt: "Dicas práticas para organizar tarefas de forma simples.",
      readTime: "10 min",
      category: "Produtividade"
    },
    {
      title: "Planejamento Semanal Passo a Passo para Quem Vive Sem Tempo",
      slug: "planejamento-semanal-passo-passo",
      excerpt: "Aprenda a planejar sua semana de forma prática e eficiente.",
      readTime: "10 min",
      category: "Organização"
    },
    {
      title: "Checklist Diário: O Método Simples Que Aumenta Sua Produtividade",
      slug: "checklist-diario-produtividade",
      excerpt: "Descubra o sistema de checklist que profissionais usam.",
      readTime: "8 min",
      category: "Produtividade"
    }
  ];

  return (
    <>
      <SEOHead
        title="Como Criar um Método Pessoal de Produtividade | Focus Inteligente"
        description="Aprenda a criar um método de produtividade personalizado que funcione para você. Descubra seu perfil e monte um sistema que se adapta à sua rotina."
        canonical="/blog/metodo-pessoal-produtividade"
        type="article"
        image={heroImage}
        publishedTime="2026-01-06"
        modifiedTime="2026-01-06"
        keywords="método de produtividade, produtividade pessoal, sistema personalizado, perfil de produtividade, organização pessoal"
      />

      <article className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button
              variant="ghost"
              onClick={() => navigate("/blog")}
              className="mb-8 -ml-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  Produtividade
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>6 de Janeiro, 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>12 min de leitura</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Como Criar um Método Pessoal de Produtividade Que Funcione Para Você
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Esqueça o método perfeito. Aprenda a construir um sistema de produtividade único, 
                baseado no seu perfil, rotina e objetivos pessoais.
              </p>

              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Focus Gestão Inteligente</p>
                  <p className="text-sm text-muted-foreground">Especialistas em Produtividade</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="container mx-auto px-4 max-w-4xl -mt-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Como criar um método pessoal de produtividade"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 max-w-4xl py-12 md:py-16">
          <div className="prose prose-lg max-w-none">
            
            {/* Introdução */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 md:p-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mt-0 mb-2">
                    O Mito do Método Perfeito
                  </h2>
                  <p className="text-muted-foreground mb-0">
                    Você já tentou implementar Pomodoro, GTD, bullet journal, time blocking... e nenhum funcionou por muito tempo? 
                    Não é culpa sua. A verdade é que <strong>não existe método perfeito universal</strong> — existe o método certo para você.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              A cada ano, surgem novos "métodos revolucionários" de produtividade prometendo transformar sua vida. 
              Livros, cursos e aplicativos disputam sua atenção com frameworks cada vez mais elaborados.
            </p>

            <p className="text-lg leading-relaxed">
              Mas aqui está o problema: <strong>cada pessoa funciona de maneira diferente</strong>. O que funciona 
              para um CEO de startup pode ser um desastre para um professor. O sistema ideal de um introvertido 
              pode não servir para um vendedor extrovertido.
            </p>

            <p className="text-lg leading-relaxed">
              Neste artigo, você vai aprender a criar um método de produtividade verdadeiramente pessoal — 
              um sistema que respeita seu perfil, se adapta à sua rotina e evolui junto com você.
            </p>

            {/* Por que métodos genéricos falham */}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-16 mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              Por Que Métodos Genéricos Falham
            </h2>

            <p className="text-lg leading-relaxed">
              Antes de construir seu método pessoal, é importante entender por que tantas pessoas 
              abandonam sistemas de produtividade após poucas semanas:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              1. Ignoram seu ritmo biológico
            </h3>
            <p className="text-lg leading-relaxed">
              Muitos métodos prescrevem horários fixos para tarefas importantes. Mas se você é notívago 
              tentando forçar produtividade às 6h da manhã, está nadando contra a corrente.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              2. Não consideram seu tipo de trabalho
            </h3>
            <p className="text-lg leading-relaxed">
              Um desenvolvedor que precisa de blocos longos de concentração não pode usar o mesmo 
              sistema de um gerente que vive em reuniões. O contexto muda tudo.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              3. São rígidos demais
            </h3>
            <p className="text-lg leading-relaxed">
              Sistemas inflexíveis quebram ao primeiro imprevisto. A vida real é caótica, e seu 
              método precisa acomodar essa realidade sem desmoronar.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              4. Focam em ferramentas, não em princípios
            </h3>
            <p className="text-lg leading-relaxed">
              Trocar de aplicativo não resolve problemas de produtividade. A ferramenta é apenas 
              o veículo — o que importa é o sistema por trás dela.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-6 my-8">
              <p className="text-amber-800 dark:text-amber-200 mb-0 font-medium">
                💡 <strong>Insight importante:</strong> O melhor método de produtividade é aquele que você 
                consegue manter por meses, não o mais sofisticado ou popular.
              </p>
            </div>

            {/* Como identificar seu perfil */}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-16 mb-6 flex items-center gap-3">
              <Compass className="w-8 h-8 text-primary" />
              Como Identificar Seu Perfil de Produtividade
            </h2>

            <p className="text-lg leading-relaxed">
              Antes de montar seu método, você precisa se conhecer. Responda honestamente às seguintes perguntas:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Qual é seu horário de pico?
            </h3>
            <p className="text-lg leading-relaxed">
              Em qual período do dia você naturalmente se sente mais alerta e focado? Manhã, tarde ou noite? 
              Observe seu padrão ao longo de uma semana — não o que você gostaria que fosse, mas como realmente é.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Como você lida com decisões?
            </h3>
            <p className="text-lg leading-relaxed">
              Você prefere planejar tudo com antecedência ou decidir no momento? Pessoas que sofrem com 
              "paralisia de análise" precisam de sistemas mais prescritivos. Já os mais adaptáveis podem 
              preferir flexibilidade.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Qual é sua tolerância ao caos?
            </h3>
            <p className="text-lg leading-relaxed">
              Algumas pessoas precisam de ordem visual para funcionar. Outras prosperam em ambientes 
              mais dinâmicos. Seu sistema deve refletir essa preferência.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Como você processa informações?
            </h3>
            <p className="text-lg leading-relaxed">
              Você é mais visual, auditivo ou cinestésico? Isso impacta se você deve usar quadros Kanban, 
              listas simples, ou até gravações de voz para organizar suas tarefas.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Qual é seu nível de energia ao longo do dia?
            </h3>
            <p className="text-lg leading-relaxed">
              Mapeie sua energia em uma escala de 1 a 10 a cada 2 horas durante uma semana. 
              Isso revelará quando alocar tarefas complexas vs. rotineiras.
            </p>

            {/* Como montar seu método */}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-16 mb-6 flex items-center gap-3">
              <Puzzle className="w-8 h-8 text-primary" />
              Como Montar Seu Método Pessoal (5 Passos)
            </h2>

            <p className="text-lg leading-relaxed">
              Com seu perfil em mãos, siga estes passos para construir um sistema que funcione para você:
            </p>

            <div className="bg-muted/50 rounded-2xl p-6 md:p-8 my-8">
              <h3 className="text-xl font-semibold text-foreground mt-0 mb-4">
                Passo 1: Defina seus pilares fundamentais
              </h3>
              <p className="text-muted-foreground mb-4">
                Todo método de produtividade eficaz precisa responder a três perguntas:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-0">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <strong>O quê?</strong> — Como você captura e organiza tarefas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <strong>Quando?</strong> — Como você decide o que fazer a cada momento
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <strong>Como?</strong> — Como você executa e mantém o foco
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-2xl p-6 md:p-8 my-8">
              <h3 className="text-xl font-semibold text-foreground mt-0 mb-4">
                Passo 2: Escolha elementos de métodos existentes
              </h3>
              <p className="text-muted-foreground mb-4">
                Não reinvente a roda. Pegue componentes que ressoam com seu perfil:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-0">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <strong>Do GTD:</strong> O conceito de "inbox" e processamento
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <strong>Do Pomodoro:</strong> Blocos de tempo com pausas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <strong>Do Time Blocking:</strong> Agendar tarefas no calendário
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <strong>Do Kanban:</strong> Visualização de status das tarefas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <strong>Da Matriz Eisenhower:</strong> Priorização por urgência/importância
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-2xl p-6 md:p-8 my-8">
              <h3 className="text-xl font-semibold text-foreground mt-0 mb-4">
                Passo 3: Crie suas rotinas âncora
              </h3>
              <p className="text-muted-foreground mb-4">
                Estabeleça rituais fixos que sustentam todo o sistema:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-0">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <strong>Revisão diária:</strong> 5-10 minutos para planejar o dia
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <strong>Revisão semanal:</strong> 30 minutos para ajustar prioridades
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <strong>Processamento de inbox:</strong> Momento dedicado para limpar entradas
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-2xl p-6 md:p-8 my-8">
              <h3 className="text-xl font-semibold text-foreground mt-0 mb-4">
                Passo 4: Defina suas regras simples
              </h3>
              <p className="text-muted-foreground mb-4">
                Crie diretrizes que eliminem decisões desnecessárias:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-0">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  "Se demorar menos de 2 minutos, faço agora"
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  "Trabalho criativo só pela manhã"
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  "E-mails só em horários específicos"
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  "Máximo de 3 prioridades por dia"
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-2xl p-6 md:p-8 my-8">
              <h3 className="text-xl font-semibold text-foreground mt-0 mb-4">
                Passo 5: Escolha sua ferramenta (com cuidado)
              </h3>
              <p className="text-muted-foreground mb-0">
                Só depois de definir o sistema, escolha onde implementá-lo. Pode ser um caderno, 
                uma planilha, ou uma ferramenta como o Notion. O importante é que a ferramenta 
                sirva ao método — não o contrário.
              </p>
            </div>

            {/* Exemplo prático */}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-16 mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-primary" />
              Exemplo de Método Pessoal
            </h2>

            <p className="text-lg leading-relaxed">
              Veja como ficaria um método para alguém com este perfil: matutino, precisa de estrutura visual, 
              trabalha com projetos criativos e tem reuniões frequentes:
            </p>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 md:p-8 my-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Meu Sistema de Produtividade</h4>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground mb-1">📥 Captura (do GTD)</p>
                  <p className="text-muted-foreground text-sm">Tudo vai para uma inbox no Notion. Zero exceção.</p>
                </div>
                
                <div>
                  <p className="font-medium text-foreground mb-1">🎯 Priorização (Eisenhower simplificada)</p>
                  <p className="text-muted-foreground text-sm">Máximo 3 tarefas importantes por dia. O resto é "se der tempo".</p>
                </div>
                
                <div>
                  <p className="font-medium text-foreground mb-1">⏰ Execução (Time blocking + Pomodoro)</p>
                  <p className="text-muted-foreground text-sm">Manhãs bloqueadas para trabalho criativo (3 pomodoros). Reuniões só à tarde.</p>
                </div>
                
                <div>
                  <p className="font-medium text-foreground mb-1">👁️ Visualização (Kanban)</p>
                  <p className="text-muted-foreground text-sm">Quadro visual com: Backlog → Esta Semana → Hoje → Feito</p>
                </div>
                
                <div>
                  <p className="font-medium text-foreground mb-1">🔄 Revisão</p>
                  <p className="text-muted-foreground text-sm">5 min toda manhã. 30 min toda sexta-feira.</p>
                </div>
              </div>
            </div>

            {/* Conclusão */}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-16 mb-6">
              Conclusão: Experimente, Ajuste, Evolua
            </h2>

            <p className="text-lg leading-relaxed">
              Criar um método pessoal de produtividade não é um evento único — é um processo contínuo. 
              Seu sistema ideal hoje pode precisar de ajustes em seis meses quando sua vida mudar.
            </p>

            <p className="text-lg leading-relaxed">
              O segredo é começar simples e iterar. Não tente implementar tudo de uma vez. 
              Comece com uma rotina básica, observe o que funciona, ajuste o que não funciona, 
              e gradualmente construa um sistema que seja verdadeiramente seu.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 my-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">🚀 Próximos passos:</h4>
              <ol className="space-y-2 text-muted-foreground mb-0 list-decimal list-inside">
                <li>Dedique 15 minutos para responder às perguntas de perfil</li>
                <li>Escolha 2-3 elementos de métodos existentes para testar</li>
                <li>Defina uma rotina de revisão (diária ou semanal)</li>
                <li>Comece amanhã e ajuste ao longo das próximas semanas</li>
              </ol>
            </div>

            <p className="text-lg leading-relaxed">
              Lembre-se: o objetivo não é ter o método mais elaborado ou seguir todas as regras à risca. 
              O objetivo é ter um sistema que <strong>funcione para você</strong> — que te ajude a fazer 
              o que importa sem se sentir sobrecarregado.
            </p>

            <p className="text-lg leading-relaxed font-medium">
              A produtividade perfeita é aquela que se adapta à sua vida, não o contrário.
            </p>
          </div>

          {/* CTA Section */}
          <BlogCTA location="metodo-pessoal-produtividade" />

          {/* Related Articles */}
          <RelatedArticles 
            currentSlug="metodo-pessoal-produtividade"
            category="Produtividade"
            allArticles={allArticles}
          />
        </section>
      </article>
    </>
  );
};

export default MetodoPessoalProdutividade;
