import { Building2 } from "lucide-react";

const TrustedByMini = () => {
  // Using company logos from assets
  const companies = [
    { name: "TechFlow", logo: "/lovable-uploads/b1b84ecc-e932-4297-af10-a6f7bc45041d.png" },
    { name: "InnovaTech", logo: "/lovable-uploads/2f76d4c5-3684-494b-b193-4b8f4a3c15fb.png" },
    { name: "Alpha", logo: "/lovable-uploads/4a125d6e-b8ad-4fde-a87f-349e56af291e.png" },
    { name: "NextGen", logo: "/lovable-uploads/84889f04-d903-46ca-b467-39dd119fdcc4.png" },
    { name: "Vertex", logo: "/lovable-uploads/9a534dd9-2fc7-4069-b764-020f532fe69c.png" },
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 text-sm text-foreground-muted mb-3">
          <Building2 className="w-4 h-4 text-primary" />
          <span>Empresas que confiam na Focus:</span>
        </div>
      </div>

      {/* Logo Grid */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {companies.map((company) => (
          <div 
            key={company.name}
            className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
          >
            <img 
              src={company.logo} 
              alt={`${company.name} logo`}
              width="120"
              height="40"
              className="h-8 md:h-10 w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Social Proof Text */}
      <div className="text-center mt-6">
        <p className="text-sm text-foreground-muted">
          <span className="text-primary font-semibold">150+</span> empresas já transformaram sua gestão
        </p>
      </div>
    </div>
  );
};

export default TrustedByMini;
