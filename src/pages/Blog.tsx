import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import notionPoderImage from "@/assets/blog/notion-poder-empresas.jpg";
import mapeamentoImage from "@/assets/blog/mapeamento-processos.jpg";
import errosImage from "@/assets/blog/erros-produtividade.jpg";
import gestaoProjetosImage from "@/assets/blog/gestao-projetos-notion.jpg";
import sistemaCompletoImage from "@/assets/blog/sistema-completo-notion.jpg";
import perdaTempoImage from "@/assets/blog/perda-tempo-profissionais.jpg";
import notionVsPlanilhasImage from "@/assets/blog/notion-vs-planilhas.jpg";
import organizarProjetosImage from "@/assets/blog/organizar-projetos-caoticos.jpg";
import processosInteligentesImage from "@/assets/blog/processos-inteligentes-autonomos.jpg";
import sistemasNotionPequenasImage from "@/assets/blog/sistemas-notion-pequenas-empresas.jpg";
import erroSilenciosoImage from "@/assets/blog/erro-silencioso-produtividade.jpg";
import caosRotinaImage from "@/assets/blog/caos-rotina-produtiva.jpg";
import tarefasIncendiosImage from "@/assets/blog/tarefas-vs-incendios.jpg";
import sistemaProdutividadeImage from "@/assets/blog/sistema-produtividade-passo-passo.jpg";
import sistemas150Image from "@/assets/blog/150-sistemas-notion.jpg";

