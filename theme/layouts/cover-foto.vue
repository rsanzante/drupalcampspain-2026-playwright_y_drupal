<!--
  DCS 02 · Portada - Foto (diapositiva 2 de la plantilla)
  Tarjeta blanca con logo, fecha, título y autor sobre el plano de Madrid.
  Contenido: # Título y un párrafo con el autor.
  Frontmatter:
    fecha: 'Madrid · 19–21 nov 2026'   antetítulo (opcional)
    imagen: /foto.jpg                  fondo propio en lugar del plano (opcional)
-->
<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{ fecha?: string, imagen?: string }>(), { fecha: 'Madrid · 19–21 nov 2026' })
const fondo = computed(() => (props.imagen ? { backgroundImage: `url(${props.imagen})` } : {}))
</script>

<template>
  <div class="slidev-layout dcs-portada-foto" :style="fondo">
    <div class="tarjeta">
      <DcsLogo class="logo" />
      <p class="fecha">{{ fecha }}</p>
      <div class="contenido">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dcs-portada-foto {
  position: relative;
  height: 100%;
  padding: 0;
  background: var(--dcs-bruma) url('../assets/fondos/plano-foto.jpg') center / cover;
}
/* Posiciones del PPTX (slideLayout2 y slide2), en px */
.tarjeta {
  position: absolute;
  left: 58px;
  top: 58px;
  width: 509px;
  height: 605px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 24px rgb(18 40 95 / 0.12);
}
.tarjeta .logo {
  top: 48px;
  left: 48px;
  right: auto;
  width: 315px;
}
.fecha {
  position: absolute;
  left: 48px;
  top: 190px;
  margin: 0;
  font-size: 16px; /* 12 pt */
  font-weight: 700;
  text-transform: uppercase;
  color: var(--dcs-azul);
}
.contenido {
  position: absolute;
  left: 48px;
  top: 240px;
  width: 413px;
  height: 320px;
}
.contenido :deep(h1) {
  margin: 0;
  font-size: 43px; /* 32 pt */
  line-height: 1.2;
}
.contenido :deep(h1 + p) {
  position: absolute;
  top: 220px; /* y = 518 */
  margin: 0;
  font-size: 21px; /* 16 pt */
  color: var(--dcs-tinta);
}
</style>
