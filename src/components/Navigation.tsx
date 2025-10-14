import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick, trackNavigationClick } from "@/lib/analytics";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Consultoria Notion", href: "/sistemas-notion" },
    { name: "Sprint Produtividade", href: "/sprint-produtividade" },
    { name: "Hub Empresarial", href: "/hub-empresarial" },
    { name: "Focus Club", href: "/focus-club" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background-elevated/90 backdrop-blur-lg border-b border-card-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container-focus">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/lovable-uploads/focus-logo.png" 
              alt="Focus" 
              className="h-8 group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative py-2 px-4 rounded-lg transition-all duration-200 ${
                  location.pathname === item.href
                    ? "text-primary font-medium"
                    : "text-foreground-muted hover:text-foreground hover:bg-accent"
                }`}
                onClick={() => trackNavigationClick(item.name)}
              >
                {item.name}
                {location.pathname === item.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            
            <Button 
              className="btn-hero ml-4"
              onClick={() => {
                trackWhatsAppClick('header');
                window.open('https://wa.me/5511916742443?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20personaliza%C3%A7%C3%A3o%20de%20sistemas.', '_blank');
              }}
            >
              Falar com Focus
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background-elevated/95 backdrop-blur-lg border-b border-card-border">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    trackNavigationClick(item.name);
                    setIsOpen(false);
                  }}
                  className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
                    location.pathname === item.href
                      ? "text-primary font-medium bg-accent"
                      : "text-foreground-muted hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-card-border">
                <Button 
                  className="btn-hero w-full"
                  onClick={() => {
                    trackWhatsAppClick('mobile_menu');
                    window.open('https://wa.me/5511916742443?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20personaliza%C3%A7%C3%A3o%20de%20sistemas.', '_blank');
                  }}
                >
                  Falar com Focus
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;