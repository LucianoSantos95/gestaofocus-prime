import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCTA from "@/components/BlogCTA";
import articleImage from "@/assets/blog/metodo-gtd-guia.jpg";

const MetodoGTDGuia = () => {
  const articleUrl = "https://focusinteligente.com.br/blog/metodo-gtd-guia-completo";
  const imageUrl = "https://focusinteligente.com.br" + articleImage;

  return (
    <>
      <Helmet>
        <title>Método GTD: O Que É, Como Funciona e Como Aplicar na Prática</title>
        <meta name="description" content="Aprenda o método GTD (Getting Things Done) de David Allen. Guia completo com os 5 passos, exemplos práticos e dicas para organizar suas tarefas." />
        <meta name="keywords" content="método GTD, getting things done, produtividade, organização de tarefas, David Allen, gestão de tempo" />
        <link rel="canonical" href={articleUrl} />
        
        <meta property="og:title" content="Método GTD: O Que É, Como Funciona e Como Aplicar na Prática" />
        <meta property="og:description" content="Aprenda o método GTD de David Allen. Guia completo com os 5 passos e exemplos práticos." />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Método GTD: Guia Completo e Prático" />
        <meta name="twitter:description" content="Aprenda o método GTD de David Allen com exemplos práticos." />
        <meta name="twitter:image" content={imageUrl} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Método GTD: O Que É, Como Funciona e Como Aplicar na Prática",
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
            "description": "Aprenda o método GTD (Getting Things Done) de David Allen. Guia completo com os 5 passos, exemplos práticos e dicas para organizar suas tarefas."
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
              <span className="text-foreground">Método GTD</span>
            </nav>

            {/* Título e Subtítulo */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
                Método GTD: O Que É, Como Funciona e Como Aplicar na Prática
              </h1>
              <p className="text-xl text-muted-foreground">
                O sistema comprovado de produtividade que libera sua mente e transforma caos em clareza
              </p>
            </header>

            {/* Imagem de Capa */}
            <div className="mb-12 rounded-xl overflow-hidden">
              <img 
                src={articleImage} 
                alt="Mesa de trabalho organizada representando o método GTD"
                className="w-full h-auto"
              />
            </div>

            {/* Conteúdo do Artigo */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Você já teve a sensação de que sua cabeça vai explodir com tantas tarefas, compromissos e ideias? Aquela ansiedade constante de estar esquecendo algo importante?
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Se você vive assim, não está sozinho. <strong>A sobrecarga mental é um dos maiores problemas do profissional moderno.</strong> Recebemos dezenas de e-mails, mensagens, demandas de colegas, ideias que surgem no banho — tudo competindo pela nossa atenção ao mesmo tempo.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                A boa notícia? Existe um método testado por milhões de pessoas que resolve exatamente isso: o <strong>GTD (Getting Things Done)</strong>, criado por David Allen. Neste guia, você vai entender o que é, como funciona e, principalmente, como aplicar na sua rotina real.
              </p>

              {/* Seção 1 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                O Que É o Método GTD?
              </h2>

              <p className="mb-4">
                GTD significa <strong>Getting Things Done</strong> (em português, "fazendo as coisas acontecerem"). É um sistema de produtividade criado por David Allen e publicado no livro de mesmo nome em 2001.
              </p>

              <p className="mb-4">
                A premissa central é simples, mas revolucionária:
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mb-6 border-l-4 border-primary">
                <p className="text-lg font-medium italic">
                  "Sua mente é para ter ideias, não para guardá-las."
                </p>
                <p className="text-sm text-muted-foreground mt-2">— David Allen</p>
              </div>

              <p className="mb-4">
                O GTD propõe que você tire <strong>tudo</strong> da sua cabeça e coloque em um sistema externo confiável. Isso libera espaço mental para o que realmente importa: pensar, criar e executar com foco.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Por Que o GTD Funciona?
              </h3>

              <ul className="space-y-3 mb-8">
                <li>✓ <strong>Elimina a ansiedade:</strong> Quando tudo está registrado, você para de temer esquecimentos</li>
                <li>✓ <strong>Aumenta o foco:</strong> Sem preocupações ocupando RAM mental, você concentra no presente</li>
                <li>✓ <strong>Dá clareza:</strong> Você sempre sabe qual é a próxima ação concreta</li>
                <li>✓ <strong>É flexível:</strong> Funciona com papel, apps, Notion — qualquer ferramenta</li>
              </ul>

              {/* Seção 2 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Os 5 Passos do Método GTD
              </h2>

              <p className="mb-6">
                O GTD é estruturado em 5 etapas que formam um ciclo contínuo. Vamos entender cada uma:
              </p>

              {/* Passo 1 */}
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                1. Capturar (Collect)
              </h3>

              <p className="mb-4">
                O primeiro passo é <strong>capturar absolutamente tudo</strong> que está na sua cabeça. Tarefas, ideias, compromissos, preocupações, projetos — tudo vai para uma "caixa de entrada".
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">📥 Exemplos do que capturar:</p>
                <ul className="space-y-2">
                  <li>• "Ligar para o contador"</li>
                  <li>• "Ideia: criar curso online"</li>
                  <li>• "Comprar presente de aniversário da mãe"</li>
                  <li>• "Revisar proposta do cliente X"</li>
                  <li>• "Dentista semana que vem"</li>
                </ul>
              </div>

              <p className="mb-4">
                <strong>Regra importante:</strong> Não julgue, não organize, não priorize agora. Apenas capture. O objetivo é esvaziar sua mente completamente.
              </p>

              <div className="border-l-4 border-primary pl-4 mb-8">
                <p className="font-semibold mb-2">💡 Dica prática</p>
                <p className="text-muted-foreground">Tenha uma caixa de entrada única e acessível. Pode ser um app no celular, um caderno que você sempre carrega, ou uma pasta de e-mail específica. O importante é que você confie nesse sistema.</p>
              </div>

              {/* Passo 2 */}
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                2. Esclarecer (Clarify)
              </h3>

              <p className="mb-4">
                Agora você processa cada item da sua caixa de entrada, um por um. Para cada item, faça a pergunta-chave:
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mb-6 border-l-4 border-primary">
                <p className="text-lg font-semibold">
                  "Qual é a próxima ação física e concreta que preciso fazer?"
                </p>
              </div>

              <p className="mb-4">
                Aqui está o fluxo de decisão:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">É acionável?</p>
                  <p className="text-muted-foreground">Se não, descarte, arquive ou coloque em "algum dia/talvez"</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">Leva menos de 2 minutos?</p>
                  <p className="text-muted-foreground">Se sim, faça agora mesmo (Regra dos 2 minutos)</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">Sou a pessoa certa?</p>
                  <p className="text-muted-foreground">Se não, delegue para quem pode fazer</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">Tem data específica?</p>
                  <p className="text-muted-foreground">Se sim, coloque no calendário</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">É um projeto (mais de uma ação)?</p>
                  <p className="text-muted-foreground">Se sim, adicione à lista de projetos e defina a próxima ação</p>
                </div>
              </div>

              {/* Passo 3 */}
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                3. Organizar (Organize)
              </h3>

              <p className="mb-4">
                Após esclarecer, você precisa colocar cada item no lugar certo. O GTD sugere estas listas básicas:
              </p>

              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">📋 Próximas Ações</p>
                  <p className="text-muted-foreground">Tarefas concretas que você pode fazer a qualquer momento</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">📁 Projetos</p>
                  <p className="text-muted-foreground">Qualquer resultado que exija mais de uma ação (ex: "Lançar novo produto")</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">📅 Calendário</p>
                  <p className="text-muted-foreground">Compromissos com data e hora específicas</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">⏳ Aguardando</p>
                  <p className="text-muted-foreground">Itens que dependem de outras pessoas</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">💭 Algum Dia/Talvez</p>
                  <p className="text-muted-foreground">Ideias e desejos para o futuro (sem compromisso agora)</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">📂 Referência</p>
                  <p className="text-muted-foreground">Informações que você pode precisar consultar depois</p>
                </div>
              </div>

              {/* Passo 4 */}
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                4. Refletir (Reflect)
              </h3>

              <p className="mb-4">
                O sistema só funciona se você <strong>revisar regularmente</strong>. A revisão mantém tudo atualizado e confiável.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">🔄 Revisão Semanal (obrigatória!):</p>
                <ul className="space-y-2">
                  <li>• Esvaziar todas as caixas de entrada</li>
                  <li>• Revisar lista de projetos (algum parado?)</li>
                  <li>• Verificar calendário da próxima semana</li>
                  <li>• Atualizar lista de próximas ações</li>
                  <li>• Revisar "Aguardando" (precisa cobrar alguém?)</li>
                  <li>• Olhar "Algum Dia/Talvez" (algo virou prioridade?)</li>
                </ul>
              </div>

              <p className="mb-8">
                <strong>Reserve 30-60 minutos por semana</strong> para essa revisão. É o investimento que garante que o sistema continue funcionando.
              </p>

              {/* Passo 5 */}
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                5. Engajar (Engage)
              </h3>

              <p className="mb-4">
                Com tudo organizado, você está pronto para <strong>agir com confiança</strong>. Ao olhar sua lista de próximas ações, você escolhe o que fazer baseado em:
              </p>

              <ul className="space-y-2 mb-6">
                <li>✓ <strong>Contexto:</strong> Onde você está? (escritório, casa, celular)</li>
                <li>✓ <strong>Tempo disponível:</strong> Tem 5 minutos ou 2 horas?</li>
                <li>✓ <strong>Energia:</strong> Está focado ou cansado?</li>
                <li>✓ <strong>Prioridade:</strong> O que traz mais impacto agora?</li>
              </ul>

              <p className="mb-8">
                <strong>O poder do GTD:</strong> Você não precisa mais pensar "o que eu deveria estar fazendo?". Basta olhar a lista e escolher a ação certa para o momento.
              </p>

              {/* Seção 3 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Exemplos Práticos de Aplicação do GTD
              </h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Exemplo 1: E-mail do chefe
              </h3>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="mb-4"><strong>Situação:</strong> Seu chefe envia um e-mail pedindo uma apresentação para a reunião de quinta-feira.</p>
                
                <p className="mb-2"><strong>Processo GTD:</strong></p>
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>Capturar:</strong> E-mail vai para a caixa de entrada</li>
                  <li><strong>Esclarecer:</strong> É acionável? Sim. Próxima ação? "Criar estrutura de slides"</li>
                  <li><strong>Organizar:</strong> Adicionar "Apresentação para reunião" na lista de Projetos + "Criar estrutura de slides" em Próximas Ações + Reunião no Calendário (quinta)</li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Exemplo 2: Ideia no banho
              </h3>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="mb-4"><strong>Situação:</strong> Você tem a ideia de criar um canal no YouTube sobre sua área.</p>
                
                <p className="mb-2"><strong>Processo GTD:</strong></p>
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>Capturar:</strong> Anotar "Ideia: canal YouTube" na caixa de entrada</li>
                  <li><strong>Esclarecer:</strong> É algo que quero fazer agora? Se não, vai para "Algum Dia/Talvez"</li>
                  <li><strong>Organizar:</strong> Adicionar à lista Algum Dia/Talvez para revisitar depois</li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Exemplo 3: Tarefa delegada
              </h3>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <p className="mb-4"><strong>Situação:</strong> Você pede para um colega enviar um relatório até sexta.</p>
                
                <p className="mb-2"><strong>Processo GTD:</strong></p>
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>Capturar:</strong> Anotar "Relatório - João" na caixa de entrada</li>
                  <li><strong>Esclarecer:</strong> Depende de outra pessoa</li>
                  <li><strong>Organizar:</strong> Adicionar à lista "Aguardando" com a data esperada</li>
                  <li><strong>Refletir:</strong> Na revisão semanal, verificar se João entregou</li>
                </ol>
              </div>

              {/* Seção 4 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Erros Comuns ao Usar o GTD (e Como Evitar)
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Erro 1: Complicar demais o sistema</p>
                  <p className="text-muted-foreground mb-2">Criar dezenas de listas, categorias e tags. Resultado: você passa mais tempo organizando do que fazendo.</p>
                  <p className="text-sm"><strong>Solução:</strong> Comece com o básico (Caixa de Entrada, Próximas Ações, Projetos, Calendário). Adicione listas só quando sentir necessidade real.</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Erro 2: Não fazer a revisão semanal</p>
                  <p className="text-muted-foreground mb-2">Sem revisão, as listas ficam desatualizadas e você perde a confiança no sistema.</p>
                  <p className="text-sm"><strong>Solução:</strong> Bloqueie um horário fixo na agenda. Trate como reunião inadiável.</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Erro 3: Escrever tarefas vagas</p>
                  <p className="text-muted-foreground mb-2">"Resolver situação do cliente" não é uma próxima ação. É um projeto disfarçado.</p>
                  <p className="text-sm"><strong>Solução:</strong> Sempre pergunte: "Qual é a PRÓXIMA ação física?" (Ligar, escrever, pesquisar, decidir...)</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Erro 4: Ignorar a caixa de entrada</p>
                  <p className="text-muted-foreground mb-2">Deixar itens acumulando sem processar cria a mesma ansiedade de antes.</p>
                  <p className="text-sm"><strong>Solução:</strong> Processe sua caixa de entrada pelo menos uma vez por dia. Não precisa fazer tudo — apenas decidir o que fazer com cada item.</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Erro 5: Trocar de ferramenta toda hora</p>
                  <p className="text-muted-foreground mb-2">Buscar o app perfeito em vez de usar o sistema.</p>
                  <p className="text-sm"><strong>Solução:</strong> Escolha uma ferramenta simples e fique com ela por 3 meses. O método importa mais que a ferramenta.</p>
                </div>
              </div>

              {/* Seção 5 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Ferramentas para Aplicar o GTD
              </h2>

              <p className="mb-4">
                O GTD funciona com qualquer ferramenta. Aqui estão as mais populares:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">📝 Papel e caneta</p>
                  <p className="text-muted-foreground">Para quem prefere simplicidade total. Use um caderno dividido em seções.</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">📱 Todoist / TickTick</p>
                  <p className="text-muted-foreground">Apps de lista de tarefas com projetos, etiquetas e lembretes.</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">🗂️ Notion</p>
                  <p className="text-muted-foreground">Flexível para criar um sistema GTD personalizado com bancos de dados.</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">✅ Things 3 (Mac/iOS)</p>
                  <p className="text-muted-foreground">Considerado um dos melhores para GTD no ecossistema Apple.</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">🔄 OmniFocus (Mac/iOS)</p>
                  <p className="text-muted-foreground">O mais completo para GTD avançado, com contextos e perspectivas.</p>
                </div>
              </div>

              {/* Conclusão */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Conclusão: Como Começar Hoje
              </h2>

              <p className="mb-4">
                O GTD não é um método mágico que resolve tudo de uma vez. É uma prática que você desenvolve ao longo do tempo. Mas os benefícios são reais: <strong>menos ansiedade, mais clareza e controle sobre sua vida profissional e pessoal.</strong>
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mb-8 border-l-4 border-primary">
                <p className="font-semibold mb-4">🚀 Passos para começar agora:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Escolha uma ferramenta simples (pode ser um caderno)</li>
                  <li>Faça um "brain dump": escreva TUDO que está na sua cabeça</li>
                  <li>Processe cada item: defina a próxima ação concreta</li>
                  <li>Organize nas listas básicas (Próximas Ações, Projetos, Calendário)</li>
                  <li>Agende sua primeira revisão semanal</li>
                </ol>
              </div>

              <p className="mb-8">
                Lembre-se: o objetivo do GTD não é fazer mais coisas. É <strong>ter a mente tranquila</strong> sabendo que nada importante está sendo esquecido. Comece simples, seja consistente, e colha os resultados.
              </p>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-8 rounded-2xl mt-12">
                <h3 className="text-2xl font-bold mb-4">
                  Quer um sistema GTD pronto para usar?
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Conheça nossos sistemas no Notion — templates prontos que aplicam o método GTD de forma visual e intuitiva.
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
                    to="/blog/criar-sistema-produtividade-funciona" 
                    className="group block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <p className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Como Criar um Sistema de Produtividade que Funciona
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Passo a passo para montar seu próprio sistema de gestão de tarefas.
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
                    to="/blog/organizar-rotina-semanal" 
                    className="group block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <p className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Como Organizar Sua Rotina Semanal
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Modelo prático para planejar sua semana com foco e clareza.
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
        
        <BlogCTA location="metodo-gtd-guia" />
        <Footer />
      </div>
    </>
  );
};

export default MetodoGTDGuia;
