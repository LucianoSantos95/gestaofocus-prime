import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCTA from "@/components/BlogCTA";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeaways from "@/components/blog/KeyTakeaways";
import ArticleEngagement from "@/components/blog/ArticleEngagement";
import AuthorBio from "@/components/blog/AuthorBio";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import articleImage from "@/assets/blog/planejamento-anual-zero.jpg";

const PlanejamentoAnualZero = () => {
  const imageUrl = "https://focusinteligente.com.br" + articleImage;
  const articleUrl = "https://focusinteligente.com.br/blog/planejamento-anual-do-zero";

  const tocItems = [
    { id: "por-que-falham", text: "Por Que 92% dos Planos Anuais Falham", level: 2 },
    { id: "framework", text: "O Framework dos 5 Passos para Planejamento Anual", level: 2 },
    { id: "exemplo-real", text: "Exemplo Real de Planejamento Anual Completo", level: 2 },
    { id: "revisao", text: "Sistema de Revisão: Como Manter o Plano Vivo", level: 2 },
    { id: "conclusao", text: "Conclusão", level: 2 },
  ];

  const keyTakeaways = [
    "Apenas 8% das pessoas atingem suas metas de ano novo — o problema é o método",
    "Use o Framework dos 5 Passos: Revisão, Visão, Áreas, Metas SMART, Marcos Trimestrais",
    "Quebre o ano em 4 sprints trimestrais para manter foco e momentum",
    "Metas vagas como 'ser mais saudável' falham — transforme em metas SMART",
    "Revisão semanal de 20 min mantém o plano vivo e relevante",
  ];

  return (
    <>
      <ReadingProgressBar />
      <SEOHead
        title="Planejamento Anual Para Agências e Consultorias | Focus"
        description="Guia para agências e consultorias criarem planejamento anual estratégico. Sprints trimestrais, metas por cliente e revisões práticas."
        canonical="/blog/planejamento-anual-do-zero"
        image={imageUrl}
        type="article"
        publishedTime="2025-01-19"
        modifiedTime="2025-01-19"
        keywords="planejamento anual agência, metas anuais consultoria, planejamento estratégico prestadores serviço"
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />

        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <BlogBreadcrumb articleTitle="Planejamento Anual" articleSlug="planejamento-anual-do-zero" />

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
                Como Montar um Planejamento Anual do Zero (Com Passos Simples e Exemplos Reais)
              </h1>
              <p className="text-xl text-muted-foreground">
                O método completo para planejar seu ano com clareza e realizar seus objetivos (sem ficar só no papel)
              </p>
            </header>

            <ArticleEngagement
              publishDate="19 de janeiro de 2025"
              readTime="12 min"
              articleUrl={articleUrl}
              articleTitle="Como Montar um Planejamento Anual do Zero"
            />

            <div className="mb-8 rounded-xl overflow-hidden">
              <img
                src={articleImage}
                alt="Planejamento anual com calendário, metas e organização estratégica"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>

            <KeyTakeaways items={keyTakeaways} readTime="12 min" />
            <TableOfContents items={tocItems} />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Já chegou em dezembro se perguntando "onde foi parar o ano"? Ou começou janeiro cheio de planos e em março já tinha esquecido tudo?
              </p>

              <p className="text-lg leading-relaxed mb-6">
                O problema não é falta de motivação — <strong>é falta de um sistema de planejamento anual que realmente funciona</strong>.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Neste guia, você vai aprender exatamente como criar seu planejamento anual do zero, com metodologia testada, templates e exemplos práticos que funcionam na vida real.
              </p>

              <h2 id="por-que-falham" className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Por Que 92% dos Planos Anuais Falham
              </h2>

              <p className="mb-4">
                Estudos mostram que apenas <strong>8% das pessoas</strong> realmente atingem suas metas de ano novo. Por quê?
              </p>

              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-1">❌ Metas vagas</p>
                  <p className="text-muted-foreground">"Quero ser mais saudável" não é um plano, é um desejo</p>
                </div>
                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-1">❌ Falta de revisão</p>
                  <p className="text-muted-foreground">Criam o plano em janeiro e nunca mais olham</p>
                </div>
                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-1">❌ Objetivos irrealistas</p>
                  <p className="text-muted-foreground">Querem mudar 15 coisas ao mesmo tempo</p>
                </div>
                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-1">❌ Sem conexão com ações diárias</p>
                  <p className="text-muted-foreground">O plano anual não se traduz em tarefas práticas</p>
                </div>
              </div>

              <h2 id="framework" className="text-3xl font-bold mt-12 mb-6 text-foreground">
                O Framework dos 5 Passos para Planejamento Anual
              </h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Passo 1: Revisão do Ano Anterior</h3>
              <p className="mb-4">Reserve 2 horas para refletir:</p>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">🔍 Perguntas-Chave:</p>
                <ul className="space-y-2">
                  <li>• Quais foram minhas 3 maiores conquistas?</li>
                  <li>• O que não funcionou e por quê?</li>
                  <li>• Quais oportunidades desperdicei?</li>
                  <li>• O que me trouxe mais felicidade?</li>
                  <li>• O que me drenou energia?</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Passo 2: Defina Sua Visão Anual</h3>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">📝 Template de Visão:</p>
                <p className="mb-2"><strong>Profissional:</strong> "Em dezembro, eu quero estar [cargo/faturamento] sentindo [emoção]."</p>
                <p className="mb-2"><strong>Pessoal:</strong> "Em dezembro, eu quero ter [hábito/conquista] sentindo [estado]."</p>
                <p><strong>Financeiro:</strong> "Em dezembro, eu quero ter [valor/investimento] sentindo [segurança]."</p>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Passo 3: Quebre a Visão em Áreas de Vida</h3>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">🎯 As 8 Áreas Principais:</p>
                <ul className="space-y-2">
                  <li>1. <strong>Carreira/Negócios</strong></li>
                  <li>2. <strong>Finanças</strong></li>
                  <li>3. <strong>Saúde</strong></li>
                  <li>4. <strong>Relacionamentos</strong></li>
                  <li>5. <strong>Desenvolvimento Pessoal</strong></li>
                  <li>6. <strong>Lazer</strong></li>
                  <li>7. <strong>Contribuição</strong></li>
                  <li>8. <strong>Espiritualidade</strong></li>
                </ul>
              </div>
              <p className="mb-6"><strong>Regra:</strong> Escolha <strong>3-4 áreas prioritárias</strong> para focar.</p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Passo 4: Transforme Visões em Metas SMART</h3>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">SMART = Específico + Mensurável + Atingível + Relevante + Temporal</p>
                <div className="space-y-4 mt-4">
                  <div><p className="font-semibold mb-1">❌ Meta Vaga:</p><p className="text-muted-foreground">"Quero melhorar minha saúde"</p></div>
                  <div><p className="font-semibold mb-1">✅ Meta SMART:</p><p className="text-muted-foreground">"Perder 12kg até dezembro, fazendo musculação 4x/semana e 2000 cal/dia."</p></div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Passo 5: Crie Marcos Trimestrais</h3>
              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <div className="space-y-4">
                  <div><p className="font-semibold mb-2">Q1 (Jan-Mar): Fundação</p><p className="text-muted-foreground">Criar sistemas, hábitos, estrutura básica</p></div>
                  <div><p className="font-semibold mb-2">Q2 (Abr-Jun): Crescimento</p><p className="text-muted-foreground">Ganhar momentum, escalar resultados</p></div>
                  <div><p className="font-semibold mb-2">Q3 (Jul-Set): Aceleração</p><p className="text-muted-foreground">Maximizar resultados, otimizar processos</p></div>
                  <div><p className="font-semibold mb-2">Q4 (Out-Dez): Consolidação</p><p className="text-muted-foreground">Finalizar projetos, revisar ano, planejar próximo</p></div>
                </div>
              </div>

              <h2 id="exemplo-real" className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Exemplo Real de Planejamento Anual Completo
              </h2>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <p className="font-semibold mb-4">👤 Perfil: João, 32 anos, Designer Freelancer</p>
                <p className="font-semibold mb-2">Visão Anual:</p>
                <p className="text-muted-foreground mb-4">"Em dezembro de 2025, quero estar faturando R$ 15k/mês com 4 clientes fixos."</p>
                <p className="font-semibold mb-2">Marcos Trimestrais:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Q1: Criar portfólio online, prospectar 10 leads/semana</li>
                  <li>• Q2: Fechar 2 clientes recorrentes</li>
                  <li>• Q3: Fechar mais 2 clientes, otimizar processos</li>
                  <li>• Q4: Alcançar R$ 15k/mês consistente</li>
                </ul>
              </div>

              <h2 id="revisao" className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Sistema de Revisão: Como Manter o Plano Vivo
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">📅 Revisão Semanal (20 min)</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Revisar metas do trimestre atual</li>
                    <li>• Avaliar progresso da semana</li>
                    <li>• Ajustar prioridades para próxima semana</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">📊 Revisão Mensal (1 hora)</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Medir KPIs de cada meta</li>
                    <li>• Celebrar vitórias</li>
                    <li>• Identificar bloqueios</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">🎯 Revisão Trimestral (2-3 horas)</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Avaliar resultados do trimestre</li>
                    <li>• Ajustar metas se necessário</li>
                    <li>• Planejar próximo trimestre</li>
                  </ul>
                </div>
              </div>

              <h2 id="conclusao" className="text-3xl font-bold mt-12 mb-6 text-foreground">Conclusão</h2>

              <p className="text-lg leading-relaxed mb-6">
                Planejamento anual não precisa ser complicado. Com o Framework dos 5 Passos, você transforma desejos vagos em metas concretas e atingíveis.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                <strong>O segredo não é ter o plano perfeito — é ter um plano que você revisa e ajusta regularmente.</strong> Comece hoje, mesmo que seja simples. Você sempre pode refinar depois.
              </p>
            </div>

            <BlogCTA variant="default" location="planejamento-anual-zero" />
            <AuthorBio />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PlanejamentoAnualZero;
