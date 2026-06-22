# Slides — BUT MMI

Monorepo des supports de cours [Slidev](https://sli.dev) pour le BUT MMI.
Un **thème** partagé, plusieurs **decks** indépendants.

## Structure

```
.
├─ packages/
│  ├─ theme/          # @alexischarp/slides-theme — le thème partagé (layouts, styles, gradients)
│  └─ eslint-config/  # config eslint partagée
├─ apps/
│  └─ javascript/     # un deck = un cours (consomme le thème via workspace:*)
├─ templates/
│  └─ deck/           # gabarit copié par `pnpm new:deck`
└─ scripts/
   └─ new-deck.mjs    # générateur de deck
```

## Démarrer

```bash
pnpm install
pnpm --filter @alexischarp/slides-javascript dev   # ouvre le deck JS
```

## Ajouter un cours

```bash
pnpm new:deck css "CSS — BUT MMI S1"   # crée apps/css/
pnpm install
pnpm --filter @alexischarp/slides-css dev
```

Détails et options de layout : [`packages/theme/README.md`](./packages/theme/README.md).

## Commandes utiles

| Commande                         | Effet                           |
| -------------------------------- | ------------------------------- |
| `pnpm --filter <deck> dev`       | lance un deck en dev            |
| `pnpm --filter <deck> export`    | exporte un deck en PDF          |
| `turbo run build`                | build le thème + tous les decks |
| `pnpm new:deck <slug> ["Titre"]` | scaffold un nouveau deck        |
| `pnpm format`                    | prettier sur tout le repo       |
