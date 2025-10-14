import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import essentialsBadge from "@/assets/notion-academy-essentials.png";
import workflowsBadge from "@/assets/notion-academy-workflows.png";
import advancedBadge from "@/assets/notion-academy-advanced.png";

interface Sistema {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  link: string;
  categoria: string;
  beneficios: string[];
}

const SistemasGratuitos = () => {
  const [selectedSistema, setSelectedSistema] = useState<Sistema | null>(null);
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);

  const badgeInfo = {
    essentials: {
      title: "Notion Academy Essentials",
      description: "Certificação fundamental que demonstra domínio dos conceitos básicos do Notion. Criadores com este badge possuem conhecimento sólido sobre databases, páginas, blocos e funcionalidades essenciais da plataforma."
    },
    workflows: {
      title: "Notion Academy Workflows",
      description: "Certificação avançada que comprova expertise na criação de fluxos de trabalho automatizados e integrados. Criadores certificados sabem construir sistemas complexos que conectam diferentes áreas e otimizam processos."
    },
    advanced: {
      title: "Notion Academy Advanced",
      description: "A certificação mais prestigiada do Notion Academy. Demonstra maestria em fórmulas avançadas, relações complexas, automações sofisticadas e arquitetura de sistemas de alto nível no Notion."
    }
  };
  const [sistemas] = useState<Sistema[]>([
    {
      id: 1,
      nome: "Hub Empresarial Free",
      descricao: "Organize sua empresa com o Hub Empresarial gratuito da Focus. Um sistema no Notion com áreas de finanças, RH, marketing, projetos e mais — tudo em um só lugar, personalizável e pronto para equipes!",
      imagem: "/lovable-uploads/hub-empresarial-free.jpg",
      link: "https://www.notion.com/templates/hub-empresarial-free",
      categoria: "Empresarial",
      beneficios: [
        "Gestão completa de finanças",
        "Controle de RH e equipes",
        "Planejamento de marketing",
        "Gerenciamento de projetos",
        "100% personalizável"
      ]
    },
    {
      id: 2,
      nome: "Hub Vida Pessoal",
      descricao: "Organize sua vida em um só lugar! Com este modelo, você pode gerenciar finanças, viagens, rotina, saúde e metas de forma simples e eficiente. Fácil de usar e personalizável, é o primeiro passo para uma vida mais organizada!",
      imagem: "/lovable-uploads/hub-vida-pessoal.jpg",
      link: "https://www.notion.com/templates/hub-vida-pessoal",
      categoria: "Pessoal",
      beneficios: [
        "Controle financeiro pessoal",
        "Planejamento de viagens",
        "Organização da rotina",
        "Acompanhamento de saúde",
        "Gestão de metas pessoais"
      ]
    },
    {
      id: 3,
      nome: "Controle Financeiro Básico",
      descricao: "Organize suas finanças pessoais no Notion com o Controle Financeiro — controle gastos, acompanhe receitas e alcance seus objetivos com planejamento e eficiência.",
      imagem: "/lovable-uploads/controle-financeiro.jpg",
      link: "https://www.notion.com/templates/controle-financeiro-b-sico",
      categoria: "Pessoal",
      beneficios: [
        "Controle de gastos detalhado",
        "Acompanhamento de receitas",
        "Planejamento financeiro",
        "Visualização de objetivos",
        "Relatórios automáticos"
      ]
    },
    {
      id: 4,
      nome: "Central Social Media",
      descricao: "Gerencie suas redes sociais e campanhas de marketing digital no Notion com o Central Social Media — um template simples e funcional com calendário de conteúdo, planejamento de campanhas, biblioteca de mídia e análises.",
      imagem: "/lovable-uploads/central-social-media.jpg",
      link: "https://www.notion.com/templates/central-social-media-basic",
      categoria: "Empresarial",
      beneficios: [
        "Calendário de conteúdo",
        "Planejamento de campanhas",
        "Biblioteca de mídia organizada",
        "Análise de resultados",
        "Gestão de múltiplas redes"
      ]
    },
    {
      id: 5,
      nome: "Easy Travel",
      descricao: "Planeje viagens perfeitas com o Easy Travel — crie roteiros, controle gastos, organize voos, hospedagens e passeios em um único lugar.",
      imagem: "/lovable-uploads/easy-travel.jpg",
      link: "https://www.notion.com/templates/easy-travel",
      categoria: "Estilo de Vida",
      beneficios: [
        "Criação de roteiros detalhados",
        "Controle de gastos de viagem",
        "Organização de voos",
        "Gestão de hospedagens",
        "Planejamento de passeios"
      ]
    },
    {
      id: 6,
      nome: "Facilitador de Treino",
      descricao: "Organize seus treinos de musculação e cardio com o Facilitador de Treino Básico — um template prático para criar, acompanhar e adaptar seu plano de treino de forma simples e eficiente.",
      imagem: "/lovable-uploads/facilitador-treino.jpg",
      link: "https://www.notion.com/templates/facilitador-de-treino-b-sico",
      categoria: "Estilo de Vida",
      beneficios: [
        "Planos de treino personalizados",
        "Acompanhamento de progresso",
        "Exercícios de musculação",
        "Treinos de cardio",
        "Adaptação fácil de rotinas"
      ]
    },
    {
      id: 7,
      nome: "Biblioteca Digital",
      descricao: "Organize seus livros e conteúdos digitais com praticidade usando o template Biblioteca Digital. Simples, intuitivo e ideal para manter tudo sempre em ordem.",
      imagem: "/lovable-uploads/biblioteca-digital.jpg",
      link: "https://www.notion.com/templates/biblioteca-digital-588",
      categoria: "Estilo de Vida",
      beneficios: [
        "Organização de livros",
        "Catálogo de conteúdos digitais",
        "Sistema de categorias",
        "Acompanhamento de leitura",
        "Interface intuitiva"
      ]
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-focus">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="hero-title">
              Sistemas Gratuitos
            </h1>
            <p className="hero-subtitle">
              Templates prontos para transformar sua produtividade. 
              Baixe gratuitamente e comece a organizar sua vida hoje mesmo.
            </p>
            
            {/* Stats */}
            <div className="mt-12 text-center space-y-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">+12.000</div>
                <div className="text-sm text-foreground-muted">Downloads de sistemas</div>
              </div>
              
              {/* Notion Academy Badges */}
              <div className="flex items-center justify-center gap-6 md:gap-10">
                <img 
                  src={essentialsBadge} 
                  alt="Notion Academy Essentials" 
                  onClick={() => setSelectedBadge('essentials')}
                  className="w-28 h-36 md:w-36 md:h-44 object-contain hover:scale-110 transition-transform duration-300 rounded-xl cursor-pointer"
                />
                <img 
                  src={workflowsBadge} 
                  alt="Notion Academy Workflows" 
                  onClick={() => setSelectedBadge('workflows')}
                  className="w-28 h-36 md:w-36 md:h-44 object-contain hover:scale-110 transition-transform duration-300 rounded-xl cursor-pointer"
                />
                <img 
                  src={advancedBadge} 
                  alt="Notion Academy Advanced" 
                  onClick={() => setSelectedBadge('advanced')}
                  className="w-28 h-36 md:w-36 md:h-44 object-contain hover:scale-110 transition-transform duration-300 rounded-xl cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section - Estilo Netflix */}
      <section className="py-20 md:py-32">
        <div className="container-focus">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Explore Nossos Sistemas
              </h2>
              <p className="text-foreground-muted text-lg">
                Arraste para ver todos os templates disponíveis
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {sistemas.map((sistema) => (
                  <CarouselItem key={sistema.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div 
                      className="group cursor-pointer relative"
                      onClick={() => setSelectedSistema(sistema)}
                    >
                      <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/40 blur-3xl transition-all duration-500 -z-10 scale-75 group-hover:scale-110" />
                      <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-elegant hover:shadow-primary/20 hover:scale-105">
                        <CardContent className="p-0">
                          {/* Imagem do Sistema */}
                          <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                            <img
                              src={sistema.imagem}
                              alt={sistema.nome}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            {/* Category Badge */}
                            <div className="absolute top-3 right-3">
                              <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full backdrop-blur-sm">
                                {sistema.categoria}
                              </span>
                            </div>
                          </div>

                          {/* Informações do Sistema */}
                          <div className="p-6 space-y-2">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                              {sistema.nome}
                            </h3>
                            <p className="text-foreground-muted text-sm leading-relaxed line-clamp-3">
                              {sistema.descricao}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
              <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container-focus">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Precisa de Algo Mais Completo?
            </h2>
            <p className="text-foreground-muted text-lg">
              Conheça nossos sistemas premium com recursos avançados e suporte dedicado
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.location.href = '/sistemas-notion'}
            >
              Ver Sistemas Premium
            </Button>
          </div>
        </div>
      </section>

      {/* Dialog de Detalhes do Sistema */}
      <Dialog open={!!selectedSistema} onOpenChange={() => setSelectedSistema(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedSistema?.nome}</DialogTitle>
            <DialogDescription className="text-base">
              {selectedSistema?.descricao}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            {/* Categoria */}
            <div>
              <h3 className="text-sm font-semibold text-foreground-muted mb-2">Categoria</h3>
              <span className="inline-flex px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg">
                {selectedSistema?.categoria}
              </span>
            </div>

            {/* Benefícios */}
            <div>
              <h3 className="text-sm font-semibold text-foreground-muted mb-3">Benefícios do Sistema</h3>
              <ul className="space-y-2">
                {selectedSistema?.beneficios.map((beneficio, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{beneficio}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botão para abrir template */}
            <Button
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => {
                window.open(selectedSistema?.link, '_blank');
                setSelectedSistema(null);
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Abrir Template no Notion
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog de Certificações Notion Academy */}
      <Dialog open={!!selectedBadge} onOpenChange={() => setSelectedBadge(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">
              {selectedBadge && badgeInfo[selectedBadge as keyof typeof badgeInfo].title}
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed pt-4">
              {selectedBadge && badgeInfo[selectedBadge as keyof typeof badgeInfo].description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SistemasGratuitos;
