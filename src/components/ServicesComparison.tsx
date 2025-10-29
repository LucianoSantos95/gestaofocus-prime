import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trackWhatsAppClick, trackCTAClick } from "@/lib/analytics";

const ServicesComparison = () => {
  const services = [
    {
      name: "Sistemas Gratuitos",
      price: "Grátis",
      description: "Para começar",
      features: [
        { name: "Templates básicos", included: true },
        { name: "Tutoriais em vídeo", included: true },
        { name: "Comunidade de suporte", included: true },
        { name: "Personalização", included: false },
        { name: "Suporte direto", included: false },
        { name: "Treinamento", included: false },
        { name: "Atualizações", included: false },
      ],
      cta: "Começar grátis",
      ctaAction: () => window.location.href = '/sistemas-gratuitos',
      highlight: false,
    },
    {
      name: "Sprint Produtividade",
      price: "R$ 37,90",
      description: "Transformação em 7 dias",
      features: [
        { name: "Templates básicos", included: true },
        { name: "Tutoriais em vídeo", included: true },
        { name: "Comunidade de suporte", included: true },
        { name: "Personalização", included: true },
        { name: "Suporte direto", included: true },
        { name: "Treinamento", included: true },
        { name: "Atualizações", included: true },
      ],
      cta: "Começar sprint",
      ctaAction: () => window.location.href = '/sprint-produtividade',
      highlight: false,
    },
    {
      name: "Consultoria Notion",
      price: "Sob consulta",
      description: "100% Personalizado",
      features: [
        { name: "Templates básicos", included: true },
        { name: "Tutoriais em vídeo", included: true },
        { name: "Comunidade de suporte", included: true },
        { name: "Personalização", included: true, highlight: "Total" },
        { name: "Suporte direto", included: true, highlight: "Premium" },
        { name: "Treinamento", included: true, highlight: "Completo" },
        { name: "Atualizações", included: true, highlight: "Vitalício" },
      ],
      cta: "Solicitar proposta",
      ctaAction: () => {
        trackWhatsAppClick('comparison_table');
        trackCTAClick('Solicitar proposta', 'comparison_table');
        window.open('https://wa.me/5511916742443?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20de%20consultoria%20personalizada.', '_blank');
      },
      highlight: true,
    },
  ];

  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-focus">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Qual Solução É Ideal Para Você?
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Compare nossos serviços e escolha o que melhor se encaixa no seu momento e necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`relative p-8 transition-all duration-300 ${
                service.highlight 
                  ? 'border-primary/50 bg-gradient-to-br from-card via-card to-primary/5 shadow-elegant scale-105' 
                  : 'border-card-border hover:border-primary/20 hover:scale-105'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {service.name}
                </h3>
                <p className="text-foreground-muted text-sm mb-4">
                  {service.description}
                </p>
                <div className="text-4xl font-bold text-primary mb-6">
                  {service.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    {feature.included ? (
                      <>
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground-muted">
                          {feature.name}
                          {feature.highlight && (
                            <span className="ml-2 text-xs font-semibold text-primary">
                              ({feature.highlight})
                            </span>
                          )}
                        </span>
                      </>
                    ) : (
                      <>
                        <X className="w-5 h-5 text-foreground-muted/30 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground-muted/50">{feature.name}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>

              <Button 
                className={service.highlight ? "btn-hero w-full" : "btn-secondary w-full"}
                onClick={service.ctaAction}
              >
                {service.cta}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground-muted text-sm">
            💡 Não sabe qual escolher? {" "}
            <button 
              className="text-primary hover:text-primary/80 transition-colors underline"
              onClick={() => {
                trackWhatsAppClick('comparison_help');
                trackCTAClick('Fale conosco', 'comparison_help');
                window.open('https://wa.me/5511916742443?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20para%20escolher%20o%20servi%C3%A7o%20ideal.', '_blank');
              }}
            >
              Fale conosco e te ajudamos a decidir
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesComparison;
