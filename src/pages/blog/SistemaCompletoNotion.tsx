import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import sistemaCompletoImage from "@/assets/blog/sistema-completo-notion.jpg";

const SistemaCompletoNotion = () => {
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
        <title>Sistema Completo no Notion: Empresa no Piloto Automático | Focus</title>
        <meta 
          name="description" 
          content="Crie automações inteligentes e processos integrados que fazem sua empresa operar sozinha enquanto você foca no estratégico." 
        />
        <meta name="keywords" content="automação notion, sistema empresarial, notion avançado, processos automatizados, gestão automática" />
        <link rel="canonical" href="https://focusinteligente.com/blog/sistema-completo-notion-automacao" />
      </Helmet>

      <article className="min-h-screen pt-24 pb-16">
        <div className="container-focus mb-8">
          <nav className="flex items-center space-x-2 text-sm text-foreground-muted">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">Sistema Completo no Notion</span>
          </nav>
        </div>

        <div className="container-focus mb-8">
          <div className="aspect-video overflow-hidden rounded-2xl">
            <img 
              src={sistemaCompletoImage} 
              alt="Sistema completo de gestão empresarial no Notion"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="container-focus max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-sm text-foreground-muted">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                Automação
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>10 de janeiro de 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min de leitura</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Como montar um sistema completo no Notion e fazer sua empresa funcionar no piloto automático
            </h1>

            <p className="text-xl text-foreground-muted leading-relaxed">
              Crie automações inteligentes e processos integrados que fazem sua empresa operar sozinha enquanto você foca no estratégico.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-12 mb-6">O que é um sistema completo de gestão?</h2>
            
            <p className="text-foreground-muted leading-relaxed mb-6">
              Um sistema completo de gestão no Notion não é apenas organizar informações. É criar uma máquina integrada onde cada parte conversa com a outra, processos acontecem automaticamente, e sua empresa opera de forma previsível — mesmo quando você não está olhando.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Imagine uma empresa onde: novos clientes são automaticamente adicionados ao CRM, projetos geram tarefas automaticamente para a equipe, relatórios são atualizados em tempo real, e você tem visibilidade total de tudo em dashboards personalizados.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Isso não é ficção. É o que acontece quando você monta um sistema completo no Notion.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Os 5 módulos essenciais de um sistema completo</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">1. CRM (Gestão de Clientes)</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Seu CRM deve centralizar todas as informações de clientes: histórico de conversas, projetos realizados, propostas enviadas, contratos ativos, e próximos passos. Cada interação é registrada, nada se perde.
            </p>
            <p className="text-foreground-muted leading-relaxed mb-6">
              <strong>Automação chave:</strong> Quando um projeto é concluído, o sistema automaticamente agenda um follow-up para daqui a 30 dias e move o cliente para a lista de "oportunidades de upsell".
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2. Gestão de Projetos</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Todos os projetos da empresa em um só lugar, com tarefas conectadas, prazos monitorados, e responsáveis definidos. Você vê exatamente o que está acontecendo, o que está atrasado, e onde precisa intervir.
            </p>
            <p className="text-foreground-muted leading-relaxed mb-6">
              <strong>Automação chave:</strong> Quando um projeto muda de status, todas as pessoas envolvidas são notificadas automaticamente. Quando um prazo se aproxima, alertas são enviados.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3. Gestão de Equipe</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Base de dados completa da equipe: informações de contato, documentos, avaliações de desempenho, metas individuais, e histórico de projetos. Tudo centralizado e acessível.
            </p>
            <p className="text-foreground-muted leading-relaxed mb-6">
              <strong>Automação chave:</strong> Dashboards personalizados mostram a carga de trabalho de cada pessoa em tempo real, evitando sobrecarga e distribuindo trabalho de forma equilibrada.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">4. Base de Conhecimento</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Documentação de todos os processos, políticas, templates, e melhores práticas da empresa. Quando alguém novo entra, tem tudo que precisa saber em um só lugar. Quando surge uma dúvida, a resposta está documentada.
            </p>
            <p className="text-foreground-muted leading-relaxed mb-6">
              <strong>Automação chave:</strong> Sistema de tags e busca inteligente que facilita encontrar qualquer informação em segundos.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">5. Dashboard Executivo</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Visão consolidada de toda a operação: projetos em andamento, receita do mês, clientes ativos, tarefas críticas, e indicadores principais. Tudo em uma página que você abre e sabe exatamente como está sua empresa.
            </p>
            <p className="text-foreground-muted leading-relaxed mb-6">
              <strong>Automação chave:</strong> Todos os dados são atualizados automaticamente em tempo real. Você nunca precisa atualizar manualmente uma planilha ou dashboard.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Como integrar tudo: a chave está nas relações</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O poder de um sistema completo vem das conexões entre os módulos. No Notion, você faz isso com "relations" (relações) entre bancos de dados:
            </p>

            <ul className="list-disc pl-6 mb-6 text-foreground-muted">
              <li className="mb-2">Clientes conectados a Projetos</li>
              <li className="mb-2">Projetos conectados a Tarefas</li>
              <li className="mb-2">Tarefas conectadas a Pessoas da Equipe</li>
              <li className="mb-2">Projetos conectados a Documentos na Base de Conhecimento</li>
            </ul>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Quando tudo está conectado, você consegue responder perguntas complexas instantaneamente: Quais projetos esse cliente tem? Quem está trabalhando nisso? Quanto já faturamos com ele? Quais tarefas estão atrasadas?
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Automações que transformam operação manual em piloto automático</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Com integrações via Zapier, Make, ou API do Notion, você pode automatizar:
            </p>

            <ul className="list-disc pl-6 mb-6 text-foreground-muted">
              <li className="mb-2"><strong>Novos leads:</strong> Formulário preenchido no site → Cliente criado no CRM → Notificação para vendedor</li>
              <li className="mb-2"><strong>Fechamento de projeto:</strong> Status alterado para "Concluído" → Email de satisfação enviado → Follow-up agendado → NPS registrado</li>
              <li className="mb-2"><strong>Onboarding:</strong> Novo funcionário → Criar perfil → Atribuir tarefas de integração → Agendar reuniões → Dar acessos</li>
              <li className="mb-2"><strong>Relatórios:</strong> Todo início de semana → Compilar dados → Gerar relatório → Enviar para stakeholders</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Os resultados de operar no piloto automático</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Empresas que implementam um sistema completo no Notion experimentam transformações profundas:
            </p>

            <ul className="list-disc pl-6 mb-6 text-foreground-muted">
              <li className="mb-2"><strong>Economia de 10-15 horas semanais</strong> em tarefas administrativas manuais</li>
              <li className="mb-2"><strong>Redução de 80%</strong> em informações perdidas ou esquecidas</li>
              <li className="mb-2"><strong>Onboarding 3x mais rápido</strong> de novos funcionários</li>
              <li className="mb-2"><strong>Visibilidade total</strong> da operação sem precisar ficar perguntando status</li>
              <li className="mb-2"><strong>Escalabilidade</strong> — o sistema aguenta crescimento sem precisar de reestruturação</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Por onde começar</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Montar um sistema completo não acontece da noite para o dia. Mas você não precisa fazer tudo de uma vez. O caminho recomendado:
            </p>

            <ul className="list-disc pl-6 mb-6 text-foreground-muted">
              <li className="mb-2"><strong>Semana 1-2:</strong> Implemente gestão de projetos e tarefas</li>
              <li className="mb-2"><strong>Semana 3-4:</strong> Adicione CRM e conecte com projetos</li>
              <li className="mb-2"><strong>Semana 5-6:</strong> Crie base de conhecimento e documente processos</li>
              <li className="mb-2"><strong>Semana 7-8:</strong> Monte dashboard executivo e automações básicas</li>
              <li className="mb-2"><strong>Mês 3+:</strong> Refine e adicione automações avançadas</li>
            </ul>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O importante é começar. Cada módulo que você implementa já traz valor imediato. E conforme o sistema cresce, os benefícios se multiplicam exponencialmente.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Sua empresa no piloto automático</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Um sistema completo no Notion é mais que organização — é a diferença entre estar preso no operacional e ter tempo para pensar estrategicamente. É poder viajar sem que tudo desmorone. É crescer sem contratar 10 pessoas antes.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Se você quer fazer sua empresa operar no piloto automático, o primeiro passo é estruturar esse sistema. E quanto antes começar, antes vai colher os frutos.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-card-border">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-foreground-muted" />
              <span className="text-sm text-foreground-muted">Tags:</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Notion</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Automação</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Sistema Empresarial</span>
            </div>
          </div>

          <div className="mt-12 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Quer implementar um sistema completo?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Nossa consultoria monta o sistema perfeito para sua empresa — personalizado, automatizado e pronto para escalar.
            </p>
            <Link to="/sistemas-notion">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Conhecer Consultoria Notion
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

export default SistemaCompletoNotion;
