import { XCircle, CheckCircle2 } from "lucide-react";

const before = [
  "Dados espalhados em planilhas diferentes",
  "Sem visão clara do financeiro",
  "Processos na cabeça ou no WhatsApp",
  "Informações de clientes perdidas",
  "Tempo gasto apagando incêndios",
];

const after = [
  "Tudo centralizado em um só lugar",
  "Dashboard financeiro em tempo real",
  "Processos documentados e padronizados",
  "CRM organizado com histórico completo",
  "Rotinas produtivas que funcionam sozinhas",
];

const HubFocusComparison = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Antes vs Depois
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja como sua gestão muda com o Hub Focus
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Before */}
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 space-y-4">
            <h3 className="text-xl font-semibold text-destructive mb-4">
              ❌ Planilhas e Notion avulso
            </h3>
            {before.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>

          {/* After */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-4">
            <h3 className="text-xl font-semibold text-primary mb-4">
              ✅ Hub Focus
            </h3>
            {after.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubFocusComparison;
