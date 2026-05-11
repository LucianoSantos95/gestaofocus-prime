import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useUserRole } from "@/hooks/useUserRole";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import HeroBanner from "@/components/dashboard/HeroBanner";
import ProjectCard from "@/components/dashboard/ProjectCard";
import TemplateCard from "@/components/dashboard/TemplateCard";
import IdeaCanvas from "@/components/mindmap/IdeaCanvas";
import { Loader2 } from "lucide-react";

const templates = [
  { title: "Hub Empresarial Free", image: "/lovable-uploads/hub-empresarial-free.jpg", href: "https://www.notion.com/templates/hub-empresarial-free" },
  { title: "Controle Financeiro", image: "/lovable-uploads/controle-financeiro.jpg", href: "https://www.notion.com/templates/controle-financeiro-b-sico" },
  { title: "Hub Vida Pessoal", image: "/lovable-uploads/hub-vida-pessoal.jpg", href: "https://www.notion.com/templates/hub-vida-pessoal" },
  { title: "Central Social Media", image: "/lovable-uploads/central-social-media.jpg", href: "https://www.notion.com/templates/central-social-media-basic" },
  { title: "Facilitador de Treino", image: "/lovable-uploads/facilitador-treino.jpg", href: "https://www.notion.com/templates/facilitador-de-treino-b-sico" },
  { title: "Easy Travel", image: "/lovable-uploads/easy-travel.jpg", href: "https://www.notion.com/templates/easy-travel" },
  { title: "Biblioteca Digital", image: "/lovable-uploads/biblioteca-digital.jpg", href: "https://www.notion.com/templates/biblioteca-digital-588" },
];

interface ClientProject {
  id: string;
  project_name: string;
  description: string | null;
  status: string;
  progress: number;
  delivery_date: string | null;
  cover_image_url: string | null;
  total_sprints: number;
  current_sprint: number;
  client_name: string | null;
}

export default function Dashboard() {
  const { role, isLoading: roleLoading } = useUserRole();
  const [profile, setProfile] = useState<{ full_name: string | null } | null>(null);
  const [projects, setProjects] = useState<ClientProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Claim anonymous MVP simulation if exists (covers Google OAuth signup)
      const anonId = localStorage.getItem("mvp_anon_session_id");
      if (anonId) {
        supabase.functions.invoke("claim-simulation", { body: { anon_session_id: anonId } })
          .catch(console.error);
      }

      const [profileRes, projectsRes] = await Promise.all([
        supabase.from("profiles").select("full_name").eq("id", user.id).single(),
        supabase.from("client_projects").select("*").eq("user_id", user.id).order("created_at", { ascending: false }),
      ]);

      setProfile(profileRes.data);
      setProjects((projectsRes.data as ClientProject[]) || []);
      setLoading(false);
    }

    loadData();
  }, []);

  if (roleLoading || loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </DashboardLayout>
    );
  }

  const firstName = profile?.full_name?.split(" ")[0] || "Membro";

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-8">
        {/* Welcome */}
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
            Olá, {firstName}! 👋
          </h1>
          <p className="text-foreground-muted mt-1">Bem-vindo ao seu painel do Focus Club</p>
        </div>

        {/* Hero Banner */}
        <HeroBanner />

        {/* Meus Projetos */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Meus Projetos</h2>
          {projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  projectName={project.project_name}
                  description={project.description}
                  status={project.status}
                  progress={project.progress}
                  deliveryDate={project.delivery_date}
                  coverImageUrl={project.cover_image_url}
                  totalSprints={project.total_sprints}
                  currentSprint={project.current_sprint}
                  clientName={project.client_name}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-card-border bg-background-elevated p-8 text-center">
              <p className="text-foreground-muted">
                Nenhum projeto ativo no momento. Quando você contratar um serviço, seus projetos aparecerão aqui.
              </p>
            </div>
          )}
        </section>

        {/* Templates Gratuitos */}
        <section id="templates">
          <h2 className="text-xl font-semibold text-foreground mb-4">Templates Gratuitos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {templates.map((t) => (
              <TemplateCard key={t.title} title={t.title} image={t.image} href={t.href} />
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
