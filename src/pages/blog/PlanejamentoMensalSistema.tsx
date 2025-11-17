import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import planejamentoImage from "@/assets/blog/planejamento-mensal-sistema.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PlanejamentoMensalSistema = () => {
  const publishDate = "2025-01-19";
  const articleUrl = "https://focusinteligente.com/blog/planejamento-mensal-sistema";

  return (
    <>
      <Helmet>
        <title>Planejamento Mensal: Como Criar Um Sistema Que Realmente Funciona | Focus Inteligente</title>
        <meta name="description" content="Aprenda a criar um sistema de planejamento mensal eficaz. Método prático para alcançar suas metas todos os meses." />
        <meta name="keywords" content="planejamento mensal, metas mensais, organização mensal, produtividade, gestão tempo" />
        <link rel="canonical" href={articleUrl} />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <nav className="text-sm mb-8">
              <ol className="flex items-center space-x-2 text-muted-foreground">
                <li><Link to="/">Início</Link></li>
                <li>/</li>
                <li><Link to="/blog">Blog</Link></li>
                <li>/</li>
                <li className="text-foreground">Planejamento Mensal</li>
              </ol>
            </nav>

            <img src={planejamentoImage} alt="Sistema de planejamento mensal" className="w-full h-[400px] object-cover rounded-lg mb-8" />

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Planejamento Mensal: Como Criar Um Sistema Que Realmente Funciona</h1>
              <p className="text-xl text-muted-foreground">O método completo para planejar e executar suas metas mensais com consistência</p>
              <time className="text-sm text-muted-foreground" dateTime={publishDate}>19 de janeiro de 2025 • 10 min</time>
            </header>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg">Um mês bem planejado é a diferença entre progresso real e apenas estar ocupado. Aprenda o framework completo.</p>
              
              <h2 className="text-3xl font-bold mt-12">O Framework de Planejamento Mensal</h2>
              <p>Todo último dia do mês, dedique 90 minutos para planejar os próximos 30 dias usando este método.</p>

              <div className="bg-muted p-8 rounded-lg my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Sistemas Completos no Notion</h3>
                <Link to="/sistemas-notion" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Conhecer Sistemas
                </Link>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PlanejamentoMensalSistema;