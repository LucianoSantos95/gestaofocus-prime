import { Shield, Clock, Headphones, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Garantia de Satisfação 30 Dias",
      description: "Se não ficar satisfeito com o resultado, devolvemos 100% do seu investimento sem questionamentos.",
    },
    {
      icon: Clock,
      title: "Suporte por 14 Dias",
      description: "Suporte técnico completo por 2 semanas para garantir que você aproveite ao máximo sua solução.",
    },
    {
      icon: Headphones,
      title: "Treinamento Incluído",
      description: "Treinamento completo da equipe incluído em todos os serviços, sem custos adicionais.",
    },
    {
      icon: RefreshCw,
      title: "Atualizações Contínuas",
      description: "Seu sistema evolui com você. Receba atualizações e melhorias sem custo adicional.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-focus">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <Shield className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Compromisso com Resultados</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Seu Investimento Está Protegido
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Assumimos o risco para você. Nossa garantia garante que você terá resultados 
            ou seu dinheiro de volta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => (
            <Card 
              key={index}
              className="card-hover border-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-elegant animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 text-center">
                <div className="relative mb-4 flex justify-center">
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow p-0.5 shadow-lg">
                    <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                      <guarantee.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow blur-xl opacity-30" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-sm text-foreground-muted">
                  {guarantee.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
