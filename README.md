# Next.js Template

Ce projet est un template [Next.js](https://nextjs.org) créé avec [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Contexte

Ce template est conçu pour servir de point de départ pour les projets Next.js, intégrant des outils et des configurations couramment utilisés pour accélérer le développement.

## Architecture

L'architecture du projet suit les meilleures pratiques de Next.js avec une structure de dossiers claire :

## Architecture

L'architecture du projet suit les meilleures pratiques de Next.js avec une structure de dossiers claire :

## Packages Utilisés

Ce template utilise plusieurs packages pour améliorer le développement et les fonctionnalités de l'application :

```bash
nextjs-template/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Layout principal
│   │   ├── page.tsx          # Page principale
│   │   ├── Provider.tsx      # Providers de l'application
│   ├── components/           # Composants principaux de l'application
│   ├── hooks/                # Hooks personnalisés
│   ├── libs/                 # Bibliothèques utilitaires
│   ├── redux/                # Configuration Redux et slices
│   ├── services/             # Services pour les appels API
│   ├── types/                # Types TypeScript
│   ├── constants             # Constantes de l'application
│   ├── seed/                 # Données de seed
│   ├── shared/               # Composants partagés
│   ├── styles/               # Fichiers de style globaux et spécifiques
├── public/                   # Fichiers publics (images, fonts, etc.)
├── .gitignore                # Fichiers et dossiers à ignorer par Git
├── next.config.mjs           # Configuration de Next.js
├── package.json              # Dépendances et scripts du projet
├── postcss.config.mjs        # Configuration de PostCSS
├── tailwind.config.ts        # Configuration de Tailwind CSS
├── tsconfig.json             # Configuration de TypeScript
└── README.md                 # Documentation du projet
```

### Dépendances

- `@reduxjs/toolkit`: Pour la gestion de l'état.
- `@tanstack/react-query`: Pour la gestion des requêtes asynchrones.
- `@tanstack/react-query-devtools`: Pour les outils de développement de React Query.
- `date-fns`: Pour la manipulation des dates.
- `next`: Le framework Next.js.
- `react`: La bibliothèque React.
- `react-dom`: Le DOM virtuel de React.
- `react-icons`: Pour les icônes.
- `react-redux`: Pour l'intégration de Redux avec React.
- `react-toastify`: Pour les notifications.
- `redux-persist`: Pour la persistance de l'état Redux.
- `uuidv4`: Pour générer des identifiants uniques.
- `zod`: Pour la validation des schémas.

### Dépendances de Développement

- `@tanstack/eslint-plugin-query`: Pour les règles ESLint spécifiques à React Query.
- `@types/node`: Pour les types Node.js.
- `@types/react`: Pour les types React.
- `@types/react-dom`: Pour les types React DOM.
- `eslint`: Pour l'analyse statique du code.
- `eslint-config-next`: Pour la configuration ESLint de Next.js.
- `postcss`: Pour le traitement des CSS.
- `tailwindcss`: Pour les styles utilitaires.
- `typescript`: Pour le typage statique.

## Mise en Place

Pour démarrer avec ce template, suivez les étapes ci-dessous :

1. Clonez le dépôt :

   ```bash
   git clone <url-du-repo>
   cd nextjs-template
   ```

````

```

```

2. Installez les dépendances :

   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   # ou
   bun install
   ```

3. Lancez le serveur de développement :

   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   # ou
   bun dev
   ```

4. Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.

Vous pouvez commencer à éditer la page en modifiant `src/app/page.tsx`. La page se met à jour automatiquement lorsque vous modifiez le fichier.

## En Savoir Plus

Pour en savoir plus sur Next.js, consultez les ressources suivantes :

- [Documentation Next.js](https://nextjs.org/docs) - Apprenez les fonctionnalités et l'API de Next.js.
- [Apprendre Next.js](https://nextjs.org/learn) - Un tutoriel interactif pour Next.js.

Vous pouvez également consulter [le dépôt GitHub de Next.js](https://github.com/vercel/next.js) - vos retours et contributions sont les bienvenus !

## Déploiement sur Vercel

La manière la plus simple de déployer votre application Next.js est d'utiliser la [plateforme Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) créée par les développeurs de Next.js.

Consultez notre [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.

```

```
````
