import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { trackEvent } from "@/lib/analytics";
import { z } from "zod";
import { ArrowRight, ArrowLeft, CheckCircle, Loader2 } from "lucide-react";

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
        <DialogContent className="sm:max-w-md bg-background-elevated border-card-border">
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Aplicação Enviada!</h3>
            <p className="text-foreground-muted mb-6">
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
      <DialogContent className="sm:max-w-md bg-background-elevated border-card-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Aplicar para Consultoria</DialogTitle>
        </DialogHeader>

        <Progress value={progress} className="h-1 mb-6" />

        <div className="min-h-[160px]" onKeyDown={handleKeyDown}>
          {step === 0 && (
            <div className="space-y-4">
              <Label className="text-foreground-muted">Qual é o seu nome?</Label>
              <Input
                autoFocus
                placeholder="Seu nome completo"
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                maxLength={100}
                className="bg-background border-card-border text-foreground"
              />
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <Label className="text-foreground-muted">Seu WhatsApp (com DDD)</Label>
              <Input
                autoFocus
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                maxLength={20}
                className="bg-background border-card-border text-foreground"
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Label className="text-foreground-muted">Seu melhor e-mail</Label>
              <Input
                autoFocus
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                maxLength={255}
                className="bg-background border-card-border text-foreground"
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <Label className="text-foreground-muted">Faixa de investimento pretendida</Label>
              <div className="space-y-2">
                {investmentOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setFormData({ ...formData, investment_range: option })}
                    className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm ${
                      formData.investment_range === option
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-card-border bg-background text-foreground-muted hover:border-primary/30"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between mt-4">
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
      </DialogContent>
    </Dialog>
  );
}
