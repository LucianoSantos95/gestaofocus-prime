import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-elevated border-t border-card-border py-12">
      <div className="container-focus">
        {/* Main Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm">
          <Link 
            to="/sistemas-notion"
            className="text-foreground-muted hover:text-primary transition-colors"
          >
            Templates
          </Link>
          <span className="text-card-border">•</span>
          <a 
            href="https://wa.me/5511916742443?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20consultoria%20empresarial!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-muted hover:text-primary transition-colors"
          >
            Consultoria
          </a>
          <span className="text-card-border">•</span>
          <Link 
            to="/blog"
            className="text-foreground-muted hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <span className="text-card-border">•</span>
          <Link 
            to="/sobre"
            className="text-foreground-muted hover:text-primary transition-colors"
          >
            Sobre
          </Link>
          <span className="text-card-border">•</span>
          <a 
            href="https://wa.me/5511916742443?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20suporte!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-muted hover:text-primary transition-colors"
          >
            Contato
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center mb-8">
          <a
            href="https://instagram.com/tudoemfocus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm">@tudoemfocus</span>
          </a>
        </div>

        {/* Bottom Legal Links */}
        <div className="border-t border-card-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground-muted text-sm">
              © {currentYear} Focus Inteligente. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-4 text-sm">
              <Link 
                to="/termos" 
                className="text-foreground-muted hover:text-primary transition-colors"
              >
                Termos de Uso
              </Link>
              <span className="text-card-border">•</span>
              <Link 
                to="/privacidade" 
                className="text-foreground-muted hover:text-primary transition-colors"
              >
                Privacidade
              </Link>
              <span className="text-card-border">•</span>
              <Link 
                to="/cookies" 
                className="text-foreground-muted hover:text-primary transition-colors"
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
