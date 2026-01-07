import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useUserRole } from "@/hooks/useUserRole";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ArrowLeft, TrendingUp, TrendingDown, Users, MousePointerClick, Eye, Activity, Download } from "lucide-react";
import { exportAnalyticsToCSV } from "@/lib/exportAnalytics";
import { useToast } from "@/hooks/use-toast";

interface BounceRateData {
  bounce_rate: number;
  total_sessions: number;
  bounced_sessions: number;
}

interface EngagementData {
  avg_pages_per_session: number;
  avg_session_duration_seconds: number;
  engaged_sessions: number;
  total_sessions: number;
  engagement_rate: number;
}

interface EventData {
  time_bucket: string;
  event_name: string;
  event_category: string;
  event_count: number;
  unique_sessions: number;
}

interface PopupConversion {
  name: string;
  conversions: number;
  color: string;
}

const Analytics = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { role, isLoading: roleLoading } = useUserRole();
  const [bounceRate, setBounceRate] = useState<BounceRateData | null>(null);
  const [engagement, setEngagement] = useState<EngagementData | null>(null);
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState<string>("7");

  useEffect(() => {
    if (!roleLoading && role !== 'admin') {
      navigate('/dashboard');
      return;
    }

    if (role === 'admin') {
      loadAnalytics();
      // Refresh every 30 seconds
      const interval = setInterval(loadAnalytics, 30000);
      return () => clearInterval(interval);
    }
  }, [role, roleLoading, navigate, period]);

  const loadAnalytics = async () => {
    try {
      // Get bounce rate
      const { data: bounceData, error: bounceError } = await supabase
        .rpc('calculate_bounce_rate', { hours_ago: parseInt(period) * 24 });
      
      if (bounceError) throw bounceError;
      if (bounceData && bounceData.length > 0) {
        setBounceRate(bounceData[0]);
      }

      // Get engagement metrics
      const { data: engagementData, error: engagementError } = await supabase
        .rpc('get_engagement_metrics', { hours_ago: parseInt(period) * 24 });
      
      if (engagementError) throw engagementError;
      if (engagementData && engagementData.length > 0) {
        setEngagement(engagementData[0]);
      }

      // Get events data based on selected period
      const { data: eventsData, error: eventsError } = await supabase
        .rpc('get_analytics_dashboard', { days_ago: parseInt(period) });
      
      if (eventsError) throw eventsError;
      setEvents(eventsData || []);
    } catch (error) {
      console.error('Error loading analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    if (!bounceRate || events.length === 0) {
      toast({
        title: "Sem dados para exportar",
        description: "Não há dados disponíveis no período selecionado.",
        variant: "destructive",
      });
      return;
    }

    const periodLabels: Record<string, string> = {
      "1": "Últimas 24 horas",
      "7": "Últimos 7 dias",
      "30": "Últimos 30 dias",
      "90": "Últimos 90 dias",
    };

    exportAnalyticsToCSV(
      {
        bounceRate: bounceRate.bounce_rate,
        totalSessions: bounceRate.total_sessions,
        bouncedSessions: bounceRate.bounced_sessions,
        events,
      },
      periodLabels[period] || `${period} dias`
    );

    toast({
      title: "Exportado com sucesso!",
      description: "Os dados de analytics foram exportados para CSV.",
    });
  };

  if (roleLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  // Calculate popup conversions
  const popupConversions: PopupConversion[] = [
    {
      name: "Diagnostic Quiz",
      conversions: events.filter(e => e.event_name === 'diagnostic_quiz_completed').reduce((sum, e) => sum + e.event_count, 0),
      color: "hsl(var(--chart-1))"
    },
    {
      name: "Exit Intent",
      conversions: events.filter(e => e.event_name === 'exit_intent_whatsapp_click').reduce((sum, e) => sum + e.event_count, 0),
      color: "hsl(var(--chart-2))"
    },
    {
      name: "Onboarding Tour",
      conversions: events.filter(e => e.event_name === 'onboarding_tour_completed').reduce((sum, e) => sum + e.event_count, 0),
      color: "hsl(var(--chart-3))"
    },
    {
      name: "Video Modal",
      conversions: events.filter(e => e.event_name === 'video_modal_opened').reduce((sum, e) => sum + e.event_count, 0),
      color: "hsl(var(--chart-4))"
    }
  ];

  // Calculate engagement by hour
  const engagementByHour = events.reduce((acc, event) => {
    const hour = new Date(event.time_bucket).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const existing = acc.find(item => item.hour === hour);
    if (existing) {
      existing.events += event.event_count;
      existing.sessions += event.unique_sessions;
    } else {
      acc.push({
        hour,
        events: event.event_count,
        sessions: event.unique_sessions
      });
    }
    return acc;
  }, [] as Array<{ hour: string; events: number; sessions: number }>).slice(0, 24).reverse();

  // Calculate top events
  const topEvents = events.reduce((acc, event) => {
    const existing = acc.find(item => item.name === event.event_name);
    if (existing) {
      existing.count += event.event_count;
    } else {
      acc.push({ name: event.event_name, count: event.event_count });
    }
    return acc;
  }, [] as Array<{ name: string; count: number }>)
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  const totalEvents = events.reduce((sum, e) => sum + e.event_count, 0);
  const totalSessions = events.reduce((sum, e) => sum + e.unique_sessions, 0);
  const totalConversions = popupConversions.reduce((sum, p) => sum + p.conversions, 0);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
              <p className="text-muted-foreground">Monitoramento em tempo real</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Últimas 24h</SelectItem>
                <SelectItem value="7">Últimos 7 dias</SelectItem>
                <SelectItem value="30">Últimos 30 dias</SelectItem>
                <SelectItem value="90">Últimos 90 dias</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleExport} variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exportar CSV
            </Button>
            <Badge variant="outline" className="text-sm">
              <Activity className="h-3 w-3 mr-1" />
              Atualiza a cada 30s
            </Badge>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bounce Rate Real</CardTitle>
              {bounceRate && bounceRate.bounce_rate < 50 ? (
                <TrendingDown className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingUp className="h-4 w-4 text-red-500" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {bounceRate ? `${bounceRate.bounce_rate}%` : 'N/A'}
              </div>
              <p className="text-xs text-muted-foreground">
                {bounceRate?.bounced_sessions || 0} de {bounceRate?.total_sessions || 0} sessões
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Engajamento</CardTitle>
              {engagement && engagement.engagement_rate > 50 ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-muted-foreground" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {engagement ? `${engagement.engagement_rate}%` : 'N/A'}
              </div>
              <p className="text-xs text-muted-foreground">
                {engagement?.engaged_sessions || 0} sessões engajadas
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Páginas/Sessão</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {engagement ? engagement.avg_pages_per_session : 'N/A'}
              </div>
              <p className="text-xs text-muted-foreground">Média por sessão</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tempo Médio</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {engagement 
                  ? `${Math.round((engagement.avg_session_duration_seconds || 0) / 60)}m ${Math.round((engagement.avg_session_duration_seconds || 0) % 60)}s`
                  : 'N/A'}
              </div>
              <p className="text-xs text-muted-foreground">Duração por sessão</p>
            </CardContent>
          </Card>
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Eventos</CardTitle>
              <MousePointerClick className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalEvents}</div>
              <p className="text-xs text-muted-foreground">Período selecionado</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sessões Únicas</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalSessions}</div>
              <p className="text-xs text-muted-foreground">Período selecionado</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversões Popups</CardTitle>
              <MousePointerClick className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalConversions}</div>
              <p className="text-xs text-muted-foreground">Todas as interações</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <Tabs defaultValue="engagement" className="space-y-6">
          <TabsList>
            <TabsTrigger value="engagement">Engajamento</TabsTrigger>
            <TabsTrigger value="popups">Conversões Popups</TabsTrigger>
            <TabsTrigger value="events">Top Eventos</TabsTrigger>
          </TabsList>

          <TabsContent value="engagement" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Engajamento por Hora</CardTitle>
                <CardDescription>Eventos e sessões únicas nas últimas 24 horas</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={engagementByHour}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="hour" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="events" 
                      stroke="hsl(var(--primary))" 
                      name="Eventos"
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="sessions" 
                      stroke="hsl(var(--chart-2))" 
                      name="Sessões"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="popups" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Conversões por Popup</CardTitle>
                  <CardDescription>Distribuição de interações</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={popupConversions}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={(entry) => `${entry.name}: ${entry.conversions}`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="conversions"
                      >
                        {popupConversions.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance dos Popups</CardTitle>
                  <CardDescription>Comparação de conversões</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={popupConversions}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="name" className="text-xs" angle={-45} textAnchor="end" height={80} />
                      <YAxis className="text-xs" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="conversions" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top 10 Eventos</CardTitle>
                <CardDescription>Eventos mais frequentes no período selecionado</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={topEvents} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis type="number" className="text-xs" />
                    <YAxis dataKey="name" type="category" className="text-xs" width={150} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="count" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;
