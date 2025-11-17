import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import metasImage from "@/assets/blog/metas-inteligentes-smart.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MetasInteligentesSmart = () => {
  return (
    <>
      <Helmet>
        <title>Como Criar Metas Inteligentes (SMART) Sem Complicar — Com Exemplos Reais | Focus</title>
        <meta name="description" content="Aprenda a criar metas SMART de forma simples e prática. Exemplos reais e template pronto para usar." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <img src={metasImage} alt="Metas SMART" className="w-full h-[400px] object-cover rounded-lg mb-8" />
            <h1 className="text-4xl font-bold mb-8">Como Criar Metas Inteligentes (SMART) Sem Complicar</h1>
            <div className="prose prose-lg max-w-none">
              <p>Metas SMART são específicas, mensuráveis, atingíveis, relevantes e temporais. Aprenda a criá-las na prática.</p>
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

export default MetasInteligentesSmart;