<!--
  DCS 08 · Título y contenido
  Frontmatter:
    seccion: '01'   número de sección junto al título (opcional)
-->
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ seccion?: string | number }>()
const numero = computed(() =>
  props.seccion === undefined ? '' : String(props.seccion).padStart(2, '0'),
)
</script>

<template>
  <div class="slidev-layout dcs-default dcs-fondo-bruma" :class="{ 'con-seccion': numero }">
    <span v-if="numero" class="dcs-seccion">{{ numero }}</span>
    <DcsLogo />
    <div class="dcs-contenido">
      <slot />
    </div>
    <DcsPie />
  </div>
</template>

<style scoped>
.dcs-default {
  position: relative;
  height: 100%;
  padding: 0;
}
.dcs-seccion {
  position: absolute;
  top: var(--dcs-cabecera-top);
  left: var(--dcs-margen-x);
  height: var(--dcs-cabecera-alto);
  display: flex;
  align-items: center;
  font-size: 53px; /* 40 pt */
  font-weight: 700;
  color: var(--dcs-azul);
  line-height: 1;
}
.dcs-contenido {
  position: absolute;
  top: var(--dcs-contenido-top);
  left: var(--dcs-margen-x);
  right: 57px;
  bottom: 82px;
}
/* El primer h1 se coloca en la cabecera, alineado con número y logo */
.dcs-contenido :deep(h1) {
  position: absolute;
  top: calc(var(--dcs-cabecera-top) - var(--dcs-contenido-top));
  left: 0;
  height: var(--dcs-cabecera-alto);
  max-width: 806px;
  margin: 0;
  display: flex;
  align-items: center;
}
.con-seccion .dcs-contenido :deep(h1) {
  left: calc(163px - var(--dcs-margen-x));
}
</style>
