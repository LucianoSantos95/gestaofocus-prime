import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Tag, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import mapeamentoImage from "@/assets/blog/mapeamento-processos.jpg";

const MapeamentoProcessos = () => {
  const relatedPosts = [
    {
      title: "O segredo que as empresas produtivas usam (e ninguém te contou): o poder do Notion",
      slug: "poder-do-notion-empresas-produtivas"
    },
    {
      title: "Como montar um sistema completo no Notion e fazer sua empresa funcionar no piloto automático",
      slug: "sistema-completo-notion-automacao"
    },
    {
      title: "5 Erros de Produtividade que Você Comete Sem Perceber",
      slug: "5-erros-produtividade"
    }
  ];

  const publishDate = "2025-01-18";
  const modifiedDate = "2025-01-18";
  const articleUrl = "https://focusinteligente.com.br/blog/mapeamento-processos-crescimento";
  const imageUrl = "https://focusinteligente.com.br" + mapeamentoImage;

  return (
    <>
      <SEOHead
        title="Mapeamento de Processos Para Agências e Consultorias | Focus"
        description="Guia de mapeamento de processos para agências e consultorias. Identifique gargalos, elimine retrabalho e escale sua operação de serviços."
        canonical="/blog/mapeamento-processos-crescimento"
        image={imageUrl}
        type="article"
        publishedTime={publishDate}
        modifiedTime={modifiedDate}
        keywords="mapeamento processos agência, gestão processos consultoria, workflow agência, otimização processos prestadores serviço"
      />

      <Navigation />

      <article className="min-h-screen pt-24 pb-16">
        <div className="container-focus mb-8">
          <nav className="flex items-center space-x-2 text-sm text-foreground-muted">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">Mapeamento de Processos</span>
          </nav>
        </div>

        <div className="container-focus mb-8">
          <div className="aspect-video overflow-hidden rounded-2xl">
            <img 
              src={mapeamentoImage} 
              alt="Mapeamento de processos para agências e consultorias com workflow e identificação de gargalos operacionais"
              title="Mapeamento de processos para crescimento empresarial"
              width="1200"
              height="675"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="container-focus max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-sm text-foreground-muted flex-wrap">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                Gestão de Processos
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>18 de janeiro de 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min de leitura</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Sua agência está travada? Mapeamento de processos para destravar o crescimento
            </h1>

            <p className="text-xl text-foreground-muted leading-relaxed">
              Aprenda como fazer <strong>mapeamento de processos</strong> empresariais com <strong>BPMN</strong> e <strong>workflow</strong>, identificar gargalos, eliminar retrabalho e criar um <strong>fluxo de trabalho</strong> eficiente para sua empresa crescer.
            </p>
          </div>

          {/* Table of Contents */}
          <nav className="bg-card border border-card-border rounded-lg p-6 mb-12">
            <h2 className="text-lg font-bold mb-4">Neste artigo:</h2>
            <ul className="space-y-2 text-foreground-muted">
              <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <ChevronRight className="w-4 h-4" />
                <a href="#problema">O problema invisível que está travando seu crescimento</a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <ChevronRight className="w-4 h-4" />
                <a href="#o-que-e">O que é mapeamento de processos</a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <ChevronRight className="w-4 h-4" />
                <a href="#como-fazer">Como fazer mapeamento de processos na prática</a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <ChevronRight className="w-4 h-4" />
                <a href="#ferramentas">Ferramentas e técnicas: BPMN, Lean, Kaizen</a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <ChevronRight className="w-4 h-4" />
                <a href="#impacto">O impacto real do mapeamento de processos</a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <ChevronRight className="w-4 h-4" />
                <a href="#faq">Perguntas frequentes sobre mapeamento de processos</a>
              </li>
            </ul>
          </nav>

          {/* Featured Snippet Optimization */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <p className="text-lg leading-relaxed">
              <strong>Resposta rápida:</strong> Mapeamento de processos é documentar visualmente cada etapa de como o trabalho acontece na empresa usando técnicas como BPMN, fluxograma e workflow. Permite identificar gargalos, eliminar retrabalho e aumentar eficiência em até 40%, criando gestão de processos previsível e escalável.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="problema" className="text-3xl font-bold mt-12 mb-6">O problema invisível que está travando seu crescimento</h2>
            
            <p className="text-foreground-muted leading-relaxed mb-6">
              Sua empresa está crescendo, mas você sente que poderia estar indo muito mais rápido. Os mesmos problemas se repetem, a equipe está sempre ocupada mas os resultados não acompanham, e você passa mais tempo apagando incêndios do que planejando o futuro. Parece familiar?
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O motivo? Seus processos não estão mapeados. E quando você não sabe exatamente como as coisas funcionam na sua empresa através de <strong>gestão de processos</strong> estruturada, é impossível melhorá-las. Segundo pesquisa da <a href="https://www.mckinsey.com/capabilities/operations/our-insights" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">McKinsey</a>, empresas sem <strong>mapeamento de processos</strong> perdem em média 20-30% de eficiência operacional.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O <strong>mapeamento de processos</strong> transforma o caos operacional em <strong>workflow</strong> previsível. É a diferença entre improvisar diariamente e ter um sistema que funciona mesmo quando você não está presente.
            </p>

            <h2 id="o-que-e" className="text-3xl font-bold mt-12 mb-6">O que é mapeamento de processos e por que ele é crucial</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              <strong>Mapeamento de processos</strong> é simplesmente documentar e visualizar cada etapa de como o trabalho acontece na sua empresa. Desde o momento que um cliente entra em contato até a entrega do serviço, passando por todas as etapas intermediárias. Você cria <strong>fluxogramas</strong>, diagramas de <strong>workflow</strong> e documentação usando técnicas como <strong>BPMN (Business Process Model and Notation)</strong>.
            </p>

            <div className="bg-card border border-card-border rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold mb-3">📊 Dados que comprovam</h3>
              <p className="text-foreground-muted mb-0">
                De acordo com a <a href="https://www.abpmp.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ABPMP (Association of Business Process Management Professionals)</a>, empresas que implementam <strong>gestão de processos</strong> formal reduzem custos operacionais em 15-25% e aumentam satisfação do cliente em 20-35%. O <strong>mapeamento de processos</strong> é o primeiro passo essencial.
              </p>
            </div>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Quando você faz o <strong>mapeamento de processos</strong>, três coisas acontecem imediatamente na sua <strong>gestão de processos</strong>:
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">1. Você identifica os gargalos no workflow</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Aquela etapa que sempre atrasa tudo se torna óbvia no <strong>fluxograma</strong>. Pode ser uma aprovação demorada, uma falta de comunicação entre setores, ou um processo manual que deveria ser automatizado. Com o <strong>mapeamento de processos</strong> visual, os gargalos saltam aos olhos.
            </p>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Metodologias como <strong>Lean</strong> e <strong>Kaizen</strong> usam <strong>mapeamento de processos</strong> para identificar desperdícios (muda em japonês) e criar <strong>workflow</strong> otimizado. A Toyota, pioneira do <strong>Lean</strong>, atribui muito de seu sucesso ao constante <strong>mapeamento</strong> e melhoria de processos.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2. Você elimina o retrabalho através da gestão de processos</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Quantas vezes sua equipe refaz o mesmo trabalho? Informações que se perdem, tarefas duplicadas, ou decisões que precisam ser refeitas porque faltou alguma etapa no <strong>processo</strong>. O <strong>mapeamento de processos</strong> com <strong>BPMN</strong> ou <strong>fluxograma</strong> elimina ambiguidades.
            </p>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Um estudo da <a href="https://www.gartner.com/en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Gartner</a> mostra que empresas com processos mal documentados gastam 35% mais tempo em retrabalho. A <strong>gestão de processos</strong> estruturada reduz drasticamente esse desperdício.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3. Você cria previsibilidade com workflow documentado</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Com <strong>processos mapeados</strong> em <strong>workflow</strong> claro, você sabe exatamente quanto tempo cada coisa leva, quantos recursos precisa, e pode prever problemas antes que aconteçam. A <strong>gestão de processos</strong> se torna científica, não mais baseada em achismos.
            </p>

            {/* CTA Intermediário */}
            <div className="bg-gradient-primary rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Quer mapear seus processos de forma profissional?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Descubra como nossa consultoria especializada ajuda você a criar <strong>mapeamento de processos</strong> completo e <strong>workflow</strong> otimizado.
              </p>
              <Link to="/sistemas-notion">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Falar com Especialista
                </Button>
              </Link>
            </div>

            <h2 id="como-fazer" className="text-3xl font-bold mt-12 mb-6">Como fazer o mapeamento de processos na prática</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O <strong>mapeamento de processos</strong> não precisa ser complicado. Comece pelos processos mais críticos do seu negócio - aqueles que impactam diretamente o cliente ou a receita. Use metodologias comprovadas de <strong>gestão de processos</strong>.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Passo 1: Escolha o processo para mapear</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Comece com um <strong>processo</strong> que está causando problemas ou que é estratégico para o negócio. Exemplos: <strong>processo</strong> de vendas, onboarding de clientes, entrega de projetos, produção, atendimento. Priorize baseado em impacto e frequência.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Passo 2: Documente cada etapa no fluxograma</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Liste todas as etapas do <strong>processo</strong> do início ao fim. Use a notação <strong>BPMN</strong> se quiser padrão internacional, ou simplesmente crie <strong>fluxograma</strong> claro. Não tente fazer perfeito na primeira tentativa - o importante é começar o <strong>mapeamento de processos</strong>.
            </p>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Para cada etapa no <strong>workflow</strong>, documente: O que acontece? Quem faz? Quais inputs são necessários? Qual output é gerado? Quanto tempo leva? Existem pontos de decisão?
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Passo 3: Identifique responsáveis e prazos na gestão de processos</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Para cada etapa do <strong>processo mapeado</strong>, defina quem é responsável e quanto tempo deve levar. Isso cria accountability e permite medir a eficiência do <strong>workflow</strong>. Use ferramentas como <Link to="/poder-do-notion-empresas-produtivas" className="text-primary hover:underline">Notion para documentar processos</Link> de forma colaborativa.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Passo 4: Encontre os pontos de melhoria no workflow</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Com o <strong>processo mapeado</strong>, pergunte: onde estão os gargalos no <strong>workflow</strong>? O que pode ser eliminado? O que pode ser automatizado? O que depende de uma pessoa só (ponto único de falha)? Metodologias <strong>Lean</strong> e <strong>Kaizen</strong> são excelentes para análise crítica.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Passo 5: Implemente melhorias e monitore</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              <strong>Mapeamento de processos</strong> não é exercício estático. Implemente as melhorias identificadas, monitore resultados usando KPIs no <strong>workflow</strong>, e refine continuamente. O ciclo PDCA (Plan-Do-Check-Act) do <strong>Kaizen</strong> funciona perfeitamente com <strong>gestão de processos</strong>.
            </p>

            <h2 id="ferramentas" className="text-3xl font-bold mt-12 mb-6">Ferramentas e técnicas: BPMN, Lean, Kaizen</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">BPMN (Business Process Model and Notation)</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              <strong>BPMN</strong> é o padrão internacional para <strong>mapeamento de processos</strong>. Usa símbolos padronizados para representar eventos, atividades, gateways (pontos de decisão) e fluxos no <strong>workflow</strong>. Ferramentas como Bizagi, Lucidchart e Draw.io suportam <strong>BPMN</strong>.
            </p>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Vantagem do <strong>BPMN</strong>: qualquer profissional de <strong>gestão de processos</strong> no mundo entende a notação. Desvantagem: pode ser complexo para iniciantes. Para empresas pequenas, um <strong>fluxograma</strong> simples pode ser suficiente inicialmente.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Lean Manufacturing e eliminação de desperdícios</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Metodologia <strong>Lean</strong> foca em eliminar desperdícios (muda) do <strong>processo</strong>. Os 7 tipos de desperdício segundo o <strong>Lean</strong>: superprodução, espera, transporte, processamento excessivo, estoque, movimentação e defeitos. O <strong>mapeamento de processos Lean</strong> visa identificar e eliminar esses desperdícios do <strong>workflow</strong>.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Kaizen e melhoria contínua de processos</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              <strong>Kaizen</strong> (melhoria contínua) é filosofia japonesa aplicada à <strong>gestão de processos</strong>. Após <strong>mapear processos</strong>, você implementa pequenas melhorias incrementais constantemente. Eventos <strong>Kaizen</strong> são workshops focados onde equipes analisam <strong>processos mapeados</strong> e propõem melhorias no <strong>workflow</strong>.
            </p>

            <h2 id="impacto" className="text-3xl font-bold mt-12 mb-6">O impacto real do mapeamento de processos</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Empresas que fazem <strong>mapeamento de processos</strong> estruturado conseguem reduzir em até 40% o tempo gasto em tarefas operacionais através de <strong>workflow</strong> otimizado. Isso significa mais tempo para crescer, mais margem de lucro, e uma equipe menos estressada com <strong>gestão de processos</strong> clara.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Além disso, <strong>processos mapeados</strong> facilitam a contratação e treinamento de novos funcionários, porque tudo está documentado no <strong>fluxograma</strong>. E quando você decidir escalar, já tem a base de <strong>gestão de processos</strong> para crescer sem caos.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Casos reais de impacto do <strong>mapeamento de processos</strong>:
            </p>

            <ul className="list-disc pl-6 mb-6 text-foreground-muted space-y-2">
              <li><strong>Indústria farmacêutica:</strong> Reduziu tempo de produção em 35% após <strong>mapeamento de processos Lean</strong> e identificação de gargalos no <strong>workflow</strong></li>
              <li><strong>E-commerce:</strong> Aumentou eficiência de fulfillment em 50% com <strong>processos mapeados</strong> usando <strong>BPMN</strong> e automações</li>
              <li><strong>Serviços financeiros:</strong> Reduziu erros em 60% após documentar <strong>workflow</strong> de aprovações com <strong>mapeamento de processos</strong> detalhado</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão: do caos à previsibilidade com gestão de processos</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O <strong>mapeamento de processos</strong> transforma empresas que operam no improviso em organizações previsíveis e escaláveis. É a diferença entre estar preso no operacional e ter tempo para pensar estrategicamente através de <strong>gestão de processos</strong> eficiente.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Se você sente que sua empresa está travada, comece o <strong>mapeamento</strong> de apenas um <strong>processo</strong> esta semana. Crie um <strong>fluxograma</strong> simples, documente o <strong>workflow</strong>, identifique gargalos. Os resultados vão te surpreender. E conforme você refina sua <strong>gestão de processos</strong>, considere implementar <Link to="/sistema-completo-notion-automacao" className="text-primary hover:underline">um sistema completo de gestão</Link> para escalar seus resultados.
            </p>

            {/* FAQ Section */}
            <h2 id="faq" className="text-3xl font-bold mt-16 mb-8">Perguntas frequentes sobre mapeamento de processos</h2>

            <div className="space-y-6">
              <div className="border border-card-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">O que é mapeamento de processos?</h3>
                <p className="text-foreground-muted">
                  <strong>Mapeamento de processos</strong> é a documentação visual e detalhada de como o trabalho acontece na empresa, desde o início até o fim. Utilizando técnicas como <strong>BPMN</strong>, <strong>fluxograma</strong> e <strong>workflow</strong>, você registra cada etapa, responsáveis, prazos e pontos de decisão de um <strong>processo</strong>, criando uma <strong>gestão de processos</strong> eficiente que permite identificar gargalos e oportunidades de otimização usando metodologias como <strong>Lean</strong> e <strong>Kaizen</strong>.
                </p>
              </div>

              <div className="border border-card-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Quanto tempo leva para mapear processos em uma empresa?</h3>
                <p className="text-foreground-muted">
                  O tempo de <strong>mapeamento de processos</strong> varia conforme a complexidade do <strong>workflow</strong>. Um <strong>processo</strong> simples pode ser mapeado em <strong>fluxograma</strong> em 2-4 horas, enquanto <strong>processos</strong> complexos usando <strong>BPMN</strong> podem levar 1-2 semanas. Para <strong>mapear</strong> os processos principais de uma empresa pequena com <strong>gestão de processos</strong> completa, conte com 2-4 semanas. O uso de metodologias como <strong>Lean</strong> e ferramentas adequadas acelera o <strong>mapeamento de processos</strong>.
                </p>
              </div>

              <div className="border border-card-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Qual ferramenta usar para mapeamento de processos?</h3>
                <p className="text-foreground-muted">
                  Para <strong>mapeamento de processos</strong>, você pode usar desde ferramentas simples como Miro, Lucidchart e Draw.io para <strong>fluxograma</strong> até plataformas mais robustas como Bizagi (<strong>BPMN</strong>) ou <Link to="/poder-do-notion-empresas-produtivas" className="text-primary hover:underline">Notion para gestão de processos</Link>. O importante é escolher uma ferramenta que facilite a criação de <strong>fluxogramas</strong>, <strong>workflow</strong> e diagramas, e que seja acessível para toda a equipe visualizar e atualizar a <strong>gestão de processos</strong>.
                </p>
              </div>

              <div className="border border-card-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Como identificar gargalos em processos?</h3>
                <p className="text-foreground-muted">
                  No <strong>mapeamento de processos</strong> com <strong>fluxograma</strong> ou <strong>BPMN</strong>, gargalos aparecem como etapas do <strong>workflow</strong> onde o trabalho acumula, prazos são constantemente perdidos, ou uma única pessoa/departamento concentra muitas aprovações. Use métricas como tempo de ciclo, taxa de retrabalho e capacidade de throughput na <strong>gestão de processos</strong>. Metodologias <strong>Lean</strong> e <strong>Kaizen</strong> ajudam a identificar e eliminar gargalos no <strong>workflow mapeado</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-card-border">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-foreground-muted" />
              <span className="text-sm text-foreground-muted">Tags:</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Processos</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Gestão</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Otimização</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">BPMN</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Lean</span>
            </div>
          </div>

          <div className="mt-12 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Precisa de ajuda para mapear seus processos?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Nossa consultoria especializada ajuda você a fazer <strong>mapeamento de processos</strong> completo, otimizar <strong>workflow</strong> e automatizar sua <strong>gestão de processos</strong>.
            </p>
            <Link to="/sistemas-notion">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Falar com Especialista
              </Button>
            </Link>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post, index) => (
                <Link 
                  key={index}
                  to={`/blog/${post.slug}`}
                  className="group p-6 bg-card border border-card-border rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Link 
              to="/blog"
              className="inline-flex items-center text-primary hover:gap-2 transition-all"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar para o Blog
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
};

export default MapeamentoProcessos;