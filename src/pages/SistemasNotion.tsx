import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  ArrowRight, 
  CheckCircle, 
  X,
  ExternalLink
} from "lucide-react";
import ConsultationFormModal from "@/components/ConsultationFormModal";

const SistemasNotion = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const comparisonData = [
    { solo: "Sem padronização", focus: "Sistema estruturado para seu fluxo real" },
    { solo: "Sem automações", focus: "Workflows automáticos entre áreas" },
    { solo: "Retrabalho constante", focus: "Redução de horas e erros processuais" },
    { solo: "Aprendizado demorado", focus: "Sistema pronto + suporte + treinamento" },
    { solo: "Depende de tentativa e erro", focus: "Implementação assertiva e com experiência" }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Consultoria Notion Empresarial | Sistemas Personalizados - Focus</title>
        <meta name="description" content="Criamos sistemas empresariais Notion sob medida: dashboards em tempo real, automações inteligentes, controle centralizado de processos. Solicite diagnóstico gratuito." />
        <meta name="keywords" content="consultoria notion, sistemas notion personalizados, automação notion, dashboards notion, notion para empresas, gestão processos notion" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://focusinteligente.com.br/sistemas-notion" />
        <meta property="og:title" content="Consultoria Notion Empresarial - Focus" />
        <meta property="og:description" content="Sistemas empresariais Notion sob medida com automações, dashboards e integração completa para sua empresa." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://focusinteligente.com.br/sistemas-notion" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Consultoria em Sistemas Notion",
            "provider": {
              "@type": "Organization",
              "name": "Focus Gestão Empresarial",
              "url": "https://focusinteligente.com.br"
            },
            "description": "Desenvolvimento de sistemas empresariais personalizados no Notion",
            "areaServed": "BR"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="relative z-10 container-focus">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
              <Database className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-foreground-muted">
                Consultoria Notion Personalizada
              </span>
            </div>
            
            <h1 className="hero-title mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Processos soltos? Centralize tudo em um sistema sob medida.
            </h1>
            
            <p className="hero-subtitle mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
              Criamos sistemas empresariais em Notion que organizam operações, eliminam retrabalho e entregam relatórios estratégicos para decisões mais rápidas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <Button 
                className="btn-hero group"
                onClick={() => setIsFormOpen(true)}
              >
                Quero um sistema feito para minha empresa
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                className="btn-secondary"
                onClick={() => window.open("https://www.notion.com/pt/@focusgestao", "_blank")}
              >
                Ver portfólio de sistemas
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Objection Breaking Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-focus">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Por que contratar a Focus ao invés de tentar montar sozinho?
              </h2>
            </div>

            <div className="overflow-x-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 bg-red-500/10 border border-border rounded-tl-lg">
                      <span className="flex items-center gap-2 text-red-400 font-semibold">
                        <X className="w-5 h-5" />
                        Montar sozinho
                      </span>
                    </th>
                    <th className="text-left p-4 bg-primary/10 border border-border rounded-tr-lg">
                      <span className="flex items-center gap-2 text-primary font-semibold">
                        <CheckCircle className="w-5 h-5" />
                        Com a Focus
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index}>
                      <td className="p-4 border border-border text-foreground-muted bg-card/30">
                        {row.solo}
                      </td>
                      <td className="p-4 border border-border text-foreground bg-card/50">
                        {row.focus}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Button 
                variant="outline"
                className="btn-secondary"
                onClick={() => setIsFormOpen(true)}
              >
                Quero evitar retrabalho
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-background to-primary/10">
        <div className="container-focus">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Pronto para transformar sua operação em Notion?
            </h2>
            <Button 
              className="btn-hero group"
              onClick={() => setIsFormOpen(true)}
            >
              Solicitar diagnóstico gratuito
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Consultation Form Modal */}
      <ConsultationFormModal 
        open={isFormOpen} 
        onOpenChange={setIsFormOpen} 
      />
    </div>
  );
};

export default SistemasNotion;
