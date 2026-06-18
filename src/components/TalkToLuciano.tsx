import { ArrowRight } from "lucide-react";

export const WA_LINK =
  "https://wa.me/5511916742443?text=Ol%C3%A1+Luciano%2C+quero+agendar+um+diagn%C3%B3stico+gratuito+para+minha+empresa";

interface TalkToLucianoProps {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TalkToLuciano = ({
  label = "Agendar diagnóstico gratuito",
  className = "",
  style,
}: TalkToLucianoProps) => {
  return (
    <div className={`talk-card ${className}`} style={style}>
      <div className="talk-card__avatar" aria-hidden="true">
        LS
      </div>
      <div>
        <p className="talk-card__name">Luciano Santos</p>
        <p className="talk-card__role">Fundador · Notion Certified Partner</p>
      </div>
      <span className="talk-card__sep" aria-hidden="true" />
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-accent"
      >
        {label}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default TalkToLuciano;
