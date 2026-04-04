import { Book, FileText, Video, Download, ExternalLink, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const Documentacao = () => {
  const guias = [
    {
      category: "Primeiros Passos",
      items: [
        { title: "Introdução aos Sistemas Notion", description: "Entenda como nossos sistemas funcionam e como podem transformar sua gestão", icon: Book, time: "5 min" },
        { title: "Como Solicitar um Projeto", description: "Passo a passo para iniciar seu projeto conosco", icon: CheckCircle, time: "3 min" },
        { title: "Onboarding de Clientes", description: "O que esperar nas primeiras semanas do projeto", icon: ArrowRight, time: "7 min" },
      ],
    },
    {
      category: "Sistemas Notion",
      items: [
        { title: "CRM e Gestão de Vendas", description: "Como gerenciar seu funil de vendas e relacionamento com clientes", icon: FileText, time: "10 min" },
        { title: "Gestão de Projetos", description: "Organize tarefas, prazos e equipes de forma eficiente", icon: Lightbulb, time: "12 min" },
        { title: "Sistema Financeiro", description: "Controle receitas, despesas e fluxo de caixa", icon: FileText, time: "15 min" },
        { title: "Base de Conhecimento", description: "Centralize documentos e processos da empresa", icon: Book, time: "8 min" },
      ],
    },
    {
      category: "Consultoria e Metodologias",
      items: [
        { title: "Sprint de Produtividade", description: "Metodologia para otimizar processos em 30 dias", icon: Lightbulb, time: "10 min" },
        { title: "Hub Empresarial", description: "Como estruturar o centro operacional da sua empresa", icon: FileText, time: "12 min" },
        { title: "Focus Club", description: "Benefícios e como aproveitar ao máximo a comunidade", icon: CheckCircle, time: "6 min" },
      ],
    },
  ];

  const recursos = [
    { title: "Tutoriais em Vídeo", description: "Aprenda visualmente com nossos tutoriais passo a passo", icon: Video, action: "Assistir" },
    { title: "Templates Gratuitos", description: "Baixe modelos prontos para começar rapidamente", icon: Download, action: "Download" },
    { title: "API e Integrações", description: "Documentação técnica para desenvolvedores", icon: ExternalLink, action: "Acessar" },
  ];

  return (
    <>
      <SEOHead
        title="Documentação — Focus Gestão Inteligente"
        description="Guias completos, tutoriais e recursos para aproveitar ao máximo os sistemas de gestão da Focus Gestão Inteligente."
        canonical="/docs"
        keywords="documentação Focus, guias Notion, tutoriais gestão empresarial"
      />
      <PageBreadcrumb items={[{ label: "Documentação" }]} />

      <div className="min-h-screen">
        <section className="py-16 md:py-24">
          <div className="container-focus">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="hero-title mb-6">Documentação</h1>
              <p className="hero-subtitle max-w-3xl mx-auto">
                Guias completos, tutoriais e recursos para aproveitar ao máximo nossos serviços
              </p>
            </div>

            <div className="space-y-12 animate-slide-up">
              {guias.map((section) => (
                <div key={section.category}>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                    <div className="w-1 h-8 bg-primary mr-4"></div>
                    {section.category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="group p-6 bg-card/50 rounded-lg border border-card-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                          <div className="flex items-start justify-between mb-4">
                            <Icon className="w-8 h-8 text-primary" />
                            <span className="text-xs text-foreground-muted bg-background-elevated px-2 py-1 rounded">{item.time}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                          <p className="text-sm text-foreground-muted mb-4">{item.description}</p>
                          <div className="flex items-center text-primary text-sm font-medium">
                            Ler guia
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Recursos Adicionais</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recursos.map((recurso) => {
                  const Icon = recurso.icon;
                  return (
                    <div key={recurso.title} className="p-8 bg-card/50 rounded-lg border border-card-border text-center hover:border-primary/50 transition-all duration-300">
                      <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-3">{recurso.title}</h3>
                      <p className="text-foreground-muted mb-6">{recurso.description}</p>
                      <Button variant="outline" className="w-full">{recurso.action}</Button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-20 text-center animate-slide-up">
              <div className="bg-card/50 border border-card-border rounded-lg p-8 max-w-2xl mx-auto">
                <Book className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-3">Precisa de Ajuda Personalizada?</h2>
                <p className="text-foreground-muted mb-6">Nossa equipe está disponível para tirar suas dúvidas e ajudar no que precisar</p>
                <Button size="lg" onClick={() => window.open('https://wa.me/5511916742443?text=Olá!%20Preciso%20de%20ajuda%20com%20a%20documentação.', '_blank')} className="btn-hero">
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Documentacao;
