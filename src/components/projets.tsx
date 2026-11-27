import Image from "next/image";
import type { CSSProperties } from "react";
import { PROJETS, type Projet } from "@/content/projets";
import { Etiquette } from "@/components/accueil";
import { TypedText } from "@/components/typed-text";

function Fleche() {
  return (
    <svg viewBox="0 0 24 24" className="size-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-12" fill="none" stroke="currentColor" strokeWidth="2.25" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function Visuel({ projet }: { projet: Projet }) {
  const v = projet.visuel!;
  const alt = `Capture d'écran de ${projet.titre}`;
  if (v.format === "mobile") {
    return (
      <div className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-lg" style={{ background: v.fondMobile }}>
        <Image src={v.src} alt={alt} width={780} height={1688} className="h-[88%] w-auto rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-lg">
      <Image src={v.src} alt={alt} width={1440} height={900} className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
    </div>
  );
}

function Carte({ projet }: { projet: Projet }) {
  const contenu = (
    <>
      <div className="flex justify-between gap-4 font-mono text-sm">
        <span>{projet.annee}</span>
        <span>{projet.cadre}</span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-6">
        <h3 className="text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] font-medium tracking-[-0.03em]">{projet.titre}</h3>
        {projet.lien && <Fleche />}
      </div>
      {projet.visuel && (
        <div className="mt-6 border-t border-current/20 pt-6">
          <Visuel projet={projet} />
        </div>
      )}
    </>
  );

  const classes = "group block rounded-2xl bg-(--fond) p-6 text-(--texte) sm:p-8";
  return projet.lien ? (
    <a href={projet.lien} target="_blank" rel="noopener noreferrer" className={classes}>
      {contenu}
      <span className="sr-only"> (voir le site, nouvel onglet)</span>
    </a>
  ) : (
    <div className={classes}>{contenu}</div>
  );
}

export function Projets() {
  return (
    <section id="projets" className="mx-auto max-w-[1200px] scroll-mt-4 px-6 py-24">
      <Etiquette>projets</Etiquette>
      <ol className="mt-10 flex flex-col gap-16 lg:gap-24">
        {PROJETS.map((projet) => (
          <li
            key={projet.slug}
            className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] lg:gap-10"
            style={
              {
                "--fond": projet.couleurs.fond,
                "--texte": projet.couleurs.texte,
                "--teinte": projet.couleurs.teinte,
              } as CSSProperties
            }
          >
            <Carte projet={projet} />
            <div className="flex flex-col gap-4 self-start font-mono text-sm leading-relaxed lg:sticky lg:top-8">
              <TypedText text={projet.resume} className="text-(--teinte)" />
              <p className="text-muted">{projet.stack.join(" · ")}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
