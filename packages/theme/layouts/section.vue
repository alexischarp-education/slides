<!--
  section — a bold section divider with a big, centred, gradient-filled title.

  Frontmatter props:
    index   — optional section number shown as an oversized ghost figure (e.g. "02")
    kicker  — optional small uppercase label above the title (e.g. "Partie 2")

  Example:
    ---
    layout: section
    index: "03"
    kicker: Le langage
    ---
    # Structures de contrôle
-->
<script setup lang="ts">
defineProps<{
  index?: string | number;
  kicker?: string;
}>();
</script>

<template>
  <div class="slidev-layout section">
    <div class="section__inner">
      <div v-if="index !== undefined && index !== ''" class="section__index">{{ index }}</div>
      <div v-if="kicker" class="section__kicker">{{ kicker }}</div>
      <slot />
    </div>
  </div>
</template>
