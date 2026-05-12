import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import MVPSimulatorPanel from "@/components/dashboard/MVPSimulatorPanel";
import IdeaCanvas from "@/components/mindmap/IdeaCanvas";
import { Loader2 } from "lucide-react";

export default function Dashboard() {
  const [profile, setProfile] = useState<{ full_name: string | null } | null>(null);
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

      const profileRes = await supabase.from("profiles").select("full_name").eq("id", user.id).single();
      setProfile(profileRes.data);
      setLoading(false);
    }

    loadData();
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

  const firstName = profile?.full_name?.split(" ")[0] || "Membro";

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
            Olá, {firstName}! 👋
          </h1>
          <p className="text-foreground-muted mt-1">Comece pelo simulador e organize suas ideias no mapa abaixo.</p>
        </div>

        {/* Simulador de MVP */}
        <section>
          <MVPSimulatorPanel />
        </section>

        {/* Mapa de Ideias */}
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-foreground">Mapa de Ideias</h2>
            <p className="text-sm text-foreground-muted mt-1">
              Capture, conecte e organize suas ideias num espaço imersivo. Clique em "Nova ideia" para começar.
            </p>
          </div>
          <IdeaCanvas />
        </section>
      </div>
    </DashboardLayout>
  );
}
