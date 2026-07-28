import { useEffect, useState } from "react";
import { Lightbulb, LightbulbOff } from "lucide-react";

type Theme = "dark" | "light";

function readInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("focus-theme");
  if (stored === "light" || stored === "dark") return stored;
  return "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    try {
      window.localStorage.setItem("focus-theme", theme);
    } catch {}
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Ativar tema escuro" : "Ativar tema claro"}
      title={isLight ? "Tema escuro" : "Tema claro"}
      className="inline-flex items-center justify-center transition-all"
      style={{
        width: 40,
        height: 40,
        borderRadius: 999,
        border: "1px solid var(--line2)",
        background: "transparent",
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
      {isLight ? <LightbulbOff className="w-4 h-4" /> : <Lightbulb className="w-4 h-4" />}
    </button>
  );
}
