import { Card } from "@/components/ui/card";

const TrustedBySection = () => {
  const companies = [
    { name: "TechFlow Solutions", logo: "/lovable-uploads/focus-logo.png" },
    { name: "Innovatech Brasil", logo: "/lovable-uploads/focus-logo.png" },
    { name: "Grupo NextGen", logo: "/lovable-uploads/focus-logo.png" },
    { name: "Alpha Consultoria", logo: "/lovable-uploads/focus-logo.png" },
    { name: "Vertex Systems", logo: "/lovable-uploads/focus-logo.png" },
  ];

  const certifications = [
    { name: "Certificações Notion", description: "Selo básico - Selo Fluxos de Trabalho - Selo Avançado" },
    { name: "Gestão de Projetos", description: "Qualidade certificada" },
    { name: "Lean Seis Sigma", description: "White e Yellow Belt" },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-focus">
        {/* Empresas que confiam */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Empresas que Confiam na Focus
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Mais de 20 empresas já transformaram sua gestão com nossas soluções
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {companies.map((company, index) => (
            <Card 
              key={index}
              className="card-hover p-6 flex items-center justify-center border-card-border transition-all duration-300 hover:scale-105 hover:border-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <img 
                  src={company.logo} 
                  alt={`Logo ${company.name}`}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Card>
          ))}
        </div>

        {/* Certificações e autoridade */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="card-hover border-primary/10 p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-elegant animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {cert.name}
              </div>
              <p className="text-foreground-muted">
                {cert.description}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustedBySection;
