import { Button } from "@/components/ui/button";
import { trackCTAClick } from "@/lib/analytics";

const AboutSection = () => {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-focus">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Sobre a <span className="text-primary">Focus Inteligente</span>
          </h2>
          
          <p className="text-lg text-foreground-muted leading-relaxed mb-8">
            A Focus Inteligente cria sistemas, consultorias e templates em Notion para 
            aumentar a produtividade pessoal e empresarial.
          </p>
          
          <p className="text-lg text-foreground-muted leading-relaxed mb-10">
            Do empreendedor individual às pequenas e médias empresas — organizamos processos, 
            rotinas, projetos e fluxos de trabalho com clareza e simplicidade.
          </p>
          
          <Button 
            className="btn-secondary px-8 py-6"
            onClick={() => {
              trackCTAClick('Conhecer a Focus', 'about');
              window.location.href = '/sobre';
            }}
          >
            Conhecer a Focus
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
