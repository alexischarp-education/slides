---
# Theme entry — `./` points to this package itself.
theme: ./
title: 'Thème MMI — démonstration'
info: |
  ## Thème Slidev MMI
  Démonstration des layouts (intro / default / section), du highlight de code
  et des 3 modes (dark / light / print).
# `auto` re-enables the dark/light toggle so all three modes can be demoed live.
# (The theme itself defaults to `dark` — see package.json > slidev.defaults.)
colorSchema: auto
# Per-slide transition
transition: slide-left
---

# JavaScript

Le langage du web, côté navigateur

<!--
La toute première slide utilise `layout: intro` via le défaut de Slidev ? Non :
on le déclare explicitement ci-dessous. Cette première page utilise le layout
`default` pour montrer le contraste avec l'intro qui suit.
-->

---

layout: intro
course: JavaScript
semester: 'BUT MMI · Semestre 1'
teacher: Alexis Charp
institution: 'IUT — MMI'
date: '2025 – 2026'

---

# JavaScript

Le langage du web, côté navigateur — de la console aux événements du DOM.

<!--
`layout: intro` : le titre et le sous-titre viennent du markdown, les
métadonnées (cours / semestre / enseignant / année) viennent du frontmatter et
sont rendues dans le bandeau du bas.
-->

---

layout: section
index: '01'
kicker: Première partie

---

# Variables & types

---

# Déclarer une variable

Deux mots-clés à connaître, une règle simple.

- `const` — la valeur **ne change pas** (à privilégier par défaut)
- `let` — la valeur **peut changer** au fil du programme
- On évite `var` (ancien, source de bugs de portée)

Pour inspecter un type, on utilise l'opérateur `typeof` :

```js
const prenom = 'Ada';
let age = 36;

console.log(typeof prenom); // "string"
console.log(typeof age); // "number"
```

> Bonne pratique : nommer ses variables en `camelCase`, sans accent ni espace.

---

# Highlight de code soigné

Le surlignage ligne par ligne aide à guider le regard pendant un cours.

```js {2|4-6|all} {lines: true}
function moyenne(notes) {
  let total = 0;
  // on additionne chaque note
  for (const note of notes) {
    total += note;
  }
  return total / notes.length;
}

console.log(moyenne([12, 15, 9])); // 12
```

Avec un nom de fichier et la coloration TypeScript :

```ts [panier.ts]
type Produit = { nom: string; prix: number };

const panier: Produit[] = [
  { nom: 'Clavier', prix: 49 },
  { nom: 'Souris', prix: 25 },
];

const total = panier.reduce((somme, p) => somme + p.prix, 0);
```

---

layout: section
index: '02'
kicker: Deuxième partie

---

# DOM & événements

---

# Sélectionner & écouter

<div grid="~ cols-2 gap-8">

<div>

## Sélectionner un élément

```js
const bouton = document.querySelector('#valider');
const champs = document.querySelectorAll('.field');
```

## Modifier le DOM

```js
bouton.textContent = 'Envoyé !';
bouton.classList.add('is-active');
```

</div>

<div>

## Écouter un événement

```js
bouton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Clic sur', e.target);
});
```

Quelques événements clés :

| Événement | Déclenché quand…            |
| --------- | --------------------------- |
| `click`   | l'utilisateur clique        |
| `input`   | la valeur d'un champ change |
| `submit`  | un formulaire est envoyé    |

</div>

</div>

---

# Les 3 modes du thème

Le même contenu, trois rendus pensés pour des contextes différents.

- **Dark** _(défaut)_ — fond très sombre, gradients animés en signature. Idéal en amphi, lumière tamisée.
- **Light** — fond clair, mêmes gradients en plus subtil. Pour les salles très éclairées.
- **Print** — sobre, sans animation, fond blanc, contrastes forts, encre économisée.

###### Comment tester

- Basculer **dark ↔ light** : icône soleil/lune dans la barre d'outils Slidev <kbd>en bas à gauche</kbd>
- Voir le rendu **print** : ajouter `?print` à l'URL, ou exporter en PDF (`slidev export`)

> Accessibilité : contrastes ≥ WCAG AA dans les trois modes, et l'animation se
> fige automatiquement si le système est en _« réduire les animations »_.

---

layout: section
index: '03'
kicker: Pour aller plus loin

---

# Animation entre extraits

---

# `magic-move` — du pas-à-pas fluide

Slidev anime la transition d'un extrait de code à l'autre (Shiki Magic Move).

````md magic-move {lines: true}
```js
// 1 — une boucle classique
const prix = [49, 25, 19];
let total = 0;
for (let i = 0; i < prix.length; i++) {
  total += prix[i];
}
```

```js
// 2 — for...of, plus lisible
const prix = [49, 25, 19];
let total = 0;
for (const p of prix) {
  total += p;
}
```

```js
// 3 — reduce, en une expression
const prix = [49, 25, 19];
const total = prix.reduce((somme, p) => somme + p, 0);
```
````

---

layout: section
index: '✓'
kicker: Fin de la démo

---

# À vous de jouer

Dupliquez `example.md`, gardez `theme: ./` et composez votre cours.
