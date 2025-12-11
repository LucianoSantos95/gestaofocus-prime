import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";

import SprintProdutividade from "./pages/SprintProdutividade";
import HubEmpresarial from "./pages/HubEmpresarial";
import ControleFinanceiroPro from "./pages/ControleFinanceiroPro";
import FocusClub from "./pages/FocusClub";
import SistemasGratuitos from "./pages/SistemasGratuitos";
import Blog from "./pages/Blog";
import ListaEspera from "./pages/ListaEspera";
import ListaEsperaSucesso from "./pages/ListaEsperaSucesso";
import PoderNotionEmpresas from "./pages/blog/PoderNotionEmpresas";
import MapeamentoProcessos from "./pages/blog/MapeamentoProcessos";
import ErrosProdutividade from "./pages/blog/ErrosProdutividade";
import GestaoProjetosNotion from "./pages/blog/GestaoProjetosNotion";
import SistemaCompletoNotion from "./pages/blog/SistemaCompletoNotion";
import PerdaTempoProfissionais from "./pages/blog/PerdaTempoProfissionais";
import NotionVsPlanilhas from "./pages/blog/NotionVsPlanilhas";
import OrganizarProjetosCaoticos from "./pages/blog/OrganizarProjetosCaoticos";
import ProcessosInteligentesAutonomos from "./pages/blog/ProcessosInteligentesAutonomos";
import SistemasNotionPequenasEmpresas from "./pages/blog/SistemasNotionPequenasEmpresas";
import ErroSilenciosoProdutividade from "./pages/blog/ErroSilenciosoProdutividade";
import CaosRotinaProdutiva from "./pages/blog/CaosRotinaProdutiva";
import TarefasVsIncendios from "./pages/blog/TarefasVsIncendios";
import SistemaProdutividadePassoPasso from "./pages/blog/SistemaProdutividadePassoPasso";
import SistemasNotion150 from "./pages/blog/150SistemasNotion";
import ProdutividadeFazerOqueImporta from "./pages/blog/ProdutividadeFazerOqueImporta";
import ConfiarSistemasProducao from "./pages/blog/ConfiarSistemasProducao";
import TarefasSoltasEmResultados from "./pages/blog/TarefasSoltasEmResultados";
import ChecklistDiarioProdutividade from "./pages/blog/ChecklistDiarioProdutividade";
import OrganizarRotinaSemanal from "./pages/blog/OrganizarRotinaSemanal";
import ProdutividadeAutonomosFreelancers from "./pages/blog/ProdutividadeAutonomosFreelancers";
import PararProcrastinarSistemasVisuais from "./pages/blog/PararProcrastinarSistemasVisuais";
import PlanejamentoMensalSistema from "./pages/blog/PlanejamentoMensalSistema";
import OrganizacaoPessoalTecnologia from "./pages/blog/OrganizacaoPessoalTecnologia";
import MetasInteligentesSmart from "./pages/blog/MetasInteligentesSmart";
import GuiaFocoEvitarDistracoes from "./pages/blog/GuiaFocoEvitarDistracoes";
import MetodosProdutividade2025 from "./pages/blog/MetodosProdutividade2025";
import OrganizarDocumentosEmpresa from "./pages/blog/OrganizarDocumentosEmpresa";
import PararApagarIncendiosEmpresa from "./pages/blog/PararApagarIncendiosEmpresa";
import ClarezaProjetosNotion from "./pages/blog/ClarezaProjetosNotion";
import OrganizarVidaDigital from "./pages/blog/OrganizarVidaDigital";
import TecnicaPomodoroGuia from "./pages/blog/TecnicaPomodoroGuia";
import PlanejamentoAnualZero from "./pages/blog/PlanejamentoAnualZero";
import CriarHabitosDuram from "./pages/blog/CriarHabitosDuram";
import RotinaMatinalPoderosa from "./pages/blog/RotinaMatinalPoderosa";
import OrganizacaoFinanceiraPessoal from "./pages/blog/OrganizacaoFinanceiraPessoal";
import MelhorarConcentracaoDistracoes from "./pages/blog/MelhorarConcentracaoDistracoes";
import MapasMentaisOrganizarIdeias from "./pages/blog/MapasMentaisOrganizarIdeias";
import GestaoTempoQuemViveOcupado from "./pages/blog/GestaoTempoQuemViveOcupado";
import SistemaEstudosEficiente from "./pages/blog/SistemaEstudosEficiente";
import AboutFocus from "./pages/AboutFocus";
import Privacidade from "./pages/Privacidade";
import TermosUso from "./pages/TermosUso";
import Cookies from "./pages/Cookies";
import CentralAjuda from "./pages/CentralAjuda";
import Documentacao from "./pages/Documentacao";
import StatusPlataforma from "./pages/StatusPlataforma";
import Onboarding from "./pages/Onboarding";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Dashboard from "./pages/dashboard/Dashboard";
import Analytics from "./pages/dashboard/Analytics";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAnalytics } from "./hooks/useAnalytics";
import { usePageTracking } from "./hooks/usePageTracking";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

