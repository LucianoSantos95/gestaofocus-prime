import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import rotinaImage from "@/assets/blog/organizar-rotina-semanal.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OrganizarRotinaSemanal = () => {
  const imageUrl = "https://focusinteligente.com.br" + rotinaImage;

  return (
    <>
      <SEOHead
        title="Como Organizar Sua Rotina Semanal Para Ter Mais Foco (Modelo Pronto Incluso) | Focus Inteligente"
        description="Aprenda a organizar sua rotina semanal com um método prático e eficaz. Modelo pronto para download e implementação imediata."
        canonical="/blog/organizar-rotina-semanal"
        image={imageUrl}
        type="article"
        publishedTime="2025-01-16"
        modifiedTime="2025-01-16"
        keywords="rotina semanal, planejamento semanal, organização pessoal, foco, produtividade semanal, modelo planejamento"
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <nav className="text-sm mb-8">
              <ol className="flex items-center space-x-2 text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Início</Link></li>
                <li>/</li>
                <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li>/</li>
                <li className="text-foreground">Como Organizar Sua Rotina Semanal</li>
              </ol>
            </nav>

            <img 
              src={rotinaImage} 
              alt="Planejamento semanal organizado em quadros coloridos" 
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Como Organizar Sua Rotina Semanal Para Ter Mais Foco
              </h1>
              <p className="text-xl text-muted-foreground">
                O método completo para planejar sua semana e alcançar seus objetivos sem estresse
              </p>
              <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                <time dateTime="2025-01-16">16 de janeiro de 2025</time>
                <span>•</span>
                <span>10 min de leitura</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Você já começou a semana com mil ideias e terminou na sexta-feira sem saber onde o tempo foi? <strong>O problema não é falta de tempo. É falta de estrutura.</strong>
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Uma rotina semanal bem organizada é como um mapa: você sabe onde está, para onde vai e qual o melhor caminho. Sem ela, você está navegando no escuro.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                O Framework de Planejamento Semanal
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Este método funciona em 4 etapas simples que levam menos de 1 hora no domingo:
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Etapa 1: Revisão da Semana Anterior (15 min)
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Antes de planejar o futuro, olhe o passado:
              </p>
              <ul className="space-y-2 mb-6">
                <li>✓ O que funcionou bem na última semana?</li>
                <li>✓ O que não saiu como planejado e por quê?</li>
                <li>✓ Que compromissos ficaram pendentes?</li>
                <li>✓ Quais padrões você pode identificar?</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Etapa 2: Definir as 3 Prioridades da Semana (10 min)
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Regra de ouro:</strong> Se tudo é prioridade, nada é prioridade.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Escolha apenas 3 objetivos principais que farão a semana valer a pena. Pergunte-se: "Se eu só pudesse concluir 3 coisas esta semana, quais seriam?"
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Etapa 3: Alocar Blocos de Tempo (25 min)
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Use o método de <strong>Time Blocking</strong> — reserve blocos específicos para cada tipo de atividade:
              </p>
              <div className="bg-muted p-6 rounded-lg my-6">
                <h4 className="font-semibold mb-3">Modelo de Blocos Semanais:</h4>
                <ul className="space-y-2">
                  <li><strong>Segunda (Energia Alta):</strong> Tarefas estratégicas e criativas</li>
                  <li><strong>Terça/Quarta (Produção):</strong> Execução das prioridades principais</li>
                  <li><strong>Quinta (Comunicação):</strong> Reuniões e alinhamentos</li>
                  <li><strong>Sexta (Finalização):</strong> Concluir pendências e revisar semana</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Etapa 4: Criar Buffers e Margens (10 min)
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Nunca preencha 100% da sua agenda. Reserve pelo menos 20% do tempo para imprevistos e oportunidades inesperadas.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Modelo Pronto: Estrutura Visual da Semana
              </h2>

              <div className="bg-muted p-6 rounded-lg my-8">
                <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
{`📅 SEMANA DE [Data]

🎯 3 PRIORIDADES DA SEMANA
1. [Prioridade 1]
2. [Prioridade 2]
3. [Prioridade 3]

━━━━━━━━━━━━━━━━━━━━━

📌 SEGUNDA-FEIRA
🔴 Bloco Foco (9h-12h): [Trabalho estratégico]
🟡 Bloco Operacional (14h-17h): [Tarefas de suporte]
🟢 Buffer (17h-18h): [Tempo livre]

📌 TERÇA-FEIRA
🔴 Bloco Foco (9h-12h): [Prioridade 1]
🟡 Bloco Operacional (14h-17h): [Tarefas rotineiras]
🟢 Buffer (17h-18h): [Tempo livre]

📌 QUARTA-FEIRA
🔴 Bloco Foco (9h-12h): [Prioridade 2]
🟡 Bloco Operacional (14h-17h): [Comunicação]
🟢 Buffer (17h-18h): [Tempo livre]

📌 QUINTA-FEIRA
🔵 Bloco Reuniões (9h-12h): [Alinhamentos]
🟡 Bloco Operacional (14h-17h): [Prioridade 3]
🟢 Buffer (17h-18h): [Tempo livre]

📌 SEXTA-FEIRA
🟡 Bloco Finalização (9h-12h): [Concluir pendências]
🟢 Bloco Revisão (14h-16h): [Weekly Review]
⚪ Tempo Livre (16h+): [Descanso merecido]`}
                </pre>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Os 5 Erros Que Destroem Seu Planejamento Semanal
              </h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                1. Não Proteger Seu Tempo de Foco
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Seus blocos de foco são sagrados. Trate-os como reuniões inadiáveis com você mesmo.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                2. Planejar Demais
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Um plano detalhado demais vira uma prisão. Mantenha flexibilidade para adaptar conforme necessário.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                3. Não Revisar
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Planejar sem revisar é como navegar sem ajustar a rota. Reserve 30 min na sexta para Weekly Review.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                4. Ignorar Seu Ritmo Natural
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Você tem mais energia de manhã? Use esse horário para tarefas importantes. Não lute contra sua biologia.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                5. Não Comunicar Suas Prioridades
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Compartilhe suas prioridades com equipe/família. Isso cria proteção natural contra interrupções desnecessárias.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 my-8">
                <p className="text-lg font-medium">
                  💡 <strong>Dica de Implementação:</strong> Comece com apenas 2 semanas usando este método antes de fazer ajustes. Você precisa testar o sistema por tempo suficiente para identificar o que funciona para você.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Como Implementar No Notion
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                O Notion é perfeito para planejamento semanal porque permite:
              </p>

              <ol className="space-y-4 mb-6">
                <li><strong>1. Visão de Calendário:</strong> Veja toda a semana de uma vez</li>
                <li><strong>2. Templates Recorrentes:</strong> Crie uma vez, use sempre</li>
                <li><strong>3. Conexão com Projetos:</strong> Seus blocos de tempo conectam diretamente com projetos ativos</li>
                <li><strong>4. Histórico Completo:</strong> Revise semanas anteriores para identificar padrões</li>
              </ol>

              <div className="bg-muted p-8 rounded-lg my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Sistema Completo de Planejamento Semanal
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Nossos sistemas no Notion já incluem templates de planejamento semanal integrados com gestão de projetos e revisões.
                </p>
                <Link 
                  to="/sistemas-notion" 
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Ver Sistemas Notion
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-border">
              <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/blog/checklist-diario-produtividade" className="group">
                  <div className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      Checklist diário: método simples que aumenta sua produtividade
                    </h4>
                  </div>
                </Link>
                <Link to="/blog/planejamento-mensal-sistema" className="group">
                  <div className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      Planejamento mensal: como criar um sistema que funciona
                    </h4>
                  </div>
                </Link>
                <Link to="/blog/guia-foco-evitar-distracoes" className="group">
                  <div className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      Guia definitivo do foco: como evitar distrações
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OrganizarRotinaSemanal;