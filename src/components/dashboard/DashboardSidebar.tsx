import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, BookOpen, HeadphonesIcon, Settings, LogOut, ChevronLeft, ChevronRight, Gauge, Send } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useUserRole } from "@/hooks/useUserRole";

const menuItems = [
  { icon: Home, label: "Início", href: "/dashboard" },
  { icon: Briefcase, label: "Meus Projetos", href: "/dashboard/projetos" },
  { icon: BookOpen, label: "Biblioteca", href: "/dashboard#templates" },
  { icon: HeadphonesIcon, label: "Suporte", href: "/dashboard/suporte" },
  { icon: Settings, label: "Configurações", href: "/dashboard/configuracoes" },
];

const adminMenuItems = [
  { icon: Send, label: "Prospecção", href: "/dashboard/prospeccao" },
  { icon: Gauge, label: "Lighthouse", href: "/dashboard/lighthouse" },
];

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { role } = useUserRole();

  const visibleItems = role === 'admin'
    ? [...menuItems, ...adminMenuItems]
    : menuItems;

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Erro ao fazer logout");
      return;
    }
    toast.success("Logout realizado");
    navigate("/");
  };

  return (
    <aside
      className={`sticky top-0 h-screen flex flex-col border-r border-card-border bg-background-elevated transition-all duration-300 ${
        collapsed ? "w-16" : "w-60"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-4 border-b border-card-border">
        {!collapsed && (
          <Link to="/">
            <img src="/lovable-uploads/focus-logo.png" alt="Focus" className="h-7" />
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-accent text-foreground-muted"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 space-y-1 px-2">
        {visibleItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm ${
                isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground-muted hover:bg-accent hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-2 border-t border-card-border">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-foreground-muted hover:bg-accent hover:text-foreground transition-all text-sm w-full"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span>Sair</span>}
        </button>
      </div>
    </aside>
  );
}
