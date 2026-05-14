import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

// TODO: ajuste seu WhatsApp e valor abaixo
const WHATSAPP_NUMBER = "5511999999999";
const PRICE_LABEL = "Investimento entre R$ 500 e R$ 1.200";

const leadSchema = z.object({
  full_name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
});

interface Props {
  profile?: string;
  score?: number;
  businessName?: string | null;
  businessDescription?: string;
  simulationId?: string;
}

export default function TalkToProBubble({ profile, score, businessName, businessDescription, simulationId }: Props) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"choice" | "form" | "sent">("choice");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ full_name: "", email: "", phone: "" });

  const waMessage = encodeURIComponent(
    `Olá! Acabei de fazer o Simulador de MVP no Focus.\n\n` +
    `Negócio: ${businessName || "—"}\n` +
    `Perfil: ${profile || "—"} (score ${score ?? "—"}/15)\n` +
    `Quero conversar sobre o acompanhamento na implantação do meu MVP.`,
  );
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message || "Dados inválidos");
      return;
    }
    setSubmitting(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      const { error } = await supabase.from("mvp_consulting_leads").insert({
        user_id: user?.id || null,
        simulation_id: simulationId || null,
        full_name: parsed.data.full_name,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        profile: profile || null,
        score: score ?? null,
        business_description: businessDescription || null,
      });
      if (error) throw error;
      setMode("sent");
    } catch (e: any) {
      toast.error(e?.message || "Erro ao enviar");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            className="mb-3 w-[340px] rounded-2xl border border-card-border bg-background-elevated shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-br from-red-600 to-red-500 p-4 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide opacity-80">Acompanhamento 1:1</p>
                  <h4 className="text-lg font-bold mt-1">Implante seu MVP comigo</h4>
                </div>
                <button onClick={() => setOpen(false)} className="opacity-80 hover:opacity-100">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-3">
              {mode === "choice" && (
                <>
                  <p className="text-sm text-foreground-muted">
                    Acompanhamento direto comigo na execução do seu MVP: escopo, roadmap semanal e ajustes com IA.
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    <li className="flex gap-2 text-foreground-muted"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />Diagnóstico aprofundado</li>
                    <li className="flex gap-2 text-foreground-muted"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />Roadmap semanal comigo</li>
                    <li className="flex gap-2 text-foreground-muted"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />Suporte direto via WhatsApp</li>
                  </ul>
                  <p className="text-xs text-primary font-semibold pt-1">{PRICE_LABEL}</p>
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                      Falar agora no WhatsApp
                    </Button>
                  </a>
                  <button
                    onClick={() => setMode("form")}
                    className="w-full text-xs text-foreground-muted hover:text-foreground underline-offset-2 hover:underline"
                  >
                    Prefere que eu te ligue? Deixar contato
                  </button>
                </>
              )}

              {mode === "form" && (
                <form onSubmit={submitLead} className="space-y-3">
                  <div>
                    <Label className="text-xs">Nome *</Label>
                    <Input value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} maxLength={100} required />
                  </div>
                  <div>
                    <Label className="text-xs">Email *</Label>
                    <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} required />
                  </div>
                  <div>
                    <Label className="text-xs">WhatsApp (opcional)</Label>
                    <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={20} placeholder="(11) 99999-9999" />
                  </div>
                  <div className="flex gap-2">
                    <Button type="button" variant="outline" size="sm" onClick={() => setMode("choice")} className="flex-1">Voltar</Button>
                    <Button type="submit" disabled={submitting} size="sm" className="flex-1 bg-red-500 hover:bg-red-600 text-white">
                      {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Enviar"}
                    </Button>
                  </div>
                </form>
              )}

              {mode === "sent" && (
                <div className="text-center py-4 space-y-2">
                  <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/15 flex items-center justify-center">
                    <Check className="w-6 h-6 text-emerald-500" />
                  </div>
                  <p className="font-semibold text-foreground">Recebido!</p>
                  <p className="text-sm text-foreground-muted">Vou entrar em contato em até 24h.</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        className="group flex items-center gap-2 rounded-full bg-red-500 hover:bg-red-600 text-white px-5 py-3 shadow-2xl shadow-red-500/40 transition-all hover:scale-105"
        style={{ boxShadow: "0 0 0 0 rgba(239,68,68,0.5)" }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <MessageCircle className="w-4 h-4" />
        <span className="font-semibold text-sm">Fale com um profissional</span>
      </button>
    </div>
  );
}
