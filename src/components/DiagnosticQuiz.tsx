import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ClipboardCheck, ArrowRight, ArrowLeft, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { z } from "zod";

const emailSchema = z.string()
  .trim()
  .email({ message: "Email inválido" })
  .max(255, { message: "Email muito longo" });

interface QuizQuestion {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
    recommendation: string;
  }[];
}

const questions: QuizQuestion[] = [
  {
    id: "main_challenge",
    question: "Qual o seu principal desafio hoje?",
    options: [
      { 
        value: "processos", 
        label: "Organizar processos e rotinas da empresa",
        recommendation: "Hub Empresarial"
      },
      { 
        value: "produtividade", 
        label: "Aumentar minha produtividade pessoal",
        recommendation: "Sprint de Produtividade"
      },
      { 
        value: "equipe", 
        label: "Gerenciar equipe e projetos",
        recommendation: "Sistemas Notion"
      },
      { 
        value: "financeiro", 
        label: "Controlar finanças e crescimento",
        recommendation: "Hub Empresarial"
      }
    ]
  },
  {
    id: "company_size",
    question: "Qual o tamanho da sua operação?",
    options: [
      { 
        value: "solo", 
        label: "Apenas eu (autônomo/freelancer)",
        recommendation: "Sprint de Produtividade"
      },
      { 
        value: "small", 
        label: "2-10 pessoas",
        recommendation: "Hub Empresarial"
      },
      { 
        value: "medium", 
        label: "11-50 pessoas",
        recommendation: "Sistemas Notion"
      },
      { 
        value: "large", 
        label: "Mais de 50 pessoas",
        recommendation: "Consultoria Personalizada"
      }
    ]
  },
  {
    id: "urgency",
    question: "Quando precisa de resultados?",
    options: [
      { 
        value: "immediate", 
        label: "Urgente - Preciso resolver agora",
        recommendation: "Consultoria Imediata"
      },
      { 
        value: "soon", 
        label: "Nas próximas semanas",
        recommendation: "Sprint de Produtividade"
      },
      { 
        value: "planning", 
        label: "Estou planejando para os próximos meses",
        recommendation: "Hub Empresarial"
      }
    ]
  }
];

const DiagnosticQuiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const wasShown = sessionStorage.getItem("diagnosticQuizShown");
    if (wasShown) {
      setHasShown(true);
      return;
    }

    // Check if any popup was recently closed (within last 60 seconds)
    const lastPopupClosed = sessionStorage.getItem('lastPopupClosedTime');
    if (lastPopupClosed) {
      const timeSinceClosed = Date.now() - parseInt(lastPopupClosed);
      if (timeSinceClosed < 60000) {
        setHasShown(true);
        return;
      }
    }

    let timeoutId: NodeJS.Timeout;
    let hasTriggered = false;

    const handleScroll = () => {
      if (hasTriggered || hasShown) return;
      
      // Don't show if onboarding tour is active
      const onboardingActive = sessionStorage.getItem('onboardingTourActive');
      if (onboardingActive === 'true') return;
      
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent >= 50) {
        hasTriggered = true;
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("diagnosticQuizShown", "true");
        trackEvent("diagnostic_quiz_triggered", { trigger: "scroll", percent: scrollPercent });
      }
    };

    // Trigger after 30 seconds
    timeoutId = setTimeout(() => {
      if (!hasTriggered && !hasShown) {
        // Don't show if onboarding tour is active
        const onboardingActive = sessionStorage.getItem('onboardingTourActive');
        if (onboardingActive === 'true') return;
        
        hasTriggered = true;
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("diagnosticQuizShown", "true");
        trackEvent("diagnostic_quiz_triggered", { trigger: "time", seconds: 30 });
      }
    }, 30000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasShown]);

  const handleAnswerSelect = (value: string) => {
    const currentQuestion = questions[currentStep];
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      trackEvent("diagnostic_quiz_next", { step: currentStep + 1 });
    } else {
      setShowResults(true);
      trackEvent("diagnostic_quiz_completed", { answers });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getRecommendation = () => {
    const selectedOptions = Object.keys(answers).map(key => {
      const question = questions.find(q => q.id === key);
      return question?.options.find(opt => opt.value === answers[key])?.recommendation;
    });

    const recommendations = selectedOptions.reduce((acc, rec) => {
      if (rec) {
        acc[rec] = (acc[rec] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(recommendations).sort((a, b) => b[1] - a[1])[0][0];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    
    const validEmail = result.data;
    const encodedEmail = encodeURIComponent(validEmail);
    const recommendation = getRecommendation();
    
    trackEvent("diagnostic_quiz_email_captured", { 
      source: 'diagnostic_quiz',
      recommendation,
      answers 
    });
    
    window.open(
      `https://wa.me/5511916742443?text=Ol%C3%A1%2C%20completei%20o%20diagn%C3%B3stico%20e%20gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(recommendation)}.%20Meu%20email%3A%20${encodedEmail}`,
      '_blank'
    );
    
    // Mark popup as closed with timestamp
    sessionStorage.setItem('lastPopupClosedTime', Date.now().toString());
    setIsOpen(false);
  };

  const currentQuestion = questions[currentStep];
  const canProceed = answers[currentQuestion?.id];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-lg">
        <button 
          onClick={() => {
            sessionStorage.setItem('lastPopupClosedTime', Date.now().toString());
            setIsOpen(false);
            trackEvent("diagnostic_quiz_closed", { step: currentStep });
          }}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Fechar</span>
        </button>

        {!showResults ? (
          <>
            <DialogHeader>
              <div className="flex justify-center mb-4">
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow p-0.5 shadow-lg">
                  <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                    <ClipboardCheck className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="absolute w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow blur-xl opacity-30" />
              </div>
              
              <DialogTitle className="text-2xl text-center">
                Diagnóstico Rápido
              </DialogTitle>
              <DialogDescription className="text-center text-base">
                {currentStep + 1} de {questions.length} - Encontre a solução ideal para você
              </DialogDescription>
            </DialogHeader>

            <div className="w-full bg-secondary h-2 rounded-full mb-6">
              <div 
                className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">{currentQuestion.question}</h3>
              
              <RadioGroup 
                value={answers[currentQuestion.id]} 
                onValueChange={handleAnswerSelect}
                className="space-y-3"
              >
                {currentQuestion.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label 
                      htmlFor={option.value}
                      className="flex-1 cursor-pointer"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex gap-3 mt-6">
              {currentStep > 0 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              )}
              <Button
                onClick={handleNext}
                disabled={!canProceed}
                className="flex-1"
              >
                {currentStep === questions.length - 1 ? 'Ver Resultado' : 'Próxima'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl text-center">
                ✨ Sua Solução Ideal
              </DialogTitle>
              <DialogDescription className="text-center text-base">
                Com base nas suas respostas, recomendamos:
              </DialogDescription>
            </DialogHeader>

            <div className="my-6 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary-glow/10 border border-primary/20">
              <h3 className="text-2xl font-bold text-center mb-2 text-primary">
                {getRecommendation()}
              </h3>
              <p className="text-center text-foreground-muted">
                A solução perfeita para o seu momento atual
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
                {error && (
                  <p className="text-sm text-destructive mt-1">{error}</p>
                )}
              </div>

              <Button type="submit" className="w-full">
                Falar com Especialista no WhatsApp
              </Button>

              <p className="text-xs text-center text-foreground-muted">
                🎁 Receba uma análise personalizada gratuita
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DiagnosticQuiz;
