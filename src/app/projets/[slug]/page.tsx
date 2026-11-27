import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";
import { Fleche, Visuel } from "@/components/projets";
import { PROJETS } from "@/content/projets";

const AVEC_ETUDE = PROJETS.filter((p) => p.etude);

export const dynamicParams = false;

export function generateStaticParams() {
  return AVEC_ETUDE.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projets/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const projet = AVEC_ETUDE.find((p) => p.slug === slug);
  return projet ? { title: `${projet.titre} · étude de cas · Mathéo Poyot`, description: projet.resume } : {};
}

function Bloc({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="reveal grid gap-3 border-t border-line py-8 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10">
      <h2 className="font-mono text-[13px] font-normal text-muted">
        <span aria-hidden="true">.</span>
        {label}
      </h2>
      <div className="max-w-[680px] text-[17px] leading-relaxed text-white/85">{children}</div>
    </section>
  );
}

export default async function EtudeDeCas({ params }: PageProps<"/projets/[slug]">) {
  const { slug } = await params;
  const index = AVEC_ETUDE.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const projet = AVEC_ETUDE[index];
  const etude = projet.etude!;
  const suivant = AVEC_ETUDE[(index + 1) % AVEC_ETUDE.length];
  const liens = [
    projet.demo && { href: projet.demo, label: "voir le site" },
    projet.code && { href: projet.code, label: "voir le code" },
  ].filter((l): l is { href: string; label: string } => Boolean(l));

  return (
    <article
      className="mx-auto max-w-[1200px] px-6 pt-6 pb-24"
      style={
        {
          "--fond": projet.couleurs.fond,
          "--texte": projet.couleurs.texte,
          "--teinte": projet.couleurs.teinte,
          "--suivant-fond": suivant.couleurs.fond,
          "--suivant-texte": suivant.couleurs.texte,
        } as CSSProperties
      }
    >
      <Link href="/#projets" className="inline-flex min-h-11 items-center font-mono text-[13px] text-muted transition-colors hover:text-white">
        ← tous les projets
      </Link>

      <header className="flex flex-col gap-6 pt-8 pb-12">
        <p className="flex flex-wrap gap-x-4 font-mono text-sm text-(--teinte)">
          <span>{projet.annee}</span>
          <span>{projet.cadre}</span>
        </p>
        <h1 className="animate-rise text-[clamp(3rem,8vw,6rem)] leading-none font-medium tracking-[-0.04em]">{projet.titre}</h1>
        <p className="max-w-[640px] text-lg leading-relaxed text-muted">{etude.contexte}</p>
        {liens.length > 0 && (
          <ul className="flex flex-wrap gap-3">
            {liens.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full bg-(--fond) px-[22px] text-[15px] font-semibold text-(--texte) transition-opacity hover:opacity-85"
                >
                  {l.label} ↗<span className="sr-only"> (nouvel onglet)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      {projet.visuel && (
        <div className="rounded-2xl bg-(--fond) p-4 sm:p-8">
          <Visuel projet={projet} />
        </div>
      )}

      <div className="mt-16">
        <Bloc label="rôle">
          <p>{etude.role}</p>
          <p className="mt-3 font-mono text-sm text-muted">{etude.outils.join(" · ")}</p>
        </Bloc>
        <Bloc label="le défi">
          <h3 className="mb-2 text-2xl font-medium text-white">{etude.defi.titre}</h3>
          <p>{etude.defi.texte}</p>
        </Bloc>
        <Bloc label="part de l'IA">
          <dl className="flex flex-col gap-5 rounded-2xl border border-(--teinte)/40 p-6">
            {[
              ["l'IA a fait", etude.ia.fait],
              ["j'ai décidé", etude.ia.decide],
              ["corrigé en route", etude.ia.corrige],
            ].map(([terme, texte]) => (
              <div key={terme}>
                <dt className="font-mono text-[13px] text-(--teinte)">{terme}</dt>
                <dd className="mt-1">{texte}</dd>
              </div>
            ))}
          </dl>
        </Bloc>
        <Bloc label="résultat">
          <ul className="flex flex-col gap-3">
            {etude.resultats.map((r) => (
              <li key={r} className="flex gap-3">
                <span aria-hidden="true" className="text-(--teinte)">
                  →
                </span>
                {r}
              </li>
            ))}
          </ul>
        </Bloc>
      </div>

      <Link
        href={`/projets/${suivant.slug}`}
        className="group mt-8 flex items-center justify-between gap-6 rounded-2xl bg-(--suivant-fond) p-6 text-(--suivant-texte) sm:p-8"
      >
        <span className="flex flex-col gap-1">
          <span className="font-mono text-[13px]">projet suivant</span>
          <span className="text-[clamp(2rem,5vw,3.5rem)] leading-none font-medium tracking-[-0.03em]">{suivant.titre}</span>
        </span>
        <Fleche />
      </Link>
    </article>
  );
}
