import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useUserRole } from '@/hooks/useUserRole';
import { toast } from 'sonner';
import { 
  Crown, 
  Play, 
  Layers, 
  BookOpen, 
  MessageSquare, 
  LogOut,
  Sparkles
} from 'lucide-react';

export default function Dashboard() {
  const { role, isLoading } = useUserRole();
  const [profile, setProfile] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      setProfile(data);
    }

    loadProfile();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error('Erro ao fazer logout');
      return;
    }
    toast.success('Logout realizado com sucesso');
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/focus-logo.png" 
              alt="Focus Club" 
              className="h-8"
            />
            <Badge variant={role === 'pro' ? 'default' : 'secondary'}>
              {role === 'pro' ? (
                <><Crown className="w-3 h-3 mr-1" /> PRO</>
              ) : 'FREE'}
            </Badge>
          </div>
          
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Olá, {profile?.full_name || 'Membro'}! 👋
          </h1>
          <p className="text-muted-foreground">
            Bem-vindo ao seu painel do Focus Club
          </p>
        </div>

        {/* Upgrade Banner for FREE users */}
        {role === 'free' && (
          <Card className="mb-8 border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Desbloqueie Todo o Conteúdo
              </CardTitle>
              <CardDescription>
                Upgrade para PRO e tenha acesso ilimitado a todos os cursos, sistemas e comunidade
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg">
                <Crown className="w-4 h-4 mr-2" />
                Fazer Upgrade para PRO
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Play className="w-5 h-5 text-primary" />
                <Badge variant="secondary">Em breve</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">0/0</div>
              <p className="text-sm text-muted-foreground">Aulas Concluídas</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Layers className="w-5 h-5 text-primary" />
                <Badge variant="secondary">Em breve</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">0</div>
              <p className="text-sm text-muted-foreground">Sistemas Disponíveis</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <BookOpen className="w-5 h-5 text-primary" />
                <Badge variant="secondary">Em breve</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">0</div>
              <p className="text-sm text-muted-foreground">Playbooks</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <MessageSquare className="w-5 h-5 text-primary" />
                <Badge variant="secondary">Em breve</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">0</div>
              <p className="text-sm text-muted-foreground">Posts na Comunidade</p>
            </CardContent>
          </Card>
        </div>

        {/* Coming Soon Message */}
        <Card>
          <CardHeader>
            <CardTitle>Plataforma em Desenvolvimento</CardTitle>
            <CardDescription>
              Estamos construindo uma experiência incrível para você
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              O Focus Club está sendo desenvolvido com muito carinho. Em breve você terá acesso a:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Play className="w-4 h-4 text-primary" />
                <span>Cursos completos de produtividade e gestão</span>
              </li>
              <li className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                <span>Sistemas Notion prontos para usar</span>
              </li>
              <li className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <span>Playbooks mensais com estratégias práticas</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>Comunidade exclusiva de membros</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
