"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex min-h-11 items-center rounded-full bg-accent px-[22px] text-[15px] font-semibold text-black transition-colors hover:bg-accent-soft"
    >
      Enregistrer en PDF
    </button>
  );
}
