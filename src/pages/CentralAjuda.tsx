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
    { icon: Book, title: "Sistemas Notion", description: "Dúvidas sobre implementação e uso dos sistemas", link: "/sistemas-notion" },
    { icon: Users, title: "Consultoria", description: "Informações sobre nossos serviços de consultoria", link: "/sobre" },
    { icon: Settings, title: "Suporte Técnico", description: "Problemas técnicos e configurações", link: "#" },
    { icon: FileText, title: "Fale com a Focus", description: "Atendimento direto pelo nosso time", link: "/contato" },
  ];

  const faqItems = [
    { question: "Como funciona a implementação dos Sistemas Notion?", answer: "A implementação é feita de forma personalizada para cada cliente. Primeiro, fazemos uma análise das necessidades da sua empresa, depois criamos o sistema customizado no Notion e, por fim, realizamos o treinamento da equipe para garantir o uso eficiente." },
    { question: "Qual o prazo de entrega dos sistemas?", answer: "O prazo varia de acordo com a complexidade do projeto. Sistemas mais simples podem ser entregues em 1-2 semanas, enquanto sistemas mais complexos podem levar de 3-4 semanas. Definimos um cronograma detalhado na fase de planejamento." },
    { question: "Vocês oferecem suporte após a entrega?", answer: "Sim! Oferecemos suporte contínuo para todos os nossos clientes. Isso inclui ajustes, dúvidas sobre o uso do sistema e atualizações quando necessário. Também oferecemos planos de manutenção mensal." },
    { question: "É necessário ter conhecimento técnico para usar os sistemas?", answer: "Não! Nossos sistemas são desenvolvidos para serem intuitivos e fáceis de usar. Além disso, fornecemos treinamento completo para sua equipe e documentação detalhada para consulta sempre que necessário." },
    { question: "Posso solicitar alterações no sistema após a entrega?", answer: "Sim, oferecemos suporte para ajustes e melhorias contínuas. Pequenas alterações geralmente estão incluídas no suporte pós-entrega, e alterações maiores podem ser orçadas separadamente." },
    { question: "Vocês trabalham com empresas de todos os portes?", answer: "Sim! Atendemos desde pequenas empresas e profissionais autônomos até médias e grandes corporações. Cada solução é adaptada ao tamanho e às necessidades específicas do cliente." },
  ];

  return (
    <>
      <SEOHead
        title="Central de Ajuda — Focus Gestão Inteligente"
        description="Encontre respostas para suas dúvidas sobre sistemas Notion, consultoria empresarial e suporte técnico da Focus Gestão Inteligente."
        canonical="/ajuda"
        keywords="ajuda Focus, suporte sistemas Notion, FAQ gestão empresarial"
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
