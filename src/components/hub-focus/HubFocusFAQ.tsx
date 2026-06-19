import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto custa o Hub Empresarial?",
    answer: "O Plano Plus custa R$ 119/mês e inclui CRM, financeiro, projetos e dashboards. O Plano Pro custa R$ 249/mês e adiciona RH, marketing e automações avançadas. Todos os planos têm garantia de 7 dias.",
  },
  {
    question: "Preciso saber programar?",
    answer: "Não. O Hub Empresarial foi feito para empreendedores e gestores. A interface é visual e intuitiva — basta preencher, clicar e organizar.",
  },
  {
    question: "Funciona no celular?",
    answer: "Sim. A plataforma é totalmente responsiva e funciona em qualquer dispositivo — computador, tablet ou celular.",
  },
  {
    question: "Posso usar com minha equipe?",
    answer: "Sim. Você pode convidar membros da equipe para colaborar nos módulos, cada um com seu acesso e permissões configurados.",
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Sim. Utilizamos infraestrutura de nível empresarial com criptografia ponta a ponta, backups automáticos e políticas de segurança rigorosas.",
  },
];

const HubFocusFAQ = () => {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background/50 rounded-xl border border-border/50 px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default HubFocusFAQ;
