import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Share2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ListaEsperaSucesso = () => {
  const navigate = useNavigate();
  
  const shareUrl = "https://focusinteligente.com.br/lista-espera";
  const shareText = "Acabei de entrar na lista de espera do Focus Club! 🚀 Plataforma completa de produtividade e sistemas Notion. Entre também:";

  const handleShare = (platform: string) => {
    let url = "";
    
    switch(platform) {
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background-secondary">
      <Helmet>
        <title>Você está na lista! - Focus Club</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="section-padding">
        <div className="container-focus">
          <div className="max-w-2xl mx-auto">
            {/* Success Animation */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary mb-6 animate-bounce">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Você está na lista! 🎉
              </h1>
              
              <p className="text-xl text-foreground-muted mb-8">
                Obrigado por se juntar a nós. Em breve você receberá um email com mais informações sobre o lançamento e seu desconto exclusivo de 30%.
              </p>
            </div>

            {/* What's Next Card */}
            <Card className="card-hover p-8 mb-8 border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                O Que Acontece Agora?
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Confirme seu email",
                    description: "Verifique sua caixa de entrada (e spam) para confirmar seu cadastro"
                  },
                  {
                    step: "2",
                    title: "Fique de olho",
                    description: "Enviaremos atualizações sobre o progresso do desenvolvimento e data de lançamento"
                  },
                  {
                    step: "3",
                    title: "Acesso antecipado",
                    description: "Você será um dos primeiros a receber o link de acesso quando lançarmos"
                  },
                  {
                    step: "4",
                    title: "Ganhe seu desconto",
                    description: "Use o código exclusivo que enviaremos para garantir 30% OFF no plano anual"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-foreground-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Share Section */}
            <Card className="card-hover p-8 mb-8 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <div className="text-center mb-6">
                <Share2 className="w-10 h-10 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Compartilhe com Amigos
                </h2>
                <p className="text-foreground-muted">
                  Ajude outros profissionais a descobrir o Focus Club
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  variant="outline"
                  onClick={() => handleShare('whatsapp')}
                  className="flex-1 min-w-[140px]"
                >
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleShare('twitter')}
                  className="flex-1 min-w-[140px]"
                >
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleShare('linkedin')}
                  className="flex-1 min-w-[140px]"
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleShare('facebook')}
                  className="flex-1 min-w-[140px]"
                >
                  Facebook
                </Button>
              </div>
            </Card>

            {/* Explore More */}
            <div className="text-center">
              <p className="text-foreground-muted mb-4">
                Enquanto isso, explore nosso conteúdo gratuito
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => navigate('/blog')}
                >
                  Ler o Blog
                </Button>
                <Button
                  onClick={() => navigate('/sistemas-gratuitos')}
                  className="group"
                >
                  Ver Sistemas Gratuitos
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListaEsperaSucesso;
