"use client";

import { useState } from "react";

const TECHS = ["Next.js", "React", "Node.js", "Symfony", "PostgreSQL", "Tailwind", "Moodle", "Claude"];

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1" />
    </svg>
  );
}

export function Ticker() {
  // WCAG 2.2.2: content that moves for more than 5 s needs a pause control.
  const [paused, setPaused] = useState(false);

  return (
    <div className="group relative border-y border-line">
      <div
        className="overflow-hidden py-[18px] [mask-image:linear-gradient(to_right,transparent,black_6%,black_88%,transparent)]"
        aria-hidden="true"
      >
        {/* Two identical copies + translateX(-50%) = seamless loop; padding (not gap) keeps both halves equal. */}
        <div
          className={`flex w-max animate-marquee text-[28px] font-medium whitespace-nowrap text-dim group-hover:[animation-play-state:paused] ${paused ? "[animation-play-state:paused]" : ""}`}
        >
          {[0, 1].map((copy) =>
            TECHS.map((tech) => (
              <span key={`${copy}-${tech}`} className="flex items-center gap-12 pr-12">
                {tech}
                <Star />
              </span>
            )),
          )}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label="Mettre en pause le défilement des technologies"
        className="absolute top-1/2 right-4 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-ink transition-colors hover:border-white motion-reduce:hidden"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
          {paused ? <path d="M7 4.5v15l12-7.5z" /> : <path d="M6 4h4v16H6zM14 4h4v16h-4z" />}
        </svg>
      </button>
    </div>
  );
}
