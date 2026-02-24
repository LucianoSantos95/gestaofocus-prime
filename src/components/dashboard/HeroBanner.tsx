import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/15 via-primary/10 to-primary-glow/10 border border-primary/20 p-8 lg:p-12">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-glow/10 rounded-full blur-[80px]" />
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-primary/20 text-primary text-xs font-medium px-3 py-1.5 rounded-full mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Destaque
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
          Domine o Financeiro da sua Empresa
        </h2>
        <p className="text-foreground-muted mb-6 max-w-xl">
          Conheça o Hub Empresarial — sistema completo de gestão com CRM, finanças, projetos e muito mais.
        </p>
        <Button className="btn-hero group" asChild>
          <a href="https://appfocus.lovable.app/" target="_blank" rel="noopener noreferrer">
            Acessar Hub Empresarial
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </div>
  );
}
