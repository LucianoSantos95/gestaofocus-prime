import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { trackNavigationClick } from "@/lib/analytics";
import focusLogo from "@/assets/focus-wordmark.png.asset.json";

const WA_LINK =
  "https://wa.me/5511916742443?text=Ol%C3%A1+Luciano%2C+quero+agendar+um+diagn%C3%B3stico+gratuito+para+minha+empresa";

const navItems = [
  { name: "Consultoria", href: "/solucoes-sob-medida" },
  { name: "Hub Empresarial", href: "/hub-empresarial" },
  { name: "Blog", href: "/blog" },
  { name: "Sobre", href: "/sobre" },
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
        <Link to="/" className="flex items-center group" aria-label="Focus — Página inicial">
          <img
            src={focusLogo.url}
            alt="Focus"
            width={86}
            height={26}
            style={{ height: 26, width: "auto", display: "block" }}
          />
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

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackNavigationClick("get_consultation")}
            className="ml-2 inline-flex items-center"
            style={{
              background: "var(--text)",
              border: "1px solid var(--text)",
              borderRadius: 999,
              padding: "8px 18px",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--bg)",
              textDecoration: "none",
            }}
          >
            Diagnóstico gratuito
          </a>
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
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackNavigationClick("get_consultation_mobile");
                  setIsOpen(false);
                }}
                className="btn-main w-full inline-flex items-center justify-center"
                style={{ background: "var(--text)", color: "var(--bg)", borderRadius: 999, padding: "10px 18px", fontWeight: 600 }}
              >
                Diagnóstico gratuito
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
