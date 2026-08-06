import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { trackNavigationClick } from "@/lib/analytics";
import focusLogo from "@/assets/Focus.png.asset.json";
import ThemeToggle from "@/components/ThemeToggle";
import { openLeadModal } from "@/lib/leadModal";

const navItems = [
  { name: "Consultoria", href: "/solucoes-sob-medida" },
  { name: "Advisor", href: "/advisor" },
  { name: "Hub Empresarial", href: "/hub-empresarial" },
  { name: "Blog", href: "/blog" },
  { name: "Sobre", href: "/sobre" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
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
        background: scrolled ? "var(--nav-scrim)" : "transparent",
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
            alt="Focus — Arquitetura de Operação"
            width={390}
            height={120}
            style={{ height: 120, width: "auto", display: "block" }}
          />

        </Link>

        {/* Desktop Menu — centered */}
        <div
          className="hidden lg:flex items-center gap-10 justify-self-center"
          onMouseLeave={() => setHoveredNav(null)}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            const isHovered = hoveredNav === item.name;
            return (
              <div
                key={item.name}
                style={{ position: "relative", paddingBottom: 3 }}
                onMouseEnter={() => setHoveredNav(item.name)}
              >
                <Link
                  to={item.href}
                  onClick={() => trackNavigationClick(item.name)}
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    letterSpacing: "-0.005em",
                    color: isActive || isHovered ? "var(--text)" : "var(--text2)",
                    transition: "color 0.18s ease",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  {item.name}
                </Link>

                {/* Sliding underline — layoutId makes it "travel" between links */}
                {(isHovered || (isActive && hoveredNav === null)) && (
                  <motion.span
                    layoutId="nav-underline"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 1,
                      background: "var(--text)",
                      borderRadius: 1,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA — right */}
        <div className="hidden lg:flex items-center gap-3 justify-self-end">
          <button
            type="button"
            onClick={() => {
              trackNavigationClick("get_consultation");
              openLeadModal("nav_desktop");
            }}
            className="inline-flex items-center transition-colors focus-magnetic"
            style={{
              background: "transparent",
              border: "1px solid var(--line2)",
              borderRadius: 999,
              padding: "11px 22px",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--text)",
              cursor: "pointer",
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
          </button>
          {/* <ThemeToggle /> temporariamente desativado — tema dark oficial */}
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
            background: "var(--nav-scrim-mobile)",
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

            <div className="pt-4 mt-2 flex items-center gap-3" style={{ borderTop: "1px solid var(--line)" }}>
              <button
                type="button"
                onClick={() => {
                  trackNavigationClick("get_consultation_mobile");
                  setIsOpen(false);
                  openLeadModal("nav_mobile");
                }}
                className="flex-1 inline-flex items-center justify-center"
                style={{ background: "var(--text)", color: "var(--bg)", borderRadius: 999, padding: "10px 18px", fontWeight: 600, border: "none", cursor: "pointer" }}
              >
                Diagnóstico gratuito
              </button>
              {/* <ThemeToggle /> temporariamente desativado */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
