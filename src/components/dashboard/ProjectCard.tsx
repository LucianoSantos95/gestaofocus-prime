import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  projectName: string;
  description?: string | null;
  status: string;
  progress: number;
  deliveryDate?: string | null;
  coverImageUrl?: string | null;
  totalSprints?: number;
  currentSprint?: number;
  clientName?: string | null;
}

const statusLabels: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  em_andamento: { label: "Em Andamento", variant: "default" },
  concluido: { label: "Concluído", variant: "secondary" },
  pausado: { label: "Pausado", variant: "outline" },
  aguardando: { label: "Aguardando", variant: "outline" },
};

export default function ProjectCard({ projectName, description, status, progress, deliveryDate, coverImageUrl, totalSprints, currentSprint, clientName }: ProjectCardProps) {
  const statusInfo = statusLabels[status] || { label: status, variant: "outline" as const };

  return (
    <Link to="/dashboard/projetos" className="block">
      <Card className="service-card overflow-hidden group hover:border-primary/30 transition-all cursor-pointer">
        {coverImageUrl && (
          <div className="h-32 -mx-8 -mt-8 mb-4 overflow-hidden">
            <img src={coverImageUrl} alt={projectName} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-foreground text-lg">{projectName}</h3>
            {clientName && <p className="text-xs text-foreground-muted">Cliente: {clientName}</p>}
          </div>
          <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
        </div>
        {description && (
          <p className="text-foreground-muted text-sm mb-4 line-clamp-2">{description}</p>
        )}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-foreground-muted">
            <span>{totalSprints && totalSprints > 1 ? `Sprint ${currentSprint || 1} de ${totalSprints}` : "Progresso"}</span>
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
    </Link>
  );
}
