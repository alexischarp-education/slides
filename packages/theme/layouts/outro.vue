<!--
  outro — the deck's closing slide (the mirror of `intro`).

  The title/subtitle come from the slide's markdown (the `<slot/>`), centred on
  the slide. An optional eyebrow chip sits above it, and a tidy footer strip is
  built from frontmatter props. Any prop you omit is simply skipped.

  Frontmatter props:
    eyebrow     — small pill above the title (defaults to `institution`)
    institution — fallback for the eyebrow
    teacher     — instructor name           (e.g. "Alexis Charp")
    contact     — email / site / handle      (e.g. "alexis@iut.fr")
    date        — date or academic year      (e.g. "2025 – 2026")

  Example:
    ---
    layout: outro
    eyebrow: Fin du module
    teacher: Alexis Charp
    contact: alexis@iut.fr
    ---
    # Merci !
    À vous de jouer.
-->
<script setup lang="ts">
const props = defineProps<{
  eyebrow?: string;
  institution?: string;
  teacher?: string;
  contact?: string;
  date?: string;
}>();

const eyebrowText = props.eyebrow ?? props.institution;
const hasFooter = Boolean(props.teacher || props.contact || props.date);
</script>

<template>
  <div class="slidev-layout outro">
    <div class="outro__content">
      <div v-if="eyebrowText" class="outro__eyebrow">{{ eyebrowText }}</div>

      <slot />

      <div v-if="hasFooter" class="outro__meta">
        <div v-if="teacher" class="outro__meta-item">
          <span class="outro__meta-label">Enseignant</span>
          <span class="outro__meta-value">{{ teacher }}</span>
        </div>
        <div v-if="contact" class="outro__meta-item">
          <span class="outro__meta-label">Contact</span>
          <span class="outro__meta-value">{{ contact }}</span>
        </div>
        <div v-if="date" class="outro__meta-item">
          <span class="outro__meta-label">Année</span>
          <span class="outro__meta-value">{{ date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
