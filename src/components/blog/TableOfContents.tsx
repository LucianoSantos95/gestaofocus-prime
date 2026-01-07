import { useState, useEffect } from 'react';
import { List, ChevronDown, ChevronUp } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  if (items.length === 0) return null;

  return (
    <nav className="bg-muted/50 rounded-xl p-5 mb-8 border border-border">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left"
      >
        <div className="flex items-center gap-2">
          <List className="w-5 h-5 text-primary" />
          <span className="font-semibold text-foreground">Índice do Artigo</span>
          <span className="text-xs text-muted-foreground">({items.length} seções)</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        )}
      </button>
      
      {isExpanded && (
        <ol className="mt-4 space-y-2 pl-2 border-l-2 border-primary/20">
          {items.map((item, index) => (
            <li key={item.id} className={`${item.level > 2 ? 'ml-4' : ''}`}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-sm transition-colors hover:text-primary flex items-start gap-2 py-1 ${
                  activeId === item.id 
                    ? 'text-primary font-medium' 
                    : 'text-muted-foreground'
                }`}
              >
                <span className="text-primary/60 font-mono text-xs mt-0.5">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{item.text}</span>
              </button>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
};

export default TableOfContents;
