import { Briefcase, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackCTAClick } from "@/lib/analytics";

const audiences = [
  {
    icon: Users,
    title: "Empreendedores",
    description: "Organize suas rotinas, tarefas e finanças com templates prontos.",
    link: "/sistemas-gratuitos"
  },
  {
    icon: Briefcase,
    title: "Empresas",
    description: "Sistemas personalizados em Notion para padronizar processos, melhorar equipes e aumentar produtividade.",
    link: "/hub-empresarial"
  },
  {
    icon: Sparkles,
    title: "Criadores de Conteúdo",
    description: "Fluxo completo de criação, agenda editorial e automações em Notion.",
    link: "/sistemas-notion"
  }
];

const TargetAudience = () => {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-focus">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Para quem é a <span className="text-primary">Focus Inteligente</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="service-card text-center animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6">
                <audience.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                {audience.title}
              </h3>
              
              <p className="text-foreground-muted mb-6 leading-relaxed">
                {audience.description}
              </p>
              
              <Button 
                variant="ghost"
                className="text-primary hover:text-primary-glow transition-colors"
                onClick={() => {
                  trackCTAClick(`Ver soluções - ${audience.title}`, 'audience');
                  window.location.href = audience.link;
                }}
              >
                Ver soluções →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
