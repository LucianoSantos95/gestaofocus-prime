import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Lock } from "lucide-react";
import { trackNavigationClick } from "@/lib/analytics";

const navItems = [
  { name: "Soluções Sob Medida", href: "/solucoes-sob-medida" },
  { name: "Hub Empresarial", href: "/hub-empresarial" },
  { name: "Blog", href: "/blog" },
  { name: "Sobre", href: "/sobre-focus" },
  { name: "Contato", href: "/contato" },
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: "60px",
        background: scrolled ? "rgba(6,6,8,0.92)" : "rgba(6,6,8,0.78)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="h-full flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span
            aria-hidden="true"
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--accent-hex)",
              boxShadow: "0 0 8px var(--accent-hex)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              color: "var(--text)",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Focus
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => trackNavigationClick(item.name)}
              className="py-2 px-3 transition-colors duration-150"
              style={{
                fontSize: 13,
                fontWeight: 400,
                letterSpacing: "0.01em",
                color: location.pathname === item.href ? "var(--text)" : "var(--text2)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  location.pathname === item.href ? "var(--text)" : "var(--text2)")
              }
            >
              {item.name}
            </Link>
          ))}

          {/* Location tag */}
          <span
            className="ml-3"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--text3)",
              border: "1px solid var(--line)",
              borderRadius: 4,
              padding: "3px 8px",
              letterSpacing: "0.05em",
            }}
          >
            São Paulo · BR
          </span>

          <Link
            to="/auth/login"
            onClick={() => trackNavigationClick("area_cliente")}
            className="ml-2 inline-flex items-center"
            style={{
              background: "var(--bg3)",
              border: "1px solid var(--line2)",
              borderRadius: 7,
              padding: "7px 16px",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--text)",
              textDecoration: "none",
            }}
          >
            <Lock className="w-3 h-3 mr-2" />
            Área do Cliente
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md"
          style={{ color: "var(--text)" }}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden absolute top-full left-0 w-full"
          style={{
            background: "rgba(6,6,8,0.96)",
            backdropFilter: "blur(24px)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div className="px-6 py-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => {
                  trackNavigationClick(item.name);
                  setIsOpen(false);
                }}
                className="block py-3 px-3 rounded-md transition-colors"
                style={{
                  fontSize: 14,
                  color: location.pathname === item.href ? "var(--text)" : "var(--text2)",
                }}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4 mt-2" style={{ borderTop: "1px solid var(--line)" }}>
              <Link
                to="/auth/login"
                onClick={() => {
                  trackNavigationClick("area_cliente_mobile");
                  setIsOpen(false);
                }}
                className="btn-main w-full"
              >
                <Lock className="w-3.5 h-3.5 mr-2" />
                Área do Cliente
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
