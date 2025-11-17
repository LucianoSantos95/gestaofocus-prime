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
              <p className="text-lg mb-6">Informação espalhada é conhecimento perdido. Centralize processos, documentos e ideias em um sistema único e acessível.</p>
              <h2 className="text-3xl font-bold mt-12 mb-6">Hub Central de Conhecimento</h2>
              <p className="mb-6">Crie uma base de conhecimento onde toda equipe encontra o que precisa em segundos, não em horas.</p>
              <div className="bg-muted p-8 rounded-lg my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Sistema Empresarial Completo</h3>
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