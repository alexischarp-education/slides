# @alexischarp/slides-theme

Thème [Slidev](https://sli.dev) audacieux et accessible, conçu pour les cours du
**BUT MMI** (Métiers du Multimédia et de l'Internet).

- 🌌 **Gradients animés** en CSS pur — la signature visuelle, lente et non distrayante.
- 🌗 **3 modes** : `dark` (défaut) · `light` · `print`.
- ♿ **Accessible** : contrastes ≥ WCAG AA dans les trois modes, animation figée si _prefers-reduced-motion_.
- 🎨 **Highlight de code soigné** via Shiki (thème dual `vitesse-dark` / `vitesse-light`).
- 🔤 Typographie moderne : **Space Grotesk** (texte) + **JetBrains Mono** (code).

## Aperçu

```bash
# Depuis la racine du monorepo
pnpm --filter @alexischarp/slides-theme dev      # lance example.md
pnpm --filter @alexischarp/slides-theme build    # build statique
pnpm --filter @alexischarp/slides-theme export   # export PDF
```

## Utilisation dans un deck

```yaml
---
theme: '@alexischarp/slides-theme'
---
```

Dans ce dépôt (workspace pnpm), le thème est lié automatiquement ; il suffit que
le deck déclare ce nom de thème. L'`example.md` du thème lui-même utilise
`theme: ./`.

## Étendre à plusieurs decks

Chaque cours est un deck indépendant sous `apps/<slug>/`, qui consomme ce thème.
Un deck minimal = **deux fichiers** : `package.json` + `slides.md`.

### Créer un deck (recommandé)

Depuis la racine du monorepo :

```bash
pnpm new:deck css "CSS — BUT MMI S1"   # → crée apps/css/
pnpm install                            # lie le thème (workspace:*)
pnpm --filter @alexischarp/slides-css dev
```

`new:deck <slug> ["Titre"]` copie `templates/deck/` vers `apps/<slug>/` en
remplaçant le nom du package, le titre et le slug. Modifie le starter dans
`templates/deck/` pour changer ce que reçoit chaque nouveau deck.

### Créer un deck à la main

```jsonc
// apps/<slug>/package.json
{
  "name": "@alexischarp/slides-<slug>",
  "type": "module",
  "scripts": { "dev": "slidev --open", "build": "slidev build", "export": "slidev export" },
  "dependencies": {
    "@alexischarp/slides-theme": "workspace:*",
    "@slidev/cli": "^52.16.0",
    "vue": "^3.5.33",
  },
}
```

```yaml
# apps/<slug>/slides.md
---
theme: '@alexischarp/slides-theme'
---
# Mon cours
```

Puis `pnpm install`. Le glob `apps/*` de `pnpm-workspace.yaml` détecte le deck
automatiquement ; `workspace:*` le relie à la version locale du thème (toute
modif du thème est répercutée sur tous les decks, sans republier).

### Lancer / builder

```bash
pnpm --filter @alexischarp/slides-<slug> dev      # un deck précis
turbo run build                                    # tous les decks (+ le thème)
```

## Modes

| Mode      | Déclencheur                                                            | Rendu                                                     |
| --------- | ---------------------------------------------------------------------- | --------------------------------------------------------- |
| **dark**  | défaut du thème (`slidev.defaults.colorSchema: dark`)                  | fond violet-noir, gradients vifs                          |
| **light** | `colorSchema: light` dans le deck, ou le bouton soleil/lune            | fond clair, gradients pastel subtils                      |
| **print** | `?print` dans l'URL, l'export PDF, ou la classe `.slidev-layout-print` | blanc, sans animation, contrastes forts, encre économisée |

> Le thème démarre en **dark** par défaut. Pour rendre un deck basculable
> dark ↔ light en direct, ajouter `colorSchema: auto` dans son frontmatter (c'est
> ce que fait `example.md`). Pour le figer en clair : `colorSchema: light`.

## Layouts

### `intro` — ouverture du deck

Titre/sous-titre depuis le markdown, métadonnées depuis le frontmatter.

```yaml
---
layout: intro
course: JavaScript
semester: 'BUT MMI · Semestre 1'
teacher: Alexis Charp
institution: 'IUT — MMI'
date: '2025 – 2026'
---
# JavaScript
Le langage du web, côté navigateur
```

### `section` — séparateur de section

Grand titre centré en dégradé, avec un index géant optionnel.

```yaml
---
layout: section
index: '02' # figure géante en filigrane (optionnel)
kicker: Partie 2 # petite étiquette au-dessus (optionnel)
---
# DOM & événements
```

### `default` — slide de contenu

Layout standard (titre + contenu). Aucun frontmatter requis.

```yaml
---
layout: default # implicite, peut être omis
---
# Mon titre
- du contenu…
```

### `detail` — approfondissement / révision

Même flux que `default`, plus un badge **« Référence »** dans le coin supérieur
droit. Pensé pour les slides d'approfondissement : elles servent de support de
révision dans le PDF et peuvent être survolées rapidement en cours.

```yaml
---
layout: detail
badge: Référence # optionnel — libellé du badge (défaut : « Référence »)
---
# let vs const — les nuances
- du contenu détaillé…
```

### `outro` — clôture du deck

Le pendant d'`intro` : titre/sous-titre centrés depuis le markdown, et un bandeau
de bas de slide construit depuis le frontmatter (chaque prop omise est ignorée).

```yaml
---
layout: outro
eyebrow: Fin du module # petite pastille au-dessus (défaut : institution)
teacher: Alexis Charp
contact: alexis@iut.fr
date: '2025 – 2026'
---
# Merci !
À vous de jouer.
```

## Personnalisation

Le thème est piloté par des variables CSS `--ac-*` (voir `styles/css-vars.css`).
Pour ajuster une couleur sur un deck, surcharge-les dans un bloc `<style>` global
ou via `styles/` du projet :

```css
html.dark {
  --ac-primary: #f472b6;
}
```

## Structure du paquet

```
packages/theme/
├─ package.json          # metadata + slidev.defaults / slidev.colorSchema
├─ example.md            # démo (theme: ./)
├─ global-bottom.vue     # couche de gradient animée (derrière chaque slide)
├─ setup/
│  └─ shiki.ts           # highlight Shiki dual dark/light
├─ layouts/
│  ├─ default.vue
│  ├─ detail.vue
│  ├─ section.vue
│  ├─ intro.vue
│  └─ outro.vue
├─ components/           # composants globaux (vide pour l'instant)
└─ styles/
   ├─ index.ts           # point d'entrée (importe tout dans l'ordre)
   ├─ css-vars.css       # design tokens des 3 modes
   ├─ base.css           # typographie + éléments markdown
   ├─ code.css           # habillage des blocs de code
   ├─ layout.css         # styles propres à default/section/intro
   ├─ animations.css     # keyframes du gradient (CSS pur)
   └─ print.css          # overrides du mode print
```
