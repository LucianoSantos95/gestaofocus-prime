import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import { useAnalytics } from "./hooks/useAnalytics";
import { usePageTracking } from "./hooks/usePageTracking";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load all non-critical pages for code splitting
const SprintProdutividade = lazy(() => import("./pages/SprintProdutividade"));
const HubEmpresarial = lazy(() => import("./pages/HubEmpresarial"));
const ControleFinanceiroPro = lazy(() => import("./pages/ControleFinanceiroPro"));
const FocusPro = lazy(() => import("./pages/FocusPro"));
const SistemasGratuitos = lazy(() => import("./pages/SistemasGratuitos"));
const Blog = lazy(() => import("./pages/Blog"));
const ListaEspera = lazy(() => import("./pages/ListaEspera"));
const ListaEsperaSucesso = lazy(() => import("./pages/ListaEsperaSucesso"));
const AboutFocus = lazy(() => import("./pages/AboutFocus"));
const Privacidade = lazy(() => import("./pages/Privacidade"));
const TermosUso = lazy(() => import("./pages/TermosUso"));
const Cookies = lazy(() => import("./pages/Cookies"));
const CentralAjuda = lazy(() => import("./pages/CentralAjuda"));
const Documentacao = lazy(() => import("./pages/Documentacao"));
const StatusPlataforma = lazy(() => import("./pages/StatusPlataforma"));

