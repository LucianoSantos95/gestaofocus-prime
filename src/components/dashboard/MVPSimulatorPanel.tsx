import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Sparkles, CheckCircle2, Loader2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";
import {
  QUESTIONS,
  NICHES,
  TIME_OPTIONS,
  REVENUE_OPTIONS,
  generateAnonSessionId,
} from "@/lib/mvpSimulator";
import MvpResultStructured from "./MvpResultStructured";
import TalkToProBubble from "./TalkToProBubble";

type Step = "intro" | "business" | "questions" | "loading" | "result";

const PROFILE_LABELS: Record<string, { name: string; color: string; tagline: string }> = {
  concierge: { name: "Concierge Manual", color: "from-amber-500 to-orange-500", tagline: "MVP de 30 dias, 100% manual" },
  estruturado: { name: "Estruturado", color: "from-blue-500 to-cyan-500", tagline: "MVP de 60 dias, 1 canal + landing" },
  escalavel: { name: "Escalável", color: "from-emerald-500 to-teal-500", tagline: "MVP de 90 dias, automação + tráfego" },
};

const LOADING_MESSAGES = [
  "Analisando seu caixa e capacidade de execução...",
  "Calibrando o tamanho do MVP ao seu contexto...",
  "Calculando o tempo de implementação ideal...",
  "Montando seu plano personalizado...",
];

