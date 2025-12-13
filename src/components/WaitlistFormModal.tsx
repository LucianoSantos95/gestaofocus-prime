import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { z } from "zod";

const waitlistSchema = z.object({
  email: z.string().trim().email({ message: "Email inválido" }).max(255),
  fullName: z.string().trim().min(2, { message: "Nome muito curto" }).max(100),
  mainChallenge: z.string().trim().max(500).optional(),
});

interface WaitlistFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
}

const WaitlistFormModal = ({ open, onOpenChange, source = "focus-pro" }: WaitlistFormModalProps) => {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mainChallenge, setMainChallenge] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const totalSteps = 3;

  // Auto-focus on step change
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        if (step === 3) {
          textareaRef.current?.focus();
        } else {
          inputRef.current?.focus();
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [step, open]);

  const validateStep = () => {
    setErrors({});
    
    if (step === 1) {
      if (fullName.trim().length < 2) {
        setErrors({ fullName: "Por favor, insira seu nome" });
        return false;
      }
    }
    
    if (step === 2) {
      const emailResult = z.string().email().safeParse(email.trim());
      if (!emailResult.success) {
        setErrors({ email: "Por favor, insira um email válido" });
        return false;
      }
    }
    
    return true;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (step < totalSteps) {
        handleNext();
      } else {
        handleSubmit();
      }
    }
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    setIsLoading(true);

    try {
      const validatedData = waitlistSchema.parse({
        email: email.trim(),
        fullName: fullName.trim(),
        mainChallenge: mainChallenge.trim() || undefined,
      });

      const { error } = await supabase.from("waitlist").insert({
        email: validatedData.email,
        full_name: validatedData.fullName,
        main_challenge: validatedData.mainChallenge || null,
        source: source,
        interest: "focus-pro",
        wants_trial: true,
      });

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Email já cadastrado",
            description: "Este email já está na nossa lista de espera!",
            variant: "default",
          });
          setIsSuccess(true);
        } else {
          throw error;
        }
      } else {
        setIsSuccess(true);
        toast({
          title: "Você está na lista!",
          description: "Em breve você receberá novidades exclusivas.",
        });
      }
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        setErrors({ [firstError.path[0]]: firstError.message });
      } else {
        toast({
          title: "Erro ao cadastrar",
          description: "Tente novamente em alguns instantes.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(1);
      setFullName("");
      setEmail("");
      setMainChallenge("");
      setIsSuccess(false);
      setErrors({});
    }, 300);
  };

  const progressWidth = (step / totalSteps) * 100;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden border-primary/20 bg-background">
        <DialogTitle className="sr-only">Entrar na lista de espera</DialogTitle>
        
        {/* Progress bar */}
        <div className="h-1.5 bg-muted/50">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
            style={{ width: `${progressWidth}%` }}
          />
        </div>

        <div className="p-6 sm:p-8 min-h-[380px] flex flex-col">
          {isSuccess ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in-50 zoom-in-95 duration-500">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Você está na lista! 🎉</h3>
                <p className="text-muted-foreground max-w-sm">
                  Fique de olho no seu email. Você será avisado em primeira mão sobre a Focus Pro.
                </p>
              </div>
              <Button onClick={handleClose} variant="outline" className="mt-4">
                Fechar
              </Button>
            </div>
          ) : (
            <>
              {/* Step 1: Name */}
              {step === 1 && (
                <div className="flex-1 flex flex-col justify-center animate-in fade-in-50 slide-in-from-right-4 duration-300">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span>Passo {step} de {totalSteps}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                        Qual é o seu nome?
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      <Input
                        ref={inputRef}
                        type="text"
                        placeholder="Seu nome completo"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors({});
                        }}
                        onKeyDown={handleKeyDown}
                        className={`text-lg h-14 bg-muted/30 border-2 transition-colors ${
                          errors.fullName 
                            ? "border-destructive focus:border-destructive" 
                            : "border-transparent focus:border-primary"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-sm text-destructive animate-in fade-in-50 slide-in-from-top-1">{errors.fullName}</p>
                      )}
                      <p className="text-xs text-muted-foreground">
                        Pressione Enter para continuar
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Email */}
              {step === 2 && (
                <div className="flex-1 flex flex-col justify-center animate-in fade-in-50 slide-in-from-right-4 duration-300">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span>Passo {step} de {totalSteps}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                        Qual seu melhor email?
                      </h3>
                      <p className="text-muted-foreground">
                        Vamos te avisar em primeira mão sobre o lançamento.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <Input
                        ref={inputRef}
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({});
                        }}
                        onKeyDown={handleKeyDown}
                        className={`text-lg h-14 bg-muted/30 border-2 transition-colors ${
                          errors.email 
                            ? "border-destructive focus:border-destructive" 
                            : "border-transparent focus:border-primary"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive animate-in fade-in-50 slide-in-from-top-1">{errors.email}</p>
                      )}
                      <p className="text-xs text-muted-foreground">
                        Pressione Enter para continuar
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Challenge (optional) */}
              {step === 3 && (
                <div className="flex-1 flex flex-col justify-center animate-in fade-in-50 slide-in-from-right-4 duration-300">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span>Passo {step} de {totalSteps} • Opcional</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                        Qual seu maior desafio?
                      </h3>
                      <p className="text-muted-foreground">
                        Nos ajuda a criar algo melhor pra você.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <Textarea
                        ref={textareaRef}
                        placeholder="Ex: Organizar meu financeiro, estruturar processos, ter mais tempo..."
                        value={mainChallenge}
                        onChange={(e) => setMainChallenge(e.target.value)}
                        className="min-h-[100px] text-base bg-muted/30 border-2 border-transparent focus:border-primary resize-none transition-colors"
                      />
                      <p className="text-xs text-muted-foreground">
                        Pode pular se preferir
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-border/30">
                {step > 1 ? (
                  <Button 
                    variant="ghost" 
                    onClick={handleBack} 
                    disabled={isLoading}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Button>
                ) : (
                  <div />
                )}

                {step < totalSteps ? (
                  <Button onClick={handleNext} className="ml-auto gap-2">
                    Continuar
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit} 
                    disabled={isLoading} 
                    className="ml-auto gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Entrar na lista
                        <CheckCircle2 className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistFormModal;
