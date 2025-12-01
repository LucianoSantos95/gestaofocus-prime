import { Helmet } from "react-helmet";
import ModernHero from "@/components/home/ModernHero";
import TargetAudience from "@/components/home/TargetAudience";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import LeadMagnet from "@/components/home/LeadMagnet";
import AboutSection from "@/components/home/AboutSection";
import BlogPreview from "@/components/home/BlogPreview";
import FinalCTA from "@/components/home/FinalCTA";
import DiagnosticQuiz from "@/components/DiagnosticQuiz";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import OnboardingTour from "@/components/OnboardingTour";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Focus Inteligente - Sistemas em Notion para Produtividade e Gestão Empresarial</title>
        <meta name="description" content="Templates profissionais e consultoria em Notion para transformar processos, projetos e rotinas em resultados reais. Organize sua empresa em dias." />
        <meta property="og:title" content="Focus Inteligente - Sistemas em Notion para Produtividade" />
        <meta property="og:description" content="Templates profissionais e consultoria personalizada para aumentar produtividade e organizar sua empresa." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://focusinteligente.com.br" />
      </Helmet>

      {/* Hero Section */}
      <ModernHero />

      {/* Target Audience */}
      <TargetAudience />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Lead Magnet */}
      <LeadMagnet />

      {/* About Section */}
      <AboutSection />

      {/* Blog Preview */}
      <BlogPreview />

      {/* Final CTA */}
      <FinalCTA />

      {/* Engagement Tools */}
      <DiagnosticQuiz />
      <ExitIntentPopup />
      <OnboardingTour />
    </div>
  );
};

export default Index;
