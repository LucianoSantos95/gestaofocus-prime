import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeaways from "@/components/blog/KeyTakeaways";
import ArticleEngagement from "@/components/blog/ArticleEngagement";
import AuthorBio from "@/components/blog/AuthorBio";
import BlogCTA from "@/components/BlogCTA";
import RelatedArticles from "@/components/RelatedArticles";
import planejamentoImage from "@/assets/blog/planejamento-mensal-sistema.jpg";

const PlanejamentoMensalSistema = () => {
  const imageUrl = "https://focusinteligente.com.br" + planejamentoImage;
  const articleUrl = "https://focusinteligente.com.br/blog/planejamento-mensal-sistema";

  const tocItems = [
    { id: "intervalo-ideal", text: "Por Que Mensal é o Intervalo Ideal", level: 2 },
    { id: "framework-4-pilares", text: "O Framework dos 4 Pilares", level: 2 },
    { id: "tracking", text: "Sistema de Tracking Mensal", level: 2 },
    { id: "erros-fatais", text: "Os 5 Erros Fatais do Planejamento Mensal", level: 2 },
  ];

  const keyTakeaways = [
    "Planejamento mensal é o equilíbrio perfeito entre visão estratégica e flexibilidade",
    "Use o Framework dos 4 Pilares: Revisão, Tema, Objetivos e Distribuição Semanal",
    "Defina no máximo 3-5 objetivos SMART por mês",
    "Faça check-ins semanais e revisão mid-month para ajustar a rota",
    "Celebrar conquistas reforça o comportamento e mantém a motivação",
  ];

  return (
    <>
      <ReadingProgressBar />
      <SEOHead
        title="Planejamento Mensal Para Agências e Consultorias | Focus"
        description="Sistema de planejamento mensal para agências e consultorias. Organize metas, entregas e pipeline de clientes com 4 pilares."
        canonical="/blog/planejamento-mensal-sistema"
        image={imageUrl}
        type="article"
        publishedTime="2025-01-19"
        modifiedTime="2025-01-19"
        keywords="planejamento mensal agência, metas consultoria, organização mensal equipe, gestão prestadores de serviço"
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <BlogBreadcrumb
              articleTitle="Planejamento Mensal"
              articleSlug="planejamento-mensal-sistema"
            />

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Planejamento Mensal Para Agências: Sistema Que Funciona de Verdade
              </h1>
              <p className="text-xl text-muted-foreground">
                O método completo para planejar entregas, metas e pipeline da sua agência ou consultoria mês a mês
              </p>
            </header>

            <ArticleEngagement
              publishDate="19 de janeiro de 2025"
              readTime="10 min"
              articleUrl={articleUrl}
              articleTitle="Planejamento Mensal: Como Criar Um Sistema Que Realmente Funciona"
            />

            <img
              src={planejamentoImage}
              alt="Sistema de planejamento mensal para agência com pipeline de entregas e metas"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <KeyTakeaways items={keyTakeaways} readTime="10 min" />

            <TableOfContents items={tocItems} />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Janeiro terminou e você ainda não sabe o que conquistou? Fevereiro passou voando e você não lembra das metas? <strong>Sem planejamento mensal estruturado, os meses se tornam semanas longas sem direção.</strong>
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Um sistema de planejamento mensal eficaz não é sobre preencher planilhas bonitas. É sobre criar um mapa claro do mês, saber exatamente onde você está investindo seu tempo e ajustar a rota quando necessário.
              </p>

              <h2 id="intervalo-ideal" className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Por Que Mensal é o Intervalo Ideal
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Planejamento mensal é o equilíbrio perfeito entre:
              </p>

              <ul className="space-y-3 mb-6">
                <li><strong>Visão estratégica:</strong> Tempo suficiente para projetos significativos</li>
                <li><strong>Flexibilidade tática:</strong> Curto o bastante para ajustar rapidamente</li>
                <li><strong>Ritmo natural:</strong> Alinha com ciclos de trabalho e vida pessoal</li>
                <li><strong>Momentum construído:</strong> 12 meses bem executados = ano transformador</li>
              </ul>

              <h2 id="framework-4-pilares" className="text-3xl font-bold mt-12 mb-6 text-foreground">
                O Framework dos 4 Pilares
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Todo planejamento mensal eficaz precisa destes 4 componentes:
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Pilar 1: Revisão do Mês Anterior (20 min)
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Antes de planejar o futuro, entenda o passado:
              </p>
              <div className="bg-muted p-6 rounded-lg my-6">
                <h4 className="font-semibold mb-3">Perguntas-Chave da Revisão:</h4>
                <ul className="space-y-2">
                  <li>✓ Quais foram minhas 3 maiores conquistas?</li>
                  <li>✓ O que não saiu como planejado e por quê?</li>
                  <li>✓ Onde gastei mais tempo que esperava?</li>
                  <li>✓ Que padrões negativos posso identificar?</li>
                  <li>✓ O que aprendi que preciso aplicar este mês?</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Pilar 2: Definir Tema e Foco (15 min)
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Cada mês precisa ter um tema principal. Isso cria coerência e evita dispersão.
              </p>
              <div className="bg-muted p-6 rounded-lg my-6">
                <h4 className="font-semibold mb-3">Exemplos de Temas Mensais:</h4>
                <ul className="space-y-2">
                  <li><strong>Mês do Crescimento:</strong> Foco em aprendizado e desenvolvimento</li>
                  <li><strong>Mês da Execução:</strong> Concluir projetos iniciados</li>
                  <li><strong>Mês da Organização:</strong> Estruturar sistemas e processos</li>
                  <li><strong>Mês da Conexão:</strong> Networking e relacionamentos</li>
                  <li><strong>Mês da Saúde:</strong> Priorizar bem-estar físico e mental</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Pilar 3: Objetivos Mensuráveis (25 min)
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Defina 3-5 objetivos SMART para o mês:
              </p>
              <ol className="space-y-4 mb-6">
                <li><strong>Profissional:</strong> 1-2 objetivos relacionados ao trabalho/negócio</li>
                <li><strong>Pessoal:</strong> 1-2 objetivos de desenvolvimento ou bem-estar</li>
                <li><strong>Financeiro:</strong> 1 objetivo relacionado a finanças</li>
              </ol>

              <div className="bg-primary/5 border-l-4 border-primary p-6 my-8">
                <p className="text-lg font-medium">
                  ⚠️ <strong>Regra Crucial:</strong> Se você tem mais de 5 objetivos mensais, provavelmente vai falhar em todos. Menos é mais quando se trata de foco real.
                </p>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Pilar 4: Distribuição Semanal (30 min)
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Divida seus objetivos mensais em marcos semanais. Isso cria mini-vitórias e mantém o momentum.
              </p>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h4 className="font-semibold mb-3">Template de Distribuição Semanal:</h4>
                <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
{`📅 PLANEJAMENTO MENSAL - [MÊS]

🎯 TEMA DO MÊS: [Seu tema principal]

━━━━━━━━━━━━━━━━━━━━━

📊 OBJETIVOS DO MÊS

1. [Objetivo Profissional 1]
   Métrica: ___
   Prazo: ___

2. [Objetivo Profissional 2]
   Métrica: ___
   Prazo: ___

3. [Objetivo Pessoal]
   Métrica: ___
   Prazo: ___

━━━━━━━━━━━━━━━━━━━━━

📅 DISTRIBUIÇÃO SEMANAL

SEMANA 1 (dias 1-7):
• Marco do Objetivo 1: ___
• Marco do Objetivo 2: ___
• Foco: ___

SEMANA 2 (dias 8-14):
• Marco do Objetivo 1: ___
• Marco do Objetivo 2: ___
• Foco: ___

SEMANA 3 (dias 15-21):
• Marco do Objetivo 1: ___
• Marco do Objetivo 3: ___
• Foco: ___

SEMANA 4 (dias 22-30):
• Conclusão Objetivo 1: ___
• Conclusão Objetivo 2: ___
• Preparação próximo mês: ___`}
                </pre>
              </div>

              <div className="my-12">
                <BlogCTA variant="download" location="planejamento_mensal_mid" />
              </div>

              <h2 id="tracking" className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Sistema de Tracking Mensal
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Planeje bem, mas rastreie melhor. Sem tracking, você não sabe se está progredindo:
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Check-Ins Semanais (15 min)
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Toda sexta-feira, faça um check-in rápido:
              </p>
              <ul className="space-y-2 mb-6">
                <li>✓ Marcos da semana foram atingidos?</li>
                <li>✓ Estou no caminho certo para os objetivos mensais?</li>
                <li>✓ O que precisa ser ajustado na próxima semana?</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Review Mid-Month (30 min)
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                No dia 15, faça uma revisão profunda. Ainda dá tempo de corrigir a rota se necessário.
              </p>

              <h2 id="erros-fatais" className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Os 5 Erros Fatais do Planejamento Mensal
              </h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                1. Planejar e Nunca Mais Olhar
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Seu planejamento precisa estar sempre visível. Não em uma gaveta ou pasta esquecida.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                2. Objetivos Vagos
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                "Melhorar vendas" não é objetivo. "Fechar 15 novos contratos com ticket médio de R$5k" é.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                3. Não Considerar Capacidade Real
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Planeje baseado em quanto tempo você REALMENTE tem disponível, não no ideal utópico.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                4. Ignorar Ciclos Naturais
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Dezembro é diferente de Março. Considere férias, feriados e períodos sazonais do seu negócio.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                5. Não Celebrar Conquistas
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Objetivos atingidos merecem celebração. Isso reforça o comportamento e mantém motivação alta.
              </p>

              <div className="my-12">
                <BlogCTA variant="whatsapp" location="planejamento_mensal_end" />
              </div>

              <AuthorBio />
            </div>

            <RelatedArticles
              currentSlug="planejamento-mensal-sistema"
              category="Produtividade"
              allArticles={[
                {
                  title: "Como Organizar Sua Rotina Semanal Para Ter Mais Foco",
                  excerpt: "O método completo de planejamento semanal que elimina decisões desnecessárias.",
                  slug: "organizar-rotina-semanal",
                  readTime: "9 min",
                  category: "Organização"
                },
                {
                  title: "Metas Inteligentes SMART: Como Definir e Alcançar",
                  excerpt: "Aprenda a criar metas que realmente funcionam com o método SMART.",
                  slug: "metas-inteligentes-smart",
                  readTime: "8 min",
                  category: "Produtividade"
                },
                {
                  title: "Checklist Diário: O Método Simples Que Aumenta Produtividade",
                  excerpt: "Descubra o sistema de checklist que profissionais de alta performance usam.",
                  slug: "checklist-diario-produtividade",
                  readTime: "8 min",
                  category: "Produtividade"
                }
              ]}
            />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PlanejamentoMensalSistema;
