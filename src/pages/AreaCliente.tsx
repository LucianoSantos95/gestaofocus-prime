import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Sparkles, CheckCircle2, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import GoogleSignInButton from "@/components/auth/GoogleSignInButton";
import { trackEvent } from "@/lib/analytics";
import {
  QUESTIONS,
  NICHES,
  TIME_OPTIONS,
  REVENUE_OPTIONS,
  generateAnonSessionId,
} from "@/lib/mvpSimulator";

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
  "Montando seu mapa mental personalizado...",
  "Estimando o tempo de maturação do negócio...",
];

export default function AreaCliente() {
  const navigate = useNavigate();
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

  const startSimulation = () => {
    trackEvent("simulador_iniciado", { event_category: "engagement" });
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
      const utmSource = new URLSearchParams(window.location.search).get("utm_source") || undefined;

      const { data, error } = await supabase.functions.invoke("generate-mvp-plan", {
        body: {
          anon_session_id: anonId,
          business_name: businessName.trim() || undefined,
          business_description: description.trim(),
          niche,
          time_in_market: timeMarket,
          revenue_range: revenue,
          answers: allAnswers,
          utm_source: utmSource,
        },
      });

      clearInterval(interval);

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setResult(data);
      localStorage.setItem("mvp_last_simulation_id", data.simulation_id);
      trackEvent("simulador_concluido", { event_category: "conversion", event_label: data.profile });
      setStep("result");
    } catch (e: any) {
      clearInterval(interval);
      console.error(e);
      toast.error(e?.message || "Erro ao gerar plano. Tente novamente.");
      setStep("questions");
    }
  };

  const goLogin = () => navigate("/auth/login");

  return (
    <>
      <SEOHead
        title="Área do Cliente — Simulador de MVP gratuito"
        description="Antes de entrar, descubra qual MVP cabe no seu negócio. Diagnóstico gratuito com IA em 5 minutos."
        canonical="/area-cliente"
      />
      <div className="min-h-screen bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Top bar */}
        <header className="relative z-10 border-b border-card-border">
          <div className="container-focus flex items-center justify-between py-4">
            <Link to="/">
              <img src="/lovable-uploads/focus-logo.png" alt="Focus" className="h-8" />
            </Link>
            <Button variant="ghost" onClick={goLogin}>
              Já tenho conta →
            </Button>
          </div>
        </header>

        <main className="relative z-10 container-focus py-12 md:py-16 max-w-3xl">
          <AnimatePresence mode="wait">
            {step === "intro" && <Intro key="intro" onStart={startSimulation} />}

            {step === "business" && (
              <BusinessForm
                key="business"
                businessName={businessName}
                setBusinessName={setBusinessName}
                description={description}
                setDescription={setDescription}
                niche={niche}
                setNiche={setNiche}
                timeMarket={timeMarket}
                setTimeMarket={setTimeMarket}
                revenue={revenue}
                setRevenue={setRevenue}
                onSubmit={submitBusiness}
              />
            )}

            {step === "questions" && (
              <QuestionScreen
                key={`q-${currentQ}`}
                question={QUESTIONS[currentQ]}
                index={currentQ}
                total={QUESTIONS.length}
                onAnswer={answer}
                onBack={() => currentQ > 0 && setCurrentQ(currentQ - 1)}
              />
            )}

            {step === "loading" && <LoadingScreen key="loading" message={LOADING_MESSAGES[loadingMsgIdx]} />}

            {step === "result" && result && <ResultPaywall key="result" result={result} />}
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}

/* --- Sub-components --- */

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="text-center space-y-6"
    >
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1.5 text-xs font-medium text-primary">
        <Sparkles className="w-3.5 h-3.5" />
        Diagnóstico gratuito · 5 minutos
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
        Antes de entrar, descubra qual MVP cabe no seu negócio
      </h1>
      <p className="text-lg text-foreground-muted max-w-xl mx-auto">
        Responda 15 perguntas SIM/NÃO e receba, com IA, um plano enxuto de MVP, cronograma e o tempo
        que seu negócio leva para amadurecer.
      </p>
      <Button size="lg" className="btn-hero" onClick={onStart}>
        Começar simulação gratuita
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
      <p className="text-xs text-foreground-muted">100% gratuito · Sem cartão · Resultado personalizado</p>
    </motion.div>
  );
}

function BusinessForm(props: any) {
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      onSubmit={props.onSubmit}
      className="space-y-6 rounded-2xl border border-card-border bg-background-elevated p-8"
    >
      <div>
        <Progress value={20} className="h-1.5" />
        <p className="text-xs text-foreground-muted mt-2">Passo 1 de 3 · Sobre o negócio</p>
      </div>

      <div>
        <Label>Nome do negócio (opcional)</Label>
        <Input value={props.businessName} onChange={(e) => props.setBusinessName(e.target.value)} maxLength={120} placeholder="Ex: Acme Studio" />
      </div>

      <div>
        <Label>Em 3 frases: o que você vende, para quem e qual problema resolve *</Label>
        <Textarea
          value={props.description}
          onChange={(e) => props.setDescription(e.target.value)}
          minLength={30}
          maxLength={2000}
          rows={5}
          required
          placeholder="Ex: Vendo consultoria de marketing para pequenas agências que não conseguem reter clientes..."
        />
        <p className="text-xs text-foreground-muted mt-1">{props.description.length} / 2000</p>
      </div>

      <div>
        <Label>Nicho</Label>
        <select
          value={props.niche}
          onChange={(e) => props.setNiche(e.target.value)}
          className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          {NICHES.map((n) => <option key={n}>{n}</option>)}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label>Tempo de mercado</Label>
          <select
            value={props.timeMarket}
            onChange={(e) => props.setTimeMarket(e.target.value)}
            className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            {TIME_OPTIONS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <Label>Faturamento mensal</Label>
          <select
            value={props.revenue}
            onChange={(e) => props.setRevenue(e.target.value)}
            className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            {REVENUE_OPTIONS.map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>
      </div>

      <Button type="submit" className="btn-hero w-full">
        Próximo <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </motion.form>
  );
}

function QuestionScreen({ question, index, total, onAnswer, onBack }: any) {
  const progress = ((index + 1) / total) * 100;
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className="space-y-8"
    >
      <div>
        <Progress value={progress} className="h-1.5" />
        <p className="text-xs text-foreground-muted mt-2">
          Pergunta {index + 1} de {total} · {question.block}
        </p>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center min-h-[4rem]">{question.text}</h2>

      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        <Button
          size="lg"
          variant="outline"
          className="h-20 text-lg border-2 hover:border-foreground-muted"
          onClick={() => onAnswer(false)}
        >
          NÃO
        </Button>
        <Button
          size="lg"
          className="h-20 text-lg bg-emerald-600 hover:bg-emerald-700 text-white"
          onClick={() => onAnswer(true)}
        >
          SIM
        </Button>
      </div>

      {index > 0 && (
        <button onClick={onBack} className="flex items-center gap-1 text-sm text-foreground-muted hover:text-foreground mx-auto">
          <ArrowLeft className="w-3.5 h-3.5" /> voltar
        </button>
      )}
    </motion.div>
  );
}

function LoadingScreen({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center py-20 space-y-6"
    >
      <Loader2 className="w-12 h-12 mx-auto animate-spin text-primary" />
      <AnimatePresence mode="wait">
        <motion.p
          key={message}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="text-lg text-foreground-muted"
        >
          {message}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
}

function ResultPaywall({ result }: { result: any }) {
  const profile = PROFILE_LABELS[result.profile] || PROFILE_LABELS.estruturado;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Veredict (visible) */}
      <div className="rounded-2xl border border-card-border bg-background-elevated p-8 space-y-4">
        <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${profile.color} px-4 py-1.5 text-sm font-semibold text-white`}>
          <CheckCircle2 className="w-4 h-4" /> Perfil: {profile.name}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Seu diagnóstico está pronto</h2>
        <p className="text-foreground-muted">{profile.tagline} · Pontuação {result.score}/15</p>
        <p className="text-foreground leading-relaxed">{result.ai_result?.veredito}</p>
      </div>

      {/* Paywall */}
      <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary-glow/5 p-8 space-y-4 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-medium uppercase tracking-wider">Liberar plano completo</span>
          </div>
          <h3 className="text-2xl font-bold text-foreground">
            Crie sua conta grátis para ver seu plano completo
          </h3>
          <ul className="space-y-2 text-sm text-foreground-muted my-4">
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Mapa mental do seu MVP (visual)</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Cronograma semana a semana com custos</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Tempo médio de maturação do negócio</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Quadro de ideias interativo (estilo Obsidian)</li>
          </ul>

          <div className="space-y-3 pt-2">
            <GoogleSignInButton redirectAfterAuth="/dashboard" label="Criar conta com Google" />
            <Button asChild className="btn-hero w-full">
              <Link to="/auth/signup">Criar conta com email</Link>
            </Button>
            <p className="text-xs text-center text-foreground-muted">
              Já tem conta?{" "}
              <Link to="/auth/login" className="text-primary hover:underline">Entrar</Link>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
