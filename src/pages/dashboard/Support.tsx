import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

const supportSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(2000),
});

export default function Support() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = supportSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast.error("Você precisa estar logado.");
      setSending(false);
      return;
    }

    const { error } = await supabase.from("support_tickets").insert({
      user_id: user.id,
      name: result.data.name,
      email: result.data.email,
      message: result.data.message,
    });

    setSending(false);
    if (error) {
      toast.error("Erro ao enviar. Tente novamente.");
      return;
    }

    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Suporte</h1>
          <p className="text-foreground-muted mt-1">Como podemos ajudar?</p>
        </div>

        {/* Support Form */}
        <Card className="p-6 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Mail className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Envie sua mensagem</h2>
          </div>

          {sent ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <CheckCircle2 className="w-12 h-12 text-primary" />
              <p className="text-foreground font-medium">Mensagem enviada com sucesso!</p>
              <p className="text-foreground-muted text-sm">Retornaremos em breve.</p>
              <Button variant="outline" onClick={() => setSent(false)} className="mt-2">
                Enviar outra mensagem
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Nome *</label>
                <Input
                  placeholder="Seu nome completo"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">E-mail *</label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Mensagem *</label>
                <Textarea
                  placeholder="Descreva como podemos ajudar..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={2000}
                  rows={5}
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" className="btn-hero w-full" disabled={sending}>
                {sending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                Enviar Mensagem
              </Button>
            </form>
          )}
        </Card>

        {/* FAQ */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Perguntas Frequentes</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-card-border rounded-xl px-5 bg-background-elevated">
                <AccordionTrigger className="text-foreground hover:no-underline py-4 text-sm">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground-muted pb-4 text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </DashboardLayout>
  );
}
