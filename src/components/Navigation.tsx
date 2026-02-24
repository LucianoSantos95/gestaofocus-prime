import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackNavigationClick } from "@/lib/analytics";

const navItems = [
  { name: "Soluções Sob Medida", href: "/solucoes-sob-medida" },
  { name: "Blog", href: "/blog" },
  { name: "Sobre", href: "/sobre-focus" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              alt="Focus Gestão Inteligente"
              width="120"
              height="32"
              className="h-8 group-hover:scale-105 transition-transform duration-200"
              loading="eager"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => trackNavigationClick(item.name)}
                className={`py-2 px-4 rounded-lg transition-all duration-200 text-sm ${
                  location.pathname === item.href
                    ? "text-primary font-medium"
                    : "text-foreground-muted hover:text-foreground hover:bg-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Button className="btn-secondary ml-4" asChild>
              <Link to="/auth/login" onClick={() => trackNavigationClick("area_cliente")}>
                <Lock className="w-4 h-4 mr-2" />
                Área do Cliente
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background-elevated/95 backdrop-blur-lg border-b border-card-border">
            <div className="px-6 py-6 space-y-2">
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
                <Button className="btn-secondary w-full" asChild>
                  <Link
                    to="/auth/login"
                    onClick={() => {
                      trackNavigationClick("area_cliente_mobile");
                      setIsOpen(false);
                    }}
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    Área do Cliente
                  </Link>
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
