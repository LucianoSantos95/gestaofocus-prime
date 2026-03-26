import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import tecnologiaImage from "@/assets/blog/organizacao-pessoal-tecnologia.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";

const OrganizacaoPessoalTecnologia = () => {
  const imageUrl = "https://focusinteligente.com.br" + tecnologiaImage;

  return (
    <>
      <SEOHead
        title="Tecnologia para Organizar Agências e Consultorias | Focus"
        description="Como agências e consultorias usam tecnologia para organizar operações e ter clareza mental. Segundo cérebro digital para prestadores de serviço."
        canonical="/blog/organizacao-pessoal-tecnologia"
        image={imageUrl}
        type="article"
        publishedTime="2025-01-15"
        modifiedTime="2025-01-15"
        keywords="tecnologia organização agência, segundo cérebro consultoria, clareza mental prestadores serviço, produtividade operacional"
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/blog">Blog</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Organização Pessoal 2.0</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Como usar tecnologia para organizar sua agência ou consultoria e ter clareza operacional
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Tecnologia pode simplificar ou complicar a operação. Descubra como criar um segundo cérebro digital que libera a mente de quem presta serviço.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>📚 Tempo de leitura: 12 min</span>
                <span>📅 15 de janeiro, 2025</span>
              </div>
            </header>

            <img 
              src={tecnologiaImage} 
              alt="Profissional de agência usando tecnologia para organizar operações e ter clareza na gestão de clientes" 
              className="w-full h-[400px] object-cover rounded-lg mb-12 shadow-lg" 
            />

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">O Paradoxo da Era Digital</h2>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Temos mais ferramentas de produtividade do que nunca. Apps para tudo: tarefas, notas, calendário, projetos, finanças, hábitos. Então por que nos sentimos mais desorganizados e sobrecarregados?
                </p>

                <div className="bg-muted/50 border-l-4 border-muted p-6 rounded-r-lg my-8">
                  <p className="text-foreground font-semibold mb-3">❌ O Problema Não é Falta de Ferramentas</p>
                  <p className="text-muted-foreground mb-3">
                    O problema é <strong>excesso de ferramentas sem sistema</strong>. Você tem 15 apps, informação espalhada, e sua mente ainda precisa lembrar "onde está o quê".
                  </p>
                  <p className="text-muted-foreground">
                    Resultado: tecnologia vira mais um fardo ao invés de ajudar.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  A boa notícia? Existe uma forma melhor. Uma abordagem onde tecnologia realmente libera sua mente ao invés de sobrecarregar.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Chama-se <strong>Organização Pessoal 2.0</strong> - e é baseada no conceito de Segundo Cérebro.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">O Conceito: Segundo Cérebro Digital</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Seu cérebro é máquina poderosa para <em>pensar</em>, não para <em>guardar</em>. Quando você usa memória para lembrar tarefas, compromissos, ideias - está desperdiçando poder de processamento.
                </p>

                <div className="bg-primary/10 border border-primary rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">🧠 Princípio Central</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Seu cérebro processa. Seu sistema digital guarda.</strong>
                  </p>
                  <p className="text-muted-foreground">
                    Quando você confia 100% no seu sistema externo, sua mente fica livre para fazer o que faz de melhor: pensar, criar, resolver problemas.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-foreground">Como Funciona na Prática</h3>

                <div className="space-y-6">
                  <div className="bg-background border-l-4 border-primary p-6 rounded-r-lg">
                    <h4 className="text-lg font-semibold mb-2 text-foreground">1. Captura Sem Fricção</h4>
                    <p className="text-muted-foreground mb-3">
                      Tudo que chega (tarefa, ideia, compromisso, artigo interessante) vai para uma <strong>inbox única</strong>. Não fica na cabeça.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>Exemplo:</strong> Lembrou que precisa responder email importante? → Anota na inbox. Teve ideia de novo projeto? → Inbox. Compromisso médico? → Inbox.
                    </p>
                  </div>

                  <div className="bg-background border-l-4 border-primary p-6 rounded-r-lg">
                    <h4 className="text-lg font-semibold mb-2 text-foreground">2. Processamento Intencional</h4>
                    <p className="text-muted-foreground mb-3">
                      1x por dia, você processa inbox. Cada item recebe destino: tarefa, projeto, referência, lixo.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>Exemplo:</strong> "Responder email" → Tarefa para hoje. "Ideia projeto" → Vai para lista projetos futuros. "Link artigo" → Salva em referências. "Lembrete aleatório" → Descarta.
                    </p>
                  </div>

                  <div className="bg-background border-l-4 border-primary p-6 rounded-r-lg">
                    <h4 className="text-lg font-semibold mb-2 text-foreground">3. Organização Simples</h4>
                    <p className="text-muted-foreground mb-3">
                      Informação organizada em poucos lugares claros. Não precisa lembrar "onde guardei isso" - é intuitivo.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>Estrutura básica:</strong> Tarefas (o que fazer) | Projetos (resultados desejados) | Áreas (responsabilidades contínuas) | Recursos (informação de referência)
                    </p>
                  </div>

                  <div className="bg-background border-l-4 border-primary p-6 rounded-r-lg">
                    <h4 className="text-lg font-semibold mb-2 text-foreground">4. Confiança Total</h4>
                    <p className="text-muted-foreground mb-3">
                      Você SABE que se está no sistema, não precisa lembrar. Isso libera energia mental gigantesca.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>Antes:</strong> "Será que estou esquecendo algo importante?" (ansiedade constante).<br />
                      <strong>Depois:</strong> "Está no sistema" (mente tranquila).
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">As 4 Camadas do Sistema Completo</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Um sistema de organização pessoal eficaz tem 4 camadas trabalhando juntas:
                </p>

                <div className="space-y-8">
                  <div className="border border-border rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">📥</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3 text-foreground">Camada 1: Captura (Inbox)</h3>
                        <p className="text-muted-foreground mb-4">
                          Local único onde TUDO entra antes de ser processado. Ponto de entrada sem julgamento.
                        </p>
                        <p className="text-foreground font-semibold mb-2">Ferramentas ideais:</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Notion (inbox de tarefas e notas)</li>
                          <li>App nativo de notas (acesso rápido no celular)</li>
                          <li>Email (inbox tradicional)</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-3 italic">
                          Regra de ouro: Se tem que lembrar, não está capturado.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">✅</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3 text-foreground">Camada 2: Ação (Tarefas)</h3>
                        <p className="text-muted-foreground mb-4">
                          Lista dinâmica do que precisa ser feito. Organizada por contexto, prioridade ou data.
                        </p>
                        <p className="text-foreground font-semibold mb-2">Sistema recomendado:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li><strong>Hoje:</strong> Máximo 3-5 tarefas prioritárias</li>
                          <li><strong>Esta semana:</strong> Próximas ações visíveis</li>
                          <li><strong>Backlog:</strong> Tudo que precisa ser feito eventualmente</li>
                          <li><strong>Aguardando:</strong> Delegado ou dependente de terceiros</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-3 italic">
                          Regra de ouro: Se leva menos de 2 minutos, faça agora. Não liste.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">🎯</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3 text-foreground">Camada 3: Projetos & Áreas</h3>
                        <p className="text-muted-foreground mb-4">
                          <strong>Projetos:</strong> Resultados desejados que exigem múltiplas ações (ex: "Lançar novo produto").<br />
                          <strong>Áreas:</strong> Responsabilidades contínuas sem "fim" (ex: "Saúde", "Carreira", "Família").
                        </p>
                        <p className="text-foreground font-semibold mb-2">Como organizar:</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Cada projeto tem página própria com objetivo, próximas ações, recursos</li>
                          <li>Revisão semanal: projetos ativos avançaram?</li>
                          <li>Áreas servem como "categorias mãe" para projetos relacionados</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-3 italic">
                          Regra de ouro: Projeto sem próxima ação definida está paralisado.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">📚</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3 text-foreground">Camada 4: Recursos (Conhecimento)</h3>
                        <p className="text-muted-foreground mb-4">
                          Informação de referência que não exige ação, mas pode ser útil futuramente. Seu arquivo pessoal organizado.
                        </p>
                        <p className="text-foreground font-semibold mb-2">O que vai aqui:</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Artigos e conteúdos salvos (com notas suas)</li>
                          <li>Aprendizados e insights</li>
                          <li>Templates e modelos</li>
                          <li>Documentos importantes (contratos, certificados)</li>
                          <li>Ideias futuras (não são projetos ainda)</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-3 italic">
                          Regra de ouro: Se não tem tag ou categoria clara, provavelmente não vai precisar.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Rotinas Que Mantêm o Sistema Vivo</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sistema sem manutenção vira bagunça em 2 semanas. Estas rotinas simples garantem que tudo funciona continuamente:
                </p>

                <div className="space-y-6">
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">⏰ Diário (5 minutos de manhã + 5 minutos à noite)</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-foreground font-semibold mb-1">Manhã:</p>
                        <ul className="list-disc list-inside text-muted-foreground">
                          <li>Revise calendário do dia</li>
                          <li>Escolha 3-5 tarefas prioritárias</li>
                          <li>Processe inbox se tiver items</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-foreground font-semibold mb-1">Noite:</p>
                        <ul className="list-disc list-inside text-muted-foreground">
                          <li>Marque tarefas completadas</li>
                          <li>Capture qualquer pensamento solto</li>
                          <li>Prepare lista de amanhã (opcional)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">📅 Semanal (30 minutos toda sexta ou domingo)</h3>
                    <ul className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Processe inbox completamente (zero items)</li>
                      <li>Revise projetos ativos: próximas ações claras?</li>
                      <li>Limpe tarefas antigas/irrelevantes</li>
                      <li>Planeje semana seguinte (blocos de tempo)</li>
                      <li>Revise áreas da vida: algo precisa atenção?</li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">🗓️ Mensal (1 hora no fim/início do mês)</h3>
                    <ul className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Revise metas e projetos de longo prazo</li>
                      <li>Archive projetos completados</li>
                      <li>Avalie: sistema está funcionando? Ajustes necessários?</li>
                      <li>Celebre conquistas do mês</li>
                      <li>Defina prioridades do próximo mês</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Erros Comuns (E Como Evitá-los)</h2>

                <div className="space-y-4">
                  <div className="bg-destructive/10 border-l-4 border-destructive p-5 rounded-r-lg">
                    <p className="text-foreground font-semibold mb-2">❌ Erro #1: Overengineering (Complicar Demais)</p>
                    <p className="text-muted-foreground mb-2">
                      Você não precisa de 47 categorias e sistema perfeito. Simples funciona melhor que complexo.
                    </p>
                    <p className="text-foreground font-semibold text-sm">✅ Solução:</p>
                    <p className="text-muted-foreground text-sm">
                      Comece minimalista: Inbox + Tarefas + Recursos. Adicione complexidade só quando sentir falta clara.
                    </p>
                  </div>

                  <div className="bg-destructive/10 border-l-4 border-destructive p-5 rounded-r-lg">
                    <p className="text-foreground font-semibold mb-2">❌ Erro #2: Ferramentas Demais</p>
                    <p className="text-muted-foreground mb-2">
                      App diferente para cada coisa. Resultado: não sabe onde está o quê.
                    </p>
                    <p className="text-foreground font-semibold text-sm">✅ Solução:</p>
                    <p className="text-muted-foreground text-sm">
                      Máximo 2-3 ferramentas principais. Idealmente, tudo em uma (Notion é excelente para isso).
                    </p>
                  </div>

                  <div className="bg-destructive/10 border-l-4 border-destructive p-5 rounded-r-lg">
                    <p className="text-foreground font-semibold mb-2">❌ Erro #3: Não Processar Inbox</p>
                    <p className="text-muted-foreground mb-2">
                      Inbox com 500 items. Virou bagunça ao invés de clareza.
                    </p>
                    <p className="text-foreground font-semibold text-sm">✅ Solução:</p>
                    <p className="text-muted-foreground text-sm">
                      Inbox zero toda semana é não-negociável. Se não processar, sistema não funciona.
                    </p>
                  </div>

                  <div className="bg-destructive/10 border-l-4 border-destructive p-5 rounded-r-lg">
                    <p className="text-foreground font-semibold mb-2">❌ Erro #4: Perfeccionismo</p>
                    <p className="text-muted-foreground mb-2">
                      Gasta mais tempo organizando do que fazendo. Organização vira procrastinação.
                    </p>
                    <p className="text-foreground font-semibold text-sm">✅ Solução:</p>
                    <p className="text-muted-foreground text-sm">
                      Sistema existe para apoiar ação, não substituir. Se está reorganizando 2h por dia, algo está errado.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Plano de Implementação de 21 Dias</h2>

                <div className="bg-primary/10 border border-primary rounded-lg p-6">
                  <div className="space-y-6">
                    <div>
                      <p className="text-foreground font-semibold mb-2">Semana 1: Setup & Captura</p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Dia 1-2: Monte estrutura básica na ferramenta escolhida</li>
                        <li>Dia 3-5: Faça "brain dump" - tire TUDO da cabeça para inbox</li>
                        <li>Dia 6-7: Pratique capturar tudo que surge</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-foreground font-semibold mb-2">Semana 2: Processamento & Rotinas</p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Dia 8-10: Processe inbox completamente (classifique tudo)</li>
                        <li>Dia 11-14: Implemente rotina diária (manhã + noite)</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-foreground font-semibold mb-2">Semana 3: Refinamento & Confiança</p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Dia 15-18: Ajuste sistema (o que funciona? o que não?)</li>
                        <li>Dia 19-21: Primeira revisão semanal completa</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-foreground font-semibold mb-2">🎯 Meta após 21 dias:</p>
                    <p className="text-muted-foreground">
                      Mente livre de "preciso lembrar". Confiança total no sistema. Clareza sobre prioridades. Redução de 50% em ansiedade e sobrecarga mental.
                    </p>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg my-12 text-center border border-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Sistema Completo de Organização no Notion</h3>
                <p className="text-muted-foreground mb-6">
                  Implemente todo esse sistema com templates prontos. Inbox, tarefas, projetos, recursos e rotinas já estruturadas e funcionais.
                </p>
                <Link 
                  to="/sistemas-notion" 
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Ver Sistema de Organização
                </Link>
              </div>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Perguntas Frequentes</h2>
                
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-5">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Qual a melhor ferramenta para criar segundo cérebro?</h3>
                    <p className="text-muted-foreground">
                      Notion (mais completo), Obsidian (para quem prefere markdown), Apple Notes (simples e nativo). O importante é escolher UMA e dominar.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-5">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Quanto tempo leva para sistema virar hábito?</h3>
                    <p className="text-muted-foreground">
                      21 dias para começar a sentir natural, 90 dias para ser automático. Primeiros 7 dias são os mais difíceis - persista.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-5">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">E se eu esquecer de capturar algo importante?</h3>
                    <p className="text-muted-foreground">
                      Vai acontecer no início. Quando lembrar, capture naquele momento. Com prática, captura vira reflexo automático.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-5">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Como lidar com emails dentro desse sistema?</h3>
                    <p className="text-muted-foreground">
                      Email é outra inbox. Processe 2x por dia: converta emails acionáveis em tarefas no sistema principal. Email não é lista de tarefas.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mt-12 pt-8 border-t border-border">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Continue Lendo</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link to="/blog/sistema-produtividade-passo-passo" className="group">
                    <div className="border border-border rounded-lg p-5 hover:border-primary transition-colors">
                      <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary">
                        Sistema de Produtividade Passo a Passo
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Guia completo para montar seu sistema do zero
                      </p>
                    </div>
                  </Link>
                  
                  <Link to="/blog/sistema-completo-notion" className="group">
                    <div className="border border-border rounded-lg p-5 hover:border-primary transition-colors">
                      <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary">
                        Sistema Completo no Notion
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Como estruturar Notion para gerenciar vida toda
                      </p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default OrganizacaoPessoalTecnologia;
