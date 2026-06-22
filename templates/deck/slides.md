---
# Thème partagé du monorepo, lié via pnpm workspace (packages/theme).
theme: '@alexischarp/slides-theme'
title: '{{TITLE}}'
info: |
  ## {{TITLE}}
  Support de cours BUT MMI — thème @alexischarp/slides-theme
# `auto` garde le bouton dark/light (le thème démarre en dark par défaut).
colorSchema: auto
transition: slide-left
---

# {{TITLE}}

Sous-titre du deck

---
layout: intro
course: '{{TITLE}}'
semester: 'BUT MMI · Semestre 1'
teacher: 'Alexis Charp'
institution: 'IUT — MMI'
date: '2025 – 2026'
---

# {{TITLE}}

Une phrase d'accroche pour ouvrir le cours.

---
layout: section
index: '01'
kicker: Première partie
---

# Premier chapitre

---

# Une slide de contenu

- Point clé numéro un
- Point clé numéro deux
- Point clé numéro trois

```js
const greet = (name) => `Bonjour ${name} !`;
console.log(greet('MMI'));
```

---
layout: section
index: '✓'
kicker: Fin
---

# Merci

À vous de remplir `slides.md`.
