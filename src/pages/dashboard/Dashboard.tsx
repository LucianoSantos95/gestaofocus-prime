import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useUserRole } from "@/hooks/useUserRole";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import HeroBanner from "@/components/dashboard/HeroBanner";
import ProjectCard from "@/components/dashboard/ProjectCard";
import ResourceCarousel from "@/components/dashboard/ResourceCarousel";
import { Loader2 } from "lucide-react";

const libraryResources = [
  { title: "Controle Financeiro", description: "Gerencie receitas, despesas e fluxo de caixa", href: "#", icon: "💰" },
  { title: "CRM de Vendas", description: "Pipeline de vendas e gestão de clientes", href: "#", icon: "🤝" },
  { title: "Gestão de Projetos", description: "Organize projetos com Kanban e prazos", href: "#", icon: "📋" },
  { title: "RH & Equipe", description: "Gerencie colaboradores e desempenho", href: "#", icon: "👥" },
  { title: "Marketing", description: "Planeje campanhas e conteúdo", href: "#", icon: "📢" },
];

const templateResources = [
  { title: "Hub Empresarial Free", description: "Sistema gratuito de gestão empresarial", href: "#", icon: "🏢" },
  { title: "Biblioteca Digital", description: "Organize livros e materiais de estudo", href: "#", icon: "📚" },
  { title: "Easy Travel", description: "Planeje suas viagens com eficiência", href: "#", icon: "✈️" },
  { title: "Central Social Media", description: "Gerencie suas redes sociais", href: "#", icon: "📱" },
];

interface ClientProject {
  id: string;
  project_name: string;
  description: string | null;
  status: string;
  progress: number;
  delivery_date: string | null;
  cover_image_url: string | null;
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
      <div className="p-6 lg:p-8 max-w-6xl space-y-8">
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

        {/* Biblioteca */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Biblioteca de Recursos</h2>
          <ResourceCarousel title="Módulos do Hub" resources={libraryResources} />
          <ResourceCarousel title="Templates Gratuitos" resources={templateResources} />
        </section>
      </div>
    </DashboardLayout>
  );
}
