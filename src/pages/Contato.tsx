import { useState } from "react";
import { Mail, MessageSquare, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { supabase } from "@/integrations/supabase/client";

const Contato = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Preencha todos os campos obrigatórios", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_messages" as any).insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        message: form.message.trim(),
      });
      if (error) throw error;
      toast({ title: "Mensagem enviada!", description: "Retornaremos em até 24 horas." });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({ title: "Erro ao enviar", description: "Tente novamente mais tarde.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Contato — Focus Gestão Inteligente"
        description="Entre em contato com a Focus Gestão Inteligente. Tire suas dúvidas ou solicite um orçamento para seu projeto de gestão."
        canonical="/contato"
        keywords="contato Focus, orçamento sistema gestão, falar com Focus"
      />
      <PageBreadcrumb items={[{ label: "Contato" }]} />

      <section className="py-16 md:py-24">
        <div className="container-focus max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Fale Conosco
          </h1>
          <p className="text-foreground-muted text-center mb-12 text-lg">
            Tem uma dúvida ou quer saber como podemos ajudar seu negócio? Preencha o formulário abaixo.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Nome completo *</label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Seu nome" required maxLength={100} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">E-mail *</label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="seu@email.com" required maxLength={255} />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Telefone / WhatsApp</label>
              <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(11) 99999-9999" maxLength={20} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Mensagem *</label>
              <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Como podemos ajudar?" rows={5} required maxLength={2000} />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : (<><Send className="w-4 h-4 mr-2" />Enviar mensagem</>)}
            </Button>
          </form>

          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-background-elevated border border-card-border">
              <Mail className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm">E-mail</p>
                <a href="mailto:contato@focusinteligente.com.br" className="text-foreground-muted text-sm hover:text-primary transition-colors">contato@focusinteligente.com.br</a>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-background-elevated border border-card-border">
              <Phone className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm">WhatsApp</p>
                <a href="https://wa.me/5511916742443" target="_blank" rel="noopener noreferrer" className="text-foreground-muted text-sm hover:text-primary transition-colors">+55 11 91674-2443</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
