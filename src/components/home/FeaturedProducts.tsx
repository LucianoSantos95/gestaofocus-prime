import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackCTAClick } from "@/lib/analytics";
import hubImage from "/lovable-uploads/hub-empresarial-og.jpg";
import financeImage from "/lovable-uploads/controle-financeiro.jpg";
import sprintImage from "@/assets/sprint-dia-01.png";

const products = [
  {
    title: "Hub Empresarial PRO",
    description: "A solução completa para gestão empresarial no Notion.",
    image: hubImage,
    link: "/hub-empresarial",
    cta: "Ver produto",
    featured: true
  },
  {
    title: "Controle Financeiro PRO",
    description: "Controle financeiro de nível profissional, automatizado.",
    image: financeImage,
    link: "/sistemas-notion",
    cta: "Ver produto"
  },
  {
    title: "Sprint de Produtividade",
    description: "7 dias de práticas guiadas para organizar sua vida.",
    image: sprintImage,
    link: "/sprint-produtividade",
    cta: "Ver produto"
  },
  {
    title: "Templates Gratuitos",
    description: "Recursos para começar agora.",
    image: null,
    link: "/sistemas-gratuitos",
    cta: "Baixar grátis",
    free: true
  }
];

const FeaturedProducts = () => {
  return (
    <section className="section-padding">
      <div className="container-focus">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Produtos de <span className="text-primary">Destaque</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`service-card flex flex-col animate-slide-up ${
                product.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {product.image && (
                <div className="w-full h-48 mb-6 rounded-lg overflow-hidden bg-background-elevated">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              {!product.image && product.free && (
                <div className="w-full h-48 mb-6 rounded-lg overflow-hidden bg-gradient-primary flex items-center justify-center">
                  <Download className="w-16 h-16 text-primary-foreground" />
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-3">
                {product.title}
              </h3>
              
              <p className="text-foreground-muted mb-6 flex-grow">
                {product.description}
              </p>
              
              <Button 
                className={product.free ? "btn-secondary w-full" : "btn-hero w-full"}
                onClick={() => {
                  trackCTAClick(product.cta, 'featured_products');
                  window.location.href = product.link;
                }}
              >
                {product.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
