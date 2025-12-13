import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
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

  const totalSteps = 3;

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
    if (e.key === "Enter" && step < totalSteps) {
      e.preventDefault();
      handleNext();
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
    // Reset form after animation
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
      <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden border-primary/20">
        <DialogTitle className="sr-only">Entrar na lista de espera</DialogTitle>
        
        {/* Progress bar */}
        <div className="h-1 bg-muted">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progressWidth}%` }}
          />
        </div>

        <div className="p-8 min-h-[350px] flex flex-col">
          {isSuccess ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in-50 duration-500">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Você está na lista!</h3>
                <p className="text-muted-foreground">
                  Fique de olho no seu email. Em breve você receberá novidades exclusivas sobre a Focus Pro.
                </p>
              </div>
              <Button onClick={handleClose} className="mt-4">
                Fechar
              </Button>
            </div>
          ) : (
            <>
              {/* Step 1: Name */}
              {step === 1 && (
                <div className="flex-1 flex flex-col justify-center animate-in fade-in-50 slide-in-from-right-10 duration-300">
                  <div className="space-y-6">
                    <div>
                      <span className="text-sm text-muted-foreground">Passo 1 de {totalSteps}</span>
                      <h3 className="text-2xl font-bold mt-2">Qual é o seu nome?</h3>
                    </div>
                    
                    <div className="space-y-2">
                      <Input
                        type="text"
                        placeholder="Digite seu nome completo"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="text-lg py-6 border-2 focus:border-primary"
                        autoFocus
                      />
                      {errors.fullName && (
                        <p className="text-sm text-destructive">{errors.fullName}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Email */}
              {step === 2 && (
                <div className="flex-1 flex flex-col justify-center animate-in fade-in-50 slide-in-from-right-10 duration-300">
                  <div className="space-y-6">
                    <div>
                      <span className="text-sm text-muted-foreground">Passo 2 de {totalSteps}</span>
                      <h3 className="text-2xl font-bold mt-2">Qual é o seu melhor email?</h3>
                      <p className="text-muted-foreground mt-1">Vamos usar para te avisar do lançamento.</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="text-lg py-6 border-2 focus:border-primary"
                        autoFocus
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Challenge (optional) */}
              {step === 3 && (
                <div className="flex-1 flex flex-col justify-center animate-in fade-in-50 slide-in-from-right-10 duration-300">
                  <div className="space-y-6">
                    <div>
                      <span className="text-sm text-muted-foreground">Passo 3 de {totalSteps}</span>
                      <h3 className="text-2xl font-bold mt-2">Qual seu maior desafio hoje?</h3>
                      <p className="text-muted-foreground mt-1">Opcional, mas nos ajuda a criar algo melhor pra você.</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Textarea
                        placeholder="Ex: Organizar meu financeiro, estruturar processos..."
                        value={mainChallenge}
                        onChange={(e) => setMainChallenge(e.target.value)}
                        className="min-h-[100px] text-lg border-2 focus:border-primary resize-none"
                        autoFocus
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between items-center mt-8 pt-4 border-t border-border/50">
                {step > 1 ? (
                  <Button variant="ghost" onClick={handleBack} disabled={isLoading}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Button>
                ) : (
                  <div />
                )}

                {step < totalSteps ? (
                  <Button onClick={handleNext} className="ml-auto">
                    Continuar
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={isLoading} className="ml-auto">
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Entrar na lista
                        <CheckCircle2 className="w-4 h-4 ml-2" />
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
