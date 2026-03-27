import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCTA from "@/components/BlogCTA";
import articleImage from "@/assets/blog/matriz-eisenhower-prioridades.jpg";

const MatrizEisenhower = () => {
  const articleUrl = "https://focusinteligente.com.br/blog/matriz-eisenhower-prioridades";
  const imageUrl = "https://focusinteligente.com.br" + articleImage;

  return (
    <>
      <SEOHead
        title="Matriz de Eisenhower para Agências: Priorize Demandas"
        description="Use a Matriz de Eisenhower para priorizar demandas de clientes na sua agência ou consultoria. Separe urgente de importante e foque no que gera resultado."
        canonical="/blog/matriz-eisenhower-prioridades"
        image={imageUrl}
        type="article"
        publishedTime="2025-12-22"
        modifiedTime="2025-12-22"
        keywords="matriz eisenhower agência, priorização demandas clientes, urgente vs importante, gestão agência, consultoria produtividade"
      />

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
              <span className="text-foreground">Matriz de Eisenhower</span>
            </nav>

            {/* Título e Subtítulo */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
                Matriz de Eisenhower para Agências: Como Priorizar Demandas de Clientes
              </h1>
              <p className="text-xl text-muted-foreground">
                O método que separa o urgente do importante e transforma a produtividade da sua operação
              </p>
            </header>

            {/* Imagem de Capa */}
            <div className="mb-12 rounded-xl overflow-hidden">
              <img 
                src={articleImage} 
                alt="Matriz de prioridades 2x2 em mesa de trabalho organizada"
                className="w-full h-auto"
              />
            </div>

            {/* Conteúdo do Artigo */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Quantas vezes você terminou o dia exausto, mas com a sensação de que não fez nada que realmente importava? Passou horas respondendo e-mails, em reuniões, apagando incêndios — e os projetos importantes continuam parados.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Esse é um dos problemas mais comuns do profissional moderno: <strong>confundir o urgente com o importante</strong>. A boa notícia é que existe uma ferramenta simples e poderosa para resolver isso.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                A <strong>Matriz de Eisenhower</strong> é um método de priorização que ajuda você a decidir rapidamente o que fazer, o que agendar, o que delegar e o que eliminar. Neste artigo, você vai aprender exatamente como usá-la no seu dia a dia.
              </p>

              {/* Seção 1 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                O Que É a Matriz de Eisenhower?
              </h2>

              <p className="mb-4">
                A Matriz de Eisenhower foi popularizada por Dwight D. Eisenhower, o 34º presidente dos Estados Unidos. Antes de ser presidente, ele foi general do exército e comandou operações complexas durante a Segunda Guerra Mundial.
              </p>

              <p className="mb-4">
                Eisenhower era conhecido por sua capacidade extraordinária de tomar decisões e gerenciar prioridades. Sua famosa frase resume a essência do método:
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mb-6 border-l-4 border-primary">
                <p className="text-lg font-medium italic">
                  "O que é importante raramente é urgente, e o que é urgente raramente é importante."
                </p>
                <p className="text-sm text-muted-foreground mt-2">— Dwight D. Eisenhower</p>
              </div>

              <p className="mb-8">
                A matriz é uma ferramenta visual que divide suas tarefas em <strong>quatro quadrantes</strong>, baseados em dois critérios: urgência e importância. Isso permite tomar decisões rápidas sobre o que merece seu tempo e energia.
              </p>

              {/* Seção 2 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Os Quatro Quadrantes da Matriz
              </h2>

              <p className="mb-6">
                A matriz funciona assim: você classifica cada tarefa em um dos quatro quadrantes com base em duas perguntas simples:
              </p>

              <ul className="space-y-2 mb-8">
                <li>1. <strong>Isso é urgente?</strong> (Precisa ser feito agora ou em breve?)</li>
                <li>2. <strong>Isso é importante?</strong> (Contribui para meus objetivos de longo prazo?)</li>
              </ul>

              {/* Quadrante 1 */}
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Quadrante 1: Urgente e Importante — FAZER AGORA
              </h3>

              <div className="bg-red-500/10 p-6 rounded-lg mb-6 border-l-4 border-red-500">
                <p className="font-semibold mb-2">🔴 Crises e emergências</p>
                <p className="text-muted-foreground">Tarefas que exigem ação imediata e têm impacto significativo nos seus objetivos.</p>
              </div>

              <p className="mb-4">
                <strong>Exemplos:</strong>
              </p>
              <ul className="space-y-2 mb-6">
                <li>• Prazo de entrega que vence hoje</li>
                <li>• Cliente com problema crítico</li>
                <li>• Emergência de saúde</li>
                <li>• Bug que derrubou o sistema</li>
                <li>• Reunião importante que começa em 1 hora</li>
              </ul>

              <div className="border-l-4 border-primary pl-4 mb-8">
                <p className="font-semibold mb-2">⚠️ Atenção</p>
                <p className="text-muted-foreground">Se você vive no Quadrante 1, está em modo de sobrevivência. É estressante e insustentável. O objetivo é reduzir o tempo aqui através de melhor planejamento.</p>
              </div>

              {/* Quadrante 2 */}
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Quadrante 2: Importante, Mas Não Urgente — AGENDAR
              </h3>

              <div className="bg-green-500/10 p-6 rounded-lg mb-6 border-l-4 border-green-500">
                <p className="font-semibold mb-2">🟢 Zona de alta performance</p>
                <p className="text-muted-foreground">Atividades que constroem resultados de longo prazo, mas não têm pressão imediata.</p>
              </div>

              <p className="mb-4">
                <strong>Exemplos:</strong>
              </p>
              <ul className="space-y-2 mb-6">
                <li>• Planejamento estratégico</li>
                <li>• Desenvolvimento de novos produtos</li>
                <li>• Estudar e aprender novas habilidades</li>
                <li>• Exercício físico e cuidados com saúde</li>
                <li>• Construir relacionamentos profissionais</li>
                <li>• Criar sistemas e processos</li>
              </ul>

              <div className="bg-primary/10 p-6 rounded-lg mb-8 border-l-4 border-primary">
                <p className="font-semibold mb-2">💡 Insight crucial</p>
                <p>O Quadrante 2 é onde acontece a verdadeira produtividade. Pessoas de alta performance passam a maior parte do tempo aqui. É o quadrante da prevenção, do planejamento e do crescimento.</p>
              </div>

              {/* Quadrante 3 */}
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Quadrante 3: Urgente, Mas Não Importante — DELEGAR
              </h3>

              <div className="bg-yellow-500/10 p-6 rounded-lg mb-6 border-l-4 border-yellow-500">
                <p className="font-semibold mb-2">🟡 Interrupções e distrações disfarçadas</p>
                <p className="text-muted-foreground">Parecem urgentes, mas não contribuem para seus objetivos reais.</p>
              </div>

              <p className="mb-4">
                <strong>Exemplos:</strong>
              </p>
              <ul className="space-y-2 mb-6">
                <li>• A maioria das ligações telefônicas</li>
                <li>• E-mails que pedem "resposta urgente" (mas não são)</li>
                <li>• Reuniões que poderiam ser um e-mail</li>
                <li>• Pedidos de colegas que interrompem seu trabalho</li>
                <li>• Relatórios que ninguém lê</li>
              </ul>

              <p className="mb-8">
                <strong>Ação:</strong> Delegue quando possível. Se não puder delegar, minimize o tempo gasto. Aprenda a dizer "não" ou "agora não" educadamente.
              </p>

              {/* Quadrante 4 */}
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Quadrante 4: Nem Urgente, Nem Importante — ELIMINAR
              </h3>

              <div className="bg-gray-500/10 p-6 rounded-lg mb-6 border-l-4 border-gray-500">
                <p className="font-semibold mb-2">⚫ Desperdiçadores de tempo</p>
                <p className="text-muted-foreground">Atividades que não agregam valor e consomem energia.</p>
              </div>

              <p className="mb-4">
                <strong>Exemplos:</strong>
              </p>
              <ul className="space-y-2 mb-6">
                <li>• Rolar redes sociais sem propósito</li>
                <li>• Assistir TV por horas</li>
                <li>• Fofoca e conversas improdutivas</li>
                <li>• Navegar na internet sem objetivo</li>
                <li>• Jogos excessivos</li>
              </ul>

              <p className="mb-8">
                <strong>Ação:</strong> Elimine ou reduza drasticamente. Essas atividades são ladrões de tempo disfarçados de "descanso". Substitua por pausas que realmente restauram energia.
              </p>

              {/* Seção 3 - Visual da Matriz */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Visão Geral da Matriz
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-red-500/10 p-6 rounded-lg border-2 border-red-500/30">
                  <p className="font-bold text-red-600 mb-2">Q1: FAZER</p>
                  <p className="text-sm">Urgente + Importante</p>
                  <p className="text-xs text-muted-foreground mt-2">Crises, prazos, emergências</p>
                </div>
                <div className="bg-green-500/10 p-6 rounded-lg border-2 border-green-500/30">
                  <p className="font-bold text-green-600 mb-2">Q2: AGENDAR</p>
                  <p className="text-sm">Não Urgente + Importante</p>
                  <p className="text-xs text-muted-foreground mt-2">Planejamento, crescimento</p>
                </div>
                <div className="bg-yellow-500/10 p-6 rounded-lg border-2 border-yellow-500/30">
                  <p className="font-bold text-yellow-600 mb-2">Q3: DELEGAR</p>
                  <p className="text-sm">Urgente + Não Importante</p>
                  <p className="text-xs text-muted-foreground mt-2">Interrupções, pedidos</p>
                </div>
                <div className="bg-gray-500/10 p-6 rounded-lg border-2 border-gray-500/30">
                  <p className="font-bold text-gray-600 mb-2">Q4: ELIMINAR</p>
                  <p className="text-sm">Não Urgente + Não Importante</p>
                  <p className="text-xs text-muted-foreground mt-2">Distrações, desperdício</p>
                </div>
              </div>

              {/* Seção 4 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Exemplos Práticos: Classificando Tarefas Reais
              </h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Cenário: Gerente de Projetos
              </h3>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">Q1</span>
                    <p>Cliente liga reclamando de bug crítico no sistema</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">Q2</span>
                    <p>Documentar processos da equipe</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">Q3</span>
                    <p>Colega pede ajuda com apresentação dele</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs font-bold">Q4</span>
                    <p>Ler newsletter de tecnologia por 1 hora</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Cenário: Empreendedor
              </h3>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">Q1</span>
                    <p>Reunião com investidor que viaja amanhã</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">Q2</span>
                    <p>Desenvolver novo produto</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">Q3</span>
                    <p>Responder e-mail de vendedor oferecendo serviço</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs font-bold">Q4</span>
                    <p>Ver vídeos motivacionais no YouTube</p>
                  </div>
                </div>
              </div>

              {/* Seção 5 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Como Usar a Matriz no Dia a Dia
              </h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Passo 1: Liste Todas as Suas Tarefas
              </h3>

              <p className="mb-6">
                Comece fazendo um "brain dump" — escreva tudo que está na sua cabeça ou na sua lista de pendências. Não julgue ainda, apenas liste.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Passo 2: Classifique Cada Tarefa
              </h3>

              <p className="mb-4">
                Para cada item, faça duas perguntas:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="mb-4"><strong>1. Isso é urgente?</strong></p>
                <ul className="list-disc list-inside mb-4 text-muted-foreground">
                  <li>Tem prazo imediato (hoje ou amanhã)?</li>
                  <li>Alguém está esperando por isso agora?</li>
                  <li>Há consequências imediatas se não fizer?</li>
                </ul>
                
                <p className="mb-4"><strong>2. Isso é importante?</strong></p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Contribui para meus objetivos principais?</li>
                  <li>Traz resultados de longo prazo?</li>
                  <li>Só eu posso fazer isso?</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Passo 3: Tome a Ação Correspondente
              </h3>

              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold">Q1 → Faça imediatamente</p>
                  <p className="text-muted-foreground">Bloqueie tempo no calendário e execute agora.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold">Q2 → Agende um horário específico</p>
                  <p className="text-muted-foreground">Reserve blocos de tempo protegido na sua agenda.</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold">Q3 → Delegue ou minimize</p>
                  <p className="text-muted-foreground">Passe para outra pessoa ou faça rapidamente.</p>
                </div>
                <div className="border-l-4 border-gray-500 pl-4">
                  <p className="font-semibold">Q4 → Elimine ou limite severamente</p>
                  <p className="text-muted-foreground">Delete da lista ou defina limite de tempo.</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Passo 4: Revise Regularmente
              </h3>

              <p className="mb-8">
                Faça uma revisão rápida toda manhã (5 minutos) e uma revisão mais profunda toda semana. Tarefas mudam de quadrante — o que era Q2 pode virar Q1 se você adiar demais.
              </p>

              {/* Seção 6 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Erros Comuns ao Usar a Matriz
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Classificar tudo como urgente</p>
                  <p className="text-muted-foreground">Se tudo é urgente, nada é urgente. Seja honesto sobre o que realmente precisa de ação imediata.</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Negligenciar o Quadrante 2</p>
                  <p className="text-muted-foreground">É fácil adiar o que não é urgente. Mas sem Q2, você viverá sempre em modo de crise.</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Não saber dizer não ao Quadrante 3</p>
                  <p className="text-muted-foreground">Aceitar todas as demandas dos outros rouba tempo do que importa para você.</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Usar a matriz só uma vez</p>
                  <p className="text-muted-foreground">A matriz é uma ferramenta de uso contínuo, não um exercício único. Revise regularmente.</p>
                </div>
              </div>

              {/* Seção 7 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Ferramentas para Aplicar a Matriz
              </h2>

              <div className="space-y-4 mb-8">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">📝 Papel e caneta</p>
                  <p className="text-muted-foreground">Desenhe a matriz em um papel e escreva suas tarefas em cada quadrante.</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">🗂️ Notion</p>
                  <p className="text-muted-foreground">Crie um banco de dados com propriedade "Quadrante" e visualização de Board.</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">📋 Trello</p>
                  <p className="text-muted-foreground">Crie 4 listas representando cada quadrante e arraste tarefas entre elas.</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">📱 Eisenhower.me</p>
                  <p className="text-muted-foreground">App específico para a matriz, disponível para web e mobile.</p>
                </div>
              </div>

              {/* Conclusão */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Conclusão: Comece a Priorizar Hoje
              </h2>

              <p className="mb-4">
                A Matriz de Eisenhower não é apenas uma ferramenta de organização — é uma <strong>mudança de mentalidade</strong>. Ela força você a questionar constantemente: isso realmente importa?
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mb-8 border-l-4 border-primary">
                <p className="font-semibold mb-4">📌 Resumo para aplicar hoje:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Liste suas tarefas pendentes</li>
                  <li>Classifique cada uma nos 4 quadrantes</li>
                  <li>Faça o Q1 agora, agende Q2, delegue Q3, elimine Q4</li>
                  <li>Proteja tempo para o Quadrante 2 (o mais importante!)</li>
                  <li>Revise sua matriz toda manhã</li>
                </ol>
              </div>

              <p className="mb-8">
                Lembre-se: o objetivo não é fazer mais coisas, mas fazer as coisas certas. Quando você domina a arte da priorização, trabalha menos horas com mais resultados. Comece hoje — sua versão futura vai agradecer.
              </p>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-8 rounded-2xl mt-12">
                <h3 className="text-2xl font-bold mb-4">
                  Quer aplicar a Matriz de Eisenhower de forma visual?
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Conheça nossos sistemas no Notion — templates prontos com a matriz integrada à sua gestão de tarefas.
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
                    to="/blog/metodo-gtd-guia-completo" 
                    className="group block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <p className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Método GTD: Guia Completo
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Aprenda o sistema Getting Things Done de David Allen.
                    </p>
                  </Link>
                  <Link 
                    to="/blog/gestao-tempo-ocupado-estrategias-funcionam" 
                    className="group block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <p className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Gestão do Tempo para Quem Vive Ocupado
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Estratégias práticas para recuperar o controle da sua agenda.
                    </p>
                  </Link>
                  <Link 
                    to="/blog/produtividade-fazer-o-que-importa" 
                    className="group block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <p className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Produtividade: Fazer o Que Importa
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Como focar nas tarefas que realmente geram resultados.
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
                </div>
              </div>
            </div>
          </div>
        </article>
        
        <BlogCTA location="matriz-eisenhower" />
        <Footer />
      </div>
    </>
  );
};

export default MatrizEisenhower;
