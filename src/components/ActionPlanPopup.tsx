import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Sparkles, Download, ArrowRight, Clock, Zap, ChevronRight, ChevronDown, BarChart3, CheckCircle2, Loader2, User, Phone, Mail, MessageSquareText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const POPUP_DELAY_MS = 15000;
const SESSION_KEY = "action_plan_popup_shown";

interface DiagnosisResult {
  greeting: string;
  scores: { projetos: number; financeiro: number; processos: number; equipe: number };
  actions: { title: string; description: string; timeframe: string; steps: string[] }[];
  projection: string;
  recommended_product: string;
}

const SEGMENTS = [
  { value: "agencia", label: "Agência" },
  { value: "consultoria", label: "Consultoria" },
  { value: "escritorio", label: "Escritório / Empresa" },
  { value: "freelancer", label: "Freelancer / Autônomo" },
  { value: "outro", label: "Outro" },
];

const TEAM_SIZES = [
  { value: "1", label: "Só eu" },
  { value: "2-5", label: "2 a 5 pessoas" },
  { value: "6-15", label: "6 a 15 pessoas" },
  { value: "16+", label: "16+ pessoas" },
];

const CHALLENGES = [
  { id: "projetos_atrasados", label: "Projetos atrasados" },
  { id: "financeiro_baguncado", label: "Financeiro bagunçado" },
  { id: "sem_processos", label: "Sem processos definidos" },
  { id: "equipe_desalinhada", label: "Equipe desalinhada" },
];

