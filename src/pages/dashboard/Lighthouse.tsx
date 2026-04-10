import { useState, useCallback } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Gauge, Search, Eye, Shield, AlertTriangle, CheckCircle,
  RefreshCw, Smartphone, Monitor, Clock, Lightbulb, TrendingUp, TrendingDown
} from "lucide-react";

interface Scores {
  performance: number;
  seo: number;
  accessibility: number;
  bestPractices: number;
}

interface CoreWebVitals {
  lcp: string;
  fid: string;
  cls: string;
  fcp: string;
  tbt: string;
  si: string;
}

interface Opportunity {
  title: string;
  description: string;
  savings: string | null;
}

interface AnalysisResult {
  scores: Scores;
  coreWebVitals: CoreWebVitals;
  opportunities: Opportunity[];
  strategy: string;
  analyzedUrl: string;
  timestamp: string;
}

interface HistoryEntry extends AnalysisResult {
  id: string;
}

function getScoreColor(score: number) {
  if (score >= 90) return "text-success";
  if (score >= 50) return "text-accent";
  return "text-cta";
}

function getScoreBg(score: number) {
  if (score >= 90) return "bg-success/10 border-success/30";
  if (score >= 50) return "bg-accent/10 border-accent/30";
  return "bg-cta/10 border-cta/30";
}

function getProgressColor(score: number) {
  if (score >= 90) return "[&>div]:bg-success";
  if (score >= 50) return "[&>div]:bg-accent";
  return "[&>div]:bg-cta";
}

const SITE_URL = "https://gestaofocus-prime.lovable.app";