const Blog = () => {
  const [showArchived, setShowArchived] = useState(false);
  
  const blogPosts = [
    {
      id: 1,
      title: "O erro silencioso que destrói a produtividade de qualquer equipe (e como evitar)",
      excerpt: "Descubra o erro invisível que está custando horas de produtividade da sua equipe todos os dias e aprenda o método prático para eliminá-lo.",
      date: "2025-01-29",
      readTime: "12 min",
      category: "Gestão de Equipes",
      slug: "erro-silencioso-produtividade-equipe",
      image: erroSilenciosoImage
    },
    {
      id: 2,
      title: "Como transformar o caos do seu dia em uma rotina leve e produtiva — usando o Notion",
      excerpt: "Aprenda o método prático para transformar dias caóticos em uma rotina organizada e produtiva usando o Notion como seu sistema de gestão pessoal.",
      date: "2025-01-28",
      readTime: "10 min",
      category: "Produtividade",
      slug: "transformar-caos-rotina-produtiva-notion",
      image: caosRotinaImage
    },
    {
      id: 3,
      title: "Você está gerenciando tarefas… ou apenas apagando incêndios?",
      excerpt: "Descubra a diferença entre gestão proativa e reatividade constante e aprenda como sair do modo bombeiro para se tornar um gestor estratégico.",
      date: "2025-01-27",
      readTime: "9 min",
      category: "Gestão",
      slug: "gerenciando-tarefas-ou-apagando-incendios",
      image: tarefasIncendiosImage
    },
    {
      id: 4,
      title: "O passo a passo para criar um sistema de produtividade que realmente funciona (sem complicar)",
      excerpt: "Guia completo e prático para criar um sistema de produtividade simples, funcional e sustentável que transforma sua forma de trabalhar.",
      date: "2025-01-26",
      readTime: "11 min",
      category: "Sistemas",
      slug: "criar-sistema-produtividade-funciona",
      image: sistemaProdutividadeImage
    },
    {
      id: 5,
      title: "O que aprendi organizando mais de 150 sistemas no Notion (e o que ninguém te conta sobre isso)",
      excerpt: "Lições práticas e insights valiosos de quem já organizou mais de 150 sistemas empresariais no Notion - o que funciona de verdade e o que evitar.",
      date: "2025-01-25",
      readTime: "13 min",
      category: "Notion",
      slug: "150-sistemas-notion-licoes-praticas",
      image: sistemas150Image
    },
    {
      id: 6,
      title: "Por que 80% dos Profissionais Perdem Tempo Todos os Dias (e Como Resolver Isso)",
      excerpt: "Descubra os principais vilões da produtividade que consomem 2-3 horas por dia e aprenda o método prático para recuperar esse tempo perdido.",
      date: "2025-01-22",
      readTime: "8 min",
      category: "Produtividade",
      slug: "perda-tempo-profissionais",
      image: perdaTempoImage
    },
    {
      id: 7,
      title: "Notion vs Planilhas: O Que as Empresas Modernas Estão Usando Para Crescer Mais Rápido",
      excerpt: "Compare as duas ferramentas e descubra por que 73% das empresas em crescimento estão migrando para o Notion em 2025.",
      date: "2025-01-21",
      readTime: "9 min",
      category: "Ferramentas",
      slug: "notion-vs-planilhas",
      image: notionVsPlanilhasImage
    },
    {
      id: 8,
      title: "O Método Para Organizar Projetos Caóticos e Dobrar a Eficiência",
      excerpt: "Descubra o método testado que transforma projetos caóticos em sistemas organizados, dobrando a eficiência da equipe em 30 dias.",
      date: "2025-01-20",
      readTime: "9 min",
      category: "Gestão de Projetos",
      slug: "organizar-projetos-caoticos",
      image: organizarProjetosImage
    },
    {
      id: 9,
      title: "Como Criar Processos Inteligentes que Funcionam Sozinhos",
      excerpt: "Aprenda o framework para criar processos que funcionam no piloto automático, mesmo quando você não está presente.",
      date: "2025-01-20",
      readTime: "10 min",
      category: "Automação",
      slug: "processos-inteligentes-autonomos",
      image: processosInteligentesImage
    },
    {
      id: 10,
      title: "3 Sistemas Prontos no Notion Que Toda Pequena Empresa Deveria Ter",
      excerpt: "Conheça os 3 sistemas essenciais que transformam pequenas empresas em operações profissionais e escaláveis.",
      date: "2025-01-20",
      readTime: "7 min",
      category: "Sistemas",
      slug: "sistemas-notion-pequenas-empresas",
      image: sistemasNotionPequenasImage
    },
    {
      id: 11,
      title: "O segredo que as empresas produtivas usam (e ninguém te contou): o poder do Notion",
      excerpt: "Descubra como o Notion se tornou a ferramenta preferida de empresas que multiplicam sua produtividade e organize seu negócio de forma inteligente.",
      date: "2025-01-20",
      readTime: "7 min",
      category: "Produtividade",
      slug: "poder-do-notion-empresas-produtivas",
      image: notionPoderImage
    },
    {
      id: 12,
      title: "Seu negócio está travado? Veja como o mapeamento de processos pode destravar seu crescimento",
      excerpt: "Aprenda como identificar gargalos, eliminar retrabalho e criar um fluxo de trabalho que realmente funciona para sua empresa crescer.",
      date: "2025-01-18",
      readTime: "8 min",
      category: "Gestão de Processos",
      slug: "mapeamento-processos-crescimento",
      image: mapeamentoImage
    },
    {
      id: 13,
      title: "Você comete esses 5 erros de produtividade sem perceber? Descubra agora como evitá-los",
      excerpt: "Identifique os erros mais comuns que sabotam sua produtividade e aprenda técnicas práticas para corrigi-los imediatamente.",
      date: "2025-01-15",
      readTime: "6 min",
      category: "Produtividade",
      slug: "5-erros-produtividade",
      image: errosImage
    },
    {
      id: 14,
      title: "Gestão de projetos no Notion: o passo a passo para parar de perder tempo e ganhar resultados",
      excerpt: "Monte um sistema completo de gestão de projetos no Notion e transforme a forma como sua equipe trabalha com eficiência comprovada.",
      date: "2025-01-12",
      readTime: "9 min",
      category: "Notion",
      slug: "gestao-projetos-notion",
      image: gestaoProjetosImage
    },
    {
      id: 15,
      title: "Como montar um sistema completo no Notion e fazer sua empresa funcionar no piloto automático",
      excerpt: "Crie automações inteligentes e processos integrados que fazem sua empresa operar sozinha enquanto você foca no estratégico.",
      date: "2025-01-10",
      readTime: "10 min",
      category: "Automação",
      slug: "sistema-completo-notion-automacao",
      image: sistemaCompletoImage
    }
  ];

  const recentPosts = blogPosts.slice(0, 5);
  const archivedPosts = blogPosts.slice(5);
  const displayedPosts = showArchived ? blogPosts : recentPosts;

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
          <h2 className="text-2xl font-bold mb-8">Posts Recentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post) => (
              <article 
                key={post.id}
                className="group bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Link to={`/blog/${post.slug}`} className="block aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
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

          {/* Ver Mais Button */}
          {archivedPosts.length > 0 && (
            <div className="mt-12 text-center">
              <Button
                size="lg"
                onClick={() => setShowArchived(!showArchived)}
                className="min-w-[200px]"
              >
                {showArchived ? "Ver Menos" : "Ver Mais"}
              </Button>
            </div>
          )}
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