export default function ActionPlanPopup() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"form" | "loading" | "result">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [segment, setSegment] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [challenges, setChallenges] = useState<string[]>([]);
  const [problemDescription, setProblemDescription] = useState("");
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [expandedAction, setExpandedAction] = useState<number | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      if (
        sessionStorage.getItem("exit_intent_shown") ||
        sessionStorage.getItem("time_popup_shown") ||
        sessionStorage.getItem("hub_focus_popup_shown")
      ) return;
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "true");
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const toggleChallenge = (id: string) => {
    setChallenges(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const isFormValid = name.trim().length >= 2 && email && segment && teamSize && challenges.length > 0;

  const handleSubmit = useCallback(async () => {
    if (!isFormValid) {
      toast({ title: "Preencha pelo menos nome, email, segmento, equipe e dores", variant: "destructive" });
      return;
    }
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
      toast({ title: "Email inválido", variant: "destructive" });
      return;
    }

    setStep("loading");
    setSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("generate-action-plan", {
        body: { name, email, phone, segment, team_size: teamSize, challenges, problem_description: problemDescription },
      });

      if (error) throw error;
      setResult(data as DiagnosisResult);
      setStep("result");
    } catch (err) {
      console.error(err);
      toast({ title: "Erro ao gerar plano. Tente novamente.", variant: "destructive" });
      setStep("form");
    } finally {
      setSubmitting(false);
    }
  }, [name, email, phone, segment, teamSize, challenges, problemDescription, isFormValid]);

  const handleDownloadPDF = useCallback(async () => {
    if (!result) return;
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    const w = doc.internal.pageSize.getWidth();
    const firstName = name.split(" ")[0];

    // Header
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, w, 45, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.text(`Plano de Ação — ${firstName}`, 20, 25);
    doc.setFontSize(11);
    doc.text("Gerado por Focus — gestão inteligente para sua empresa", 20, 35);

    // Greeting
    doc.setTextColor(30, 41, 59);
    doc.setFontSize(12);
    const greetLines = doc.splitTextToSize(result.greeting, w - 40);
    doc.text(greetLines, 20, 55);

    // Scores
    let y = 55 + greetLines.length * 6 + 10;
    doc.setFontSize(16);
    doc.text("Diagnóstico por Área", 20, y);

    const scoreLabels: Record<string, string> = {
      projetos: "Projetos", financeiro: "Financeiro",
      processos: "Processos", equipe: "Equipe",
    };

    y += 12;
    Object.entries(result.scores).forEach(([key, value]) => {
      doc.setFontSize(11);
      doc.setTextColor(30, 41, 59);
      doc.text(`${scoreLabels[key]}: ${value}/100`, 20, y);
      doc.setFillColor(226, 232, 240);
      doc.roundedRect(20, y + 2, 120, 6, 3, 3, "F");
      const color = value >= 70 ? [34, 197, 94] : value >= 40 ? [250, 204, 21] : [239, 68, 68];
      doc.setFillColor(color[0], color[1], color[2]);
      doc.roundedRect(20, y + 2, (value / 100) * 120, 6, 3, 3, "F");
      y += 18;
    });

    // Actions with steps
    y += 10;
    doc.setFontSize(16);
    doc.setTextColor(30, 41, 59);
    doc.text("Ações Imediatas + Passo a Passo", 20, y);
    y += 12;

    result.actions.forEach((action, i) => {
      if (y > 250) { doc.addPage(); y = 20; }
      doc.setFontSize(12);
      doc.setTextColor(37, 99, 235);
      doc.text(`${i + 1}. ${action.title}`, 20, y);
      y += 7;
      doc.setFontSize(10);
      doc.setTextColor(71, 85, 105);
      const descLines = doc.splitTextToSize(action.description, w - 40);
      doc.text(descLines, 25, y);
      y += descLines.length * 5 + 3;
      doc.setTextColor(100, 116, 139);
      doc.text(`Prazo: ${action.timeframe}`, 25, y);
      y += 8;

      // Steps
      if (action.steps?.length) {
        doc.setFontSize(10);
        doc.setTextColor(30, 41, 59);
        doc.text("Como implementar:", 25, y);
        y += 6;
        action.steps.forEach((step, si) => {
          if (y > 270) { doc.addPage(); y = 20; }
          doc.setTextColor(71, 85, 105);
          const stepLines = doc.splitTextToSize(`${si + 1}. ${step}`, w - 50);
          doc.text(stepLines, 30, y);
          y += stepLines.length * 5 + 2;
        });
      }
      y += 6;
    });

    // Projection
    if (y > 250) { doc.addPage(); y = 20; }
    y += 5;
    doc.setFontSize(14);
    doc.setTextColor(30, 41, 59);
    doc.text("Projeção em 30 dias", 20, y);
    y += 8;
    doc.setFontSize(10);
    doc.setTextColor(71, 85, 105);
    const projLines = doc.splitTextToSize(result.projection, w - 40);
    doc.text(projLines, 20, y);

    // Footer
    const h = doc.internal.pageSize.getHeight();
    doc.setFillColor(15, 23, 42);
    doc.rect(0, h - 20, w, 20, "F");
    doc.setTextColor(148, 163, 184);
    doc.setFontSize(9);
    doc.text("focus.com.br — Transforme sua operação com sistemas inteligentes", 20, h - 8);

    doc.save(`plano-de-acao-${firstName.toLowerCase()}.pdf`);
  }, [result, name]);

  const getScoreColor = (score: number) => {
    if (score >= 70) return "bg-green-500";
    if (score >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  const productCTA = result?.recommended_product === "solucoes-sob-medida"
    ? { label: "Solicitar Solução Sob Medida", href: "/solucoes-sob-medida" }
    : { label: "Conhecer o Hub Empresarial", href: "/hub-empresarial" };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[540px] max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-primary/20 shadow-[0_0_60px_-12px_hsl(213_94%_68%/0.3)] p-0">
        <DialogTitle className="sr-only">Plano de Ação Gratuito</DialogTitle>

        {/* FORM STEP */}
        {step === "form" && (
          <div className="p-6 space-y-4">
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                <Sparkles className="w-3 h-3" />
                100% gratuito • Diagnóstico com IA
              </div>
              <h2 className="text-xl font-bold text-foreground">
                Descubra o que está travando sua empresa
              </h2>
              <p className="text-sm text-foreground-muted">
                Preencha os campos abaixo e nossa IA gera um plano de ação profundo e personalizado.
              </p>
            </div>

            {/* Name + Phone row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-primary" />
                  Seu nome *
                </label>
                <Input
                  placeholder="Ex: João Silva"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="bg-background-elevated border-border"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  WhatsApp
                </label>
                <Input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="bg-background-elevated border-border"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-primary" />
                Seu email *
              </label>
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="bg-background-elevated border-border"
              />
            </div>

            {/* Segment + Team row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Segmento *</label>
                <Select value={segment} onValueChange={setSegment}>
                  <SelectTrigger className="bg-background-elevated border-border">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {SEGMENTS.map(s => (
                      <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Equipe *</label>
                <Select value={teamSize} onValueChange={setTeamSize}>
                  <SelectTrigger className="bg-background-elevated border-border">
                    <SelectValue placeholder="Tamanho" />
                  </SelectTrigger>
                  <SelectContent>
                    {TEAM_SIZES.map(t => (
                      <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Challenges */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Maiores dores (selecione) *</label>
              <div className="grid grid-cols-2 gap-2">
                {CHALLENGES.map(c => (
                  <label
                    key={c.id}
                    className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-all text-sm ${
                      challenges.includes(c.id)
                        ? "border-primary/50 bg-primary/10 text-foreground"
                        : "border-border bg-background-elevated text-foreground-muted hover:border-primary/30"
                    }`}
                  >
                    <Checkbox
                      checked={challenges.includes(c.id)}
                      onCheckedChange={() => toggleChallenge(c.id)}
                      className="data-[state=checked]:bg-primary"
                    />
                    {c.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Problem description */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground flex items-center gap-1.5">
                <MessageSquareText className="w-3.5 h-3.5 text-primary" />
                Descreva seus problemas
              </label>
              <Textarea
                placeholder="Conte com detalhes os maiores desafios do seu negócio. Quanto mais informação, mais preciso será o seu plano de ação..."
                value={problemDescription}
                onChange={e => setProblemDescription(e.target.value)}
                className="bg-background-elevated border-border min-h-[80px] resize-none"
                maxLength={1000}
              />
              <p className="text-xs text-foreground-muted text-right">{problemDescription.length}/1000</p>
            </div>

            {/* Submit */}
            <Button
              onClick={handleSubmit}
              disabled={!isFormValid}
              className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-[hsl(var(--primary-glow))] hover:opacity-90 transition-opacity"
            >
              Gerar Meu Plano de Ação Gratuito
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>

            <p className="text-xs text-center text-foreground-muted">
              Seus dados estão seguros. Sem spam, sem compromisso.
            </p>
          </div>
        )}

        {/* LOADING STEP */}
        {step === "loading" && (
          <div className="p-10 flex flex-col items-center justify-center space-y-6 min-h-[300px]">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
              </div>
              <div className="absolute inset-0 w-16 h-16 rounded-full bg-primary/10 animate-ping" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                {name ? `Analisando seu negócio, ${name.split(" ")[0]}...` : "Analisando seu negócio..."}
              </h3>
              <p className="text-sm text-foreground-muted">Nossa IA está criando um plano personalizado com base nas suas respostas</p>
            </div>
            <div className="w-full max-w-[200px] h-1.5 bg-background-elevated rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-[hsl(var(--primary-glow))] rounded-full animate-[progress_3s_ease-in-out_infinite]"
                style={{ width: "70%", animation: "progress 2.5s ease-in-out infinite" }} />
            </div>
          </div>
        )}

        {/* RESULT STEP */}
        {step === "result" && result && (
          <div className="p-6 space-y-5">
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                <CheckCircle2 className="w-3 h-3" />
                Plano gerado com sucesso
              </div>
              <h2 className="text-xl font-bold text-foreground">Seu Plano de Ação</h2>
              {result.greeting && (
                <p className="text-sm text-foreground-muted">{result.greeting}</p>
              )}
            </div>

            {/* Scores */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-primary" />
                Diagnóstico por Área
              </h3>
              <div className="space-y-2.5">
                {Object.entries(result.scores).map(([key, value]) => {
                  const labels: Record<string, string> = {
                    projetos: "Projetos", financeiro: "Financeiro",
                    processos: "Processos", equipe: "Equipe",
                  };
                  return (
                    <div key={key} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-foreground-muted">{labels[key]}</span>
                        <span className="font-medium text-foreground">{value}/100</span>
                      </div>
                      <div className="h-2 bg-background-elevated rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${getScoreColor(value)}`}
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions — expandable with steps */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                Ações Imediatas
              </h3>
              <div className="space-y-2">
                {result.actions.map((action, i) => (
                  <Collapsible
                    key={i}
                    open={expandedAction === i}
                    onOpenChange={() => setExpandedAction(expandedAction === i ? null : i)}
                  >
                    <div className="rounded-lg bg-background-elevated border border-border overflow-hidden">
                      <CollapsibleTrigger className="w-full p-3 text-left">
                        <div className="flex items-start gap-2">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                            {i + 1}
                          </span>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">{action.title}</p>
                            <p className="text-xs text-foreground-muted mt-0.5">{action.description}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-1 text-xs text-primary/70">
                                <Clock className="w-3 h-3" />
                                {action.timeframe}
                              </div>
                              <span className="text-xs text-primary font-medium flex items-center gap-0.5">
                                {expandedAction === i ? "Fechar" : "Ver passo a passo"}
                                <ChevronDown className={`w-3 h-3 transition-transform ${expandedAction === i ? "rotate-180" : ""}`} />
                              </span>
                            </div>
                          </div>
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="px-3 pb-3 pt-0 border-t border-border/50">
                          <p className="text-xs font-semibold text-foreground mt-2 mb-2">Como implementar:</p>
                          <ol className="space-y-1.5">
                            {action.steps?.map((s, si) => (
                              <li key={si} className="flex gap-2 text-xs text-foreground-muted">
                                <span className="flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center mt-0.5">
                                  {si + 1}
                                </span>
                                <span>{s}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                ))}
              </div>
            </div>

            {/* Projection */}
            <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-xs font-medium text-primary mb-1">Projeção em 30 dias:</p>
              <p className="text-sm text-foreground">{result.projection}</p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <Button onClick={handleDownloadPDF} variant="outline" className="w-full gap-2">
                <Download className="w-4 h-4" />
                Baixar Plano Completo em PDF
              </Button>
              <Button
                onClick={() => { setOpen(false); window.location.href = productCTA.href; }}
                className="w-full gap-2 bg-gradient-to-r from-primary to-[hsl(var(--primary-glow))] hover:opacity-90"
              >
                {productCTA.label}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
