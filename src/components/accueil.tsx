import type { ReactNode } from "react";

const CONTENEUR = "mx-auto max-w-[1200px] scroll-mt-4 px-6";

/** Étiquette de section du design D : « .projets », « .méthode »… */
export function Etiquette({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-mono text-[13px] font-normal text-muted">
      <span aria-hidden="true">.</span>
      {children}
    </h2>
  );
}

const PRINCIPES = [
  { titre: "Je comprends", texte: "Aucune ligne générée n'est gardée sans que je sache l'expliquer." },
  { titre: "Je vérifie", texte: "Tests, relecture, sécurité et accessibilité passent avant la vitesse." },
  { titre: "Je décide", texte: "L'IA propose. Je choisis l'architecture, le design et ce qui part en ligne." },
];

export function Methode() {
  return (
    <section id="methode" className={`${CONTENEUR} pb-24`}>
      <Etiquette>méthode avec l&apos;IA</Etiquette>
      <ol className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] border-t border-line">
        {PRINCIPES.map((p, i) => (
          <li key={p.titre} className="reveal flex flex-col gap-2.5 py-7 pr-7">
            <span className="font-mono text-[13px] text-accent">0{i + 1}</span>
            <h3 className="text-[26px] font-medium">{p.titre}</h3>
            <p className="text-[15px] leading-relaxed text-muted">{p.texte}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const COMPETENCES = [
  { groupe: "Front", outils: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind"] },
  { groupe: "Back", outils: ["PHP", "Symfony", "API Platform", "Node.js", "Express", "PostgreSQL", "SQLite"] },
  { groupe: "Design", outils: ["Photoshop", "Illustrator", "Premiere Pro", "UX pédagogique"] },
  { groupe: "Outils et IA", outils: ["Claude", "Git et GitHub", "Docker", "Nginx", "Moodle"] },
];

export function Competences() {
  return (
    <section id="competences" className={`${CONTENEUR} pb-24`}>
      <Etiquette>compétences</Etiquette>
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-8 gap-y-10 border-t border-line pt-8">
        {COMPETENCES.map((c) => (
          <div key={c.groupe} className="reveal flex flex-col gap-3">
            <h3 className="text-xl font-medium">{c.groupe}</h3>
            <ul className="flex flex-col gap-1.5 text-[15px] text-muted">
              {c.outils.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const PARCOURS = [
  { dates: "2021 – 2024", titre: "Bac général, spécialité NSI", lieu: "Numérique et sciences informatiques" },
  { dates: "2024 – 2027", titre: "BUT MMI", lieu: "IUT de Troyes" },
  { dates: "depuis 2025", titre: "Développeur multimédia en alternance", lieu: "SDIS de la Marne, direction départementale" },
];

export function Parcours() {
  return (
    <section id="parcours" className={`${CONTENEUR} pb-24`}>
      <Etiquette>parcours</Etiquette>
      <ol className="mt-8 grid gap-8 md:grid-cols-3 md:gap-6">
        {PARCOURS.map((p) => (
          <li key={p.titre} className="reveal relative flex flex-col gap-2 border-l border-line pl-6 md:border-t md:border-l-0 md:pt-6 md:pl-0">
            <span aria-hidden="true" className="absolute top-1 -left-[5px] size-2.5 rounded-full bg-accent md:-top-[5px] md:left-0" />
            <span className="font-mono text-[13px] text-accent">{p.dates}</span>
            <h3 className="text-xl font-medium">{p.titre}</h3>
            <p className="text-[15px] text-muted">{p.lieu}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function APropos() {
  return (
    <section id="a-propos" className={`${CONTENEUR} pb-24`}>
      <Etiquette>à propos</Etiquette>
      <div className="reveal mt-8 grid gap-6 border-t border-line pt-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <p className="text-[26px] leading-snug font-medium">Design et code, dans le même cerveau.</p>
        <div className="flex max-w-[620px] flex-col gap-4 text-[17px] leading-relaxed text-muted">
          <p>
            MMI m&apos;a appris à passer d&apos;une maquette Photoshop à une API Symfony sans changer de casquette. Je
            fais attention à ce que le visiteur ressent autant qu&apos;à ce que le serveur renvoie.
          </p>
          <p>
            Hors du code : la photo, les voyages et les jeux vidéo. Games est d&apos;ailleurs né de nos soirées entre
            potes.
          </p>
        </div>
      </div>
    </section>
  );
}

const LIENS = [
  { label: "contact@matheopoyot.fr", href: "mailto:contact@matheopoyot.fr" },
  { label: "linkedin", href: "https://www.linkedin.com/in/matheo-poyot" },
  { label: "github", href: "https://github.com/MatheoPoyot" },
];

export function Contact() {
  return (
    <section id="contact" className={`${CONTENEUR} flex flex-wrap items-end justify-between gap-8 border-t border-line pt-24 pb-16`}>
      <div className="flex flex-col gap-3">
        <Etiquette>contact</Etiquette>
        <p className="text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] font-medium tracking-[-0.03em]">
          Un poste en 2027 ?<br />
          <span className="text-accent">Parlons-en.</span>
        </p>
      </div>
      <ul className="flex flex-wrap gap-x-6 text-[15px]">
        {LIENS.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="inline-flex min-h-11 items-center text-accent underline-offset-4 hover:text-accent-soft hover:underline">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
