import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const faqCategories = [
  {
    category: "Soluções Sob Medida",
    items: [
      { question: "O que são as Soluções Sob Medida da Focus?", answer: "São sistemas de gestão desenvolvidos exclusivamente para a sua empresa — dashboards, CRMs, portais do cliente e automações personalizadas para agências, consultorias e prestadores de serviço." },
      { question: "Quanto tempo leva para entregar um projeto sob medida?", answer: "O prazo médio é de 15 a 30 dias, dependendo da complexidade. Projetos mais simples podem ser entregues em 1-2 semanas." },
      { question: "Preciso saber programar para usar os sistemas?", answer: "Não. Nossos sistemas são intuitivos e visuais. Fornecemos treinamento completo e documentação para toda a equipe." },
      { question: "Vocês oferecem suporte após a entrega?", answer: "Sim! Oferecemos suporte contínuo, incluindo ajustes, dúvidas sobre uso e atualizações. Também temos planos de manutenção mensal." },
    ],
  },
  {
    category: "Hub Empresarial",
    items: [
      { question: "O que é o Hub Empresarial?", answer: "É uma plataforma de gestão completa no Notion com módulos de Financeiro, RH, Marketing, Projetos e Dashboards — pronta para usar imediatamente." },
      { question: "Qual a diferença entre o Hub e uma Solução Sob Medida?", answer: "O Hub é um produto pronto e acessível para quem precisa de organização imediata. A Solução Sob Medida é desenvolvida exclusivamente para sua empresa com funcionalidades específicas." },
      { question: "Posso personalizar o Hub Empresarial?", answer: "Sim, o Hub é totalmente editável no Notion. Você pode adaptar campos, criar visualizações e ajustar os módulos conforme sua necessidade." },
    ],
  },
  {
    category: "Preços e Pagamento",
    items: [
      { question: "Quanto custa um projeto sob medida?", answer: "O valor varia conforme o escopo. Oferecemos um diagnóstico gratuito onde avaliamos sua necessidade e apresentamos um orçamento personalizado." },
      { question: "Qual o preço do Hub Empresarial?", answer: "O Hub Empresarial está disponível a partir de R$ 69/mês com acesso a todos os módulos." },
      { question: "Quais formas de pagamento vocês aceitam?", answer: "Aceitamos PIX, cartão de crédito e boleto bancário. Para projetos sob medida, oferecemos parcelamento." },
    ],
  },
  {
    category: "Suporte e Garantia",
    items: [
      { question: "Como funciona o suporte?", answer: "Oferecemos suporte via WhatsApp e e-mail em horário comercial. Clientes de projetos sob medida têm atendimento prioritário." },
      { question: "Posso solicitar alterações após a entrega?", answer: "Sim. Pequenas alterações estão incluídas no suporte pós-entrega. Alterações maiores podem ser orçadas separadamente." },
      { question: "Vocês trabalham com empresas de todos os portes?", answer: "Sim! Atendemos desde profissionais autônomos até médias empresas. Cada solução é adaptada ao tamanho e às necessidades do cliente." },
    ],
  },
];

const allFaqItems = faqCategories.flatMap(c => c.items);

const FAQ = () => {
  return (
    <>
      <SEOHead
        title="FAQ — Perguntas Frequentes | Focus Gestão Inteligente"
        description="Tire suas dúvidas sobre soluções sob medida, Hub Empresarial, preços, suporte e garantias da Focus Gestão Inteligente."
        canonical="/faq"
        keywords="FAQ gestão empresarial, perguntas frequentes Focus, dúvidas sistemas Notion"
        faqItems={allFaqItems}
      />
      <PageBreadcrumb items={[{ label: "FAQ" }]} />

      <section className="py-16 md:py-24">
        <div className="container-focus max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h1>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              Encontre respostas rápidas sobre nossos serviços, preços e suporte.
            </p>
          </div>

          <div className="space-y-12">
            {faqCategories.map((section) => (
              <div key={section.category}>
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full" />
                  {section.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {section.items.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${section.category}-${index}`}
                      className="bg-card/50 border border-card-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:text-primary">
                        <div className="flex items-start gap-3">
                          <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="font-semibold text-base">{item.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground-muted pl-8 text-base leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
