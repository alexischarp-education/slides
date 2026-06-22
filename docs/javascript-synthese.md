# Cours JavaScript — BUT MMI S1

## Document de synthèse des décisions

---

## Contexte

**Formation :** BUT MMI (Métiers du Multimédia et de l'Internet) — 1ère année, Semestre 1
**Références PN :** Ressource R1.12 — Développement Web (20h dont 15h TP)
**SAÉ associée :** SAÉ 1.05 — Produire un site Web
**Apprentissages critiques ciblés :**

- AC14.01 — Exploiter de manière autonome un environnement de développement efficace et productif
- AC14.03 — Générer des pages Web à partir de données structurées

---

## Format du support

- **Outil :** Slidev
- **Architecture :** thème dans un package dédié (`packages/theme`), consommé par tous les decks
- **Un deck unique** couvrant l'ensemble du semestre, structuré en sections
- **Export PDF** natif pour distribution aux étudiants avec thème adapté à l'impression
- Les slides servent aussi bien en CM qu'en TP (rappel de cours en début de séance pratique)

---

## Plan du support

| #   | Section                      | Notes                                                      |
| --- | ---------------------------- | ---------------------------------------------------------- |
| 1   | Introduction & environnement | —                                                          |
| 2   | Variables & types            | _inclut un aperçu sommaire des tableaux/objets_            |
| 3   | Structures de contrôle       | —                                                          |
| 4   | Fonctions                    | —                                                          |
| 5   | Tableaux & objets            | _approfondissement_                                        |
| 6   | DOM & événements             | Section prioritaire — essentielle pour l'évaluation finale |

---

## Contenu validé par section

### Section 1 — Introduction & environnement

**1.1 Contexte & culture**

- Le trio HTML / CSS / JS — rôles respectifs (structure, style, comportement)
- Rôle de JS dans le navigateur (côté client uniquement — Node.js non abordé, c'est le S3/S4)

**1.2 Le navigateur comme environnement d'exécution**

- Comment le navigateur charge et exécute JS
- La console DevTools — premier terrain de jeu
- `console.log()` — premier outil de débogage

**1.3 Environnement de travail**

- VS Code + extension Prettier (formatage automatique)
- _ESLint exclu_ — trop complexe à ce stade (config, terminal, npm)
- Structure minimale d'un projet : `index.html` + `script.js`
- Liaison `<script src="">`

> **Exercices TP** _(pas de slides — énoncés dans documents séparés)_

- Ouvrir la console DevTools et taper ses premières instructions
- Créer un fichier `script.js`, l'attacher à un HTML, afficher un message dans la console

### Section 2 — Variables & types

**2.1 Déclarer une variable**

- `let` vs `const` — quand utiliser l'un ou l'autre
- Règles de nommage (camelCase, pas de chiffre en début, pas d'espaces)
- `typeof` pour inspecter un type

**2.2 Les types primitifs**

- `number` — entiers et décimaux, opérations de base
- `string` — guillemets simples/doubles, concaténation avec `+`, puis template literals `` ` ` ``
- `boolean` — `true`/`false`, lien avec les conditions (anticipation section 3)
- `null` et `undefined` — la différence entre "pas de valeur" et "pas défini"

**2.3 Aperçu — tableaux & objets**

- Un tableau c'est `[]` — liste ordonnée de valeurs
- Un objet c'est `{}` — ensemble de paires clé/valeur
- Syntaxe uniquement, pas d'approfondissement ici (→ section 5)

> **Exercices TP** _(pas de slides — énoncés dans documents séparés)_

- Déclarer des variables de chaque type, les afficher dans la console
- Construire une phrase avec concaténation, puis la réécrire en template literal
- Utiliser `typeof` pour deviner le type de différentes expressions

> **Conversions de types** (`Number()`, `String()`, `parseInt()`...) non abordées ici — émergera naturellement en section 6 avec les valeurs du DOM (inputs toujours de type string).

---

### Section 3 — Structures de contrôle

**3.1 Les opérateurs de comparaison**

- `==` vs `===` — égalité faible (avec coercition) vs égalité stricte
- `!=` vs `!==`
- Bonne pratique : toujours préférer `===`
- `>`, `<`, `>=`, `<=`

**3.2 Les opérateurs logiques**

- `&&`, `||`, `!`
- Combiner des conditions

**3.3 Conditions**

- `if` / `else if` / `else`
- Pas de `switch` ni ternaire en S1

**3.4 Boucles**

- `for` classique — quand on connaît le nombre d'itérations
- `while` — quand on boucle sur une condition
- `for...of` — parcourir un tableau ou une liste d'éléments

> **Exercices TP** _(pas de slides — énoncés dans documents séparés)_

- Écrire des conditions simples (parité d'un nombre, comparaison de strings…)
- Boucler sur un tableau de prénoms et les afficher dans la console
- Combiner condition + boucle (ex : afficher uniquement les éléments qui satisfont une condition)

---

### Section 4 — Fonctions

**4.1 Pourquoi des fonctions**

- Éviter la répétition, organiser le code, nommer des intentions

**4.2 Déclarer et appeler une fonction**

- Syntaxe `function foo() {}`
- Appel de la fonction
- Différence déclaration / appel

**4.3 Paramètres et valeur de retour**

- Paramètres vs arguments
- `return` — une fonction sans `return` renvoie `undefined`
- Plusieurs paramètres

**4.4 Portée des variables (scope)**

- Variable locale vs globale
- Une variable déclarée dans une fonction n'est pas accessible dehors
- Pourquoi c'est une bonne chose

**4.5 Composition simple**

- Une fonction peut appeler une autre fonction
- Décomposer un problème en petites fonctions

> **Exercices TP** _(pas de slides — énoncés dans documents séparés)_

- Écrire une fonction qui prend un prénom et retourne une phrase de salutation
- Écrire une fonction qui calcule une moyenne à partir de plusieurs notes
- Décomposer un problème en deux fonctions qui s'appellent

---

### Section 5 — Tableaux & objets

**5.1 Rappel — la syntaxe (section 2)**

- Bref rappel de `[]` et `{}` vus en section 2
- On entre maintenant dans le détail

**5.2 Tableaux**

- Accès par index, modification d'un élément
- `length`
- `push`, `pop`
- Itérer avec `for...of` (vu en section 3)
- `map` — transformer chaque élément
- `filter` — garder certains éléments selon une condition
- `find` — trouver le premier élément qui satisfait une condition

**5.3 Objets**

- Déclarer un objet, accéder à ses propriétés (`.` et `[]`)
- Modifier une propriété, en ajouter une
- Parcourir avec `for...in` (mention rapide)

**5.4 Tableau d'objets**

- Cas concret : liste d'utilisateurs, liste de produits
- Combiner `for...of` + accès aux propriétés
- Combiner `filter` ou `map` sur un tableau d'objets

> **Exercices TP** _(pas de slides — énoncés dans documents séparés)_

- Manipuler un tableau de nombres avec `map` et `filter`
- Créer un objet "étudiant" et accéder à ses propriétés
- Travailler sur un tableau d'objets : filtrer, transformer, afficher dans la console

---

### Section 6 — DOM & événements

**6.1 Qu'est-ce que le DOM**

- Le navigateur transforme le HTML en arbre d'objets manipulables
- `document` comme point d'entrée

**6.2 Sélectionner des éléments**

- `querySelector` et `querySelectorAll` — sélecteurs CSS
- `getElementById`, `getElementsByClassName` — anciennes méthodes, encore très présentes dans le code existant
- La différence entre un élément et une NodeList

**6.3 Modifier le DOM**

- `textContent` et `innerHTML`
- `classList` — `add`, `remove`, `toggle`
- `setAttribute` / `getAttribute`
- Modifier le style inline (`element.style`)
- Conversions de types : les valeurs des inputs sont des strings (`Number()`, `parseInt()`)

**6.4 Écouter des événements**

- Le mécanisme `addEventListener` — principe général
- Introduction aux arrow functions dans ce contexte : `element.addEventListener('click', (e) => {})`
- L'objet `event` — `e.target`, `e.preventDefault()`
- Événements clés en exemple : `click`, `input`, `submit`

> **Exercices TP** _(pas de slides — énoncés dans documents séparés)_

- Modifier le contenu d'un élément au clic d'un bouton
- Lire la valeur d'un input et l'afficher dans la page
- Ajouter/supprimer une classe CSS sur un élément
- Mini-projet court : une page interactive combinant sélection, modification et événements

---

## Décisions & contraintes pédagogiques

- **Public hétérogène** : certains ont déjà codé, d'autres non — progressivité importante
- **Node.js non abordé** en S1 (arrive en 2e année) — aucune mention même informelle
- **DOM & événements** = finalité du semestre, doit avoir suffisamment de temps de pratique (2/3 TP prévus)
- **Pas de framework JS** au S1
