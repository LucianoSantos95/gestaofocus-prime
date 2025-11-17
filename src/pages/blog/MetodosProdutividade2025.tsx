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
              <p className="text-lg mb-6">Nem todo método de produtividade funciona para todos. Descubra quais são comprovadamente eficazes e quais são apenas moda.</p>
              <h2 className="text-3xl font-bold mt-12 mb-6">Métodos Comprovados</h2>
              <p className="mb-6">Time Blocking, GTD, Pomodoro, Kanban - quando usar cada um e como combiná-los para resultados máximos.</p>
              <div className="bg-muted p-8 rounded-lg my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Sistemas de Produtividade</h3>
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