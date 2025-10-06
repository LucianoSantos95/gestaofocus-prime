import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Users, ArrowRight, CheckCircle, BookOpen, Video, MessageCircle, Award, Calendar, Download, Lightbulb, Zap, Cog, Target, Building } from "lucide-react";

const FocusClub = () => {
  const [selectedBenefit, setSelectedBenefit] = useState<number | null>(null);
  const [selectedContent, setSelectedContent] = useState<number | null>(null);
  const benefits = [
    {
      icon: BookOpen,
      title: "Conteúdo Exclusivo",
      description: "Aulas, workshops e materiais desenvolvidos especialmente para membros.",
      gradient: "from-blue-500 to-cyan-500",
      details: "Acesso ilimitado a uma biblioteca crescente de conteúdos premium desenvolvidos exclusivamente para membros do Focus Club. Inclui aulas em vídeo com especialistas, workshops práticos ao vivo, materiais didáticos em PDF, templates prontos para usar, frameworks testados em empresas reais, checklists detalhados para implementação, e muito mais. Novos conteúdos são adicionados semanalmente, cobrindo temas como produtividade, gestão, processos, vendas, marketing e estratégia empresarial. Todo material é prático e aplicável imediatamente no seu dia a dia."
    },
    {
      icon: Users,
      title: "Networking Qualificado",
      description: "Conecte-se com empreendedores, gestores e profissionais de alta performance.",
      gradient: "from-purple-500 to-pink-500",
      details: "Entre para uma rede exclusiva de empreendedores, gestores e profissionais que compartilham os mesmos objetivos de crescimento e excelência. Faça conexões valiosas através de eventos presenciais e online, participe de grupos de discussão temáticos, encontre parceiros de negócios e colaboradores estratégicos, compartilhe experiências e aprenda com casos reais. A comunidade é cuidadosamente curada para garantir que você se conecte com pessoas sérias, comprometidas e que agregam valor real. Networking que gera oportunidades concretas de negócios e crescimento profissional."
    },
    {
      icon: Video,
      title: "Mentorias ao Vivo",
      description: "Sessões mensais de mentoria com especialistas em gestão e produtividade.",
      gradient: "from-orange-500 to-red-500",
      details: "Participe de sessões mensais ao vivo com especialistas reconhecidos em gestão empresarial, produtividade, processos e estratégia. Tire suas dúvidas em tempo real, apresente seus desafios específicos e receba orientações personalizadas, aprenda com os casos de outros membros, assista análises práticas de situações reais. Todas as sessões ficam gravadas para você assistir quando quiser. Os mentores são profissionais com experiência comprovada em construir e escalar negócios, implementar sistemas de gestão eficientes e desenvolver equipes de alta performance. Mentoria de verdade, com quem entende do assunto."
    },
    {
      icon: MessageCircle,
      title: "Comunidade Ativa",
      description: "Discussões diárias, trocas de experiência e suporte mútuo.",
      gradient: "from-green-500 to-emerald-500",
      details: "Faça parte de uma comunidade vibrante e engajada onde membros interagem diariamente. Participe de discussões ricas sobre desafios e soluções empresariais, compartilhe suas conquistas e aprendizados, peça conselhos e receba feedback construtivo de pessoas que passaram por situações similares, encontre apoio e motivação nos momentos difíceis. A comunidade usa uma plataforma privada e organizada por tópicos, facilitando encontrar exatamente o que você precisa. Moderação ativa garante ambiente respeitoso e produtivo. Você nunca estará sozinho nos seus desafios."
    }
  ];
  const monthlyContent = [
    {
      title: "Produtividade (Base pessoal → Time)",
      description: "Rotina, priorização 80/20 e foco na prática. Planejamento e revisão semanais que viram cadências simples para o time, reduzindo distrações e aumentando a execução.",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
      details: "Domine os fundamentos da produtividade pessoal e aprenda a escalar isso para seu time. Construa rotinas matinais e semanais que realmente funcionam, aplique o princípio 80/20 para focar no que gera resultado, elimine distrações e crie ambientes de foco profundo. Aprenda técnicas de gestão de energia (não apenas tempo), implemente sistemas de captura e organização de tarefas, crie cadências de planejamento e revisão que se tornam hábitos naturais. Depois, leve esses conceitos para o time: rituais de planejamento semanal em equipe, transparência de prioridades, redução de reuniões desnecessárias e foco coletivo em resultados-chave."
    },
    {
      title: "Processos (Da ideia ao SOP)",
      description: "Do AS-IS ao TO-BE de forma enxuta. Criação de SOPs com dono, gatilhos e SLAs, além de melhoria contínua e indicadores práticos (lead time, taxa de erro).",
      icon: Cog,
      gradient: "from-blue-500 to-purple-500",
      details: "Transforme o caos operacional em processos claros e replicáveis. Aprenda a mapear processos atuais (AS-IS) de forma rápida e visual, identifique gargalos e desperdícios, desenhe processos otimizados (TO-BE) focando no que agrega valor. Crie SOPs (Standard Operating Procedures) práticos e fáceis de seguir, defina responsáveis claros, gatilhos de início e SLAs realistas. Implemente cultura de melhoria contínua com indicadores simples mas eficazes: lead time, taxa de erro, tempo de ciclo. Use ferramentas visuais como fluxogramas e checklists que facilitam treinamento e execução. Processos que funcionam na prática, não apenas no papel."
    },
    {
      title: "Projetos (Execução sem caos)",
      description: "Planejamento por valor, escopo mínimo e fluxo Kanban/Scrum 'lite'. Ritos curtos, gestão de riscos e um painel claro conectando Projetos ↔ Tarefas ↔ Pessoas.",
      icon: Target,
      gradient: "from-pink-500 to-red-500",
      details: "Aprenda a gerenciar projetos de forma ágil e eficiente, sem burocracias desnecessárias. Defina escopo mínimo viável (MVP) para entregar valor rapidamente, use metodologias Kanban/Scrum adaptadas para realidade de pequenas e médias empresas, implemente rituais curtos e produtivos (daily, retrospectiva). Crie painéis visuais que conectam projetos estratégicos com tarefas operacionais e pessoas responsáveis, gerencie riscos de forma prática sem planilhas complexas, priorize por valor e urgência real. Aprenda a dizer não para projetos que não fazem sentido. Execute mais e melhor, com menos estresse e mais previsibilidade."
    },
    {
      title: "Gestão Empresarial (Máquina do negócio)",
      description: "Estratégia simples, funil de vendas e playbook comercial. Finanças sem complicação (fluxo de caixa, unit economics) e rotinas de gestão guiadas por métricas que importam.",
      icon: Building,
      gradient: "from-emerald-500 to-teal-500",
      details: "Construa uma máquina de negócio que funciona de forma previsível e escalável. Defina estratégia clara e simples que todos entendem, monte funil de vendas estruturado com etapas bem definidas, crie playbook comercial para sua equipe replicar o sucesso. Gestão financeira descomplicada: fluxo de caixa visual, unit economics para entender rentabilidade real, indicadores financeiros que realmente importam (CAC, LTV, margem, break-even). Implemente rotinas de gestão: reuniões 1:1 produtivas, reviews de performance, acompanhamento de OKRs/KPIs. Dashboard executivo para tomar decisões rápidas baseadas em dados. Transforme seu negócio em uma operação profissional e escalável."
    }
  ];
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
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
        <div className="relative z-10 container-focus">
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
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.title} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <Card 
                    className="card-hover h-full border-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-elegant cursor-pointer"
                    onClick={() => setSelectedBenefit(index)}
                  >
                    <div className="p-8">
                      <div className="relative mb-6 flex justify-start">
                        <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-0.5 shadow-lg`}>
                          <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                            <IconComponent className="w-7 h-7 text-foreground" />
                          </div>
                        </div>
                        <div className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} blur-xl opacity-30`} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-card-foreground mb-3">
                        {benefit.title}
                      </h3>
                      
                      <p className="text-foreground-muted mb-4">
                        {benefit.description}
                      </p>

                      <p className="text-sm text-primary hover:text-primary/80 transition-colors">
                        Clique para saber mais →
                      </p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Benefits Dialog */}
          <Dialog open={selectedBenefit !== null} onOpenChange={(open) => !open && setSelectedBenefit(null)}>
            <DialogContent className="max-w-2xl">
              {selectedBenefit !== null && (
                <>
                  <DialogHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${benefits[selectedBenefit].gradient} p-0.5 shadow-lg`}>
                        <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                          {(() => {
                            const IconComponent = benefits[selectedBenefit].icon;
                            return <IconComponent className="w-8 h-8 text-foreground" />;
                          })()}
                        </div>
                      </div>
                      <div className="text-left">
                        <DialogTitle className="text-2xl">
                          {benefits[selectedBenefit].title}
                        </DialogTitle>
                      </div>
                    </div>
                    <DialogDescription className="text-base leading-relaxed text-foreground-muted">
                      {benefits[selectedBenefit].details}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    <Button className="btn-hero w-full group">
                      Entrar na comunidade
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
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
            {monthlyContent.map((content, index) => {
              const IconComponent = content.icon;
              return (
                <div key={content.title} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <Card 
                    className="card-hover h-full border-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-elegant cursor-pointer"
                    onClick={() => setSelectedContent(index)}
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${content.gradient} p-0.5 shadow-lg mr-4`}>
                          <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-foreground" />
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-card-foreground">
                          {content.title}
                        </h3>
                      </div>
                      
                      <p className="text-foreground-muted mb-3">
                        {content.description}
                      </p>

                      <p className="text-sm text-primary hover:text-primary/80 transition-colors">
                        Clique para saber mais →
                      </p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Content Dialog */}
          <Dialog open={selectedContent !== null} onOpenChange={(open) => !open && setSelectedContent(null)}>
            <DialogContent className="max-w-2xl">
              {selectedContent !== null && (
                <>
                  <DialogHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${monthlyContent[selectedContent].gradient} p-0.5 shadow-lg`}>
                        <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                          {(() => {
                            const IconComponent = monthlyContent[selectedContent].icon;
                            return <IconComponent className="w-8 h-8 text-foreground" />;
                          })()}
                        </div>
                      </div>
                      <div className="text-left">
                        <DialogTitle className="text-2xl">
                          {monthlyContent[selectedContent].title}
                        </DialogTitle>
                      </div>
                    </div>
                    <DialogDescription className="text-base leading-relaxed text-foreground-muted">
                      {monthlyContent[selectedContent].details}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    <Button className="btn-hero w-full group">
                      Começar agora
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

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