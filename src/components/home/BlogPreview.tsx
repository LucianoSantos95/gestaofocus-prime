import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { trackCTAClick } from "@/lib/analytics";
import checklistImage from "@/assets/blog/checklist-diario-produtividade.jpg";
import organizarRotinaImage from "@/assets/blog/organizar-rotina-semanal.jpg";
import produtividadeAutonomosImage from "@/assets/blog/produtividade-autonomos-freelancers.jpg";

const latestPosts = [
  {
    title: "Checklist Diário: O Método Simples Que Aumenta Sua Produtividade em Até 40%",
    excerpt: "Descubra o sistema de checklist que profissionais de alta performance usam.",
    date: "2025-02-15",
    readTime: "8 min",
    slug: "checklist-diario-produtividade",
    image: checklistImage
  },
  {
    title: "Como Organizar Sua Rotina Semanal Para Ter Mais Foco",
    excerpt: "O método completo de planejamento semanal que elimina decisões desnecessárias.",
    date: "2025-02-14",
    readTime: "9 min",
    slug: "organizar-rotina-semanal",
    image: organizarRotinaImage
  },
  {
    title: "Produtividade Para Quem Trabalha Sozinho: O Guia Essencial",
    excerpt: "Estrutura completa para autônomos criarem sistemas de produtividade.",
    date: "2025-02-13",
    readTime: "10 min",
    slug: "produtividade-autonomos-freelancers",
    image: produtividadeAutonomosImage
  }
];

const BlogPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-focus">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conteúdo para evoluir <span className="text-primary">produtividade, processos e organização</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {latestPosts.map((post, index) => (
            <Link
              key={index}
              to={`/blog/${post.slug}`}
              className="service-card group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden bg-background-elevated">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="flex items-center gap-4 text-sm text-foreground-muted mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('pt-BR')}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-foreground-muted text-sm">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="btn-secondary px-8 py-6"
            onClick={() => {
              trackCTAClick('Ver todos os artigos', 'blog_preview');
              window.location.href = '/blog';
            }}
          >
            Ver todos os artigos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
