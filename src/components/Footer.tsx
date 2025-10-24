import { Target, Mail, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Sistemas Notion", href: "/sistemas-notion" },
      { name: "Sprint Produtividade", href: "/sprint-produtividade" },
      { name: "Hub Empresarial", href: "/hub-empresarial" },
      { name: "metodofocus", href: "/focus-club" }
    ],
    company: [
      { name: "Sobre a Focus", href: "/sobre" },
      { name: "Contato", href: "https://api.whatsapp.com/send/?phone=5511916742443&text=Ol%C3%A1%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+personaliza%C3%A7%C3%A3o+de+sistemas.&type=phone_number&app_absent=0" }
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
                <div className="w-10 h-10 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/4a125d6e-b8ad-4fde-a87f-349e56af291e.png" 
                    alt="Focus Logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
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
                    {link.name === 'Contato' ? (
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground-muted hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.href}
                        className="text-foreground-muted hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )}
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