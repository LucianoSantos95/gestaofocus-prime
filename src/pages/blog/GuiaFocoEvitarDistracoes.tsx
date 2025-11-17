import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import focoImage from "@/assets/blog/guia-foco-evitar-distracoes.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GuiaFocoEvitarDistracoes = () => {
  return (
    <>
      <Helmet>
        <title>Guia Definitivo do Foco: Como Evitar Distrações no Trabalho e em Casa | Focus</title>
        <meta name="description" content="O guia completo para manter o foco e evitar distrações. Técnicas práticas e comprovadas." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <img src={focoImage} alt="Foco profundo sem distrações" className="w-full h-[400px] object-cover rounded-lg mb-8" />
            <h1 className="text-4xl font-bold mb-8">Guia Definitivo do Foco: Como Evitar Distrações</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-6">Foco não é talento nato - é habilidade treinável. Descubra como eliminar distrações e alcançar concentração profunda.</p>
              <h2 className="text-3xl font-bold mt-12 mb-6">Técnicas de Foco Profundo</h2>
              <p className="mb-6">Use ambientes preparados, bloqueie distrações digitais e crie rituais de entrada no trabalho focado.</p>
              <div className="bg-muted p-8 rounded-lg my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Sistemas Para Mais Foco</h3>
                <Link to="/sistemas-notion" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold">Ver Sistemas</Link>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GuiaFocoEvitarDistracoes;