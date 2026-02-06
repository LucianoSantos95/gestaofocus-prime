import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "É gratuito mesmo?",
    answer: "Sim! Durante o período Beta, o acesso a todos os módulos é 100% gratuito. Você pode usar sem limites e sem precisar de cartão de crédito.",
  },
  {
    question: "Preciso saber programar?",
    answer: "Não! O Hub Focus foi feito para empreendedores e gestores. A interface é visual e intuitiva — basta preencher, clicar e organizar.",
  },
  {
    question: "Funciona no celular?",
    answer: "Sim! A plataforma é totalmente responsiva e funciona em qualquer dispositivo — computador, tablet ou celular.",
  },
  {
    question: "Posso usar com minha equipe?",
    answer: "Sim! Você pode convidar membros da sua equipe para colaborar nos módulos, cada um com seu acesso e permissões.",
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Totalmente. Utilizamos infraestrutura de nível empresarial com criptografia, backups automáticos e políticas de segurança rigorosas.",
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
