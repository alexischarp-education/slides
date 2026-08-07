---
theme: '@alexischarp/slides-theme'
title: 'React for beginners - Alexis Charpentier'
info: |
  ## React for beginners
  Bases de la bibliothèque JavaScript la plus populaire du web.
colorSchema: auto
transition: slide-left

layout: intro
course: React
teacher: Alexis Charpentier
institution: 'BUT MMI - Champs-sur-Marne'
date: '2026 – 2027'
---

# React for beginners

Bases de la bibliothèque JavaScript la plus populaire du web.

---

# Copyright & licence

<span class="spacing"></span>

Ce support est mis à disposition sous licence [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

Cela signifie que vous pouvez **partager** et **adapter** le contenu, à condition de **mentionner l'auteur** et de **redistribuer sous la même licence**.

<span class="spacing"></span>

Ressource principale utilisée pour la construction de ce cours :

- [React — Documentation officielle](https://react.dev/)

---
layout: center
---

<span class="text-3xl">_Lorsque vous travaillez sur un projet web, quels sont les principaux défis auxquels vous êtes généralement confronté ?_</span>

---

# Quelques défis personnels

<span class="spacing"></span>

<v-click>

#### Réutilisabilité du code

Écrire plusieurs fois le même code peut être fastidieux et source d'erreurs.

</v-click>
<v-click>

#### Gestion de l'état

Il peut être difficile de synchroniser l'UI avec les données, en particulier lorsque celles-ci changent de manière dynamique.

</v-click>
<v-click>

#### Interactivité

Créer des interfaces complexes et réactives sans javascript compliqué peut s'avérer difficile.

</v-click>
<v-click>

#### Maintenance

Il est difficile de conserver un code propre et évolutif à mesure que le projet prend de l'ampleur.

</v-click>

---
layout: section
index: '01'
kicker: React
---

# Les origines

---

# React

Quick story

<a href="https://www.youtube.com/watch?v=8pDqJVdNa44" class="abs-tr m-12 text-sm" target="_blank">
  React, the documentary <carbon:logo-react />
</a>

<span class="spacing"></span>

<v-clicks>

Vers 2011, le développement front-end reposait largement sur des bibliothèques telles que jQuery et Backbone.js.

Ces outils fonctionnaient bien pour les projets simples, mais peinaient à faire face à la complexité croissante des applications web de grande envergure.

Les développeurs devaient souvent « réinventer la roue » pour gérer l'état, les interactions avec l'interface utilisateur et l'évolutivité.

Un ingénieur de Facebook a créé React pour relever ces défis.

</v-clicks>

---

# React

Quick story

<a href="https://www.youtube.com/watch?v=8pDqJVdNa44" class="abs-tr m-12 text-sm" target="_blank">
  React, the documentary <carbon:logo-react />
</a>

<span class="spacing"></span>

<v-clicks>

L'objectif était de repenser l'approche du développement front-end en mettant l'accent sur :

- L'efficacité (DOM virtuel).
- L'évolutivité (architecture basée sur les composants).
- L'expérience développeur (syntaxe déclarative).

</v-clicks>

<span class="spacing"></span>

<v-clicks>

Évolution de React :

- (2013) React est devenu open source, permettant ainsi aux développeurs du monde entier de l'adopter.
- Il a rapidement révolutionné l'écosystème front-end.

</v-clicks>

---
layout: center
---

<span class="text-2xl">Connaissez-vous des alternatives à React ?</span>

---
layout: section
index: '02'
kicker: React
---

# Les bases

---
layout: two-cols
---

# Composants

Un composant React est un élément réutilisable de l'interface utilisateur dans une application React.

Il fonctionne comme une boîte noire : il reçoit des données d'entrée (appelées « props ») et produit une représentation visuelle de l'interface basée sur ces données.

::right::

<div class="flex justify-center items-center h-full">

```js [simple-component.jsx] {all|3|4|5-8|6}
// Composant fonctionnel

export const SimpleComponent = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Welcome to React components.</p>
    </div>
  );
};
```

</div>

---
layout: two-cols
---

# Composants

Voyons comment le composant précédent peut être utilisé dans une autre partie de notre application.

Dans cet exemple, `App` est un autre composant qui affiche `SimpleComponent`, en lui transmettant des props spécifiques (`name`).

Lorsque l'application s'exécute, elle affiche le contenu de `SimpleComponent` avec les données correctes fournies par `App`.

::right::

<div class="flex justify-center items-center h-full">

```js [app.jsx] {all|1|3|6-7}
import { SimpleComponent } from './SimpleComponent';

const App = () => {
  return (
    <div>
      <SimpleComponent name="Alice" />
      <SimpleComponent name="Bob" />
    </div>
  );
};
```

</div>

---
layout: two-cols
---

# Props

Les props sont un concept central dans React, permettant le transfert de données dynamiques d'un composant parent vers ses composants enfants.

Caractéristiques clés :

- **Immuables :** les props ne peuvent pas être modifiées, lecture seule
- **Personnalisables :** permettent de configurer le comportement et l'apparence des composants
- **Types variés :** peuvent être des chaînes, nombres, objets, fonctions, etc.

::right::

<div class="flex justify-center items-center h-full">

```js
// Composant parent
const ParentComponent = () => {
  const data = 'Ceci est une prop statique';

  return (
    <div>
      <ChildComponent data={data} />
    </div>
  );
};

// Composant enfant
const ChildComponent = ({ data }) => {
  return <p>{data}</p>;
};
```

</div>

---
layout: center
---

<div class="text-center">
  <h1>TP1</h1>
  <p>Composants et props</p>
  <a class="inline-block mt-8" href="https://docs.google.com/document/d/1D95JS-P0p_NO2qsM2tq42NnchYDlcBf_VCSjk1DZtpc/edit?usp=sharing" target="_blank">
    Lien vers le TP
    <carbon:document />
  </a>
</div>

---

# Hooks

<span class="spacing"></span>

<v-clicks>

Les hooks sont une fonctionnalité introduite dans React 16.8 qui permet aux développeurs de « se connecter » aux fonctionnalités React sans écrire de composants de classe.

Les hooks sont des fonctions JavaScript qui suivent des conventions spécifiques :

- Ils commencent toujours par le préfixe « use ».
- Ils ne peuvent être utilisés qu'à l'intérieur de composants fonctionnels.

Exemples : `useState`, `useEffect`, `useRef`

</v-clicks>

---
layout: two-cols
---

# useState

<div class="text-sm">

`useState` est un hook qui permet aux composants fonctionnels de gérer l'état. Contrairement aux variables classiques, les changements d'état déclenchent un nouveau rendu, garantissant ainsi que l'interface utilisateur reste à jour.

Lorsque vous appelez `useState(initialValue)`, deux valeurs sont renvoyées :

1. La valeur actuelle de l'état.
2. Une fonction permettant de mettre à jour cette valeur.

À chaque mise à jour de l'état, React effectue un nouveau rendu du composant, appliquant ainsi les modifications à l'interface utilisateur.

</div>

::right::

<div class="flex justify-center items-center h-full">

```js [app.jsx] {all|2|4-6|10-11}
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
```

</div>

---
layout: two-cols
transition: none
---

# useEffect

<div class="text-sm">

`useEffect` est un hook qui permet aux composants fonctionnels d'exécuter des effets de bord (par exemple : récupérer des données, manipuler le DOM ou ajouter des écouteurs d'événements).

Contrairement aux mises à jour de l'état (state), que React gère automatiquement, certaines opérations doivent être exécutées après le rendu du composant : c'est précisément le rôle de `useEffect`.

`useEffect(effectFunction, dependencies)` prend deux arguments.

Comme `useEffect` s'exécute après le rendu, il ne bloque pas l'interface utilisateur, ce qui le rend idéal pour des tâches comme la récupération de données.

</div>

---
layout: two-cols
---

# useEffect

<div class="text-sm">

1. Une fonction d'effet, exécutée après le rendu du composant.
2. Un tableau de dépendances optionnel, qui détermine quand l'effet est exécuté.

Comportements clés :

- Sans dépendances (`[]`) → s'exécute uniquement lors du montage du composant.
- Avec des dépendances (`[value]`) → s'exécute lorsque `value` change.
- Sans tableau de dépendances → s'exécute à chaque rendu.

</div>

::right::

<div class="flex justify-center items-center h-full">

```js [app.jsx] {all|2|4-8|12}
const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return <div>{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}</div>;
};
```

</div>

---
layout: two-cols
---

# useRef

<div class="text-sm">

`useRef` est un hook qui permet de créer une référence mutable pour stocker des valeurs qui persistent entre les rendus sans déclencher de nouveau rendu.

Il est couramment utilisé pour :

- Accéder directement à des éléments du DOM.
- Stocker des valeurs qui n'ont pas besoin de provoquer un re-render.

Comportements clés :

- L'objet ref persiste entre les rendus mais ne déclenche pas de re-render.
- `useRef` peut contenir n'importe quelle valeur mutable, pas uniquement des éléments du DOM.

</div>

::right::

<div class="flex justify-center items-center h-full">

```js [app.jsx] {all|2|13|5-7|4-8,17}
const InputFocus = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};
```

</div>

---
layout: center
---

<div class="text-center">
  <h1>TP2</h1>
  <p>States et filtres</p>
  <a class="inline-block mt-8" href="https://docs.google.com/document/d/1D95JS-P0p_NO2qsM2tq42NnchYDlcBf_VCSjk1DZtpc/edit?usp=sharing" target="_blank">
    Lien vers le TP
    <carbon:document />
  </a>
</div>

---
layout: outro
eyebrow: React for beginners
teacher: Alexis Charpentier
contact: alexis.charpentier@edu.univ-eiffel.fr
date: '2026 – 2027'
---

# Merci !

À vous de jouer.
