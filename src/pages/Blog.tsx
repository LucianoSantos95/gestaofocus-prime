import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import notionPoderImage from "@/assets/blog/notion-poder-empresas.jpg";
import mapeamentoImage from "@/assets/blog/mapeamento-processos.jpg";
import errosImage from "@/assets/blog/erros-produtividade.jpg";
import gestaoProjetosImage from "@/assets/blog/gestao-projetos-notion.jpg";
import sistemaCompletoImage from "@/assets/blog/sistema-completo-notion.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "O segredo que as empresas produtivas usam (e ninguém te contou): o poder do Notion",
      excerpt: "Descubra como o Notion se tornou a ferramenta preferida de empresas que multiplicam sua produtividade e organize seu negócio de forma inteligente.",
      date: "2025-01-20",
      readTime: "7 min",
      category: "Produtividade",
      slug: "poder-do-notion-empresas-produtivas",
      image: notionPoderImage
    },
    {
      id: 2,
      title: "Seu negócio está travado? Veja como o mapeamento de processos pode destravar seu crescimento",
      excerpt: "Aprenda como identificar gargalos, eliminar retrabalho e criar um fluxo de trabalho que realmente funciona para sua empresa crescer.",
      date: "2025-01-18",
      readTime: "8 min",
      category: "Gestão de Processos",
      slug: "mapeamento-processos-crescimento",
      image: mapeamentoImage
    },
    {
      id: 3,
      title: "Você comete esses 5 erros de produtividade sem perceber? Descubra agora como evitá-los",
      excerpt: "Identifique os erros mais comuns que sabotam sua produtividade e aprenda técnicas práticas para corrigi-los imediatamente.",
      date: "2025-01-15",
      readTime: "6 min",
      category: "Produtividade",
      slug: "5-erros-produtividade",
      image: errosImage
    },
    {
      id: 4,
      title: "Gestão de projetos no Notion: o passo a passo para parar de perder tempo e ganhar resultados",
      excerpt: "Monte um sistema completo de gestão de projetos no Notion e transforme a forma como sua equipe trabalha com eficiência comprovada.",
      date: "2025-01-12",
      readTime: "9 min",
      category: "Notion",
      slug: "gestao-projetos-notion",
      image: gestaoProjetosImage
    },
    {
      id: 5,
      title: "Como montar um sistema completo no Notion e fazer sua empresa funcionar no piloto automático",
      excerpt: "Crie automações inteligentes e processos integrados que fazem sua empresa operar sozinha enquanto você foca no estratégico.",
      date: "2025-01-10",
      readTime: "10 min",
      category: "Automação",
      slug: "sistema-completo-notion-automacao",
      image: sistemaCompletoImage
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Focus Gestão Empresarial | Artigos sobre Produtividade e Organização</title>
        <meta 
          name="description" 
          content="Explore artigos, dicas e insights sobre gestão empresarial, produtividade, Notion e o Método FOCUS™. Conteúdo prático para transformar sua rotina e negócio." 
        />
        <meta name="keywords" content="blog gestão empresarial, produtividade, notion, método focus, organização empresarial" />
        <link rel="canonical" href="https://focusinteligente.com/blog" />
      </Helmet>

      <div className="min-h-screen pt-24 pb-16">
        {/* Breadcrumbs */}
        <div className="container-focus mb-8">
          <nav className="flex items-center space-x-2 text-sm text-foreground-muted">
            <Link to="/" className="hover:text-primary transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-foreground">Blog</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container-focus mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-6">
              <BookOpen className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-foreground-muted">
                Conteúdo sobre Gestão e Produtividade
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Blog Focus
            </h1>
            
            <p className="text-xl text-foreground-muted leading-relaxed">
              Artigos, insights e dicas práticas sobre gestão empresarial, produtividade e organização. 
              Transforme sua rotina e negócio com conteúdo aplicável no dia a dia.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="container-focus">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="group bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-foreground-muted">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-foreground-muted mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-foreground-muted mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all"
                  >
                    Ler artigo
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container-focus mt-20">
          <div className="bg-gradient-primary rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Quer transformar seu negócio?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Conheça nossas soluções personalizadas e comece a aplicar o Método FOCUS™ na sua empresa.
            </p>
            <Link to="/sistemas-notion">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Conhecer Nossos Sistemas
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
