import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DollarSign,
  Users,
  Megaphone,
  FolderKanban,
  UserCheck,
  ListChecks,
  Settings,
  BookOpen,
} from "lucide-react";

const modules = [
  {
    icon: DollarSign,
    title: "Finanças",
    description: "Controle receitas, despesas e fluxo de caixa com visão clara do seu financeiro.",
    popular: true,
  },
  {
    icon: Users,
    title: "RH & Equipe",
    description: "Gerencie colaboradores, férias, documentos e desempenho da equipe.",
    popular: true,
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Planeje campanhas, gerencie conteúdo e acompanhe resultados.",
    popular: false,
  },
  {
    icon: FolderKanban,
    title: "Projetos",
    description: "Organize projetos com Kanban, prazos e acompanhamento de progresso.",
    popular: false,
  },
  {
    icon: UserCheck,
    title: "Clientes (CRM)",
    description: "Cadastre clientes, acompanhe negociações e nunca perca um lead.",
    popular: false,
  },
  {
    icon: ListChecks,
    title: "Atividades",
    description: "Gerencie tarefas diárias, checklists e rotinas com produtividade.",
    popular: false,
  },
  {
    icon: Settings,
    title: "Processos",
    description: "Documente e padronize processos para escalar sem perder qualidade.",
    popular: false,
  },
  {
    icon: BookOpen,
    title: "Guia Inicial",
    description: "Passo a passo para configurar tudo e começar a usar em minutos.",
    popular: false,
  },
];

const HubFocusModules = () => {
  return (
    <section id="modulos" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            8 módulos para gerenciar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              tudo
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Do financeiro ao marketing, do CRM aos processos — cada área do seu negócio organizada
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((mod, index) => (
            <Card
              key={index}
              className="bg-background/50 border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 relative"
            >
              {mod.popular && (
                <div className="absolute -top-3 right-4">
                  <Badge className="bg-primary text-primary-foreground text-xs">
                    Mais Popular
                  </Badge>
                </div>
              )}
              <CardContent className="p-5 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <mod.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{mod.title}</h3>
                <p className="text-sm text-muted-foreground">{mod.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubFocusModules;
