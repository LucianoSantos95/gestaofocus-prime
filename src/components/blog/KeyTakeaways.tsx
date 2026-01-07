import { Lightbulb, CheckCircle2 } from 'lucide-react';

interface KeyTakeawaysProps {
  items: string[];
  readTime?: string;
}

const KeyTakeaways = ({ items, readTime }: KeyTakeawaysProps) => {
  return (
    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 mb-8 border border-primary/20">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-foreground">Principais Pontos do Artigo</h3>
        {readTime && (
          <span className="ml-auto text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
            {readTime} de leitura
          </span>
        )}
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyTakeaways;
