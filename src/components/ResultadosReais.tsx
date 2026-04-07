import { TrendingUp, Clock, DollarSign, BarChart3 } from "lucide-react";

const metrics = [
  {
    icon: BarChart3,
    label: "Leads gerados",
    before: "12/mês",
    after: "87/mês",
    change: "+625%",
  },
  {
    icon: DollarSign,
    label: "Custo por lead",
    before: "R$ 48",
    after: "R$ 8,50",
    change: "-82%",
  },
  {
    icon: TrendingUp,
    label: "Taxa de conversão",
    before: "1,2%",
    after: "6,8%",
    change: "+467%",
  },
  {
    icon: Clock,
    label: "Tempo de resposta",
    before: "24h",
    after: "15min",
    change: "-97%",
  },
];

const ResultadosReais = () => (
  <section className="section-padding bg-background" id="resultados">
    <div className="container-focus">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Resultados Reais de Clientes
        </h2>
        <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
          Métricas antes e depois da implementação Focus
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="service-card text-center group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-4">
              <m.icon className="w-6 h-6 text-primary" />
            </div>
            <p className="text-foreground-muted text-sm font-medium mb-3">{m.label}</p>
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-red-400 line-through text-sm">{m.before}</span>
              <span className="text-foreground font-bold text-lg">{m.after}</span>
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold">
              {m.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultadosReais;
