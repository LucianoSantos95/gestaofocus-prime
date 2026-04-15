import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { CaseStudy } from "./caseStudiesData";

interface Props {
  caseStudy: CaseStudy;
  index: number;
  isLast: boolean;
}

const CaseStudyArticle = ({ caseStudy: cs, index, isLast }: Props) => {
  return (
    <article className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="text-primary font-semibold text-sm mb-1">CASE {index + 1}</p>
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

      {/* Screenshot + Video side by side */}
      <div className="grid md:grid-cols-2 gap-6">
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
        <div className="rounded-xl overflow-hidden border border-card-border/30 shadow-glow bg-muted/20">
          <video
            className="w-full h-full object-cover"
            controls
            preload="metadata"
            playsInline
            poster={cs.image}
          >
            <source src={cs.video} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>
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

      {!isLast && <div className="border-t border-card-border/20 pt-4" />}
    </article>
  );
};

export default CaseStudyArticle;
