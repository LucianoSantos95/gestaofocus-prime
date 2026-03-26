import { Helmet } from "react-helmet-async";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Rocket, Sparkles, Users, Gift } from "lucide-react";

const ListaEspera = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Lista de Espera - Focus Club | Seja o Primeiro a Acessar</title>
        <meta name="description" content="Entre na lista de espera do Focus Club e seja um dos primeiros a ter acesso à plataforma completa de produtividade, sistemas Notion e comunidade exclusiva." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://focusinteligente.com.br/lista-espera" />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-background-secondary relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-focus relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-slide-up">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Em Breve</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
              O Focus Club Está Chegando
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground-muted mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
              Seja um dos primeiros a ter acesso à plataforma completa de<br />
              produtividade, sistemas Notion e comunidade exclusiva
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-foreground-muted">Sistemas Notion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-foreground-muted">Horas de Conteúdo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">7 Dias</div>
                <div className="text-sm text-foreground-muted">Trial Gratuito</div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Card className="card-hover border-primary/20 p-8 md:p-10 shadow-elegant">
              <div className="mb-8 text-center">
                <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Ganhe 30% de Desconto
                </h2>
                <p className="text-foreground-muted">
                  Membros da lista de espera ganham desconto exclusivo no lançamento
                </p>
              </div>

              <WaitlistForm source="landing" />
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-focus">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              O Que Você Vai Receber
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Sparkles,
                  title: "Acesso Antecipado",
                  description: "Seja um dos primeiros a explorar todos os recursos da plataforma antes do lançamento oficial"
                },
                {
                  icon: Gift,
                  title: "30% de Desconto",
                  description: "Desconto exclusivo para membros da lista de espera no plano anual"
                },
                {
                  icon: Users,
                  title: "Comunidade Exclusiva",
                  description: "Acesso à comunidade privada com outros early adopters e networking qualificado"
                },
                {
                  icon: CheckCircle,
                  title: "7 Dias Grátis",
                  description: "Trial gratuito de 7 dias para testar todos os recursos PRO sem compromisso"
                }
              ].map((benefit, index) => (
                <Card key={index} className="card-hover p-6 border-primary/10">
                  <benefit.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground-muted">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              O Que Está Incluído
            </h2>

            <div className="space-y-4">
              {[
                "150+ Sistemas Notion prontos para usar (CRM, Financeiro, Projetos, Marketing...)",
                "Cursos completos em vídeo sobre produtividade e Notion",
                "Playbooks mensais com estratégias e frameworks",
                "Comunidade exclusiva de empreendedores e gestores",
                "Suporte especializado e mentorias em grupo",
                "Atualizações mensais com novos sistemas e conteúdos"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-background">
        <div className="container-focus">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Não Perca o Lançamento
            </h2>
            <p className="text-xl text-foreground-muted mb-8">
              Vagas limitadas para membros fundadores.<br />
              Entre na lista agora e garanta seu desconto exclusivo.
            </p>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Entrar na Lista de Espera
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListaEspera;
