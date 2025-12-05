import { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Database, 
  ArrowRight, 
  CheckCircle, 
  X,
  MessageCircle,
  ExternalLink,
  ClipboardList
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { trackEvent } from "@/lib/analytics";

const SistemasNotion = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessType: "",
    usesNotion: "",
    mainObjective: "",
    lookingFor: "",
    investmentRange: "",
    startTimeline: "",
    additionalDetails: ""
  });

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone || 
        !formData.businessType || !formData.usesNotion || !formData.mainObjective ||
        !formData.lookingFor || !formData.investmentRange || !formData.startTimeline) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("consultation_leads").insert({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        business_type: formData.businessType,
        uses_notion: formData.usesNotion,
        main_objective: formData.mainObjective,
        looking_for: formData.lookingFor,
        investment_range: formData.investmentRange,
        start_timeline: formData.startTimeline,
        additional_details: formData.additionalDetails
      });

      if (error) throw error;

      trackEvent("consultation_form_submit", {
        business_type: formData.businessType,
        investment_range: formData.investmentRange
      });

      setFormSubmitted(true);
      toast.success("Formulário enviado com sucesso!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const comparisonData = [
    { solo: "Sem padronização", focus: "Sistema estruturado para seu fluxo real" },
    { solo: "Sem automações", focus: "Workflows automáticos entre áreas" },
    { solo: "Retrabalho constante", focus: "Redução de horas e erros processuais" },
    { solo: "Aprendizado demorado", focus: "Sistema pronto + suporte + treinamento" },
    { solo: "Depende de tentativa e erro", focus: "Implementação assertiva e com experiência" }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Consultoria Notion Empresarial | Sistemas Personalizados - Focus</title>
        <meta name="description" content="Criamos sistemas empresariais Notion sob medida: dashboards em tempo real, automações inteligentes, controle centralizado de processos. Solicite diagnóstico gratuito." />
        <meta name="keywords" content="consultoria notion, sistemas notion personalizados, automação notion, dashboards notion, notion para empresas, gestão processos notion" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://focusinteligente.com.br/sistemas-notion" />
        <meta property="og:title" content="Consultoria Notion Empresarial - Focus" />
        <meta property="og:description" content="Sistemas empresariais Notion sob medida com automações, dashboards e integração completa para sua empresa." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://focusinteligente.com.br/sistemas-notion" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Consultoria em Sistemas Notion",
            "provider": {
              "@type": "Organization",
              "name": "Focus Gestão Empresarial",
              "url": "https://focusinteligente.com.br"
            },
            "description": "Desenvolvimento de sistemas empresariais personalizados no Notion",
            "areaServed": "BR"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="relative z-10 container-focus">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
              <Database className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-foreground-muted">
                Consultoria Notion Personalizada
              </span>
            </div>
            
            <h1 className="hero-title mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Processos soltos? Centralize tudo em um sistema sob medida.
            </h1>
            
            <p className="hero-subtitle mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
              Criamos sistemas empresariais em Notion que organizam operações, eliminam retrabalho e entregam relatórios estratégicos para decisões mais rápidas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <Button 
                className="btn-hero group"
                onClick={scrollToForm}
              >
                Quero um sistema feito para minha empresa
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                className="btn-secondary"
                onClick={() => window.open("https://www.notion.com/pt/@focusgestao", "_blank")}
              >
                Ver portfólio de sistemas
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Objection Breaking Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Por que contratar a Focus ao invés de tentar montar sozinho?
              </h2>
            </div>

            <div className="overflow-x-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 bg-red-500/10 border border-border rounded-tl-lg">
                      <span className="flex items-center gap-2 text-red-400 font-semibold">
                        <X className="w-5 h-5" />
                        Montar sozinho
                      </span>
                    </th>
                    <th className="text-left p-4 bg-primary/10 border border-border rounded-tr-lg">
                      <span className="flex items-center gap-2 text-primary font-semibold">
                        <CheckCircle className="w-5 h-5" />
                        Com a Focus
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index}>
                      <td className="p-4 border border-border text-foreground-muted bg-card/30">
                        {row.solo}
                      </td>
                      <td className="p-4 border border-border text-foreground bg-card/50">
                        {row.focus}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Button 
                variant="outline"
                className="btn-secondary"
                onClick={scrollToForm}
              >
                Quero evitar retrabalho
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-background to-primary/10">
        <div className="container-focus">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Pronto para transformar sua operação em Notion?
            </h2>
            <Button 
              className="btn-hero group"
              onClick={scrollToForm}
            >
              Solicitar diagnóstico gratuito
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section ref={formRef} className="section-padding bg-background">
        <div className="container-focus">
          <div className="max-w-3xl mx-auto">
            {!formSubmitted ? (
              <Card className="p-8 md:p-12 border-primary/20 bg-card/50 backdrop-blur-sm animate-fade-in">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <ClipboardList className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                    📋 Diagnóstico para criação de Sistema Personalizado
                  </h2>
                  <p className="text-foreground-muted">
                    Responda e criaremos a solução ideal para sua empresa.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nome completo *</Label>
                      <Input
                        id="fullName"
                        placeholder="Seu nome"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">WhatsApp/Telefone *</Label>
                      <Input
                        id="phone"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  {/* Business Type */}
                  <div className="space-y-3">
                    <Label>Qual tipo de negócio? *</Label>
                    <RadioGroup
                      value={formData.businessType}
                      onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                      className="grid grid-cols-2 md:grid-cols-4 gap-3"
                    >
                      {["Freelance", "Empresa pequena", "Média empresa", "Outro"].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`business-${option}`} />
                          <Label htmlFor={`business-${option}`} className="text-sm cursor-pointer">{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Uses Notion */}
                  <div className="space-y-3">
                    <Label>Você já usa Notion? *</Label>
                    <RadioGroup
                      value={formData.usesNotion}
                      onValueChange={(value) => setFormData({ ...formData, usesNotion: value })}
                      className="grid grid-cols-1 md:grid-cols-3 gap-3"
                    >
                      {["Sim, diariamente", "Já testei mas não uso sempre", "Ainda estou conhecendo"].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`notion-${option}`} />
                          <Label htmlFor={`notion-${option}`} className="text-sm cursor-pointer">{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Main Objective */}
                  <div className="space-y-3">
                    <Label>Qual seu principal objetivo com o sistema? *</Label>
                    <RadioGroup
                      value={formData.mainObjective}
                      onValueChange={(value) => setFormData({ ...formData, mainObjective: value })}
                      className="grid grid-cols-2 md:grid-cols-3 gap-3"
                    >
                      {["Produtividade Pessoal", "Gestão de Projetos", "Controle Financeiro", "Sistema Empresarial Completo", "Outro"].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`objective-${option}`} />
                          <Label htmlFor={`objective-${option}`} className="text-sm cursor-pointer">{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Looking For */}
                  <div className="space-y-3">
                    <Label>Você está buscando: *</Label>
                    <RadioGroup
                      value={formData.lookingFor}
                      onValueChange={(value) => setFormData({ ...formData, lookingFor: value })}
                      className="grid grid-cols-1 md:grid-cols-3 gap-3"
                    >
                      {["Algo gratuito para começar", "Um template pronto e acessível", "Um sistema personalizado sob medida"].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`looking-${option}`} />
                          <Label htmlFor={`looking-${option}`} className="text-sm cursor-pointer">{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Investment Range */}
                  <div className="space-y-3">
                    <Label>Qual faixa de investimento pretende? *</Label>
                    <RadioGroup
                      value={formData.investmentRange}
                      onValueChange={(value) => setFormData({ ...formData, investmentRange: value })}
                      className="grid grid-cols-2 md:grid-cols-4 gap-3"
                    >
                      {["Até R$500", "R$500 a R$1.500", "R$1.500 a R$3.000", "Acima de R$3.000"].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`investment-${option}`} />
                          <Label htmlFor={`investment-${option}`} className="text-sm cursor-pointer">{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Start Timeline */}
                  <div className="space-y-3">
                    <Label>Quando pretende iniciar? *</Label>
                    <RadioGroup
                      value={formData.startTimeline}
                      onValueChange={(value) => setFormData({ ...formData, startTimeline: value })}
                      className="grid grid-cols-2 md:grid-cols-4 gap-3"
                    >
                      {["Imediatamente", "Em até 30 dias", "1–3 meses", "Só explorando por enquanto"].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`timeline-${option}`} />
                          <Label htmlFor={`timeline-${option}`} className="text-sm cursor-pointer">{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Additional Details */}
                  <div className="space-y-2">
                    <Label htmlFor="additionalDetails">Detalhe algo específico que deseja resolver (opcional)</Label>
                    <Textarea
                      id="additionalDetails"
                      placeholder="Conte-nos mais sobre seu desafio ou necessidade..."
                      value={formData.additionalDetails}
                      onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-hero w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar diagnóstico"}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </form>
              </Card>
            ) : (
              <Card className="p-8 md:p-12 border-primary/20 bg-card/50 backdrop-blur-sm text-center animate-scale-in">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  🎉 Formulário enviado com sucesso!
                </h2>
                <p className="text-foreground-muted mb-8 max-w-md mx-auto">
                  Entraremos em contato em breve com diagnóstico personalizado para sua operação.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button 
                    className="btn-hero group"
                    onClick={() => window.open("https://wa.me/5511999999999?text=Ol%C3%A1!%20Enviei%20o%20formul%C3%A1rio%20de%20diagn%C3%B3stico%20e%20gostaria%20de%20agendar%20uma%20conversa.", "_blank")}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Agendar diagnóstico pelo WhatsApp
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="btn-secondary"
                    onClick={() => window.open("https://www.notion.com/pt/@focusgestao", "_blank")}
                  >
                    Ver portfólio de sistemas
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SistemasNotion;
