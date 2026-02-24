import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { trackEvent } from "@/lib/analytics";
import { z } from "zod";
import { ArrowRight, ArrowLeft, CheckCircle, Loader2, User, Phone, Mail, Wallet } from "lucide-react";

const formSchema = z.object({
  full_name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  phone: z.string().trim().min(10, "WhatsApp inválido").max(20),
  email: z.string().trim().email("Email inválido").max(255),
  investment_range: z.string().min(1, "Selecione uma opção"),
});

interface ApplicationFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
}

const investmentOptions = [
  "Até R$ 3.000",
  "R$ 3.000 — R$ 6.000",
  "R$ 6.000 — R$ 10.000",
  "Acima de R$ 10.000",
  "Quero entender primeiro",
];

const stepConfig = [
  { icon: User, title: "Vamos começar!", subtitle: "Como podemos te chamar?", placeholder: "Seu nome completo" },
  { icon: Phone, title: "Como falar com você?", subtitle: "Seu WhatsApp com DDD", placeholder: "(11) 99999-9999" },
  { icon: Mail, title: "Qual seu email?", subtitle: "Para enviarmos a proposta", placeholder: "seu@email.com" },
  { icon: Wallet, title: "Faixa de investimento?", subtitle: "Isso nos ajuda a personalizar sua proposta", placeholder: "" },
];

export default function ApplicationFormModal({ open, onOpenChange, source = "direct" }: ApplicationFormModalProps) {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    investment_range: "",
  });

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;
  const CurrentIcon = stepConfig[step].icon;

  const handleNext = () => {
    if (step < totalSteps - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const isStepValid = () => {
    switch (step) {
      case 0: return formData.full_name.trim().length >= 2;
      case 1: return formData.phone.trim().length >= 10;
      case 2: return z.string().email().safeParse(formData.email.trim()).success;
      case 3: return formData.investment_range.length > 0;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    try {
      formSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
        return;
      }
    }

    setLoading(true);

    const { error } = await supabase.from("consultation_leads").insert({
      full_name: formData.full_name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim().toLowerCase(),
      investment_range: formData.investment_range,
      business_type: "a_definir",
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
      setFormData({ full_name: "", phone: "", email: "", investment_range: "" });
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
        <DialogContent className="sm:max-w-md bg-card/80 backdrop-blur-xl border-card-border/30 shadow-2xl">
          <div className="text-center py-8 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Aplicação Enviada!</h3>
            <p className="text-foreground-muted mb-8">
              Nossa equipe vai analisar seu projeto e entrar em contato em até 24h pelo WhatsApp.
            </p>
            <div className="flex flex-col gap-3">
              <Button asChild className="btn-hero">
                <a
                  href="https://wa.me/5511916742443?text=Ol%C3%A1%2C%20acabei%20de%20enviar%20minha%20aplica%C3%A7%C3%A3o%20pelo%20site."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp agora
                </a>
              </Button>
              <Button variant="ghost" onClick={handleClose} className="text-foreground-muted">
                Fechar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-card/80 backdrop-blur-xl border-card-border/30 shadow-2xl p-0 overflow-hidden">
        {/* Progress bar */}
        <div className="h-1 bg-card-border/20">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="px-6 pt-6 pb-8">
          {/* Step icon + titles */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <CurrentIcon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">{stepConfig[step].title}</h3>
            <p className="text-foreground-muted text-sm">{stepConfig[step].subtitle}</p>
          </div>

          {/* Step content */}
          <div className="min-h-[140px] animate-fade-in" key={step} onKeyDown={handleKeyDown}>
            {step === 0 && (
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
                <Input
                  autoFocus
                  placeholder={stepConfig[0].placeholder}
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  maxLength={100}
                  className="pl-12 py-4 text-base rounded-2xl bg-background border-card-border/30 text-foreground focus:border-primary/50 focus:ring-primary/20"
                />
              </div>
            )}

            {step === 1 && (
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
                <Input
                  autoFocus
                  placeholder={stepConfig[1].placeholder}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  maxLength={20}
                  className="pl-12 py-4 text-base rounded-2xl bg-background border-card-border/30 text-foreground focus:border-primary/50 focus:ring-primary/20"
                />
              </div>
            )}

            {step === 2 && (
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
                <Input
                  autoFocus
                  type="email"
                  placeholder={stepConfig[2].placeholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  maxLength={255}
                  className="pl-12 py-4 text-base rounded-2xl bg-background border-card-border/30 text-foreground focus:border-primary/50 focus:ring-primary/20"
                />
              </div>
            )}

            {step === 3 && (
              <div className="space-y-2.5">
                {investmentOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setFormData({ ...formData, investment_range: option })}
                    className={`w-full text-left px-5 py-3.5 rounded-2xl border transition-all text-sm font-medium hover:scale-[1.01] ${
                      formData.investment_range === option
                        ? "border-primary/50 bg-primary/10 text-foreground shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                        : "border-card-border/30 bg-background text-foreground-muted hover:border-primary/20"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            {step > 0 ? (
              <Button variant="ghost" onClick={handleBack} className="text-foreground-muted">
                <ArrowLeft className="w-4 h-4 mr-1" /> Voltar
              </Button>
            ) : (
              <div />
            )}

            {step < totalSteps - 1 ? (
              <Button onClick={handleNext} disabled={!isStepValid()} className="btn-hero">
                Continuar <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={!isStepValid() || loading} className="btn-hero">
                {loading ? <Loader2 className="w-4 h-4 animate-spin mr-1" /> : null}
                {loading ? "Enviando..." : "Enviar Aplicação"}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
