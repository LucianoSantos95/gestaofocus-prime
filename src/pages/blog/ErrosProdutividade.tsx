import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import errosImage from "@/assets/blog/erros-produtividade.jpg";

const ErrosProdutividade = () => {
  const relatedPosts = [
    {
      title: "O segredo que as empresas produtivas usam (e ninguém te contou): o poder do Notion",
      slug: "poder-do-notion-empresas-produtivas"
    },
    {
      title: "Gestão de projetos no Notion: o passo a passo para parar de perder tempo e ganhar resultados",
      slug: "gestao-projetos-notion"
    }
  ];

  return (
    <>
      <Helmet>
        <title>5 Erros de Produtividade que Você Comete Sem Perceber | Focus</title>
        <meta 
          name="description" 
          content="Identifique os erros mais comuns que sabotam sua produtividade e aprenda técnicas práticas para corrigi-los imediatamente." 
        />
        <meta name="keywords" content="erros produtividade, dicas produtividade, gestão tempo, eficiência trabalho, organização pessoal" />
        <link rel="canonical" href="https://focusinteligente.com/blog/5-erros-produtividade" />
      </Helmet>

      <article className="min-h-screen pt-24 pb-16">
        <div className="container-focus mb-8">
          <nav className="flex items-center space-x-2 text-sm text-foreground-muted">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">5 Erros de Produtividade</span>
          </nav>
        </div>

        <div className="container-focus mb-8">
          <div className="aspect-video overflow-hidden rounded-2xl">
            <img 
              src={errosImage} 
              alt="5 erros de produtividade mais comuns"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="container-focus max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-sm text-foreground-muted">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                Produtividade
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>15 de janeiro de 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>6 min de leitura</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Você comete esses 5 erros de produtividade sem perceber? Descubra agora como evitá-los
            </h1>

            <p className="text-xl text-foreground-muted leading-relaxed">
              Identifique os erros mais comuns que sabotam sua produtividade e aprenda técnicas práticas para corrigi-los imediatamente.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground-muted leading-relaxed mb-6">
              Você trabalha o dia inteiro, mas sente que poderia ter feito muito mais? A sensação de estar sempre ocupado mas nunca produtivo é mais comum do que imagina. E geralmente não é falta de esforço — são pequenos erros que sabotam sua produtividade sem você perceber.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Erro #1: Não planejar o dia (ou a semana)</h2>
            
            <p className="text-foreground-muted leading-relaxed mb-6">
              Começar o dia sem um plano claro é como dirigir sem saber o destino. Você vai gastar energia, mas provavelmente não vai chegar onde precisa.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              <strong>A solução:</strong> Reserve 15 minutos no final do dia para planejar o próximo. Liste as 3 tarefas mais importantes que você precisa completar. Não uma lista interminável — apenas 3 prioridades reais.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Erro #2: Viver no modo "apagando incêndios"</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Quando você passa o dia respondendo a urgências e solicitações de outras pessoas, está deixando que elas controlem sua agenda. O resultado? Você fica ocupado mas não avança nas coisas realmente importantes.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              <strong>A solução:</strong> Estabeleça blocos de tempo protegidos para trabalho profundo. No mínimo 2 horas por dia onde você não responde mensagens, não atende reuniões, e foca exclusivamente nas suas prioridades estratégicas.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Erro #3: Achar que multitarefa funciona</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Estudos mostram que multitarefa reduz sua produtividade em até 40%. Cada vez que você muda de tarefa, seu cérebro precisa de tempo para se reajustar. Parece que você está fazendo mais, mas na verdade está desperdiçando energia mental.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              <strong>A solução:</strong> Pratique o foco em única tarefa. Use a técnica Pomodoro: 25 minutos de foco total em uma tarefa, 5 minutos de pausa. Repita. Você vai se surpreender com o quanto consegue fazer.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Erro #4: Não ter um sistema de captura de ideias e tarefas</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Quantas ideias você teve hoje que simplesmente desapareceram? Quando você tenta guardar tudo na cabeça, está desperdiçando energia mental valiosa tentando não esquecer as coisas.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              <strong>A solução:</strong> Tenha um sistema confiável para capturar tudo. Pode ser um app no celular, um caderno, ou uma ferramenta como o Notion. O importante é que você confie nele completamente. Quando uma ideia ou tarefa aparecer, você anota ali e esquece — sabendo que vai revisar depois.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Erro #5: Confundir estar ocupado com ser produtivo</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Responder emails, participar de reuniões, fazer tarefas pequenas... tudo isso pode te manter ocupado o dia inteiro. Mas estar ocupado não significa estar sendo produtivo.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Produtividade real é sobre fazer as coisas certas, não fazer mais coisas. É sobre avançar nos seus objetivos principais, não apenas riscar itens de uma lista.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              <strong>A solução:</strong> Todo dia, pergunte a si mesmo: "Se eu pudesse completar apenas uma coisa hoje, qual seria?" Essa é sua prioridade número 1. Faça ela antes de qualquer outra coisa.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">O caminho para a produtividade sustentável</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Corrigir esses 5 erros não vai acontecer da noite para o dia. Mas se você começar com um erro por vez, em um mês você terá transformado completamente sua forma de trabalhar.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              A verdadeira produtividade não é sobre trabalhar mais — é sobre trabalhar melhor. É sobre ter sistemas que funcionam, eliminar desperdícios, e focar no que realmente importa.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Comece hoje. Escolha um dos erros acima e implemente a solução esta semana. Você vai notar a diferença imediatamente.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-card-border">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-foreground-muted" />
              <span className="text-sm text-foreground-muted">Tags:</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Produtividade</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Gestão de Tempo</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Organização</span>
            </div>
          </div>

          <div className="mt-12 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Quer sistemas que realmente funcionam?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Descubra como criar sistemas de produtividade personalizados que se encaixam na sua rotina.
            </p>
            <Link to="/sistemas-notion">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Ver Sistemas de Produtividade
              </Button>
            </Link>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((post, index) => (
                <Link 
                  key={index}
                  to={`/blog/${post.slug}`}
                  className="group p-6 bg-card border border-card-border rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Link 
              to="/blog"
              className="inline-flex items-center text-primary hover:gap-2 transition-all"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar para o Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default ErrosProdutividade;
