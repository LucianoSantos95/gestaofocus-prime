import { useEffect } from "react";

// Temporariamente desativado: força o tema claro e oculta o botão da lâmpada.
export default function ThemeToggle() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("light");
    root.classList.remove("dark");
    try {
      window.localStorage.setItem("focus-theme", "light");
    } catch {}
  }, []);

  return null;
}
