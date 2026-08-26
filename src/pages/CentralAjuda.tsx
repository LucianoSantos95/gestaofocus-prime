import { Search, MessageCircle, Book, Mail, HelpCircle, FileText, Users, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const CentralAjuda = () => {
  const categorias = [
    { icon: Book, title: "Como funciona a consultoria", description: "Diagnóstico, escopo e entrega", link: "/solucoes-sob-medida" },
    { icon: Users, title: "Consultoria", description: "Informações sobre nossos serviços de consultoria", link: "/sobre" },
    { icon: Settings, title: "Suporte Técnico", description: "Problemas técnicos e configurações", link: "#" },
    { icon: FileText, title: "Fale com a Focus", description: "Atendimento direto pelo WhatsApp", link: "https://wa.me/5511916742443" },
  ];

  const faqItems = [
    { question: "O que é a consultoria de operações da Focus?", answer: "É um serviço de consultoria presencial e remoto para PMEs, agências e consultorias que operam no caos — onde tudo depende da memória do dono e não existe processo documentado. Entregamos mapeamento de processos, construção de um sistema sob medida na Lovable e integração de agentes de IA onde fizer sentido." },
    { question: "Quais são os entregáveis da consultoria?", answer: "São três entregáveis complementares: (1) Mapeamento e documentação de todos os processos da empresa; (2) Construção do sistema sob medida na Lovable (Partner oficial), cobrindo os fluxos mapeados; (3) Integração de agentes de IA nos pontos que economizam tempo real." },
    { question: "Quanto tempo dura a consultoria?", answer: "O processo tem quatro etapas: diagnóstico gratuito (45-60 min), proposta personalizada (entregue em 24-48h), implementação (1 a 3 semanas conforme escopo) e suporte pós-entrega (2 semanas incluídas). O prazo total depende do tamanho da operação." },
    { question: "Quanto custa a consultoria de operações?", answer: "O valor é sob consulta — cada projeto é orçado por escopo fechado, não por hora. O diagnóstico inicial é gratuito e a proposta apresenta escopo, entregáveis e preço definidos antes de qualquer comprometimento." },
    { question: "Como funciona o suporte após a entrega?", answer: "Duas semanas de suporte pós-entrega estão incluídas em todos os projetos de consultoria, para acompanhar a adoção pela equipe e ajustar o que for necessário. Além disso, suporte via WhatsApp e e-mail em horário comercial." },
    { question: "Vocês atendem empresas de que porte?", answer: "O foco é em PMEs com operação real rodando — especialmente agências, consultorias, espaços de serviço e prestadores B2B que já têm equipe mas ainda dependem do dono para tudo funcionar. Atendemos 100% de forma remota, em todo o Brasil." },
  ];

  return (
    <>
      <SEOHead
        title="Central de Ajuda — Focus Gestão Inteligente"
        description="Encontre respostas para suas dúvidas sobre a consultoria de operações, sistemas sob medida na Lovable e suporte técnico da Focus Gestão Inteligente."
        canonical="/ajuda"
        keywords="ajuda Focus, suporte consultoria Lovable, FAQ gestão empresarial"
        faqItems={faqItems}
      />
      <PageBreadcrumb items={[{ label: "Central de Ajuda" }]} />

      <div className="min-h-screen">
        <section className="py-16 md:py-24">
          <div className="container-focus">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="hero-title mb-6">Central de Ajuda</h1>
              <p className="hero-subtitle max-w-3xl mx-auto mb-8">
                Encontre respostas rápidas para suas dúvidas ou entre em contato com nossa equipe
              </p>
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground-muted w-5 h-5" />
                <Input placeholder="Buscar por dúvidas..." className="pl-12 py-6 text-lg" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-slide-up">
              {categorias.map((categoria) => {
                const Icon = categoria.icon;
                return (
                  <a key={categoria.title} href={categoria.link} className="p-6 bg-card/50 rounded-lg border border-card-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{categoria.title}</h3>
                    <p className="text-sm text-foreground-muted">{categoria.description}</p>
                  </a>
                );
              })}
            </div>

            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Perguntas Frequentes</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 border border-card-border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:text-primary">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="font-semibold">{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground-muted pl-8">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-20 text-center animate-slide-up">
              <div className="bg-card/50 border border-card-border rounded-lg p-8 max-w-2xl mx-auto">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-3">Não encontrou o que procurava?</h2>
                <p className="text-foreground-muted mb-6">Nossa equipe está pronta para ajudar você com qualquer dúvida</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => window.open('https://wa.me/5511916742443?text=Olá!%20Preciso%20de%20ajuda.', '_blank')} className="btn-hero">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar no WhatsApp
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => window.location.href = 'mailto:comercial@focusinteligente.com.br'}>
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar E-mail
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CentralAjuda;
