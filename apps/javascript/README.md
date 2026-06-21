# JavaScript — BUT MMI · Semestre 1

Deck de cours [Slidev](https://sli.dev), basé sur le thème partagé
[`@alexischarp/slides-theme`](../../packages/theme).

```bash
# Depuis la racine du monorepo
pnpm --filter @alexischarp/slides-javascript dev      # ouvre le deck
pnpm --filter @alexischarp/slides-javascript build    # build statique
pnpm --filter @alexischarp/slides-javascript export   # export PDF
```

Le contenu vit dans [`slides.md`](./slides.md). Le thème (layouts `intro` /
`section` / `default`, gradients animés, highlight de code, modes dark/light/print)
est fourni par le package — voir son README pour les options de layout.

> **Créer un autre deck ?** Depuis la racine : `pnpm new:deck <slug>` (ex.
> `pnpm new:deck css`). Voir `packages/theme/README.md` › _Étendre à plusieurs decks_.