const NotFound = lazy(() => import("./pages/NotFound"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const Login = lazy(() => import("./pages/auth/Login"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Analytics = lazy(() => import("./pages/dashboard/Analytics"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute").then(m => ({ default: m.ProtectedRoute })));

// Lazy load all blog pages
const PoderNotionEmpresas = lazy(() => import("./pages/blog/PoderNotionEmpresas"));
const MapeamentoProcessos = lazy(() => import("./pages/blog/MapeamentoProcessos"));
const ErrosProdutividade = lazy(() => import("./pages/blog/ErrosProdutividade"));
const GestaoProjetosNotion = lazy(() => import("./pages/blog/GestaoProjetosNotion"));
const SistemaCompletoNotion = lazy(() => import("./pages/blog/SistemaCompletoNotion"));
const PerdaTempoProfissionais = lazy(() => import("./pages/blog/PerdaTempoProfissionais"));
const NotionVsPlanilhas = lazy(() => import("./pages/blog/NotionVsPlanilhas"));
const OrganizarProjetosCaoticos = lazy(() => import("./pages/blog/OrganizarProjetosCaoticos"));
const ProcessosInteligentesAutonomos = lazy(() => import("./pages/blog/ProcessosInteligentesAutonomos"));
const SistemasNotionPequenasEmpresas = lazy(() => import("./pages/blog/SistemasNotionPequenasEmpresas"));
const ErroSilenciosoProdutividade = lazy(() => import("./pages/blog/ErroSilenciosoProdutividade"));
const CaosRotinaProdutiva = lazy(() => import("./pages/blog/CaosRotinaProdutiva"));
const TarefasVsIncendios = lazy(() => import("./pages/blog/TarefasVsIncendios"));
const SistemaProdutividadePassoPasso = lazy(() => import("./pages/blog/SistemaProdutividadePassoPasso"));
const SistemasNotion150 = lazy(() => import("./pages/blog/150SistemasNotion"));
const ProdutividadeFazerOqueImporta = lazy(() => import("./pages/blog/ProdutividadeFazerOqueImporta"));
const ConfiarSistemasProducao = lazy(() => import("./pages/blog/ConfiarSistemasProducao"));
const TarefasSoltasEmResultados = lazy(() => import("./pages/blog/TarefasSoltasEmResultados"));
const ChecklistDiarioProdutividade = lazy(() => import("./pages/blog/ChecklistDiarioProdutividade"));
const OrganizarRotinaSemanal = lazy(() => import("./pages/blog/OrganizarRotinaSemanal"));
const ProdutividadeAutonomosFreelancers = lazy(() => import("./pages/blog/ProdutividadeAutonomosFreelancers"));
const PararProcrastinarSistemasVisuais = lazy(() => import("./pages/blog/PararProcrastinarSistemasVisuais"));
const PlanejamentoMensalSistema = lazy(() => import("./pages/blog/PlanejamentoMensalSistema"));
const OrganizacaoPessoalTecnologia = lazy(() => import("./pages/blog/OrganizacaoPessoalTecnologia"));
const MetasInteligentesSmart = lazy(() => import("./pages/blog/MetasInteligentesSmart"));
const GuiaFocoEvitarDistracoes = lazy(() => import("./pages/blog/GuiaFocoEvitarDistracoes"));
const MetodosProdutividade2025 = lazy(() => import("./pages/blog/MetodosProdutividade2025"));
const OrganizarDocumentosEmpresa = lazy(() => import("./pages/blog/OrganizarDocumentosEmpresa"));
const PararApagarIncendiosEmpresa = lazy(() => import("./pages/blog/PararApagarIncendiosEmpresa"));
const ClarezaProjetosNotion = lazy(() => import("./pages/blog/ClarezaProjetosNotion"));
const OrganizarVidaDigital = lazy(() => import("./pages/blog/OrganizarVidaDigital"));
const TecnicaPomodoroGuia = lazy(() => import("./pages/blog/TecnicaPomodoroGuia"));
const PlanejamentoAnualZero = lazy(() => import("./pages/blog/PlanejamentoAnualZero"));
const CriarHabitosDuram = lazy(() => import("./pages/blog/CriarHabitosDuram"));
const RotinaMatinalPoderosa = lazy(() => import("./pages/blog/RotinaMatinalPoderosa"));
const OrganizacaoFinanceiraPessoal = lazy(() => import("./pages/blog/OrganizacaoFinanceiraPessoal"));
const MelhorarConcentracaoDistracoes = lazy(() => import("./pages/blog/MelhorarConcentracaoDistracoes"));
const MapasMentaisOrganizarIdeias = lazy(() => import("./pages/blog/MapasMentaisOrganizarIdeias"));
const GestaoTempoQuemViveOcupado = lazy(() => import("./pages/blog/GestaoTempoQuemViveOcupado"));
const SistemaEstudosEficiente = lazy(() => import("./pages/blog/SistemaEstudosEficiente"));
const ReunioesProdutivas = lazy(() => import("./pages/blog/ReunioesProdutivas"));
const MetodoGTDGuia = lazy(() => import("./pages/blog/MetodoGTDGuia"));
const MatrizEisenhower = lazy(() => import("./pages/blog/MatrizEisenhower"));
const OrganizarTarefasDiaDia = lazy(() => import("./pages/blog/OrganizarTarefasDiaDia"));

const queryClient = new QueryClient();

// Analytics component to track page views and engagement
const AnalyticsProvider = () => {
  useAnalytics();
  usePageTracking();
  return null;
};

// Loading fallback for lazy loaded pages
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Carregando...</div>
  </div>
);

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
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
              
                <Route path="/sprint-produtividade" element={<SprintProdutividade />} />
                <Route path="/hub-empresarial" element={<HubEmpresarial />} />
                <Route path="/controle-financeiro-pro" element={<ControleFinanceiroPro />} />
                <Route path="/focus-pro" element={<FocusPro />} />
                <Route path="/focus-club" element={<FocusPro />} />
                <Route path="/metodofocus" element={<FocusPro />} />
                <Route path="/sistemas-gratuitos" element={<SistemasGratuitos />} />
                <Route path="/blog" element={<Blog />} />
                
                {/* Waitlist Routes */}
                <Route path="/lista-espera" element={<ListaEspera />} />
                <Route path="/lista-espera/sucesso" element={<ListaEsperaSucesso />} />
                
                {/* Blog Routes */}
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
                <Route path="/blog/reunioes-produtivas-parar-perder-tempo" element={<ReunioesProdutivas />} />
                <Route path="/blog/metodo-gtd-guia-completo" element={<MetodoGTDGuia />} />
                <Route path="/blog/matriz-eisenhower-prioridades" element={<MatrizEisenhower />} />
                <Route path="/blog/organizar-tarefas-dia-dia" element={<OrganizarTarefasDiaDia />} />
                
                {/* Info Pages */}
                <Route path="/sobre" element={<AboutFocus />} />
                <Route path="/sobre-focus" element={<AboutFocus />} />
                <Route path="/privacidade" element={<Privacidade />} />
                <Route path="/termos" element={<TermosUso />} />
                <Route path="/termos-uso" element={<TermosUso />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/ajuda" element={<CentralAjuda />} />
                <Route path="/docs" element={<Documentacao />} />
                <Route path="/status" element={<StatusPlataforma />} />
                
                
                {/* Auth Routes */}
                <Route path="/auth/signup" element={<SignUp />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/forgot-password" element={<ForgotPassword />} />
                
                {/* Protected Routes */}
                <Route path="/dashboard" element={
                  <Suspense fallback={<PageLoader />}>
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  </Suspense>
                } />
                
                <Route path="/dashboard/analytics" element={
                  <Suspense fallback={<PageLoader />}>
                    <ProtectedRoute>
                      <Analytics />
                    </ProtectedRoute>
                  </Suspense>
                } />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
