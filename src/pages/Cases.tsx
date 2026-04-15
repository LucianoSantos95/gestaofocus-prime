import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ApplicationFormModal from "@/components/ApplicationFormModal";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
  DollarSign,
  CheckCircle,
  BarChart3,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import caseFinanceiro from "@/assets/case-financeiro-dashboard.jpg";
import caseCRM from "@/assets/case-crm-dashboard.jpg";
import casePortal from "@/assets/case-portal-dashboard.jpg";

const caseStudies = [
  {
    id: "vertice",
    company: "Agência Vértice",
    segment: "Agência de Marketing Digital — 18 colaboradores",
    image: caseFinanceiro,
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

const Cases = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cases de Sucesso | Software Sob Medida para Agências | Focus"
        description="Veja como agências e consultorias eliminaram o caos operacional com software exclusivo da Focus. Cases reais com resultados mensuráveis."
        canonical="/cases"
        keywords="cases de sucesso software sob medida, portfólio agência digital, sistema personalizado consultoria, resultados Focus"
      />

      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="container-focus relative z-10 text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            Portfólio de Projetos
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Do caos à{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              clareza operacional
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
            Veja como agências e consultorias transformaram sua operação com sistemas exclusivos
            da Focus — e os resultados que alcançaram.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="pb-24">
        <div className="container-focus max-w-5xl space-y-20">
          {caseStudies.map((cs, idx) => (
            <article key={cs.id} className="space-y-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <p className="text-primary font-semibold text-sm mb-1">CASE {idx + 1}</p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{cs.company}</h2>
                  <p className="text-foreground-muted mt-1">{cs.segment}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {cs.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Screenshot */}
              <div className="rounded-xl overflow-hidden border border-card-border/30 shadow-glow">
                <img
                  src={cs.image}
                  alt={`Dashboard do sistema ${cs.company}`}
                  className="w-full h-auto"
                  loading="lazy"
                  width={1280}
                  height={720}
                />
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Challenge */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    🔴 O Desafio
                  </h3>
                  <p className="text-foreground-muted text-sm mb-4 leading-relaxed">
                    {cs.challenge}
                  </p>
                  <ul className="space-y-2">
                    {cs.problems.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground-muted text-sm">
                        <span className="text-red-400 mt-0.5">✗</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    🟢 A Solução Focus
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                    {cs.solution}
                  </p>
                  <Card className="p-4 bg-primary/5 border-primary/20">
                    <p className="text-sm text-foreground-muted">
                      <Clock className="w-4 h-4 inline mr-1 text-primary" />
                      Entregue em <strong className="text-foreground">{cs.deliveryDays} dias úteis</strong>
                    </p>
                  </Card>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cs.results.map((r, i) => (
                  <Card
                    key={i}
                    className="p-5 bg-card/50 backdrop-blur-sm border-card-border/30 text-center"
                  >
                    <r.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">{r.value}</p>
                    <p className="text-foreground-muted text-xs mt-1">{r.label}</p>
                  </Card>
                ))}
              </div>

              {idx < caseStudies.length - 1 && (
                <div className="border-t border-card-border/20 pt-4" />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="container-focus relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Seu projeto pode ser o próximo
          </h2>
          <p className="text-foreground-muted text-lg mb-8">
            Descreva o desafio da sua agência ou consultoria e receba um protótipo visual
            do seu sistema em até 24h — sem custo.
          </p>
          <Button
            onClick={() => setFormOpen(true)}
            className="btn-hero text-lg px-10 py-5 animate-glow"
          >
            QUERO MEU PROTÓTIPO GRATUITO
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />

      <ApplicationFormModal open={formOpen} onOpenChange={setFormOpen} source="cases" />
    </div>
  );
};

export default Cases;
