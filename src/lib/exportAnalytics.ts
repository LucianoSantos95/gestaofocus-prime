interface AnalyticsExportData {
  bounceRate: number;
  totalSessions: number;
  bouncedSessions: number;
  events: Array<{
    time_bucket: string;
    event_name: string;
    event_category: string;
    event_count: number;
    unique_sessions: number;
  }>;
}

export const exportAnalyticsToCSV = (data: AnalyticsExportData, period: string) => {
  const timestamp = new Date().toISOString().split('T')[0];
  
  // Create CSV content
  let csv = 'Focus Analytics Export\n';
  csv += `Data de Exportação:,${new Date().toLocaleString('pt-BR')}\n`;
  csv += `Período:,${period}\n\n`;
  
  // Bounce Rate Summary
  csv += 'RESUMO - BOUNCE RATE\n';
  csv += 'Métrica,Valor\n';
  csv += `Bounce Rate,${data.bounceRate}%\n`;
  csv += `Total de Sessões,${data.totalSessions}\n`;
  csv += `Sessões com Bounce,${data.bouncedSessions}\n\n`;
  
  // Events Detail
  csv += 'EVENTOS DETALHADOS\n';
  csv += 'Data/Hora,Nome do Evento,Categoria,Total de Eventos,Sessões Únicas\n';
  
  data.events.forEach(event => {
    const formattedDate = new Date(event.time_bucket).toLocaleString('pt-BR');
    csv += `${formattedDate},${event.event_name},${event.event_category},${event.event_count},${event.unique_sessions}\n`;
  });
  
  // Event Summary
  csv += '\nRESUMO POR TIPO DE EVENTO\n';
  csv += 'Nome do Evento,Total de Ocorrências\n';
  
  const eventSummary = data.events.reduce((acc, event) => {
    if (!acc[event.event_name]) {
      acc[event.event_name] = 0;
    }
    acc[event.event_name] += event.event_count;
    return acc;
  }, {} as Record<string, number>);
  
  Object.entries(eventSummary)
    .sort((a, b) => b[1] - a[1])
    .forEach(([name, count]) => {
      csv += `${name},${count}\n`;
    });
  
  // Create and download file
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `focus-analytics-${period}-${timestamp}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
