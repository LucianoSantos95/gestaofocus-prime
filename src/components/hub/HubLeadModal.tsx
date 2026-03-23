import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle, MessageCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Digite seu nome").max(100),
  whatsapp: z
    .string()
    .trim()
    .min(10, "WhatsApp inválido")
    .max(20)
    .regex(/^[0-9()\s\-+]+$/, "Apenas números e caracteres válidos"),
});

type LeadForm = z.infer<typeof leadSchema>;

interface HubLeadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ctaOrigin?: string;
}

const getUtmSource = () => {
  try {
    const params = new URLSearchParams(window.location.search);
    return params.get("utm_source") || document.referrer || "direto";
  } catch {
    return "direto";
  }
};

const HubLeadModal = ({ open, onOpenChange, ctaOrigin = "hero" }: HubLeadModalProps) => {
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadForm>({ resolver: zodResolver(leadSchema) });

  const onSubmit = async (data: LeadForm) => {
    setLoading(true);
    try {
      const source = getUtmSource();

      await supabase.from("consultation_leads").insert({
        full_name: data.name,
        phone: data.whatsapp,
        email: `${data.whatsapp.replace(/\D/g, "")}@hub-lead.local`,
        business_type: "Hub Empresarial Lead",
        uses_notion: "N/A",
        main_objective: `Lead capturado via CTA: ${ctaOrigin}`,
        looking_for: "Hub Empresarial",
        investment_range: "A definir",
        start_timeline: "Imediato",
        additional_details: `UTM: ${source}`,
      });

      trackEvent("engagement", {
        event_category: "conversion",
        event_label: `hub_lead_${ctaOrigin}_${source}`,
      });

      setStep("success");
    } catch (err) {
      console.error("Lead capture error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (v: boolean) => {
    if (!v) {
      setTimeout(() => {
        setStep("form");
        reset();
      }, 300);
    }
    onOpenChange(v);
  };

  const whatsappMessage = encodeURIComponent(
    "Olá! Acabei de me cadastrar no Hub Empresarial e gostaria de saber mais."
  );

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-background border-card-border/40">
        {step === "form" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl text-foreground">
                Criar Conta Grátis
              </DialogTitle>
              <DialogDescription className="text-foreground-muted">
                Preencha para liberar seu acesso — leva 30 segundos.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label htmlFor="lead-name" className="text-foreground">
                  Seu nome
                </Label>
                <Input
                  id="lead-name"
                  placeholder="Ex: João Silva"
                  autoFocus
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lead-whatsapp" className="text-foreground">
                  WhatsApp
                </Label>
                <Input
                  id="lead-whatsapp"
                  placeholder="(11) 99999-9999"
                  type="tel"
                  {...register("whatsapp")}
                />
                {errors.whatsapp && (
                  <p className="text-xs text-destructive">{errors.whatsapp.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="btn-hero w-full py-5 text-base animate-glow"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Liberar Acesso Grátis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>

              <p className="text-[10px] text-foreground-muted text-center">
                Sem spam. Seus dados estão seguros.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-4 space-y-5">
            <div className="mx-auto w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">Tudo pronto! 🎉</h3>
              <p className="text-sm text-foreground-muted">
                Agora crie sua conta na plataforma para começar a usar.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="https://app.focusinteligente.com.br/auth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-hero w-full py-5 text-base">
                  Criar Minha Conta Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>

              <a
                href={`https://wa.me/5511999999999?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full py-4 mt-2 border-green-500/30 text-green-500 hover:bg-green-500/10">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Falar no WhatsApp
                </Button>
              </a>
            </div>

            <p className="text-[10px] text-foreground-muted">
              Nosso time pode te ajudar a configurar tudo.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default HubLeadModal;
