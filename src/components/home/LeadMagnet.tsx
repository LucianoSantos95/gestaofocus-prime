import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackCTAClick } from "@/lib/analytics";

const LeadMagnet = () => {
  return (
    <section className="py-16 bg-gradient-primary">
      <div className="container-focus">
        <div className="max-w-4xl mx-auto text-center">
          <Download className="w-12 h-12 mx-auto mb-6 text-primary-foreground" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Comece agora com um template gratuito de Produtividade
          </h2>
          
          <p className="text-lg text-primary-foreground/90 mb-8">
            Mais de 150 pessoas já baixaram e começaram a organizar a vida com o Focus.
          </p>
          
          <Button 
            size="lg"
            className="bg-background text-primary hover:bg-background-secondary px-10 py-6 text-lg font-semibold"
            onClick={() => {
              trackCTAClick('Baixar Template Grátis', 'lead_magnet');
              window.location.href = '/sistemas-gratuitos';
            }}
          >
            Baixar Template Grátis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
