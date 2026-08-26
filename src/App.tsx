import { lazy, Suspense } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import { useAnalytics } from "./hooks/useAnalytics";
import { usePageTracking } from "./hooks/usePageTracking";
import ScrollToTop from "./components/ScrollToTop";
import OptionalFeatureBoundary from "./components/OptionalFeatureBoundary";

// Defer non-critical UI to keep the initial bundle (and TBT) small
const ChatWidget = lazy(() => import("./components/ChatWidget"));
const CookieConsent = lazy(() => import("./components/CookieConsent"));
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useMagneticButtons, useSpotlightCards } from "./hooks/useInteractiveEffects";
import LeadFormModal from "./components/LeadFormModal";

// Lazy load pages
const SolucoesSobMedida = lazy(() => import("./pages/SolucoesSobMedida"));
const AboutFocus = lazy(() => import("./pages/AboutFocus"));
const Privacidade = lazy(() => import("./pages/Privacidade"));
const TermosUso = lazy(() => import("./pages/TermosUso"));
const Cookies = lazy(() => import("./pages/Cookies"));
const CentralAjuda = lazy(() => import("./pages/CentralAjuda"));
const StatusPlataforma = lazy(() => import("./pages/StatusPlataforma"));

const FAQ = lazy(() => import("./pages/FAQ"));
const Login = lazy(() => import("./pages/Login"));
const OAuthConsent = lazy(() => import("./pages/OAuthConsent"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const AnalyticsProvider = () => {
  useAnalytics();
  usePageTracking();
  return null;
};

const PageLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background">
    <div className="relative">
      <div className="w-12 h-12 rounded-full border-2 border-surface-border border-t-primary animate-spin" />
      <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-transparent border-t-primary/30 animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }} />
    </div>
    <p className="mt-6 text-foreground-muted text-sm font-medium tracking-wide animate-pulse">Carregando...</p>
  </div>
);

// Layout wrapper that hides Nav/Footer on the embedded-layout routes
function AppLayout() {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  useScrollReveal();
  useMagneticButtons(location.pathname);
  useSpotlightCards(location.pathname);
  // Páginas que já trazem Nav/Footer embutidos no próprio componente
  const hasOwnChrome = location.pathname === "/solucoes-sob-medida";

  const showNav = !hasOwnChrome;
  const showFooter = !hasOwnChrome;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {showNav && <Navigation />}
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          {/* Troca de rota é interação de dezenas de vezes por dia: tem que ser
              quase imperceptível. Antes eram 380ms de saída + 380ms de entrada
              = 760ms de espera em CADA navegação, com deslocamento vertical.
              Agora é só crossfade de 180ms (360ms no total com mode="wait").
              Sem translateY: mover a página inteira a cada clique é o que
              fazia a navegação parecer pesada. */}
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solucoes-sob-medida" element={<SolucoesSobMedida />} />

            {/* ===== REDIRECTS 301 — soft 404 fixes ===== */}
            {/* Blog e páginas removidas → home/consultoria */}
            <Route path="/blog/*" element={<Navigate to="/" replace />} />
            {/* Produtos antigos e Hub Empresarial (removido) → Consultoria */}
            <Route path="/controle-financeiro-pro" element={<Navigate to="/solucoes-sob-medida" replace />} />
            <Route path="/focus-pro" element={<Navigate to="/solucoes-sob-medida" replace />} />
            <Route path="/focus-club" element={<Navigate to="/solucoes-sob-medida" replace />} />
            <Route path="/sistemas-gratuitos" element={<Navigate to="/solucoes-sob-medida" replace />} />
            <Route path="/sistemas-notion" element={<Navigate to="/solucoes-sob-medida" replace />} />
            <Route path="/hub-empresarial" element={<Navigate to="/solucoes-sob-medida" replace />} />
            <Route path="/advisor" element={<Navigate to="/" replace />} />
            {/* Seção de cases → Soluções sob medida */}
            <Route path="/cases" element={<Navigate to="/solucoes-sob-medida" replace />} />
            {/* Rotas antigas sem página correspondente */}
            <Route path="/metodofocus" element={<Navigate to="/solucoes-sob-medida" replace />} />
            <Route path="/para-ias" element={<Navigate to="/" replace />} />
            <Route path="/docs" element={<Navigate to="/ajuda" replace />} />
            <Route path="/auth/login" element={<Navigate to="/login" replace />} />

            {/* Info Pages */}
            <Route path="/sobre" element={<AboutFocus />} />
            <Route path="/sobre-focus" element={<Navigate to="/sobre" replace />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos" element={<TermosUso />} />
            <Route path="/termos-uso" element={<Navigate to="/termos" replace />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/ajuda" element={<CentralAjuda />} />
            <Route path="/status" element={<StatusPlataforma />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/.lovable/oauth/consent" element={<OAuthConsent />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      {showFooter && <Footer />}
      <LeadFormModal />
      <OptionalFeatureBoundary featureName="chat widget">
        <Suspense fallback={null}>
          <ChatWidget />
        </Suspense>
      </OptionalFeatureBoundary>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsProvider />
        <ScrollToTop />
        <OptionalFeatureBoundary featureName="cookie consent">
          <Suspense fallback={null}>
            <CookieConsent />
          </Suspense>
        </OptionalFeatureBoundary>
        <AppLayout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
