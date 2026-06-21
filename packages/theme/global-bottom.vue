<!--
  Animated gradient background — rendered once, behind every slide.

  Slidev renders `global-bottom` just inside #app and *before* the slides, so as
  long as the layouts stay transparent (see styles/base.css) this layer shows
  through on every slide and animates continuously across slide transitions.

  All visuals (and the CSS-only keyframes) live in styles/animations.css. The
  layer is purely decorative, hence aria-hidden.
-->
<template>
  <div class="ac-bg" aria-hidden="true">
    <span class="ac-bg__blob ac-bg__blob--1" />
    <span class="ac-bg__blob ac-bg__blob--2" />
    <span class="ac-bg__blob ac-bg__blob--3" />
    <span class="ac-bg__blob ac-bg__blob--4" />
    <div class="ac-bg__vignette" />
  </div>
</template>
