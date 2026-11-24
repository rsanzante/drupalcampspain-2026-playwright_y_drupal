<!--
  DCS 03 · Agenda (diapositiva 3 de la plantilla)
  Contenido: # Título (columna navy de la izquierda) y una lista numerada
  (columna derecha).
  Frontmatter:
    antetitulo: 'Agenda'   texto amarillo sobre el título (opcional)
-->
<script setup lang="ts">
withDefaults(defineProps<{ antetitulo?: string }>(), { antetitulo: 'Agenda' })
</script>

<template>
  <div class="slidev-layout dcs-agenda">
    <p class="antetitulo">{{ antetitulo }}</p>
    <DcsLogo />
    <div class="contenido">
      <slot />
    </div>
    <DcsPie :hashtag="false" />
  </div>
</template>

<style scoped>
.dcs-agenda {
  position: relative;
  height: 100%;
  padding: 0;
  background: var(--dcs-bruma) url('../assets/fondos/agenda.jpg') center / cover;
}
/* Posiciones del PPTX (slideLayout3 y slide3), en px */
.antetitulo {
  position: absolute;
  left: 69px;
  top: 77px;
  height: 34px;
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 16px; /* 12 pt */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--dcs-amarillo);
}
.contenido {
  position: absolute;
  inset: 0;
  padding: 168px 57px 0 509px;
}
.contenido :deep(h1) {
  position: absolute;
  left: var(--dcs-margen-x);
  top: 115px;
  width: 336px;
  margin: 0;
  font-size: 48px; /* 36 pt */
  line-height: 1.15;
  color: #fff;
}
.contenido :deep(ol),
.contenido :deep(ul) {
  margin: 0;
  padding-left: 40px;
  font-size: 27px; /* 20 pt */
  color: var(--dcs-navy);
}
.contenido :deep(li + li) {
  margin-top: 24px; /* 18 pt antes de cada elemento */
}
.contenido :deep(li::marker) {
  color: var(--dcs-navy);
}
</style>
