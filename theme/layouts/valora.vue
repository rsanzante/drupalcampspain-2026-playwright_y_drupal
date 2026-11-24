<!--
  DCS 19 · Valora la sesión (diapositiva 25 de la plantilla)
  Contenido: # Título, párrafo de subtítulo y párrafo de texto.
  Frontmatter:
    antetitulo: 'Feedback'   texto azul sobre el título (opcional)
    class: dcs-centrado      centra el contenido horizontalmente (opcional)
-->
<script setup lang="ts">
import logoColor from '../assets/logos/logo-color.png'

withDefaults(defineProps<{ antetitulo?: string }>(), { antetitulo: 'Feedback' })
</script>

<template>
  <div class="slidev-layout dcs-valora dcs-fondo-cielo">
    <img :src="logoColor" alt="DrupalCamp Spain Madrid" class="logo">
    <p class="antetitulo">{{ antetitulo }}</p>
    <div class="contenido">
      <slot />
    </div>
    <DcsPie :numero="false" />
  </div>
</template>

<style scoped>
.dcs-valora {
  position: relative;
  height: 100%;
  padding: 0;
}
/* Posiciones del PPTX (slideLayout19 y slide25), en px */
.logo {
  position: absolute;
  left: var(--dcs-margen-x);
  top: 53px;
  width: 265px;
  height: auto;
}
.antetitulo {
  position: absolute;
  left: var(--dcs-margen-x);
  top: 211px;
  margin: 0;
  font-size: 16px; /* 12 pt */
  font-weight: 700;
  text-transform: uppercase;
  color: var(--dcs-azul);
}
.contenido {
  position: absolute;
  left: var(--dcs-margen-x);
  top: 250px;
  width: 653px;
}
/* Variante con frontmatter `class: dcs-centrado`: contenido centrado en la diapositiva */
.dcs-centrado .contenido {
  left: var(--dcs-margen-x);
  right: var(--dcs-margen-x);
  width: auto;
  text-align: center;
}
.contenido :deep(h1) {
  margin: 0;
  font-size: 59px; /* 44 pt */
  line-height: 1.15;
}
.contenido :deep(h1 + p) {
  margin: 8px 0 0;
  font-size: 32px; /* 24 pt */
  color: var(--dcs-azul);
}
.contenido :deep(p + p) {
  margin: 32px 0 0;
  font-size: 24px; /* 18 pt */
  color: var(--dcs-tinta);
}
</style>
