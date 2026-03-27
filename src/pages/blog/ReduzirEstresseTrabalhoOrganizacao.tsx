import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter, Facebook, CheckCircle2, Heart, AlertTriangle, Target, Brain, Lightbulb } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BlogCTA from "@/components/BlogCTA";
import RelatedArticles from "@/components/RelatedArticles";
import heroImage from "@/assets/blog/reduzir-estresse-trabalho-organizacao.jpg";

const ReduzirEstresseTrabalhoOrganizacao = () => {
  const publishDate = "2026-01-06";
  const modifiedDate = "2026-01-06";
  
  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Como Reduzir o Estresse na Gestão de Agências com Organização e Processos");
    
    const urls: Record<string, string> = {
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`
    };
    
    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  const relatedArticles = [
    {
      title: "Organização Pessoal e Profissional: Como Equilibrar Rotina e Trabalho",
      excerpt: "Aprenda como organizar vida pessoal e profissional sem conflito. Estratégias práticas para integrar rotina e trabalho de forma equilibrada.",
      slug: "organizacao-pessoal-profissional",
      readTime: "11 min",
      category: "Organização"
    },
    {
      title: "Planejamento Semanal Passo a Passo para Quem Vive Sem Tempo",
      excerpt: "Aprenda a planejar sua semana de forma prática e eficiente, mesmo com uma rotina corrida. Guia completo com passo a passo.",
      slug: "planejamento-semanal-passo-passo",
      readTime: "10 min",
      category: "Organização"
    },
    {
      title: "Como Organizar Tarefas no Dia a Dia Sem Se Sentir Sobrecarregado",
      excerpt: "Aprenda a organizar tarefas de forma simples, reduzir a sobrecarga mental e melhorar sua produtividade diária com dicas práticas.",
      slug: "organizar-tarefas-dia-dia",
      readTime: "10 min",
      category: "Produtividade"
    }
  ];

  return (
    <>
      <SEOHead
        title="Como Reduzir o Estresse no Trabalho com Organização e Planejamento"
        description="Descubra como organização e planejamento podem reduzir o estresse no trabalho e melhorar sua qualidade de vida. Técnicas práticas para mais equilíbrio."
        canonical="/blog/reduzir-estresse-trabalho-organizacao"
        type="article"
        publishedTime={publishDate}
        modifiedTime={modifiedDate}
        image={heroImage}
        keywords="reduzir estresse trabalho, organização trabalho, planejamento anti-estresse, bem-estar profissional, qualidade de vida, produtividade saudável"
      />
      
      <article className="min-h-screen bg-background">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Voltar ao Blog
              </Link>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Bem-estar
                </span>
                <span className="text-muted-foreground text-sm">•</span>
                <span className="text-muted-foreground text-sm">13 min de leitura</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Como Reduzir o Estresse no Trabalho Usando Organização e Planejamento
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Descubra como organização e planejamento podem transformar sua experiência profissional, 
                reduzindo o estresse e melhorando sua qualidade de vida.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Focus Gestão Inteligente</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={publishDate}>6 de Janeiro de 2026</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>13 min de leitura</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Compartilhar:</span>
                <Button variant="outline" size="icon" className="h-9 w-9" onClick={() => handleShare('linkedin')}>
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-9 w-9" onClick={() => handleShare('twitter')}>
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-9 w-9" onClick={() => handleShare('facebook')}>
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>
        
        {/* Featured Image */}
        <div className="container mx-auto px-4 -mt-8">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Ambiente de trabalho organizado e tranquilo para reduzir estresse"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Introdução */}
              <section className="mb-12">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Você já acordou com aquela sensação de peso no peito, só de pensar nas tarefas que 
                  te esperam no trabalho? Aquela ansiedade que aperta quando você olha para a lista 
                  de pendências e não sabe nem por onde começar?
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Se você se identificou, saiba que não está sozinho. O estresse no trabalho é uma 
                  das principais causas de problemas de saúde no mundo moderno. E a boa notícia é 
                  que grande parte desse estresse pode ser significativamente reduzida com duas 
                  ferramentas poderosas: <strong>organização</strong> e <strong>planejamento</strong>.
                </p>
                
                <Card className="bg-primary/5 border-primary/20 mb-8">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Lembre-se</h4>
                        <p className="text-muted-foreground">
                          Reduzir o estresse não é sobre fazer mais, é sobre ter clareza 
                          do que precisa ser feito e quando. É sobre recuperar o controle da sua vida profissional.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
              
              {/* Seção 1 */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-primary" />
                  Principais Causas do Estresse no Trabalho
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  Antes de falar sobre soluções, é importante entender de onde vem o problema. 
                  O estresse profissional raramente tem uma única causa — geralmente é uma combinação de fatores:
                </p>
                
                <div className="space-y-4 mb-8">
                  <Card className="border-l-4 border-l-destructive/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">1. Sobrecarga de tarefas</h4>
                      <p className="text-muted-foreground text-sm">
                        Quando você tem mais trabalho do que consegue processar, a sensação de 
                        estar sempre atrasado gera uma pressão constante.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-destructive/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">2. Falta de clareza sobre prioridades</h4>
                      <p className="text-muted-foreground text-sm">
                        Não saber o que é mais importante leva a decisões impulsivas e ao 
                        sentimento de que você está sempre fazendo a coisa errada.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-destructive/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">3. Prazos apertados e imprevistos</h4>
                      <p className="text-muted-foreground text-sm">
                        A corrida contra o tempo, especialmente quando surgem urgências 
                        inesperadas, é uma fonte constante de tensão.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-destructive/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">4. Desorganização digital e física</h4>
                      <p className="text-muted-foreground text-sm">
                        Perder tempo procurando arquivos, e-mails ou informações aumenta 
                        a frustração e consome energia mental preciosa.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-destructive/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">5. Falta de limites entre trabalho e vida pessoal</h4>
                      <p className="text-muted-foreground text-sm">
                        Quando o trabalho invade todos os momentos, não há espaço para 
                        recuperação e descanso mental.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <p className="text-muted-foreground">
                  Perceba que a maioria dessas causas tem algo em comum: <strong>podem ser 
                  atenuadas com sistemas de organização e planejamento bem estruturados</strong>.
                </p>
              </section>
              
              {/* Seção 2 */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Brain className="w-8 h-8 text-primary" />
                  Como a Organização Ajuda a Reduzir a Pressão
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  A organização não é apenas sobre ter uma mesa arrumada ou pastas bonitas no 
                  computador. É sobre criar <strong>estruturas mentais</strong> que reduzem a 
                  carga cognitiva do seu cérebro.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  O cérebro não foi feito para armazenar
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  Quando você tenta manter todas as tarefas, prazos e compromissos na memória, 
                  seu cérebro entra em modo de alerta constante. É como se houvesse várias 
                  "abas abertas" consumindo energia o tempo todo.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-destructive/5 border-destructive/20">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-3">❌ Sem sistema</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Pensamentos circulares sobre tarefas</li>
                        <li>• Medo constante de esquecer algo</li>
                        <li>• Ansiedade ao dormir</li>
                        <li>• Dificuldade de concentração</li>
                        <li>• Sensação de sobrecarga permanente</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-3">✅ Com sistema</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Clareza sobre o que fazer agora</li>
                        <li>• Confiança de que nada será esquecido</li>
                        <li>• Mente tranquila para descansar</li>
                        <li>• Foco total na tarefa atual</li>
                        <li>• Sensação de controle e progresso</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Benefícios concretos da organização para o estresse
                </h3>
                
                <div className="space-y-3 mb-6">
                  {[
                    "Reduz decisões desnecessárias (fadiga de decisão)",
                    "Elimina o tempo perdido procurando informações",
                    "Cria previsibilidade na rotina",
                    "Permite identificar e eliminar tarefas desnecessárias",
                    "Facilita dizer 'não' com consciência",
                    "Melhora a qualidade do sono e descanso"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Seção 3 */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-primary" />
                  Técnicas Práticas de Planejamento Anti-Estresse
                </h2>
                
                <p className="text-muted-foreground mb-8">
                  Agora que você entende por que organização importa, vamos às técnicas práticas 
                  que você pode implementar hoje mesmo:
                </p>
                
                <div className="space-y-8">
                  <Card className="overflow-hidden">
                    <div className="bg-primary/10 px-6 py-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        1. Captura Total (Brain Dump)
                      </h3>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4">
                        Uma vez por semana, tire tudo da sua cabeça e coloque no papel ou em uma 
                        ferramenta digital. Tarefas, preocupações, ideias, lembretes — tudo.
                      </p>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>Como fazer:</strong> Reserve 15 minutos, sem interrupções. Escreva 
                          tudo que vier à mente, sem julgamento. Depois, organize em categorias.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="bg-primary/10 px-6 py-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        2. Planejamento com Buffers
                      </h3>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4">
                        Nunca planeje 100% do seu tempo. Deixe 20-30% livre para imprevistos. 
                        Isso evita a frustração de planos que sempre dão errado.
                      </p>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>Exemplo:</strong> Se você tem 8 horas de trabalho, planeje apenas 
                          5-6 horas de tarefas específicas. O resto é buffer.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="bg-primary/10 px-6 py-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        3. Regra dos 3 Resultados
                      </h3>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4">
                        Todo dia, defina apenas 3 resultados que você precisa alcançar. 
                        Não 10, não 15 — apenas 3 coisas essenciais.
                      </p>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>Por que funciona:</strong> Foco em poucas prioridades aumenta 
                          a chance de conclusão e a sensação de progresso.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="bg-primary/10 px-6 py-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        4. Blocos de Tempo Protegidos
                      </h3>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4">
                        Reserve horários específicos para trabalho focado, sem reuniões ou 
                        interrupções. Trate esses blocos como compromissos inegociáveis.
                      </p>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>Dica:</strong> Comece com blocos de 90 minutos pela manhã, 
                          quando sua energia está mais alta.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="bg-primary/10 px-6 py-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        5. Revisão Semanal
                      </h3>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4">
                        Dedique 30 minutos por semana para revisar o que funcionou, o que 
                        não funcionou e ajustar o planejamento da próxima semana.
                      </p>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>Quando fazer:</strong> Sexta-feira no final do expediente ou 
                          domingo à noite. Escolha o que funciona para você.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="bg-primary/10 px-6 py-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        6. Ritual de Encerramento
                      </h3>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4">
                        Crie um ritual para marcar o fim do expediente. Isso ajuda seu 
                        cérebro a entender que é hora de descansar.
                      </p>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>Sugestão:</strong> Revise o que fez, anote as 3 prioridades 
                          de amanhã, feche todas as abas do navegador, diga "trabalho encerrado".
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
              
              {/* Seção Extra */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Lightbulb className="w-8 h-8 text-primary" />
                  Hábitos Complementares para Reduzir o Estresse
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  Além da organização e planejamento, alguns hábitos podem potencializar 
                  sua sensação de bem-estar no trabalho:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">🚶 Pausas ativas</h4>
                      <p className="text-sm text-muted-foreground">
                        A cada 90 minutos, levante-se e caminhe por 5-10 minutos. 
                        Isso reduz cortisol e aumenta a criatividade.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">🧘 Respiração consciente</h4>
                      <p className="text-sm text-muted-foreground">
                        Antes de reuniões ou momentos tensos, faça 5 respirações 
                        profundas. Acalma o sistema nervoso instantaneamente.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">📵 Períodos offline</h4>
                      <p className="text-sm text-muted-foreground">
                        Estabeleça horários sem e-mail e notificações. 
                        O trabalho profundo acontece sem interrupções.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">🎯 Celebre progressos</h4>
                      <p className="text-sm text-muted-foreground">
                        Reconheça suas conquistas diárias, mesmo as pequenas. 
                        Isso ativa o sistema de recompensa do cérebro.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>
              
              {/* Conclusão */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Conclusão: Organize-se Para Viver Melhor
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  O estresse no trabalho não é inevitável. Com as ferramentas certas de 
                  organização e planejamento, você pode recuperar o controle da sua rotina 
                  e criar espaço para o que realmente importa na vida.
                </p>
                
                <p className="text-muted-foreground mb-6">
                  Lembre-se: não se trata de trabalhar menos ou ser menos ambicioso. 
                  Trata-se de <strong>trabalhar de forma mais inteligente</strong>, com 
                  clareza e propósito, protegendo sua saúde mental no processo.
                </p>
                
                <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 mb-8">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      🌟 Comece Por Aqui
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Escolha apenas uma técnica deste artigo e implemente esta semana. 
                      Pequenas mudanças consistentes geram grandes resultados ao longo do tempo.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sua jornada para uma vida profissional mais equilibrada começa com um único passo.
                    </p>
                  </CardContent>
                </Card>
              </section>
              
              {/* CTA */}
              <BlogCTA variant="default" location="reduzir-estresse-trabalho-organizacao" />
              
              {/* Artigos Relacionados */}
              <RelatedArticles 
                allArticles={relatedArticles}
                currentSlug="reduzir-estresse-trabalho-organizacao"
                category="Bem-estar"
              />
              
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ReduzirEstresseTrabalhoOrganizacao;
