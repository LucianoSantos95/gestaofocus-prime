import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  MessageCircle,
  ExternalLink,
  User,
  Mail,
  Phone,
  Building2,
  Target,
  Search,
  Wallet,
  Calendar,
  FileText
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { z } from "zod";

// Zod validation schema for consultation form
const consultationSchema = z.object({
  fullName: z.string()
    .trim()
    .min(1, "Nome é obrigatório")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z.string()
    .trim()
    .email("E-mail inválido")
    .max(255, "E-mail deve ter no máximo 255 caracteres"),
  phone: z.string()
    .trim()
    .min(1, "Telefone é obrigatório")
    .max(20, "Telefone deve ter no máximo 20 caracteres")
    .regex(/^[0-9()\s\-+]+$/, "Telefone deve conter apenas números e caracteres válidos"),
  businessType: z.string()
    .trim()
    .min(1, "Tipo de negócio é obrigatório")
    .max(100, "Tipo de negócio deve ter no máximo 100 caracteres"),
  usesNotion: z.string()
    .trim()
    .min(1, "Experiência com Notion é obrigatória")
    .max(100, "Resposta deve ter no máximo 100 caracteres"),
  mainObjective: z.string()
    .trim()
    .min(1, "Objetivo principal é obrigatório")
    .max(200, "Objetivo deve ter no máximo 200 caracteres"),
  lookingFor: z.string()
    .trim()
    .min(1, "O que busca é obrigatório")
    .max(200, "Resposta deve ter no máximo 200 caracteres"),
  investmentRange: z.string()
    .trim()
    .min(1, "Faixa de investimento é obrigatória")
    .max(50, "Resposta deve ter no máximo 50 caracteres"),
  startTimeline: z.string()
    .trim()
    .min(1, "Prazo para início é obrigatório")
    .max(50, "Resposta deve ter no máximo 50 caracteres"),
  additionalDetails: z.string()
    .trim()
    .max(2000, "Detalhes devem ter no máximo 2000 caracteres")
    .optional()
    .default("")
});

interface ConsultationFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  businessType: string;
  usesNotion: string;
  mainObjective: string;
  lookingFor: string;
  investmentRange: string;
  startTimeline: string;
  additionalDetails: string;
}

const TOTAL_STEPS = 10;

