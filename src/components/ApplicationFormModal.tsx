import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { trackEvent } from "@/lib/analytics";
import { z } from "zod";
import { ArrowRight, ArrowLeft, CheckCircle, Loader2, User, Phone, Mail, Building2, MessageSquareText, Wallet, Sparkles, Zap } from "lucide-react";

const formSchema = z.object({
  full_name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().min(10, "WhatsApp inválido").max(20),
  company_name: z.string().trim().min(2, "Nome da empresa deve ter pelo menos 2 caracteres").max(100),
  challenge: z.string().trim().min(10, "Descreva com mais detalhes (mínimo 10 caracteres)").max(1000),
  investment_range: z.string().min(1, "Selecione uma opção"),
});

interface ApplicationFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
}

const investmentOptions = [
  "Até R$ 3.000",
  "R$ 3.000 a R$ 7.000",
  "Acima de R$ 7.000",
  "Outro",
];

const stepConfig = [
  { icon: User, title: "Qual o seu nome?", subtitle: "Vamos começar sua jornada!", placeholder: "Seu nome completo" },
  { icon: Mail, title: "Qual seu e-mail?", subtitle: "Para enviarmos o link do seu protótipo", placeholder: "seu@email.com" },
  { icon: Phone, title: "Seu WhatsApp?", subtitle: "Para enviarmos o link do seu protótipo", placeholder: "(11) 99999-9999" },
  { icon: Building2, title: "Nome da empresa/projeto?", subtitle: "Nos ajuda a entender seu contexto", placeholder: "Ex: Loja do João, Projeto Alpha" },
  { icon: MessageSquareText, title: "Qual o principal desafio?", subtitle: "Descreva o problema de gestão que quer resolver", placeholder: "Ex: Controle de estoque integrado, CRM de vendas, Dashboard financeiro automático" },
  { icon: Wallet, title: "Estimativa de investimento?", subtitle: "Isso nos ajuda a personalizar sua proposta", placeholder: "" },
];

