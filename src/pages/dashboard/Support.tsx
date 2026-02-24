import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Mail, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Como acompanho o andamento do meu projeto?",
    a: "Acesse a seção 'Meus Projetos' no painel. Lá você verá a barra de progresso, status e data de entrega estimada.",
  },
  {
    q: "Preciso pagar mensalidade pelo sistema?",
    a: "Apenas a hospedagem do sistema (valor baixo, direto ao provedor). O desenvolvimento é pagamento único.",
  },
  {
    q: "E se eu precisar de alterações depois da entrega?",
    a: "O software é seu. Oferecemos pacotes de suporte ou horas avulsas para evoluir o sistema quando sua empresa crescer.",
  },
  {
    q: "Qual o horário de atendimento?",
    a: "Nosso suporte funciona de segunda a sexta, das 9h às 18h (horário de Brasília).",
  },
];

export default function Support() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 max-w-3xl space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Suporte</h1>
          <p className="text-foreground-muted mt-1">Como podemos ajudar?</p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Card className="service-card">
            <MessageCircle className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
            <p className="text-foreground-muted text-sm mb-4">Atendimento rápido pelo WhatsApp</p>
            <Button className="btn-hero w-full" asChild>
              <a
                href="https://wa.me/5511916742443?text=Ol%C3%A1%2C%20preciso%20de%20suporte."
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            </Button>
          </Card>

          <Card className="service-card">
            <Mail className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
            <p className="text-foreground-muted text-sm mb-4">Envie uma mensagem detalhada</p>
            <Button className="btn-secondary w-full" asChild>
              <a href="mailto:contato@focusinteligente.com.br">
                Enviar E-mail
              </a>
            </Button>
          </Card>
        </div>

        {/* FAQ */}
        <div>
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
