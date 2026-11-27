"use client";

import { useEffect, useRef, useState } from "react";

const MS_PER_CHAR = 18;

/**
 * Types `text` letter by letter once it scrolls into view.
 * Screen readers get the full text at once; an invisible copy reserves the final height (no layout shift).
 * Under prefers-reduced-motion the CSS shows the full copy and hides the typed one.
 */
export function TypedText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const next = Math.min(text.length, Math.floor((now - start) / MS_PER_CHAR));
          setShown(next);
          if (next < text.length) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [text]);

  return (
    <p ref={ref} className={`grid ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="invisible col-start-1 row-start-1 motion-reduce:visible">
        {text}
      </span>
      <span aria-hidden="true" className="col-start-1 row-start-1 motion-reduce:hidden">
        {text.slice(0, shown)}
        {shown < text.length && (
          <span className="ml-0.5 inline-block h-[1em] w-[0.5em] translate-y-[0.15em] animate-caret bg-current" />
        )}
      </span>
    </p>
  );
}
