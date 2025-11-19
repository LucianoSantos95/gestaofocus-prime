import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import articleImage from "@/assets/blog/criar-habitos-duram.jpg";

const CriarHabitosDuram = () => {
  const articleUrl = "https://focusinteligente.com.br/blog/criar-habitos-que-duram";
  const imageUrl = "https://focusinteligente.com.br" + articleImage;

  return (
    <>
      <Helmet>
        <title>Como Criar Hábitos Que Duram: O Método das Pessoas Altamente Produtivas</title>
        <meta name="description" content="Aprenda o método científico para criar hábitos duradouros. Framework completo usado por pessoas produtivas para transformar comportamentos em automatismos." />
        <meta name="keywords" content="criar hábitos, hábitos produtivos, como criar hábitos duradouros, formação de hábitos, mudança de comportamento" />
        <link rel="canonical" href={articleUrl} />
        
        <meta property="og:title" content="Como Criar Hábitos Que Duram: Método Científico" />
        <meta property="og:description" content="Framework completo para criar hábitos que realmente duram e transformar sua produtividade." />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Como Criar Hábitos Que Duram: Método Científico" />
        <meta name="twitter:description" content="Aprenda o método usado por pessoas altamente produtivas." />
        <meta name="twitter:image" content={imageUrl} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Como Criar Hábitos Que Duram: O Método das Pessoas Altamente Produtivas",
            "image": imageUrl,
            "datePublished": "2025-01-19",
            "dateModified": "2025-01-19",
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
            "description": "Aprenda o método científico para criar hábitos duradouros. Framework completo usado por pessoas produtivas para transformar comportamentos em automatismos."
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
              <span className="text-foreground">Criar Hábitos Que Duram</span>
            </nav>

            {/* Título e Subtítulo */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
                Como Criar Hábitos Que Duram: O Método Mais Usado Por Pessoas Altamente Produtivas
              </h1>
              <p className="text-xl text-muted-foreground">
                O guia científico completo para transformar qualquer comportamento em automatismo (sem depender de força de vontade)
              </p>
            </header>

            {/* Imagem de Capa */}
            <div className="mb-12 rounded-xl overflow-hidden">
              <img 
                src={articleImage} 
                alt="Formação de hábitos e crescimento pessoal através de consistência"
                className="w-full h-auto"
              />
            </div>

            {/* Conteúdo do Artigo */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Você já começou a academia 5 vezes e desistiu na segunda semana? Ou prometeu acordar cedo, ler mais, comer melhor... mas nada durou?
              </p>

              <p className="text-lg leading-relaxed mb-6">
                O problema não é você — <strong>é o método que você está usando</strong>. A ciência descobriu exatamente como nosso cérebro forma hábitos, e a boa notícia é: <strong>tem um jeito certo de fazer isso</strong>.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Neste guia, você vai aprender o framework usado por pessoas altamente produtivas para criar hábitos que realmente duram (baseado em neurociência e psicologia comportamental).
              </p>

              {/* Seção 1 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                A Ciência Por Trás dos Hábitos
              </h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Como Seu Cérebro Forma Hábitos
              </h3>

              <p className="mb-4">
                Hábitos são <strong>atalhos neurológicos</strong> que seu cérebro cria para economizar energia. Quando você repete um comportamento consistentemente em um contexto específico, seu cérebro automatiza esse processo.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">🧠 O Loop do Hábito (descoberto por Charles Duhigg):</p>
                <ol className="space-y-3">
                  <li><strong>1. Gatilho:</strong> Sinal que ativa o comportamento (hora, local, emoção, pessoa)</li>
                  <li><strong>2. Rotina:</strong> O comportamento em si (física, mental ou emocional)</li>
                  <li><strong>3. Recompensa:</strong> Benefício que reforça o loop (prazer, alívio, satisfação)</li>
                </ol>
              </div>

              <p className="mb-4">
                <strong>Exemplo prático:</strong>
              </p>

              <ul className="space-y-2 mb-8">
                <li>• <strong>Gatilho:</strong> Acordar de manhã</li>
                <li>• <strong>Rotina:</strong> Tomar café</li>
                <li>• <strong>Recompensa:</strong> Energia + prazer sensorial</li>
              </ul>

              <p className="mb-8">
                Quando esse loop se repete por tempo suficiente (geralmente 66 dias), ele se torna <strong>automático</strong> — você nem precisa pensar, simplesmente faz.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Por Que a Maioria Dos Hábitos Falha
              </h3>

              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-1">❌ Começar grande demais</p>
                  <p className="text-muted-foreground">"Vou malhar 1 hora por dia" quando você não faz exercício há anos</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-1">❌ Depender de motivação</p>
                  <p className="text-muted-foreground">Motivação é emocional e flutua. Hábitos precisam de sistemas</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-1">❌ Sem gatilho claro</p>
                  <p className="text-muted-foreground">"Vou ler mais" não tem quando, onde ou como</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-1">❌ Recompensa distante</p>
                  <p className="text-muted-foreground">Seu cérebro quer prazer AGORA, não em 6 meses</p>
                </div>
              </div>

              {/* Seção 2 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                O Framework dos 4 Pilares Para Criar Hábitos Duradouros
              </h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Pilar 1: Comece Ridiculamente Pequeno
              </h3>

              <p className="mb-4">
                O maior erro é começar grande. Em vez disso, use a <strong>Regra dos 2 Minutos</strong> (James Clear):
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">📏 Versão Mínima Viável do Hábito:</p>
                
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">❌ Mau hábito:</p>
                    <p className="text-muted-foreground">"Vou meditar 30 minutos por dia"</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">✅ Bom hábito:</p>
                    <p className="text-muted-foreground">"Vou meditar 2 minutos por dia"</p>
                  </div>
                </div>
              </div>

              <p className="mb-4">
                <strong>Por que funciona:</strong>
              </p>

              <ul className="space-y-2 mb-6">
                <li>• Seu cérebro não resiste (é tão fácil que você não tem desculpa)</li>
                <li>• Cria consistência (melhor fazer 2 min todo dia que 30 min 1x por semana)</li>
                <li>• Constrói identidade ("Sou uma pessoa que medita")</li>
                <li>• Permite expansão natural (depois de 2 semanas de 2 min, naturalmente você vai querer mais)</li>
              </ul>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <p className="font-semibold mb-3">🎯 Exemplos de Hábitos Mínimos:</p>
                <ul className="space-y-2">
                  <li>• Exercício: 1 flexão</li>
                  <li>• Leitura: 1 página</li>
                  <li>• Meditação: 2 respirações profundas</li>
                  <li>• Escrever: 1 frase por dia</li>
                  <li>• Aprender inglês: 1 palavra nova</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Pilar 2: Empilhe Hábitos (Habit Stacking)
              </h3>

              <p className="mb-4">
                Em vez de tentar criar um gatilho do zero, <strong>conecte o novo hábito a um existente</strong>:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">Formula do Empilhamento:</p>
                <p className="text-center text-lg mb-0">"Depois de [HÁBITO ATUAL], eu vou [NOVO HÁBITO]"</p>
              </div>

              <p className="mb-4">
                <strong>Exemplos práticos:</strong>
              </p>

              <ul className="space-y-3 mb-8">
                <li>• "Depois de escovar os dentes, vou fazer 10 agachamentos"</li>
                <li>• "Depois de tomar café, vou escrever 3 frases no diário"</li>
                <li>• "Depois de ligar o computador, vou revisar minhas 3 prioridades do dia"</li>
                <li>• "Depois de almoçar, vou caminhar 5 minutos"</li>
              </ul>

              <p className="mb-8">
                <strong>Por que funciona:</strong> Você não precisa lembrar ou criar disciplina — o gatilho é automático (você já faz todo dia).
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Pilar 3: Torne Óbvio e Fácil
              </h3>

              <p className="mb-4">
                <strong>Lei da Menor Resistência:</strong> Você vai fazer o que for mais fácil. Então, <strong>reduza a fricção</strong> para hábitos bons e <strong>aumente a fricção</strong> para hábitos ruins.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-4">✅ Reduzir Fricção (Hábitos Bons):</p>
                
                <ul className="space-y-3 mb-6">
                  <li>• <strong>Academia:</strong> Durma com roupa de treino, deixe tênis ao lado da cama</li>
                  <li>• <strong>Leitura:</strong> Deixe livro aberto na mesa de cabeceira, marcador na página</li>
                  <li>• <strong>Alimentação saudável:</strong> Corte frutas no domingo, deixe em potes visíveis</li>
                  <li>• <strong>Meditar:</strong> Configure app para abrir automaticamente às 7h</li>
                </ul>

                <p className="font-semibold mb-4">❌ Aumentar Fricção (Hábitos Ruins):</p>
                
                <ul className="space-y-3">
                  <li>• <strong>Redes sociais:</strong> Desinstale apps do celular (force usar no navegador)</li>
                  <li>• <strong>Comer besteira:</strong> Não tenha em casa (precisa sair para comprar)</li>
                  <li>• <strong>Procrastinação:</strong> Use apps que bloqueiam sites (Freedom, Cold Turkey)</li>
                  <li>• <strong>Netflix demais:</strong> Deslogue após cada sessão</li>
                </ul>
              </div>

              <p className="mb-8">
                <strong>Regra de ouro:</strong> Se um hábito bom leva mais de 2 minutos para começar, você vai desistir. Reduza a fricção ao máximo.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Pilar 4: Recompensa Imediata
              </h3>

              <p className="mb-4">
                Seu cérebro primitivo não se importa com "ficar saudável em 6 meses". Ele quer <strong>prazer AGORA</strong>.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">🎁 Como Criar Recompensas Imediatas:</p>
                
                <ol className="space-y-4">
                  <li>
                    <strong>1. Rastreie visualmente (Habit Tracker):</strong>
                    <p className="text-muted-foreground">Marque X no calendário após completar. O X visual é satisfação instantânea.</p>
                  </li>
                  
                  <li>
                    <strong>2. Celebre micro-vitórias:</strong>
                    <p className="text-muted-foreground">Após fazer o hábito, diga "Consegui!" ou faça gesto de vitória. Sério. Seu cérebro libera dopamina.</p>
                  </li>
                  
                  <li>
                    <strong>3. Combine hábito difícil + prazer:</strong>
                    <p className="text-muted-foreground">Só ouça podcast favorito durante exercício. Só tome café especial após escrever.</p>
                  </li>
                  
                  <li>
                    <strong>4. Compartilhe progresso:</strong>
                    <p className="text-muted-foreground">Poste streak no Instagram. Validação social = dopamina.</p>
                  </li>
                </ol>
              </div>

              {/* Seção 3 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Sistema de 30 Dias Para Instalar Um Hábito
              </h2>

              <p className="mb-4">
                Aqui está o plano completo para transformar qualquer comportamento em hábito:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-3">📅 Dias 1-7: Estabelecer o Loop</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Comece com versão de 2 minutos</li>
                    <li>• Faça TODO DIA no mesmo horário</li>
                    <li>• Use empilhamento de hábitos</li>
                    <li>• Marque X no calendário após completar</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-3">📅 Dias 8-14: Consolidar Consistência</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• NÃO aumente duração ainda</li>
                    <li>• Foco total em não quebrar a sequência</li>
                    <li>• Se falhar um dia, retome imediatamente no próximo</li>
                    <li>• Prepare ambiente no dia anterior</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-3">📅 Dias 15-21: Expandir Gradualmente</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Agora sim, aumente para 5-10 minutos</li>
                    <li>• Adicione variação (diferentes exercícios, livros, etc)</li>
                    <li>• Continue rastreando</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-3">📅 Dias 22-30: Automatizar</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Hábito deve estar ficando natural</li>
                    <li>• Você sente falta se não fizer</li>
                    <li>• Continue rastreando por mais 30 dias</li>
                  </ul>
                </div>
              </div>

              {/* Seção 4 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Erros Fatais Ao Criar Hábitos
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Tentar mudar vários hábitos ao mesmo tempo</p>
                  <p className="text-muted-foreground mb-2">Sua força de vontade é limitada. Queimar tudo de uma vez = falhar em tudo.</p>
                  <p className="text-sm"><strong>Solução:</strong> 1 hábito por vez. Máximo 2 se forem muito pequenos.</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Julgar-se após falhar</p>
                  <p className="text-muted-foreground mb-2">"Falhei 1 dia, já era" → espiral de culpa e desistência</p>
                  <p className="text-sm"><strong>Solução:</strong> Regra do "nunca pule 2 vezes seguidas". Falhou hoje? Ok. Amanhã você DEVE fazer.</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Não ter plano B</p>
                  <p className="text-muted-foreground mb-2">Vida acontece. Viagens, imprevistos, doença.</p>
                  <p className="text-sm"><strong>Solução:</strong> Tenha versão mínima para dias ruins (1 flexão, 1 frase, 30 segundos de meditação).</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Focar no resultado, não na identidade</p>
                  <p className="text-muted-foreground mb-2">"Quero perder 10kg" vs "Quero ser uma pessoa saudável"</p>
                  <p className="text-sm"><strong>Solução:</strong> Pergunte: "Que tipo de pessoa faz isso?" e aja como ela.</p>
                </div>
              </div>

              {/* Seção 5 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Ferramentas e Apps Para Rastreamento
              </h2>

              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-2">🏆 Habit Tracker (iOS/Android)</p>
                  <p className="text-muted-foreground">App visual simples para marcar hábitos diários</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-2">📊 Notion</p>
                  <p className="text-muted-foreground">Crie dashboard personalizado de hábitos com métricas</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-2">🔥 Streaks (iOS)</p>
                  <p className="text-muted-foreground">Focado em não quebrar sequências</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-2">✅ Habitica</p>
                  <p className="text-muted-foreground">Gamificação: transforma hábitos em jogo RPG</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-2">📅 Google Calendar</p>
                  <p className="text-muted-foreground">Bloqueie tempo fixo para hábitos importantes</p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Quer um Sistema Completo de Rastreamento de Hábitos?
                </h3>
                <p className="text-lg mb-6">
                  Nossos sistemas no Notion incluem templates de habit tracker, dashboards de progresso e frameworks de produtividade integrados.
                </p>
                <Link 
                  to="/sistemas-notion"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Ver Sistemas Completos →
                </Link>
              </div>

              {/* Conclusão */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Conclusão: Transforme Esforço em Automatismo
              </h2>

              <p className="mb-4">
                Hábitos são o <strong>juros compostos do desenvolvimento pessoal</strong>. Pequenas ações repetidas consistentemente criam resultados extraordinários.
              </p>

              <p className="mb-4">
                O segredo não é força de vontade — <strong>é design inteligente</strong>:
              </p>

              <ul className="space-y-2 mb-6">
                <li>✓ Comece ridiculamente pequeno</li>
                <li>✓ Conecte a hábitos existentes</li>
                <li>✓ Torne fácil e óbvio</li>
                <li>✓ Celebre cada vitória</li>
              </ul>

              <p className="mb-8">
                Escolha UM hábito hoje. Versão de 2 minutos. Faça por 30 dias. Sua vida em 1 ano será completamente diferente.
              </p>
            </div>

            {/* Artigos Relacionados */}
            <div className="mt-16 pt-8 border-t border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Artigos Relacionados</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/blog/metodos-produtividade-2025" className="block p-6 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <h4 className="font-semibold mb-2 text-foreground">7 Métodos de Produtividade 2025</h4>
                  <p className="text-sm text-muted-foreground">Os principais frameworks usados por produtivos</p>
                </Link>
                <Link to="/blog/sistema-produtividade-passo-passo" className="block p-6 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <h4 className="font-semibold mb-2 text-foreground">Sistema de Produtividade Completo</h4>
                  <p className="text-sm text-muted-foreground">Construa seu sistema personalizado</p>
                </Link>
                <Link to="/blog/planejamento-anual-do-zero" className="block p-6 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <h4 className="font-semibold mb-2 text-foreground">Planejamento Anual do Zero</h4>
                  <p className="text-sm text-muted-foreground">Como planejar o ano com clareza</p>
                </Link>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default CriarHabitosDuram;