import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="container-focus py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span
                aria-hidden="true"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--accent-hex)",
                  boxShadow: "0 0 8px var(--accent-hex)",
                }}
              />
              <span style={{ color: "var(--text)", fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em" }}>
                Focus
              </span>
            </Link>
            <p style={{ color: "var(--text2)", fontSize: 13, lineHeight: 1.7 }}>
              Consultoria de operações com IA + Hub Empresarial SaaS para agências e PMEs.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--text3)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Links
            </p>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Consultoria Focus Custom", href: "/solucoes-sob-medida" },
                { label: "Hub Empresarial", href: "/hub-empresarial" },
                { label: "Blog de Gestão", href: "/blog" },
                { label: "FAQ", href: "/faq" },
                { label: "Termos de Uso", href: "/termos-uso" },
                { label: "Política de Privacidade", href: "/privacidade" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    style={{ color: "var(--text3)", fontSize: 12, transition: "color .15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text2)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text3)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--text3)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Contato
            </p>
            <ul className="space-y-2" style={{ fontSize: 12, color: "var(--text3)" }}>
              <li>Atendimento Online — Brasil</li>
              <li>
                <a
                  href="mailto:contato@focusinteligente.com.br"
                  style={{ color: "var(--text3)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text3)")}
                >
                  contato@focusinteligente.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511916742443"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--text3)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text3)")}
                >
                  +55 11 91674-2443
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{ borderTop: "1px solid var(--line)" }}
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-2"
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--text3)",
              letterSpacing: "0.04em",
            }}
          >
            © {currentYear} Focus Gestão Inteligente. Todos os direitos reservados.
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--text3)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            São Paulo · BR
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