// Analytics component to track page views and engagement
const AnalyticsProvider = () => {
  useAnalytics();
  usePageTracking();
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
            
            <Route path="/sprint-produtividade" element={<SprintProdutividade />} />
            <Route path="/hub-empresarial" element={<HubEmpresarial />} />
            <Route path="/controle-financeiro-pro" element={<ControleFinanceiroPro />} />
            <Route path="/focus-club" element={<FocusClub />} />
            <Route path="/metodofocus" element={<FocusClub />} /> {/* Redirect legacy URL */}
            <Route path="/sistemas-gratuitos" element={<SistemasGratuitos />} />
            <Route path="/blog" element={<Blog />} />
              
              {/* Waitlist Routes */}
              <Route path="/lista-espera" element={<ListaEspera />} />
              <Route path="/lista-espera/sucesso" element={<ListaEsperaSucesso />} />
              <Route path="/blog/poder-do-notion-empresas-produtivas" element={<PoderNotionEmpresas />} />
              <Route path="/blog/mapeamento-processos-crescimento" element={<MapeamentoProcessos />} />
              <Route path="/blog/5-erros-produtividade" element={<ErrosProdutividade />} />
              <Route path="/blog/gestao-projetos-notion" element={<GestaoProjetosNotion />} />
              <Route path="/blog/sistema-completo-notion-automacao" element={<SistemaCompletoNotion />} />
              <Route path="/blog/perda-tempo-profissionais" element={<PerdaTempoProfissionais />} />
              <Route path="/blog/notion-vs-planilhas" element={<NotionVsPlanilhas />} />
              <Route path="/blog/organizar-projetos-caoticos" element={<OrganizarProjetosCaoticos />} />
              <Route path="/blog/processos-inteligentes-autonomos" element={<ProcessosInteligentesAutonomos />} />
              <Route path="/blog/sistemas-notion-pequenas-empresas" element={<SistemasNotionPequenasEmpresas />} />
              <Route path="/blog/erro-silencioso-produtividade-equipe" element={<ErroSilenciosoProdutividade />} />
              <Route path="/blog/transformar-caos-rotina-produtiva-notion" element={<CaosRotinaProdutiva />} />
              <Route path="/blog/gerenciando-tarefas-ou-apagando-incendios" element={<TarefasVsIncendios />} />
              <Route path="/blog/criar-sistema-produtividade-funciona" element={<SistemaProdutividadePassoPasso />} />
              <Route path="/blog/150-sistemas-notion-licoes-praticas" element={<SistemasNotion150 />} />
              <Route path="/blog/produtividade-fazer-o-que-importa" element={<ProdutividadeFazerOqueImporta />} />
              <Route path="/blog/confiar-sistemas-producao" element={<ConfiarSistemasProducao />} />
          <Route path="/blog/tarefas-soltas-em-resultados" element={<TarefasSoltasEmResultados />} />
          <Route path="/blog/checklist-diario-produtividade" element={<ChecklistDiarioProdutividade />} />
          <Route path="/blog/organizar-rotina-semanal" element={<OrganizarRotinaSemanal />} />
          <Route path="/blog/produtividade-autonomos-freelancers" element={<ProdutividadeAutonomosFreelancers />} />
          <Route path="/blog/parar-procrastinar-sistemas-visuais" element={<PararProcrastinarSistemasVisuais />} />
          <Route path="/blog/planejamento-mensal-sistema" element={<PlanejamentoMensalSistema />} />
          <Route path="/blog/organizacao-pessoal-tecnologia" element={<OrganizacaoPessoalTecnologia />} />
          <Route path="/blog/metas-inteligentes-smart" element={<MetasInteligentesSmart />} />
          <Route path="/blog/guia-foco-evitar-distracoes" element={<GuiaFocoEvitarDistracoes />} />
          <Route path="/blog/metodos-produtividade-2025" element={<MetodosProdutividade2025 />} />
          <Route path="/blog/organizar-documentos-empresa" element={<OrganizarDocumentosEmpresa />} />
              <Route path="/blog/parar-apagar-incendios-empresa" element={<PararApagarIncendiosEmpresa />} />
              <Route path="/blog/clareza-projetos-notion" element={<ClarezaProjetosNotion />} />
              <Route path="/blog/organizar-vida-digital" element={<OrganizarVidaDigital />} />
              <Route path="/blog/tecnica-pomodoro-guia-definitivo" element={<TecnicaPomodoroGuia />} />
              <Route path="/blog/planejamento-anual-do-zero" element={<PlanejamentoAnualZero />} />
              <Route path="/blog/criar-habitos-que-duram" element={<CriarHabitosDuram />} />
              <Route path="/blog/rotina-matinal-poderosa-15-minutos" element={<RotinaMatinalPoderosa />} />
              <Route path="/blog/organizacao-financeira-pessoal-sistema-simples" element={<OrganizacaoFinanceiraPessoal />} />
              <Route path="/blog/melhorar-concentracao-mundo-distracoes" element={<MelhorarConcentracaoDistracoes />} />
              <Route path="/blog/mapas-mentais-organizar-ideias-produtividade" element={<MapasMentaisOrganizarIdeias />} />
              <Route path="/blog/gestao-tempo-ocupado-estrategias-funcionam" element={<GestaoTempoQuemViveOcupado />} />
              <Route path="/blog/sistema-estudos-eficiente-tecnicas-modernas" element={<SistemaEstudosEficiente />} />
              <Route path="/sobre" element={<AboutFocus />} />
              <Route path="/sobre-focus" element={<AboutFocus />} />
              <Route path="/privacidade" element={<Privacidade />} />
              <Route path="/termos" element={<TermosUso />} />
              <Route path="/termos-uso" element={<TermosUso />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/ajuda" element={<CentralAjuda />} />
              <Route path="/docs" element={<Documentacao />} />
              <Route path="/status" element={<StatusPlataforma />} />
              <Route path="/onboarding" element={<Onboarding />} />
              
              {/* Auth Routes */}
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/forgot-password" element={<ForgotPassword />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              
              <Route path="/dashboard/analytics" element={
                <ProtectedRoute>
                  <Analytics />
                </ProtectedRoute>
              } />
              
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
