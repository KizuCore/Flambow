# Flambow - Landing Page

Flambow est un prototype d'application web qui vise à connecter les générations autour du partage de compétences.

Le projet actuel est une landing page React présentant :
- la proposition de valeur,
- le fonctionnement en 3 étapes,
- les impacts du projet,
- une vidéo de démonstration,
- une inscription newsletter via JSONBin.

## Stack technique

- React 18
- Vite 6
- Tailwind CSS 3
- Axios
- ESLint

## Prérequis

- Node.js 18+ (recommandé)
- npm

## Installation

```bash
npm install
```

## Configuration

1. Duplique `.env.dist` vers `.env`

```bash
cp .env.dist .env
```

Sous Windows PowerShell :

```powershell
Copy-Item .env.dist .env
```

2. Renseigne la variable d'environnement utilisée par l'app :

```env
VITE_JSONBIN_URL=...
```

## Lancer le projet

```bash
npm run dev
```

Puis ouvre l'URL affichée par Vite (par défaut `http://localhost:5173`).

## Scripts disponibles

- `npm run dev` : lance le serveur de développement
- `npm run build` : génère le build de production dans `dist/`
- `npm run preview` : prévisualise le build localement
- `npm run lint` : lance ESLint

## Structure du projet

```text
src/
  App.jsx
  main.jsx
  index.css
  Navbar.jsx
  Hero.jsx
  HowDoesItWorkSection.jsx
  ActForTomorrowSection.jsx
  VideoSection.jsx
  NewsletterSection.jsx
  assets/
    components/
    fonts/
    images/
```

## Notes

- Le style principal est désormais géré avec Tailwind CSS.
- Certains anciens fichiers CSS restent présents dans `src/assets/style/` mais ne sont plus importés dans le flux principal.
- L'inscription newsletter utilise JSONBin via `VITE_JSONBIN_URL`.
