import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, User, Lock } from "lucide-react";

export default function SettingsPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changingPassword, setChangingPassword] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      setEmail(user.email || "");

      const { data } = await supabase.from("profiles").select("full_name").eq("id", user.id).single();
      setFullName(data?.full_name || "");
      setLoading(false);
    }
    loadProfile();
  }, []);

  const handleSaveProfile = async () => {
    setSaving(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase.from("profiles").update({ full_name: fullName.trim() }).eq("id", user.id);
    if (error) {
      toast.error("Erro ao salvar perfil");
    } else {
      toast.success("Perfil atualizado!");
    }
    setSaving(false);
  };

  const handleChangePassword = async () => {
    if (newPassword.length < 6) {
      toast.error("A senha deve ter pelo menos 6 caracteres");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("As senhas não coincidem");
      return;
    }

    setChangingPassword(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Senha alterada com sucesso!");
      setNewPassword("");
      setConfirmPassword("");
    }
    setChangingPassword(false);
  };

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
      <div className="p-6 lg:p-8 max-w-2xl space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Configurações</h1>
          <p className="text-foreground-muted mt-1">Gerencie seu perfil e segurança</p>
        </div>

        {/* Profile */}
        <Card className="service-card">
          <div className="flex items-center gap-2 mb-4">
            <User className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Perfil</h2>
          </div>
          <div className="space-y-4">
            <div>
              <Label className="text-foreground-muted">Nome Completo</Label>
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                maxLength={100}
                className="bg-background border-card-border text-foreground"
              />
            </div>
            <div>
              <Label className="text-foreground-muted">E-mail</Label>
              <Input value={email} disabled className="bg-background border-card-border text-foreground-muted" />
            </div>
            <Button onClick={handleSaveProfile} disabled={saving} className="btn-hero">
              {saving ? <Loader2 className="w-4 h-4 animate-spin mr-1" /> : null}
              Salvar Alterações
            </Button>
          </div>
        </Card>

        {/* Password */}
        <Card className="service-card">
          <div className="flex items-center gap-2 mb-4">
            <Lock className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Alterar Senha</h2>
          </div>
          <div className="space-y-4">
            <div>
              <Label className="text-foreground-muted">Nova Senha</Label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                className="bg-background border-card-border text-foreground"
              />
            </div>
            <div>
              <Label className="text-foreground-muted">Confirmar Nova Senha</Label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repita a nova senha"
                className="bg-background border-card-border text-foreground"
              />
            </div>
            <Button onClick={handleChangePassword} disabled={changingPassword} className="btn-secondary">
              {changingPassword ? <Loader2 className="w-4 h-4 animate-spin mr-1" /> : null}
              Alterar Senha
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
