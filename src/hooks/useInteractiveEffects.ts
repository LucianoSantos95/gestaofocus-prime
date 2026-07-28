import { useEffect } from "react";

/**
 * Attaches subtle "magnetic pull" behavior to elements matching `.focus-magnetic`.
 * Re-scans on route change. No dependencies.
 */
export function useMagneticButtons(pathname: string) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const strength = 0.28;
    const cleanups: Array<() => void> = [];

    const attach = () => {
      const els = document.querySelectorAll<HTMLElement>(".focus-magnetic:not([data-magnetic-bound])");
      els.forEach((el) => {
        el.dataset.magneticBound = "true";
        const onMove = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2);
          const y = e.clientY - (r.top + r.height / 2);
          el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        };
        const onLeave = () => {
          el.style.transform = "translate(0, 0)";
        };
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseleave", onLeave);
          delete el.dataset.magneticBound;
        });
      });
    };

    const t = window.setTimeout(attach, 80);
    const mo = new MutationObserver(() => attach());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(t);
      mo.disconnect();
      cleanups.forEach((c) => c());
    };
  }, [pathname]);
}

/**
 * Attaches a cursor spotlight (radial-gradient follow) to `.focus-spotlight` elements.
 */
export function useSpotlightCards(pathname: string) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const cleanups: Array<() => void> = [];

    const attach = () => {
      const els = document.querySelectorAll<HTMLElement>(".focus-spotlight:not([data-spot-bound])");
      els.forEach((el) => {
        el.dataset.spotBound = "true";
        const onMove = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const x = ((e.clientX - r.left) / r.width) * 100;
          const y = ((e.clientY - r.top) / r.height) * 100;
          el.style.setProperty("--mx", `${x}%`);
          el.style.setProperty("--my", `${y}%`);
        };
        el.addEventListener("mousemove", onMove);
        cleanups.push(() => el.removeEventListener("mousemove", onMove));
      });
    };

    const t = window.setTimeout(attach, 80);
    const mo = new MutationObserver(() => attach());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(t);
      mo.disconnect();
      cleanups.forEach((c) => c());
    };
  }, [pathname]);
}
