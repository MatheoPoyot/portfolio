export type Projet = {
  slug: string;
  titre: string;
  annee: string;
  cadre: string;
  /** Tapé lettre par lettre dans la colonne de droite. */
  resume: string;
  stack: string[];
  /** fond/texte : la carte ; teinte : la colonne de droite, lisible sur le noir (contraste >= 4.5). */
  couleurs: { fond: string; texte: string; teinte: string };
  visuel?: { src: string; format: "ordi" | "mobile"; fondMobile?: string };
  lien?: string;
};

export const PROJETS: Projet[] = [
  {
    slug: "kaboom",
    titre: "Kaboom",
    annee: "2026",
    cadre: "perso · temps réel",
    resume:
      "Quiz en direct gratuit. L'animateur projette les questions sur le grand écran, jusqu'à une centaine de joueurs répondent sur leur téléphone. Équipes, bibliothèque de quiz partagés, modération, en français et en anglais.",
    stack: ["Node.js", "Socket.IO", "React", "PostgreSQL"],
    couleurs: { fond: "#FFD23F", texte: "#1A1A2E", teinte: "#FFD23F" },
    visuel: { src: "/projets/kaboom.webp", format: "ordi" },
    lien: "https://kaboom.matheopoyot.fr",
  },
  {
    slug: "seconde-classe",
    titre: "Seconde Classe",
    annee: "2026",
    cadre: "perso · full stack",
    resume:
      "Le site d'annonces de l'école : les parents donnent ou revendent les fournitures de leurs enfants. Recherche par établissement, alertes, messagerie avec signalement, modération et pages légales.",
    stack: ["Node.js", "PostgreSQL", "React", "shadcn/ui"],
    couleurs: { fond: "#1F4B43", texte: "#FBF8F0", teinte: "#8FD3B6" },
    visuel: { src: "/projets/seconde-classe.webp", format: "ordi" },
  },
  {
    slug: "enasis",
    titre: "Cours interactifs Enasis",
    annee: "depuis 2025",
    cadre: "alternance · e-learning",
    resume:
      "Au SDIS de la Marne, je crée des cours en ligne interactifs sur Enasis, la plateforme Moodle de formation des sapeurs-pompiers, avec le responsable de la plateforme.",
    stack: ["Moodle", "HTML", "CSS", "JavaScript"],
    couleurs: { fond: "#C8102E", texte: "#FFFFFF", teinte: "#FF7A7A" },
  },
  {
    slug: "unifolio",
    titre: "UniFolio",
    annee: "2026",
    cadre: "SAÉ · back-end et PO",
    resume:
      "Refonte du portfolio de compétences des étudiants de l'IUT de Troyes, en équipe de trois. Je suis le product owner, seul contact du client, et je développe l'API.",
    stack: ["Symfony", "API Platform", "PostgreSQL", "Nuxt"],
    couleurs: { fond: "#4D3677", texte: "#FFFFFF", teinte: "#CFC2EC" },
    visuel: { src: "/projets/unifolio.webp", format: "ordi" },
  },
  {
    slug: "restaurant-cms",
    titre: "Restaurant CMS",
    annee: "2026",
    cadre: "perso · full stack",
    resume:
      "Un CMS pour plusieurs restaurants : chacun gère sa carte, ses réservations et son site public en cinq langues. Rôles, allergènes, anti-spam et RGPD, sur un serveur de 1 Go de mémoire.",
    stack: ["Payload", "Next.js", "PostgreSQL", "Docker"],
    couleurs: { fond: "#7C2D12", texte: "#FFF8E7", teinte: "#F4A27A" },
  },
  {
    slug: "games",
    titre: "Games",
    annee: "2026",
    cadre: "perso · temps réel",
    resume:
      "Des jeux d'ambiance sans alcool pour les soirées entre potes : un seul téléphone qu'on se passe, ou chacun le sien avec un code de salle. Un joueur qui perd le réseau retrouve sa place.",
    stack: ["Node.js", "Socket.IO", "React", "Vite"],
    couleurs: { fond: "#F472B6", texte: "#1A1033", teinte: "#F472B6" },
    visuel: { src: "/projets/games.webp", format: "mobile", fondMobile: "#0E1022" },
  },
];
