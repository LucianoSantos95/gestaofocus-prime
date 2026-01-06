import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import metasImage from "@/assets/blog/metas-inteligentes-smart.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MetasInteligentesSmart = () => {
  const imageUrl = "https://focusinteligente.com.br" + metasImage;

  return (
    <>
      <SEOHead
        title="Como Criar Metas Inteligentes (SMART) Sem Complicar — Com Exemplos Reais | Focus"
        description="Aprenda a criar metas SMART de forma simples e prática. Exemplos reais e template pronto para usar."
        canonical="/blog/metas-inteligentes-smart"
        image={imageUrl}
        type="article"
        publishedTime="2025-01-20"
        modifiedTime="2025-01-20"
        keywords="metas SMART, objetivos inteligentes, planejamento de metas, metodologia SMART, produtividade"
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <img src={metasImage} alt="Como criar metas SMART inteligentes para aumentar sua produtividade" width="1200" height="400" className="w-full h-[400px] object-cover rounded-lg mb-8" loading="lazy" />
            <h1 className="text-4xl font-bold mb-8">Como Criar Metas Inteligentes (SMART) Sem Complicar</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-6 leading-relaxed">
                "Quero ter sucesso profissional." Soa familiar? Esse tipo de desejo vago é o principal motivo pelo qual 92% das pessoas abandonam suas metas nos primeiros três meses. A diferença entre quem realiza e quem apenas sonha está na clareza e estrutura do planejamento.
              </p>
              
              <p className="mb-6">
                Metas SMART são a metodologia comprovada que transforma desejos nebulosos em planos de ação concretos. Desenvolvida por Peter Drucker na década de 1950 e aperfeiçoada ao longo de décadas de aplicação corporativa, essa abordagem traz clareza, mensuração e senso de urgência para qualquer objetivo.
              </p>

              <div className="bg-muted/50 border-l-4 border-primary p-6 my-8 rounded">
                <p className="font-semibold mb-2">📊 Estatística Reveladora:</p>
                <p>Pessoas que definem metas SMART têm 42% mais chances de alcançá-las do que aquelas que apenas "têm objetivos em mente".</p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">O Que São Metas SMART?</h2>
              
              <p className="mb-6">
                SMART é um acrônimo que define cinco características essenciais que toda meta eficaz deve ter. Cada letra representa um critério fundamental:
              </p>

              <div className="space-y-6 my-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold mb-3">S - Específica (Specific)</h3>
                  <p className="mb-4">
                    Sua meta precisa ser cristalina. Quanto mais detalhes, melhor. Evite generalidades e seja preciso sobre o que exatamente você quer alcançar.
                  </p>
                  <div className="bg-destructive/10 p-4 rounded mb-2">
                    <p className="font-semibold text-destructive">❌ Vago: "Quero melhorar as vendas"</p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded">
                    <p className="font-semibold text-primary">✅ Específico: "Quero aumentar as vendas do produto X no segmento Y"</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold mb-3">M - Mensurável (Measurable)</h3>
                  <p className="mb-4">
                    Se você não pode medir, não pode gerenciar. Defina métricas claras que permitam acompanhar o progresso e saber quando a meta foi atingida.
                  </p>
                  <div className="bg-destructive/10 p-4 rounded mb-2">
                    <p className="font-semibold text-destructive">❌ Vago: "Aumentar a receita significativamente"</p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded">
                    <p className="font-semibold text-primary">✅ Mensurável: "Aumentar a receita de R$50.000 para R$75.000"</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold mb-3">A - Atingível (Achievable)</h3>
                  <p className="mb-4">
                    Ambição é importante, mas realismo é essencial. Sua meta deve ser desafiadora, mas possível com os recursos e capacidades disponíveis.
                  </p>
                  <div className="bg-destructive/10 p-4 rounded mb-2">
                    <p className="font-semibold text-destructive">❌ Irrealista: "Triplicar vendas em 1 mês sem investimento"</p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded">
                    <p className="font-semibold text-primary">✅ Atingível: "Aumentar vendas em 50% em 6 meses com equipe atual + 1 vendedor"</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold mb-3">R - Relevante (Relevant)</h3>
                  <p className="mb-4">
                    A meta deve estar alinhada com seus objetivos maiores e fazer sentido no contexto do seu negócio ou vida pessoal. Pergunte-se: "Por que isso importa?"
                  </p>
                  <div className="bg-destructive/10 p-4 rounded mb-2">
                    <p className="font-semibold text-destructive">❌ Desalinhado: "Lançar 10 produtos novos" (quando o problema é falta de clientes)</p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded">
                    <p className="font-semibold text-primary">✅ Relevante: "Conquistar 50 novos clientes recorrentes" (alinha com crescimento sustentável)</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold mb-3">T - Temporal (Time-bound)</h3>
                  <p className="mb-4">
                    Todo objetivo precisa de um prazo. A urgência cria foco e evita procrastinação. Defina uma data final específica.
                  </p>
                  <div className="bg-destructive/10 p-4 rounded mb-2">
                    <p className="font-semibold text-destructive">❌ Sem prazo: "Aumentar vendas eventualmente"</p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded">
                    <p className="font-semibold text-primary">✅ Temporal: "Aumentar vendas em 50% até 30 de junho de 2025"</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Exemplos Práticos de Metas SMART</h2>

              <div className="space-y-8 my-8">
                <div className="bg-gradient-to-br from-muted/50 to-muted/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">📈 Crescimento de Negócio</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-2">Meta Vaga:</p>
                      <p className="text-muted-foreground">"Quero crescer minha empresa"</p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="font-semibold mb-2 text-primary">Meta SMART:</p>
                      <p className="font-medium">"Aumentar o faturamento mensal de R$50.000 para R$75.000 até 30 de junho de 2025, conquistando 20 novos clientes através de campanhas de marketing digital focadas em pequenos negócios do setor de alimentação."</p>
                    </div>
                    <div className="bg-background/60 p-4 rounded mt-4">
                      <p className="text-sm font-semibold mb-2">Por que funciona:</p>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li>✅ Específica: faturamento, não "crescimento"</li>
                        <li>✅ Mensurável: de R$50k para R$75k</li>
                        <li>✅ Atingível: 50% em 6 meses com estratégia definida</li>
                        <li>✅ Relevante: crescimento sustentável via novos clientes</li>
                        <li>✅ Temporal: prazo claro de 30/06/2025</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-muted/50 to-muted/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">💪 Desenvolvimento Pessoal</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-2">Meta Vaga:</p>
                      <p className="text-muted-foreground">"Quero ser mais produtivo"</p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="font-semibold mb-2 text-primary">Meta SMART:</p>
                      <p className="font-medium">"Completar 90% das minhas tarefas prioritárias diárias (média de 5 tarefas/dia) durante os próximos 3 meses, utilizando o método Pomodoro e um sistema de gestão de tarefas digital."</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-muted/50 to-muted/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">🎯 Marketing e Presença Digital</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-2">Meta Vaga:</p>
                      <p className="text-muted-foreground">"Melhorar nossa presença nas redes sociais"</p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="font-semibold mb-2 text-primary">Meta SMART:</p>
                      <p className="font-medium">"Aumentar o engajamento no Instagram de 2% para 5% até dezembro de 2025, publicando 4 posts por semana com conteúdo educacional e alcançando 10.000 seguidores qualificados."</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Como Criar Suas Metas SMART: Passo a Passo</h2>

              <div className="space-y-6 my-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Comece com o desejo amplo</h3>
                    <p>Escreva o que você quer alcançar, mesmo que seja vago. Exemplo: "Quero melhorar minhas vendas"</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Faça as perguntas SMART</h3>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                      <li><strong>S:</strong> Exatamente o quê? Onde? Quem está envolvido?</li>
                      <li><strong>M:</strong> Quanto? Como vou medir o progresso?</li>
                      <li><strong>A:</strong> Tenho recursos? É possível?</li>
                      <li><strong>R:</strong> Por que isso importa? Como se conecta aos objetivos maiores?</li>
                      <li><strong>T:</strong> Quando será concluído? Qual o prazo?</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Escreva a meta completa</h3>
                    <p>Combine todas as respostas em uma frase clara e detalhada que contenha todos os elementos SMART.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quebre em marcos menores</h3>
                    <p>Divida a meta principal em objetivos menores mensais ou semanais. Isso facilita o acompanhamento e mantém a motivação.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Documente e revise semanalmente</h3>
                    <p>Mantenha suas metas visíveis e revise o progresso toda semana. Ajuste conforme necessário.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Erros Comuns ao Criar Metas SMART</h2>

              <div className="space-y-4 my-8">
                <div className="border border-destructive/30 bg-destructive/5 p-5 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">❌ Ser específico demais nos meios, pouco no resultado</h3>
                  <p className="text-sm mb-2">"Fazer 3 posts por dia no Instagram" → Foca na ação, não no resultado.</p>
                  <p className="text-sm text-primary">✅ Melhor: "Alcançar 5% de engajamento no Instagram através de conteúdo consistente até junho"</p>
                </div>

                <div className="border border-destructive/30 bg-destructive/5 p-5 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">❌ Definir metas impossíveis para parecer ambicioso</h3>
                  <p className="text-sm mb-2">Ambição é ótimo, mas metas inatingíveis desmotivam rapidamente.</p>
                  <p className="text-sm text-primary">✅ Melhor: Comece com metas desafiadoras mas realistas. Você pode aumentar depois.</p>
                </div>

                <div className="border border-destructive/30 bg-destructive/5 p-5 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">❌ Não revisar ou ajustar durante o período</h3>
                  <p className="text-sm mb-2">Definir e esquecer não funciona. O contexto muda.</p>
                  <p className="text-sm text-primary">✅ Melhor: Revise semanalmente e ajuste conforme necessário.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">FAQ - Perguntas Frequentes</h2>

              <div className="space-y-4 my-8">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold mb-2">Quantas metas SMART devo ter simultaneamente?</h3>
                  <p className="text-muted-foreground">Recomenda-se 3-5 metas principais por vez. Mais que isso dilui o foco. Priorize qualidade sobre quantidade.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold mb-2">E se eu não atingir a meta no prazo?</h3>
                  <p className="text-muted-foreground">Analise o que impediu o sucesso, ajuste a meta (prazo ou métrica) e continue. O importante é aprender e melhorar continuamente.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold mb-2">Metas SMART funcionam para objetivos pessoais também?</h3>
                  <p className="text-muted-foreground">Absolutamente! Funciona para fitness, finanças pessoais, relacionamentos, saúde mental - qualquer área onde você quer crescimento.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold mb-2">Como acompanhar o progresso das metas?</h3>
                  <p className="text-muted-foreground">Use sistemas digitais (Notion, planilhas, apps) ou físicos (quadros, cadernos). O importante é ter visibilidade constante e registrar marcos alcançados.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary p-8 rounded-lg my-12">
                <h3 className="text-2xl font-bold mb-4">💡 Conclusão</h3>
                <p className="mb-4">
                  Metas SMART não são apenas uma técnica - são uma mudança de mentalidade. Transformam sonhos em planos, planos em ações, e ações em resultados concretos.
                </p>
                <p className="mb-6">
                  A diferença entre quem alcança e quem apenas tenta está na clareza do objetivo e na estrutura do caminho. Comece hoje: pegue um objetivo vago, aplique o framework SMART, e veja a diferença na sua motivação e progresso.
                </p>
                <p className="font-semibold">
                  Lembre-se: O sucesso não acontece por acaso. Ele é planejado, medido e conquistado passo a passo.
                </p>
              </div>

              <div className="bg-muted p-8 rounded-lg my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">🎯 Sistema de Gestão de Metas</h3>
                <p className="mb-6 text-muted-foreground">Transforme suas metas SMART em realidade com nossos sistemas prontos de planejamento e acompanhamento</p>
                <Link to="/sistemas-notion" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">Ver Sistemas de Produtividade</Link>
              </div>

              <div className="mt-12 pt-8 border-t">
                <h3 className="text-xl font-bold mb-4">📚 Artigos Relacionados</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <Link to="/blog/sistema-produtividade-passo-passo" className="p-4 border rounded-lg hover:border-primary transition-colors">
                    <p className="font-semibold">Como Criar um Sistema de Produtividade do Zero</p>
                  </Link>
                  <Link to="/blog/planejamento-mensal-sistema" className="p-4 border rounded-lg hover:border-primary transition-colors">
                    <p className="font-semibold">Planejamento Mensal com Sistema</p>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MetasInteligentesSmart;