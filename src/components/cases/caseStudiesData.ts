import {
  TrendingUp,
  Clock,
  Users,
  DollarSign,
  BarChart3,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import caseFinanceiro from "@/assets/case-financeiro-dashboard.png";
import caseCRM from "@/assets/case-crm-dashboard.png";
import casePortal from "@/assets/case-portal-dashboard.png";

export interface CaseResult {
  icon: typeof DollarSign;
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  company: string;
  segment: string;
  image: string;
  video: string;
  challenge: string;
  problems: string[];
  solution: string;
  results: CaseResult[];
  deliveryDays: number;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "vertice",
    company: "Agência Vértice",
    segment: "Agência de Marketing Digital — 18 colaboradores",
    image: caseFinanceiro,
    video: "/videos/case-financeiro.mp4",
    challenge:
      "A Agência Vértice gerenciava o financeiro de 25+ projetos simultâneos usando planilhas compartilhadas no Google Sheets. Erros de fórmula passavam despercebidos, o fluxo de caixa era atualizado manualmente e o controle de comissões por projeto era inexistente — causando conflitos com a equipe comercial.",
    problems: [
      "Perda de R$ 8.000/mês por erros de fórmula invisíveis",
      "3h/dia do financeiro atualizando planilhas manualmente",
      "Sem visibilidade do lucro real por projeto",
      "Conflitos recorrentes de comissão com vendedores",
    ],
    solution:
      "Sistema financeiro exclusivo com Fluxo de Caixa automatizado, DRE por projeto, Contas a Pagar/Receber com alertas e módulo de comissões com cálculo automático por projeto.",
    results: [
      { icon: DollarSign, label: "Economia mensal", value: "R$ 8.200" },
      { icon: Clock, label: "Tempo recuperado", value: "45h/mês" },
      { icon: TrendingUp, label: "Visibilidade financeira", value: "100%" },
      { icon: Users, label: "Conflitos de comissão", value: "Zero" },
    ],
    deliveryDays: 22,
    tags: ["Financeiro", "Automação", "Dashboard"],
  },
  {
    id: "impulso",
    company: "Consultoria Impulso",
    segment: "Consultoria Empresarial — 12 colaboradores",
    image: caseCRM,
    video: "/videos/case-crm.mp4",
    challenge:
      "A Consultoria Impulso perdia oportunidades por gerenciar o pipeline comercial no WhatsApp e anotações espalhadas. Propostas eram feitas em Word, sem padronização, e não havia visão consolidada da carteira de clientes nem do ticket médio por serviço.",
    problems: [
      "40% dos leads se perdiam entre primeiro contato e proposta",
      "Propostas levavam 2 dias para serem montadas manualmente",
      "Sem métricas de conversão ou ticket médio",
      "Carteira de clientes sem segmentação ou histórico",
    ],
    solution:
      "CRM personalizado com pipeline visual (Kanban), geração automática de propostas em PDF com a identidade visual da empresa, dashboard de métricas comerciais e gestão completa da carteira de clientes.",
    results: [
      { icon: TrendingUp, label: "Taxa de conversão", value: "+35%" },
      { icon: Clock, label: "Tempo por proposta", value: "15 min" },
      { icon: BarChart3, label: "Visão de métricas", value: "Tempo real" },
      { icon: DollarSign, label: "Ticket médio", value: "+22%" },
    ],
    deliveryDays: 28,
    tags: ["CRM", "Vendas", "Propostas"],
  },
  {
    id: "nova-midia",
    company: "Nova Mídia Digital",
    segment: "Agência de Social Media — 22 colaboradores",
    image: casePortal,
    video: "/videos/case-portal.mp4",
    challenge:
      "A Nova Mídia Digital enviava relatórios de performance por e-mail e recebia aprovações de conteúdo via WhatsApp. Os clientes reclamavam da falta de transparência, e a equipe gastava horas recompilando dados para relatórios semanais.",
    problems: [
      "Clientes insatisfeitos com falta de visibilidade dos projetos",
      "5h/semana por account montando relatórios manuais",
      "Aprovações de conteúdo perdidas no WhatsApp",
      "Sem controle de SLA ou prazo de entrega",
    ],
    solution:
      "Portal do Cliente exclusivo onde cada cliente acessa seus projetos em tempo real, aprova demandas com um clique, visualiza relatórios automáticos semanais e acompanha o cronograma com barras de progresso.",
    results: [
      { icon: Users, label: "Satisfação do cliente", value: "+60%" },
      { icon: Clock, label: "Tempo em relatórios", value: "-80%" },
      { icon: Smartphone, label: "Aprovações no portal", value: "100%" },
      { icon: ShieldCheck, label: "Controle de SLA", value: "Automático" },
    ],
    deliveryDays: 25,
    tags: ["Portal do Cliente", "Relatórios", "Aprovações"],
  },
];
