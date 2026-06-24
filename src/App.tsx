import { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// Lazy load pages
const SolucoesSobMedida = lazy(() => import("./pages/SolucoesSobMedida"));
const HubEmpresarial = lazy(() => import("./pages/HubEmpresarial"));

const Blog = lazy(() => import("./pages/Blog"));
const AboutFocus = lazy(() => import("./pages/AboutFocus"));
const Privacidade = lazy(() => import("./pages/Privacidade"));
const TermosUso = lazy(() => import("./pages/TermosUso"));
const Cookies = lazy(() => import("./pages/Cookies"));
const CentralAjuda = lazy(() => import("./pages/CentralAjuda"));
const StatusPlataforma = lazy(() => import("./pages/StatusPlataforma"));

const FAQ = lazy(() => import("./pages/FAQ"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Blog posts
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
const PlanejamentoSemanalPassoPasso = lazy(() => import("./pages/blog/PlanejamentoSemanalPassoPasso"));
const MetodoPessoalProdutividade = lazy(() => import("./pages/blog/MetodoPessoalProdutividade"));
const OrganizacaoPessoalProfissional = lazy(() => import("./pages/blog/OrganizacaoPessoalProfissional"));
const ReduzirEstresseTrabalhoOrganizacao = lazy(() => import("./pages/blog/ReduzirEstresseTrabalhoOrganizacao"));
const NotionAgenciasGuia2026 = lazy(() => import("./pages/blog/NotionAgenciasGuia2026"));
const IAPMEsAutomatizarProcessos = lazy(() => import("./pages/blog/IAPMEsAutomatizarProcessos"));
const MapeamentoProcessosAgencias = lazy(() => import("./pages/blog/MapeamentoProcessosAgencias"));

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
  useScrollReveal();
  const isSolucoes = location.pathname === "/solucoes-sob-medida" || location.pathname === "/hub-empresarial";

  // SolucoesSobMedida has its own Nav/Footer embedded
  const showNav = !isSolucoes;
  const showFooter = !isSolucoes;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {showNav && <Navigation />}
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solucoes-sob-medida" element={<SolucoesSobMedida />} />
            <Route path="/hub-empresarial" element={<HubEmpresarial />} />
            <Route path="/blog" element={<Blog />} />

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
            <Route path="/blog/planejamento-semanal-passo-passo" element={<PlanejamentoSemanalPassoPasso />} />
            <Route path="/blog/metodo-pessoal-produtividade" element={<MetodoPessoalProdutividade />} />
            <Route path="/blog/organizacao-pessoal-profissional" element={<OrganizacaoPessoalProfissional />} />
            <Route path="/blog/reduzir-estresse-trabalho-organizacao" element={<ReduzirEstresseTrabalhoOrganizacao />} />

            {/* Pillar Articles */}
            <Route path="/blog/notion-para-agencias-guia-completo-2026" element={<NotionAgenciasGuia2026 />} />
            <Route path="/blog/ia-para-pmes-automatizar-processos" element={<IAPMEsAutomatizarProcessos />} />
            <Route path="/blog/mapeamento-processos-agencias" element={<MapeamentoProcessosAgencias />} />

            {/* Info Pages */}
            <Route path="/sobre" element={<AboutFocus />} />
            <Route path="/sobre-focus" element={<Navigate to="/sobre" replace />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos" element={<TermosUso />} />
            <Route path="/termos-uso" element={<TermosUso />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/ajuda" element={<CentralAjuda />} />
            <Route path="/status" element={<StatusPlataforma />} />
            
            <Route path="/faq" element={<FAQ />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      {showFooter && <Footer />}
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
