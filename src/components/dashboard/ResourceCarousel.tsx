import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface Resource {
  title: string;
  description: string;
  href: string;
  icon: string;
}

interface ResourceCarouselProps {
  title: string;
  resources: Resource[];
}

export default function ResourceCarousel({ title, resources }: ResourceCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <div className="flex gap-1">
          <button onClick={() => scroll("left")} className="p-1.5 rounded-lg hover:bg-accent text-foreground-muted">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scroll("right")} className="p-1.5 rounded-lg hover:bg-accent text-foreground-muted">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1">
        {resources.map((resource, i) => (
          <a key={i} href={resource.href} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-64">
            <Card className="service-card h-full p-5">
              <span className="text-2xl mb-3 block">{resource.icon}</span>
              <h4 className="font-semibold text-foreground text-sm mb-1">{resource.title}</h4>
              <p className="text-foreground-muted text-xs line-clamp-2">{resource.description}</p>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
