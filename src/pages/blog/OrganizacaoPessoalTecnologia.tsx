import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import tecnologiaImage from "@/assets/blog/organizacao-pessoal-tecnologia.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OrganizacaoPessoalTecnologia = () => {
  return (
    <>
      <Helmet>
        <title>Organização Pessoal 2.0: Como Usar Tecnologia Para Ter Mais Clareza Mental | Focus</title>
        <meta name="description" content="Descubra como usar tecnologia de forma inteligente para organizar sua vida e ter mais clareza mental." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <img src={tecnologiaImage} alt="Organização pessoal com tecnologia" className="w-full h-[400px] object-cover rounded-lg mb-8" />
            <h1 className="text-4xl font-bold mb-8">Organização Pessoal 2.0: Como Usar Tecnologia Para Ter Mais Clareza Mental</h1>
            <div className="prose prose-lg max-w-none">
              <p>A tecnologia pode ser sua aliada na organização pessoal. Aprenda a usá-la da forma certa.</p>
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

export default OrganizacaoPessoalTecnologia;