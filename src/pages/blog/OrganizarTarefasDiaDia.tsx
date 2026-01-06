import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BlogCTA from "@/components/BlogCTA";
import articleImage from "@/assets/blog/organizar-tarefas-dia-dia.jpg";

const OrganizarTarefasDiaDia = () => {
  const articleUrl = "https://focusinteligente.com.br/blog/organizar-tarefas-dia-dia";
  const imageUrl = "https://focusinteligente.com.br" + articleImage;

  return (
    <>
      <SEOHead
        title="Como Organizar Tarefas no Dia a Dia Sem Se Sentir Sobrecarregado"
        description="Aprenda a organizar tarefas de forma simples, reduzir a sobrecarga mental e melhorar sua produtividade diária com dicas práticas."
        canonical="/blog/organizar-tarefas-dia-dia"
        image={imageUrl}
        type="article"
        publishedTime="2026-01-06"
        modifiedTime="2026-01-06"
        keywords="organizar tarefas, produtividade, sobrecarga mental, gestão de tempo, rotina produtiva, clareza mental"
      />

      <div className="min-h-screen bg-background">
        <article className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Início</Link>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Organizar Tarefas</span>
            </nav>

            {/* Meta info */}
            <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Produtividade</span>
              <span>6 Jan 2026</span>
              <span>•</span>
              <span>10 min de leitura</span>
            </div>

            {/* Título e Subtítulo */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
                Como Organizar Tarefas no Dia a Dia Sem Se Sentir Sobrecarregado
              </h1>
              <p className="text-xl text-muted-foreground">
                Um guia prático para sair do caos, ganhar clareza e fazer o que importa — sem esgotamento
              </p>
            </header>

            {/* Imagem de Capa */}
            <div className="mb-12 rounded-xl overflow-hidden">
              <img 
                src={articleImage} 
                alt="Mesa de trabalho organizada com lista de tarefas e post-its coloridos"
                className="w-full h-auto"
              />
            </div>

            {/* Conteúdo do Artigo */}
            <div className="prose prose-lg max-w-none">
              
              {/* Introdução */}
              <p className="text-lg leading-relaxed mb-6">
                Você já acordou cedo, cheio de boas intenções, mas terminou o dia com a sensação de que não fez nada que realmente importava?
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Se você vive constantemente com uma lista mental de tarefas que nunca acaba, <strong>você não está sozinho</strong>. A sobrecarga de afazeres é uma das maiores causas de estresse no mundo moderno.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                A boa notícia? <strong>Organizar suas tarefas não precisa ser complicado.</strong> Com algumas mudanças simples, você pode recuperar o controle do seu dia e parar de se sentir constantemente sobrecarregado.
              </p>

              {/* Seção 1 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Por Que a Desorganização Gera Sobrecarga Mental
              </h2>

              <p className="mb-4">
                Antes de falar sobre soluções, é importante entender o problema. A desorganização não é apenas um incômodo — ela tem efeitos reais no seu cérebro e na sua capacidade de funcionar.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                O Efeito Zeigarnik: Por Que Tarefas Pendentes Consomem Energia
              </h3>

              <p className="mb-4">
                Nos anos 1920, a psicóloga Bluma Zeigarnik descobriu algo fascinante: <strong>nosso cérebro lembra muito melhor de tarefas incompletas do que de tarefas finalizadas.</strong>
              </p>

              <p className="mb-4">
                Isso significa que cada tarefa não feita — grande ou pequena — fica "rodando em segundo plano" na sua mente, consumindo energia cognitiva. É como ter dezenas de abas abertas no navegador: mesmo que você não esteja olhando para elas, elas estão lá, ocupando memória.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mb-6 border-l-4 border-primary">
                <p className="text-lg font-medium italic">
                  "Sua mente foi feita para ter ideias, não para armazená-las."
                </p>
                <p className="text-sm text-muted-foreground mt-2">— David Allen, criador do método GTD</p>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Os Sintomas da Sobrecarga de Tarefas
              </h3>

              <ul className="space-y-3 mb-8">
                <li>✗ <strong>Paralisia:</strong> Tantas coisas para fazer que você não sabe por onde começar</li>
                <li>✗ <strong>Ansiedade constante:</strong> Medo de estar esquecendo algo importante</li>
                <li>✗ <strong>Procrastinação:</strong> Evitar começar porque a lista parece infinita</li>
                <li>✗ <strong>Exaustão:</strong> Sentir-se cansado mesmo sem ter feito muito</li>
                <li>✗ <strong>Culpa:</strong> Terminar o dia sentindo que deveria ter feito mais</li>
              </ul>

              {/* Seção 2 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Como Organizar Tarefas de Forma Simples
              </h2>

              <p className="mb-6">
                A chave para organizar tarefas sem complicar é seguir um sistema simples e sustentável. Não adianta criar um método elaborado que você vai abandonar em uma semana.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Passo 1: Tire Tudo da Cabeça
              </h3>

              <p className="mb-4">
                O primeiro passo é fazer um "brain dump" — ou seja, <strong>descarregar tudo o que está na sua mente em um lugar externo</strong>.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">📝 Como fazer o Brain Dump:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Pegue papel e caneta (ou abra um documento)</li>
                  <li>Escreva TUDO que está na sua cabeça — sem filtrar</li>
                  <li>Inclua tarefas de trabalho, pessoais, ideias, preocupações</li>
                  <li>Não se preocupe com ordem ou importância agora</li>
                  <li>Continue até sentir a mente mais leve</li>
                </ol>
              </div>

              <p className="mb-8">
                Esse exercício simples já alivia boa parte da sobrecarga mental. Quando suas tarefas estão no papel, seu cérebro pode relaxar.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Passo 2: Separe o Urgente do Importante
              </h3>

              <p className="mb-4">
                Nem tudo na sua lista merece a mesma atenção. A grande maioria das tarefas que parecem urgentes, na verdade, não são importantes.
              </p>

              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold">🔴 Urgente E Importante</p>
                  <p className="text-muted-foreground">Faça agora. Ex: Prazo de entrega hoje, emergência de saúde</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">🟢 Importante mas NÃO Urgente</p>
                  <p className="text-muted-foreground">Agende. Ex: Planejar projeto, exercício físico, estudar</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold">🟡 Urgente mas NÃO Importante</p>
                  <p className="text-muted-foreground">Delegue ou minimize. Ex: E-mails, reuniões sem pauta</p>
                </div>
                <div className="border-l-4 border-gray-400 pl-4">
                  <p className="font-semibold">⚪ Nem Urgente nem Importante</p>
                  <p className="text-muted-foreground">Elimine. Ex: Redes sociais sem propósito, fofoca</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Passo 3: Defina Suas 3 Prioridades do Dia
              </h3>

              <p className="mb-4">
                Aqui está o segredo: <strong>seu dia não tem espaço para 20 prioridades.</strong> Tente definir apenas 3 tarefas essenciais por dia.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mb-6 border-l-4 border-primary">
                <p className="text-lg font-semibold mb-2">
                  A Regra das 3 Prioridades
                </p>
                <p className="text-muted-foreground">
                  Toda manhã, pergunte: "Se eu pudesse fazer apenas 3 coisas hoje, quais fariam meu dia um sucesso?" Comece por elas.
                </p>
              </div>

              <p className="mb-8">
                Isso não significa ignorar outras tarefas — mas garante que o mais importante seja feito primeiro, antes que o dia fique caótico.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Passo 4: Use Uma Lista Única e Confiável
              </h3>

              <p className="mb-4">
                Um dos maiores erros é ter tarefas espalhadas em vários lugares: post-its, apps, e-mails, cadernos... Isso gera ansiedade porque você nunca tem certeza de que está vendo tudo.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">📋 Características de uma boa lista de tarefas:</p>
                <ul className="space-y-2">
                  <li>✓ <strong>Única:</strong> Tudo em um só lugar</li>
                  <li>✓ <strong>Acessível:</strong> Disponível quando você precisar</li>
                  <li>✓ <strong>Atualizada:</strong> Revisada regularmente</li>
                  <li>✓ <strong>Acionável:</strong> Cada item é uma ação clara</li>
                </ul>
              </div>

              <p className="mb-8">
                Pode ser um app como Notion, Todoist ou até um caderno físico. O importante é que você confie nesse sistema.
              </p>

              {/* Seção 3 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Dicas Práticas Para Manter Clareza no Dia a Dia
              </h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                1. Aplique a Regra dos 2 Minutos
              </h3>

              <p className="mb-4">
                Se uma tarefa leva menos de 2 minutos para ser feita, <strong>faça agora</strong>. Não anote, não adie. Simplesmente execute.
              </p>

              <p className="mb-6">
                Exemplos: responder um e-mail rápido, guardar um objeto, fazer um telefonema curto.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                2. Agrupe Tarefas Similares (Batching)
              </h3>

              <p className="mb-4">
                Trocar de contexto mental é caro para o cérebro. Em vez de responder e-mails ao longo do dia todo, defina horários específicos para isso.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">⚡ Exemplos de batching:</p>
                <ul className="space-y-2">
                  <li>• E-mails: 9h e 15h</li>
                  <li>• Reuniões: terças e quintas</li>
                  <li>• Tarefas administrativas: sexta à tarde</li>
                  <li>• Ligações: depois do almoço</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                3. Faça Revisões Semanais
              </h3>

              <p className="mb-4">
                Reserve 20-30 minutos por semana (sugestão: sexta à tarde ou domingo à noite) para:
              </p>

              <ul className="space-y-2 mb-6">
                <li>✓ Revisar o que foi feito na semana</li>
                <li>✓ Limpar tarefas que não fazem mais sentido</li>
                <li>✓ Definir prioridades da próxima semana</li>
                <li>✓ Verificar calendário de compromissos</li>
              </ul>

              <p className="mb-8">
                Essa revisão regular mantém seu sistema funcionando e evita o acúmulo de "dívida de organização".
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                4. Aprenda a Dizer Não
              </h3>

              <p className="mb-4">
                Grande parte da sobrecarga vem de aceitar mais do que podemos fazer. <strong>Cada "sim" é um "não" para outra coisa</strong> — frequentemente para suas próprias prioridades.
              </p>

              <div className="border-l-4 border-primary pl-4 mb-8">
                <p className="font-semibold mb-2">💡 Dica prática</p>
                <p className="text-muted-foreground">Antes de aceitar um novo compromisso, pergunte: "Se isso fosse amanhã, eu aceitaria?" Se a resposta for não, provavelmente você está aceitando só porque parece distante.</p>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                5. Termine o Dia Planejando o Próximo
              </h3>

              <p className="mb-4">
                Nos últimos 5 minutos do seu dia de trabalho, anote as 3 prioridades do dia seguinte. Isso tem dois benefícios:
              </p>

              <ul className="space-y-2 mb-8">
                <li>✓ Você "fecha" mentalmente o dia atual</li>
                <li>✓ Amanhã você já sabe por onde começar</li>
              </ul>

              {/* Seção 4 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Conclusão: Comece Simples, Mantenha Simples
              </h2>

              <p className="mb-4">
                Organizar tarefas não precisa ser um projeto complexo. O segredo está em:
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mb-6">
                <ol className="list-decimal list-inside space-y-3">
                  <li><strong>Tirar tudo da cabeça</strong> e colocar em um sistema externo</li>
                  <li><strong>Priorizar</strong> o que realmente importa (regra das 3 prioridades)</li>
                  <li><strong>Manter</strong> uma lista única e confiável</li>
                  <li><strong>Revisar</strong> semanalmente para manter o sistema funcionando</li>
                </ol>
              </div>

              <p className="mb-4">
                <strong>Sua tarefa de hoje:</strong> Faça um brain dump de 10 minutos. Escreva tudo que está na sua cabeça. Depois, escolha 3 itens que são suas prioridades para amanhã.
              </p>

              <p className="mb-8">
                É simples? Sim. Funciona? Absolutamente. Comece agora e sinta a diferença em como você termina seu próximo dia de trabalho.
              </p>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-8 rounded-xl border border-primary/20 mb-8">
                <h3 className="text-2xl font-bold mb-3">Quer um sistema pronto para organizar suas tarefas?</h3>
                <p className="text-muted-foreground mb-4">
                  Nossos templates no Notion já vêm estruturados para você aplicar tudo que aprendeu aqui — sem precisar criar do zero.
                </p>
                <Link 
                  to="/sistemas-gratuitos"
                  className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Conheça nossos sistemas no Notion →
                </Link>
              </div>

              {/* Artigos Relacionados */}
              <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground">
                Artigos Relacionados
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <Link 
                  to="/blog/metodo-gtd-guia-completo"
                  className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <p className="font-semibold mb-1">Método GTD: Guia Completo</p>
                  <p className="text-sm text-muted-foreground">Aprenda o sistema que libera sua mente</p>
                </Link>
                <Link 
                  to="/blog/checklist-diario-produtividade"
                  className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <p className="font-semibold mb-1">Checklist Diário</p>
                  <p className="text-sm text-muted-foreground">Aumente sua produtividade em até 40%</p>
                </Link>
                <Link 
                  to="/blog/criar-sistema-produtividade-funciona"
                  className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <p className="font-semibold mb-1">Sistema de Produtividade</p>
                  <p className="text-sm text-muted-foreground">Passo a passo sem complicar</p>
                </Link>
                <Link 
                  to="/blog/matriz-eisenhower-prioridades"
                  className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <p className="font-semibold mb-1">Matriz de Eisenhower</p>
                  <p className="text-sm text-muted-foreground">Como definir prioridades</p>
                </Link>
              </div>

            </div>

            <BlogCTA location="organizar-tarefas-dia-dia" />
          </div>
        </article>
      </div>
    </>
  );
};

export default OrganizarTarefasDiaDia;
