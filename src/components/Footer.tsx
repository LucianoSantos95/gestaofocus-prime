import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-elevated border-t border-card-border">
      <div className="container-focus py-12">
        {/* Main Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <Link 
            to="/sistemas-gratuitos"
            className="text-foreground-muted hover:text-primary transition-colors"
          >
            Templates
          </Link>
          <Link 
            to="/blog"
            className="text-foreground-muted hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <Link 
            to="/sobre-focus"
            className="text-foreground-muted hover:text-primary transition-colors"
          >
            Sobre
          </Link>
          <a 
            href="https://wa.me/5511916742443?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-muted hover:text-primary transition-colors"
          >
            Contato
          </a>
        </div>

        {/* Social */}
        <div className="flex justify-center mb-8">
          <a 
            href="https://instagram.com/tudoemfocus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
            @tudoemfocus
          </a>
        </div>

        {/* Bottom */}
        <div className="border-t border-card-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground-muted text-sm">
              © {currentYear} Focus Gestão Empresarial. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-6">
              <Link 
                to="/termos" 
                className="text-foreground-muted hover:text-primary text-sm transition-colors"
              >
                Termos
              </Link>
              <Link 
                to="/privacidade" 
                className="text-foreground-muted hover:text-primary text-sm transition-colors"
              >
                Privacidade
              </Link>
              <Link 
                to="/cookies" 
                className="text-foreground-muted hover:text-primary text-sm transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
