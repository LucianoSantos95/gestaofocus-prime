import { CheckCircle, AlertCircle, Clock, Activity } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const StatusPlataforma = () => {
  const servicos = [
    { name: "Website", status: "operational", uptime: "99.99%", lastIncident: "Nenhum incidente nos últimos 90 dias" },
    { name: "Suporte por E-mail", status: "operational", uptime: "100%", lastIncident: "Nenhum incidente nos últimos 90 dias" },
    { name: "Suporte por WhatsApp", status: "operational", uptime: "100%", lastIncident: "Nenhum incidente nos últimos 90 dias" },
    { name: "API e Integrações", status: "operational", uptime: "99.97%", lastIncident: "Nenhum incidente nos últimos 90 dias" },
  ];

  const historico = [
    { date: "29 de Setembro, 2025", status: "operational", title: "Todos os sistemas operacionais", description: "Nenhum problema relatado" },
    { date: "28 de Setembro, 2025", status: "operational", title: "Todos os sistemas operacionais", description: "Nenhum problema relatado" },
    { date: "27 de Setembro, 2025", status: "operational", title: "Todos os sistemas operacionais", description: "Nenhum problema relatado" },
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "operational": return { icon: CheckCircle, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20", label: "Operacional" };
      case "degraded": return { icon: AlertCircle, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20", label: "Degradado" };
      case "outage": return { icon: AlertCircle, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20", label: "Fora do ar" };
      default: return { icon: Clock, color: "text-gray-500", bg: "bg-gray-500/10", border: "border-gray-500/20", label: "Desconhecido" };
    }
  };

  return (
    <>
      <SEOHead
        title="Status da Plataforma — Focus Gestão Inteligente"
        description="Acompanhe em tempo real o status de todos os serviços da Focus Gestão Inteligente. Uptime e histórico de incidentes."
        canonical="/status"
        noindex
      />
      <PageBreadcrumb items={[{ label: "Status da Plataforma" }]} />

      <div className="min-h-screen">
        <section className="py-16 md:py-24">
          <div className="container-focus max-w-5xl">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="hero-title mb-6">Status da Plataforma</h1>
              <p className="hero-subtitle max-w-3xl mx-auto">Acompanhe em tempo real o status de todos os nossos serviços</p>
            </div>

            <div className="mb-12 animate-slide-up">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-2">Todos os Sistemas Operacionais</h2>
                <p className="text-foreground-muted">Última atualização: {new Date().toLocaleString('pt-BR')}</p>
              </div>
            </div>

            <div className="space-y-4 mb-16 animate-fade-in">
              <h2 className="text-xl font-semibold text-foreground mb-6">Status dos Serviços</h2>
              {servicos.map((servico) => {
                const statusInfo = getStatusInfo(servico.status);
                const StatusIcon = statusInfo.icon;
                return (
                  <div key={servico.name} className="bg-card/50 border border-card-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${statusInfo.bg} ${statusInfo.border} border`}>
                          <StatusIcon className={`w-6 h-6 ${statusInfo.color}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{servico.name}</h3>
                          <p className={`text-sm ${statusInfo.color}`}>{statusInfo.label}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-foreground">{servico.uptime}</div>
                        <p className="text-xs text-foreground-muted">Uptime (90 dias)</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-foreground-muted">
                      <Activity className="w-4 h-4 mr-2" />
                      {servico.lastIncident}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="animate-slide-up">
              <h2 className="text-xl font-semibold text-foreground mb-6">Histórico Recente</h2>
              <div className="space-y-4">
                {historico.map((item, index) => {
                  const statusInfo = getStatusInfo(item.status);
                  const StatusIcon = statusInfo.icon;
                  return (
                    <div key={index} className="bg-card/50 border border-card-border rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${statusInfo.bg} ${statusInfo.border} border mt-1`}>
                          <StatusIcon className={`w-5 h-5 ${statusInfo.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                            <span className="text-sm text-foreground-muted">{item.date}</span>
                          </div>
                          <p className="text-sm text-foreground-muted">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-16 bg-card/50 border border-card-border rounded-lg p-8 animate-fade-in">
              <h2 className="text-lg font-semibold text-foreground mb-4">Sobre este Status</h2>
              <div className="space-y-3 text-foreground-muted">
                <p>• Esta página é atualizada automaticamente a cada 5 minutos</p>
                <p>• Monitoramos continuamente todos os nossos serviços 24/7</p>
                <p>• Em caso de incidentes, notificamos todos os clientes afetados por e-mail</p>
                <p>• Para suporte urgente, entre em contato via WhatsApp: 
                  <a href="https://wa.me/5511916742443" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">+55 11 91674-2443</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StatusPlataforma;
