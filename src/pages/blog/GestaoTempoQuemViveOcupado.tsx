import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Target, Calendar, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlogCTA from "@/components/BlogCTA";
import heroImage from "@/assets/blog/gestao-tempo-quem-vive-ocupado.jpg";

const GestaoTempoQuemViveOcupado = () => {
  const navigate = useNavigate();
  const imageUrl = "https://focusinteligente.com.br" + heroImage;

  return (
    <>
      <SEOHead
        title="Gestão do Tempo para Quem Vive Ocupado: Estratégias Simples que Funcionam | Focus Inteligente"
        description="Descubra estratégias práticas de gestão do tempo para pessoas ocupadas. Aprenda a priorizar, eliminar desperdiçadores de tempo e recuperar o controle da sua agenda."
        canonical="/blog/gestao-tempo-quem-vive-ocupado"
        image={imageUrl}
        type="article"
        publishedTime="2025-02-20"
        modifiedTime="2025-02-20"
        keywords="gestão do tempo, produtividade, ocupados, priorização, matriz eisenhower, time blocking"
      />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <BlogBreadcrumb 
            articleTitle="Gestão do Tempo" 
            articleSlug="gestao-tempo-quem-vive-ocupado" 
          />
          
          <Button
            variant="ghost"
            onClick={() => navigate("/blog")}
            className="mb-8 hover:bg-accent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o Blog
          </Button>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Gestão do Tempo para Quem Vive Ocupado: Estratégias Simples que Realmente Funcionam
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Recupere o controle da sua agenda com técnicas práticas que cabem na rotina de quem tem pouco tempo
            </p>
            <img 
              src={heroImage}
              alt="Pessoa gerenciando tempo com tablet mostrando agenda organizada"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
            />
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime="2025-02-20">20 de fevereiro de 2025</time>
              <span>•</span>
              <span>9 min de leitura</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Você sente que o dia não tem horas suficientes? Termina o expediente com a sensação de que fez muito, mas avançou pouco no que realmente importa?
            </p>

            <p className="text-lg leading-relaxed mb-8">
              <strong>Você não está sozinho.</strong> A maioria das pessoas ocupadas enfrenta o mesmo desafio: tempo limitado e demandas infinitas. A boa notícia? Existem estratégias simples e comprovadas que transformam sua relação com o tempo.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Clock className="h-8 w-8 text-primary" />
              O Problema Não é Falta de Tempo
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Todos temos as mesmas 24 horas por dia. A diferença está em como priorizamos e organizamos essas horas. Pessoas produtivas não fazem mais coisas — elas fazem as coisas certas.
            </p>

            <div className="bg-accent/20 border-l-4 border-primary p-6 rounded-r-lg my-8">
              <p className="text-lg font-semibold mb-2">⚠️ A Verdade Inconveniente:</p>
              <p className="text-base">
                Passar horas respondendo e-mails ou em reuniões improdutivas cria a ilusão de produtividade, mas não gera resultados reais. Estar ocupado não é o mesmo que ser produtivo.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Target className="h-8 w-8 text-primary" />
              Estratégia 1: Priorize Ruthlessly (Implacavelmente)
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              A primeira regra da gestão do tempo é aprender a dizer NÃO. Não para tudo, mas para o que não está alinhado com suas prioridades principais.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Use a Matriz de Eisenhower</h3>
            <p className="text-lg leading-relaxed mb-6">
              Divida suas tarefas em 4 quadrantes:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <span><strong>Urgente e Importante:</strong> Faça imediatamente (crises, prazos críticos)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <span><strong>Importante, mas Não Urgente:</strong> Agende (planejamento, relacionamentos, saúde)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">3.</span>
                <span><strong>Urgente, mas Não Importante:</strong> Delegue (interrupções, alguns e-mails)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">4.</span>
                <span><strong>Nem Urgente, Nem Importante:</strong> Elimine (redes sociais excessivas, reuniões desnecessárias)</span>
              </li>
            </ul>

            <div className="bg-accent/20 border-l-4 border-primary p-6 rounded-r-lg my-8">
              <p className="text-base">
                <strong>Dica prática:</strong> Reserve 80% do seu tempo para o quadrante 2 (Importante, mas Não Urgente). É aqui que acontecem os avanços reais na carreira e vida pessoal.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Calendar className="h-8 w-8 text-primary" />
              Estratégia 2: Bloqueie Tempo para o Que Importa
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Sua agenda deve refletir suas prioridades. Se algo é realmente importante, reserve um bloco de tempo específico para isso — assim como você faria com uma reunião.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Como Aplicar o Time Blocking:</h3>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong>Manhã:</strong> Reserve para trabalho profundo (tarefas complexas que exigem foco)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong>Tarde:</strong> Reuniões, comunicação e tarefas administrativas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong>Fim do dia:</strong> Planejamento do dia seguinte e tarefas leves</span>
              </li>
            </ul>

            <p className="text-lg leading-relaxed mb-6">
              Trate esses blocos como compromissos inegociáveis. Se alguém pedir uma reunião durante seu horário de trabalho profundo, ofereça outro momento.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Zap className="h-8 w-8 text-primary" />
              Estratégia 3: Elimine Desperdiçadores de Tempo
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Identifique e corte atividades que consomem tempo sem gerar valor. Aqui estão os vilões mais comuns:
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">1. Redes Sociais sem Propósito</h3>
            <p className="text-lg leading-relaxed mb-6">
              Use aplicativos como Forest ou Freedom para bloquear distrações durante horários de trabalho. Defina horários específicos para checar redes sociais (ex: após o almoço e fim do expediente).
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2. E-mails a Toda Hora</h3>
            <p className="text-lg leading-relaxed mb-6">
              Em vez de checar e-mails constantemente, defina 2-3 horários fixos por dia. Use a técnica de "processar, não revisar": responda, arquive ou delegue cada e-mail de uma vez.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3. Reuniões Desnecessárias</h3>
            <p className="text-lg leading-relaxed mb-6">
              Antes de aceitar uma reunião, pergunte: "Isso pode ser resolvido por e-mail ou mensagem?". Se a resposta for sim, decline educadamente e sugira a alternativa.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">4. Multitarefa</h3>
            <p className="text-lg leading-relaxed mb-6">
              Estudos mostram que multitarefa reduz a produtividade em até 40%. Concentre-se em uma tarefa por vez até completá-la ou atingir um marco importante.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Estratégia 4: Use a Regra dos 2 Minutos</h2>

            <p className="text-lg leading-relaxed mb-6">
              Se uma tarefa leva menos de 2 minutos, faça imediatamente. Não adicione à lista, não adie. Responder um e-mail rápido, arquivar um documento ou fazer uma ligação breve — resolva na hora.
            </p>

            <div className="bg-accent/20 border-l-4 border-primary p-6 rounded-r-lg my-8">
              <p className="text-base">
                <strong>Por que funciona:</strong> Evita acúmulo de micro-tarefas que, juntas, consomem energia mental e espaço na sua lista de afazeres.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Estratégia 5: Planeje o Dia na Noite Anterior</h2>

            <p className="text-lg leading-relaxed mb-6">
              Dedique 10 minutos no fim do dia para planejar o dia seguinte. Liste as 3 tarefas mais importantes (MIT - Most Important Tasks) e programe quando você vai executá-las.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Benefícios:</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-lg">✓ Você acorda sabendo exatamente o que precisa fazer</li>
              <li className="text-lg">✓ Reduz a procrastinação e a indecisão</li>
              <li className="text-lg">✓ Aumenta a sensação de controle sobre o dia</li>
              <li className="text-lg">✓ Permite que você durma melhor (menos preocupações)</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Estratégia 6: Aprenda a Delegar</h2>

            <p className="text-lg leading-relaxed mb-6">
              Você não precisa fazer tudo sozinho. Identifique tarefas que podem ser delegadas a colegas, assistentes virtuais ou automatizadas com ferramentas.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Perguntas para Avaliar:</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-lg">→ Outra pessoa pode fazer isso 80% tão bem quanto eu?</li>
              <li className="text-lg">→ Esta tarefa realmente precisa do meu toque pessoal?</li>
              <li className="text-lg">→ Existe uma ferramenta que automatiza isso?</li>
            </ul>

            <p className="text-lg leading-relaxed mb-6">
              Se a resposta for sim para as duas primeiras ou sim para a terceira, delegue ou automatize.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Ferramentas que Ajudam</h2>

            <ul className="space-y-4 mb-8">
              <li className="text-lg"><strong>Notion ou Todoist:</strong> Organize tarefas e projetos em um só lugar</li>
              <li className="text-lg"><strong>Google Calendar:</strong> Bloqueie tempo para tarefas importantes</li>
              <li className="text-lg"><strong>Forest ou Freedom:</strong> Bloqueie distrações digitais</li>
              <li className="text-lg"><strong>Zapier ou Make:</strong> Automatize tarefas repetitivas</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>

            <p className="text-lg leading-relaxed mb-6">
              Gestão do tempo não é sobre fazer mais coisas — é sobre fazer as coisas certas com foco e intenção. As estratégias acima são simples, mas extremamente eficazes quando aplicadas consistentemente.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Comece implementando uma estratégia por vez. Teste por uma semana, ajuste conforme necessário e adicione a próxima. Lembre-se: pequenas mudanças consistentes geram resultados extraordinários.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              O tempo é o recurso mais valioso que você tem. Use-o com sabedoria.
            </p>
          </div>

          <BlogCTA variant="default" location="gestao-tempo-quem-vive-ocupado" />
        </article>

        <Footer />
      </div>
    </>
  );
};

export default GestaoTempoQuemViveOcupado;
