import { Download, LayoutGrid, Gift } from "lucide-react";

const metrics = [
  { icon: Download, value: "5.000+", label: "Downloads na versão Notion" },
  { icon: LayoutGrid, value: "8", label: "módulos integrados" },
  { icon: Gift, value: "100%", label: "gratuito no Beta" },
];

const HubFocusSocialProof = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 rounded-xl bg-card/50 border border-border/50 text-center sm:text-left justify-center sm:justify-start"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubFocusSocialProof;
