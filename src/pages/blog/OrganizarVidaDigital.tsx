import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import articleImage from "@/assets/blog/organizar-vida-digital.jpg";

const OrganizarVidaDigital = () => {
  const articleUrl = "https://focusinteligente.com.br/blog/organizar-vida-digital";
  const imageUrl = "https://focusinteligente.com.br" + articleImage;

  return (
    <>
      <Helmet>
        <title>Como Organizar Sua Vida Digital: E-mails, Arquivos e Fotos em 2025</title>
        <meta name="description" content="Guia completo para organizar e-mails, arquivos, fotos e toda sua vida digital. Pare de perder tempo procurando documentos e tenha tudo sob controle." />
        <meta name="keywords" content="organizar vida digital, organizar e-mails, organizar arquivos, gestão de documentos digitais, produtividade digital" />
        <link rel="canonical" href={articleUrl} />
        
        <meta property="og:title" content="Como Organizar Sua Vida Digital: E-mails, Arquivos e Fotos" />
        <meta property="og:description" content="Guia completo para organizar e-mails, arquivos, fotos e toda sua vida digital. Pare de perder tempo procurando documentos." />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Como Organizar Sua Vida Digital: E-mails, Arquivos e Fotos" />
        <meta name="twitter:description" content="Guia completo para organizar sua vida digital e parar de perder tempo." />
        <meta name="twitter:image" content={imageUrl} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Como Organizar Sua Vida Digital: E-mails, Arquivos e Fotos em 2025",
            "image": imageUrl,
            "datePublished": "2025-01-19",
            "dateModified": "2025-01-19",
            "author": {
              "@type": "Organization",
              "name": "Focus Inteligente"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Focus Inteligente",
              "logo": {
                "@type": "ImageObject",
                "url": "https://focusinteligente.com.br/lovable-uploads/focus-logo.png"
              }
            },
            "description": "Guia completo para organizar e-mails, arquivos, fotos e toda sua vida digital. Pare de perder tempo procurando documentos e tenha tudo sob controle."
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <article className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Início</Link>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Organizar Vida Digital</span>
            </nav>

            {/* Título e Subtítulo */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
                Como Organizar Sua Vida Digital: E-mails, Arquivos, Fotos e Tudo Que Vira Bagunça
              </h1>
              <p className="text-xl text-muted-foreground">
                O guia definitivo para transformar o caos digital em ordem e nunca mais perder tempo procurando arquivos
              </p>
            </header>

            {/* Imagem de Capa */}
            <div className="mb-12 rounded-xl overflow-hidden">
              <img 
                src={articleImage} 
                alt="Organização digital com e-mails, arquivos e documentos organizados"
                className="w-full h-auto"
              />
            </div>

            {/* Conteúdo do Artigo */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Você já perdeu 10 minutos procurando aquele arquivo que "jurava" que estava salvo? Ou passou a manhã tentando encontrar um e-mail importante no meio de milhares de mensagens?
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Se você respondeu "sim" para alguma dessas perguntas, este artigo foi feito para você. A verdade é: <strong>o caos digital está custando muito mais do que você imagina</strong> — tempo, dinheiro, oportunidades e principalmente sua paz mental.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Neste guia completo, você vai aprender exatamente como organizar toda sua vida digital de uma vez por todas.
              </p>

              {/* Seção 1 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                O Custo Real da Desordem Digital
              </h2>

              <p className="mb-4">
                Estudos mostram que profissionais perdem em média <strong>2,5 horas por dia</strong> procurando informações ou lidando com distrações digitais. Isso representa:
              </p>

              <ul className="space-y-3 mb-6">
                <li>✗ 12,5 horas por semana desperdiçadas</li>
                <li>✗ 50 horas por mês jogadas fora</li>
                <li>✗ Mais de 600 horas por ano de trabalho improdutivo</li>
              </ul>

              <p className="mb-6">
                E não é só o tempo: a desorganização digital causa estresse, ansiedade, perda de oportunidades e até problemas de saúde mental.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Os 3 Maiores Vilões da Desordem Digital
              </h3>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <p className="mb-4"><strong>1. E-mails desorganizados:</strong> Caixa de entrada com milhares de mensagens não lidas, spam misturado com assuntos importantes, anexos perdidos.</p>
                
                <p className="mb-4"><strong>2. Arquivos espalhados:</strong> Documentos salvos na área de trabalho, downloads acumulados, pastas sem critério, arquivos duplicados.</p>
                
                <p className="mb-0"><strong>3. Fotos e mídias:</strong> Milhares de fotos sem organização, vídeos ocupando espaço, prints de WhatsApp misturados com memórias importantes.</p>
              </div>

              {/* Seção 2 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                O Sistema de 4 Pilares para Organizar Sua Vida Digital
              </h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Pilar 1: Organize Seus E-mails (De Uma Vez Por Todas)
              </h3>

              <p className="mb-4"><strong>Passo 1: A Grande Limpeza</strong></p>
              <ul className="space-y-2 mb-6">
                <li>• Cancele newsletters que você nunca lê (use Unroll.me ou CleanEmail)</li>
                <li>• Delete e-mails com mais de 1 ano que não têm valor</li>
                <li>• Archive mensagens antigas mas importantes</li>
                <li>• Marque como lido tudo que não é urgente</li>
              </ul>

              <p className="mb-4"><strong>Passo 2: Crie um Sistema de Pastas Inteligente</strong></p>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="mb-2">📁 <strong>Estrutura sugerida:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>→ 1. Ação Imediata (responder hoje)</li>
                  <li>→ 2. Aguardando Resposta</li>
                  <li>→ 3. Projetos Ativos (subpastas por projeto)</li>
                  <li>→ 4. Arquivo (por ano ou categoria)</li>
                  <li>→ 5. Leitura (newsletters e conteúdos)</li>
                </ul>
              </div>

              <p className="mb-4"><strong>Passo 3: Aplique a Regra dos 2 Minutos</strong></p>
              <p className="mb-6">
                Se um e-mail pode ser respondido em menos de 2 minutos, responda imediatamente. Se não, mova para "Ação Imediata" e defina um horário específico para lidar com ele.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Pilar 2: Organize Seus Arquivos e Documentos
              </h3>

              <p className="mb-4"><strong>A Estrutura de Pastas P.A.R.A (Recomendada por Especialistas)</strong></p>
              
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="mb-4"><strong>P - Projetos:</strong> Tudo relacionado a projetos ativos (prazo definido, objetivo claro)</p>
                <p className="mb-4"><strong>A - Áreas:</strong> Responsabilidades contínuas (Finanças, Saúde, Carreira)</p>
                <p className="mb-4"><strong>R - Recursos:</strong> Materiais de referência, aprendizado, inspiração</p>
                <p className="mb-0"><strong>A - Arquivo:</strong> Projetos concluídos e documentos inativos</p>
              </div>

              <p className="mb-4"><strong>Regras de Ouro para Arquivos:</strong></p>
              <ul className="space-y-2 mb-6">
                <li>✓ Use nomes descritivos: "contrato-focus-jan2025.pdf" em vez de "contrato-final-v3.pdf"</li>
                <li>✓ Máximo de 3 níveis de subpastas</li>
                <li>✓ Delete duplicatas (use ferramentas como Gemini ou CloneSpy)</li>
                <li>✓ Limpe a área de trabalho semanalmente</li>
                <li>✓ Esvazia a pasta Downloads quinzenalmente</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Pilar 3: Organize Fotos e Mídias
              </h3>

              <p className="mb-4"><strong>Sistema de Organização por Data + Evento:</strong></p>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="mb-2">Estrutura sugerida:</p>
                <ul className="space-y-1 ml-4">
                  <li>→ 2025/</li>
                  <li>&nbsp;&nbsp;→ 01-Janeiro/</li>
                  <li>&nbsp;&nbsp;&nbsp;&nbsp;→ Viagem-Praia/</li>
                  <li>&nbsp;&nbsp;&nbsp;&nbsp;→ Aniversário-João/</li>
                  <li>&nbsp;&nbsp;→ 02-Fevereiro/</li>
                </ul>
              </div>

              <p className="mb-4"><strong>Ferramentas recomendadas:</strong></p>
              <ul className="space-y-2 mb-6">
                <li>• <strong>Google Photos:</strong> Organização automática por data, rosto e localização</li>
                <li>• <strong>Apple Photos:</strong> Para usuários do ecossistema Apple</li>
                <li>• <strong>Amazon Photos:</strong> Armazenamento ilimitado para fotos (Prime members)</li>
              </ul>

              <p className="mb-6">
                <strong>Dica profissional:</strong> Delete fotos ruins imediatamente após tirar. Evite acumular screenshots e memes que você nunca mais vai ver.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Pilar 4: Sistema de Nuvem Centralizado
              </h3>

              <p className="mb-4">
                Em vez de ter arquivos espalhados em vários lugares (Google Drive, Dropbox, OneDrive, computador local), escolha <strong>um sistema principal</strong> e sincronize tudo lá.
              </p>

              <p className="mb-4"><strong>Comparativo rápido:</strong></p>
              <ul className="space-y-3 mb-8">
                <li>• <strong>Google Drive:</strong> Melhor para colaboração e integração com Gmail</li>
                <li>• <strong>OneDrive:</strong> Ideal para usuários Microsoft/Windows</li>
                <li>• <strong>Dropbox:</strong> Sincronização mais rápida e confiável</li>
                <li>• <strong>Notion:</strong> Para quem quer tudo em um só lugar (notas + arquivos + projetos)</li>
              </ul>

              {/* Seção 3 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Mantendo a Organização: Hábitos Semanais
              </h2>

              <p className="mb-4">
                Organizar uma vez não resolve. Você precisa de <strong>rituais de manutenção</strong>:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <p className="mb-4"><strong>Segunda-feira (10 min):</strong></p>
                <ul className="space-y-2 mb-6">
                  <li>→ Limpe caixa de entrada do e-mail</li>
                  <li>→ Revise pastas de "Ação Imediata"</li>
                </ul>

                <p className="mb-4"><strong>Quarta-feira (15 min):</strong></p>
                <ul className="space-y-2 mb-6">
                  <li>→ Organize downloads da semana</li>
                  <li>→ Delete arquivos duplicados</li>
                </ul>

                <p className="mb-4"><strong>Sexta-feira (20 min):</strong></p>
                <ul className="space-y-2 mb-0">
                  <li>→ Limpe área de trabalho</li>
                  <li>→ Archive projetos concluídos</li>
                  <li>→ Backup de arquivos importantes</li>
                </ul>
              </div>

              {/* Seção 4 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Ferramentas e Apps Recomendados
              </h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Para E-mails:
              </h3>
              <ul className="space-y-2 mb-6">
                <li>• <strong>Spark:</strong> Cliente de e-mail inteligente com recursos de organização</li>
                <li>• <strong>Unroll.me:</strong> Cancela newsletters em massa</li>
                <li>• <strong>SaneBox:</strong> Filtra e-mails não importantes automaticamente</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Para Arquivos:
              </h3>
              <ul className="space-y-2 mb-6">
                <li>• <strong>Everything (Windows):</strong> Busca instantânea de arquivos</li>
                <li>• <strong>Alfred (Mac):</strong> Busca e organização poderosa</li>
                <li>• <strong>Gemini:</strong> Remove duplicatas automaticamente</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Para Organização Geral:
              </h3>
              <ul className="space-y-2 mb-8">
                <li>• <strong>Notion:</strong> Hub central para documentos, projetos e conhecimento</li>
                <li>• <strong>Evernote:</strong> Captura e organização de informações</li>
                <li>• <strong>Raindrop.io:</strong> Gerenciador de favoritos e links</li>
              </ul>

              {/* Seção 5 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Erros Comuns ao Organizar a Vida Digital
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Criar pastas demais</p>
                  <p className="text-muted-foreground">Mantenha simples. 5-7 pastas principais são suficientes.</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Não ter critério de nomenclatura</p>
                  <p className="text-muted-foreground">Defina um padrão e siga sempre (ex: data-projeto-versão)</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Guardar tudo "por precaução"</p>
                  <p className="text-muted-foreground">Delete o que não tem valor. Minimalismo digital funciona.</p>
                </div>

                <div className="border-l-4 border-destructive pl-4">
                  <p className="font-semibold mb-2">❌ Não fazer backup</p>
                  <p className="text-muted-foreground">Use regra 3-2-1: 3 cópias, 2 locais diferentes, 1 fora de casa</p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Quer um Sistema Completo de Organização?
                </h3>
                <p className="text-lg mb-6">
                  Nossos sistemas no Notion já vêm com tudo estruturado para você organizar vida pessoal, projetos, finanças e muito mais. Basta duplicar e começar a usar.
                </p>
                <Link 
                  to="/sistemas-notion"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Ver Sistemas Profissionais →
                </Link>
              </div>

              {/* Conclusão */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Conclusão: Organize Agora, Agradeça Depois
              </h2>

              <p className="mb-4">
                Organizar sua vida digital não é sobre perfeição — é sobre <strong>ter controle</strong> sobre suas informações e <strong>recuperar seu tempo</strong>.
              </p>

              <p className="mb-4">
                Comece pequeno: escolha um pilar (e-mails, arquivos ou fotos) e dedique 1 hora essa semana para organizar. Os resultados vão te motivar a continuar.
              </p>

              <p className="mb-8">
                Lembre-se: cada minuto investido em organização te devolve horas de produtividade e paz mental no futuro.
              </p>
            </div>

            {/* Artigos Relacionados */}
            <div className="mt-16 pt-8 border-t border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Artigos Relacionados</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/blog/organizacao-pessoal-tecnologia" className="block p-6 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <h4 className="font-semibold mb-2 text-foreground">Organização Pessoal com Tecnologia</h4>
                  <p className="text-sm text-muted-foreground">Como usar apps e ferramentas para organizar sua vida</p>
                </Link>
                <Link to="/blog/sistema-produtividade-passo-passo" className="block p-6 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <h4 className="font-semibold mb-2 text-foreground">Sistema de Produtividade Passo a Passo</h4>
                  <p className="text-sm text-muted-foreground">Construa seu sistema personalizado de organização</p>
                </Link>
                <Link to="/blog/organizar-documentos-empresa" className="block p-6 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <h4 className="font-semibold mb-2 text-foreground">Como Organizar Documentos da Empresa</h4>
                  <p className="text-sm text-muted-foreground">Gestão documental para negócios</p>
                </Link>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default OrganizarVidaDigital;