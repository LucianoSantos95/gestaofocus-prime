import { Button } from "@/components/ui/button";
import { Users, ArrowRight, CheckCircle, BookOpen, Video, MessageCircle, Award, Calendar, Download, Lightbulb, Zap, Cog, Target, Building } from "lucide-react";
const FocusClub = () => {
  const benefits = [{
    icon: <BookOpen className="w-6 h-6" />,
    title: "Conteúdo Exclusivo",
    description: "Aulas, workshops e materiais desenvolvidos especialmente para membros."
  }, {
    icon: <Users className="w-6 h-6" />,
    title: "Networking Qualificado",
    description: "Conecte-se com empreendedores, gestores e profissionais de alta performance."
  }, {
    icon: <Video className="w-6 h-6" />,
    title: "Mentorias ao Vivo",
    description: "Sessões mensais de mentoria com especialistas em gestão e produtividade."
  }, {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Comunidade Ativa",
    description: "Discussões diárias, trocas de experiência e suporte mútuo."
  }];
  const monthlyContent = [{
    title: "Produtividade (Base pessoal → Time)",
    description: "Rotina, priorização 80/20 e foco na prática. Planejamento e revisão semanais que viram cadências simples para o time, reduzindo distrações e aumentando a execução.",
    icon: <Zap className="w-5 h-5" />
  }, {
    title: "Processos (Da ideia ao SOP)",
    description: "Do AS-IS ao TO-BE de forma enxuta. Criação de SOPs com dono, gatilhos e SLAs, além de melhoria contínua e indicadores práticos (lead time, taxa de erro).",
    icon: <Cog className="w-5 h-5" />
  }, {
    title: "Projetos (Execução sem caos)",
    description: "Planejamento por valor, escopo mínimo e fluxo Kanban/Scrum 'lite'. Ritos curtos, gestão de riscos e um painel claro conectando Projetos ↔ Tarefas ↔ Pessoas.",
    icon: <Target className="w-5 h-5" />
  }, {
    title: "Gestão Empresarial (Máquina do negócio)",
    description: "Estratégia simples, funil de vendas e playbook comercial. Finanças sem complicação (fluxo de caixa, unit economics) e rotinas de gestão guiadas por métricas que importam.",
    icon: <Building className="w-5 h-5" />
  }];
  const plans = [{
    name: "Mensal",
    price: "R$ 67,90",
    period: "mês",
    description: "Flexibilidade para experimentar",
    features: ["Acesso completo à plataforma", "Todas as aulas e materiais", "Comunidade exclusiva", "Mentorias mensais", "Downloads ilimitados"],
    highlight: false,
    savings: null
  }, {
    name: "Anual",
    price: "R$ 497,00",
    period: "ano",
    originalPrice: "R$ 814,80",
    description: "2 meses grátis + bônus exclusivos",
    features: ["Todos os benefícios do plano mensal", "2 meses grátis (economia de R$ 135,80)", "Bônus: Templates exclusivos", "Bônus: Consultoria 1:1 (30 min)", "Prioridade no suporte"],
    highlight: true,
    savings: "Economize R$ 317,80/ano"
  }];
  return <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
              <Users className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-foreground-muted">
                Comunidade Focus Club
              </span>
            </div>
            
            <h1 className="hero-title mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Aprendizado contínuo
            </h1>
            
            <p className="hero-subtitle mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Comunidade exclusiva para profissionais em busca de excelência, com conteúdos semanais, networking estratégico e desenvolvimento acelerado.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Button className="btn-hero group">
                Entrar na comunidade
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button variant="outline" className="btn-secondary">
                Conhecer a comunidade
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">+20</div>
                <div className="text-sm text-foreground-muted">Aulas disponíveis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.9</div>
                <div className="text-sm text-foreground-muted">Avaliação média</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              O que você encontra na comunidade
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Uma experiência completa de aprendizado e networking, 
              projetada para acelerar seu desenvolvimento profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => <div key={benefit.title} className="service-card animate-slide-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-foreground-muted">
                  {benefit.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Monthly Program Section */}
      <section className="section-padding">
        <div className="container-focus">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Aprendizado Contínuo
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Conteúdos exclusivos que unem gestão, processos e desenvolvimento pessoal em aulas práticas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {monthlyContent.map((content, index) => <div key={content.title} className="service-card animate-slide-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary mr-4">
                    {content.icon}
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    {content.title}
                  </h3>
                </div>
                
                <p className="text-foreground-muted">
                  {content.description}
                </p>
              </div>)}
          </div>

          <div className="mt-16 text-center">
            <div className="service-card max-w-2xl mx-auto">
              <Download className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                Biblioteca de Recursos
              </h3>
              <p className="text-foreground-muted mb-6">
                Acesso completo a templates, checklists, planilhas e ferramentas 
                exclusivas desenvolvidas pela Focus para acelerar sua implementação.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-foreground-muted">
                <div>✓ Sistemas exclusivos</div>
                <div>✓ Checklists práticos</div>
                <div>✓ Ferramentas de análise</div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Planos de assinatura
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Escolha o plano que melhor se adapta ao seu momento. 
              Comece hoje e transforme sua forma de gerir e produzir.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto pt-12">
            {plans.map((plan, index) => <div key={plan.name} className={`service-card relative min-h-[520px] flex flex-col ${plan.highlight ? 'ring-2 ring-primary animate-glow' : ''}`}>
                {plan.highlight && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    
                  </div>}
                
                <div className={`text-center mb-6 ${plan.highlight ? 'pt-6' : 'pt-4'}`}>
                  <h3 className="text-2xl font-bold text-card-foreground mb-3">{plan.name}</h3>
                  <div className="mb-3">
                    {plan.originalPrice && <div className="text-base text-foreground-muted line-through mb-1">{plan.originalPrice}</div>}
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl lg:text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-foreground-muted text-base">/{plan.period}</span>
                    </div>
                  </div>
                  {plan.savings && <div className="text-sm text-primary font-medium mb-2">{plan.savings}</div>}
                  <p className="text-sm text-foreground-muted">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-start text-sm text-foreground-muted">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>)}
                </div>

                <Button className={plan.highlight ? "btn-hero w-full mt-auto" : "btn-secondary w-full mt-auto"}>
                  Escolher {plan.name}
                </Button>
              </div>)}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-foreground-muted">
              ✓ Cancele quando quiser • ✓ Suporte especializado • ✓ Garantia de 7 dias
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Vamos evoluir juntos?
            </h2>
            <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
              Junte-se a profissionais que já estão transformando sua gestão 
              e produtividade. Sua evolução começa hoje.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="btn-hero group">
                Entrar na Focus Club
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" className="btn-secondary">
                Ver depoimentos
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default FocusClub;