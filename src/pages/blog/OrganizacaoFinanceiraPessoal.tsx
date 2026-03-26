import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCTA from "@/components/BlogCTA";
import RelatedArticles from "@/components/RelatedArticles";
import organizacaoFinanceiraImage from "@/assets/blog/organizacao-financeira-pessoal.jpg";

const allArticles = [
  {
    title: "Como Organizar Sua Rotina Semanal Para Ter Mais Foco",
    excerpt: "O método completo de planejamento semanal que elimina decisões desnecessárias e multiplica seu foco nas tarefas que importam.",
    slug: "organizar-rotina-semanal",
    readTime: "9 min",
    category: "Organização"
  },
  {
    title: "Organização Pessoal 2.0: Como Usar Tecnologia Para Ter Mais Clareza Mental",
    excerpt: "Como construir seu Second Brain usando ferramentas digitais para liberar espaço mental e aumentar sua capacidade criativa.",
    slug: "organizacao-pessoal-tecnologia",
    readTime: "8 min",
    category: "Sistemas"
  },
  {
    title: "Planejamento Mensal: Como Criar Um Sistema Que Realmente Funciona",
    excerpt: "Framework prático de 4 pilares para planejar seu mês de forma estratégica e executar com consistência.",
    slug: "planejamento-mensal-sistema",
    readTime: "9 min",
    category: "Planejamento"
  }
];

const imageUrl = "https://focusinteligente.com.br" + organizacaoFinanceiraImage;

