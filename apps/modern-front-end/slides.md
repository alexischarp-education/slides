---
theme: '@alexischarp/slides-theme'
title: 'Développement front-end moderne - Alexis Charpentier'
info: |
  ## Développement front-end moderne
  Un regard sur les pratiques et le métier de développeur front-end aujourd'hui.
colorSchema: auto
transition: slide-left

layout: intro
course: 'Front-end moderne'
teacher: Alexis Charpentier
institution: 'BUT MMI - Champs-sur-Marne'
date: '2026 – 2027'
---

# Développement front-end moderne

Un regard sur les pratiques et le métier de développeur front-end aujourd'hui.

---

# Copyright & licence

<span class="spacing"></span>

Ce support est mis à disposition sous licence [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

Cela signifie que vous pouvez **partager** et **adapter** le contenu, à condition de **mentionner l'auteur** et de **redistribuer sous la même licence**.

<span class="spacing"></span>

Ressources principales utilisées pour la construction de ce cours :

- [Node.js — Documentation](https://nodejs.org/docs)
- [npm Docs](https://docs.npmjs.com/)

---
layout: center
transition: fade
---

<span class="text-3xl">“_I think all managers have to be so demanding._”</span>

---
layout: image
image: /pep.jpg
---

<!--
- Mon rôle n’est pas d’être confortable... mon rôle est de vous rendre employables
- Comme un coach de haut niveau
  - discours parfois dur
  - standards non négociables
- Ce n’est jamais personnel
- C’est la condition pour tirer le meilleur de chacun
-->

---

# Produire du code n'est plus le facteur différenciant

<span class="spacing"></span>

<v-click>

## Contexte marché

- Le code est devenu abondant et peu coûteux à produire
- L'IA permet de générer vite, beaucoup et de plus en plus fidèlement

</v-click>

<span class="spacing"></span>

<v-click>

## Là où se fait la différence

- Qualité dans le temps
- Capacité à piloter la production de code
- Décisions techniques durables

</v-click>

---
layout: section
index: '01'
kicker: JavaScript côté serveur
---

# Node.js

---

# Qu'est-ce que Node.js ?

JavaScript côté serveur

<v-clicks>

- Node.js est un environnement d'exécution.
- Il permet d'exécuter JavaScript en dehors du navigateur.
- Principalement utilisé côté serveur ou pour des scripts en ligne de commande.

<span class="spacing"></span>

- Il nous permet de disposer d'un riche choix de bibliothèques et frameworks.

<div class="mt-16 text-xl transform-rotate--2">Un seul langage, un écosystème.</div>
</v-clicks>

---

# npm

Node Package Manager

<v-clicks>

- Gestionnaire de paquets pour Node.js.
- Permet d'installer, mettre à jour et gérer les dépendances de projets JavaScript.
- Accès à un vaste écosystème de bibliothèques open-source.
- Facilite le partage et la réutilisation de code entre projets.

</v-clicks>

<span class="spacing"></span>

<v-click>

Voir [npmjs.com](https://www.npmjs.com/)

</v-click>

---

# Évolution de nos arborescences de projets

<div class="grid grid-cols-2 gap-16">
  <div v-click>
    <h3 class="mb-4">Actuellement</h3>

```bash
my-project/
  ├── index.php
  ├── styles/
      ├── index.css
      ├── reset.css
      └── ...
  └── scripts/
      ├── index.js
      ├── lib-i-downloaded.js
      └── ...
```

  </div>
  <div v-click>
    <h3 class="mb-4">Organisation moderne</h3>

```bash
my-project/
  ├── node_modules/ # dépendances gérées par npm
  ├── public/ # fichiers statiques servis au client
  ├── src/ # code source de l'application
  ├── package.json # fiche d'identité du projet
  └── package-lock.json # verrouillage des versions des dépendances

```

  </div>
</div>

---

# package.json

La fiche d'identité du projet

```json [package.json] {all|2-4|5|6|7-10|11-16|17}
{
  "name": "my-project",
  "description": "A modern front-end project",
  "author": "@PepGuardiola",
  "version": "1.5.26",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "build": "vite build"
  },
  "dependencies": {
    "colors": "^1.4.0"
  },
  "devDependencies": {
    "vite": "^7.3.1"
  },
  "license": "MIT"
}
```

---
layout: section
index: '02'
kicker: Node.js
---

# Exercice pratique

---

# Mood Checker

On code un programme interactif en Node.js.

<span class="spacing"></span>

Check-list :

- Afficher un message
- Lire une entrée utilisateur
- Installer une dépendance externe
- Créer un script exécutable
- Utiliser les fonctionnalités internes de Node.js

---

# Mood Checker

On code un programme interactif en Node.js.

<hr>

<v-click>

**Étape 0 - Créer le projet**

</v-click>

<v-click>

```bash
mkdir mood-checker
cd mood-checker
npm init
```

</v-click>

<v-click>

**Étape 1 - Création et exécution d'un script simple**

</v-click>

<v-click>

```js [src/index.js]
console.log('Hello, world!');
```

<span class="spacing"></span>

```bash
node ./src/index.js
```

</v-click>

---

# Mood Checker

On code un programme interactif en Node.js.

<hr>

<v-click>

**Étape 2 - Définir un script exécutable**

</v-click>

<v-click>

```json [package.json]
"scripts": {
  "start": "node ./src/index.js"
},
```

</v-click>

<v-click>

```bash
npm run start
```

</v-click>

---

# Mood Checker

On code un programme interactif en Node.js.

<hr>

<v-click>

**Étape 3 - Installation d'une dépendance externe et utilisation**

</v-click>

<v-click>

```bash
npm install @inquirer/prompts
```

</v-click>

<v-click>

```js [src/index.js]
import { select } from '@inquirer/prompts';

const mood = await select({
  message: 'How are you feeling today?',
  choices: ['Happy', 'Sad', 'Excited', 'Angry'],
});

console.log(`You are feeling: ${mood}`);
```

</v-click>

---

# Mood Checker

On code un programme interactif en Node.js.

<hr>

<v-click>

**Étape 4 - Amélioration du script**

</v-click>

<v-click>

```bash
npm install cowsay
```

</v-click>

<v-click>

```js [src/index.js]
import cowsay from 'cowsay';
import { select } from '@inquirer/prompts';

// Rest of the code...

console.log(cowsay.say({ text: `You are feeling: ${mood}` }));
```

</v-click>

---

# Mood Checker

On code un programme interactif en Node.js.

<hr>

**Étape 5 - À vous de jouer**

_Créez un quiz de personnalité interactif en Node.js._

<span class="spacing"></span>

Posez des questions à l'utilisateur. En fonction de ses réponses, il se verra attribuer :

- Un animal totem
- Une recommandation de film ou de livre.
- Etc.

**Choisissez un thème qui vous inspire !**

---
layout: outro
eyebrow: Développement front-end moderne
teacher: Alexis Charpentier
contact: alexis.charpentier@edu.univ-eiffel.fr
date: '2026 – 2027'
---

# Merci !

À vous de jouer.
