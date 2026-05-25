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

    // Delay slightly so lazy-loaded pages have mounted
    const attach = () => {
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
