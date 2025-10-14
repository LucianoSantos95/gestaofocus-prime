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
import { ExternalLink, Download } from "lucide-react";

interface Sistema {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  link: string;
}

const SistemasGratuitos = () => {
  // Array de sistemas - você pode adicionar/editar conforme necessário
  const [sistemas] = useState<Sistema[]>([
    {
      id: 1,
      nome: "Sistema de Gestão Básico",
      descricao: "Template completo para organização pessoal e profissional",
      imagem: "/lovable-uploads/focus-logo.png",
      link: "#"
    },
    {
      id: 2,
      nome: "Planejador Semanal",
      descricao: "Organize sua semana com eficiência e produtividade",
      imagem: "/lovable-uploads/focus-logo.png",
      link: "#"
    },
    {
      id: 3,
      nome: "Dashboard de Projetos",
      descricao: "Gerencie múltiplos projetos em um só lugar",
      imagem: "/lovable-uploads/focus-logo.png",
      link: "#"
    },
    {
      id: 4,
      nome: "Tracker de Hábitos",
      descricao: "Acompanhe e desenvolva novos hábitos diariamente",
      imagem: "/lovable-uploads/focus-logo.png",
      link: "#"
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-focus">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="hero-title">
              Sistemas Gratuitos
            </h1>
            <p className="hero-subtitle">
              Templates prontos para transformar sua produtividade. 
              Baixe gratuitamente e comece a organizar sua vida hoje mesmo.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section - Estilo Netflix */}
      <section className="section-padding">
        <div className="container-focus">
          <div className="space-y-12">
            <div className="space-y-4">
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
                    <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-elegant hover:shadow-primary/20">
                      <CardContent className="p-0">
                        {/* Imagem do Sistema */}
                        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                          <img
                            src={sistema.imagem}
                            alt={sistema.nome}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Overlay com botões */}
                          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button
                              size="sm"
                              className="bg-primary hover:bg-primary/90"
                              onClick={() => window.open(sistema.link, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Ver Template
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-primary/50 hover:bg-primary/10"
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Baixar
                            </Button>
                          </div>
                        </div>

                        {/* Informações do Sistema */}
                        <div className="p-6 space-y-2">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {sistema.nome}
                          </h3>
                          <p className="text-foreground-muted text-sm leading-relaxed">
                            {sistema.descricao}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
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
      <section className="section-padding bg-gradient-to-b from-background to-primary/5">
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
    </div>
  );
};

export default SistemasGratuitos;
