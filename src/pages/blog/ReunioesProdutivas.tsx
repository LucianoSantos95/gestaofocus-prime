import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCTA from "@/components/BlogCTA";
import articleImage from "@/assets/blog/reunioes-produtivas.jpg";

const ReunioesProdutivas = () => {
  const articleUrl = "https://focusinteligente.com.br/blog/reunioes-produtivas-parar-perder-tempo";
  const imageUrl = "https://focusinteligente.com.br" + articleImage;

  return (
    <>
      <Helmet>
        <title>Reuniões Produtivas Para Agências e Consultorias | Focus</title>
        <meta name="description" content="Transforme reuniões improdutivas em alinhamentos rápidos na sua agência. Passo a passo para agências e consultorias que precisam de agilidade." />
        <meta name="keywords" content="reuniões produtivas agência, reuniões eficientes consultoria, gestão reuniões prestadores serviço, alinhamento equipe agência" />
        <link rel="canonical" href={articleUrl} />
        
        <meta property="og:title" content="Como Fazer Reuniões Produtivas e Parar de Perder Tempo no Trabalho" />
        <meta property="og:description" content="Aprenda a transformar reuniões improdutivas em encontros eficientes que geram resultados." />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Como Fazer Reuniões Produtivas e Parar de Perder Tempo" />
        <meta name="twitter:description" content="Aprenda a transformar reuniões improdutivas em encontros eficientes que geram resultados." />
        <meta name="twitter:image" content={imageUrl} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Como Fazer Reuniões Produtivas e Parar de Perder Tempo no Trabalho",
            "image": imageUrl,
            "datePublished": "2025-12-22",
            "dateModified": "2025-12-22",
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
            "description": "Aprenda a transformar reuniões improdutivas em encontros eficientes. Passo a passo para planejar, conduzir e documentar reuniões que geram resultados."
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <article className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Início</Link>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Reuniões Produtivas</span>
            </nav>

            {/* Título e Subtítulo */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
                Como Fazer Reuniões Produtivas e Parar de Perder Tempo no Trabalho
              </h1>
              <p className="text-xl text-muted-foreground">
                O guia completo para transformar encontros improdutivos em momentos decisivos para sua equipe
              </p>
            </header>

            {/* Imagem de Capa */}
            <div className="mb-12 rounded-xl overflow-hidden">
              <img 
                src={articleImage} 
                alt="Equipe em reunião produtiva em sala de conferência moderna"
                className="w-full h-auto"
              />
            </div>

            {/* Conteúdo do Artigo */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Quantas horas da sua semana são consumidas por reuniões que poderiam ter sido um e-mail? Se você trabalha em uma empresa, provavelmente conhece bem essa frustração.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Estudos mostram que <strong>profissionais passam em média 23 horas por semana em reuniões</strong> — e 71% dessas reuniões são consideradas improdutivas. Isso representa um custo enorme: tempo perdido, projetos atrasados e energia desperdiçada.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                A boa notícia? <strong>Reuniões podem ser extremamente valiosas</strong> quando bem planejadas e executadas. Neste guia, você vai aprender exatamente como transformar suas reuniões em encontros produtivos que geram resultados reais.
              </p>

              {/* Seção 1 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Por Que a Maioria das Reuniões Falha
              </h2>

              <p className="mb-4">
                Antes de aprender a fazer reuniões produtivas, é importante entender por que tantas reuniões fracassam:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">❌ Falta de objetivo claro</p>
                  <p className="text-muted-foreground">Reuniões marcadas "para discutir" algo, sem um resultado esperado definido, tendem a se arrastar sem conclusão.</p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">❌ Participantes demais</p>
                  <p className="text-muted-foreground">Cada pessoa adicional reduz a eficiência. O tempo para tomar decisões aumenta exponencialmente.</p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">❌ Sem pauta estruturada</p>
                  <p className="text-muted-foreground">Quando não há uma lista de tópicos, a conversa vira círculos e assuntos importantes são esquecidos.</p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">❌ Duração excessiva</p>
                  <p className="text-muted-foreground">Reuniões de 1 hora são padrão, mas raramente necessárias. A lei de Parkinson: o trabalho se expande para preencher o tempo disponível.</p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">❌ Falta de follow-up</p>
                  <p className="text-muted-foreground">Decisões tomadas, mas não documentadas nem acompanhadas. Resultado: a mesma reunião acontece novamente.</p>
                </div>
              </div>

              <p className="mb-8">
                <strong>Reconheceu algum desses problemas?</strong> Você não está sozinho. A maioria das empresas sofre com esses padrões. Mas é possível mudar.
              </p>

              {/* Seção 2 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Passo a Passo Para Planejar Reuniões Produtivas
              </h2>

              <p className="mb-6">
                Uma reunião produtiva começa muito antes de começar. O planejamento é 80% do sucesso.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                1. Defina Se a Reunião É Realmente Necessária
              </h3>

              <p className="mb-4">
                Antes de agendar, pergunte-se:
              </p>

              <ul className="space-y-2 mb-6">
                <li>✓ Isso pode ser resolvido por e-mail ou mensagem?</li>
                <li>✓ Preciso de feedback em tempo real ou apenas informar?</li>
                <li>✓ Existe uma decisão a ser tomada que exige discussão?</li>
              </ul>

              <div className="bg-primary/10 p-6 rounded-lg mb-6 border-l-4 border-primary">
                <p className="font-semibold mb-2">💡 Regra de Ouro</p>
                <p>Se você consegue resolver o assunto em um parágrafo, não precisa de reunião. Use a reunião para o que exige colaboração, não para transmitir informações.</p>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                2. Estabeleça um Objetivo Claro e Mensurável
              </h3>

              <p className="mb-4">
                Toda reunião deve ter um objetivo específico que pode ser verificado ao final:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="mb-2"><strong>❌ Objetivo vago:</strong></p>
                <p className="mb-4 text-muted-foreground">"Discutir o projeto de marketing"</p>
                
                <p className="mb-2"><strong>✅ Objetivo claro:</strong></p>
                <p className="text-muted-foreground">"Aprovar o orçamento da campanha de janeiro e definir os responsáveis por cada entrega"</p>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                3. Crie uma Pauta Estruturada
              </h3>

              <p className="mb-4">
                A pauta é o roteiro da reunião. Compartilhe-a com antecedência para que todos cheguem preparados:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-4">📋 Modelo de Pauta Eficiente:</p>
                <ul className="space-y-2">
                  <li><strong>1.</strong> Check-in rápido (2 min)</li>
                  <li><strong>2.</strong> Revisão dos itens anteriores (5 min)</li>
                  <li><strong>3.</strong> Tópico principal: [Descrever] (15 min)</li>
                  <li><strong>4.</strong> Decisões necessárias: [Listar] (10 min)</li>
                  <li><strong>5.</strong> Próximos passos e responsáveis (3 min)</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                4. Convide Apenas Quem Precisa Estar
              </h3>

              <p className="mb-4">
                A regra das duas pizzas da Amazon: se você não consegue alimentar o grupo com duas pizzas, há pessoas demais.
              </p>

              <ul className="space-y-2 mb-6">
                <li>✓ <strong>Decisores:</strong> Quem pode aprovar o que será discutido</li>
                <li>✓ <strong>Especialistas:</strong> Quem tem informações essenciais</li>
                <li>✓ <strong>Executores:</strong> Quem vai implementar as decisões</li>
              </ul>

              <p className="mb-8">
                <strong>Dica:</strong> Pessoas que precisam apenas ser informadas podem receber um resumo depois. Não precisam estar na reunião.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                5. Defina a Duração Correta
              </h3>

              <p className="mb-4">
                Pare de usar 1 hora como padrão. Use o tempo mínimo necessário:
              </p>

              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">15 minutos</p>
                  <p className="text-muted-foreground">Check-ins diários, atualizações rápidas, decisões simples</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">30 minutos</p>
                  <p className="text-muted-foreground">Discussões focadas, revisão de projetos, alinhamentos</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">45-60 minutos</p>
                  <p className="text-muted-foreground">Brainstorming, planejamento estratégico, workshops</p>
                </div>
              </div>

              {/* Seção 3 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Boas Práticas Durante a Reunião
              </h2>

              <p className="mb-6">
                Planejou bem? Ótimo. Agora é hora de executar. Aqui estão as práticas que transformam reuniões:
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Comece no Horário (Sempre)
              </h3>

              <p className="mb-6">
                Esperar atrasados pune quem chegou no horário. Comece no horário marcado, mesmo que falte gente. Isso cria uma cultura de pontualidade.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Tenha um Facilitador
              </h3>

              <p className="mb-4">
                Uma pessoa deve ser responsável por:
              </p>

              <ul className="space-y-2 mb-6">
                <li>✓ Manter a discussão no tópico</li>
                <li>✓ Controlar o tempo de cada item</li>
                <li>✓ Garantir que todos participem</li>
                <li>✓ Interromper conversas paralelas educadamente</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Use a Técnica do Estacionamento
              </h3>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="mb-4">
                  Quando surgir um assunto importante, mas fora do escopo da reunião, anote em uma lista de "estacionamento" para discutir depois. Isso evita que a reunião saia do rumo sem perder ideias valiosas.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Exemplo:</strong> "Ótimo ponto sobre o novo sistema. Vou anotar no estacionamento e discutimos na reunião de tecnologia."
                </p>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Evite Dispositivos (Quando Possível)
              </h3>

              <p className="mb-6">
                Laptops e celulares dividem a atenção. Se a reunião for curta e focada, peça que todos deixem dispositivos de lado, exceto quem estiver tomando notas.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Termine 5 Minutos Antes
              </h3>

              <p className="mb-8">
                Isso dá tempo para que as pessoas processem, façam perguntas rápidas e se preparem para o próximo compromisso. Terminar no horário também é uma forma de respeito.
              </p>

              {/* Seção 4 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Como Documentar Decisões e Próximos Passos
              </h2>

              <p className="mb-6">
                Uma reunião sem documentação é uma reunião que vai se repetir. Aqui está o que registrar:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-4">📝 Ata Mínima Eficiente:</p>
                <ul className="space-y-3">
                  <li><strong>Data e participantes:</strong> Quem estava presente</li>
                  <li><strong>Decisões tomadas:</strong> O que foi aprovado/definido</li>
                  <li><strong>Próximos passos:</strong> Tarefas específicas com responsável e prazo</li>
                  <li><strong>Itens pendentes:</strong> O que ficou no "estacionamento"</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Exemplo Prático de Ata
              </h3>

              <div className="bg-muted/50 p-6 rounded-lg mb-8 text-sm">
                <p className="mb-4"><strong>📅 Reunião: Planejamento Q1 2026</strong></p>
                <p className="mb-2"><strong>Participantes:</strong> Ana, Carlos, Marina</p>
                <p className="mb-4"><strong>Data:</strong> 22/12/2025</p>
                
                <p className="mb-2"><strong>✅ Decisões:</strong></p>
                <ul className="mb-4 list-disc list-inside">
                  <li>Orçamento de marketing aprovado: R$ 50.000</li>
                  <li>Campanha começa em 15/01</li>
                </ul>
                
                <p className="mb-2"><strong>📋 Próximos Passos:</strong></p>
                <ul className="mb-4 list-disc list-inside">
                  <li>Ana: Contratar designer até 02/01</li>
                  <li>Carlos: Enviar briefing para agência até 26/12</li>
                  <li>Marina: Revisar métricas do ano anterior até 30/12</li>
                </ul>
                
                <p className="mb-2"><strong>🅿️ Estacionamento:</strong></p>
                <ul className="list-disc list-inside">
                  <li>Discutir novo CRM na próxima reunião de tecnologia</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Compartilhe em Até 24 Horas
              </h3>

              <p className="mb-8">
                Envie a ata para todos os participantes (e interessados) em no máximo 24 horas. Quanto mais tempo passar, mais detalhes importantes serão esquecidos.
              </p>

              {/* Seção 5 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Tipos de Reunião e Como Otimizar Cada Uma
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-2">🔄 Daily/Stand-up (15 min)</p>
                  <p className="mb-2">Cada pessoa responde 3 perguntas: O que fez ontem? O que vai fazer hoje? Tem algum bloqueio?</p>
                  <p className="text-sm text-muted-foreground"><strong>Dica:</strong> Faça em pé para manter curta.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-2">📊 Reunião de Status (30 min)</p>
                  <p className="mb-2">Atualização sobre projetos em andamento. Foco em desvios e decisões necessárias.</p>
                  <p className="text-sm text-muted-foreground"><strong>Dica:</strong> Envie relatório antes; use o tempo para discutir, não apresentar.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-2">💡 Brainstorming (45-60 min)</p>
                  <p className="mb-2">Geração de ideias sem julgamento inicial. Depois, avaliação e priorização.</p>
                  <p className="text-sm text-muted-foreground"><strong>Dica:</strong> Limite a 5-7 pessoas para evitar paralisia.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-2">🎯 Reunião de Decisão (30-45 min)</p>
                  <p className="mb-2">Objetivo claro: sair com uma decisão tomada.</p>
                  <p className="text-sm text-muted-foreground"><strong>Dica:</strong> Envie opções antecipadamente para que todos cheguem preparados.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-2">👥 One-on-One (30 min)</p>
                  <p className="mb-2">Reunião individual entre gestor e colaborador. Foco em desenvolvimento e feedback.</p>
                  <p className="text-sm text-muted-foreground"><strong>Dica:</strong> O colaborador define a pauta; gestor escuta mais do que fala.</p>
                </div>
              </div>

              {/* Seção 6 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Ferramentas Para Reuniões Mais Produtivas
              </h2>

              <p className="mb-4">
                A tecnologia pode ajudar muito quando bem utilizada:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">📅 Calendário compartilhado</p>
                  <p className="text-muted-foreground">Google Calendar, Outlook — bloqueie tempo para trabalho focado</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">📝 Documentação de atas</p>
                  <p className="text-muted-foreground">Notion, Google Docs, Confluence — centralize registros</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">✅ Gestão de tarefas</p>
                  <p className="text-muted-foreground">Notion, Trello, Asana — acompanhe os próximos passos</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">⏱️ Timer visual</p>
                  <p className="text-muted-foreground">Compartilhe um timer na tela para manter todos conscientes do tempo</p>
                </div>
              </div>

              {/* Conclusão */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Conclusão: Transforme Suas Reuniões a Partir de Hoje
              </h2>

              <p className="mb-4">
                Reuniões produtivas não acontecem por acaso. Elas são o resultado de planejamento intencional e execução disciplinada.
              </p>

              <p className="mb-6">
                <strong>Comece com uma mudança simples:</strong> na sua próxima reunião, defina um objetivo claro e compartilhe a pauta com antecedência. Só isso já vai fazer uma diferença enorme.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mb-8 border-l-4 border-primary">
                <p className="font-semibold mb-4">📌 Resumo das Melhores Práticas:</p>
                <ul className="space-y-2">
                  <li>✓ Questione se a reunião é necessária</li>
                  <li>✓ Defina objetivo claro e mensurável</li>
                  <li>✓ Crie e compartilhe pauta antecipadamente</li>
                  <li>✓ Convide apenas quem precisa estar</li>
                  <li>✓ Comece e termine no horário</li>
                  <li>✓ Documente decisões e próximos passos</li>
                  <li>✓ Envie ata em até 24 horas</li>
                </ul>
              </div>

              <p className="mb-8">
                Lembre-se: o tempo é o recurso mais valioso que temos. Cada reunião improdutiva é tempo que poderia ser usado para criar, inovar e entregar resultados. Use esse guia para recuperar suas horas e multiplicar sua produtividade.
              </p>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-8 rounded-2xl mt-12">
                <h3 className="text-2xl font-bold mb-4">
                  Quer organizar toda sua produtividade em um só lugar?
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Conheça nossos sistemas no Notion — templates prontos para gestão de reuniões, projetos, tarefas e muito mais.
                </p>
                <Link 
                  to="/sistemas-gratuitos"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Conhecer Sistemas Focus
                </Link>
              </div>

              {/* Artigos Relacionados */}
              <div className="mt-16 pt-8 border-t border-border">
                <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link 
                    to="/blog/gestao-tempo-ocupado-estrategias-funcionam" 
                    className="group block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <p className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Gestão do Tempo para Quem Vive Ocupado
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Estratégias simples que realmente funcionam para recuperar o controle da sua agenda.
                    </p>
                  </Link>
                  <Link 
                    to="/blog/guia-foco-evitar-distracoes" 
                    className="group block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <p className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Guia Completo para Evitar Distrações
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Como manter o foco em um mundo cheio de interrupções constantes.
                    </p>
                  </Link>
                  <Link 
                    to="/blog/checklist-diario-produtividade" 
                    className="group block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <p className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Checklist Diário de Produtividade
                    </p>
                    <p className="text-sm text-muted-foreground">
                      O método simples que aumenta sua produtividade em até 40%.
                    </p>
                  </Link>
                  <Link 
                    to="/blog/tecnica-pomodoro-guia-definitivo" 
                    className="group block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <p className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Técnica Pomodoro: Guia Definitivo
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Como usar o método mais famoso de produtividade da forma correta.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        <BlogCTA location="reunioes-produtivas" />
        <Footer />
      </div>
    </>
  );
};

export default ReunioesProdutivas;
