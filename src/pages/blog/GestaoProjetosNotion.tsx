import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import gestaoProjetosImage from "@/assets/blog/gestao-projetos-notion.jpg";

const GestaoProjetosNotion = () => {
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
        <title>Gestão de Projetos no Notion: Passo a Passo Completo | Focus</title>
        <meta 
          name="description" 
          content="Monte um sistema completo de gestão de projetos no Notion e transforme a forma como sua equipe trabalha com eficiência comprovada." 
        />
        <meta name="keywords" content="gestão projetos notion, gerenciamento projetos, notion templates, produtividade equipe, organização projetos" />
        <link rel="canonical" href="https://focusinteligente.com/blog/gestao-projetos-notion" />
      </Helmet>

      <article className="min-h-screen pt-24 pb-16">
        <div className="container-focus mb-8">
          <nav className="flex items-center space-x-2 text-sm text-foreground-muted">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">Gestão de Projetos no Notion</span>
          </nav>
        </div>

        <div className="container-focus mb-8">
          <div className="aspect-video overflow-hidden rounded-2xl">
            <img 
              src={gestaoProjetosImage} 
              alt="Sistema de gestão de projetos no Notion"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="container-focus max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-sm text-foreground-muted">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                Notion
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>12 de janeiro de 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>9 min de leitura</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Gestão de projetos no Notion: o passo a passo para parar de perder tempo e ganhar resultados
            </h1>

            <p className="text-xl text-foreground-muted leading-relaxed">
              Monte um sistema completo de gestão de projetos no Notion e transforme a forma como sua equipe trabalha com eficiência comprovada.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-12 mb-6">Por que o Notion é perfeito para gestão de projetos</h2>
            
            <p className="text-foreground-muted leading-relaxed mb-6">
              Ferramentas tradicionais de gestão de projetos são caras, complexas, e muitas vezes inflexíveis. O Notion oferece algo diferente: flexibilidade total para criar o sistema exato que você precisa, sem pagar fortunas e sem forçar sua equipe a se adaptar a processos rígidos.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Você pode visualizar seus projetos em kanban, calendário, timeline, tabela — ou tudo isso ao mesmo tempo. Pode criar campos personalizados, automações, e integrações que fazem sentido para o seu negócio.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Passo 1: Estruture sua base de projetos</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Comece criando um banco de dados para seus projetos. Cada projeto deve ter no mínimo:
            </p>

            <ul className="list-disc pl-6 mb-6 text-foreground-muted">
              <li className="mb-2"><strong>Nome do projeto</strong> - Claro e descritivo</li>
              <li className="mb-2"><strong>Status</strong> - Em planejamento, Em andamento, Pausado, Concluído</li>
              <li className="mb-2"><strong>Responsável</strong> - Quem está liderando o projeto</li>
              <li className="mb-2"><strong>Prazo</strong> - Data de início e conclusão esperada</li>
              <li className="mb-2"><strong>Prioridade</strong> - Alta, Média, Baixa</li>
              <li className="mb-2"><strong>Cliente/Departamento</strong> - Para quem é o projeto</li>
            </ul>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Dentro de cada projeto, crie páginas com seções para: objetivos, entregas esperadas, cronograma, recursos necessários, e anotações.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Passo 2: Crie o sistema de tarefas</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Projetos são compostos de tarefas. Crie um banco de dados de tarefas conectado ao banco de dados de projetos. Cada tarefa deve ter:
            </p>

            <ul className="list-disc pl-6 mb-6 text-foreground-muted">
              <li className="mb-2"><strong>Nome da tarefa</strong></li>
              <li className="mb-2"><strong>Projeto relacionado</strong> - Link para o projeto pai</li>
              <li className="mb-2"><strong>Responsável</strong> - Quem vai executar</li>
              <li className="mb-2"><strong>Prazo</strong> - Data de entrega</li>
              <li className="mb-2"><strong>Status</strong> - A fazer, Em progresso, Em revisão, Concluído</li>
              <li className="mb-2"><strong>Prioridade</strong></li>
              <li className="mb-2"><strong>Tempo estimado</strong> - Quantas horas deve levar</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Passo 3: Defina visualizações estratégicas</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O poder do Notion está nas múltiplas visualizações do mesmo dado. Crie diferentes views para diferentes necessidades:
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Visualização Kanban</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Organize projetos por status em colunas. Perfeito para ver o fluxo de trabalho e mover projetos entre etapas.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Visualização Calendário</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Veja todos os prazos em um calendário visual. Essencial para identificar conflitos e planejar a capacidade da equipe.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Visualização Timeline</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Veja a linha do tempo de todos os projetos simultaneamente. Útil para planejamento de longo prazo e identificação de dependências.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Visualização por Responsável</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Agrupe projetos por pessoa responsável. Perfeito para distribuição de carga e reuniões 1:1.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Passo 4: Implemente rituais de acompanhamento</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Um sistema só funciona se for usado consistentemente. Estabeleça rituais:
            </p>

            <ul className="list-disc pl-6 mb-6 text-foreground-muted">
              <li className="mb-2"><strong>Check-in diário</strong> - 5 minutos para atualizar status das tarefas</li>
              <li className="mb-2"><strong>Revisão semanal</strong> - 30 minutos para revisar progresso dos projetos</li>
              <li className="mb-2"><strong>Planejamento mensal</strong> - 1 hora para planejar novos projetos e reavaliar prioridades</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Passo 5: Adicione automações e integrações</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Para levar seu sistema ao próximo nível, adicione:
            </p>

            <ul className="list-disc pl-6 mb-6 text-foreground-muted">
              <li className="mb-2"><strong>Notificações automáticas</strong> - Quando prazos se aproximam ou tarefas mudam de status</li>
              <li className="mb-2"><strong>Templates de projetos</strong> - Para tipos recorrentes de projetos</li>
              <li className="mb-2"><strong>Dashboards executivos</strong> - Visões consolidadas para liderança</li>
              <li className="mb-2"><strong>Integração com calendário</strong> - Sincronize prazos com Google Calendar</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Os resultados de um sistema bem implementado</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Empresas que implementam gestão de projetos estruturada no Notion reportam:
            </p>

            <ul className="list-disc pl-6 mb-6 text-foreground-muted">
              <li className="mb-2">Redução de 50% em reuniões desnecessárias</li>
              <li className="mb-2">30% de aumento na taxa de conclusão de projetos no prazo</li>
              <li className="mb-2">Eliminação quase total de tarefas perdidas ou esquecidas</li>
              <li className="mb-2">Transparência completa sobre quem está fazendo o quê</li>
              <li className="mb-2">Capacidade de prever problemas antes que aconteçam</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Comece hoje mesmo</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Você não precisa implementar tudo de uma vez. Comece com o básico: um banco de dados de projetos, outro de tarefas, e uma visualização kanban. Use por uma semana. Depois adicione mais complexidade conforme necessário.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O importante é começar. Um sistema simples que é usado é infinitamente melhor que um sistema perfeito que ninguém adota.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-card-border">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-foreground-muted" />
              <span className="text-sm text-foreground-muted">Tags:</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Notion</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Gestão de Projetos</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Produtividade</span>
            </div>
          </div>

          <div className="mt-12 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Quer um sistema pronto e otimizado?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Nossos templates de gestão de projetos no Notion já estão prontos para usar. Economize semanas de configuração.
            </p>
            <Link to="/sistemas-notion">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Ver Sistemas de Gestão no Notion
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

export default GestaoProjetosNotion;
