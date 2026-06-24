import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCTA from "@/components/BlogCTA";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeaways from "@/components/blog/KeyTakeaways";
import ArticleEngagement from "@/components/blog/ArticleEngagement";
import AuthorBio from "@/components/blog/AuthorBio";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import coverImage from "@/assets/blog/gestao-projetos-notion.jpg";

const NotionAgenciasGuia2026 = () => {
  const imageUrl = "https://focusinteligente.com.br" + coverImage;
  const articleUrl = "https://focusinteligente.com.br/blog/notion-para-agencias-guia-completo-2026";

  const tocItems = [
    { id: "por-que-notion", text: "Por que o Notion é a escolha certa para agências em 2026", level: 2 },
    { id: "pilares", text: "Os 5 pilares de um workspace de agência no Notion", level: 2 },
    { id: "crm", text: "Pilar 1: CRM de clientes e pipeline comercial", level: 2 },
    { id: "projetos", text: "Pilar 2: Gestão de projetos e entregas", level: 2 },
    { id: "equipe", text: "Pilar 3: Gestão de equipe e capacidade", level: 2 },
    { id: "base-conhecimento", text: "Pilar 4: Base de conhecimento e processos", level: 2 },
    { id: "dashboard", text: "Pilar 5: Dashboard executivo e KPIs", level: 2 },
    { id: "automacoes", text: "Automações que toda agência deveria ter", level: 2 },
    { id: "implementacao", text: "Roteiro de implementação em 8 semanas", level: 2 },
    { id: "cases", text: "Cases: resultados de agências reais", level: 2 },
    { id: "faq", text: "Perguntas frequentes", level: 2 },
  ];

  const keyTakeaways = [
    "O Notion substitui Asana + HubSpot + Confluence por uma fração do custo para agências de até 50 pessoas",
    "Os 5 pilares essenciais: CRM, Projetos, Equipe, Base de Conhecimento e Dashboard",
    "Relações entre bancos de dados eliminam silos de informação e reuniões de alinhamento",
    "Automações via Zapier/Make conectam o workspace ao mundo externo",
    "Implantação em 8 semanas, módulo por módulo, garante adoção real",
  ];

  return (
    <>
      <ReadingProgressBar />
      <SEOHead
        title="Notion para Agências: Guia Completo 2026 | Focus"
        description="Guia completo de como usar o Notion para gerenciar sua agência ou consultoria em 2026. CRM, projetos, equipe, processos e automações — tudo em um único workspace."
        canonical="/blog/notion-para-agencias-guia-completo-2026"
        image={imageUrl}
        type="article"
        publishedTime="2026-06-01"
        modifiedTime="2026-06-23"
        keywords="notion para agências 2026, como usar notion agência, gestão agência notion, crm notion agência, projetos notion consultoria"
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />

        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <BlogBreadcrumb articleTitle="Notion para Agências: Guia Completo 2026" articleSlug="notion-para-agencias-guia-completo-2026" />

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
                Notion para agências em 2026: guia completo do workspace que substitui 5 ferramentas
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Como montar um workspace no Notion que centraliza CRM, projetos, equipe e processos — sem integrações complexas e com adoção real da equipe
              </p>
            </header>

            <ArticleEngagement
              publishDate="1 de junho de 2026"
              readTime="18 min"
              articleUrl={articleUrl}
              articleTitle="Notion para Agências: Guia Completo 2026"
            />

            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img
                src={coverImage}
                alt="Dashboard do Notion configurado para gestão completa de agência de marketing e consultoria"
                className="w-full h-full object-cover"
              />
            </div>

            <KeyTakeaways items={keyTakeaways} readTime="18 min" />
            <TableOfContents items={tocItems} />

            <div className="prose prose-lg max-w-none">

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <p className="font-semibold text-lg mb-2">⚡ Resumo executivo</p>
                <p className="text-muted-foreground">
                  O Notion permite que agências e consultorias operem com a infraestrutura tecnológica de empresas maiores — por menos de R$ 50/mês por pessoa. Este guia mostra a arquitetura completa: quais bancos de dados criar, como conectá-los, quais automações implementar e como garantir que a equipe realmente use o sistema.
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Em 2026, a maioria das agências ainda opera com informação fragmentada: clientes no HubSpot, projetos no Asana, processos no Confluence ou Google Docs, reuniões no Notion, e tudo o mais no WhatsApp. O custo invisível? Horas perdidas transitando entre ferramentas, dados desatualizados e equipes que não sabem onde está a versão mais recente de nada.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                O Notion resolveu esse problema para centenas de agências — não por ser tecnologicamente superior a cada uma dessas ferramentas individualmente, mas por ser o único que as unifica em uma arquitetura onde os dados fluem naturalmente entre contextos. Um clique no nome do cliente abre seus projetos, processos, histórico de conversas e próximas ações — sem alternar de aba.
              </p>

              <h2 id="por-que-notion" className="text-3xl font-bold mt-12 mb-6">Por que o Notion é a escolha certa para agências em 2026</h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                A escolha de ferramenta para uma agência deve ser avaliada em três eixos: custo, flexibilidade e adoção. O Notion vence nos três.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-card-border p-3 text-left font-semibold">Ferramenta</th>
                      <th className="border border-card-border p-3 text-left font-semibold">Custo mensal (10 pessoas)</th>
                      <th className="border border-card-border p-3 text-left font-semibold">O que faz</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr>
                      <td className="border border-card-border p-3"><strong>Asana</strong></td>
                      <td className="border border-card-border p-3">~R$ 750/mês</td>
                      <td className="border border-card-border p-3">Projetos e tarefas</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-card-border p-3"><strong>HubSpot Starter</strong></td>
                      <td className="border border-card-border p-3">~R$ 600/mês</td>
                      <td className="border border-card-border p-3">CRM e vendas</td>
                    </tr>
                    <tr>
                      <td className="border border-card-border p-3"><strong>Confluence</strong></td>
                      <td className="border border-card-border p-3">~R$ 250/mês</td>
                      <td className="border border-card-border p-3">Base de conhecimento</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-card-border p-3"><strong>Total ferramentas separadas</strong></td>
                      <td className="border border-card-border p-3"><strong>~R$ 1.600/mês</strong></td>
                      <td className="border border-card-border p-3">3 ferramentas desconectadas</td>
                    </tr>
                    <tr className="bg-primary/5">
                      <td className="border border-card-border p-3"><strong>Notion Plus</strong></td>
                      <td className="border border-card-border p-3"><strong>~R$ 400/mês</strong></td>
                      <td className="border border-card-border p-3">Tudo integrado</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Além do custo, o Notion tem uma vantagem estrutural que as ferramentas especializadas não têm: seus dados são <strong>relacionais por design</strong>. Um projeto referencia automaticamente o cliente, a equipe e os processos relevantes. Não é possível ter essa visão unificada pagando R$ 1.600/mês em ferramentas separadas — porque elas não conversam entre si.
              </p>

              <h2 id="pilares" className="text-3xl font-bold mt-12 mb-6">Os 5 pilares de um workspace de agência no Notion</h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Um workspace de agência bem estruturado tem cinco módulos — cada um um banco de dados, cada um conectado aos outros. Não é necessário construir tudo de uma vez; a arquitetura foi desenhada para ser implementada em fases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
                {[
                  { num: "1", label: "CRM", desc: "Clientes e pipeline" },
                  { num: "2", label: "Projetos", desc: "Entregas e tarefas" },
                  { num: "3", label: "Equipe", desc: "Pessoas e carga" },
                  { num: "4", label: "Base", desc: "Processos e docs" },
                  { num: "5", label: "Dashboard", desc: "KPIs e visão geral" },
                ].map((item) => (
                  <div key={item.num} className="bg-primary/5 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{item.num}</div>
                    <div className="font-semibold text-sm">{item.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>

              <h2 id="crm" className="text-3xl font-bold mt-12 mb-6">Pilar 1: CRM de clientes e pipeline comercial</h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                O CRM para agências tem necessidades diferentes de um CRM de produto. Você não tem milhares de leads — tem dezenas de relacionamentos que precisam de atenção constante. O CRM no Notion é construído para esse modelo: menos volume, mais profundidade por conta.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Campos essenciais do banco de dados de clientes</h3>

              <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                <li><strong>Status do relacionamento:</strong> Prospect → Proposta enviada → Negociação → Cliente ativo → Inativo → Churned</li>
                <li><strong>Tipo de contrato:</strong> Projeto pontual, Retainer mensal, Consultoria por hora</li>
                <li><strong>MRR ou valor do projeto:</strong> Para priorizar atenção por impacto financeiro</li>
                <li><strong>Próxima ação:</strong> Campo de data com o que fazer e quando — alimenta a view de follow-up</li>
                <li><strong>NPS:</strong> Resultado da última pesquisa de satisfação (1-10)</li>
                <li><strong>Canal de origem:</strong> Indicação, SEO, LinkedIn, evento — para medir o que funciona comercialmente</li>
                <li><strong>Projetos relacionados:</strong> Relation com o banco de projetos — ver todo o histórico com um clique</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Views do CRM que fazem diferença</h3>

              <ul className="list-disc pl-6 mb-6 space-y-3 text-muted-foreground">
                <li><strong>Pipeline Kanban:</strong> Columns por status de relacionamento. Arraste prospects pelo funil visualmente.</li>
                <li><strong>Follow-up urgente:</strong> Filtra clientes com "Próxima ação" vencida ou nos próximos 3 dias. Sua lista de prioridade diária.</li>
                <li><strong>MRR por cliente:</strong> Tabela ordenada por valor do contrato. Saiba imediatamente onde estão seus 20% de clientes que representam 80% da receita.</li>
                <li><strong>NPS baixo:</strong> Filtra clientes com NPS abaixo de 7. Atenção proativa antes de virar churn.</li>
              </ul>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <p className="font-semibold mb-2">💡 Automação recomendada</p>
                <p className="text-muted-foreground">Quando o status muda para "Cliente ativo", uma automação via Zapier cria automaticamente o primeiro projeto no banco de projetos com o template de onboarding — já linkado ao cliente. A equipe não precisa fazer nada manualmente.</p>
              </div>

              <h2 id="projetos" className="text-3xl font-bold mt-12 mb-6">Pilar 2: Gestão de projetos e entregas</h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                O banco de projetos é o coração operacional da agência. É onde a equipe trabalha diariamente. Por isso, a simplicidade é crítica — campos demais criam atrito e a equipe para de atualizar.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Estrutura do banco de projetos</h3>

              <p className="text-muted-foreground leading-relaxed mb-4">Cada projeto deve ter:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                <li><strong>Cliente:</strong> Relation com o CRM</li>
                <li><strong>Gerente de projeto:</strong> Quem lidera — e quem a equipe consulta quando tem dúvidas</li>
                <li><strong>Status:</strong> Kickoff → Em andamento → Em revisão → Aprovado → Entregue → Arquivado</li>
                <li><strong>Prazo de entrega:</strong> Data final — aparece no calendário automaticamente</li>
                <li><strong>Prioridade:</strong> Crítica / Alta / Normal — para triagem em momentos de sobrecarga</li>
                <li><strong>Tipo de projeto:</strong> Identidade visual, Site, Campanha, Consultoria, Retainer</li>
                <li><strong>Valor:</strong> Para rollup automático de receita no dashboard</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">O banco de tarefas: do macro ao micro</h3>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Crie um banco de dados de tarefas separado, conectado ao de projetos via Relation. Cada tarefa tem responsável, prazo, status e estimativa de horas. Com isso, você consegue:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                <li>Dentro de cada projeto, ver todas as tarefas filhas automaticamente (via linked view)</li>
                <li>No perfil de cada pessoa da equipe, ver todas as tarefas atribuídas a ela (carga de trabalho real)</li>
                <li>No dashboard executivo, ver quantas tarefas estão vencidas hoje, sem precisar abrir cada projeto</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Templates de projeto que eliminam retrabalho</h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Para cada tipo de projeto recorrente, crie um template no Notion com as etapas padrão já criadas. Um "Projeto de Site" pode ter automaticamente as tarefas: Briefing, Arquitetura de informação, Wireframe, Design, Desenvolvimento, Revisão do cliente, Testes, Go-live. O gerente de projeto não precisa criar essas tarefas do zero — duplica o template, ajusta prazos e atribui responsáveis.
              </p>

              <h2 id="equipe" className="text-3xl font-bold mt-12 mb-6">Pilar 3: Gestão de equipe e capacidade</h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                O banco de equipe resolve um problema crônico em agências: distribuir novos projetos sem saber quem tem capacidade. Sem visibilidade de carga, os gestores distribuem "na intuição" — e o resultado é equipe desbalanceada, burnout de uns e ociosidade de outros.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Campos do banco de equipe</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                <li><strong>Especialidade principal:</strong> Designer, Dev, Copywriter, Estrategista, CS</li>
                <li><strong>Capacidade semanal:</strong> Horas disponíveis por semana (ex: 32h para dedicação parcial)</li>
                <li><strong>Projetos ativos:</strong> Rollup do banco de projetos — lista automática de projetos em andamento</li>
                <li><strong>Horas comprometidas:</strong> Rollup das estimativas de tarefas ativas — carga real da semana</li>
                <li><strong>Disponibilidade:</strong> Fórmula: Capacidade semanal − Horas comprometidas = Horas livres</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Com esse banco, você abre uma view de "Capacidade da equipe" antes de aceitar um novo projeto e vê imediatamente quem tem horas disponíveis. Decisão baseada em dado, não em intuição.
              </p>

              <h2 id="base-conhecimento" className="text-3xl font-bold mt-12 mb-6">Pilar 4: Base de conhecimento e processos</h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                A base de conhecimento é o que transforma uma agência de "depende de fulano para saber como fazer" para "está documentado, qualquer um pode seguir". Para agências que crescem, é o que viabiliza contratar e integrar novos membros sem o fundador precisar ensinar pessoalmente cada processo.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Estrutura recomendada para agências</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-muted p-5 rounded-lg">
                  <h4 className="font-bold mb-2">📋 Processos operacionais</h4>
                  <p className="text-muted-foreground text-sm">Como as entregas são feitas: processo de briefing, processo de criação, processo de revisão e aprovação, processo de entrega. Para cada tipo de serviço que a agência oferece.</p>
                </div>
                <div className="bg-muted p-5 rounded-lg">
                  <h4 className="font-bold mb-2">📝 Templates e documentos padrão</h4>
                  <p className="text-muted-foreground text-sm">Proposta comercial, briefing de projeto, relatório de reunião, relatório de resultados, checklist de entrega. Disponíveis para toda a equipe duplicar a partir do template.</p>
                </div>
                <div className="bg-muted p-5 rounded-lg">
                  <h4 className="font-bold mb-2">🎓 Onboarding de novos membros</h4>
                  <p className="text-muted-foreground text-sm">O que um novo membro precisa ler nos primeiros 3 dias: estrutura da empresa, valores, como funciona cada ferramenta, quem faz o quê, e os primeiros passos práticos.</p>
                </div>
                <div className="bg-muted p-5 rounded-lg">
                  <h4 className="font-bold mb-2">💡 Decisões e histórico</h4>
                  <p className="text-muted-foreground text-sm">Por que certas escolhas foram feitas: por que mudamos de ferramenta X para Y, por que descontinuamos o serviço Z, como lidamos com a situação do cliente W. Memória organizacional que normalmente fica na cabeça dos fundadores.</p>
                </div>
              </div>

              <h2 id="dashboard" className="text-3xl font-bold mt-12 mb-6">Pilar 5: Dashboard executivo e KPIs</h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                O dashboard é a página que o gestor abre toda segunda de manhã. Não é um relatório estático — é uma visão em tempo real do estado da empresa, alimentada automaticamente pelos dados dos outros quatro pilares.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">O dashboard executivo de uma agência deve mostrar:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                <li><strong>Projetos atrasados:</strong> Linked view do banco de projetos filtrado por "prazo vencido + status ≠ Entregue"</li>
                <li><strong>Clientes sem follow-up:</strong> CRM filtrado por "próxima ação vencida há mais de 7 dias"</li>
                <li><strong>Tarefas críticas da semana:</strong> Banco de tarefas filtrado por "vence nos próximos 5 dias + prioridade alta"</li>
                <li><strong>MRR total:</strong> Rollup do CRM somando o valor de todos os clientes ativos</li>
                <li><strong>Capacidade disponível:</strong> Linked view do banco de equipe mostrando horas livres</li>
                <li><strong>Projetos abertos por status:</strong> Agrupamento do banco de projetos para visão macro do pipeline de entrega</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Todos esses números atualizam automaticamente à medida que a equipe trabalha. Sem exportar planilha, sem pedir relatório, sem reunião para "ver como estamos".
              </p>

              <h2 id="automacoes" className="text-3xl font-bold mt-12 mb-6">Automações que toda agência deveria ter</h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                O Notion tem automações nativas (configuradas dentro do banco de dados) e integrações externas via Zapier ou Make. As automações abaixo são as de maior impacto para agências:
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold mb-2">1. Prospect aceita proposta → Projeto criado automaticamente</h3>
                  <p className="text-muted-foreground text-sm">Trigger: status do cliente muda para "Cliente ativo". Ação: cria projeto no banco de projetos com template padrão, já linkado ao cliente, com o gerente de projetos notificado via Slack.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold mb-2">2. Prazo de tarefa em 48h → Alerta automático</h3>
                  <p className="text-muted-foreground text-sm">Trigger: tarefa com prazo em 2 dias + status ≠ concluído. Ação: notificação para o responsável e para o gerente de projeto. Sem microgestão manual.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold mb-2">3. Projeto entregue → Pesquisa de NPS automática</h3>
                  <p className="text-muted-foreground text-sm">Trigger: status do projeto muda para "Entregue". Ação: e-mail com pesquisa de uma pergunta enviado ao cliente via Resend/Mailchimp. Resposta vai para campo NPS no CRM.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold mb-2">4. Formulário de novo lead → Entrada no CRM</h3>
                  <p className="text-muted-foreground text-sm">Trigger: formulário no site é preenchido (Typeform, Tally, Google Forms). Ação: cria entrada no banco de clientes com status "Prospect" e notifica o responsável comercial.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold mb-2">5. Segunda-feira → Resumo semanal de projetos</h3>
                  <p className="text-muted-foreground text-sm">Trigger: toda segunda às 8h. Ação: via Make, gera um relatório com projetos atrasados e projetos com prazo na semana, enviado por e-mail ou Slack para a liderança.</p>
                </div>
              </div>

              <h2 id="implementacao" className="text-3xl font-bold mt-12 mb-6">Roteiro de implementação em 8 semanas</h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Implementar os 5 pilares de uma vez é a receita para fracasso. O workspace fica pela metade, a equipe não sabe o que usar, e em 30 dias todo mundo volta para as ferramentas antigas. O roteiro a seguir funciona porque cada fase entrega valor imediato antes de avançar.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { weeks: "Semanas 1-2", title: "CRM", desc: "Configure o banco de clientes. Migre os 15 clientes mais importantes com histórico básico e próxima ação definida. Configure as 4 views essenciais. Na semana 2, você já terá clareza sobre qual cliente precisa de atenção." },
                  { weeks: "Semanas 3-4", title: "Projetos e Tarefas", desc: "Crie o banco de projetos e conecte ao CRM. Migre todos os projetos ativos. Crie o banco de tarefas e o template de onboarding de novos projetos. Configure Kanban e Calendário." },
                  { weeks: "Semanas 5-6", title: "Base de Conhecimento", desc: "Documente os 5 processos mais críticos e crie os 3 templates mais usados (briefing, proposta, relatório de reunião). Configure o onboarding de novos membros." },
                  { weeks: "Semanas 7", title: "Equipe e Dashboard", desc: "Configure o banco de equipe com capacidade e rollups de carga. Monte o dashboard executivo com as views embutidas dos outros módulos." },
                  { weeks: "Semanas 8", title: "Automações", desc: "Com os módulos estáveis, configure as 3 automações de maior impacto: novo prospect, prazo vencendo, projeto entregue. Teste cada uma antes de ativar." },
                ].map((item) => (
                  <div key={item.weeks} className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <div className="text-sm text-primary font-semibold mb-1">{item.weeks}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 id="cases" className="text-3xl font-bold mt-12 mb-6">Cases: resultados de agências reais</h2>

              <div className="space-y-6 mb-8">
                <div className="bg-primary/5 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Agência de conteúdo — 8 pessoas</h3>
                  <p className="text-muted-foreground mb-3"><strong>Situação:</strong> Clientes gerenciados por planilha, projetos no Trello, processos "na cabeça" da sócia fundadora. Novos contratados levavam 3 semanas para entrar no ritmo.</p>
                  <p className="text-muted-foreground mb-3"><strong>Implementação:</strong> CRM + Projetos + Base de Conhecimento em 6 semanas.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { value: "↓65%", label: "Perguntas repetitivas" },
                      { value: "3 dias", label: "Tempo de onboarding" },
                      { value: "100%", label: "Projetos no prazo" },
                      { value: "↑40%", label: "Satisfação da equipe" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/5 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Consultoria de estratégia — 15 pessoas</h3>
                  <p className="text-muted-foreground mb-3"><strong>Situação:</strong> 3 ferramentas diferentes para projetos (Notion, Asana e email), CRM inexistente, clientes perdendo follow-up. Taxa de churn de 30% ao ano.</p>
                  <p className="text-muted-foreground mb-3"><strong>Implementação:</strong> Workspace completo com os 5 pilares em 8 semanas.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { value: "↓80%", label: "Reuniões de alinhamento" },
                      { value: "↓15%", label: "Churn anual" },
                      { value: "12h", label: "Tempo recuperado/semana" },
                      { value: "2 novos", label: "Clientes sem contratar" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h2 id="faq" className="text-3xl font-bold mt-12 mb-6">Perguntas frequentes</h2>

              <div className="space-y-6 mb-8">
                <div className="border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">O Notion substitui completamente o HubSpot para agências?</h3>
                  <p className="text-muted-foreground">Para agências de até 30-50 clientes ativos, sim. O CRM no Notion cobre o essencial: pipeline comercial, histórico de interações, follow-up agendado e conexão com projetos. O HubSpot faz sentido quando você tem centenas de leads para nutrir com automações de marketing complexas — o que não é o modelo da maioria das agências de serviço.</p>
                </div>
                <div className="border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Quanto tempo a equipe leva para se adaptar ao Notion?</h3>
                  <p className="text-muted-foreground">A curva de aprendizado depende da complexidade do workspace. Para as funcionalidades básicas (criar páginas, atualizar status de projetos, usar views), a maioria das equipes se adapta em 3-5 dias de uso real. Para funcionalidades avançadas (criar novos bancos de dados, configurar relações), contam-se semanas. A estratégia recomendada é implementar simples e ir complexificando com o tempo.</p>
                </div>
                <div className="border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">O Notion funciona para agências com equipes remotas?</h3>
                  <p className="text-muted-foreground">Muito bem. O Notion foi desenhado para trabalho assíncrono — qualquer membro da equipe, em qualquer fuso, consegue ver o status atual de qualquer projeto sem precisar perguntar para ninguém. Comentários nas páginas substituem grande parte das reuniões de alinhamento. Muitas agências completamente remotas relatam que o Notion é a ferramenta que mais contribuiu para a operação funcionar sem escritório físico.</p>
                </div>
                <div className="border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Posso usar o Notion para gestão financeira da agência?</h3>
                  <p className="text-muted-foreground">Para controle básico de receita (MRR por cliente, valor de contratos, receita prevista vs. realizada), sim — com fórmulas e rollups no Notion. Para contabilidade, emissão de notas e fluxo de caixa detalhado, uma ferramenta especializada de gestão financeira complementa melhor. O Notion serve como "hub de visibilidade financeira para o gestor", não como sistema contábil.</p>
                </div>
                <div className="border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Como garantir que a equipe atualize o Notion regularmente?</h3>
                  <p className="text-muted-foreground">O principal driver de adoção é o gestor usar o Notion como fonte única de verdade para todas as decisões. Se o gestor pede update de projeto no WhatsApp, a equipe não atualiza o Notion. Se o gestor consulta o Notion antes de qualquer reunião e só discute o que está desatualizado, a equipe aprende rapidamente que atualizar o sistema é uma necessidade — não uma obrigação burocrática. Rituais como o standup semanal feito dentro do Notion aceleram muito a adoção.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão: O workspace de agência que escala com você</h2>

              <p className="text-lg leading-relaxed mb-6">
                O Notion para agências não é sobre usar uma ferramenta nova. É sobre construir uma infraestrutura operacional que cresce com a empresa. Uma agência com 5 pessoas hoje pode ter o mesmo workspace funcionando com 30 pessoas em dois anos — porque os sistemas foram desenhados para escalar.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Em 2026, a vantagem competitiva de uma agência não é ter o melhor talento ou o melhor preço — é conseguir operar com consistência, previsibilidade e qualidade em escala. O Notion, quando bem configurado, é a fundação técnica dessa vantagem.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Comece pelo CRM esta semana. Dois dias de configuração e você terá visibilidade completa dos seus clientes e próximas ações. Os outros pilares seguem naturalmente — e em 8 semanas, sua agência estará operando de um jeito que parece diferente.
              </p>

            </div>

            <BlogCTA variant="default" location="notion-agencias-guia-2026" />
            <AuthorBio />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotionAgenciasGuia2026;
