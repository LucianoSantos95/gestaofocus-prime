import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-elevated border-t border-card-border">
      <div className="container-focus py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1 — Sobre */}
          <div>
            <img
              src="/lovable-uploads/focus-logo.png"
              alt="Focus Gestão Inteligente"
              className="h-7 mb-4"
            />
            <p className="text-foreground-muted text-sm leading-relaxed">
              Focus Gestão Inteligente. Especialistas em transformar processos manuais em Softwares de Alta Performance.
            </p>
          </div>

          {/* Coluna 2 — Links */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Blog de Gestão", href: "/blog" },
                { label: "Termos de Uso", href: "/termos-uso" },
                { label: "Política de Privacidade", href: "/privacidade" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-foreground-muted hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li>Atendimento Online — Brasil</li>
              <li>
                <a
                  href="mailto:contato@focusinteligente.com.br"
                  className="hover:text-primary transition-colors"
                >
                  contato@focusinteligente.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511916742443"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-card-border pt-8">
          <p className="text-foreground-muted text-sm text-center">
            © {currentYear} Focus Gestão Inteligente. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
