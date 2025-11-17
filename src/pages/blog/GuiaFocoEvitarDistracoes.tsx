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
              <p>Foco é uma habilidade que pode ser treinada. Descubra como eliminar distrações e manter concentração profunda.</p>
              <div className="bg-muted p-8 rounded-lg my-12 text-center">
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