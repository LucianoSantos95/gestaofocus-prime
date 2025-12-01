import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick, trackCTAClick } from "@/lib/analytics";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-focus relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Organize sua vida e sua empresa com <span className="text-primary">clareza</span>
          </h2>
          
          <p className="text-xl text-foreground-muted mb-10">
            Templates, consultoria e sistemas completos em Notion.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="btn-hero group text-base px-10 py-6 w-full sm:w-auto"
              onClick={() => {
                trackCTAClick('Ver Templates', 'final_cta');
                window.location.href = '/sistemas-notion';
              }}
            >
              Ver Templates
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              className="btn-hero group text-base px-10 py-6 w-full sm:w-auto"
              onClick={() => {
                trackWhatsAppClick('final_cta_consultoria');
                trackCTAClick('Consultoria Empresarial', 'final_cta');
                window.open('https://wa.me/5511916742443?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20consultoria%20empresarial!', '_blank');
              }}
            >
              Consultoria Empresarial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
