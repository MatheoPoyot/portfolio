import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { COMPETENCES, LIENS, PARCOURS, PRINCIPES } from "@/components/accueil";
import { PrintButton } from "@/components/print-button";
import { PROJETS } from "@/content/projets";

export const metadata: Metadata = {
  title: "CV · Mathéo Poyot, développeur web full stack",
  description: "CV de Mathéo Poyot, généré à partir du contenu du portfolio. Imprimable en PDF au format A4.",
};

// Vert foncé : le #00FF77 du site est illisible sur du blanc (contraste 1,3:1), celui-ci passe à 5,6:1.
const VERT = "text-[#04773A]";

function Rubrique({ titre, children }: { titre: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-2 break-inside-avoid">
      <h2 className={`border-b border-black/15 pb-1 font-mono text-[8pt] tracking-[0.08em] uppercase ${VERT}`}>{titre}</h2>
      {children}
    </section>
  );
}

export default function CV() {
  const experience = PARCOURS.filter((p) => p.type === "experience");
  const formation = PARCOURS.filter((p) => p.type === "formation").reverse();

  return (
    <div className="px-4 pt-6 pb-16 print:p-0">
      <div className="mx-auto mb-6 flex max-w-[210mm] flex-wrap items-center justify-between gap-4 print:hidden">
        <Link href="/" className="inline-flex min-h-11 items-center font-mono text-[13px] text-muted transition-colors hover:text-white">
          ← accueil
        </Link>
        <PrintButton />
      </div>

      <article className="mx-auto flex w-full max-w-[210mm] flex-col gap-5 rounded-sm bg-white p-6 text-[9.5pt] leading-[1.45] text-[#111] shadow-2xl sm:p-[12mm] print:h-[297mm] print:w-[210mm] print:max-w-none print:overflow-hidden print:rounded-none print:p-[12mm] print:shadow-none">
        <header className="flex flex-col gap-2 border-b-4 border-accent pb-4">
          <h1 className="text-[26pt] leading-none font-semibold tracking-[-0.02em]">Mathéo Poyot</h1>
          <p className="text-[13pt] font-medium">
            Développeur web full stack · <span className={VERT}>disponible pour un CDI ou un CDD dès 2027</span>
          </p>
          <p className="flex flex-wrap gap-x-3 font-mono text-[8pt] text-black/70">
            <span>Troyes</span>
            {LIENS.map((l) => (
              <a key={l.href} href={l.href} className="underline-offset-2 hover:underline">
                {l.href.replace(/^mailto:|^https:\/\/(www\.)?/, "")}
              </a>
            ))}
            <a href="https://matheopoyot.fr" className="underline-offset-2 hover:underline">
              matheopoyot.fr
            </a>
            <span>Permis B, véhiculé</span>
          </p>
        </header>

        <p className="text-[10pt]">
          3e année de BUT MMI à l&apos;IUT de Troyes, en alternance au SDIS de la Marne. Je code avec l&apos;IA pour aller
          vite, et je relis, teste et corrige chaque ligne : l&apos;IA écrit vite, je fais en sorte que ce soit juste.
        </p>

        <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_60mm] print:grid-cols-[minmax(0,1fr)_60mm]">
          <div className="flex flex-col gap-5">
            <Rubrique titre="Expérience">
              {experience.map((e) => (
                <div key={e.titre}>
                  <p className="flex flex-wrap justify-between gap-x-3">
                    <strong className="font-semibold">{e.titre}</strong>
                    <span className="font-mono text-[8pt] text-black/60">{e.dates}</span>
                  </p>
                  <p className="text-black/70">{e.lieu}</p>
                  <p>
                    Cours en ligne interactifs sur Enasis, la plateforme Moodle de formation des sapeurs-pompiers, avec
                    le responsable de la plateforme.
                  </p>
                </div>
              ))}
            </Rubrique>

            <Rubrique titre="Projets">
              {PROJETS.filter((p) => p.slug !== "enasis").map((p) => (
                <div key={p.slug} className="break-inside-avoid">
                  <p className="flex flex-wrap justify-between gap-x-3">
                    <strong className="font-semibold">{p.titre}</strong>
                    <span className="font-mono text-[8pt] text-black/60">
                      {p.annee} · {p.cadre}
                    </span>
                  </p>
                  <p>{p.resume}</p>
                  <p className="font-mono text-[7.5pt] text-black/60">
                    {p.stack.join(" · ")}
                    {p.demo && ` · ${p.demo.replace("https://", "")}`}
                  </p>
                </div>
              ))}
            </Rubrique>
          </div>

          <div className="flex flex-col gap-5">
            <Rubrique titre="Compétences">
              {COMPETENCES.map((c) => (
                <p key={c.groupe}>
                  <strong className="font-semibold">{c.groupe}</strong>
                  <br />
                  <span className="text-black/75">{c.outils.join(", ")}</span>
                </p>
              ))}
            </Rubrique>

            <Rubrique titre="Formation">
              {formation.map((f) => (
                <p key={f.titre}>
                  <strong className="font-semibold">{f.titre}</strong>
                  <br />
                  <span className="text-black/75">
                    {f.lieu} · {f.dates}
                  </span>
                </p>
              ))}
            </Rubrique>

            <Rubrique titre="Méthode avec l'IA">
              <ol className="flex flex-col gap-1">
                {PRINCIPES.map((p) => (
                  <li key={p.titre}>
                    <strong className="font-semibold">{p.titre}.</strong> <span className="text-black/75">{p.texte}</span>
                  </li>
                ))}
              </ol>
            </Rubrique>

            <Rubrique titre="Centres d'intérêt">
              <p className="text-black/75">Photo, voyages, jeux vidéo</p>
            </Rubrique>
          </div>
        </div>
      </article>
    </div>
  );
}
