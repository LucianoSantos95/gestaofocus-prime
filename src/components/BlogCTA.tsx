import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';
import { trackEvent, trackWhatsAppClick } from '@/lib/analytics';

interface BlogCTAProps {
  variant?: 'default' | 'download' | 'whatsapp';
  location: string;
}

export default function BlogCTA({ variant = 'default', location }: BlogCTAProps) {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick(`blog_cta_${location}`);
    trackEvent('blog_cta_click', {
      event_category: 'conversion',
      event_label: `whatsapp_${location}`,
      variant: variant,
    });
    window.open('https://wa.me/5511916742443?text=Ol%C3%A1%2C%20li%20um%20artigo%20no%20blog%20e%20quero%20saber%20mais!', '_blank');
  };

  const handleDownloadClick = () => {
    trackEvent('blog_cta_click', {
      event_category: 'conversion',
      event_label: `download_${location}`,
      variant: variant,
    });
    window.location.href = '/solucoes-sob-medida';
  };

  if (variant === 'download') {
    return (
      <Card className="p-8 bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4">
            <Download className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Quer aplicar isso na prática?</h3>
          <p className="text-foreground-muted mb-6">
            Baixe nossos sistemas Notion gratuitos e comece a organizar sua empresa hoje mesmo
          </p>
          <Button onClick={handleDownloadClick} className="btn-hero">
            Baixar Sistemas Gratuitos
            <Download className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Card>
    );
  }

  if (variant === 'whatsapp') {
    return (
      <Card className="p-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-4">
            <MessageCircle className="w-6 h-6 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Precisa de ajuda personalizada?</h3>
          <p className="text-foreground-muted mb-6">
            Agende uma consultoria gratuita e descubra como podemos transformar sua gestão empresarial
          </p>
          <Button onClick={handleWhatsAppClick} className="btn-hero bg-green-600 hover:bg-green-700">
            Falar com Especialista
            <MessageCircle className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Card>
    );
  }

  // Default variant
  return (
    <Card className="p-8 bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/20">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-2">Gostou do conteúdo?</h3>
          <p className="text-foreground-muted">
            Continue aprendendo com mais artigos sobre produtividade e gestão empresarial
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={handleDownloadClick} 
            variant="outline"
            className="flex-1"
          >
            <Download className="w-4 h-4 mr-2" />
            Sistemas Grátis
          </Button>
          <Button 
            onClick={handleWhatsAppClick}
            className="btn-hero flex-1"
          >
            Falar Conosco
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
