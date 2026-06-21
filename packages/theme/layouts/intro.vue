<!--
  intro — the deck's opening slide.

  The title/subtitle come from the slide's markdown (the `<slot/>`), while the
  course metadata is provided through frontmatter props and rendered as a tidy
  strip at the bottom. Any prop you omit is simply skipped.

  Frontmatter props:
    course      — course / module name      (e.g. "JavaScript")
    semester    — semester                   (e.g. "BUT MMI · Semestre 1")
    teacher     — instructor name            (e.g. "Alexis Charp")
    institution — school / department        (e.g. "IUT — MMI")
    date        — date or academic year      (e.g. "2025 – 2026")
    eyebrow     — small pill above the title  (defaults to `institution`)

  Example:
    ---
    layout: intro
    course: JavaScript
    semester: BUT MMI · Semestre 1
    teacher: Alexis Charp
    date: 2025 – 2026
    ---
    # JavaScript
    Le langage du web, côté navigateur
-->
<script setup lang="ts">
const props = defineProps<{
  course?: string;
  semester?: string;
  teacher?: string;
  institution?: string;
  date?: string;
  eyebrow?: string;
}>();

const eyebrowText = props.eyebrow ?? props.institution;
const hasMeta = Boolean(props.semester || props.teacher || props.date || props.institution || props.course);
</script>

<template>
  <div class="slidev-layout intro">
    <div class="intro__content">
      <div v-if="eyebrowText" class="intro__eyebrow">{{ eyebrowText }}</div>

      <slot />

      <div v-if="hasMeta" class="intro__meta">
        <div v-if="course" class="intro__meta-item">
          <span class="intro__meta-label">Cours</span>
          <span class="intro__meta-value">{{ course }}</span>
        </div>
        <div v-if="semester" class="intro__meta-item">
          <span class="intro__meta-label">Semestre</span>
          <span class="intro__meta-value">{{ semester }}</span>
        </div>
        <div v-if="teacher" class="intro__meta-item">
          <span class="intro__meta-label">Enseignant</span>
          <span class="intro__meta-value">{{ teacher }}</span>
        </div>
        <div v-if="date" class="intro__meta-item">
          <span class="intro__meta-label">Année</span>
          <span class="intro__meta-value">{{ date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
