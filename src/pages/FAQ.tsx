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
    category: "Consultoria de Operações (Focus Custom)",
    items: [
      { question: "O que é a consultoria de operações da Focus?", answer: "É um serviço de consultoria presencial e remoto para PMEs, agências e consultorias que operam no caos — onde tudo depende da memória do dono e não existe processo documentado. Entregamos mapeamento de processos, construção de um sistema sob medida na Lovable e integração de agentes de IA onde fizer sentido." },
      { question: "Quais são os entregáveis da consultoria?", answer: "São três entregáveis complementares: (1) Mapeamento e documentação de todos os processos da empresa — vendas, financeiro, atendimento, operação; (2) Construção do sistema sob medida na Lovable (Partner oficial), cobrindo os fluxos mapeados; (3) Integração de agentes de IA nos pontos que economizam tempo real, como resumo de reuniões, geração de propostas e qualificação de leads." },
      { question: "Quanto tempo dura a consultoria?", answer: "O processo tem quatro etapas: diagnóstico gratuito (45-60 min), proposta personalizada (entregue em 24-48h), implementação (1 a 3 semanas conforme escopo) e suporte pós-entrega (2 semanas incluídas). O prazo total depende do tamanho da operação." },
      { question: "Para quem é indicada a consultoria?", answer: "Para donos de PME, agências, consultorias e espaços de serviço que têm processos só na cabeça, já têm equipe mas não conseguem delegar com segurança, ou sentem que a empresa não funciona sem eles presentes." },
    ],
  },
  {
    category: "Preços e Pagamento",
    items: [
      { question: "Quanto custa a consultoria de operações?", answer: "O valor é sob consulta — cada projeto é orçado por escopo fechado, não por hora. O diagnóstico inicial é gratuito e a proposta apresenta escopo, entregáveis e preço definidos antes de qualquer comprometimento." },
      { question: "Quais formas de pagamento vocês aceitam?", answer: "Aceitamos PIX, cartão de crédito e boleto bancário. Para a consultoria, o pagamento é parcelado: 50% na assinatura do contrato e 50% na entrega." },
    ],
  },
  {
    category: "Suporte e Garantia",
    items: [
      { question: "Como funciona o suporte após a consultoria?", answer: "Dois semanas de suporte pós-entrega estão incluídas em todos os projetos de consultoria, para acompanhar a adoção pela equipe e ajustar o que for necessário. Além disso, suporte via WhatsApp e e-mail em horário comercial." },
      { question: "O diagnóstico inicial é realmente gratuito?", answer: "Sim. A reunião de diagnóstico tem 45 a 60 minutos e não gera nenhum custo. Nela entendemos a operação atual, identificamos os maiores gargalos e verificamos se faz sentido avançar para uma proposta." },
      { question: "Vocês atendem empresas de que porte?", answer: "O foco é em PMEs com operação real rodando — especialmente agências, consultorias, espaços de serviço e prestadores B2B que já têm equipe mas ainda dependem do dono para tudo funcionar. Atendemos 100% de forma remota, em todo o Brasil." },
    ],
  },
];

const allFaqItems = faqCategories.flatMap(c => c.items);

const FAQ = () => {
  return (
    <>
      <SEOHead
        title="FAQ — Perguntas Frequentes | Focus Gestão Inteligente"
        description="Tire suas dúvidas sobre soluções sob medida, preços, suporte e garantias da Focus Gestão Inteligente."
        canonical="/faq"
        keywords="FAQ gestão empresarial, perguntas frequentes Focus, dúvidas consultoria Lovable"
        faqItems={allFaqItems}
        breadcrumbItems={[{ name: 'FAQ', url: '/faq' }]}
        speakable={['h1', '.text-foreground-muted']}
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
