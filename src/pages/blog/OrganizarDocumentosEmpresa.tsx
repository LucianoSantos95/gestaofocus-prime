import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import documentosImage from "@/assets/blog/organizar-documentos-empresa.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OrganizarDocumentosEmpresa = () => {
  return (
    <>
      <Helmet>
        <title>Como Organizar Documentos, Ideias e Informações da Empresa em Um Só Lugar | Focus</title>
        <meta name="description" content="Sistema completo para centralizar e organizar todos os documentos e informações da sua empresa." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <img src={documentosImage} alt="Organização de documentos empresariais" className="w-full h-[400px] object-cover rounded-lg mb-8" />
            <h1 className="text-4xl font-bold mb-8">Como Organizar Documentos e Informações da Empresa em Um Só Lugar</h1>
            <div className="prose prose-lg max-w-none">
              <p>Centralize todos os documentos, processos e conhecimentos da empresa em um sistema único e acessível.</p>
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

export default OrganizarDocumentosEmpresa;