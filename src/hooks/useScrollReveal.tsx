import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Observes all `.reveal` elements and adds `.in-view` when they enter the viewport.
 * Re-scans on route changes so newly mounted pages animate too.
 */
export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    // Auto-tag common content blocks so every page animates without manual classes
    const autoTag = () => {
      document
        .querySelectorAll<HTMLElement>(
          "main section, main .card, main .mr-item, main .bento > *"
        )
        .forEach((el) => {
          if (el.classList.contains("reveal") || el.classList.contains("in-view") || el.dataset.noReveal) return;
          const rect = el.getBoundingClientRect();
          // Skip elements already above/within the initial viewport — they should show immediately
          if (rect.top < window.innerHeight * 0.9) {
            el.classList.add("reveal", "in-view");
            return;
          }
          el.classList.add("reveal");
        });
    };

    // Delay slightly so lazy-loaded pages have mounted
    const attach = () => {
      autoTag();
      document.querySelectorAll<HTMLElement>(".reveal:not(.in-view)").forEach((el) => {
        observer.observe(el);
      });
    };

    const t = window.setTimeout(attach, 50);

    // Re-attach when DOM mutates (lazy chunks, accordions, etc.)
    const mo = new MutationObserver(() => attach());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(t);
      mo.disconnect();
      observer.disconnect();
    };
  }, [location.pathname]);
}
