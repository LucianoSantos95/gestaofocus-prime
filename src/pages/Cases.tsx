import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ApplicationFormModal from "@/components/ApplicationFormModal";
import { ArrowRight } from "lucide-react";
import CaseStudyArticle from "@/components/cases/CaseStudyArticle";
import { caseStudies } from "@/components/cases/caseStudiesData";

const Cases = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cases de Sucesso | Software Sob Medida para Agências | Focus"
        description="Veja como agências e consultorias eliminaram o caos operacional com software exclusivo da Focus. Cases reais com resultados mensuráveis."
        canonical="/cases"
        keywords="cases de sucesso software sob medida, portfólio agência digital, sistema personalizado consultoria, resultados Focus"
      />

      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="container-focus relative z-10 text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            Portfólio de Projetos
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Do caos à{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              clareza operacional
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
            Veja como agências e consultorias transformaram sua operação com sistemas exclusivos
            da Focus — e os resultados que alcançaram.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="pb-24">
        <div className="container-focus max-w-5xl space-y-20">
          {caseStudies.map((cs, idx) => (
            <CaseStudyArticle key={cs.id} caseStudy={cs} index={idx} isLast={idx === caseStudies.length - 1} />
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="container-focus relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Seu projeto pode ser o próximo
          </h2>
          <p className="text-foreground-muted text-lg mb-8">
            Descreva o desafio da sua agência ou consultoria e receba um protótipo visual
            do seu sistema em até 24h — sem custo.
          </p>
          <Button
            onClick={() => setFormOpen(true)}
            className="btn-hero text-lg px-10 py-5 animate-glow"
          >
            QUERO MEU PROTÓTIPO GRATUITO
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />

      <ApplicationFormModal open={formOpen} onOpenChange={setFormOpen} source="cases" />
    </div>
  );
};

export default Cases;
