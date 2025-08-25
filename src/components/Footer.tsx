import { Target, Mail, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Sistemas Notion", href: "/sistemas-notion" },
      { name: "Sprint Produtividade", href: "/sprint-produtividade" },
      { name: "Hub Empresarial", href: "/hub-empresarial" },
      { name: "Focus Club", href: "/focus-club" }
    ],
    company: [
      { name: "Sobre a Focus", href: "/sobre" },
      { name: "Contato", href: "/contato" }
    ],
    support: [
      { name: "Central de Ajuda", href: "/ajuda" },
      { name: "Documentação", href: "/docs" },
      { name: "Status da Plataforma", href: "/status" },
      { name: "Política de Privacidade", href: "/privacidade" }
    ]
  };

  return (
    <footer className="bg-background-elevated border-t border-card-border">
      <div className="container-focus">
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="p-2 bg-gradient-primary rounded-xl">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl text-foreground">Focus</span>
              </Link>
              
              <p className="text-foreground-muted leading-relaxed mb-6 max-w-md">
                Somos especialistas em gestão empresarial e produtividade. Ajudamos empresas 
                e profissionais a crescerem com eficiência por meio de sistemas personalizados, 
                processos organizados e metodologias comprovadas que geram resultados reais.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-foreground-muted">
                  <Mail className="w-4 h-4 mr-3 text-primary" />
                  <span>comercial@focusinteligente.com.br</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-foreground mb-6">Serviços</h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-foreground-muted hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-foreground mb-6">Empresa</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-foreground-muted hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-foreground mb-6">Suporte</h3>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-foreground-muted hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-card-border py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-foreground-muted text-sm">
              © {currentYear} Focus. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link 
                to="/termos" 
                className="text-foreground-muted hover:text-primary text-sm transition-colors duration-200"
              >
                Termos de Uso
              </Link>
              <Link 
                to="/privacidade" 
                className="text-foreground-muted hover:text-primary text-sm transition-colors duration-200"
              >
                Privacidade
              </Link>
              <Link 
                to="/cookies" 
                className="text-foreground-muted hover:text-primary text-sm transition-colors duration-200"
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