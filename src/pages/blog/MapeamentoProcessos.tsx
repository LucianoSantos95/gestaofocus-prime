import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import mapeamentoImage from "@/assets/blog/mapeamento-processos.jpg";

const MapeamentoProcessos = () => {
  const relatedPosts = [
    {
      title: "O segredo que as empresas produtivas usam (e ninguém te contou): o poder do Notion",
      slug: "poder-do-notion-empresas-produtivas"
    },
    {
      title: "Como montar um sistema completo no Notion e fazer sua empresa funcionar no piloto automático",
      slug: "sistema-completo-notion-automacao"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mapeamento de Processos: Como Destravar o Crescimento | Focus</title>
        <meta 
          name="description" 
          content="Aprenda como identificar gargalos, eliminar retrabalho e criar um fluxo de trabalho que realmente funciona para sua empresa crescer." 
        />
        <meta name="keywords" content="mapeamento de processos, gestão de processos, otimização empresarial, fluxo de trabalho, crescimento empresarial" />
        <link rel="canonical" href="https://focusinteligente.com/blog/mapeamento-processos-crescimento" />
      </Helmet>

      <article className="min-h-screen pt-24 pb-16">
        <div className="container-focus mb-8">
          <nav className="flex items-center space-x-2 text-sm text-foreground-muted">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">Mapeamento de Processos</span>
          </nav>
        </div>

        <div className="container-focus mb-8">
          <div className="aspect-video overflow-hidden rounded-2xl">
            <img 
              src={mapeamentoImage} 
              alt="Mapeamento de processos para crescimento empresarial"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="container-focus max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-sm text-foreground-muted">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                Gestão de Processos
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>18 de janeiro de 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min de leitura</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Seu negócio está travado? Veja como o mapeamento de processos pode destravar seu crescimento
            </h1>

            <p className="text-xl text-foreground-muted leading-relaxed">
              Aprenda como identificar gargalos, eliminar retrabalho e criar um fluxo de trabalho que realmente funciona para sua empresa crescer.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-12 mb-6">O problema invisível que está travando seu crescimento</h2>
            
            <p className="text-foreground-muted leading-relaxed mb-6">
              Sua empresa está crescendo, mas você sente que poderia estar indo muito mais rápido. Os mesmos problemas se repetem, a equipe está sempre ocupada mas os resultados não acompanham, e você passa mais tempo apagando incêndios do que planejando o futuro.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O motivo? Seus processos não estão mapeados. E quando você não sabe exatamente como as coisas funcionam na sua empresa, é impossível melhorá-las.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">O que é mapeamento de processos e por que ele é crucial</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Mapeamento de processos é simplesmente documentar e visualizar cada etapa de como o trabalho acontece na sua empresa. Desde o momento que um cliente entra em contato até a entrega do serviço, passando por todas as etapas intermediárias.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Quando você mapeia seus processos, três coisas acontecem imediatamente:
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">1. Você identifica os gargalos</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Aquela etapa que sempre atrasa tudo se torna óbvia. Pode ser uma aprovação demorada, uma falta de comunicação entre setores, ou um processo manual que deveria ser automatizado.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2. Você elimina o retrabalho</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Quantas vezes sua equipe refaz o mesmo trabalho? Informações que se perdem, tarefas duplicadas, ou decisões que precisam ser refeitas porque faltou alguma etapa no processo.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3. Você cria previsibilidade</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Com processos mapeados, você sabe exatamente quanto tempo cada coisa leva, quantos recursos precisa, e pode prever problemas antes que aconteçam.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Como fazer o mapeamento de processos na prática</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O mapeamento não precisa ser complicado. Comece pelos processos mais críticos do seu negócio - aqueles que impactam diretamente o cliente ou a receita.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Passo 1: Escolha o processo</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Comece com um processo que está causando problemas ou que é estratégico para o negócio. Exemplos: processo de vendas, onboarding de clientes, entrega de projetos.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Passo 2: Documente cada etapa</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Liste todas as etapas do processo do início ao fim. Não tente fazer perfeito na primeira tentativa - o importante é começar.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Passo 3: Identifique responsáveis e prazos</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Para cada etapa, defina quem é responsável e quanto tempo deve levar. Isso cria accountability e permite medir a eficiência.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Passo 4: Encontre os pontos de melhoria</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Com o processo mapeado, pergunte: onde estão os gargalos? O que pode ser eliminado? O que pode ser automatizado? O que depende de uma pessoa só?
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">O impacto real do mapeamento de processos</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Empresas que mapeiam seus processos conseguem reduzir em até 40% o tempo gasto em tarefas operacionais. Isso significa mais tempo para crescer, mais margem de lucro, e uma equipe menos estressada.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Além disso, processos mapeados facilitam a contratação e treinamento de novos funcionários, porque tudo está documentado. E quando você decidir escalar, já tem a base para crescer sem caos.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão: do caos à previsibilidade</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O mapeamento de processos transforma empresas que operam no improviso em organizações previsíveis e escaláveis. É a diferença entre estar preso no operacional e ter tempo para pensar estrategicamente.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Se você sente que sua empresa está travada, comece mapeando apenas um processo esta semana. Os resultados vão te surpreender.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-card-border">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-foreground-muted" />
              <span className="text-sm text-foreground-muted">Tags:</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Processos</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Gestão</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Otimização</span>
            </div>
          </div>

          <div className="mt-12 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Precisa de ajuda para mapear seus processos?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Nossa consultoria especializada ajuda você a mapear, otimizar e automatizar os processos do seu negócio.
            </p>
            <Link to="/sistemas-notion">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Falar com Especialista
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

export default MapeamentoProcessos;