export default function Lighthouse() {
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<"mobile" | "desktop">("mobile");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const runAnalysis = useCallback(async () => {
    setLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast.error("Sessão expirada");
        return;
      }

      const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/pagespeed`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({ url: SITE_URL, strategy }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro na análise");
      }

      setResult(data);
      setHistory((prev) => [
        { ...data, id: crypto.randomUUID() },
        ...prev.slice(0, 9),
      ]);

      const lowScores = Object.entries(data.scores).filter(
        ([, v]) => (v as number) < 90
      );
      if (lowScores.length > 0) {
        toast.warning(
          `${lowScores.length} métrica(s) abaixo de 90 pontos`,
          { description: lowScores.map(([k, v]) => `${k}: ${v}`).join(", ") }
        );
      } else {
        toast.success("Todas as métricas acima de 90! 🎉");
      }
    } catch (err: any) {
      toast.error(err.message || "Erro ao analisar");
    } finally {
      setLoading(false);
    }
  }, [strategy]);

  const scoreCards = result
    ? [
        { label: "Performance", score: result.scores.performance, icon: Gauge },
        { label: "SEO", score: result.scores.seo, icon: Search },
        { label: "Acessibilidade", score: result.scores.accessibility, icon: Eye },
        { label: "Boas Práticas", score: result.scores.bestPractices, icon: Shield },
      ]
    : [];

  const prevResult = history.length > 1 ? history[1] : null;

  return (
    <DashboardLayout>
      <div className="p-6 md:p-8 max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Lighthouse Dashboard</h1>
            <p className="text-foreground-muted text-sm mt-1">
              Monitore Performance, SEO, Acessibilidade e Boas Práticas em tempo real.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Tabs value={strategy} onValueChange={(v) => setStrategy(v as any)}>
              <TabsList>
                <TabsTrigger value="mobile" className="gap-1.5">
                  <Smartphone className="w-4 h-4" /> Mobile
                </TabsTrigger>
                <TabsTrigger value="desktop" className="gap-1.5">
                  <Monitor className="w-4 h-4" /> Desktop
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <Button onClick={runAnalysis} disabled={loading} className="btn-cta gap-2">
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              {loading ? "Analisando..." : "Analisar Agora"}
            </Button>
          </div>
        </div>

        {/* Score Cards */}
        {result && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {scoreCards.map((card) => {
              const prev = prevResult?.scores[card.label === "Boas Práticas" ? "bestPractices" : card.label === "Acessibilidade" ? "accessibility" : card.label.toLowerCase() as keyof Scores];
              const diff = prev !== undefined ? card.score - prev : null;
              return (
                <Card key={card.label} className={`border ${getScoreBg(card.score)} relative overflow-hidden`}>
                  {card.score < 90 && (
                    <div className="absolute top-2 right-2">
                      <AlertTriangle className="w-4 h-4 text-cta animate-pulse" />
                    </div>
                  )}
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <card.icon className={`w-5 h-5 ${getScoreColor(card.score)}`} />
                      <span className="text-sm font-medium text-foreground-muted">{card.label}</span>
                    </div>
                    <div className="flex items-end gap-2 mb-3">
                      <span className={`text-3xl font-bold ${getScoreColor(card.score)}`}>{card.score}</span>
                      <span className="text-foreground-muted text-sm mb-1">/100</span>
                      {diff !== null && diff !== 0 && (
                        <Badge variant="outline" className={`text-xs gap-0.5 ${diff > 0 ? "text-success border-success/30" : "text-cta border-cta/30"}`}>
                          {diff > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                          {diff > 0 ? "+" : ""}{diff}
                        </Badge>
                      )}
                    </div>
                    <Progress value={card.score} className={`h-2 ${getProgressColor(card.score)}`} />
                    {card.score >= 90 && (
                      <div className="flex items-center gap-1 mt-2 text-xs text-success">
                        <CheckCircle className="w-3 h-3" /> Excelente
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Core Web Vitals + Opportunities */}
        {result && (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Core Web Vitals */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Core Web Vitals
                </CardTitle>
                <CardDescription>Métricas essenciais de experiência do usuário</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "LCP (Largest Contentful Paint)", value: result.coreWebVitals.lcp, desc: "Tempo até o maior elemento visível" },
                  { label: "FCP (First Contentful Paint)", value: result.coreWebVitals.fcp, desc: "Tempo até o primeiro conteúdo" },
                  { label: "TBT (Total Blocking Time)", value: result.coreWebVitals.tbt, desc: "Tempo total de bloqueio" },
                  { label: "CLS (Cumulative Layout Shift)", value: result.coreWebVitals.cls, desc: "Estabilidade visual" },
                  { label: "Speed Index", value: result.coreWebVitals.si, desc: "Velocidade de renderização" },
                ].map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="text-sm font-medium text-foreground">{metric.label}</p>
                      <p className="text-xs text-foreground-muted">{metric.desc}</p>
                    </div>
                    <Badge variant="secondary" className="font-mono text-sm">
                      {metric.value}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Opportunities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-accent" />
                  Oportunidades de Otimização
                </CardTitle>
                <CardDescription>Sugestões do Lighthouse para melhorar a performance</CardDescription>
              </CardHeader>
              <CardContent>
                {result.opportunities.length === 0 ? (
                  <div className="text-center py-8 text-foreground-muted">
                    <CheckCircle className="w-10 h-10 mx-auto mb-2 text-success" />
                    <p>Nenhuma oportunidade crítica encontrada!</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {result.opportunities.map((opp, i) => (
                      <div key={i} className="p-3 rounded-lg border border-card-border bg-background">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-medium text-foreground">{opp.title}</p>
                          {opp.savings && (
                            <Badge variant="outline" className="text-xs whitespace-nowrap text-accent border-accent/30">
                              -{opp.savings}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-foreground-muted mt-1 line-clamp-2">{opp.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* History */}
        {history.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Histórico de Análises</CardTitle>
              <CardDescription>Compare métricas ao longo do tempo (sessão atual)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-card-border">
                      <th className="text-left py-2 px-3 text-foreground-muted font-medium">Data</th>
                      <th className="text-left py-2 px-3 text-foreground-muted font-medium">Estratégia</th>
                      <th className="text-center py-2 px-3 text-foreground-muted font-medium">Perf.</th>
                      <th className="text-center py-2 px-3 text-foreground-muted font-medium">SEO</th>
                      <th className="text-center py-2 px-3 text-foreground-muted font-medium">Acess.</th>
                      <th className="text-center py-2 px-3 text-foreground-muted font-medium">Boas Pr.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((entry) => (
                      <tr key={entry.id} className="border-b border-card-border/50 hover:bg-muted/30">
                        <td className="py-2 px-3 text-foreground">
                          {new Date(entry.timestamp).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}
                        </td>
                        <td className="py-2 px-3">
                          <Badge variant="outline" className="text-xs">
                            {entry.strategy === "mobile" ? "📱 Mobile" : "🖥️ Desktop"}
                          </Badge>
                        </td>
                        {[entry.scores.performance, entry.scores.seo, entry.scores.accessibility, entry.scores.bestPractices].map((s, i) => (
                          <td key={i} className="py-2 px-3 text-center">
                            <span className={`font-semibold ${getScoreColor(s)}`}>{s}</span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Empty state */}
        {!result && !loading && (
          <Card className="border-dashed">
            <CardContent className="py-16 text-center">
              <Gauge className="w-16 h-16 mx-auto mb-4 text-foreground-muted/40" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Nenhuma análise realizada</h3>
              <p className="text-foreground-muted mb-6 max-w-md mx-auto">
                Clique em "Analisar Agora" para executar uma auditoria Lighthouse completa do seu site.
              </p>
              <Button onClick={runAnalysis} className="btn-cta gap-2">
                <RefreshCw className="w-4 h-4" /> Analisar Agora
              </Button>
            </CardContent>
          </Card>
        )}

        {loading && !result && (
          <Card>
            <CardContent className="py-16 text-center">
              <RefreshCw className="w-12 h-12 mx-auto mb-4 text-primary animate-spin" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Analisando seu site...</h3>
              <p className="text-foreground-muted">Isso pode levar de 15 a 30 segundos.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
