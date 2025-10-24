import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import notionVsPlanilhasImage from "@/assets/blog/notion-vs-planilhas.jpg";

const NotionVsPlanilhas = () => {
  const relatedPosts = [
    { title: "O Poder do Notion para Empresas Produtivas", slug: "poder-do-notion-empresas-produtivas" },
    { title: "Sistema Completo no Notion: Da Configuração à Automação", slug: "sistema-completo-notion-automacao" },
    { title: "3 Sistemas Prontos no Notion que Toda Pequena Empresa Deveria Ter", slug: "sistemas-notion-pequenas-empresas" }
  ];

  const articleUrl = "https://focusinteligente.com.br/blog/notion-vs-planilhas";
  const imageUrl = "https://focusinteligente.com.br" + notionVsPlanilhasImage;
  const publishDate = "2025-01-20";
  const modifiedDate = "2025-01-20";

  return (
    <>
      <Helmet>
        <title>Notion vs Planilhas: O que Empresas Modernas Usam Para Crescer | Focus</title>
        <meta name="description" content="Descubra por que empresas em crescimento estão migrando de planilhas para Notion e como essa mudança pode acelerar resultados em até 3x." />
        <meta name="keywords" content="notion vs excel, notion vs planilhas, gestão empresarial, ferramentas de gestão, produtividade empresarial, sistemas de gestão, notion para empresas" />
        <link rel="canonical" href={articleUrl} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Notion vs Planilhas: O que Empresas Modernas Usam Para Crescer" />
        <meta property="og:description" content="Descubra por que empresas em crescimento estão migrando de planilhas para Notion e como essa mudança pode acelerar resultados em até 3x." />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:site_name" content="Focus Inteligente" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={modifiedDate} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Notion vs Planilhas: O que Empresas Modernas Usam Para Crescer" />
        <meta name="twitter:description" content="Descubra por que empresas em crescimento estão migrando de planilhas para Notion e como essa mudança pode acelerar resultados em até 3x." />
        <meta name="twitter:image" content={imageUrl} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Notion vs Planilhas: o que as empresas modernas estão usando para crescer mais rápido",
            "image": imageUrl,
            "datePublished": publishDate,
            "dateModified": modifiedDate,
            "author": {
              "@type": "Organization",
              "name": "Focus Inteligente"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Focus Inteligente",
              "logo": {
                "@type": "ImageObject",
                "url": "https://focusinteligente.com.br/lovable-uploads/focus-logo.png"
              }
            },
            "description": "Descubra por que empresas em crescimento estão migrando de planilhas para Notion e como essa mudança pode acelerar resultados em até 3x.",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": articleUrl
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://focusinteligente.com.br" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://focusinteligente.com.br/blog" },
              { "@type": "ListItem", "position": 3, "name": "Notion vs Planilhas", "item": articleUrl }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "O Notion substitui completamente as planilhas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Para gestão de projetos, processos e informações sim. Para análises financeiras complexas ou grandes volumes de dados numéricos, planilhas ainda são superiores. O ideal é usar cada ferramenta para seu propósito: Notion para gestão operacional e estratégica, planilhas para análises numéricas detalhadas."
                }
              },
              {
                "@type": "Question",
                "name": "Quanto custa migrar de planilhas para Notion?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O Notion oferece plano gratuito robusto. Planos pagos começam em $8/usuário/mês (Plus) e $15/usuário/mês (Business). O investimento em templates profissionais acelera drasticamente a implementação, custando de R$ 297 a R$ 997 dependendo da complexidade."
                }
              },
              {
                "@type": "Question",
                "name": "Quanto tempo leva para migrar de planilhas para Notion?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Com templates prontos, uma pequena empresa pode ter o sistema básico funcionando em 1 semana. A migração completa de dados e processos leva de 2 a 4 semanas. Sem templates, o processo pode levar de 2 a 6 meses."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <article className="min-h-screen bg-background py-20">
        <div className="container-focus max-w-4xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">Notion vs Planilhas</span>
          </nav>

          <img 
            src={notionVsPlanilhasImage} 
            alt="Comparação entre Notion e planilhas para gestão empresarial" 
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Notion vs Planilhas: o que as empresas modernas estão usando para crescer mais rápido
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              A comparação definitiva entre ferramentas tradicionais e a nova geração de sistemas empresariais
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Gestão Empresarial</span>
              <time dateTime={publishDate}>20 de janeiro de 2025</time>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                10 min de leitura
              </span>
            </div>
          </header>

          <div className="bg-card border rounded-lg p-6 mb-12">
            <h2 className="text-lg font-semibold mb-4">Neste artigo você vai descobrir:</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Por que empresas em crescimento estão abandonando planilhas</li>
              <li>• Comparação direta: Notion vs Excel em 7 critérios</li>
              <li>• Quando usar Notion e quando usar planilhas</li>
              <li>• Casos reais de empresas que cresceram 3x após migração</li>
              <li>• Guia prático de migração de planilhas para Notion</li>
            </ul>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
              <p className="font-semibold text-lg mb-2">⚡ Resposta Rápida</p>
              <p className="text-muted-foreground">
                Empresas modernas usam Notion para gestão operacional, projetos e processos (65% mais eficiente que planilhas) e mantêm Excel/Sheets apenas para análises financeiras complexas. O Notion oferece colaboração em tempo real, automações nativas e visualizações múltiplas que planilhas não conseguem replicar.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">O Problema com Planilhas na Gestão Moderna</h2>
            
            <p className="mb-6">
              Se sua empresa ainda gerencia projetos, processos e informações em planilhas, você não está sozinho. <strong>73% das pequenas e médias empresas</strong> ainda dependem primariamente de Excel ou Google Sheets para gestão operacional.
            </p>

            <p className="mb-6">
              Mas há um problema: <strong>planilhas foram criadas há mais de 40 anos</strong> para um mundo de trabalho completamente diferente. Elas são excelentes para cálculos numéricos, mas terríveis para gestão de informações complexas e colaboração em equipe.
            </p>

            <p className="mb-6">
              Enquanto isso, empresas que estão crescendo rapidamente (especialmente startups e empresas digitais) migraram para ferramentas como Notion – e estão vendo resultados surpreendentes.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Notion vs Planilhas: A Comparação Completa</h2>

            <div className="bg-card border rounded-lg overflow-hidden mb-8">
              <table className="w-full text-left">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="p-4">Critério</th>
                    <th className="p-4">Planilhas</th>
                    <th className="p-4">Notion</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 font-semibold">Gestão de Projetos</td>
                    <td className="p-4">⭐⭐ Limitado</td>
                    <td className="p-4">⭐⭐⭐⭐⭐ Excelente</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Colaboração em Tempo Real</td>
                    <td className="p-4">⭐⭐⭐ Básico</td>
                    <td className="p-4">⭐⭐⭐⭐⭐ Avançado</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Cálculos Numéricos</td>
                    <td className="p-4">⭐⭐⭐⭐⭐ Superior</td>
                    <td className="p-4">⭐⭐⭐ Básico</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Visualizações</td>
                    <td className="p-4">⭐⭐ Grade apenas</td>
                    <td className="p-4">⭐⭐⭐⭐⭐ Múltiplas</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Base de Conhecimento</td>
                    <td className="p-4">⭐ Muito fraco</td>
                    <td className="p-4">⭐⭐⭐⭐⭐ Ideal</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Automações</td>
                    <td className="p-4">⭐⭐ Requer macros</td>
                    <td className="p-4">⭐⭐⭐⭐ Nativo</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Curva de Aprendizado</td>
                    <td className="p-4">⭐⭐⭐⭐ Familiar</td>
                    <td className="p-4">⭐⭐⭐ Médio</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Por Que Empresas em Crescimento Estão Migrando</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">1. Colaboração Real vs "Colaboração" de Planilhas</h3>
            
            <p className="mb-6">
              Embora Google Sheets permita colaboração, a experiência é limitada. No Notion, você pode:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Comentar em qualquer elemento (não apenas células)</li>
              <li>Mencionar pessoas diretamente (@nome)</li>
              <li>Ver quem está visualizando em tempo real</li>
              <li>Criar páginas dentro de páginas (hierarquia infinita)</li>
              <li>Embedar arquivos, links, vídeos e ferramentas externas</li>
            </ul>

            <p className="mb-6">
              <strong>Resultado prático:</strong> Equipes reduzem o tempo gasto em alinhamentos em até 40%.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2. Uma Ferramenta vs Dez Planilhas Diferentes</h3>
            
            <p className="mb-6">
              Em planilhas, você inevitavelmente termina com:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Planilha de projetos</li>
              <li>Planilha de tarefas</li>
              <li>Planilha de clientes</li>
              <li>Planilha de processos</li>
              <li>Planilha de reuniões...</li>
            </ul>

            <p className="mb-6">
              No Notion, tudo isso vive em um único workspace interconectado. Você pode linkar um projeto a clientes específicos, tarefas relacionadas e documentos de processos – tudo sem duplicação de dados.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3. Visualizações Múltiplas dos Mesmos Dados</h3>
            
            <p className="mb-6">
              Este é talvez o maior diferencial. No Notion, você cria seus dados UMA vez e pode visualizá-los de múltiplas formas:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Tabela:</strong> Como uma planilha tradicional</li>
              <li><strong>Board:</strong> Estilo Kanban para gestão visual</li>
              <li><strong>Timeline:</strong> Linha do tempo de projetos</li>
              <li><strong>Calendar:</strong> Visualização de calendário</li>
              <li><strong>Gallery:</strong> Cards visuais com imagens</li>
              <li><strong>List:</strong> Lista simples e rápida</li>
            </ul>

            <p className="mb-6">
              Imagine ter uma base de projetos e poder visualizá-la como Kanban para a equipe operacional, timeline para o gerente e tabela para o financeiro – <strong>sem duplicar nenhum dado</strong>.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">4. Templates e Automações Nativas</h3>
            
            <p className="mb-6">
              Em planilhas, criar templates e automações requer conhecimento de macros e scripts. No Notion, é nativo:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Crie um template de projeto e replique instantaneamente</li>
              <li>Defina propriedades que calculam automaticamente</li>
              <li>Configure notificações baseadas em mudanças</li>
              <li>Crie relacionamentos entre bases de dados</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Quando Usar Cada Ferramenta</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">✅ Use Planilhas Para:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Análises financeiras complexas</li>
                  <li>• Modelagem de dados numéricos</li>
                  <li>• Projeções e cenários</li>
                  <li>• Grandes volumes de dados para análise</li>
                  <li>• Gráficos e dashboards numéricos</li>
                </ul>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">✅ Use Notion Para:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Gestão de projetos e tarefas</li>
                  <li>• Base de conhecimento empresarial</li>
                  <li>• Processos e documentação</li>
                  <li>• CRM simples e gestão de clientes</li>
                  <li>• Planejamento estratégico</li>
                  <li>• Colaboração em equipe</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Cases Reais: Antes e Depois da Migração</h2>

            <div className="bg-card border rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">🚀 Case 1: Agência de Marketing Digital (12 pessoas)</h3>
              <p className="text-muted-foreground mb-3">
                <strong>Antes:</strong> 15 planilhas diferentes para gerenciar clientes, projetos e tarefas. Tempo médio de onboarding de novos funcionários: 3 semanas.
              </p>
              <p className="text-muted-foreground mb-3">
                <strong>Depois (Notion):</strong> Sistema único integrado. Onboarding reduzido para 3 dias. Capacidade aumentou de 8 para 12 clientes simultâneos com a mesma equipe.
              </p>
              <p className="text-primary font-semibold">
                Resultado: +50% de capacidade sem contratar
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">💼 Case 2: Consultoria de Processos (7 pessoas)</h3>
              <p className="text-muted-foreground mb-3">
                <strong>Antes:</strong> Planilhas desatualizadas, informações duplicadas, retrabalho constante.
              </p>
              <p className="text-muted-foreground mb-3">
                <strong>Depois (Notion):</strong> Base de conhecimento centralizada, templates de projetos, processos documentados. Tempo de entrega de projetos reduzido em 35%.
              </p>
              <p className="text-primary font-semibold">
                Resultado: 35% mais rápido nos projetos
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">🎯 Case 3: Startup SaaS (25 pessoas)</h3>
              <p className="text-muted-foreground mb-3">
                <strong>Antes:</strong> Combinação de planilhas, Trello, Google Docs, Slack – informações espalhadas.
              </p>
              <p className="text-muted-foreground mb-3">
                <strong>Depois (Notion):</strong> Tudo centralizado no Notion. Documentação, projetos, roadmap, OKRs e base de conhecimento.
              </p>
              <p className="text-primary font-semibold">
                Resultado: De 4 ferramentas pagas para 1
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Guia Prático de Migração (Passo a Passo)</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-card border-l-4 border-primary p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-3">Fase 1: Preparação (Semana 1)</h3>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Audite suas planilhas atuais: quais você realmente usa?</li>
                  <li>Identifique os 3 processos mais críticos para migrar primeiro</li>
                  <li>Defina sua estrutura de workspace no Notion</li>
                  <li>Crie templates básicos ou adquira templates profissionais</li>
                </ul>
              </div>

              <div className="bg-card border-l-4 border-primary p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-3">Fase 2: Migração Piloto (Semana 2-3)</h3>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Migre apenas 1 processo ou equipe como teste</li>
                  <li>Treine a equipe piloto (2-3 pessoas chave)</li>
                  <li>Rode em paralelo com as planilhas por 2 semanas</li>
                  <li>Colete feedback e ajuste o sistema</li>
                </ul>
              </div>

              <div className="bg-card border-l-4 border-primary p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-3">Fase 3: Expansão (Semana 4-6)</h3>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Migre demais processos e equipes gradualmente</li>
                  <li>Treine todos os usuários (sessões de 30min)</li>
                  <li>Mantenha planilhas como backup por 30 dias</li>
                  <li>Documente processos e crie FAQs internos</li>
                </ul>
              </div>

              <div className="bg-card border-l-4 border-primary p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-3">Fase 4: Otimização (Contínuo)</h3>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Adicione automações e integrações</li>
                  <li>Refine templates baseado no uso real</li>
                  <li>Expanda para novos casos de uso</li>
                  <li>Mensure ganhos de produtividade</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 my-12">
              <h3 className="text-2xl font-bold mb-4">Comece Sua Migração Hoje com Templates Profissionais</h3>
              <p className="text-muted-foreground mb-6">
                Economize meses de trabalho com nossos <Link to="/sistemas-notion" className="text-primary hover:underline">Sistemas Empresariais no Notion</Link> já otimizados. Templates profissionais que cobrem gestão de projetos, processos, clientes, financeiro e muito mais.
              </p>
              <Link 
                to="/sistemas-notion"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Conhecer Sistemas Prontos
              </Link>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão: A Ferramenta Certa Para Cada Propósito</h2>

            <p className="mb-6">
              A questão não é "Notion ou planilhas?", mas sim <strong>"Notion E planilhas"</strong>. Cada ferramenta tem seu lugar:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Use Notion</strong> para gestão operacional, colaboração e base de conhecimento</li>
              <li><strong>Use planilhas</strong> para análises financeiras e modelagem numérica complexa</li>
            </ul>

            <p className="mb-6">
              Empresas modernas que estão crescendo rápido já entenderam isso. Elas usam Notion como sistema operacional da empresa e mantêm planilhas apenas para casos específicos onde são realmente superiores.
            </p>

            <p className="mb-6">
              A migração pode parecer assustadora, mas com a abordagem certa (e templates profissionais), sua empresa pode estar completamente operando no Notion em 4-6 semanas. E os resultados – em produtividade, clareza e capacidade de crescimento – compensam muito o investimento inicial.
            </p>

            <div className="bg-card border rounded-lg p-6 my-12">
              <h2 className="text-2xl font-bold mb-6">❓ Perguntas Frequentes</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">O Notion substitui completamente as planilhas?</h3>
                  <p className="text-muted-foreground">
                    Para gestão de projetos, processos e informações sim. Para análises financeiras complexas ou grandes volumes de dados numéricos, planilhas ainda são superiores. O ideal é usar cada ferramenta para seu propósito: Notion para gestão operacional e estratégica, planilhas para análises numéricas detalhadas.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Quanto custa migrar de planilhas para Notion?</h3>
                  <p className="text-muted-foreground">
                    O Notion oferece plano gratuito robusto. Planos pagos começam em $8/usuário/mês (Plus) e $15/usuário/mês (Business). O investimento em templates profissionais acelera drasticamente a implementação, custando de R$ 297 a R$ 997 dependendo da complexidade.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Quanto tempo leva para migrar de planilhas para Notion?</h3>
                  <p className="text-muted-foreground">
                    Com templates prontos, uma pequena empresa pode ter o sistema básico funcionando em 1 semana. A migração completa de dados e processos leva de 2 a 4 semanas. Sem templates, o processo pode levar de 2 a 6 meses.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">O Notion funciona offline?</h3>
                  <p className="text-muted-foreground">
                    Sim, o Notion tem funcionalidade offline. Mudanças feitas offline sincronizam automaticamente quando você volta a ter conexão. Porém, recursos de colaboração em tempo real obviamente requerem conexão.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">É possível importar dados de planilhas para o Notion?</h3>
                  <p className="text-muted-foreground">
                    Sim! O Notion permite importar arquivos CSV diretamente. Você pode exportar suas planilhas como CSV e importar para criar databases no Notion, mantendo a estrutura de dados. Templates profissionais já vêm com estruturas otimizadas para facilitar essa migração.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-8 mt-12">
              <h3 className="text-xl font-semibold mb-4">📚 Artigos Relacionados</h3>
              <div className="grid gap-4">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="block p-4 bg-card border rounded-lg hover:border-primary transition-colors"
                  >
                    <span className="text-primary">→</span> {post.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para o Blog
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default NotionVsPlanilhas;