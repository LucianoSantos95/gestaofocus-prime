import { Link } from "react-router-dom";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import articleImage from "@/assets/blog/clareza-projetos-notion.jpg";

const ClarezaProjetosNotion = () => {
  const relatedPosts = [
    {
      title: "Gestão de projetos no Notion: o passo a passo para parar de perder tempo e ganhar resultados",
      slug: "gestao-projetos-notion"
    },
    {
      title: "Produtividade não é fazer mais — é fazer o que importa (e o Notion pode provar)",
      slug: "produtividade-fazer-o-que-importa"
    },
    {
      title: "A fórmula que uso para transformar tarefas soltas em resultados consistentes",
      slug: "tarefas-soltas-em-resultados"
    }
  ];

  const imageUrl = "https://focusinteligente.com.br" + articleImage;

  return (
    <>
      <SEOHead
        title="Como usar o Notion para ter clareza total nos projetos | Focus"
        description="Guia prático para usar o Notion e ter visão completa dos seus projetos mesmo com pouco tempo. Templates, estratégias e método testado."
        canonical="/blog/clareza-projetos-notion"
        image={imageUrl}
        type="article"
        publishedTime="2025-02-05"
        modifiedTime="2025-02-05"
        keywords="notion projetos, gestão projetos notion, clareza projetos, organização notion, dashboard projetos, produtividade notion"
      />

      <article className="min-h-screen pt-24 pb-16">
        <div className="container-focus mb-8">
          <nav className="flex items-center space-x-2 text-sm text-foreground-muted">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">Clareza nos projetos com Notion</span>
          </nav>
        </div>

        <div className="container-focus mb-8">
          <div className="aspect-video overflow-hidden rounded-2xl">
            <img 
              src={articleImage} 
              alt="Profissional usando Notion para gerenciar projetos com clareza e organização"
              title="Gestão clara de projetos no Notion"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="container-focus max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-sm text-foreground-muted flex-wrap">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                Notion
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>5 de fevereiro de 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>9 min de leitura</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Como usar o Notion para ter clareza total nos seus projetos (mesmo com pouco tempo)
            </h1>

            <p className="text-xl text-foreground-muted leading-relaxed">
              O método completo para configurar o Notion e ter visão 360° dos seus projetos em minutos — não em horas de organização.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground-muted leading-relaxed mb-6">
              Você abre seu Notion cheio de páginas e bases de dados... mas continua sem saber <strong>exatamente onde cada projeto está</strong>. Qual a próxima ação? O que está travado? O que precisa da sua atenção urgente?
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              A promessa do Notion é organização. Mas muitos profissionais acabam com um <strong>Notion mais confuso que a desorganização original</strong>. O problema não é a ferramenta — é a falta de um sistema claro.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Por que a maioria falha em ter clareza no Notion</h2>
            
            <p className="text-foreground-muted leading-relaxed mb-6">
              Existem <strong>3 erros fatais</strong> que transformam o Notion em mais uma fonte de confusão:
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-card border border-card-border p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">❌ Erro #1: Excesso de complexidade</h3>
                <p className="text-foreground-muted">
                  Criar 50 propriedades, 30 views, relações infinitas... até você mesmo se perde. <strong>Simplicidade vence complexidade</strong> em sistemas de gestão.
                </p>
              </div>

              <div className="bg-card border border-card-border p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">❌ Erro #2: Falta de dashboard central</h3>
                <p className="text-foreground-muted">
                  Informações espalhadas em 20 páginas diferentes. Você precisa de <strong>UM lugar</strong> que mostre o status de tudo.
                </p>
              </div>

              <div className="bg-card border border-card-border p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">❌ Erro #3: Não conectar projetos a ações</h3>
                <p className="text-foreground-muted">
                  Projetos sem próximas ações claras são só "intenções". O sistema precisa mostrar <strong>o que fazer agora</strong>.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">O framework de clareza: 3 camadas essenciais</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Para ter clareza total no Notion, você precisa de <strong>3 camadas trabalhando juntas</strong>:
            </p>

            <div className="space-y-8 my-12">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-xl border-l-4 border-primary">
                <h3 className="text-2xl font-bold mb-4">Camada 1: Dashboard de Visão Geral</h3>
                <p className="text-foreground-muted mb-4">
                  Uma página que responde em 10 segundos:
                </p>
                <ul className="space-y-2 text-foreground-muted">
                  <li>• <strong>Quantos projetos ativos?</strong> E em que fase cada um?</li>
                  <li>• <strong>O que está no prazo?</strong> O que está atrasado?</li>
                  <li>• <strong>Onde você precisa agir hoje?</strong></li>
                  <li>• <strong>O que está travado?</strong> Esperando algo/alguém?</li>
                </ul>
                <div className="mt-4 bg-card p-4 rounded-lg">
                  <p className="text-sm text-foreground-muted">
                    💡 <strong>No Notion:</strong> Use views "Board" por Status + "Calendar" por Data de Entrega + "Gallery" para visualização rápida
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-xl border-l-4 border-primary">
                <h3 className="text-2xl font-bold mb-4">Camada 2: Base de Projetos Inteligente</h3>
                <p className="text-foreground-muted mb-4">
                  Cada projeto deve ter (só isso, sem complicar):
                </p>
                <ul className="space-y-2 text-foreground-muted">
                  <li>• <strong>Status claro:</strong> Planejamento / Em Andamento / Pausado / Concluído</li>
                  <li>• <strong>Prioridade:</strong> Alta / Média / Baixa</li>
                  <li>• <strong>Data de entrega:</strong> Para visualizar prazos</li>
                  <li>• <strong>Próxima ação:</strong> O QUE fazer agora para avançar</li>
                  <li>• <strong>Responsável:</strong> Quem está tocando isso</li>
                </ul>
                <div className="mt-4 bg-card p-4 rounded-lg">
                  <p className="text-sm text-foreground-muted">
                    💡 <strong>No Notion:</strong> Propriedades Select para Status e Prioridade, Date para prazos, Person para responsáveis
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-xl border-l-4 border-primary">
                <h3 className="text-2xl font-bold mb-4">Camada 3: Sistema de Tarefas Conectado</h3>
                <p className="text-foreground-muted mb-4">
                  Tarefas devem estar <strong>ligadas aos projetos</strong> (não soltas):
                </p>
                <ul className="space-y-2 text-foreground-muted">
                  <li>• Cada tarefa conectada ao projeto pai</li>
                  <li>• Filtre tarefas por projeto automaticamente</li>
                  <li>• Veja progresso: quantas tarefas feitas vs. total</li>
                  <li>• Identifique gargalos rapidamente</li>
                </ul>
                <div className="mt-4 bg-card p-4 rounded-lg">
                  <p className="text-sm text-foreground-muted">
                    💡 <strong>No Notion:</strong> Use propriedade Relation para conectar Tarefas → Projetos. Adicione Rollup para mostrar progresso.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-primary rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Quer um sistema pronto com essas 3 camadas?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Nossos <strong>sistemas no Notion</strong> já trazem tudo configurado: dashboards, projetos e tarefas integrados
              </p>
              <Link to="/sistemas-notion">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Ver Sistemas Notion
                </Button>
              </Link>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Implementação rápida: Seu Notion organizado em 1 hora</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Você não precisa passar dias configurando. Siga este roteiro de <strong>1 hora</strong>:
            </p>

            <div className="bg-card border border-card-border rounded-lg p-6 my-6">
              <h3 className="text-xl font-bold mb-4">⏱️ Roteiro de 1 hora para clareza total:</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-primary font-bold">0-15min:</span>
                  <div>
                    <p className="font-bold mb-1">Crie a base de Projetos</p>
                    <p className="text-foreground-muted text-sm">
                      Database simples com as 5 propriedades essenciais. Adicione todos os seus projetos atuais.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-primary font-bold">15-30min:</span>
                  <div>
                    <p className="font-bold mb-1">Configure seu Dashboard</p>
                    <p className="text-foreground-muted text-sm">
                      Crie uma página "Home" com 3 views: Board de Status, Timeline de Prazos, Lista de Prioridades.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-primary font-bold">30-45min:</span>
                  <div>
                    <p className="font-bold mb-1">Conecte tarefas a projetos</p>
                    <p className="text-foreground-muted text-sm">
                      Crie database de Tarefas com Relation para Projetos. Adicione as próximas ações de cada projeto.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-primary font-bold">45-60min:</span>
                  <div>
                    <p className="font-bold mb-1">Teste e ajuste</p>
                    <p className="text-foreground-muted text-sm">
                      Navegue pelo sistema. Está claro? Consegue responder "o que fazer agora"? Ajuste o necessário.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">As 5 views que todo gerente de projetos precisa</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Com o sistema montado, crie estas <strong>5 views essenciais</strong> no seu Dashboard:
            </p>

            <div className="space-y-4 my-8">
              <div className="border-l-4 border-primary pl-4 py-2">
                <h4 className="font-bold mb-1">1. "Ação Hoje" — Filtro: Prioridade = Alta + Status = Em Andamento</h4>
                <p className="text-foreground-muted text-sm">
                  Mostra exatamente onde você precisa focar agora.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h4 className="font-bold mb-1">2. "Atenção Urgente" — Filtro: Data de entrega = Próximos 7 dias</h4>
                <p className="text-foreground-muted text-sm">
                  Evita surpresas. Você vê com antecedência o que está chegando.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <h4 className="font-bold mb-1">3. "Travados" — Filtro: Status = Pausado</h4>
                <p className="text-foreground-muted text-sm">
                  Identifica o que precisa ser destravado. O que está esperando?
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-bold mb-1">4. "Pipeline Completo" — View: Board por Status</h4>
                <p className="text-foreground-muted text-sm">
                  Visão kanban de todos os projetos em suas diferentes fases.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-bold mb-1">5. "Timeline Estratégico" — View: Timeline por Data</h4>
                <p className="text-foreground-muted text-sm">
                  Visualize conflitos de prazo e carga de trabalho ao longo do tempo.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Manutenção: 10 minutos por dia</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O sistema só funciona se você o mantém atualizado. Mas não precisa ser trabalhoso:
            </p>

            <div className="bg-card border border-card-border rounded-lg p-6 my-6">
              <h3 className="text-xl font-bold mb-4">🕐 Rotina diária de 10 minutos:</h3>
              <ul className="space-y-3 text-foreground-muted">
                <li><strong>Manhã (5 min):</strong> Abra seu Dashboard → Revise "Ação Hoje" → Defina as 3 prioridades do dia</li>
                <li><strong>Final do dia (5 min):</strong> Atualize status dos projetos → Marque tarefas concluídas → Defina próximas ações para amanhã</li>
              </ul>
              <p className="text-foreground-muted mt-4">
                Só isso. <strong>10 minutos mantêm clareza absoluta</strong>.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão: Clareza é poder</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Quando você tem <strong>clareza total</strong> dos seus projetos, tudo muda:
            </p>

            <ul className="space-y-2 text-foreground-muted my-6">
              <li>• Você sabe exatamente onde focar</li>
              <li>• Decisões ficam mais rápidas e assertivas</li>
              <li>• Nada importante cai no esquecimento</li>
              <li>• Você trabalha com confiança, não ansiedade</li>
            </ul>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O Notion é a ferramenta. Mas o segredo está no <strong>sistema que você implementa dentro dele</strong>.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Com as 3 camadas (Dashboard + Projetos + Tarefas) configuradas corretamente, você terá visão 360° em segundos. Mesmo com agenda lotada e pouco tempo.
            </p>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8 border-t border-card-border">
            <h3 className="text-2xl font-bold mb-6">Artigos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post, index) => (
                <Link 
                  key={index}
                  to={`/blog/${post.slug}`}
                  className="group p-4 rounded-lg border border-card-border hover:border-primary transition-colors"
                >
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-12 p-8 bg-card border border-card-border rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-3">
              Quer um sistema pronto para clareza total?
            </h3>
            <p className="text-foreground-muted mb-6">
              Nossos sistemas no Notion já vêm com dashboards, projetos e tarefas integrados — é só usar
            </p>
            <Link to="/sistemas-notion">
              <Button size="lg" className="btn-hero">
                Ver Nossos Sistemas
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default ClarezaProjetosNotion;
