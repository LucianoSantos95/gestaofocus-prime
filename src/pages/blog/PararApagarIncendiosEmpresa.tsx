import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleImage from "@/assets/blog/parar-apagar-incendios.jpg";

const PararApagarIncendiosEmpresa = () => {
  const relatedPosts = [
    {
      title: "A fórmula que uso para transformar tarefas soltas em resultados consistentes",
      slug: "tarefas-soltas-em-resultados"
    },
    {
      title: "Você está gerenciando tarefas… ou apenas apagando incêndios?",
      slug: "gerenciando-tarefas-ou-apagando-incendios"
    },
    {
      title: "Como usar o Notion para ter clareza total nos seus projetos (mesmo com pouco tempo)",
      slug: "clareza-projetos-notion"
    }
  ];

  const publishDate = "2025-02-04";
  const modifiedDate = "2025-02-04";
  const articleUrl = "https://focusinteligente.com.br/blog/parar-apagar-incendios-empresa";
  const imageUrl = "https://focusinteligente.com.br" + articleImage;

  return (
    <>
      <Helmet>
        <title>Por que sua empresa está sempre apagando incêndios e como parar | Focus</title>
        <meta name="description" content="Descubra as causas raiz do modo bombeiro e aprenda o método para sair do ciclo de urgências e trabalhar de forma estratégica e proativa." />
        <meta name="keywords" content="gestão crise, apagar incêndios, modo reativo, gestão proativa, planejamento estratégico, processos empresa, notion empresarial" />
        <link rel="canonical" href={articleUrl} />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Por que sua empresa está sempre apagando incêndios" />
        <meta property="og:description" content="Descubra como sair do ciclo de urgências e trabalhar de forma estratégica." />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={articleUrl} />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={modifiedDate} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Por que sua empresa está sempre apagando incêndios" />
        <meta name="twitter:description" content="Descubra como sair do ciclo de urgências e trabalhar de forma estratégica." />
        <meta name="twitter:image" content={imageUrl} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Por que sua empresa está sempre apagando incêndios — e como parar com isso de uma vez",
            "image": imageUrl,
            "author": {
              "@type": "Organization",
              "name": "Focus Gestão Empresarial"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Focus Gestão Empresarial",
              "logo": {
                "@type": "ImageObject",
                "url": "https://focusinteligente.com.br/lovable-uploads/focus-logo.png"
              }
            },
            "datePublished": publishDate,
            "dateModified": modifiedDate,
            "mainEntityOfPage": articleUrl
          })}
        </script>
      </Helmet>

      <article className="min-h-screen pt-24 pb-16">
        <div className="container-focus mb-8">
          <nav className="flex items-center space-x-2 text-sm text-foreground-muted">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">Parar de apagar incêndios</span>
          </nav>
        </div>

        <div className="container-focus mb-8">
          <div className="aspect-video overflow-hidden rounded-2xl">
            <img 
              src={articleImage} 
              alt="Equipe empresarial enfrentando crises constantes no ambiente de trabalho"
              title="Empresa no modo bombeiro - apagando incêndios"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="container-focus max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-sm text-foreground-muted flex-wrap">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                Gestão Empresarial
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>4 de fevereiro de 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>11 min de leitura</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Por que sua empresa está sempre apagando incêndios — e como parar com isso de uma vez
            </h1>

            <p className="text-xl text-foreground-muted leading-relaxed">
              O ciclo vicioso do modo bombeiro está matando empresas promissoras. Descubra como quebrar esse padrão e construir uma operação verdadeiramente estratégica.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground-muted leading-relaxed mb-6">
              Segunda-feira, 9h da manhã. Você chega no escritório com a melhor das intenções: "Hoje vou focar naquele projeto estratégico importante". Mas antes de abrir o computador, já tem 3 pessoas na sua mesa com "urgências". E lá vai seu dia — e sua semana — <strong>apagando incêndios</strong>.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Se isso descreve sua realidade, saiba: <strong>você não está sozinho</strong>. E mais importante: isso tem solução. Mas primeiro, você precisa entender por que isso acontece.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Os 3 pecados que criam o modo bombeiro</h2>
            
            <p className="text-foreground-muted leading-relaxed mb-6">
              Depois de trabalhar com mais de 150 empresas, identifiquei <strong>3 causas raiz</strong> que mantêm empresas presas no ciclo de urgências:
            </p>

            <div className="space-y-8 my-12">
              <div className="bg-card border-2 border-red-500/20 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">🔥 Pecado #1: Falta de Processos Claros</h3>
                <p className="text-foreground-muted mb-4">
                  Quando não existem processos documentados, cada situação vira um "caso especial" que exige decisões urgentes. A empresa funciona no improviso constante.
                </p>
                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                  <p className="text-sm text-foreground-muted">
                    <strong>Sintomas:</strong> Sempre perguntando "como faz isso?", retrabalho, decisões repetitivas, dependência de pessoas específicas.
                  </p>
                </div>
              </div>

              <div className="bg-card border-2 border-orange-500/20 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-orange-600 dark:text-orange-400">🔥 Pecado #2: Ausência de Planejamento Real</h3>
                <p className="text-foreground-muted mb-4">
                  "Planejamento" que se resume a reuniões longas sem follow-up não é planejamento — é teatro corporativo. Sem planos claros e revisados, tudo vira urgência.
                </p>
                <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
                  <p className="text-sm text-foreground-muted">
                    <strong>Sintomas:</strong> Reuniões improdutivas, metas desconectadas da realidade, equipe sem direção clara, mudanças constantes de prioridade.
                  </p>
                </div>
              </div>

              <div className="bg-card border-2 border-yellow-500/20 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-yellow-600 dark:text-yellow-400">🔥 Pecado #3: Comunicação Fragmentada</h3>
                <p className="text-foreground-muted mb-4">
                  WhatsApp, email, Slack, reuniões, mensagens de voz... Informações cruciais espalhadas em 10 lugares diferentes. O resultado? Confusão, mal-entendidos e crises desnecessárias.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg">
                  <p className="text-sm text-foreground-muted">
                    <strong>Sintomas:</strong> "Não sabia disso", informações perdidas, reuniões para "alinhar" constantemente, retrabalho por falta de contexto.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">O custo real do modo bombeiro</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Empresas presas no modo bombeiro pagam um <strong>preço invisível</strong> que aparece nos números de forma devastadora:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-card border border-card-border p-6 rounded-lg">
                <h4 className="font-bold mb-3">💰 Custo Financeiro</h4>
                <ul className="space-y-2 text-foreground-muted text-sm">
                  <li>• Horas extras desnecessárias</li>
                  <li>• Perda de oportunidades estratégicas</li>
                  <li>• Retrabalho constante (30-40% do tempo)</li>
                  <li>• Alta rotatividade de talentos</li>
                </ul>
              </div>

              <div className="bg-card border border-card-border p-6 rounded-lg">
                <h4 className="font-bold mb-3">🧠 Custo Humano</h4>
                <ul className="space-y-2 text-foreground-muted text-sm">
                  <li>• Burnout da equipe</li>
                  <li>• Estresse crônico</li>
                  <li>• Desmotivação progressiva</li>
                  <li>• Perda de confiança na liderança</li>
                </ul>
              </div>

              <div className="bg-card border border-card-border p-6 rounded-lg">
                <h4 className="font-bold mb-3">📉 Custo Estratégico</h4>
                <ul className="space-y-2 text-foreground-muted text-sm">
                  <li>• Projetos importantes nunca saem do papel</li>
                  <li>• Inovação inexistente</li>
                  <li>• Concorrentes passam na frente</li>
                  <li>• Crescimento travado</li>
                </ul>
              </div>

              <div className="bg-card border border-card-border p-6 rounded-lg">
                <h4 className="font-bold mb-3">⏰ Custo de Tempo</h4>
                <ul className="space-y-2 text-foreground-muted text-sm">
                  <li>• 70% do tempo em urgências</li>
                  <li>• 20% em reuniões improdutivas</li>
                  <li>• 10% em trabalho estratégico</li>
                  <li>• = Empresa que não evolui</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-primary rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Quer sair do modo bombeiro?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Nosso <strong>Hub Empresarial Pro</strong> implementa processos, planejamento e comunicação centralizada — eliminando as causas raiz do caos
              </p>
              <Link to="/hub-empresarial">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Conhecer Hub Empresarial
                </Button>
              </Link>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">A solução: De reativo para proativo em 4 passos</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Sair do modo bombeiro não acontece da noite para o dia. Mas com o método certo, é possível transformar sua empresa em <strong>3 a 6 meses</strong>:
            </p>

            <div className="space-y-6 my-8">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-xl font-bold mb-2">Passo 1: Mapeie e documente processos críticos</h3>
                <p className="text-foreground-muted mb-3">
                  Comece pelos 3-5 processos que mais geram confusão e urgências. Documente no Notion com clareza visual.
                </p>
                <p className="text-sm text-foreground-muted italic">
                  Resultado esperado: 40% de redução em perguntas repetitivas e decisões urgentes em 30 dias.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-xl font-bold mb-2">Passo 2: Implemente planejamento semanal obrigatório</h3>
                <p className="text-foreground-muted mb-3">
                  Toda segunda, 1 hora não-negociável: revisar semana anterior, planejar próxima semana, definir prioridades estratégicas vs. operacionais.
                </p>
                <p className="text-sm text-foreground-muted italic">
                  Resultado esperado: Equipe sabe o que é realmente importante. Menos "urgências surpresa".
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-xl font-bold mb-2">Passo 3: Centralize comunicação e documentação</h3>
                <p className="text-foreground-muted mb-3">
                  Crie um hub central (Notion é ideal) onde TUDO está: projetos, processos, decisões, status. Uma única fonte da verdade.
                </p>
                <p className="text-sm text-foreground-muted italic">
                  Resultado esperado: Fim do "não sabia". Redução de 60% em reuniões de alinhamento.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-xl font-bold mb-2">Passo 4: Proteja tempo estratégico</h3>
                <p className="text-foreground-muted mb-3">
                  Bloqueie 4-6 horas por semana onde você NÃO está disponível para urgências. Use esse tempo para trabalhar NO negócio, não no dia a dia.
                </p>
                <p className="text-sm text-foreground-muted italic">
                  Resultado esperado: Projetos estratégicos finalmente acontecem. Empresa começa a evoluir de verdade.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Como o Notion elimina o modo bombeiro</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O Notion é a ferramenta perfeita para implementar essa transformação porque ele ataca os 3 pecados simultaneamente:
            </p>

            <div className="bg-card border border-card-border rounded-lg p-6 my-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">✅ Contra Pecado #1 (Falta de Processos):</h4>
                  <p className="text-foreground-muted text-sm">
                    Templates visuais de processos que qualquer pessoa pode seguir. Documentação viva que evolui com a empresa.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">✅ Contra Pecado #2 (Falta de Planejamento):</h4>
                  <p className="text-foreground-muted text-sm">
                    Dashboards de projetos e tarefas ligados a objetivos estratégicos. Visibilidade total do que importa.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">✅ Contra Pecado #3 (Comunicação Fragmentada):</h4>
                  <p className="text-foreground-muted text-sm">
                    Hub central onde toda informação importante vive. Acabou o "procurar em 10 lugares diferentes".
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">A transformação real: Case de sucesso</h2>

            <div className="bg-primary/5 p-8 rounded-xl my-8">
              <p className="text-foreground-muted mb-4">
                <strong>Empresa:</strong> Agência de marketing digital, 15 pessoas<br />
                <strong>Problema:</strong> 80% do tempo apagando incêndios, projetos atrasados, equipe exausta
              </p>
              <p className="text-foreground-muted mb-4">
                <strong>Solução implementada:</strong> Hub Empresarial no Notion + processos documentados + planejamento semanal rigoroso
              </p>
              <p className="text-primary font-bold">
                <strong>Resultados em 90 dias:</strong>
              </p>
              <ul className="space-y-2 text-foreground-muted mt-3">
                <li>• 65% de redução em "urgências"</li>
                <li>• 100% dos projetos entregues no prazo</li>
                <li>• Equipe reportou 80% menos estresse</li>
                <li>• Lançaram 2 novos serviços (antes impossível)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão: Empresas de verdade não vivem apagando incêndios</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Se sua empresa está sempre no modo bombeiro, <strong>isso não é normal</strong>. Não é "parte de empreender". É sintoma de falta de sistemas.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Empresas que crescem de forma sustentável têm uma coisa em comum: <strong>processos claros, planejamento real e comunicação centralizada</strong>.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              A boa notícia? Você pode ter tudo isso. Só precisa das ferramentas e metodologia certas.
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
              Pronto para sair do modo bombeiro?
            </h3>
            <p className="text-foreground-muted mb-6">
              Conheça o Hub Empresarial Pro — o sistema completo para empresas que querem crescer com organização
            </p>
            <Link to="/hub-empresarial">
              <Button size="lg" className="btn-hero">
                Conhecer Hub Empresarial
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default PararApagarIncendiosEmpresa;
