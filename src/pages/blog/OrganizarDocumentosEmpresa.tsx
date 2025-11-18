import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import documentosImage from "@/assets/blog/organizar-documentos-empresa.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";

const OrganizarDocumentosEmpresa = () => {
  return (
    <>
      <Helmet>
        <title>Como Organizar Documentos, Ideias e Informações da Empresa em Um Só Lugar | Focus</title>
        <meta name="description" content="Sistema completo para centralizar e organizar todos os documentos e informações da sua empresa. Elimine informação espalhada e aumente eficiência." />
        <meta name="keywords" content="organizar documentos empresa, base conhecimento, gestão documentos, centralizar informações, knowledge base" />
        <link rel="canonical" href="https://usefocus.com.br/blog/organizar-documentos-empresa" />
        
        <meta property="og:title" content="Como Organizar Documentos e Informações da Empresa em Um Só Lugar" />
        <meta property="og:description" content="Sistema completo para centralizar documentos e eliminar informação espalhada na empresa." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://usefocus.com.br/blog/organizar-documentos-empresa" />
        <meta property="og:image" content="https://usefocus.com.br/assets/blog/organizar-documentos-empresa.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Como Organizar Documentos, Ideias e Informações da Empresa em Um Só Lugar",
            "description": "Sistema completo para centralizar e organizar todos os documentos e informações da sua empresa.",
            "image": "https://usefocus.com.br/assets/blog/organizar-documentos-empresa.jpg",
            "author": {
              "@type": "Organization",
              "name": "Focus"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Focus",
              "logo": {
                "@type": "ImageObject",
                "url": "https://usefocus.com.br/lovable-uploads/focus-logo.png"
              }
            },
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-15"
          })}
        </script>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/blog">Blog</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Organizar Documentos Empresa</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Como Organizar Documentos, Ideias e Informações da Empresa em Um Só Lugar
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Informação espalhada é conhecimento perdido. Aprenda a criar um hub central onde toda equipe encontra o que precisa em segundos, não em horas.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>📚 Tempo de leitura: 11 min</span>
                <span>📅 15 de janeiro, 2025</span>
              </div>
            </header>

            <img 
              src={documentosImage} 
              alt="Sistema organizado de documentos e informações empresariais em uma base de conhecimento centralizada" 
              className="w-full h-[400px] object-cover rounded-lg mb-12 shadow-lg" 
            />

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">O Custo Real da Informação Espalhada</h2>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Onde está aquele arquivo que o João enviou mês passado?" "Em qual pasta salvamos os contratos?" "Quem tem a versão atualizada desse documento?"
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Se essas perguntas são frequentes na sua empresa, você tem um problema grave: <strong>informação espalhada</strong>.
                </p>

                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-lg my-8">
                  <p className="text-foreground font-semibold mb-3">💸 Quanto isso custa?</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>2.5 horas por dia</strong> buscando informações (estudo McKinsey)</li>
                    <li>• <strong>30% do tempo</strong> dos colaboradores perdido em busca</li>
                    <li>• Retrabalho constante por documentos desatualizados</li>
                    <li>• Decisões erradas baseadas em informação incompleta</li>
                    <li>• Onboarding lento de novos funcionários</li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  A solução não é apenas "organizar melhor". É criar um <strong>sistema centralizado de conhecimento</strong> que funciona como segundo cérebro da empresa.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Por Que Pastas e Drives Não Funcionam</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Antes de mostrar a solução, entenda por que a abordagem tradicional falha:
                </p>

                <div className="space-y-4">
                  <div className="bg-muted/30 border-l-4 border-muted p-4 rounded-r-lg">
                    <p className="text-foreground font-semibold mb-2">❌ Problema #1: Estrutura rígida de pastas</p>
                    <p className="text-muted-foreground">
                      Um documento pode pertencer a múltiplas categorias. Pastas forçam escolha única. Resultado: ninguém sabe onde procurar.
                    </p>
                  </div>

                  <div className="bg-muted/30 border-l-4 border-muted p-4 rounded-r-lg">
                    <p className="text-foreground font-semibold mb-2">❌ Problema #2: Informação em silos</p>
                    <p className="text-muted-foreground">
                      Emails, Drive, Slack, WhatsApp, computadores locais. Informação está em 10 lugares diferentes.
                    </p>
                  </div>

                  <div className="bg-muted/30 border-l-4 border-muted p-4 rounded-r-lg">
                    <p className="text-foreground font-semibold mb-2">❌ Problema #3: Falta de contexto</p>
                    <p className="text-muted-foreground">
                      Você acha o arquivo, mas não sabe: está atualizado? Quem criou? Para que serve? Quando usar?
                    </p>
                  </div>

                  <div className="bg-muted/30 border-l-4 border-muted p-4 rounded-r-lg">
                    <p className="text-foreground font-semibold mb-2">❌ Problema #4: Versões descontroladas</p>
                    <p className="text-muted-foreground">
                      "contrato_final.pdf", "contrato_final_v2.pdf", "contrato_FINAL_AGORA.pdf". Qual é a versão correta?
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">O Sistema: Hub Central de Conhecimento</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Um Hub Central de Conhecimento é um local único onde TODA informação relevante da empresa vive. Não é apenas armazenamento - é sistema inteligente com contexto, relações e busca poderosa.
                </p>

                <div className="bg-primary/10 border border-primary rounded-lg p-6 mb-8">
                  <p className="text-foreground font-semibold mb-3">🎯 Princípios do Hub Eficaz:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✅ <strong>Fonte única da verdade</strong> - um lugar para tudo</li>
                    <li>✅ <strong>Fácil de buscar</strong> - encontre em segundos, não minutos</li>
                    <li>✅ <strong>Conectado</strong> - documentos relacionados linkados</li>
                    <li>✅ <strong>Vivo</strong> - sempre atualizado, nunca obsoleto</li>
                    <li>✅ <strong>Colaborativo</strong> - toda equipe contribui e usa</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-foreground">Estrutura do Hub (5 Áreas Principais)</h3>

                <div className="space-y-6">
                  <div className="bg-background border border-border rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-3 text-foreground">1. 📋 Processos & SOPs</h4>
                    <p className="text-muted-foreground mb-3">
                      Como fazemos as coisas aqui. Procedimentos passo a passo para tarefas recorrentes.
                    </p>
                    <p className="text-foreground font-semibold mb-2">O que incluir:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Fluxos de trabalho de cada departamento</li>
                      <li>Checklists de processos críticos</li>
                      <li>Templates e modelos aprovados</li>
                      <li>Políticas e diretrizes da empresa</li>
                    </ul>
                  </div>

                  <div className="bg-background border border-border rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-3 text-foreground">2. 📁 Documentos & Arquivos</h4>
                    <p className="text-muted-foreground mb-3">
                      Repositório organizado de todos documentos importantes com fácil acesso.
                    </p>
                    <p className="text-foreground font-semibold mb-2">Estrutura sugerida:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Contratos (clientes, fornecedores, parcerias)</li>
                      <li>Financeiro (notas fiscais, relatórios, orçamentos)</li>
                      <li>RH (políticas, benefícios, onboarding)</li>
                      <li>Marketing (campanhas, criativos, guidelines de marca)</li>
                      <li>Vendas (propostas, apresentações, materiais)</li>
                    </ul>
                  </div>

                  <div className="bg-background border border-border rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-3 text-foreground">3. 💡 Base de Conhecimento</h4>
                    <p className="text-muted-foreground mb-3">
                      Aprendi algo útil? Documente. Resolvi problema? Registre solução.
                    </p>
                    <p className="text-foreground font-semibold mb-2">Conteúdo típico:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>FAQs internos (perguntas comuns + respostas)</li>
                      <li>Troubleshooting (problemas técnicos e soluções)</li>
                      <li>Lições aprendidas de projetos</li>
                      <li>Melhores práticas e dicas da equipe</li>
                    </ul>
                  </div>

                  <div className="bg-background border border-border rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-3 text-foreground">4. 👥 Informações de Clientes/Parceiros</h4>
                    <p className="text-muted-foreground mb-3">
                      Histórico completo de relacionamentos externos centralizados.
                    </p>
                    <p className="text-foreground font-semibold mb-2">Inclua:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Perfis de clientes principais</li>
                      <li>Histórico de interações e projetos</li>
                      <li>Contatos e responsáveis</li>
                      <li>Contratos e acordos ativos</li>
                    </ul>
                  </div>

                  <div className="bg-background border border-border rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-3 text-foreground">5. 🎯 Projetos & Iniciativas</h4>
                    <p className="text-muted-foreground mb-3">
                      Documentação viva de tudo que está sendo feito na empresa.
                    </p>
                    <p className="text-foreground font-semibold mb-2">Para cada projeto:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Objetivo e escopo</li>
                      <li>Responsáveis e stakeholders</li>
                      <li>Status atual e próximos passos</li>
                      <li>Documentos e recursos relacionados</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Implementação: Passo a Passo</h2>

                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                  <p className="text-foreground font-semibold mb-2">⏱️ Tempo necessário:</p>
                  <p className="text-muted-foreground">
                    Setup inicial: 1-2 semanas | Manutenção: 30min/semana após estabelecido
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Fase 1: Fundação (Semana 1)</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-foreground font-semibold mb-2">Dia 1-2: Escolha a ferramenta</p>
                        <p className="text-muted-foreground mb-2">
                          Recomendamos Notion, Confluence ou SharePoint. Critérios: busca poderosa, fácil edição colaborativa, boa estrutura de links.
                        </p>
                      </div>

                      <div>
                        <p className="text-foreground font-semibold mb-2">Dia 3-4: Crie estrutura base</p>
                        <p className="text-muted-foreground mb-2">
                          Monte as 5 áreas principais (Processos, Documentos, Conhecimento, Clientes, Projetos). Deixe vazio por enquanto.
                        </p>
                      </div>

                      <div>
                        <p className="text-foreground font-semibold mb-2">Dia 5: Defina responsáveis</p>
                        <p className="text-muted-foreground mb-2">
                          Cada área tem um dono que garante atualização. Pode ser pessoa ou time.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Fase 2: Migração Inteligente (Semana 2)</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-foreground font-semibold mb-2">❌ NÃO faça: migrar tudo de uma vez</p>
                        <p className="text-muted-foreground mb-2">
                          Vai sobrecarregar e ninguém vai usar. Migre gradualmente por prioridade.
                        </p>
                      </div>

                      <div>
                        <p className="text-foreground font-semibold mb-2">✅ FAÇA: migração por prioridade</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                          <li><strong>Alta prioridade:</strong> Documentos acessados diariamente</li>
                          <li><strong>Média prioridade:</strong> Acessados semanalmente</li>
                          <li><strong>Baixa prioridade:</strong> Arquivo histórico (migre só se necessário)</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-foreground font-semibold mb-2">Ordem de migração sugerida:</p>
                        <ol className="list-decimal list-inside space-y-1 text-muted-foreground ml-4">
                          <li>Processos críticos do dia a dia</li>
                          <li>Templates e modelos usados constantemente</li>
                          <li>FAQ e troubleshooting comum</li>
                          <li>Projetos ativos (deixe arquivados para depois)</li>
                          <li>Base de conhecimento histórica</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Fase 3: Adoção (Semanas 3-4)</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-foreground font-semibold mb-2">Treinamento prático</p>
                        <p className="text-muted-foreground mb-2">
                          Não apenas mostre a ferramenta. Faça equipe USAR no dia a dia. "Onde está X?" → "Procure no Hub".
                        </p>
                      </div>

                      <div>
                        <p className="text-foreground font-semibold mb-2">Crie hábito</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                          <li>Toda reunião importante → documentar decisões no Hub</li>
                          <li>Resolveu problema? → adicione na base de conhecimento</li>
                          <li>Criou documento novo? → vai no Hub, não no Drive</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-foreground font-semibold mb-2">Gamifique (opcional mas eficaz)</p>
                        <p className="text-muted-foreground">
                          Reconheça quem mais contribui. "Colaborador do mês no Hub". Funciona surpreendentemente bem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Regras de Ouro Para Manter o Hub Vivo</h2>

                <div className="space-y-4">
                  <div className="bg-primary/5 p-5 rounded-lg border border-primary/20">
                    <p className="text-foreground font-semibold mb-2">🔄 Regra #1: Revisão Mensal</p>
                    <p className="text-muted-foreground">
                      Reserve última sexta-feira do mês para revisar e atualizar documentos. 30 minutos previnem meses de confusão.
                    </p>
                  </div>

                  <div className="bg-primary/5 p-5 rounded-lg border border-primary/20">
                    <p className="text-foreground font-semibold mb-2">📌 Regra #2: Data de Revisão em Tudo</p>
                    <p className="text-muted-foreground">
                      Todo documento tem "última atualização". Se passou 6 meses, revisar. Informação desatualizada é pior que ausente.
                    </p>
                  </div>

                  <div className="bg-primary/5 p-5 rounded-lg border border-primary/20">
                    <p className="text-foreground font-semibold mb-2">🗑️ Regra #3: Arquivo Agressivo</p>
                    <p className="text-muted-foreground">
                      Não usado em 12 meses? Arquive. Hub eficaz tem informação atual e relevante, não acúmulo histórico.
                    </p>
                  </div>

                  <div className="bg-primary/5 p-5 rounded-lg border border-primary/20">
                    <p className="text-foreground font-semibold mb-2">🔗 Regra #4: Links, Não Duplicatas</p>
                    <p className="text-muted-foreground">
                      Documento pertence a múltiplas áreas? Crie uma vez, linke de outros lugares. Nunca duplique.
                    </p>
                  </div>

                  <div className="bg-primary/5 p-5 rounded-lg border border-primary/20">
                    <p className="text-foreground font-semibold mb-2">👤 Regra #5: Donos Claros</p>
                    <p className="text-muted-foreground">
                      Cada seção tem dono responsável. Não é "todos cuidam" (ninguém cuida). É "João cuida de Processos".
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Resultados Esperados</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-primary">📉 Redução</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 80% menos tempo buscando informação</li>
                      <li>• 90% menos perguntas repetidas</li>
                      <li>• 70% menos emails de "onde está?"</li>
                      <li>• Onboarding 3x mais rápido</li>
                    </ul>
                  </div>

                  <div className="bg-background border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-primary">📈 Aumento</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Autonomia da equipe em 50%</li>
                      <li>• Qualidade de decisões (baseadas em dados completos)</li>
                      <li>• Consistência entre departamentos</li>
                      <li>• Retenção de conhecimento crítico</li>
                    </ul>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg my-12 text-center border border-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Sistema Empresarial Completo</h3>
                <p className="text-muted-foreground mb-6">
                  Implemente Hub de Conhecimento completo com templates prontos no Notion. Processos, documentos, base de conhecimento e mais já estruturados.
                </p>
                <Link 
                  to="/sistemas-notion" 
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Ver Sistema Empresarial
                </Link>
              </div>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Perguntas Frequentes</h2>
                
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-5">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Quanto tempo leva para implementar?</h3>
                    <p className="text-muted-foreground">
                      Setup inicial: 1-2 semanas. Adoção completa: 1-2 meses. Depois disso, manutenção é minimal (30min/semana).
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-5">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">E se a equipe não adotar?</h3>
                    <p className="text-muted-foreground">
                      Adoção vem de: 1) Liderança usando primeiro, 2) Tornar obrigatório para novos processos, 3) Mostrar benefício real rapidamente. Não é opcional - é como funciona agora.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-5">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Qual ferramenta usar?</h3>
                    <p className="text-muted-foreground">
                      Notion (melhor custo-benefício), Confluence (grandes empresas), SharePoint (se já usa Microsoft). O importante não é a ferramenta, é o sistema e disciplina.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-5">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Como garantir que fique atualizado?</h3>
                    <p className="text-muted-foreground">
                      Donos claros + revisão mensal calendada + cultura de "atualize quando usar". Não é trabalho extra, é parte do processo.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mt-12 pt-8 border-t border-border">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Continue Lendo</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link to="/blog/sistemas-notion-pequenas-empresas" className="group">
                    <div className="border border-border rounded-lg p-5 hover:border-primary transition-colors">
                      <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary">
                        Sistemas Notion Para Pequenas Empresas
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Como pequenas empresas usam Notion para competir com grandes
                      </p>
                    </div>
                  </Link>
                  
                  <Link to="/blog/poder-notion-empresas" className="group">
                    <div className="border border-border rounded-lg p-5 hover:border-primary transition-colors">
                      <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary">
                        O Poder do Notion em Empresas
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Como empresas reais transformaram operação com Notion
                      </p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default OrganizarDocumentosEmpresa;
