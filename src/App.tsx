import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import SistemasNotion from "./pages/SistemasNotion";
import SprintProdutividade from "./pages/SprintProdutividade";
import HubEmpresarial from "./pages/HubEmpresarial";
import FocusClub from "./pages/FocusClub";
import AboutFocus from "./pages/AboutFocus";
import Privacidade from "./pages/Privacidade";
import TermosUso from "./pages/TermosUso";
import Cookies from "./pages/Cookies";
import CentralAjuda from "./pages/CentralAjuda";
import Documentacao from "./pages/Documentacao";
import StatusPlataforma from "./pages/StatusPlataforma";
import Onboarding from "./pages/Onboarding";
import NotFound from "./pages/NotFound";
import { useAnalytics } from "./hooks/useAnalytics";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

// Analytics component to track page views
const AnalyticsProvider = () => {
  useAnalytics();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsProvider />
        <ScrollToTop />
        <CookieConsent />
        <div className="min-h-screen bg-background flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sistemas-notion" element={<SistemasNotion />} />
              <Route path="/sprint-produtividade" element={<SprintProdutividade />} />
              <Route path="/hub-empresarial" element={<HubEmpresarial />} />
              <Route path="/focus-club" element={<FocusClub />} />
              <Route path="/sobre" element={<AboutFocus />} />
              <Route path="/privacidade" element={<Privacidade />} />
              <Route path="/termos" element={<TermosUso />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/ajuda" element={<CentralAjuda />} />
              <Route path="/docs" element={<Documentacao />} />
              <Route path="/status" element={<StatusPlataforma />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
