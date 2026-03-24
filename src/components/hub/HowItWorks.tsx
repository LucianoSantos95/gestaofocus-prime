import { UserPlus, LayoutGrid, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Crie sua conta grátis",
    description: "Sem cartão de crédito. Em 2 minutos você já está dentro.",
  },
  {
    icon: LayoutGrid,
    number: "02",
    title: "Siga o guia interativo",
    description: "Configure seus módulos: CRM, Financeiro, Projetos, RH e mais.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Gerencie tudo com IA",
    description: "Dashboard unificado. Dados em tempo real. Assistente inteligente.",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-focus max-w-4xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Comece em 3 Passos
          </h2>
          <p className="text-foreground-muted text-lg">
            Simples assim. Sem complicação, sem instalação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              <div className="relative mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-7 h-7 text-primary" />
                <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-foreground-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