export default function MVPSimulatorPanel() {
  const [bootLoading, setBootLoading] = useState(true);
  const [step, setStep] = useState<Step>("intro");
  const [businessName, setBusinessName] = useState("");
  const [description, setDescription] = useState("");
  const [niche, setNiche] = useState<string>("Serviços");
  const [timeMarket, setTimeMarket] = useState<string>("Ainda não comecei");
  const [revenue, setRevenue] = useState<string>("R$0");
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [currentQ, setCurrentQ] = useState(0);
  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);
  const [result, setResult] = useState<any>(null);

  // On mount, check if user already has a simulation
  useEffect(() => {
    async function check() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setBootLoading(false); return; }

      const { data } = await supabase
        .from("mvp_simulations")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (data) {
        setResult({
          profile: data.profile,
          score: data.score,
          ai_result: data.ai_result,
          simulation_id: data.id,
        });
        setStep("result");
      }
      setBootLoading(false);
    }
    check();
  }, []);

  const startSimulation = () => {
    trackEvent("simulador_iniciado_dashboard", { event_category: "engagement" });
    setStep("business");
  };

  const submitBusiness = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim().length < 30) {
      toast.error("Descreva seu negócio em pelo menos 30 caracteres");
      return;
    }
    setStep("questions");
  };

  const answer = (val: boolean) => {
    const q = QUESTIONS[currentQ];
    const next = { ...answers, [q.id]: val };
    setAnswers(next);
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      runDiagnostic(next);
    }
  };

  const runDiagnostic = async (allAnswers: Record<string, boolean>) => {
    setStep("loading");
    const interval = setInterval(() => {
      setLoadingMsgIdx((i) => (i + 1) % LOADING_MESSAGES.length);
    }, 2200);

    try {
      const anonId = generateAnonSessionId();
      const { data, error } = await supabase.functions.invoke("generate-mvp-plan", {
        body: {
          anon_session_id: anonId,
          business_name: businessName.trim() || undefined,
          business_description: description.trim(),
          niche,
          time_in_market: timeMarket,
          revenue_range: revenue,
          answers: allAnswers,
        },
      });

      clearInterval(interval);
      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      // Claim to current user
      await supabase.functions.invoke("claim-simulation", { body: { anon_session_id: anonId } }).catch(() => {});

      setResult(data);
      trackEvent("simulador_concluido_dashboard", { event_category: "conversion", event_label: data.profile });
      setStep("result");
    } catch (e: any) {
      clearInterval(interval);
      console.error(e);
      toast.error(e?.message || "Erro ao gerar plano. Tente novamente.");
      setStep("questions");
    }
  };

  const restart = () => {
    setResult(null);
    setAnswers({});
    setCurrentQ(0);
    setBusinessName("");
    setDescription("");
    setStep("intro");
  };

  if (bootLoading) {
    return (
      <div className="rounded-2xl border border-card-border bg-background-elevated p-12 flex justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-card-border bg-background-elevated p-6 md:p-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative">
        <AnimatePresence mode="wait">
          {step === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-4 py-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1.5 text-xs font-medium text-primary">
                <Sparkles className="w-3.5 h-3.5" /> Diagnóstico gratuito · 5 minutos
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Simulador de MVP</h2>
              <p className="text-foreground-muted max-w-xl mx-auto">
                Responda 15 perguntas SIM/NÃO e receba, com IA, um plano enxuto de MVP, cronograma e custos.
              </p>
              <Button size="lg" className="btn-hero" onClick={startSimulation}>
                Começar simulação <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          )}

          {step === "business" && (
            <motion.form
              key="business"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              onSubmit={submitBusiness}
              className="space-y-6"
            >
              <div>
                <Progress value={20} className="h-1.5" />
                <p className="text-xs text-foreground-muted mt-2">Passo 1 de 3 · Sobre o negócio</p>
              </div>
              <div>
                <Label>Nome do negócio (opcional)</Label>
                <Input value={businessName} onChange={(e) => setBusinessName(e.target.value)} maxLength={120} placeholder="Ex: Acme Studio" />
              </div>
              <div>
                <Label>Em 3 frases: o que você vende, para quem e qual problema resolve *</Label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  minLength={30}
                  maxLength={2000}
                  rows={5}
                  required
                  placeholder="Ex: Vendo consultoria de marketing para pequenas agências..."
                />
                <p className="text-xs text-foreground-muted mt-1">{description.length} / 2000</p>
              </div>
              <div>
                <Label>Nicho</Label>
                <select value={niche} onChange={(e) => setNiche(e.target.value)} className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm">
                  {NICHES.map((n) => <option key={n}>{n}</option>)}
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label>Tempo de mercado</Label>
                  <select value={timeMarket} onChange={(e) => setTimeMarket(e.target.value)} className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm">
                    {TIME_OPTIONS.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <Label>Faturamento mensal</Label>
                  <select value={revenue} onChange={(e) => setRevenue(e.target.value)} className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm">
                    {REVENUE_OPTIONS.map((r) => <option key={r}>{r}</option>)}
                  </select>
                </div>
              </div>
              <Button type="submit" className="btn-hero w-full">Próximo <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </motion.form>
          )}

          {step === "questions" && (
            <motion.div
              key={`q-${currentQ}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="space-y-8"
            >
              <div>
                <Progress value={((currentQ + 1) / QUESTIONS.length) * 100} className="h-1.5" />
                <p className="text-xs text-foreground-muted mt-2">
                  Pergunta {currentQ + 1} de {QUESTIONS.length} · {QUESTIONS[currentQ].block}
                </p>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground text-center min-h-[4rem]">
                {QUESTIONS[currentQ].text}
              </h3>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <Button size="lg" variant="outline" className="h-20 text-lg border-2" onClick={() => answer(false)}>NÃO</Button>
                <Button size="lg" className="h-20 text-lg bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => answer(true)}>SIM</Button>
              </div>
              {currentQ > 0 && (
                <button onClick={() => setCurrentQ(currentQ - 1)} className="flex items-center gap-1 text-sm text-foreground-muted hover:text-foreground mx-auto">
                  <ArrowLeft className="w-3.5 h-3.5" /> voltar
                </button>
              )}
            </motion.div>
          )}

          {step === "loading" && (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-16 space-y-6">
              <Loader2 className="w-12 h-12 mx-auto animate-spin text-primary" />
              <AnimatePresence mode="wait">
                <motion.p key={loadingMsgIdx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="text-foreground-muted">
                  {LOADING_MESSAGES[loadingMsgIdx]}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          )}

          {step === "result" && result && (
            <motion.div key="result" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <MvpResultStructured result={result} businessName={businessName || result.business_name} />
              <div className="flex justify-center pt-2">
                <Button variant="outline" size="sm" onClick={restart}>
                  <RotateCcw className="w-4 h-4 mr-1" /> Refazer simulação
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {step === "result" && result && (
        <TalkToProBubble
          profile={result.profile}
          score={result.score}
          businessName={businessName || result.business_name}
          businessDescription={description || result.business_description}
          simulationId={result.simulation_id}
        />
      )}
    </div>
  );
}

