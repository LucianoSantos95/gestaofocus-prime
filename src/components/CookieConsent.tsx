import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Slight delay so it doesn't fight with the hero entrance
      const t = setTimeout(() => setShowBanner(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed z-[60] animate-in slide-in-from-bottom-3 fade-in"
      style={{
        bottom: 16,
        left: 16,
        right: "auto",
        maxWidth: 340,
        background: "rgba(12,12,14,0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid var(--line2)",
        borderRadius: 10,
        padding: "12px 14px",
        boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
      }}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <p
            style={{
              fontSize: 12,
              lineHeight: 1.55,
              color: "var(--text2)",
              margin: 0,
            }}
          >
            Usamos cookies para melhorar sua experiência. Saiba mais na{" "}
            <Link to="/privacidade" style={{ color: "var(--accent-hex)", textDecoration: "underline" }}>
              política de privacidade
            </Link>
            .
          </p>
          <div className="flex gap-3 mt-2">
            <button
              onClick={handleAccept}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text)",
                background: "var(--accent-hex)",
                border: "none",
                borderRadius: 5,
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Aceitar
            </button>
            <button
              onClick={handleDecline}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text3)",
                background: "transparent",
                border: "none",
                padding: "5px 4px",
                cursor: "pointer",
              }}
            >
              Recusar
            </button>
          </div>
        </div>
        <button
          onClick={handleDecline}
          aria-label="Fechar"
          style={{
            background: "transparent",
            border: "none",
            color: "var(--text3)",
            cursor: "pointer",
            padding: 2,
            marginLeft: -4,
            marginTop: -2,
          }}
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