export default function ApplicationFormModal({ open, onOpenChange, source = "direct" }: ApplicationFormModalProps) {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [customInvestment, setCustomInvestment] = useState("");
  const [animating, setAnimating] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    company_name: "",
    challenge: "",
    investment_range: "",
  });

  const totalSteps = 6;
  const progress = ((step + 1) / totalSteps) * 100;
  const CurrentIcon = stepConfig[step].icon;

  // Trigger entrance animation
  useEffect(() => {
    if (open) {
      setAnimating(true);
      const timer = setTimeout(() => setAnimating(false), 600);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
      if (step < totalSteps - 1) setStep(step + 1);
      setTimeout(() => setAnimating(false), 300);
    }, 150);
  };

  const handleBack = () => {
    setAnimating(true);
    setTimeout(() => {
      if (step > 0) setStep(step - 1);
      setTimeout(() => setAnimating(false), 300);
    }, 150);
  };

  const isStepValid = () => {
    switch (step) {
      case 0: return formData.full_name.trim().length >= 2;
      case 1: return z.string().email().safeParse(formData.email.trim()).success;
      case 2: return formData.phone.trim().length >= 10;
      case 3: return formData.company_name.trim().length >= 2;
      case 4: return formData.challenge.trim().length >= 10;
      case 5: {
        if (formData.investment_range === "Outro") return customInvestment.trim().length > 0;
        return formData.investment_range.length > 0;
      }
      default: return false;
    }
  };

  const handleSubmit = async () => {
    const finalInvestment = formData.investment_range === "Outro"
      ? `Outro: ${customInvestment.trim()}`
      : formData.investment_range;

    try {
      formSchema.parse({ ...formData, investment_range: finalInvestment });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
        return;
      }
    }

    setLoading(true);

    const { error } = await supabase.from("consultation_leads").insert({
      full_name: formData.full_name.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      business_type: formData.company_name.trim(),
      additional_details: formData.challenge.trim(),
      investment_range: finalInvestment,
      uses_notion: "a_definir",
      main_objective: "software_sob_medida",
      looking_for: source,
      start_timeline: "a_definir",
    });

    if (error) {
      toast.error("Erro ao enviar. Tente novamente.");
      setLoading(false);
      return;
    }

    trackEvent("form_submit", {
      event_category: "conversion",
      event_label: `application_form_${source}`,
    });

    setLoading(false);
    setSuccess(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(0);
      setSuccess(false);
      setCustomInvestment("");
      setFormData({ full_name: "", email: "", phone: "", company_name: "", challenge: "", investment_range: "" });
    }, 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && isStepValid()) {
      if (step < totalSteps - 1) handleNext();
      else handleSubmit();
    }
  };

  if (success) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-lg border-0 bg-transparent shadow-none p-0 overflow-visible">
          <div className="relative">
            {/* Success glow background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-emerald-500/10 to-green-500/20 rounded-3xl blur-2xl animate-pulse" />
            
            <div className="relative bg-card/90 backdrop-blur-2xl border border-green-500/20 rounded-3xl shadow-[0_0_80px_rgba(34,197,94,0.15)] p-8">
              <div className="text-center animate-scale-in">
                {/* Animated success icon */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full blur-lg" />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-500/20 flex items-center justify-center border border-green-400/30">
                    <CheckCircle className="w-12 h-12 text-green-400" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Recebemos sua aplicação! 🎉
                </h3>
                <p className="text-foreground-muted mb-8 leading-relaxed">
                  Nosso time vai analisar seu desafio e enviar o{" "}
                  <strong className="text-foreground bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    protótipo visual em até 24h
                  </strong>{" "}
                  pelo WhatsApp e e-mail.
                </p>
                
                <div className="flex flex-col gap-3">
                  <Button asChild className="btn-hero py-6 text-base rounded-2xl">
                    <a
                      href="https://wa.me/5511916742443?text=Ol%C3%A1%2C%20acabei%20de%20enviar%20minha%20aplica%C3%A7%C3%A3o%20pelo%20site."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Zap className="w-5 h-5 mr-2" />
                      Falar no WhatsApp agora
                    </a>
                  </Button>
                  <Button variant="ghost" onClick={handleClose} className="text-foreground-muted">
                    Fechar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg border-0 bg-transparent shadow-none p-0 overflow-visible">
        <div className="relative">
          {/* Outer glow effect */}
          <div className="absolute -inset-3 bg-gradient-to-r from-primary/30 via-primary-glow/20 to-primary/30 rounded-3xl blur-2xl opacity-60 animate-pulse" style={{ animationDuration: '3s' }} />
          
          {/* Floating particles */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/10 rounded-full blur-xl animate-bounce" style={{ animationDuration: '4s' }} />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary-glow/15 rounded-full blur-lg animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }} />
          
          {/* Main card */}
          <div className="relative bg-card/90 backdrop-blur-2xl border border-primary/10 rounded-3xl shadow-[0_0_60px_rgba(59,130,246,0.1)] overflow-hidden">
            {/* Animated progress bar */}
            <div className="h-1.5 bg-card-border/10 relative overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary via-primary-glow to-primary transition-all duration-700 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" 
                     style={{ animation: 'shimmer 2s infinite', backgroundSize: '200% 100%' }} />
              </div>
            </div>

            {/* Step indicator dots */}
            <div className="flex justify-center gap-2 pt-6 pb-2">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === step
                      ? "w-8 bg-gradient-to-r from-primary to-primary-glow shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      : i < step
                      ? "w-1.5 bg-primary/50"
                      : "w-1.5 bg-card-border/30"
                  }`}
                />
              ))}
            </div>

            <div className="px-7 pt-4 pb-8">
              {/* Step icon + titles */}
              <div className="text-center mb-8">
                <div className="relative w-16 h-16 mx-auto mb-5">
                  {/* Icon glow ring */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl blur-lg" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-primary-glow/10 flex items-center justify-center border border-primary/20 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                    <CurrentIcon className="w-7 h-7 text-primary" />
                  </div>
                  {/* Sparkle accent */}
                  <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-primary-glow/60 animate-pulse" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-1.5">
                  {stepConfig[step].title}
                </h3>
                <p className="text-foreground-muted text-sm">{stepConfig[step].subtitle}</p>
              </div>

              {/* Step content with transition */}
              <div
                className={`min-h-[140px] transition-all duration-300 ${
                  animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                }`}
                key={step}
                onKeyDown={handleKeyDown}
              >
                {step === 0 && (
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity blur-sm" />
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted group-focus-within:text-primary transition-colors" />
                      <Input
                        autoFocus
                        placeholder={stepConfig[0].placeholder}
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                        maxLength={100}
                        className="pl-12 py-5 text-base rounded-2xl bg-background/80 border-card-border/20 text-foreground focus:border-primary/40 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity blur-sm" />
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted group-focus-within:text-primary transition-colors" />
                      <Input
                        autoFocus
                        type="email"
                        placeholder={stepConfig[1].placeholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        maxLength={255}
                        className="pl-12 py-5 text-base rounded-2xl bg-background/80 border-card-border/20 text-foreground focus:border-primary/40 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity blur-sm" />
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted group-focus-within:text-primary transition-colors" />
                      <Input
                        autoFocus
                        placeholder={stepConfig[2].placeholder}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        maxLength={20}
                        className="pl-12 py-5 text-base rounded-2xl bg-background/80 border-card-border/20 text-foreground focus:border-primary/40 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity blur-sm" />
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted group-focus-within:text-primary transition-colors" />
                      <Input
                        autoFocus
                        placeholder={stepConfig[3].placeholder}
                        value={formData.company_name}
                        onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                        maxLength={100}
                        className="pl-12 py-5 text-base rounded-2xl bg-background/80 border-card-border/20 text-foreground focus:border-primary/40 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity blur-sm" />
                    <Textarea
                      autoFocus
                      placeholder={stepConfig[4].placeholder}
                      value={formData.challenge}
                      onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                      maxLength={1000}
                      rows={4}
                      className="relative text-base rounded-2xl bg-background/80 border-card-border/20 text-foreground focus:border-primary/40 focus:ring-primary/20 resize-none transition-all"
                    />
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-2.5">
                    {investmentOptions.map((option, i) => (
                      <button
                        key={option}
                        onClick={() => setFormData({ ...formData, investment_range: option })}
                        className={`w-full text-left px-5 py-4 rounded-2xl border transition-all text-sm font-medium group relative overflow-hidden ${
                          formData.investment_range === option
                            ? "border-primary/40 bg-primary/10 text-foreground shadow-[0_0_25px_rgba(59,130,246,0.15)] scale-[1.02]"
                            : "border-card-border/20 bg-background/60 text-foreground-muted hover:border-primary/20 hover:bg-primary/5 hover:scale-[1.01]"
                        }`}
                        style={{ animationDelay: `${i * 80}ms` }}
                      >
                        {formData.investment_range === option && (
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-glow/5" />
                        )}
                        <span className="relative flex items-center gap-3">
                          <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                            formData.investment_range === option
                              ? "border-primary bg-primary/20"
                              : "border-card-border/40"
                          }`}>
                            {formData.investment_range === option && (
                              <span className="w-2 h-2 rounded-full bg-primary" />
                            )}
                          </span>
                          {option}
                        </span>
                      </button>
                    ))}
                    {formData.investment_range === "Outro" && (
                      <div className="relative group mt-3">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity blur-sm" />
                        <Input
                          autoFocus
                          placeholder="Digite o valor estimado"
                          value={customInvestment}
                          onChange={(e) => setCustomInvestment(e.target.value)}
                          maxLength={50}
                          className="relative py-5 text-base rounded-2xl bg-background/80 border-card-border/20 text-foreground focus:border-primary/40 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                {step > 0 ? (
                  <Button variant="ghost" onClick={handleBack} className="text-foreground-muted hover:text-foreground">
                    <ArrowLeft className="w-4 h-4 mr-1" /> Voltar
                  </Button>
                ) : (
                  <div />
                )}

                {step < totalSteps - 1 ? (
                  <Button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="btn-hero py-5 px-6 rounded-2xl text-base relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center">
                      Continuar <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!isStepValid() || loading}
                    className="btn-hero py-5 px-6 rounded-2xl text-base relative overflow-hidden group"
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <Loader2 className="w-4 h-4 animate-spin mr-2" /> Enviando...
                      </span>
                    ) : (
                      <span className="relative z-10 flex items-center">
                        <Sparkles className="w-4 h-4 mr-2" /> Enviar Aplicação
                      </span>
                    )}
                  </Button>
                )}
              </div>

              {/* Step counter */}
              <p className="text-center text-xs text-foreground-muted mt-4">
                Passo {step + 1} de {totalSteps}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
