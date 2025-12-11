import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
  ];

  const productItems = [
    { name: "Hub Empresarial", href: "/hub-empresarial" },
    { name: "Controle Financeiro PRO", href: "/controle-financeiro-pro" },
    { name: "Sprint de Produtividade", href: "/sprint-produtividade" },
    { name: "Sistemas Gratuitos", href: "/sistemas-gratuitos" },
  ];

  const finalNavItems = [
    { name: "Focus Pro", href: "/focus-pro", highlight: true },
    { name: "Blog", href: "/blog" },
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
              alt="Focus - Sistemas em Notion e Gestão Empresarial" 
              width="120"
              height="32"
              className="h-8 group-hover:scale-105 transition-transform duration-200"
              loading="eager"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link to={item.href} onClick={() => trackNavigationClick(item.name)}>
                      <NavigationMenuLink
                        className={`relative py-2 px-4 rounded-lg transition-all duration-200 ${
                          location.pathname === item.href
                            ? "text-primary font-medium"
                            : "text-foreground-muted hover:text-foreground hover:bg-accent"
                        }`}
                      >
                        {item.name}
                        {location.pathname === item.href && (
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                        )}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}

                {/* Produtos Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`relative py-2 px-4 rounded-lg transition-all duration-200 ${
                      productItems.some(item => location.pathname === item.href)
                        ? "text-primary font-medium"
                        : "text-foreground-muted hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    Produtos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[240px] p-2">
                      {productItems.map((item) => (
                        <li key={item.name}>
                          <Link to={item.href} onClick={() => trackNavigationClick(item.name)}>
                            <NavigationMenuLink
                              className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
                                location.pathname === item.href
                                  ? "text-primary font-medium bg-accent"
                                  : "text-foreground-muted hover:text-foreground hover:bg-accent"
                              }`}
                            >
                              {item.name}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {finalNavItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link to={item.href} onClick={() => trackNavigationClick(item.name)}>
                      <NavigationMenuLink
                        className={`relative py-2 px-4 rounded-lg transition-all duration-200 ${
                          location.pathname === item.href
                            ? "text-primary font-medium"
                            : "text-foreground-muted hover:text-foreground hover:bg-accent"
                        }`}
                      >
                        {item.name}
                        {item.highlight && (
                          <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-semibold">
                            Novo
                          </span>
                        )}
                        {location.pathname === item.href && (
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                        )}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button 
              className="btn-hero ml-4"
              onClick={() => {
                trackNavigationClick('waitlist_header');
                window.location.href = '/lista-espera';
              }}
            >
              Entrar na Lista
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
              
              {/* Produtos Section Mobile */}
              <div>
                <div className="py-3 px-4 text-foreground font-medium">Produtos</div>
                <div className="pl-4 space-y-2">
                  {productItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => {
                        trackNavigationClick(item.name);
                        setIsOpen(false);
                      }}
                      className={`block py-2 px-4 rounded-lg transition-all duration-200 text-sm ${
                        location.pathname === item.href
                          ? "text-primary font-medium bg-accent"
                          : "text-foreground-muted hover:text-foreground hover:bg-accent"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {finalNavItems.map((item) => (
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
                  <span className="flex items-center justify-between">
                    {item.name}
                    {item.highlight && (
                      <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-semibold">
                        Novo
                      </span>
                    )}
                  </span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-card-border">
                <Button 
                  className="btn-hero w-full"
                  onClick={() => {
                    trackNavigationClick('waitlist_mobile_menu');
                    window.location.href = '/lista-espera';
                    setIsOpen(false);
                  }}
                >
                  Entrar na Lista
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