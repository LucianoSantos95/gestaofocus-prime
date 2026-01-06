import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import { ArrowLeft, Clock, Calendar, Share2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import coverImage from "@/assets/blog/erro-silencioso-produtividade.jpg";

const ErroSilenciosoProdutividade = () => {
  const publishDate = "2025-01-25";
  const articleUrl = "https://focusinteligente.com/blog/erro-produtividade-equipe";

  const tableOfContents = [
    { id: "introducao", title: "O Erro Que Ninguém Vê (Mas Todos Sofrem)" },
    { id: "problema", title: "O Erro Silencioso Revelado" },
    { id: "impacto", title: "O Custo Real Para Sua Equipe" },
    { id: "sinais", title: "5 Sinais de Que Sua Equipe Está Sofrendo" },
    { id: "solucao", title: "Como Eliminar Este Erro Para Sempre" },
    { id: "implementacao", title: "O Passo a Passo Para Implementar" },
    { id: "estudo-caso", title: "Caso Real: Como Uma Empresa Resolveu" },
    { id: "conclusao", title: "Conclusão" },
    { id: "faq", title: "Perguntas Frequentes" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual é o erro silencioso que destrói a produtividade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O erro silencioso mais comum é a ausência de um sistema centralizado de informações. Quando cada membro da equipe guarda informações em lugares diferentes (e-mails, mensagens, documentos pessoais), cria-se um caos invisível que consome horas diárias em busca de dados."
        }
      },
      {
        "@type": "Question",
        "name": "Como identificar se minha equipe sofre com este problema?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Observe se há perguntas repetidas, retrabalho constante, reuniões para 'alinhar' informações básicas, decisões atrasadas por falta de dados, e membros da equipe que são 'guardiões' de informações críticas."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo uma equipe perde com este erro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Estudos mostram que profissionais perdem em média 2-3 horas por dia procurando informações ou refazendo trabalhos por falta de documentação adequada. Em uma equipe de 10 pessoas, isso representa 20-30 horas diárias de produtividade perdida."
        }
      },
      {
        "@type": "Question",
        "name": "Como o Notion pode resolver este problema?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O Notion funciona como um cérebro digital da empresa, centralizando todas as informações importantes em um só lugar: processos, projetos, documentos, tarefas e conhecimento institucional. Tudo fica acessível, organizado e pesquisável."
        }
      }
    ]
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "O Erro Silencioso que Destrói a Produtividade de Qualquer Equipe (e Como Evitar)",
    "description": "Descubra o erro invisível que está custando horas de produtividade da sua equipe todos os dias e aprenda o método prático para eliminá-lo de uma vez por todas.",
    "image": `https://focusinteligente.com${coverImage}`,
    "author": {
      "@type": "Organization",
      "name": "Focus Gestão Empresarial"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Focus Gestão Empresarial",
      "logo": {
        "@type": "ImageObject",
        "url": "https://focusinteligente.com/lovable-uploads/focus-logo.png"
      }
    },
    "datePublished": publishDate,
    "dateModified": publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://focusinteligente.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://focusinteligente.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "O Erro Silencioso que Destrói a Produtividade",
        "item": articleUrl
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="O Erro Silencioso que Destrói a Produtividade de Qualquer Equipe | Focus"
        description="Descubra o erro invisível que está custando horas de produtividade da sua equipe todos os dias e aprenda o método prático para eliminá-lo."
        canonical="/blog/erro-produtividade-equipe"
        image={`https://focusinteligente.com${coverImage}`}
        type="article"
        publishedTime={publishDate}
        modifiedTime={publishDate}
        keywords="produtividade equipe, erro produtividade, gestão equipes, sistema centralizado, notion equipe, eficiência empresarial"
      />

      <article className="min-h-screen pt-24 pb-16">
        {/* Breadcrumbs */}
        <div className="container-focus mb-8">
          <nav className="flex items-center space-x-2 text-sm text-foreground-muted">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">O Erro Silencioso que Destrói a Produtividade</span>
          </nav>
        </div>

        {/* Header */}
        <header className="container-focus mb-12">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog"
              className="inline-flex items-center text-primary hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o blog
            </Link>

            <div className="inline-flex items-center px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-6">
              <BookOpen className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-foreground-muted">Gestão de Equipes</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              O Erro Silencioso que Destrói a Produtividade de Qualquer Equipe (e Como Evitar)
            </h1>

            <p className="text-xl text-foreground-muted mb-8">
              Descubra o erro invisível que está custando horas de produtividade da sua equipe todos os dias e aprenda o método prático para eliminá-lo de uma vez por todas.
            </p>

            <div className="flex items-center gap-6 text-sm text-foreground-muted mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={publishDate}>
                  {new Date(publishDate).toLocaleDateString('pt-BR')}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min de leitura</span>
              </div>
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Compartilhar</span>
              </button>
            </div>

            <img 
              src={coverImage} 
              alt="Gestão de equipes - Focus Inteligente mostra erro de produtividade em reunião empresarial desorganizada" 
              className="w-full rounded-lg shadow-xl mb-8"
            />
          </div>
        </header>

        {/* Table of Contents */}
        <aside className="container-focus mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-card-border rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Índice de Conteúdo
              </h2>
              <nav>
                <ol className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <li key={item.id}>
                      <a 
                        href={`#${item.id}`}
                        className="text-foreground-muted hover:text-primary transition-colors"
                      >
                        {index + 1}. {item.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </aside>

        {/* Content */}
        <div className="container-focus">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section id="introducao" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">O Erro Que Ninguém Vê (Mas Todos Sofrem)</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                Você já parou para observar quantas vezes por dia sua equipe faz a mesma pergunta? Quantas reuniões são marcadas apenas para "alinhar informações básicas"? Ou quantas vezes alguém diz: "Deixa eu procurar aqui no meu e-mail..."
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Esse é o sintoma de um erro silencioso que está destruindo a produtividade da sua equipe todos os dias - e o pior é que ninguém percebe.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Enquanto você se preocupa com reuniões improdutivas, prazos estourados e retrabalho constante, o verdadeiro vilão está operando nas sombras: <strong>a ausência de um sistema centralizado de informações</strong>.
              </p>
            </section>

            <section id="problema" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">O Erro Silencioso Revelado</h2>
              
              <div className="bg-primary/10 rounded-lg p-6 mb-6">
                <p className="text-lg font-semibold mb-2">Definição Rápida:</p>
                <p className="text-lg">
                  <strong>Erro silencioso de produtividade</strong> é quando cada membro da equipe guarda informações críticas em lugares diferentes, criando um caos invisível que consome horas diárias.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-4">
                O erro não é sua equipe ser desorganizada. Não é falta de compromisso. E definitivamente não é falta de ferramentas - você provavelmente já tem dezenas delas.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Quando não há um <Link to="/blog/sistema-produtividade-passo-passo" className="text-primary hover:underline">sistema centralizado de gestão</Link>, o erro é este: <strong>cada membro da equipe guarda informações críticas em lugares diferentes</strong>.
              </p>

              <div className="bg-card border-l-4 border-primary p-6 my-8">
                <h3 className="text-xl font-bold mb-3">O Caos Invisível</h3>
                <ul className="space-y-2">
                  <li>• João guarda os processos no Google Drive dele</li>
                  <li>• Maria tem todas as senhas num documento pessoal</li>
                  <li>• Carlos anota tarefas no bloco de notas</li>
                  <li>• Ana documenta tudo em e-mails que ninguém mais consegue achar</li>
                  <li>• Pedro tem os contatos importantes só no celular dele</li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed mb-4">
                Quando a informação está espalhada, ela pode até estar organizada individualmente - mas para a empresa, é caos total.
              </p>
            </section>

            <section id="impacto" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">O Custo Real Para Sua Equipe</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                Vamos ser diretos com os números. Estudos da consultoria McKinsey mostram que profissionais gastam em média:
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-card border border-card-border rounded-lg p-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">19%</p>
                  <p className="text-foreground-muted">do tempo procurando informações</p>
                </div>
                <div className="bg-card border border-card-border rounded-lg p-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">14%</p>
                  <p className="text-foreground-muted">em comunicação interna</p>
                </div>
                <div className="bg-card border border-card-border rounded-lg p-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">8%</p>
                  <p className="text-foreground-muted">refazendo trabalhos já feitos</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-4">
                Isso significa que <strong>41% do tempo da sua equipe</strong> está sendo desperdiçado por causa deste erro silencioso. Em uma equipe de 10 pessoas trabalhando 8 horas por dia, são mais de 32 horas diárias jogadas fora.
              </p>
            </section>

            <section id="sinais" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">5 Sinais de Que Sua Equipe Está Sofrendo</h2>
              
              <div className="space-y-6">
                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">1. Perguntas Repetidas</h3>
                  <p>A mesma informação é pedida múltiplas vezes porque ninguém sabe onde ela está documentada.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">2. Gargalos Humanos</h3>
                  <p>Certas pessoas se tornam "guardiãs" de informações críticas. Quando elas saem de férias, nada funciona.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">3. Retrabalho Constante</h3>
                  <p>Projetos são refeitos porque ninguém sabia que alguém já tinha trabalhado naquilo antes.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">4. Reuniões de Alinhamento</h3>
                  <p>Você marca reuniões constantemente apenas para garantir que todos tenham as mesmas informações básicas.</p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">5. Decisões Atrasadas</h3>
                  <p>Decisões importantes ficam paradas porque faltam dados que "alguém tem em algum lugar".</p>
                </div>
              </div>
            </section>

            <section id="solucao" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Como Eliminar Este Erro Para Sempre</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                A solução não é adicionar mais uma ferramenta ao caos. A solução é criar um <strong>Sistema de Conhecimento Centralizado</strong> - um cérebro digital da empresa onde toda informação importante tem um lugar definido.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                É exatamente para isso que ferramentas como o Notion foram criadas. Não para substituir suas ferramentas atuais, mas para organizá-las em um sistema coerente. Se você está começando, veja nosso <Link to="/blog/sistema-produtividade-passo-passo" className="text-primary hover:underline">guia passo a passo para criar um sistema de produtividade</Link>.
              </p>

              <div className="bg-gradient-primary rounded-lg p-8 text-white my-8">
                <h3 className="text-2xl font-bold mb-4">O Que Deve Estar Centralizado:</h3>
                <ul className="space-y-3 text-lg">
                  <li>✓ Processos e procedimentos operacionais</li>
                  <li>✓ Projetos ativos e histórico de decisões</li>
                  <li>✓ Base de conhecimento da empresa</li>
                  <li>✓ Documentos importantes e modelos</li>
                  <li>✓ Contatos e fornecedores estratégicos</li>
                  <li>✓ Metas, KPIs e resultados</li>
                </ul>
              </div>
            </section>

            <section id="implementacao" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">O Passo a Passo Para Implementar</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Audite o Caos Atual</h3>
                    <p>Mapeie onde cada tipo de informação está hoje. Identifique os "guardiões" de conhecimento.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Defina a Estrutura</h3>
                    <p>Crie uma hierarquia clara: Empresa → Departamentos → Projetos → Documentos. Simples e escalável.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Migre o Essencial Primeiro</h3>
                    <p>Comece pelos processos mais críticos e documentos mais acessados. Não tente migrar tudo de uma vez.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Treine a Equipe</h3>
                    <p>Mostre como usar, onde encontrar o quê, e principalmente: como manter o sistema atualizado.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Estabeleça o Novo Padrão</h3>
                    <p>Crie a regra: "Se não está no sistema, não existe". E lidere pelo exemplo.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="estudo-caso" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Caso Real: Como Uma Empresa Resolveu</h2>
              
              <div className="bg-card border border-card-border rounded-lg p-8">
                <p className="text-lg font-semibold mb-4">Empresa: Agência de marketing digital com 25 colaboradores</p>
                
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Problema:</strong> A equipe perdia em média 2 horas por dia procurando informações de clientes, processos e projetos antigos. Havia 5 "pessoas-chave" que guardavam informações críticas.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  <strong>Solução:</strong> Implementaram um sistema centralizado no Notion em 30 dias, começando pelos processos de atendimento e gestão de projetos.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  <strong>Resultados em 90 dias:</strong>
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• Redução de 73% no tempo gasto procurando informações</li>
                  <li>• Diminuição de 60% nas reuniões de alinhamento</li>
                  <li>• Capacidade de atender 40% mais clientes com a mesma equipe</li>
                  <li>• ROI de 840% no primeiro ano considerando apenas tempo economizado</li>
                </ul>

                <p className="text-lg leading-relaxed italic">
                  "A maior diferença foi que finalmente conseguimos escalar sem contratar mais gente. As informações fluem sozinhas agora." - CEO da agência
                </p>
              </div>
            </section>

            <section id="conclusao" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Conclusão</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                O erro silencioso que destrói a produtividade não é falta de esforço, compromisso ou inteligência da sua equipe. É a ausência de um sistema que organize e centralize o conhecimento empresarial.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Quando você elimina esse erro, algo mágico acontece: as pessoas param de perder tempo procurando informações e começam a usar esse tempo para criar valor real. A equipe para de trabalhar no caos e começa a trabalhar no sistema.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                A pergunta não é se você deve resolver isso - é quanto tempo mais você vai permitir que esse erro continue drenando a produtividade da sua equipe.
              </p>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes</h2>
              
              <div className="space-y-6">
                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Qual é o erro silencioso que destrói a produtividade?</h3>
                  <p className="text-foreground-muted">
                    O erro silencioso mais comum é a ausência de um sistema centralizado de informações. Quando cada membro da equipe guarda informações em lugares diferentes (e-mails, mensagens, documentos pessoais), cria-se um caos invisível que consome horas diárias em busca de dados.
                  </p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Como identificar se minha equipe sofre com este problema?</h3>
                  <p className="text-foreground-muted">
                    Observe se há perguntas repetidas, retrabalho constante, reuniões para "alinhar" informações básicas, decisões atrasadas por falta de dados, e membros da equipe que são "guardiões" de informações críticas.
                  </p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Quanto tempo uma equipe perde com este erro?</h3>
                  <p className="text-foreground-muted">
                    Estudos mostram que profissionais perdem em média 2-3 horas por dia procurando informações ou refazendo trabalhos por falta de documentação adequada. Em uma equipe de 10 pessoas, isso representa 20-30 horas diárias de produtividade perdida.
                  </p>
                </div>

                <div className="bg-card border border-card-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Como o Notion pode resolver este problema?</h3>
                  <p className="text-foreground-muted">
                    O Notion funciona como um cérebro digital da empresa, centralizando todas as informações importantes em um só lugar: processos, projetos, documentos, tarefas e conhecimento institucional. Tudo fica acessível, organizado e pesquisável.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white mt-16">
              <h2 className="text-3xl font-bold mb-4">
                Elimine o Erro Silencioso da Sua Empresa
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Descubra os sistemas prontos da Focus que centralizam e organizam todas as informações da sua empresa no Notion.
              </p>
              <Link to="/sistemas-notion">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Conhecer os Sistemas Focus
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <section className="container-focus mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Artigos Relacionados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/blog/perda-tempo-profissionais" className="group bg-card border border-card-border rounded-lg p-6 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Por que 80% dos Profissionais Perdem Tempo Todos os Dias
                </h3>
                <p className="text-foreground-muted">Descubra os principais vilões da produtividade...</p>
              </Link>
              <Link to="/blog/organizar-projetos-caoticos" className="group bg-card border border-card-border rounded-lg p-6 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  O Método Para Organizar Projetos Caóticos
                </h3>
                <p className="text-foreground-muted">Transforme projetos caóticos em sistemas organizados...</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default ErroSilenciosoProdutividade;
