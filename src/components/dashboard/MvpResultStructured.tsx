import { useState } from "react";
import { Download, Calendar, Target, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import { exportMvpPdf } from "@/lib/exportMvpPdf";

const PROFILE_LABELS: Record<string, { name: string; range: string; tagline: string; color: string }> = {
  concierge: { name: "Concierge Manual", range: "0–5", tagline: "MVP de 30 dias, 100% manual", color: "from-amber-500 to-orange-500" },
  estruturado: { name: "Estruturado", range: "6–10", tagline: "MVP de 60 dias, 1 canal + landing", color: "from-blue-500 to-cyan-500" },
  escalavel: { name: "Escalável", range: "11–15", tagline: "MVP de 90 dias, automação + tráfego", color: "from-emerald-500 to-teal-500" },
};

interface Props {
  result: any;
  businessName?: string | null;
}

export default function MvpResultStructured({ result, businessName }: Props) {
  const [downloading, setDownloading] = useState(false);
  const profile = PROFILE_LABELS[result.profile] || PROFILE_LABELS.estruturado;
  const ai = result.ai_result || {};
  const focoTabela: Array<{ area: string; por_que: string; como_fazer: string }> = ai.foco_tabela || [];
  const cronograma: Array<any> = ai.cronograma || [];

  const handleDownload = async () => {
    try {
      setDownloading(true);
      await exportMvpPdf("mvp-result", `plano-mvp-${profile.name.toLowerCase().replace(/\s/g, "-")}.pdf`);
      toast.success("PDF gerado!");
    } catch (e: any) {
      toast.error("Erro ao gerar PDF");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div id="mvp-result" className="space-y-6 p-1">
        {/* Header */}
        <div className="space-y-3">
          <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${profile.color} px-4 py-1.5 text-sm font-semibold text-white`}>
            <CheckCircle2 className="w-4 h-4" /> Perfil: {profile.name}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            {businessName ? `Plano de MVP para ${businessName}` : "Seu plano de MVP personalizado"}
          </h3>
          <p className="text-foreground-muted text-sm">
            Pontuação <span className="font-semibold text-foreground">{result.score}/15</span> · Faixa do perfil: <span className="font-semibold text-foreground">{profile.range}</span> · {profile.tagline}
          </p>
          {ai.veredito && <p className="text-foreground leading-relaxed pt-2">{ai.veredito}</p>}
        </div>

        {/* Tabela de foco */}
        {focoTabela.length > 0 && (
          <div className="rounded-xl border border-card-border bg-background p-5">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-primary" />
              <h4 className="font-semibold text-foreground text-lg">Onde focar e como fazer</h4>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[25%]">Área de foco</TableHead>
                    <TableHead className="w-[35%]">Por que importa</TableHead>
                    <TableHead className="w-[40%]">Como fazer</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {focoTabela.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium text-foreground align-top">{row.area}</TableCell>
                      <TableCell className="text-foreground-muted align-top">{row.por_que}</TableCell>
                      <TableCell className="text-foreground-muted align-top">{row.como_fazer}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}

        {/* Cronograma expansível */}
        {cronograma.length > 0 && (
          <div className="rounded-xl border border-card-border bg-background p-5">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-primary" />
              <h4 className="font-semibold text-foreground text-lg">Cronograma semana a semana</h4>
            </div>
            <Accordion type="multiple" className="w-full">
              {cronograma.map((item: any, idx: number) => {
                const passos: string[] = item.passo_a_passo || [];
                return (
                  <AccordionItem key={idx} value={`week-${idx}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3 text-left">
                        <span className="rounded-md bg-primary/15 text-primary text-xs font-mono font-semibold px-2 py-1 shrink-0">
                          Semana {item.semana || idx + 1}
                        </span>
                        <span className="font-medium text-foreground">{item.tarefa || item.atividade}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <div className="space-y-4 pl-1">
                        {passos.length > 0 && (
                          <div>
                            <p className="text-xs uppercase tracking-wide text-foreground-muted mb-2">Passo a passo</p>
                            <ol className="space-y-2">
                              {passos.map((p, pi) => (
                                <li key={pi} className="flex gap-3 text-sm text-foreground-muted">
                                  <span className="shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-semibold">
                                    {pi + 1}
                                  </span>
                                  <span>{p}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        )}
                        {item.criterio_sucesso && (
                          <div className="rounded-md bg-emerald-500/10 border border-emerald-500/20 p-3 text-sm">
                            <span className="text-emerald-400 font-semibold">Critério de sucesso: </span>
                            <span className="text-foreground-muted">{item.criterio_sucesso}</span>
                          </div>
                        )}
                        {typeof item.custo_rs === "number" && (
                          <p className="text-sm text-foreground-muted">
                            <span className="font-semibold text-foreground">Custo estimado: </span>
                            R$ {item.custo_rs.toLocaleString("pt-BR")}
                          </p>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        )}

        {/* Lucratividade resumida */}
        {(ai.lucratividade_realista_rs || ai.lucratividade_otimista_rs) && (
          <div className="rounded-xl border border-card-border bg-background p-5">
            <h4 className="font-semibold text-foreground mb-3">Projeção de lucratividade mensal</h4>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="text-center p-3 rounded-lg bg-background-elevated">
                <p className="text-xs text-foreground-muted">Pessimista</p>
                <p className="text-lg font-bold text-foreground mt-1">R$ {(ai.lucratividade_pessimista_rs || 0).toLocaleString("pt-BR")}</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-primary/10 border border-primary/30">
                <p className="text-xs text-primary">Realista</p>
                <p className="text-lg font-bold text-foreground mt-1">R$ {(ai.lucratividade_realista_rs || 0).toLocaleString("pt-BR")}</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-background-elevated">
                <p className="text-xs text-foreground-muted">Otimista</p>
                <p className="text-lg font-bold text-foreground mt-1">R$ {(ai.lucratividade_otimista_rs || 0).toLocaleString("pt-BR")}</p>
              </div>
            </div>
          </div>
        )}

        {/* Fallback antigos */}
        {focoTabela.length === 0 && cronograma.length === 0 && ai.plano_markdown && (
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-sm text-foreground-muted">
            Esta simulação foi feita antes da nova estrutura. <span className="text-foreground font-medium">Refaça a simulação</span> para visualizar a tabela de foco e o cronograma detalhado.
          </div>
        )}
      </div>

      {/* Download */}
      <div className="flex justify-center">
        <Button onClick={handleDownload} disabled={downloading} variant="outline" size="lg">
          <Download className="w-4 h-4 mr-2" />
          {downloading ? "Gerando PDF..." : "Baixar MVP em PDF"}
        </Button>
      </div>
    </div>
  );
}
