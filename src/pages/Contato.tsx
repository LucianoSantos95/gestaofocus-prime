import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";

const Contato = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Preencha todos os campos", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: "Mensagem enviada!", description: "Retornaremos em até 24 horas." });
    setForm({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <SEOHead
        title="Contato — Focus Gestão Inteligente"
        description="Entre em contato com a Focus Gestão Inteligente. Tire suas dúvidas ou solicite um orçamento para seu projeto."
        canonical="/contato"
      />

      <section className="py-20 md:py-28">
        <div className="container-focus max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Fale Conosco
          </h1>
          <p className="text-foreground-muted text-center mb-12 text-lg">
            Tem uma dúvida ou quer saber como podemos ajudar seu negócio? Preencha o formulário abaixo.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nome completo
              </label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Seu nome"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Mensagem
              </label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Como podemos ajudar?"
                rows={5}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Enviar mensagem
                </>
              )}
            </Button>
          </form>

          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-background-elevated border border-card-border">
              <Mail className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm">E-mail</p>
                <a href="mailto:contato@focusinteligente.com.br" className="text-foreground-muted text-sm hover:text-primary transition-colors">
                  contato@focusinteligente.com.br
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-background-elevated border border-card-border">
              <MessageSquare className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm">Atendimento</p>
                <p className="text-foreground-muted text-sm">Online — Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
