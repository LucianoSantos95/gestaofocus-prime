import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import BlogCTA from "@/components/BlogCTA";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeaways from "@/components/blog/KeyTakeaways";
import ArticleEngagement from "@/components/blog/ArticleEngagement";
import AuthorBio from "@/components/blog/AuthorBio";
import InlineRelatedArticles from "@/components/blog/InlineRelatedArticles";
import articleImage from "@/assets/blog/metodo-gtd-guia.jpg";

const MetodoGTDGuia = () => {
  const imageUrl = "https://focusinteligente.com.br" + articleImage;
  const articleUrl = "https://focusinteligente.com.br/blog/metodo-gtd-guia-completo";

  const tocItems = [
    { id: "o-que-e", text: "O Que É o Método GTD?", level: 2 },
    { id: "5-passos", text: "Os 5 Passos do Método GTD", level: 2 },
    { id: "exemplos", text: "Exemplos Práticos de Aplicação", level: 2 },
    { id: "erros", text: "Erros Comuns ao Usar o GTD", level: 2 },
    { id: "notion", text: "Como Usar GTD no Notion", level: 2 },
  ];

  const keyTakeaways = [
    "GTD libera sua mente ao tirar todas as tarefas da cabeça",
    "Os 5 passos: Capturar, Esclarecer, Organizar, Refletir e Engajar",
    "Regra dos 2 minutos: se leva menos tempo, faça agora",
    "Revisão semanal é obrigatória para manter o sistema funcionando",
    "Notion é ferramenta ideal para implementar GTD",
  ];

  const inlineRelated = [
    { title: "Técnica Pomodoro: complemento perfeito para GTD", slug: "tecnica-pomodoro-guia-definitivo" },
    { title: "Matriz de Eisenhower para priorização", slug: "matriz-eisenhower-prioridades" },
  ];

  return (
    <>
      <ReadingProgressBar />
      <SEOHead
        title="Método GTD: O Que É, Como Funciona e Como Aplicar na Prática"
        description="Aprenda o método GTD (Getting Things Done) de David Allen. Guia completo com os 5 passos, exemplos práticos e dicas para organizar suas tarefas."
        canonical="/blog/metodo-gtd-guia-completo"
        image={imageUrl}
        type="article"
        publishedTime="2025-12-22"
        modifiedTime="2025-12-22"
        keywords="método GTD, getting things done, produtividade, organização de tarefas, David Allen, gestão de tempo"
      />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <article className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <BlogBreadcrumb 
              articleTitle="Método GTD" 
              articleSlug="metodo-gtd-guia-completo" 
            />

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
                Método GTD: O Que É, Como Funciona e Como Aplicar na Prática
              </h1>
              <p className="text-xl text-muted-foreground">
                O sistema comprovado de produtividade que libera sua mente e transforma caos em clareza
              </p>
            </header>

            <ArticleEngagement 
              publishDate="22 de dezembro de 2025"
              readTime="15 min"
              articleUrl={articleUrl}
              articleTitle="Método GTD: O Que É, Como Funciona e Como Aplicar na Prática"
            />

            <div className="mb-12 rounded-xl overflow-hidden">
              <img 
                src={articleImage} 
                alt="Mesa de trabalho organizada representando o método GTD"
                className="w-full h-auto"
              />
            </div>

            <KeyTakeaways items={keyTakeaways} readTime="15 min" />

            <TableOfContents items={tocItems} />

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

              <h2 id="o-que-e" className="text-3xl font-bold mt-12 mb-6 text-foreground">
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

              <InlineRelatedArticles articles={inlineRelated} title="Artigos relacionados" />

              <h2 id="5-passos" className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Os 5 Passos do Método GTD
              </h2>

              <p className="mb-6">
                O GTD é estruturado em 5 etapas que formam um ciclo contínuo. Vamos entender cada uma:
              </p>

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
                  <p className="text-muted-foreground">Qualquer resultado que exija mais de uma ação</p>
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
                  <p className="text-muted-foreground">Ideias e desejos para o futuro</p>
                </div>
              </div>

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
                  <li>• Revisar lista de projetos</li>
                  <li>• Verificar calendário da próxima semana</li>
                  <li>• Atualizar lista de próximas ações</li>
                  <li>• Revisar "Aguardando"</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                5. Engajar (Engage)
              </h3>

              <p className="mb-4">
                Com tudo organizado, você está pronto para <strong>agir com confiança</strong>. Ao olhar sua lista de próximas ações, você escolhe o que fazer baseado em contexto, tempo disponível, energia e prioridade.
              </p>

              <h2 id="exemplos" className="text-3xl font-bold mt-12 mb-6 text-foreground">
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
                  <li><strong>Organizar:</strong> Adicionar "Apresentação para reunião" na lista de Projetos + "Criar estrutura de slides" em Próximas Ações</li>
                </ol>
              </div>

              <h2 id="erros" className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Erros Comuns ao Usar o GTD (e Como Evitar)
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Erro 1: Complicar demais o sistema</p>
                  <p className="text-muted-foreground mb-2">Criar dezenas de listas, categorias e tags.</p>
                  <p className="text-sm"><strong>Solução:</strong> Comece com o básico. Adicione listas só quando sentir necessidade real.</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Erro 2: Não fazer a revisão semanal</p>
                  <p className="text-muted-foreground mb-2">Sem revisão, as listas ficam desatualizadas.</p>
                  <p className="text-sm"><strong>Solução:</strong> Bloqueie um horário fixo na agenda. Trate como reunião inadiável.</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Erro 3: Escrever tarefas vagas</p>
                  <p className="text-muted-foreground mb-2">"Resolver situação do cliente" não é uma próxima ação.</p>
                  <p className="text-sm"><strong>Solução:</strong> Sempre pergunte: "Qual é a PRÓXIMA ação física?"</p>
                </div>
              </div>

              <h2 id="notion" className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Como Usar GTD no Notion
              </h2>

              <p className="mb-4">
                O Notion é uma ferramenta perfeita para implementar GTD porque oferece:
              </p>

              <ul className="space-y-3 mb-8">
                <li>✓ <strong>Banco de dados flexível:</strong> Crie sua caixa de entrada, projetos e próximas ações</li>
                <li>✓ <strong>Múltiplas visualizações:</strong> Veja como lista, kanban ou calendário</li>
                <li>✓ <strong>Templates:</strong> Automatize criação de projetos e revisões</li>
                <li>✓ <strong>Acesso mobile:</strong> Capture ideias em qualquer lugar</li>
              </ul>

              <div className="bg-muted p-8 rounded-lg my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Sistema GTD Pronto no Notion
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Nossos templates já vêm com o GTD configurado para você começar imediatamente.
                </p>
                <Link 
                  to="/sistemas-notion" 
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Ver Sistemas Notion
                </Link>
              </div>

              <AuthorBio />
            </div>

            <div className="mt-16 pt-8 border-t border-border">
              <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/blog/tecnica-pomodoro-guia-definitivo" className="group">
                  <div className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      Técnica Pomodoro: Funciona Mesmo?
                    </h4>
                  </div>
                </Link>
                <Link to="/blog/matriz-eisenhower-prioridades" className="group">
                  <div className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      Matriz de Eisenhower: Defina Prioridades
                    </h4>
                  </div>
                </Link>
                <Link to="/blog/organizar-rotina-semanal" className="group">
                  <div className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      Como Organizar Sua Rotina Semanal
                    </h4>
                  </div>
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

export default MetodoGTDGuia;
