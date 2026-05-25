import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 to the target when the element enters viewport.
 * Accepts strings like "50+", "98%", "30d", "150+", "1.5k".
 */
export function useCountUp(target: string, durationMs = 1400) {
  const ref = useRef<HTMLElement | null>(null);
  const [display, setDisplay] = useState("0");
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Parse: leading number (int or float) + suffix
    const match = target.match(/^([\d.,]+)(.*)$/);
    if (!match) {
      setDisplay(target);
      return;
    }
    const numStr = match[1].replace(",", ".");
    const suffix = match[2] || "";
    const end = parseFloat(numStr);
    const hasDecimal = numStr.includes(".");

    if (Number.isNaN(end)) {
      setDisplay(target);
      return;
    }

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / durationMs);
              const eased = 1 - Math.pow(1 - t, 3);
              const value = end * eased;
              const formatted = hasDecimal ? value.toFixed(1) : Math.round(value).toString();
              setDisplay(formatted + suffix);
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return { ref, display };
}

interface CountUpProps {
  value: string;
  className?: string;
  durationMs?: number;
}

export function CountUp({ value, className, durationMs }: CountUpProps) {
  const { ref, display } = useCountUp(value, durationMs);
  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      {display}
    </span>
  );
}
