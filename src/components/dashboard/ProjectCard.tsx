import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface ProjectCardProps {
  projectName: string;
  description?: string | null;
  status: string;
  progress: number;
  deliveryDate?: string | null;
  coverImageUrl?: string | null;
}

const statusLabels: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  em_andamento: { label: "Em Andamento", variant: "default" },
  concluido: { label: "Concluído", variant: "secondary" },
  pausado: { label: "Pausado", variant: "outline" },
  aguardando: { label: "Aguardando", variant: "outline" },
};

export default function ProjectCard({ projectName, description, status, progress, deliveryDate, coverImageUrl }: ProjectCardProps) {
  const statusInfo = statusLabels[status] || { label: status, variant: "outline" as const };

  return (
    <Card className="service-card overflow-hidden group">
      {coverImageUrl && (
        <div className="h-32 -mx-8 -mt-8 mb-4 overflow-hidden">
          <img src={coverImageUrl} alt={projectName} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-foreground text-lg">{projectName}</h3>
        <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
      </div>
      {description && (
        <p className="text-foreground-muted text-sm mb-4 line-clamp-2">{description}</p>
      )}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-foreground-muted">
          <span>Progresso</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      {deliveryDate && (
        <div className="flex items-center gap-1.5 mt-3 text-xs text-foreground-muted">
          <Calendar className="w-3.5 h-3.5" />
          <span>Entrega: {new Date(deliveryDate).toLocaleDateString("pt-BR")}</span>
        </div>
      )}
    </Card>
  );
}