export default function OrganizacaoFinanceiraPessoal() {
  return (
    <>
      <SEOHead
        title="Gestão Financeira Para Agências: Controle Por Projeto | Focus"
        description="Sistema prático para agências e consultorias controlarem receitas, custos por cliente e fluxo de caixa sem planilhas complexas."
        canonical="/blog/organizacao-financeira-pessoal-sistema-simples"
        image={imageUrl}
        type="article"
        publishedTime="2025-02-20"
        modifiedTime="2025-02-20"
        keywords="gestão financeira agência, controle custos consultoria, financeiro prestadores serviço, fluxo caixa agência"
      />

      <Navigation />
      
      <article className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-8">
          <div className="flex items-center gap-2 text-sm text-foreground-muted mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">Organização Financeira Pessoal</span>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8 group"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para o Blog</span>
            </Link>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Gestão Financeira para Agências
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Organização Financeira Pessoal: Como Controlar Seus Gastos Usando Um Sistema Simples
            </h1>

            <p className="text-xl text-foreground-muted mb-8">
              O método prático que elimina a bagunça financeira sem precisar de planilhas complexas ou aplicativos complicados
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-foreground-muted mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime="2025-02-20">20 de Fevereiro, 2025</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min de leitura</span>
              </div>
            </div>

            <img 
              src={organizacaoFinanceiraImage} 
              alt="Organização financeira pessoal com calculadora e gráficos de orçamento" 
              className="w-full h-[400px] object-cover rounded-lg mb-12"
              width={1200}
              height={675}
              loading="eager"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                <strong>Você sabe exatamente quanto gastou no mês passado? E para onde foi cada centavo?</strong>
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Se a resposta é "não" ou "mais ou menos", você não está sozinho. Estudos mostram que <strong>78% dos brasileiros</strong> 
                não têm controle efetivo dos próprios gastos — e isso tem um custo alto: stress financeiro, compras por impulso 
                e a sensação constante de que "o dinheiro some".
              </p>

              <p className="text-lg leading-relaxed mb-8">
                A boa notícia? Você não precisa ser contador ou usar planilhas super complicadas. O sistema que vou te ensinar 
                leva <strong>menos de 10 minutos por semana</strong> e funciona para qualquer nível de renda.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Por Que Você Não Consegue Controlar Seus Gastos</h2>

              <p className="text-lg leading-relaxed mb-6">
                Antes de apresentar o sistema, vamos entender por que os métodos tradicionais falham:
              </p>

              <div className="bg-surface border border-border rounded-lg p-6 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <strong>Planilhas complexas demais:</strong> 50 categorias de gastos? Ninguém tem paciência para isso
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <strong>Apps que exigem muito trabalho:</strong> Lançar cada café, cada Uber... é insustentável
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <strong>Foco no passado, não no futuro:</strong> De que adianta saber que gastou demais... depois?
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed mb-8">
                O sistema que funciona precisa ser <strong>simples, visual e focado no que importa</strong>: tomar melhores 
                decisões financeiras hoje, não apenas analisar erros do passado.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">O Sistema 4 Bolsos: Organize Suas Finanças em 4 Categorias</h2>

              <p className="text-lg leading-relaxed mb-6">
                Esqueça 50 categorias. Você só precisa de 4 "bolsos" para ter controle total do seu dinheiro:
              </p>

              <div className="space-y-6 mb-12">
                <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
                    💚 Bolso 1: Essenciais (50-60%)
                  </h3>
                  <p className="mb-3">Gastos que você NÃO pode cortar:</p>
                  <ul className="space-y-2 text-foreground-muted">
                    <li>• Moradia (aluguel, financiamento, condomínio)</li>
                    <li>• Alimentação básica (mercado, gás)</li>
                    <li>• Transporte para trabalho</li>
                    <li>• Contas fixas (luz, água, internet)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                    💙 Bolso 2: Metas (20-30%)
                  </h3>
                  <p className="mb-3">O dinheiro do seu futuro:</p>
                  <ul className="space-y-2 text-foreground-muted">
                    <li>• Reserva de emergência</li>
                    <li>• Investimentos</li>
                    <li>• Objetivos grandes (viagem, carro, casa própria)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                    💜 Bolso 3: Estilo de Vida (15-25%)
                  </h3>
                  <p className="mb-3">O que torna a vida boa (mas que pode ser ajustado):</p>
                  <ul className="space-y-2 text-foreground-muted">
                    <li>• Restaurantes e delivery</li>
                    <li>• Streaming e assinaturas</li>
                    <li>• Academia, hobbies</li>
                    <li>• Compras de roupa, eletrônicos</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-amber-600 dark:text-amber-400">
                    💛 Bolso 4: Variável (5-10%)
                  </h3>
                  <p className="mb-3">Imprevistos e gastos esporádicos:</p>
                  <ul className="space-y-2 text-foreground-muted">
                    <li>• Presentes</li>
                    <li>• Remédios e consultas</li>
                    <li>• Manutenções (carro, casa)</li>
                    <li>• Emergências pequenas</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Como Implementar o Sistema 4 Bolsos</h2>

              <div className="space-y-8 mb-12">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold mb-3">Passo 1: Descubra sua Receita Líquida</h3>
                  <p className="text-foreground-muted mb-4">
                    Quanto realmente entra na sua conta todo mês? Considere:
                  </p>
                  <ul className="space-y-2 text-foreground-muted">
                    <li>• Salário líquido (depois dos descontos)</li>
                    <li>• Freelas, renda extra</li>
                    <li>• Rendimentos de investimentos</li>
                  </ul>
                  <p className="mt-4 font-semibold">Exemplo: R$ 4.000/mês</p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold mb-3">Passo 2: Distribua nos 4 Bolsos</h3>
                  <p className="text-foreground-muted mb-4">
                    Use as porcentagens como guia inicial:
                  </p>
                  <div className="bg-surface rounded-lg p-4 space-y-2">
                    <p>💚 Essenciais: R$ 2.400 (60%)</p>
                    <p>💙 Metas: R$ 800 (20%)</p>
                    <p>💜 Estilo de Vida: R$ 600 (15%)</p>
                    <p>💛 Variável: R$ 200 (5%)</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold mb-3">Passo 3: Registre APENAS os Bolsos</h3>
                  <p className="text-foreground-muted mb-4">
                    Não anote cada centavo. A cada gasto, pergunte apenas:
                  </p>
                  <p className="font-semibold text-primary">"Isso sai de qual bolso?"</p>
                  <p className="mt-4 text-foreground-muted">
                    No final da semana, some quanto gastou de cada bolso. Levou 5 minutos.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold mb-3">Passo 4: Ajuste e Aprenda</h3>
                  <p className="text-foreground-muted">
                    Não tem problema se no primeiro mês você estourar um bolso. O importante é:
                  </p>
                  <ul className="space-y-2 mt-4 text-foreground-muted">
                    <li>• Identificar qual bolso está pesado</li>
                    <li>• Tomar decisões conscientes (não reativamente)</li>
                    <li>• Ajustar as porcentagens conforme sua realidade</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Use o Notion Para Simplificar Ainda Mais</h2>

              <p className="text-lg leading-relaxed mb-6">
                Você pode gerenciar os 4 Bolsos com papel, mas usar o Notion torna tudo visual e automático:
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-bold mb-4">Template: Controle Financeiro 4 Bolsos</h3>
                <div className="space-y-4">
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="font-semibold mb-2">📊 Dashboard Visual</p>
                    <p className="text-sm text-foreground-muted">Veja em barras de progresso quanto você já gastou de cada bolso</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="font-semibold mb-2">✅ Check-in Semanal</p>
                    <p className="text-sm text-foreground-muted">1x por semana, atualize os valores — sem precisar lançar item por item</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="font-semibold mb-2">🎯 Metas Automáticas</p>
                    <p className="text-sm text-foreground-muted">Defina objetivos e veja o progresso em tempo real</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Os 3 Erros Fatais da Organização Financeira</h2>

              <div className="space-y-6 mb-8">
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span>❌</span> Erro 1: Querer Perfeição
                  </h3>
                  <p className="text-foreground-muted">
                    Você não precisa lançar cada café ou Uber. O que importa é ter controle geral dos 4 Bolsos.
                  </p>
                </div>

                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span>❌</span> Erro 2: Nunca Ajustar
                  </h3>
                  <p className="text-foreground-muted">
                    As porcentagens são um guia, não uma lei. Se sua realidade mudou (novo emprego, filhos), ajuste!
                  </p>
                </div>

                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span>❌</span> Erro 3: Não Separar o Dinheiro de Verdade
                  </h3>
                  <p className="text-foreground-muted">
                    Idealmente, crie contas separadas (mesmo que digitais) para os bolsos de Metas e Variável. 
                    Se não, deixe o dinheiro "mentalmente separado".
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">O Que Esperar nos Primeiros 90 Dias</h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-6">
                  <p className="font-bold text-primary mb-2">Mês 1: Descoberta</p>
                  <p className="text-foreground-muted">
                    Você vai descobrir para onde seu dinheiro realmente vai. Pode ser chocante — é normal.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <p className="font-bold text-primary mb-2">Mês 2: Ajustes</p>
                  <p className="text-foreground-muted">
                    Você começa a fazer cortes conscientes no Bolso de Estilo de Vida e aumenta o Bolso de Metas.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <p className="font-bold text-primary mb-2">Mês 3: Controle</p>
                  <p className="text-foreground-muted">
                    Você sente que tem controle real. O stress financeiro diminui drasticamente.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão: Simplicidade É Poder</h2>

              <p className="text-lg leading-relaxed mb-6">
                Organização financeira não precisa ser complicada. Na verdade, quanto mais simples, maior a chance de funcionar.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                O Sistema 4 Bolsos funciona porque <strong>elimina a sobrecarga de decisão</strong> e te dá clareza visual 
                do que realmente importa: onde seu dinheiro está indo e se isso está te levando para onde você quer chegar.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Comece hoje. Pegue uma folha de papel (ou abra o Notion) e distribua sua receita nos 4 Bolsos. Em 10 minutos 
                você terá mais clareza financeira do que teve nos últimos 6 meses.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-6 my-8">
                <p className="text-lg">
                  <strong>💡 Próximo Passo:</strong> Conheça nossos sistemas no Notion que incluem templates prontos de 
                  controle financeiro, planejamento de metas e muito mais.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-foreground-muted">Tags:</span>
                <span className="px-3 py-1 bg-surface rounded-full text-sm">finanças pessoais</span>
                <span className="px-3 py-1 bg-surface rounded-full text-sm">controle de gastos</span>
                <span className="px-3 py-1 bg-surface rounded-full text-sm">orçamento</span>
                <span className="px-3 py-1 bg-surface rounded-full text-sm">organização financeira</span>
              </div>
            </div>

            <BlogCTA location="organizacao-financeira" />

            <RelatedArticles 
              currentSlug="organizacao-financeira-pessoal-sistema-simples"
              category="Finanças Pessoais"
              allArticles={allArticles}
            />
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}