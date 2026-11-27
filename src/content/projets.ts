export type Etude = {
  contexte: string;
  role: string;
  /** Stack détaillée de l'étude (la carte n'en montre que 4). */
  outils: string[];
  defi: { titre: string; texte: string };
  /** Encadré « Part de l'IA » : ce qu'elle a fait, ce que j'ai décidé, ce qui a été corrigé en route. */
  ia: { fait: string; decide: string; corrige: string };
  resultats: string[];
};

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
  demo?: string;
  code?: string;
  /** Sans étude, la carte n'est pas cliquable. */
  etude?: Etude;
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
    demo: "https://kaboom.matheopoyot.fr",
    code: "https://github.com/MatheoPoyot/kaboom",
    etude: {
      contexte:
        "Kaboom est un quiz en direct pour les classes, les soirées et les formations. Objectif : jouer gratuitement, sans compte, depuis n'importe quel téléphone, jusqu'à une centaine de joueurs par partie.",
      role: "Seul sur le projet : produit, design, développement et mise en ligne.",
      outils: ["Node.js (TypeScript)", "Express", "Socket.IO", "React", "Vite", "Tailwind", "PostgreSQL", "Nginx", "PM2"],
      defi: {
        titre: "Une partie juste, même quand le réseau lâche",
        texte:
          "Le serveur fait autorité sur le chrono, les points et les phases de la partie. Un téléphone qui se met en veille retrouve sa place et ses points, et les parties en cours sont sauvegardées avant chaque mise à jour du serveur, puis reprennent.",
      },
      ia: {
        fait: "Claude a écrit l'essentiel du code, en six lots, à partir d'un plan que j'ai validé question par question.",
        decide:
          "Le périmètre de chaque lot, le style « Pop Néo-brutal », le français et l'anglais, et une mise en ligne sans Docker, adaptée à mon serveur de 1 Go.",
        corrige:
          "Je voulais l'appeler « OpenKahoot » : Claude a signalé le risque lié à la marque Kahoot et j'ai choisi Kaboom. Chaque lot a été testé avant le suivant, dans le navigateur et par des tests automatisés.",
      },
      resultats: [
        "En ligne sur kaboom.matheopoyot.fr",
        "100 joueurs simulés : chaque diffusion atteint tous les téléphones en 6 ms au plus",
        "33 tests automatisés",
        "Aucune violation axe-core sur le parcours complet",
      ],
    },
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
    code: "https://github.com/MatheoPoyot/seconde-classe",
    etude: {
      contexte:
        "Un site d'annonces pour l'école : les parents donnent ou revendent les fournitures scolaires de leurs enfants. Objectif : un site sûr pour des familles, qui grandit par le bouche-à-oreille des établissements.",
      role: "Seul sur le projet : produit, développement, sécurité et déploiement.",
      outils: ["Node.js", "Express", "PostgreSQL", "React", "shadcn/ui", "Tailwind", "Postfix"],
      defi: {
        titre: "Ouvrir un site à des familles sans les exposer",
        texte:
          "Les photos sont réencodées par le serveur, ce qui efface leurs coordonnées GPS. Le lieu de remise n'est visible que des membres connectés, la messagerie permet de bloquer et de signaler, et chaque décision de modération est motivée et journalisée.",
      },
      ia: {
        fait: "Claude a écrit le code, lot par lot, avec des tests écrits avant le code.",
        decide:
          "Comptes réservés aux adultes (les parents publient pour leurs enfants), et ouverture aux établissements pour le bouche-à-oreille.",
        corrige:
          "J'ai fait relire le code par un second modèle (Claude Fable) : un audit de sécurité, puis une revue complète. Il a trouvé, par exemple, une limite de connexion contournable et un compte jamais activé qu'un tiers pouvait reprendre. Chaque correction a été relue, et des tests reproduisent les problèmes trouvés.",
      },
      resultats: [
        "Plus de 20 problèmes de sécurité ou de fiabilité corrigés après deux relectures",
        "Photos sans métadonnées, réduites à 1 600 px",
        "Mots de passe en Argon2id",
      ],
    },
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
    etude: {
      contexte:
        "UniFolio est l'outil où les étudiants de BUT de l'IUT de Troyes déposent leurs traces et composent leur portfolio de compétences. En SAÉ, notre équipe de trois le refait de zéro pour un client.",
      role: "Product owner, seul contact du client, et développeur du back-end. Deux camarades font le front en Nuxt.",
      outils: ["Symfony 8", "API Platform", "PostgreSQL", "Docker (FrankenPHP)", "PHPUnit", "Nuxt 4"],
      defi: {
        titre: "Avancer en parallèle sans se marcher dessus",
        texte:
          "Le front avançait avec des routes provisoires. J'ai pris leur format comme contrat : un test vérifie, clé par clé, que l'API renvoie exactement ce que le front attend, ce qui permet de passer d'une route provisoire à la vraie API écran par écran.",
      },
      ia: {
        fait: "Claude écrit le back-end sprint par sprint, à partir d'un plan que je valide avant chaque sprint.",
        decide:
          "Brancher le front directement sur API Platform, faire du code du front la référence, et les arbitrages du client : échéances saisies par l'enseignant, corbeille vidée au bout de 30 jours.",
        corrige:
          "L'IA voulait enchaîner sur le sprint 5 alors que le sprint 4 n'était pas fait : je l'ai remise dans l'ordre de la roadmap de l'équipe.",
      },
      resultats: ["6 sprints du back-end fusionnés (0 à 5)", "Plus de 70 tests PHPUnit", "Export des bilans en JSON et CSV"],
    },
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
    code: "https://github.com/MatheoPoyot/restaurant-cms",
    etude: {
      contexte:
        "Un CMS pour plusieurs restaurants : chacun gère sa carte, ses actus, ses pages et ses réservations, et obtient un site public multilingue. Projet portfolio avec trois restaurants fictifs.",
      role: "Seul sur le projet.",
      outils: ["Payload 3", "Next.js", "React", "PostgreSQL", "Docker", "GitHub Actions", "Playwright", "Vitest"],
      defi: {
        titre: "Un CMS Next.js complet sur 1 Go de mémoire",
        texte:
          "Le site n'est jamais construit sur le serveur : GitHub Actions construit l'image Docker et la publie, le serveur ne fait que la lancer. Les données de chaque restaurant restent isolées, avec quatre rôles, du super-admin au personnel de salle.",
      },
      ia: {
        fait: "Claude a écrit le code, puis une v2 en neuf phases, une par commit validé.",
        decide:
          "Réservation à valider ou confirmée automatiquement, au choix de chaque restaurant ; liste d'attente qui garde une place 30 minutes ; quatre thèmes.",
        corrige:
          "J'ai fait refaire le front de zéro, en pensant d'abord au téléphone : la première version ne me convenait pas. Payload a été fixé à une version qui corrige une faille connue de son module multi-restaurants.",
      },
      resultats: ["5 langues", "14 allergènes réglementaires", "Accessibilité et performance vérifiées en CI (axe, Lighthouse)"],
    },
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
    etude: {
      contexte:
        "Des jeux d'ambiance pour nos soirées entre potes, sans alcool : on compte des points, avec un classement sur toute la soirée. On joue sur un seul téléphone qu'on se passe, ou chacun sur le sien.",
      role: "Seul sur le projet.",
      outils: ["Node.js", "Express", "Socket.IO", "React", "Vite", "Tailwind", "PostgreSQL"],
      defi: {
        titre: "Tenir une soirée entière",
        texte:
          "Une soirée, c'est des écrans qui se mettent en veille et un réseau qui coupe. Un joueur qui se reconnecte retrouve sa place, une partie en cours survit à un redémarrage du serveur, et le mode « un seul téléphone » marche hors ligne une fois chargé.",
      },
      ia: {
        fait: "Claude a écrit les jeux sur un modèle commun : mise en place, actions des joueurs, réponses secrètes cachées aux autres.",
        decide: "Des points, jamais de gages ; pas de Docker sur mon serveur, trop petit.",
        corrige:
          "En jouant, j'ai repéré un contraste trop faible et une étape inutile : avec une seule catégorie choisie, Quitte ou Double proposait encore de choisir entre deux. J'ai aussi fait faire une vérification de sécurité par un second modèle, puis corriger ce qu'il a relevé.",
      },
      resultats: ["15 jeux", "400 questions de culture générale dans Quitte ou Double", "Mode un seul téléphone utilisable hors ligne"],
    },
  },
];
