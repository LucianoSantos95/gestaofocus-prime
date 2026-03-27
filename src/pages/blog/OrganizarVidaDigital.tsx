import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeaways from "@/components/blog/KeyTakeaways";
import ArticleEngagement from "@/components/blog/ArticleEngagement";
import AuthorBio from "@/components/blog/AuthorBio";
import BlogCTA from "@/components/BlogCTA";
import RelatedArticles from "@/components/RelatedArticles";
import articleImage from "@/assets/blog/organizar-vida-digital.jpg";

const OrganizarVidaDigital = () => {
  const imageUrl = "https://focusinteligente.com.br" + articleImage;
  const articleUrl = "https://focusinteligente.com.br/blog/organizar-vida-digital";

  const tocItems = [
    { id: "custo-desordem", text: "O Custo Real da Desordem Digital", level: 2 },
    { id: "4-pilares", text: "O Sistema de 4 Pilares para Organizar Sua Vida Digital", level: 2 },
    { id: "habitos", text: "Mantendo a Organização: Hábitos Semanais", level: 2 },
    { id: "ferramentas", text: "Ferramentas e Apps Recomendados", level: 2 },
    { id: "erros", text: "Erros Comuns ao Organizar a Vida Digital", level: 2 },
    { id: "conclusao", text: "Conclusão: Organize Agora, Agradeça Depois", level: 2 },
  ];

  const keyTakeaways = [
    "Profissionais perdem em média 2,5 horas por dia com desordem digital",
    "Use o sistema P.A.R.A: Projetos, Áreas, Recursos e Arquivo",
    "Aplique a regra dos 2 minutos para e-mails — responda ou mova imediatamente",
    "Mantenha hábitos semanais de manutenção: 10-20 min, 3x por semana",
    "Escolha UM sistema de nuvem principal e centralize tudo nele",
  ];

  return (
    <>
      <ReadingProgressBar />
      <SEOHead
        title="Organize Arquivos e E-mails da Sua Agência ou Consultoria"
        description="Guia para organizar e-mails, arquivos e documentos de clientes na sua agência. Pare de perder tempo procurando e centralize tudo num sistema."
        canonical="/blog/organizar-vida-digital"
        image={imageUrl}
        type="article"
        publishedTime="2025-01-19"
        modifiedTime="2025-01-19"
        keywords="organizar arquivos agência, gestão documentos consultoria, e-mails clientes, produtividade digital prestadores"
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <BlogBreadcrumb articleTitle="Organizar Vida Digital" articleSlug="organizar-vida-digital" />

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Como Organizar Sua Vida Digital: E-mails, Arquivos, Fotos e Tudo Que Vira Bagunça
              </h1>
              <p className="text-xl text-muted-foreground">
                O guia definitivo para transformar o caos digital em ordem e nunca mais perder tempo procurando arquivos
              </p>
            </header>

            <ArticleEngagement publishDate="19 de janeiro de 2025" readTime="11 min" articleUrl={articleUrl} articleTitle="Como Organizar Sua Vida Digital" />

            <img src={articleImage} alt="Organização digital com e-mails, arquivos e documentos organizados" className="w-full h-[400px] object-cover rounded-lg mb-8" />

            <KeyTakeaways items={keyTakeaways} readTime="11 min" />
            <TableOfContents items={tocItems} />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Você já perdeu 10 minutos procurando aquele arquivo que "jurava" que estava salvo? Ou passou a manhã tentando encontrar um e-mail importante no meio de milhares de mensagens?
              </p>

              <p className="text-lg leading-relaxed mb-6">
                A verdade é: <strong>o caos digital está custando muito mais do que você imagina</strong> — tempo, dinheiro, oportunidades e principalmente sua paz mental.
              </p>

              <h2 id="custo-desordem" className="text-3xl font-bold mt-12 mb-6 text-foreground">O Custo Real da Desordem Digital</h2>

              <p className="text-lg leading-relaxed mb-4">
                Profissionais perdem em média <strong>2,5 horas por dia</strong> procurando informações ou lidando com distrações digitais:
              </p>

              <ul className="space-y-3 mb-6">
                <li>✗ 12,5 horas por semana desperdiçadas</li>
                <li>✗ 50 horas por mês jogadas fora</li>
                <li>✗ Mais de 600 horas por ano de trabalho improdutivo</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Os 3 Maiores Vilões</h3>

              <div className="bg-muted p-6 rounded-lg mb-8">
                <p className="mb-4"><strong>1. E-mails desorganizados:</strong> Caixa de entrada com milhares de mensagens não lidas, spam misturado com assuntos importantes.</p>
                <p className="mb-4"><strong>2. Arquivos espalhados:</strong> Documentos na área de trabalho, downloads acumulados, pastas sem critério.</p>
                <p className="mb-0"><strong>3. Fotos e mídias:</strong> Milhares de fotos sem organização, prints misturados com memórias importantes.</p>
              </div>

              <h2 id="4-pilares" className="text-3xl font-bold mt-12 mb-6 text-foreground">O Sistema de 4 Pilares para Organizar Sua Vida Digital</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Pilar 1: Organize Seus E-mails</h3>

              <p className="text-lg leading-relaxed mb-4"><strong>Passo 1: A Grande Limpeza</strong></p>
              <ul className="space-y-2 mb-6">
                <li>• Cancele newsletters que você nunca lê</li>
                <li>• Delete e-mails com mais de 1 ano sem valor</li>
                <li>• Archive mensagens antigas mas importantes</li>
              </ul>

              <p className="text-lg leading-relaxed mb-4"><strong>Passo 2: Sistema de Pastas Inteligente</strong></p>
              <div className="bg-muted p-6 rounded-lg mb-6">
                <p className="mb-2">📁 <strong>Estrutura sugerida:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>→ 1. Ação Imediata (responder hoje)</li>
                  <li>→ 2. Aguardando Resposta</li>
                  <li>→ 3. Projetos Ativos (subpastas por projeto)</li>
                  <li>→ 4. Arquivo (por ano ou categoria)</li>
                  <li>→ 5. Leitura (newsletters e conteúdos)</li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                <strong>Passo 3: Regra dos 2 Minutos</strong> — Se pode ser respondido em menos de 2 minutos, responda imediatamente. Senão, mova para "Ação Imediata".
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Pilar 2: Organize Seus Arquivos (Método P.A.R.A)</h3>

              <div className="bg-muted p-6 rounded-lg mb-6">
                <p className="mb-4"><strong>P - Projetos:</strong> Tudo relacionado a projetos ativos (prazo definido)</p>
                <p className="mb-4"><strong>A - Áreas:</strong> Responsabilidades contínuas (Finanças, Saúde, Carreira)</p>
                <p className="mb-4"><strong>R - Recursos:</strong> Materiais de referência, aprendizado, inspiração</p>
                <p className="mb-0"><strong>A - Arquivo:</strong> Projetos concluídos e documentos inativos</p>
              </div>

              <p className="text-lg leading-relaxed mb-4"><strong>Regras de Ouro:</strong></p>
              <ul className="space-y-2 mb-6">
                <li>✓ Nomes descritivos: "contrato-focus-jan2025.pdf"</li>
                <li>✓ Máximo de 3 níveis de subpastas</li>
                <li>✓ Limpe a área de trabalho semanalmente</li>
                <li>✓ Esvazie Downloads quinzenalmente</li>
              </ul>

              <div className="my-12">
                <BlogCTA variant="download" location="vida_digital_mid" />
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Pilar 3: Organize Fotos e Mídias</h3>

              <div className="bg-muted p-6 rounded-lg mb-6">
                <p className="mb-2">Estrutura por Data + Evento:</p>
                <ul className="space-y-1 ml-4">
                  <li>→ 2025/ → 01-Janeiro/ → Viagem-Praia/</li>
                  <li>→ 2025/ → 02-Fevereiro/ → Aniversário/</li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                <strong>Dica:</strong> Delete fotos ruins imediatamente após tirar. Evite acumular screenshots e memes.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Pilar 4: Sistema de Nuvem Centralizado</h3>

              <p className="text-lg leading-relaxed mb-6">
                Escolha <strong>um sistema principal</strong> e sincronize tudo lá. Google Drive, OneDrive, ou Dropbox — o importante é centralizar.
              </p>

              <h2 id="habitos" className="text-3xl font-bold mt-12 mb-6 text-foreground">Mantendo a Organização: Hábitos Semanais</h2>

              <div className="bg-muted p-6 rounded-lg mb-8">
                <p className="mb-4"><strong>Segunda (10 min):</strong> Limpe caixa de entrada, revise "Ação Imediata"</p>
                <p className="mb-4"><strong>Quarta (15 min):</strong> Organize downloads, delete duplicados</p>
                <p className="mb-0"><strong>Sexta (20 min):</strong> Limpe desktop, archive projetos concluídos, backup</p>
              </div>

              <h2 id="ferramentas" className="text-3xl font-bold mt-12 mb-6 text-foreground">Ferramentas e Apps Recomendados</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Para E-mails:</h3>
              <ul className="space-y-2 mb-6">
                <li>• <strong>Spark:</strong> Cliente inteligente com organização</li>
                <li>• <strong>Unroll.me:</strong> Cancela newsletters em massa</li>
                <li>• <strong>SaneBox:</strong> Filtra e-mails automaticamente</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Para Arquivos:</h3>
              <ul className="space-y-2 mb-6">
                <li>• <strong>Everything (Windows):</strong> Busca instantânea</li>
                <li>• <strong>Alfred (Mac):</strong> Busca e organização poderosa</li>
              </ul>

              <h2 id="erros" className="text-3xl font-bold mt-12 mb-6 text-foreground">Erros Comuns</h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Criar pastas demais</p>
                  <p className="text-muted-foreground">5-7 pastas principais são suficientes.</p>
                </div>
                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Guardar tudo "por precaução"</p>
                  <p className="text-muted-foreground">Minimalismo digital funciona.</p>
                </div>
                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Não fazer backup</p>
                  <p className="text-muted-foreground">Regra 3-2-1: 3 cópias, 2 locais, 1 fora de casa.</p>
                </div>
              </div>

              <h2 id="conclusao" className="text-3xl font-bold mt-12 mb-6 text-foreground">Conclusão: Organize Agora, Agradeça Depois</h2>

              <p className="text-lg leading-relaxed mb-6">
                Organizar sua vida digital não é sobre perfeição — é sobre <strong>ter controle</strong> sobre suas informações e <strong>recuperar seu tempo</strong>.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Comece pequeno: escolha um pilar e dedique 1 hora essa semana. Cada minuto investido em organização te devolve horas de produtividade e paz mental.
              </p>

              <div className="my-12">
                <BlogCTA variant="whatsapp" location="vida_digital_end" />
              </div>

              <AuthorBio />
            </div>

            <RelatedArticles
              currentSlug="organizar-vida-digital"
              category="Organização"
              allArticles={[
                { title: "Organização Pessoal com Tecnologia", excerpt: "Como usar apps e ferramentas para organizar sua vida.", slug: "organizacao-pessoal-tecnologia", readTime: "9 min", category: "Organização" },
                { title: "Sistema de Produtividade Passo a Passo", excerpt: "Construa seu sistema personalizado de organização.", slug: "sistema-produtividade-passo-passo", readTime: "10 min", category: "Produtividade" },
                { title: "Como Organizar Documentos da Empresa", excerpt: "Gestão documental para negócios.", slug: "organizar-documentos-empresa", readTime: "8 min", category: "Organização" },
              ]}
            />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default OrganizarVidaDigital;
