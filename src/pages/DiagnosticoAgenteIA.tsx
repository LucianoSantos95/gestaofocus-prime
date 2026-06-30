import SEOHead from '@/components/SEOHead';
import DiagnosticoFlow from '@/features/diagnostico/DiagnosticoFlow';

const FAQ_ITEMS = [
  {
    question: 'O que é um agente de IA?',
    answer:
      'Um agente de IA é um software que executa tarefas de forma autônoma — respondendo clientes, enviando follow-ups, automatizando processos internos ou gerenciando cobranças — sem precisar de um humano operando manualmente a cada ação. Diferente de um chatbot simples, um agente pode tomar decisões com base em contexto e integrar com outros sistemas.',
  },
  {
    question: 'Quanto custa implementar um agente de IA?',
    answer:
      'Varia muito com o tipo e a complexidade. Ferramentas prontas de atendimento e automação têm planos gratuitos ou a partir de R$50/mês. Agentes personalizados desenvolvidos sob medida partem de R$3.000 para projetos simples. O diagnóstico gratuito ajuda a entender qual caminho faz sentido para o seu momento.',
  },
  {
    question: 'Quanto tempo leva para implementar?',
    answer:
      'Para ferramentas de prateleira (Typebot, Make, Asaas), entre 1 e 2 semanas para configuração inicial. Para agentes sob medida, o prazo típico é de 15 a 30 dias dependendo da complexidade. O mais importante é começar com o problema certo — o que este diagnóstico ajuda a identificar.',
  },
];

export default function DiagnosticoAgenteIA() {
  return (
    <>
      <SEOHead
        title="Qual Agente de IA Sua Empresa Precisa? Diagnóstico Gratuito em 2 Minutos"
        description="Responda 7 perguntas e descubra qual tipo de agente de IA resolve o maior gargalo da sua empresa — atendimento, vendas, operação ou financeiro. Gratuito e sem compromisso."
        canonical="/diagnostico-agente-ia"
        keywords="agente de IA para empresa, diagnóstico de IA, automação para PME, chatbot empresarial, agente de atendimento, automação de vendas"
        faqItems={FAQ_ITEMS}
        breadcrumbItems={[{ name: 'Diagnóstico de Agente de IA', url: '/diagnostico-agente-ia' }]}
      />
      <DiagnosticoFlow />
    </>
  );
}
