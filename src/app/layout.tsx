import type { Metadata, Viewport } from "next";
import { DM_Mono, Manrope } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matheopoyot.fr"),
  title: "Mathéo Poyot · Développeur web full stack",
  description:
    "Développeur web full stack en alternance au SDIS de la Marne, en 3e année de BUT MMI à Troyes. Disponible pour un CDI ou un CDD dès 2027.",
  openGraph: { type: "website", locale: "fr_FR", siteName: "Mathéo Poyot" },
};

export const viewport: Viewport = { themeColor: "#000000" };

const NAV = [
  { href: "/#projets", label: "projets" },
  { href: "/#methode", label: "méthode" },
  { href: "/#contact", label: "contact" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${manrope.variable} ${dmMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#contenu"
          className="sr-only rounded-full bg-accent px-4 py-2 font-semibold text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
        >
          Aller au contenu
        </a>

        <header className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-x-4 border-b border-line px-6 py-3">
          <Link href="/" className="inline-flex min-h-11 items-center text-[15px] font-semibold">
            Mathéo Poyot
          </Link>
          <nav aria-label="Navigation principale">
            <ul className="flex flex-wrap gap-x-7 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="inline-flex min-h-11 items-center text-muted transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/cv" className="inline-flex min-h-11 items-center text-accent transition-colors hover:text-accent-soft">
                  cv ↓
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main id="contenu" className="flex-1">
          {children}
        </main>

        <footer className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 border-t border-line px-6 py-8 font-mono text-xs text-muted">
          {/* Lighthouse 12.6 mobile, 27/11/2026. Performance ajoutée une fois mesurée en ligne (lot 6). */}
          <p className="flex flex-wrap justify-between gap-x-6 gap-y-2">
            <span>
              qualité mesurée · lighthouse mobile : accessibilité <span className="text-accent">100</span> · bonnes
              pratiques <span className="text-accent">100</span> · seo <span className="text-accent">100</span>
            </span>
            <a href="https://github.com/MatheoPoyot/portfolio" className="inline-flex min-h-11 items-center text-accent hover:text-accent-soft sm:min-h-0">
              code source sur github ↗
            </a>
          </p>
          <p className="flex flex-wrap justify-between gap-x-6 gap-y-2">
            <span>© 2026 Mathéo Poyot</span>
            <span>Next.js · Tailwind · construit avec Claude, relu ligne par ligne</span>
          </p>
        </footer>
      </body>
    </html>
  );
}
