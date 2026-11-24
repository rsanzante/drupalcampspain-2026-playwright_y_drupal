<!--
  DCS 05 · Sección - Gradiente cielo (diapositiva 5 de la plantilla)
  Contenido: # Título y, opcionalmente, un párrafo de subtítulo.
  Frontmatter:
    seccion: '02'   número grande sobre el título (opcional)
-->
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ seccion?: string | number }>()
const numero = computed(() =>
  props.seccion === undefined ? '' : String(props.seccion).padStart(2, '0'),
)
</script>

<template>
  <div class="slidev-layout dcs-seccion-cielo dcs-fondo-cielo">
    <span v-if="numero" class="numero">{{ numero }}</span>
    <div class="contenido">
      <slot />
    </div>
    <DcsLogo class="logo" />
  </div>
</template>

<style scoped>
.dcs-seccion-cielo {
  position: relative;
  height: 100%;
  padding: 0;
}
/* Posiciones del PPTX (slideLayout5 y slide5), en px */
.numero {
  position: absolute;
  left: var(--dcs-margen-x);
  top: 322px;
  height: 106px;
  display: flex;
  align-items: flex-end;
  font-size: 80px; /* 60 pt */
  font-weight: 700;
  line-height: 1;
  color: var(--dcs-azul);
}
.contenido {
  position: absolute;
  left: var(--dcs-margen-x);
  top: 432px;
  width: 912px;
}
.contenido :deep(h1) {
  margin: 0;
  font-size: 59px; /* 44 pt */
  line-height: 1.15;
  color: var(--dcs-navy);
}
.contenido :deep(h1 + p) {
  position: absolute;
  top: 130px; /* y = 562 */
  width: 816px;
  margin: 0;
  font-size: 24px; /* 18 pt */
  color: var(--dcs-tinta);
}
.dcs-seccion-cielo .logo {
  top: 605px;
  right: 57px;
}
</style>
