import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  // Placeholder data - será substituído por conteúdo real
  const blogPosts = [
    {
      id: 1,
      title: "Como organizar sua rotina com o Notion",
      excerpt: "Descubra as melhores práticas para estruturar sua rotina e aumentar sua produtividade usando o Notion.",
      date: "2024-01-15",
      readTime: "5 min",
      category: "Produtividade",
      slug: "como-organizar-rotina-notion"
    },
    {
      id: 2,
      title: "O Método FOCUS™ na prática: casos de sucesso",
      excerpt: "Conheça histórias reais de empresas que transformaram seus processos aplicando o Método FOCUS™.",
      date: "2024-01-10",
      readTime: "8 min",
      category: "Método FOCUS",
      slug: "metodo-focus-casos-sucesso"
    },
    {
      id: 3,
      title: "5 dicas para gestão empresarial eficiente",
      excerpt: "Estratégias práticas para melhorar a gestão do seu negócio e otimizar processos internos.",
      date: "2024-01-05",
      readTime: "6 min",
      category: "Gestão",
      slug: "dicas-gestao-empresarial"
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
              <Button className="btn-hero bg-white text-primary hover:bg-white/90">
                Falar com Especialista
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
