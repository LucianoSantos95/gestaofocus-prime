import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import articleImage from "@/assets/blog/planejamento-anual-zero.jpg";

const PlanejamentoAnualZero = () => {
  const articleUrl = "https://focusinteligente.com.br/blog/planejamento-anual-do-zero";
  const imageUrl = "https://focusinteligente.com.br" + articleImage;

  return (
    <>
      <Helmet>
        <title>Como Montar um Planejamento Anual do Zero: Passos Simples e Exemplos Reais</title>
        <meta name="description" content="Guia completo para criar seu planejamento anual passo a passo. Metodologia testada, templates prontos e exemplos reais para atingir suas metas em 2025." />
        <meta name="keywords" content="planejamento anual, como planejar o ano, metas anuais, objetivos 2025, planejamento estratégico pessoal" />
        <link rel="canonical" href={articleUrl} />
        
        <meta property="og:title" content="Como Montar um Planejamento Anual do Zero: Guia Completo" />
        <meta property="og:description" content="Aprenda a criar seu planejamento anual com passos simples e exemplos práticos." />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Como Montar um Planejamento Anual do Zero" />
        <meta name="twitter:description" content="Guia completo com passos simples e exemplos reais." />
        <meta name="twitter:image" content={imageUrl} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Como Montar um Planejamento Anual do Zero: Passos Simples e Exemplos Reais",
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
            "description": "Guia completo para criar seu planejamento anual passo a passo. Metodologia testada, templates prontos e exemplos reais para atingir suas metas em 2025."
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
              <span className="text-foreground">Planejamento Anual</span>
            </nav>

            {/* Título e Subtítulo */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
                Como Montar um Planejamento Anual do Zero (Com Passos Simples e Exemplos Reais)
              </h1>
              <p className="text-xl text-muted-foreground">
                O método completo para planejar seu ano com clareza e realizar seus objetivos (sem ficar só no papel)
              </p>
            </header>

            {/* Imagem de Capa */}
            <div className="mb-12 rounded-xl overflow-hidden">
              <img 
                src={articleImage} 
                alt="Planejamento anual com calendário, metas e organização estratégica"
                className="w-full h-auto"
              />
            </div>

            {/* Conteúdo do Artigo */}
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

              {/* Seção 1 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
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

              <p className="mb-8">
                A boa notícia: <strong>você pode fazer parte dos 8% que conseguem</strong>. Basta seguir um método estruturado.
              </p>

              {/* Seção 2 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                O Framework dos 5 Passos para Planejamento Anual
              </h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Passo 1: Revisão do Ano Anterior (Antes de Planejar o Novo)
              </h3>

              <p className="mb-4">
                Você não pode planejar o futuro sem entender o passado. Reserve 2 horas para refletir:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">🔍 Perguntas-Chave:</p>
                <ul className="space-y-2">
                  <li>• Quais foram minhas 3 maiores conquistas?</li>
                  <li>• O que não funcionou e por quê?</li>
                  <li>• Quais oportunidades desperdicei?</li>
                  <li>• Em que áreas da vida eu regredi?</li>
                  <li>• O que me trouxe mais felicidade?</li>
                  <li>• O que me drenou energia?</li>
                </ul>
              </div>

              <p className="mb-6">
                <strong>Exercício prático:</strong> Abra seu calendário dos últimos 12 meses. Liste eventos importantes, projetos concluídos, momentos marcantes. Isso dá contexto real.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Passo 2: Defina Sua Visão Anual (O Que Você Quer Ser Daqui a 1 Ano?)
              </h3>

              <p className="mb-4">
                Antes de listar objetivos, crie uma <strong>visão clara</strong> de onde quer estar em 12 meses:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">📝 Template de Visão Anual:</p>
                <p className="mb-4"><strong>Profissional:</strong></p>
                <p className="text-muted-foreground mb-4">"Em dezembro de 2025, eu quero estar [cargo/posição/faturamento] trabalhando em [tipo de projeto], sentindo [emoção]."</p>
                
                <p className="mb-4"><strong>Pessoal:</strong></p>
                <p className="text-muted-foreground mb-4">"Em dezembro de 2025, eu quero ter [hábito/conquista], me sentindo [estado físico/mental/emocional]."</p>
                
                <p className="mb-4"><strong>Financeiro:</strong></p>
                <p className="text-muted-foreground">"Em dezembro de 2025, eu quero ter [valor/investimento/dívida zerada], me sentindo [segurança/liberdade]."</p>
              </div>

              <p className="mb-8">
                <strong>Exemplo real:</strong> "Em dezembro de 2025, quero estar faturando R$ 15k/mês como freelancer, trabalhando com 3-4 clientes fixos, me sentindo financeiramente seguro e com tempo para família."
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Passo 3: Quebre a Visão em Áreas de Vida
              </h3>

              <p className="mb-4">
                Não coloque todos os ovos na mesma cesta. Balance seus objetivos entre 5-8 áreas:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">🎯 As 8 Áreas de Vida Principais:</p>
                <ul className="space-y-2">
                  <li>1. <strong>Carreira/Negócios:</strong> Trabalho, crescimento profissional, renda</li>
                  <li>2. <strong>Finanças:</strong> Economia, investimentos, controle de gastos</li>
                  <li>3. <strong>Saúde:</strong> Exercícios, alimentação, check-ups</li>
                  <li>4. <strong>Relacionamentos:</strong> Família, amigos, parceiro(a)</li>
                  <li>5. <strong>Desenvolvimento Pessoal:</strong> Cursos, leitura, habilidades</li>
                  <li>6. <strong>Lazer:</strong> Hobbies, viagens, diversão</li>
                  <li>7. <strong>Contribuição:</strong> Voluntariado, impacto social</li>
                  <li>8. <strong>Espiritualidade:</strong> Propósito, valores, práticas</li>
                </ul>
              </div>

              <p className="mb-6">
                <strong>Regra importante:</strong> Não tente melhorar todas as áreas de uma vez. Escolha <strong>3-4 áreas prioritárias</strong> para focar.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Passo 4: Transforme Visões em Metas SMART
              </h3>

              <p className="mb-4">
                Agora sim: hora de criar metas específicas usando o framework SMART:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">SMART = Específico + Mensurável + Atingível + Relevante + Temporal</p>
                
                <div className="space-y-4 mt-4">
                  <div>
                    <p className="font-semibold mb-1">❌ Meta Vaga:</p>
                    <p className="text-muted-foreground">"Quero melhorar minha saúde"</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-1">✅ Meta SMART:</p>
                    <p className="text-muted-foreground">"Perder 12kg até dezembro de 2025, fazendo treino de musculação 4x/semana e atingindo 2000 calorias/dia."</p>
                  </div>
                </div>
              </div>

              <p className="mb-4">
                <strong>Template para cada meta:</strong>
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <p className="mb-2">Eu vou <strong>[ação específica]</strong></p>
                <p className="mb-2">Medido por <strong>[métrica clara]</strong></p>
                <p className="mb-2">Até <strong>[data limite]</strong></p>
                <p className="mb-2">Para alcançar <strong>[resultado final]</strong></p>
                <p>Porque <strong>[razão/propósito]</strong></p>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Passo 5: Crie Marcos Trimestrais (Quebre o Ano em 4 Sprints)
              </h3>

              <p className="mb-4">
                12 meses é muito tempo para manter foco. Quebre em trimestres:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <p className="font-semibold mb-4">📅 Estrutura Trimestral:</p>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Q1 (Jan-Mar): Fundação</p>
                    <p className="text-muted-foreground">Criar sistemas, hábitos, estrutura básica</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-2">Q2 (Abr-Jun): Crescimento</p>
                    <p className="text-muted-foreground">Ganhar momentum, escalar resultados iniciais</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-2">Q3 (Jul-Set): Aceleração</p>
                    <p className="text-muted-foreground">Maximizar resultados, otimizar processos</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-2">Q4 (Out-Dez): Consolidação</p>
                    <p className="text-muted-foreground">Finalizar projetos, revisar ano, planejar próximo</p>
                  </div>
                </div>
              </div>

              {/* Seção 3 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Exemplo Real de Planejamento Anual Completo
              </h2>

              <p className="mb-4">
                Vamos ver um exemplo prático de como fica um plano anual bem estruturado:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <p className="font-semibold mb-4">👤 Perfil: João, 32 anos, Designer Freelancer</p>
                
                <p className="font-semibold mb-2 mt-4">Visão Anual:</p>
                <p className="text-muted-foreground mb-4">"Em dezembro de 2025, quero estar faturando R$ 15k/mês trabalhando com 4 clientes fixos de alta qualidade, tendo estruturado um portfólio online profissional, me sentindo financeiramente seguro e com equilíbrio entre trabalho e vida pessoal."</p>
                
                <p className="font-semibold mb-2">Áreas Prioritárias:</p>
                <ul className="space-y-1 mb-4 text-muted-foreground">
                  <li>1. Carreira (crescer como freelancer)</li>
                  <li>2. Finanças (economizar e investir)</li>
                  <li>3. Saúde (voltar a treinar)</li>
                </ul>
                
                <p className="font-semibold mb-2">Meta #1 - Carreira:</p>
                <p className="text-muted-foreground mb-4">"Alcançar faturamento médio de R$ 15k/mês até dezembro de 2025, através de 4-5 clientes recorrentes, aumentando preço médio por projeto de R$ 2k para R$ 5k."</p>
                
                <p className="font-semibold mb-2">Marcos Trimestrais:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Q1: Criar portfólio online, prospectar 10 leads/semana</li>
                  <li>• Q2: Fechar 2 clientes recorrentes, aumentar preço para R$ 3,5k</li>
                  <li>• Q3: Fechar mais 2 clientes, otimizar processos</li>
                  <li>• Q4: Alcançar R$ 15k/mês consistente</li>
                </ul>
              </div>

              {/* Seção 4 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Sistema de Revisão: Como Manter o Plano Vivo
              </h2>

              <p className="mb-4">
                O plano não pode ficar engavetado. Você precisa de <strong>rituais de revisão</strong>:
              </p>

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
                    <li>• Ajustar estratégias se necessário</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">🎯 Revisão Trimestral (2-3 horas)</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Analisar progresso do trimestre</li>
                    <li>• Ajustar metas anuais se necessário</li>
                    <li>• Planejar próximo trimestre em detalhes</li>
                    <li>• Eliminar o que não está funcionando</li>
                  </ul>
                </div>
              </div>

              {/* Seção 5 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Ferramentas Recomendadas para Planejamento Anual
              </h2>

              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-2">🏆 Notion</p>
                  <p className="text-muted-foreground">Ideal para criar dashboards anuais, acompanhar metas e revisar trimestres</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-2">📊 Google Sheets</p>
                  <p className="text-muted-foreground">Planilhas de acompanhamento de métricas e KPIs</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-2">📅 Google Calendar</p>
                  <p className="text-muted-foreground">Agendar revisões mensais e trimestrais</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-2">📝 Evernote/OneNote</p>
                  <p className="text-muted-foreground">Diário de progresso e reflexões</p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Quer um Template Pronto de Planejamento Anual?
                </h3>
                <p className="text-lg mb-6">
                  Nossos sistemas no Notion incluem templates completos de planejamento anual, trimestral e mensal — tudo integrado e fácil de usar.
                </p>
                <Link 
                  to="/sistemas-notion"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Ver Templates Profissionais →
                </Link>
              </div>

              {/* Conclusão */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Conclusão: Comece Simples, Ajuste Ao Longo do Caminho
              </h2>

              <p className="mb-4">
                Um planejamento anual não precisa ser perfeito desde o início — <strong>precisa ser acionável</strong>.
              </p>

              <p className="mb-4">
                Comece com 3 metas principais, revise mensalmente, ajuste quando necessário. O importante é ter um <strong>norte claro</strong> e <strong>medir seu progresso</strong>.
              </p>

              <p className="mb-8">
                Lembre-se: planejamento sem ação é só wishful thinking. Mas ação sem planejamento é só correria. Encontre o equilíbrio.
              </p>
            </div>

            {/* Artigos Relacionados */}
            <div className="mt-16 pt-8 border-t border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Artigos Relacionados</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/blog/planejamento-mensal-sistema" className="block p-6 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <h4 className="font-semibold mb-2 text-foreground">Planejamento Mensal Eficaz</h4>
                  <p className="text-sm text-muted-foreground">Como criar um sistema mensal que funciona</p>
                </Link>
                <Link to="/blog/metas-inteligentes-smart" className="block p-6 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <h4 className="font-semibold mb-2 text-foreground">Como Definir Metas SMART</h4>
                  <p className="text-sm text-muted-foreground">Framework completo para objetivos claros</p>
                </Link>
                <Link to="/blog/organizar-rotina-semanal" className="block p-6 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <h4 className="font-semibold mb-2 text-foreground">Organizar Rotina Semanal</h4>
                  <p className="text-sm text-muted-foreground">Planejamento semanal para máxima produtividade</p>
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

export default PlanejamentoAnualZero;