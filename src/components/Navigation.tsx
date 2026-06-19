import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { trackNavigationClick } from "@/lib/analytics";
import focusLogo from "@/assets/Focus.png.asset.json";

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
        height: "96px",
        background: scrolled ? "rgba(6,6,8,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <div className="h-full grid grid-cols-[1fr_auto_1fr] items-center px-8 lg:px-14">
        {/* Logo — left */}
        <Link to="/" className="flex items-center" aria-label="Focus — Página inicial">
          <img
            src={focusLogo.url}
            alt="Focus"
            width={325}
            height={100}
            style={{ height: 100, width: "auto", display: "block" }}
          />

        </Link>

        {/* Desktop Menu — centered */}
        <div className="hidden lg:flex items-center gap-10 justify-self-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => trackNavigationClick(item.name)}
              className="transition-colors duration-150"
              style={{
                fontSize: 15,
                fontWeight: 400,
                letterSpacing: "-0.005em",
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
        </div>

        {/* CTA — right */}
        <div className="hidden lg:flex justify-self-end">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackNavigationClick("get_consultation")}
            className="inline-flex items-center transition-colors"
            style={{
              background: "transparent",
              border: "1px solid var(--line2)",
              borderRadius: 999,
              padding: "11px 22px",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--text)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--text)";
              e.currentTarget.style.color = "var(--bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            Diagnóstico gratuito
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md justify-self-end col-start-3"
          style={{ color: "var(--text)" }}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
