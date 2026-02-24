import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Loader2, CheckCircle2, Circle, PlayCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface Sprint {
  id: string;
  sprint_number: number;
  title: string;
  description: string | null;
  status: string;
  start_date: string | null;
  end_date: string | null;
}

interface Project {
  id: string;
  project_name: string;
  client_name: string | null;
  description: string | null;
  status: string;
  progress: number;
  total_sprints: number;
  current_sprint: number;
  delivery_date: string | null;
}

const statusLabels: Record<string, { label: string; variant: "default" | "secondary" | "outline" }> = {
  em_andamento: { label: "Em Andamento", variant: "default" },
  concluido: { label: "Concluído", variant: "secondary" },
  pausado: { label: "Pausado", variant: "outline" },
  aguardando: { label: "Aguardando", variant: "outline" },
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [sprints, setSprints] = useState<Record<string, Sprint[]>>({});
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: projectsData } = await supabase
        .from("client_projects")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (projectsData) {
        setProjects(projectsData as Project[]);

        const projectIds = projectsData.map((p: any) => p.id);
        if (projectIds.length > 0) {
          const { data: sprintsData } = await supabase
            .from("project_sprints")
            .select("*")
            .in("project_id", projectIds)
            .order("sprint_number", { ascending: true });

          if (sprintsData) {
            const grouped: Record<string, Sprint[]> = {};
            (sprintsData as Sprint[]).forEach((s: any) => {
              if (!grouped[s.project_id]) grouped[s.project_id] = [];
              grouped[s.project_id].push(s);
            });
            setSprints(grouped);
          }
        }
      }

      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Meus Projetos</h1>
          <p className="text-foreground-muted mt-1">Acompanhe o andamento dos seus projetos contratados</p>
        </div>

        {projects.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-foreground-muted">
              Nenhum projeto ativo no momento. Quando você contratar um serviço, seus projetos aparecerão aqui.
            </p>
          </Card>
        ) : (
          <div className="space-y-6">
            {projects.map((project) => {
              const statusInfo = statusLabels[project.status] || { label: project.status, variant: "outline" as const };
              const isExpanded = expandedProject === project.id;
              const projectSprints = sprints[project.id] || [];

              return (
                <Card
                  key={project.id}
                  className="p-6 cursor-pointer transition-all hover:border-primary/30"
                  onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">{project.project_name}</h2>
                      {project.client_name && (
                        <p className="text-sm text-foreground-muted">Cliente: {project.client_name}</p>
                      )}
                    </div>
                    <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
                  </div>

                  {project.description && (
                    <p className="text-sm text-foreground-muted mb-4">{project.description}</p>
                  )}

                  {/* Progress */}
                  <div className="space-y-2 mb-2">
                    <div className="flex justify-between text-xs text-foreground-muted">
                      <span>Sprint {project.current_sprint} de {project.total_sprints}</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  {/* Sprint Timeline */}
                  {isExpanded && projectSprints.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-card-border">
                      <h3 className="text-sm font-semibold text-foreground mb-4">Timeline de Sprints</h3>
                      <div className="space-y-0">
                        {projectSprints.map((sprint, idx) => {
                          const isLast = idx === projectSprints.length - 1;
                          return (
                            <div key={sprint.id} className="flex gap-4">
                              {/* Timeline indicator */}
                              <div className="flex flex-col items-center">
                                {sprint.status === "concluida" ? (
                                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                ) : sprint.status === "em_andamento" ? (
                                  <PlayCircle className="w-5 h-5 text-primary animate-pulse flex-shrink-0" />
                                ) : (
                                  <Circle className="w-5 h-5 text-foreground-muted/40 flex-shrink-0" />
                                )}
                                {!isLast && (
                                  <div className={`w-0.5 h-full min-h-[2rem] ${
                                    sprint.status === "concluida" ? "bg-green-500/30" : "bg-card-border"
                                  }`} />
                                )}
                              </div>

                              {/* Content */}
                              <div className="pb-6">
                                <p className={`text-sm font-medium ${
                                  sprint.status === "concluida"
                                    ? "text-green-500"
                                    : sprint.status === "em_andamento"
                                    ? "text-primary"
                                    : "text-foreground-muted"
                                }`}>
                                  {sprint.title}
                                </p>
                                {sprint.description && (
                                  <p className="text-xs text-foreground-muted mt-1">{sprint.description}</p>
                                )}
                                {(sprint.start_date || sprint.end_date) && (
                                  <p className="text-xs text-foreground-muted/60 mt-1">
                                    {sprint.start_date && new Date(sprint.start_date).toLocaleDateString("pt-BR")}
                                    {sprint.start_date && sprint.end_date && " → "}
                                    {sprint.end_date && new Date(sprint.end_date).toLocaleDateString("pt-BR")}
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {isExpanded && projectSprints.length === 0 && (
                    <div className="mt-6 pt-6 border-t border-card-border">
                      <p className="text-sm text-foreground-muted text-center">
                        Detalhes das sprints serão adicionados em breve.
                      </p>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
