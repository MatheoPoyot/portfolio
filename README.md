# Portfolio de Mathéo Poyot

Site personnel de développeur web full stack, en ligne sur [matheopoyot.fr](https://matheopoyot.fr).

Construit avec Claude et relu ligne par ligne : la méthode (comprendre, vérifier, décider) est expliquée sur le site.

## Stack

- Next.js 16 en export statique (`out/`), servi par Nginx : aucun serveur Node en production
- Tailwind CSS 4, polices Manrope et DM Mono via `next/font`
- Animations en CSS, coupées quand le visiteur a réduit les animations dans son système

## Commandes

```bash
npm install
npm run dev      # développement sur http://localhost:3000
npm run lint
npm run build    # génère le site statique dans out/
```

## Photo du hero

Déposer `public/photo.jpg` (portrait 4:5) puis relancer `npm run build` : la photo remplace l'emplacement vide.
