import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WaitlistForm } from "@/components/WaitlistForm";
import { 
  Target, 
  FileText, 
  Users, 
  Zap, 
  Sparkles,
  CheckCircle2,
  XCircle,
  Lock,
  Play,
  BookOpen,
  Layers,
  MessageSquare,
  Crown,
  TrendingUp,
  Clock
} from "lucide-react";

export default function FocusClub() {
  const freeBenefits = [
    { icon: Play, text: "1 curso básico por ano", available: true },
    { icon: Layers, text: "1 sistema Notion por ano", available: true },
    { icon: BookOpen, text: "1 playbook por mês (apenas mês atual)", available: true },
    { icon: MessageSquare, text: "Acesso somente leitura à comunidade", available: true },
    { icon: Users, text: "Suporte via comunidade", available: true },
    { icon: Lock, text: "Conteúdo exclusivo PRO", available: false },
    { icon: Crown, text: "Consultoria e mentoria", available: false },
    { icon: Zap, text: "Atualizações prioritárias", available: false },
  ];

  const proBenefits = [
    { icon: Play, text: "Todos os cursos e aulas (4-6 novas/mês)", highlight: true },
    { icon: Layers, text: "Todos os sistemas Notion (6 novos/ano)", highlight: true },
    { icon: BookOpen, text: "Biblioteca completa de playbooks", highlight: true },
    { icon: MessageSquare, text: "Participação ativa na comunidade", highlight: true },
    { icon: Crown, text: "Sessões mensais de mentoria ao vivo", highlight: true },
    { icon: Sparkles, text: "Acesso antecipado a novos lançamentos", highlight: true },
    { icon: Users, text: "Suporte prioritário", highlight: true },
    { icon: TrendingUp, text: "Certificados de conclusão", highlight: true },
  ];

  const contentPreview = [
    {
      category: "Cursos",
      items: [
        "Notion para Gestão Empresarial Completa",
        "CRM Inteligente: Da Prospecção ao Pós-Venda",
        "Controle Financeiro que Funciona",
        "Gestão de RH e Equipes"
      ]
    },
    {
      category: "Sistemas Notion",
      items: [
        "Hub Empresarial PRO (sistema central)",
        "Sistema de Projetos com GTD",
        "Pipeline de Vendas Automatizado",
        "Central de Documentos e Processos"
      ]
    },
    {
      category: "Playbooks",
      items: [
        "Como Organizar seu Ano em 1 Semana",
        "Planejamento Estratégico para PMEs",
        "Checklists de Processos Recorrentes",
        "Guia de Mapeamento de Workflows"
      ]
    }
  ];

  const faqs = [
    {
      q: "Qual a diferença entre FREE e PRO?",
      a: "O plano FREE dá acesso a conteúdo introdutório (1 curso/ano, 1 sistema/ano, 1 playbook/mês). O PRO libera todo o ecossistema: 4-6 aulas novas por mês, 6 sistemas por ano, biblioteca completa de playbooks, comunidade ativa e mentorias ao vivo."
    },
    {
      q: "Tem período de teste?",
      a: "Sim! Oferecemos 7 dias de trial gratuito no plano PRO para você explorar todo o conteúdo antes de decidir."
    },
    {
      q: "Como funciona o acesso aos sistemas Notion?",
      a: "Você recebe links para duplicar os templates diretamente no seu workspace Notion. Todos os sistemas incluem vídeos explicativos e documentação completa."
    },
    {
      q: "Posso cancelar a qualquer momento?",
      a: "Sim, sem multas ou burocracias. Você mantém acesso até o final do período pago."
    },
    {
      q: "Vou receber certificado?",
      a: "Assinantes PRO recebem certificados de conclusão para cada curso finalizado."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Focus Club - Comunidade de Produtividade e Sistemas Notion</title>
        <meta 
          name="description" 
          content="Junte-se ao Focus Club: aulas práticas, sistemas Notion prontos, playbooks mensais e comunidade ativa. Plano FREE ou PRO com trial de 7 dias." 
        />
        <link rel="canonical" href="https://www.focusgestao.com/focus-club" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Focus Club - Produtividade na Prática" />
        <meta property="og:description" content="Aulas, sistemas Notion, playbooks e comunidade para transformar sua gestão." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.focusgestao.com/focus-club" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Focus Club - Produtividade na Prática" />
        <meta name="twitter:description" content="Aulas, sistemas Notion, playbooks e comunidade para transformar sua gestão." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/hub-empresarial-og.jpg')] bg-cover bg-center opacity-5"></div>
          
          <div className="container max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-base px-4 py-2" variant="secondary">
                <Sparkles className="w-4 h-4 mr-2" />
                Em breve - Entre na lista de espera
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Focus Club
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                A comunidade de produtividade que ensina você a organizar de verdade. 
                <span className="text-foreground font-semibold"> Aulas práticas + Sistemas Notion + Playbooks + Comunidade ativa.</span>
              </p>
            </div>

            {/* Stats Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { number: "50+", label: "Aulas Práticas" },
                { number: "15+", label: "Sistemas Notion" },
                { number: "24+", label: "Playbooks" },
                { number: "500+", label: "Membros (meta)" }
              ].map((stat, i) => (
                <Card key={i} className="text-center p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Escolha Seu Plano</h2>
              <p className="text-xl text-muted-foreground">
                Comece grátis ou acesse tudo com o PRO
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* FREE Plan */}
              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-3xl">FREE</CardTitle>
                  <CardDescription className="text-lg">
                    Para experimentar e conhecer o método
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">R$ 0</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {freeBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {benefit.available ? (
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={benefit.available ? 'text-foreground' : 'text-muted-foreground line-through'}>
                          {benefit.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full" size="lg" onClick={() => window.location.href = '/auth/signup'}>
                    Criar Conta Gratuita
                  </Button>
                </CardContent>
              </Card>

              {/* PRO Plan */}
              <Card className="relative border-primary shadow-lg shadow-primary/20">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-primary to-primary/80">
                    ⭐ Mais Popular
                  </Badge>
                </div>
                
                <CardHeader className="pt-8">
                  <CardTitle className="text-3xl flex items-center gap-2">
                    <Crown className="w-8 h-8 text-primary" />
                    PRO
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Acesso completo ao ecossistema Focus
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">R$ 97</span>
                    <span className="text-muted-foreground">/mês</span>
                    <div className="text-sm text-muted-foreground mt-2">
                      ou R$ 970/ano (2 meses grátis)
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">7 dias de trial gratuito</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {proBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className={benefit.highlight ? 'text-foreground font-medium' : 'text-foreground'}>
                          {benefit.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" size="lg" onClick={() => window.location.href = '/auth/signup'}>
                    Começar Trial Gratuito
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Content Preview */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">O Que Você Vai Encontrar</h2>
              <p className="text-xl text-muted-foreground">
                Conteúdo prático e aplicável desde o primeiro dia
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contentPreview.map((section, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {i === 0 && <Play className="w-5 h-5 text-primary" />}
                      {i === 1 && <Layers className="w-5 h-5 text-primary" />}
                      {i === 2 && <BookOpen className="w-5 h-5 text-primary" />}
                      {section.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist Form Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container max-w-2xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-2">
                  Entre na Lista de Espera
                </CardTitle>
                <CardDescription className="text-base">
                  Seja um dos primeiros a ter acesso quando lançarmos. 
                  <span className="text-primary font-semibold"> Membros da waitlist ganham 30% de desconto no primeiro mês.</span>
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <WaitlistForm source="landing" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Pronto para Transformar Sua Gestão?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Junte-se a centenas de profissionais que já organizaram suas vidas e negócios com o Focus
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" onClick={() => window.location.href = '/auth/signup'}>
                Entrar na Lista de Espera
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                onClick={() => window.open('https://wa.me/5511916742443?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Focus%20Club', '_blank')}
              >
                Falar com a Equipe
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
