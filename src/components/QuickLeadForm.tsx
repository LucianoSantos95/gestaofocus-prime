import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";

const QuickLeadForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", problem: "" });

  const fields = [
    { key: "name" as const, label: "Seu nome", placeholder: "Ex: João Silva", type: "text" },
    { key: "phone" as const, label: "WhatsApp", placeholder: "(11) 99999-9999", type: "tel" },
    { key: "problem" as const, label: "Qual seu maior problema?", placeholder: "Ex: Não consigo controlar projetos", type: "text" },
  ];

  const progress = ((step + 1) / fields.length) * 100;

  const handleNext = async () => {
    const current = fields[step];
    if (!form[current.key].trim()) {
      toast({ title: "Preencha o campo antes de continuar", variant: "destructive" });
      return;
    }

    if (step < fields.length - 1) {
      setStep(step + 1);
      return;
    }

    // Submit
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_messages").insert({
        name: form.name.trim(),
        email: `${form.phone.replace(/\D/g, "")}@whatsapp.lead`,
        phone: form.phone.trim(),
        message: form.problem.trim(),
      });
      if (error) throw error;
      trackEvent("lead_form_submit", { event_category: "conversion", event_label: "quick_lead_form" });
      setSubmitted(true);
    } catch {
      toast({ title: "Erro ao enviar. Tente novamente.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center animate-fade-in">
        <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-foreground mb-2">Recebemos seu contato!</h3>
        <p className="text-foreground-muted text-sm">Um especialista entrará em contato pelo WhatsApp em até 2 horas.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-card-border bg-background-elevated p-6 md:p-8">
      <div className="mb-4">
        <div className="flex justify-between text-xs text-foreground-muted mb-2">
          <span>Passo {step + 1} de {fields.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <label className="block text-sm font-medium text-foreground mb-2">
        {fields[step].label}
      </label>
      <Input
        type={fields[step].type}
        value={form[fields[step].key]}
        onChange={(e) => setForm({ ...form, [fields[step].key]: e.target.value })}
        placeholder={fields[step].placeholder}
        className="mb-4 h-12 text-base"
        maxLength={200}
        onKeyDown={(e) => e.key === "Enter" && handleNext()}
        autoFocus
      />
      <Button
        onClick={handleNext}
        disabled={isSubmitting}
        className="w-full h-12 text-base font-semibold btn-cta-red text-white rounded-xl"
      >
        {isSubmitting ? "Enviando..." : step < fields.length - 1 ? "Próximo →" : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Falar com Especialista
          </>
        )}
      </Button>
    </div>
  );
};

export default QuickLeadForm;
