import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { APropos, Competences, Contact, Methode, Parcours } from "@/components/accueil";
import { Projets } from "@/components/projets";
import { Ticker } from "@/components/ticker";

// Checked at build time (static export): drop public/photo.jpg and rebuild to show the portrait.
const hasPhoto = fs.existsSync(path.join(process.cwd(), "public/photo.jpg"));

export default function Home() {
  return (
    <>
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-4 px-6 pt-4 font-mono text-xs text-muted">
        <span>{"// troyes, france"}</span>
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="size-2 animate-beacon rounded-full bg-accent" />
          disponible · cdi / cdd · 2027
        </span>
      </div>

      <section className="mx-auto flex max-w-[1200px] flex-wrap items-end gap-14 px-6 pb-24 pt-16 sm:pt-20">
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-8">
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] leading-[1.08] font-medium tracking-[-0.03em] text-dim">
            <span className="block animate-rise [animation-delay:100ms]">Développeur web full stack.</span>
            <span className="block animate-rise [animation-delay:250ms]">L&apos;IA écrit vite,</span>
            <span className="block animate-rise text-white [animation-delay:400ms]">
              je fais en sorte que ce soit <span className="text-accent">juste.</span>
            </span>
          </h1>
          <p className="max-w-[540px] animate-rise text-[17px] leading-relaxed text-muted [animation-delay:550ms]">
            3e année de BUT MMI à l&apos;IUT de Troyes. En alternance au SDIS de la Marne, je crée des cours en
            ligne interactifs pour la formation des sapeurs-pompiers.
          </p>
          <div className="flex animate-rise flex-wrap gap-3 [animation-delay:550ms]">
            <a
              href="#projets"
              className="inline-flex min-h-11 items-center rounded-full bg-accent px-[22px] text-[15px] font-semibold text-black transition-colors hover:bg-accent-soft"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center rounded-full border border-white/25 px-[22px] text-[15px] font-medium transition-colors hover:border-white"
            >
              Me contacter
            </a>
          </div>
        </div>

        <figure className="flex max-w-[340px] flex-[1_1_260px] animate-rise flex-col gap-2.5 [animation-delay:400ms]">
          {hasPhoto ? (
            <>
              <Image
                src="/photo.jpg"
                alt="Portrait de Mathéo Poyot"
                width={680}
                height={850}
                priority
                className="aspect-[4/5] w-full rounded-2xl object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
              />
              <figcaption className="hidden font-mono text-xs text-muted [@media(hover:hover)]:block">
                {"// survoler : la photo reprend ses couleurs"}
              </figcaption>
            </>
          ) : (
            <div className="grid aspect-[4/5] w-full place-items-center rounded-2xl bg-line font-mono text-xs text-muted">
              [photo à venir]
            </div>
          )}
        </figure>
      </section>

      <Ticker />
      <Projets />
      <Methode />
      <Competences />
      <Parcours />
      <APropos />
      <Contact />
    </>
  );
}
