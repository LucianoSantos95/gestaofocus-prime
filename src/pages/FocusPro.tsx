import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DollarSign,
  Users,
  Megaphone,
  FolderKanban,
  UserCheck,
  ListChecks,
  Settings,
  BookOpen,
  ArrowRight,
  Download,
  LayoutGrid,
  Gift,
  XCircle,
  CheckCircle2,
  Sparkles,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import HubFocusHero from "@/components/hub-focus/HubFocusHero";
import HubFocusSocialProof from "@/components/hub-focus/HubFocusSocialProof";
import HubFocusModules from "@/components/hub-focus/HubFocusModules";
import HubFocusComparison from "@/components/hub-focus/HubFocusComparison";
import HubFocusFAQ from "@/components/hub-focus/HubFocusFAQ";
import HubFocusCTA from "@/components/hub-focus/HubFocusCTA";

const FocusPro = () => {
  return (
    <>
      <Helmet>
        <title>Hub Focus | Seu Negócio Organizado em Um Só Lugar</title>
        <meta
          name="description"
          content="Organize finanças, projetos, clientes e equipe em um só lugar. Evolução do template Notion com 5.000+ downloads. Beta gratuito."
        />
        <meta
          name="keywords"
          content="gestão empresarial, hub empresarial, organização, finanças, projetos, CRM, RH, produtividade"
        />
        <link rel="canonical" href="https://focusinteligente.com.br/focus-pro" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Hub Focus",
            description: "Plataforma de gestão empresarial completa. Organize finanças, projetos, clientes e equipe em um só lugar.",
            applicationCategory: "BusinessApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "BRL",
              description: "Beta gratuito",
            },
            brand: { "@type": "Brand", name: "Focus" },
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <HubFocusHero />
        <HubFocusSocialProof />
        <HubFocusModules />
        <HubFocusComparison />
        <HubFocusFAQ />
        <HubFocusCTA />
      </main>
    </>
  );
};

export default FocusPro;
