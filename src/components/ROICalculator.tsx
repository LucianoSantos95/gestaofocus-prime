import { useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trackCTAClick } from "@/lib/analytics";

const ROICalculator = () => {
  const [hoursWasted, setHoursWasted] = useState<number>(10);
  const [hourlyRate, setHourlyRate] = useState<number>(50);
  const [teamSize, setTeamSize] = useState<number>(3);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    trackCTAClick("ROI Calculator - Calculate", "roi_calculator");
    setShowResults(true);
  };

  // Calculations
  const weeklyWaste = hoursWasted * teamSize;
  const monthlyWaste = weeklyWaste * 4;
  const moneySaved = monthlyWaste * hourlyRate;
  const yearlyROI = moneySaved * 12;
  const hubInvestment = 349; // Hub Empresarial PRO one-time payment
  const paybackWeeks = Math.ceil(hubInvestment / (weeklyWaste * hourlyRate));
  const efficiency = Math.min(Math.round((hoursWasted / 40) * 100), 70); // Max 70% efficiency gain

  return (
    <section id="roi-calculator" className="py-20 bg-muted/30">
      <div className="container-focus">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-4">
            <Calculator className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm text-primary font-medium">
              Calculadora de ROI
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quanto você pode <span className="text-gradient">economizar</span>?
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Descubra em 30 segundos o impacto financeiro de eliminar o retrabalho e a desorganização
          </p>
        </div>

        <Card className="card-elevated max-w-4xl mx-auto p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <Label htmlFor="hours" className="text-base mb-2 block">
                  Quantas horas/semana você perde com retrabalho?
                </Label>
                <Input
                  id="hours"
                  type="number"
                  value={hoursWasted}
                  onChange={(e) => setHoursWasted(Number(e.target.value))}
                  min="1"
                  max="40"
                  className="text-lg"
                />
                <p className="text-sm text-foreground-muted mt-1">
                  Média dos nossos clientes: 15h/semana
                </p>
              </div>

              <div>
                <Label htmlFor="rate" className="text-base mb-2 block">
                  Quanto custa 1 hora do seu tempo? (R$)
                </Label>
                <Input
                  id="rate"
                  type="number"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  min="10"
                  max="1000"
                  className="text-lg"
                />
                <p className="text-sm text-foreground-muted mt-1">
                  Se não sabe, use seu salário/mês ÷ 160h
                </p>
              </div>

              <div>
                <Label htmlFor="team" className="text-base mb-2 block">
                  Quantas pessoas na equipe?
                </Label>
                <Input
                  id="team"
                  type="number"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  min="1"
                  max="50"
                  className="text-lg"
                />
                <p className="text-sm text-foreground-muted mt-1">
                  Incluindo você
                </p>
              </div>

              <Button 
                onClick={calculateROI}
                className="w-full btn-hero group"
                size="lg"
              >
                Calcular Economia
                <TrendingUp className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Results */}
            <div className={`space-y-4 transition-all duration-500 ${showResults ? 'opacity-100' : 'opacity-50'}`}>
              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary-glow/10 border border-primary/20">
                <div className="text-sm text-foreground-muted mb-1">Economia Mensal</div>
                <div className="text-4xl font-bold text-primary mb-2">
                  R$ {moneySaved.toLocaleString('pt-BR')}
                </div>
                <div className="text-sm text-foreground-muted">
                  {monthlyWaste}h recuperadas/mês × R$ {hourlyRate}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-muted">
                <div className="text-sm text-foreground-muted mb-1">ROI Anual</div>
                <div className="text-2xl font-bold text-foreground">
                  R$ {yearlyROI.toLocaleString('pt-BR')}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-muted">
                <div className="text-sm text-foreground-muted mb-1">Retorno do Investimento</div>
                <div className="text-2xl font-bold text-foreground">
                  {paybackWeeks} semanas
                </div>
                <div className="text-sm text-foreground-muted mt-1">
                  Investimento único: R$ {hubInvestment}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30">
                <div className="text-sm text-foreground-muted mb-1">Ganho de Eficiência</div>
                <div className="text-2xl font-bold text-accent">
                  +{efficiency}%
                </div>
                <div className="text-sm text-foreground-muted mt-1">
                  Baseado em {hoursWasted}h/semana desperdiçadas
                </div>
              </div>

              {showResults && (
                <div className="mt-6 p-4 border border-primary/30 rounded-lg bg-primary/5">
                  <p className="text-sm text-foreground-muted mb-3">
                    💡 Com esses números, o Hub Empresarial se paga em <strong className="text-primary">{paybackWeeks} semanas</strong> e você economiza <strong className="text-primary">R$ {yearlyROI.toLocaleString('pt-BR')}</strong> no primeiro ano.
                  </p>
                  <Button 
                    className="w-full btn-hero"
                    onClick={() => {
                      trackCTAClick("ROI Calculator - CTA Click", "roi_calculator");
                      window.location.href = "/hub-empresarial";
                    }}
                  >
                    Quero Economizar Agora
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-sm text-foreground-muted mb-4">
            Junte-se a mais de 150 empresas que já economizam tempo e dinheiro:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="px-4 py-2 rounded-full bg-muted">
              <span className="text-primary font-bold">15h/semana</span> economizadas em média
            </div>
            <div className="px-4 py-2 rounded-full bg-muted">
              <span className="text-primary font-bold">70%</span> menos retrabalho
            </div>
            <div className="px-4 py-2 rounded-full bg-muted">
              <span className="text-primary font-bold">R$ 6.000+</span> economizados/ano
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