const ConsultationFormModal = ({ open, onOpenChange }: ConsultationFormModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    businessType: "",
    usesNotion: "",
    mainObjective: "",
    lookingFor: "",
    investmentRange: "",
    startTimeline: "",
    additionalDetails: ""
  });

  const progress = (currentStep / TOTAL_STEPS) * 100;

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleOptionSelect = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Auto-advance after selection (with slight delay for UX)
    setTimeout(() => {
      if (currentStep < TOTAL_STEPS) {
        setCurrentStep(currentStep + 1);
      }
    }, 300);
  };

  const handleSubmit = async () => {
    // Validate with Zod schema
    const validationResult = consultationSchema.safeParse(formData);
    
    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      toast.error(firstError.message);
      return;
    }
    
    const validatedData = validationResult.data;

    setIsSubmitting(true);

    try {
      const challengeSummary = [
        `Negócio: ${validatedData.businessType}`,
        `WhatsApp: ${validatedData.phone}`,
        `Notion: ${validatedData.usesNotion}`,
        `Objetivo: ${validatedData.mainObjective}`,
        `Busca: ${validatedData.lookingFor}`,
        `Investimento: ${validatedData.investmentRange}`,
        `Prazo: ${validatedData.startTimeline}`,
        validatedData.additionalDetails ? `Detalhes: ${validatedData.additionalDetails}` : "",
      ].filter(Boolean).join(" | ").slice(0, 500);

      const { error } = await supabase.from("waitlist").insert({
        full_name: validatedData.fullName,
        email: validatedData.email.toLowerCase(),
        main_challenge: challengeSummary,
        source: "sob-medida-consultoria",
        interest: "software_sob_medida",
        wants_trial: false,
      });

      if (error) {
        if (error.code === "23505") {
          toast.error("Este email já está na lista de espera!");
          setIsSubmitting(false);
          return;
        }
        throw error;
      }

      trackEvent("consultation_form_submit", {
        business_type: validatedData.businessType,
        investment_range: validatedData.investmentRange
      });

      setFormSubmitted(true);
      toast.success("Você está na lista de espera!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form after close animation
    setTimeout(() => {
      setCurrentStep(1);
      setFormSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        businessType: "",
        usesNotion: "",
        mainObjective: "",
        lookingFor: "",
        investmentRange: "",
        startTimeline: "",
        additionalDetails: ""
      });
    }, 300);
  };

  const OptionButton = ({ 
    selected, 
    onClick, 
    children,
    shortcut 
  }: { 
    selected: boolean; 
    onClick: () => void; 
    children: React.ReactNode;
    shortcut?: string;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full p-4 text-left rounded-lg border-2 transition-all duration-200",
        "hover:border-primary hover:bg-primary/5",
        "flex items-center justify-between group",
        selected 
          ? "border-primary bg-primary/10 text-foreground" 
          : "border-border bg-card/50 text-foreground-muted"
      )}
    >
      <span className="flex items-center gap-3">
        <span className={cn(
          "w-6 h-6 rounded border-2 flex items-center justify-center text-xs font-medium transition-colors",
          selected 
            ? "border-primary bg-primary text-primary-foreground" 
            : "border-muted-foreground/30 text-muted-foreground group-hover:border-primary"
        )}>
          {shortcut || "○"}
        </span>
        {children}
      </span>
      {selected && <CheckCircle className="w-5 h-5 text-primary" />}
    </button>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 text-primary mb-2">
              <User className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">Identificação</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Qual é o seu nome completo?
            </h2>
            <Input
              placeholder="Digite seu nome completo"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="text-lg py-6 bg-card/50 border-border focus:border-primary"
              autoFocus
            />
            <Button 
              onClick={handleNext}
              disabled={!formData.fullName}
              className="btn-hero"
            >
              Continuar
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 text-primary mb-2">
              <Mail className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">Contato</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Qual é o seu melhor e-mail?
            </h2>
            <Input
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="text-lg py-6 bg-card/50 border-border focus:border-primary"
              autoFocus
            />
            <Button 
              onClick={handleNext}
              disabled={!formData.email}
              className="btn-hero"
            >
              Continuar
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 text-primary mb-2">
              <Phone className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">WhatsApp</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Qual é o seu WhatsApp?
            </h2>
            <p className="text-foreground-muted">Usaremos para enviar o diagnóstico personalizado.</p>
            <Input
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="text-lg py-6 bg-card/50 border-border focus:border-primary"
              autoFocus
            />
            <Button 
              onClick={handleNext}
              disabled={!formData.phone}
              className="btn-hero"
            >
              Continuar
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 text-primary mb-2">
              <Building2 className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">Negócio</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Qual tipo de negócio você tem?
            </h2>
            <div className="space-y-3">
              {[
                { value: "Freelance", shortcut: "A" },
                { value: "Empresa pequena", shortcut: "B" },
                { value: "Média empresa", shortcut: "C" },
                { value: "Outro", shortcut: "D" }
              ].map((option) => (
                <OptionButton
                  key={option.value}
                  selected={formData.businessType === option.value}
                  onClick={() => handleOptionSelect("businessType", option.value)}
                  shortcut={option.shortcut}
                >
                  {option.value}
                </OptionButton>
              ))}
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 text-primary mb-2">
              <Search className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">Experiência</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Você já usa o Notion?
            </h2>
            <div className="space-y-3">
              {[
                { value: "Sim, diariamente", shortcut: "A" },
                { value: "Já testei mas não uso sempre", shortcut: "B" },
                { value: "Ainda estou conhecendo", shortcut: "C" }
              ].map((option) => (
                <OptionButton
                  key={option.value}
                  selected={formData.usesNotion === option.value}
                  onClick={() => handleOptionSelect("usesNotion", option.value)}
                  shortcut={option.shortcut}
                >
                  {option.value}
                </OptionButton>
              ))}
            </div>
          </div>
        );
      
      case 6:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 text-primary mb-2">
              <Target className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">Objetivo</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Qual seu principal objetivo com o sistema?
            </h2>
            <div className="space-y-3">
              {[
                { value: "Produtividade Pessoal", shortcut: "A" },
                { value: "Gestão de Projetos", shortcut: "B" },
                { value: "Controle Financeiro", shortcut: "C" },
                { value: "Sistema Empresarial Completo", shortcut: "D" },
                { value: "Outro", shortcut: "E" }
              ].map((option) => (
                <OptionButton
                  key={option.value}
                  selected={formData.mainObjective === option.value}
                  onClick={() => handleOptionSelect("mainObjective", option.value)}
                  shortcut={option.shortcut}
                >
                  {option.value}
                </OptionButton>
              ))}
            </div>
          </div>
        );
      
      case 7:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 text-primary mb-2">
              <Search className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">Busca</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              O que você está buscando?
            </h2>
            <div className="space-y-3">
              {[
                { value: "Algo gratuito para começar", shortcut: "A" },
                { value: "Um template pronto e acessível", shortcut: "B" },
                { value: "Um sistema personalizado sob medida", shortcut: "C" }
              ].map((option) => (
                <OptionButton
                  key={option.value}
                  selected={formData.lookingFor === option.value}
                  onClick={() => handleOptionSelect("lookingFor", option.value)}
                  shortcut={option.shortcut}
                >
                  {option.value}
                </OptionButton>
              ))}
            </div>
          </div>
        );
      
      case 8:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 text-primary mb-2">
              <Wallet className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">Investimento</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Qual faixa de investimento você pretende?
            </h2>
            <div className="space-y-3">
              {[
                { value: "Até R$500", shortcut: "A" },
                { value: "R$500 a R$1.500", shortcut: "B" },
                { value: "R$1.500 a R$3.000", shortcut: "C" },
                { value: "Acima de R$3.000", shortcut: "D" }
              ].map((option) => (
                <OptionButton
                  key={option.value}
                  selected={formData.investmentRange === option.value}
                  onClick={() => handleOptionSelect("investmentRange", option.value)}
                  shortcut={option.shortcut}
                >
                  {option.value}
                </OptionButton>
              ))}
            </div>
          </div>
        );
      
      case 9:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 text-primary mb-2">
              <Calendar className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">Prazo</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Quando você pretende iniciar?
            </h2>
            <div className="space-y-3">
              {[
                { value: "Imediatamente", shortcut: "A" },
                { value: "Em até 30 dias", shortcut: "B" },
                { value: "1–3 meses", shortcut: "C" },
                { value: "Só explorando por enquanto", shortcut: "D" }
              ].map((option) => (
                <OptionButton
                  key={option.value}
                  selected={formData.startTimeline === option.value}
                  onClick={() => handleOptionSelect("startTimeline", option.value)}
                  shortcut={option.shortcut}
                >
                  {option.value}
                </OptionButton>
              ))}
            </div>
          </div>
        );
      
      case 10:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 text-primary mb-2">
              <FileText className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">Detalhes</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Há algo específico que você deseja resolver?
            </h2>
            <p className="text-foreground-muted">Opcional, mas nos ajuda a personalizar sua proposta.</p>
            <Textarea
              placeholder="Descreva seus principais desafios ou necessidades..."
              value={formData.additionalDetails}
              onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
              className="min-h-[120px] text-base bg-card/50 border-border focus:border-primary"
              autoFocus
            />
            <Button 
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn-hero w-full"
            >
              {isSubmitting ? "Enviando..." : "Enviar diagnóstico"}
              <CheckCircle className="w-5 h-5 ml-2" />
            </Button>
          </div>
        );
      
      default:
        return null;
    }
  };

  if (formSubmitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-xl bg-background border-border p-0 overflow-hidden">
          <DialogTitle className="sr-only">Formulário enviado com sucesso</DialogTitle>
          <div className="p-8 md:p-12 text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              🎉 Formulário enviado com sucesso!
            </h2>
            <p className="text-foreground-muted mb-8">
              Entraremos em contato em breve com diagnóstico personalizado para sua operação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="btn-hero"
                onClick={() => window.open("https://wa.me/5500000000000?text=Olá! Acabei de preencher o formulário de diagnóstico no site Focus.", "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar pelo WhatsApp
              </Button>
              <Button
                variant="outline"
                className="btn-secondary"
                onClick={() => window.open("https://www.notion.com/pt/@focusgestao", "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver portfólio
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl bg-background border-border p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">Diagnóstico para Sistema Personalizado</DialogTitle>
        
        {/* Progress Bar */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-foreground-muted">
              Pergunta {currentStep} de {TOTAL_STEPS}
            </span>
            <span className="text-sm text-primary font-medium">
              {Math.round(progress)}% completo
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        {/* Form Content */}
        <div className="p-6 md:p-8">
          {renderStep()}
        </div>
        
        {/* Navigation */}
        <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm border-t border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="text-foreground-muted hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <span className="text-xs text-muted-foreground">
              Pressione Enter ↵ para avançar
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationFormModal;
