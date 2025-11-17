import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import metodosImage from "@/assets/blog/metodos-produtividade-2025.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MetodosProdutividade2025 = () => {
  return (
    <>
      <Helmet>
        <title>Métodos de Produtividade Que Realmente Funcionam em 2025 (E Quais Evitar) | Focus</title>
        <meta name="description" content="Análise completa dos métodos de produtividade mais eficazes em 2025. Saiba quais funcionam e quais são apenas hype." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <img src={metodosImage} alt="Métodos de produtividade 2025" className="w-full h-[400px] object-cover rounded-lg mb-8" />
            <h1 className="text-4xl font-bold mb-8">Métodos de Produtividade Que Realmente Funcionam em 2025</h1>
            <div className="prose prose-lg max-w-none">
              <p>Nem todo método de produtividade funciona para todos. Descubra quais são os mais eficazes atualmente.</p>
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

export default MetodosProdutividade2025;