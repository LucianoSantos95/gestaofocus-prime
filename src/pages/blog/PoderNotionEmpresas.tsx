import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import notionPoderImage from "@/assets/blog/notion-poder-empresas.jpg";

const PoderNotionEmpresas = () => {
  const relatedPosts = [
    {
      title: "Gestão de projetos no Notion: o passo a passo para parar de perder tempo e ganhar resultados",
      slug: "gestao-projetos-notion"
    },
    {
      title: "Como montar um sistema completo no Notion e fazer sua empresa funcionar no piloto automático",
      slug: "sistema-completo-notion-automacao"
    }
  ];

  return (
    <>
      <Helmet>
        <title>O Segredo das Empresas Produtivas: O Poder do Notion | Focus</title>
        <meta 
          name="description" 
          content="Descubra como o Notion se tornou a ferramenta preferida de empresas que multiplicam sua produtividade e organize seu negócio de forma inteligente." 
        />
        <meta name="keywords" content="notion empresas, produtividade empresarial, gestão notion, organização empresarial, ferramenta produtividade" />
        <link rel="canonical" href="https://focusinteligente.com/blog/poder-do-notion-empresas-produtivas" />
      </Helmet>

      <article className="min-h-screen pt-24 pb-16">
        {/* Breadcrumbs */}
        <div className="container-focus mb-8">
          <nav className="flex items-center space-x-2 text-sm text-foreground-muted">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">O poder do Notion</span>
          </nav>
        </div>

        {/* Hero Image */}
        <div className="container-focus mb-8">
          <div className="aspect-video overflow-hidden rounded-2xl">
            <img 
              src={notionPoderImage} 
              alt="O poder do Notion para empresas produtivas"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Header */}
        <div className="container-focus max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-sm text-foreground-muted">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                Produtividade
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>20 de janeiro de 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>7 min de leitura</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              O segredo que as empresas produtivas usam (e ninguém te contou): o poder do Notion
            </h1>

            <p className="text-xl text-foreground-muted leading-relaxed">
              Descubra como o Notion se tornou a ferramenta preferida de empresas que multiplicam sua produtividade e organize seu negócio de forma inteligente.
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-12 mb-6">Por que empresas produtivas escolhem o Notion?</h2>
            
            <p className="text-foreground-muted leading-relaxed mb-6">
              Em um mercado cada vez mais competitivo, as empresas que se destacam não são necessariamente as maiores ou mais antigas — são aquelas que conseguem fazer mais com menos. E existe um segredo por trás dessa eficiência: o uso inteligente de ferramentas de produtividade como o Notion.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              O Notion não é apenas mais uma ferramenta de organização. É uma plataforma completa que centraliza todos os processos da sua empresa em um único lugar: documentação, gerenciamento de projetos, bases de conhecimento, CRM, e muito mais.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Os 3 pilares que fazem o Notion revolucionar empresas</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">1. Centralização total da informação</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Quantas ferramentas sua empresa usa hoje? Planilhas no Excel, documentos no Google Drive, tarefas no Trello, comunicação no WhatsApp... O resultado? Informação espalhada, tempo perdido procurando dados e decisões baseadas em informações incompletas.
            </p>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Com o Notion, tudo fica em um só lugar. Seus processos, projetos, clientes e documentos ficam organizados e acessíveis para toda a equipe, eliminando a fragmentação de informações.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2. Flexibilidade sem limites</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Diferente de outras ferramentas rígidas, o Notion se adapta ao seu negócio — não o contrário. Você pode criar sistemas personalizados que refletem exatamente a forma como sua empresa trabalha, desde dashboards executivos até processos operacionais detalhados.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3. Automação inteligente</h3>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Com as integrações e automações do Notion, processos que antes exigiam horas de trabalho manual acontecem automaticamente. Isso libera sua equipe para focar no que realmente importa: crescer o negócio.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Como começar a transformar sua empresa com o Notion</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              A implementação do Notion não precisa ser complexa. O segredo está em começar com os processos mais críticos do seu negócio e expandir gradualmente. Muitas empresas começam mapeando seus processos principais e criando sistemas que realmente funcionam.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Com a consultoria especializada, você pode acelerar esse processo e evitar os erros comuns que empresas cometem ao implementar o Notion por conta própria.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">O resultado: empresas que operam no piloto automático</h2>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Empresas que dominam o Notion conseguem algo incrível: operar de forma previsível e escalável, mesmo com crescimento rápido. Processos documentados, tarefas automatizadas e equipes alinhadas criam uma máquina de produtividade que funciona 24/7.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-6">
              Se você quer fazer parte das empresas que multiplicam sua produtividade, o Notion é o primeiro passo. Mas lembre-se: a ferramenta é apenas o começo. O verdadeiro segredo está em como você implementa e utiliza ela no dia a dia.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-card-border">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-foreground-muted" />
              <span className="text-sm text-foreground-muted">Tags:</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Notion</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Produtividade</span>
              <span className="px-3 py-1 bg-card border border-card-border rounded-full text-sm">Gestão Empresarial</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Pronto para transformar sua empresa com o Notion?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Conheça nossos sistemas personalizados e comece a aplicar as estratégias que empresas produtivas já usam.
            </p>
            <Link to="/sistemas-notion">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Conhecer Nossos Sistemas no Notion
              </Button>
            </Link>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((post, index) => (
                <Link 
                  key={index}
                  to={`/blog/${post.slug}`}
                  className="group p-6 bg-card border border-card-border rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12">
            <Link 
              to="/blog"
              className="inline-flex items-center text-primary hover:gap-2 transition-all"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar para o Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default PoderNotionEmpresas;
