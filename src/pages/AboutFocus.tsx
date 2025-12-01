import { Helmet } from "react-helmet";
import { CheckCircle, Target, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick, trackCTAClick } from "@/lib/analytics";

const AboutFocus = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Sobre a Focus Inteligente - Consultoria em Produtividade e Gestão Empresarial</title>
        <meta name="description" content="Conheça a Focus Inteligente: especialistas em sistemas Notion, consultoria empresarial e templates de produtividade. Transformando processos em resultados desde 2023." />
        <link rel="canonical" href="https://focusinteligente.com.br/sobre" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative z-10 container-focus text-center px-6">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sobre a <span className="text-primary">Focus Inteligente</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
              Criamos sistemas, consultorias e templates em Notion para aumentar a 
              produtividade pessoal e empresarial.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Nossa <span className="text-primary">Missão</span>
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed text-center mb-12">
              Do empreendedor individual às pequenas e médias empresas — organizamos processos, 
              rotinas, projetos e fluxos de trabalho com clareza e simplicidade.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="service-card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Clareza</h3>
                <p className="text-foreground-muted">
                  Processos claros e organizados que eliminam a confusão e aumentam a eficiência.
                </p>
              </div>

              <div className="service-card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Resultados</h3>
                <p className="text-foreground-muted">
                  Sistemas que geram resultados reais e mensuráveis para empresas e profissionais.
                </p>
              </div>

              <div className="service-card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Parceria</h3>
                <p className="text-foreground-muted">
                  Trabalhamos lado a lado com nossos clientes para alcançar o sucesso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Impacto em <span className="text-primary">Números</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+12.000</div>
                <div className="text-foreground-muted">Downloads de sistemas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+20</div>
                <div className="text-foreground-muted">Empresas atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+150</div>
                <div className="text-foreground-muted">Sistemas criados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              O Que <span className="text-primary">Fazemos</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consultoria Empresarial</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Desenvolvemos sistemas personalizados em Notion para padronizar processos, 
                    melhorar equipes e aumentar a produtividade empresarial.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Templates Profissionais</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Criamos templates prontos para uso em gestão de projetos, finanças, 
                    produtividade e muito mais.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Treinamento e Suporte</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Oferecemos treinamento completo e suporte contínuo para garantir que você 
                    aproveite ao máximo seus sistemas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Conteúdo Educativo</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Produzimos conteúdo de qualidade sobre produtividade, gestão empresarial 
                    e organização para ajudar você a evoluir continuamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto text-center service-card">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para <span className="text-primary">transformar</span> sua gestão?
            </h2>
            <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
              Entre em contato conosco e descubra como podemos ajudar você a organizar 
              sua vida e sua empresa com clareza e eficiência.
            </p>
            <Button 
              className="btn-hero px-10 py-6 text-lg"
              onClick={() => {
                trackWhatsAppClick('sobre_cta');
                trackCTAClick('Falar com a Focus', 'sobre');
                window.open('https://wa.me/5511916742443?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20melhor%20a%20Focus%20Inteligente!', '_blank');
              }}
            >
              Falar com a Focus
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFocus;
