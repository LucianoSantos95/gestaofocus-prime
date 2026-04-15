import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { CaseStudy } from "./caseStudiesData";

interface Props {
  caseStudy: CaseStudy;
  index: number;
  isLast: boolean;
}

const CaseStudyArticle = ({ caseStudy: cs, index, isLast }: Props) => {
  const [showVideo, setShowVideo] = useState(false);

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

      {/* Screenshot / Video carousel */}
      <div className="relative rounded-xl overflow-hidden border border-card-border/30 shadow-glow">
        <div className="relative overflow-hidden">
          {/* Image */}
          <div
            className={`transition-all duration-500 ease-in-out ${showVideo ? "-translate-x-full opacity-0 absolute inset-0" : "translate-x-0 opacity-100 relative"}`}
          >
            <img
              src={cs.image}
              alt={`Dashboard do sistema ${cs.company}`}
              className="w-full h-auto"
              loading="lazy"
              width={1280}
              height={720}
            />
          </div>

          {/* Video */}
          <div
            className={`transition-all duration-500 ease-in-out ${showVideo ? "translate-x-0 opacity-100 relative" : "translate-x-full opacity-0 absolute inset-0"}`}
          >
          <video
            className="w-full aspect-video bg-muted/20"
            controls
            preload="metadata"
            playsInline
            poster={cs.image}
          >
            <source src={cs.video} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setShowVideo(!showVideo)}
          className="absolute top-1/2 -translate-y-1/2 right-3 z-10 bg-background/80 backdrop-blur-sm border border-card-border/40 rounded-full p-2.5 hover:bg-primary/20 transition-colors shadow-lg"
          aria-label={showVideo ? "Ver screenshot" : "Ver vídeo"}
        >
          {showVideo ? (
            <ChevronLeft className="w-5 h-5 text-foreground" />
          ) : (
            <div className="flex items-center gap-1.5 px-1">
              <Play className="w-4 h-4 text-primary fill-primary" />
              <ChevronRight className="w-4 h-4 text-foreground" />
            </div>
          )}
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          <span className={`w-2 h-2 rounded-full transition-colors ${!showVideo ? "bg-primary" : "bg-foreground/30"}`} />
          <span className={`w-2 h-2 rounded-full transition-colors ${showVideo ? "bg-primary" : "bg-foreground/30"}`} />
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            🔴 O Desafio
          </h3>
          <p className="text-foreground-muted text-sm mb-4 leading-relaxed">{cs.challenge}</p>
          <ul className="space-y-2">
            {cs.problems.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground-muted text-sm">
                <span className="text-red-400 mt-0.5">✗</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            🟢 A Solução Focus
          </h3>
          <p className="text-foreground-muted text-sm leading-relaxed mb-4">{cs.solution}</p>
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
          <Card key={i} className="p-5 bg-card/50 backdrop-blur-sm border-card-border/30 text-center">
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
