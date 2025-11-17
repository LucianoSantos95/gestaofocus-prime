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
              <p className="text-lg mb-6">Metas SMART transformam desejos vagos em planos acionáveis. Específicas, Mensuráveis, Atingíveis, Relevantes e Temporais.</p>
              <h2 className="text-3xl font-bold mt-12 mb-6">Exemplos Práticos</h2>
              <p className="mb-4">❌ "Quero melhorar vendas"</p>
              <p className="mb-6">✅ "Aumentar vendas de R$50k para R$75k até junho através de 20 novos clientes"</p>
              <div className="bg-muted p-8 rounded-lg my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Sistema de Gestão de Metas</h3>
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