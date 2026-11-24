<!--
  DCS 01 · Portada - Plano (diapositiva 1 de la plantilla)
  Contenido: # Título (en mayúsculas por CSS) y, opcionalmente, un párrafo
  de subtítulo y otro de texto secundario.
  Frontmatter:
    fecha: 'Madrid · 19–21 noviembre 2026'   antetítulo (opcional)
-->
<script setup lang="ts">
import logoColor from '../assets/logos/logo-color.png'
import torres from '../assets/ilustraciones/torres-blancas.png'

withDefaults(defineProps<{ fecha?: string }>(), { fecha: 'Madrid · 19–21 noviembre 2026' })
</script>

<template>
  <div class="slidev-layout dcs-portada dcs-fondo-plano">
    <img :src="logoColor" alt="DrupalCamp Spain Madrid" class="logo">
    <img :src="torres" alt="" class="torres">
    <p class="fecha">{{ fecha }}</p>
    <div class="contenido">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.dcs-portada {
  position: relative;
  height: 100%;
  padding: 0;
}
/* Posiciones del PPTX (slideLayout1 y slide1), en px */
.logo {
  position: absolute;
  left: 43px;
  top: 44px;
  width: 354px;
  height: auto;
}
.torres {
  position: absolute;
  left: 726px;
  top: 80px;
  width: 487px;
  height: 576px;
  object-fit: contain;
}
.fecha {
  position: absolute;
  left: var(--dcs-margen-x);
  top: 264px;
  height: 34px;
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 28px; /* 21 pt */
  font-weight: 700;
  text-transform: uppercase;
  color: var(--dcs-azul);
}
.contenido {
  position: absolute;
  left: 56px;
  top: 344px;
  width: 642px;
}
.contenido :deep(h1) {
  margin: 0;
  font-size: 80px; /* 60 pt */
  line-height: 1;
  text-transform: uppercase;
  color: var(--dcs-navy);
}
.contenido :deep(h1 + p) {
  margin: 28px 0 0;
  font-size: 27px; /* 20 pt */
  color: var(--dcs-azul);
}
.contenido :deep(p + p) {
  margin: 8px 0 0;
  font-size: 21px; /* 16 pt */
  color: var(--dcs-tinta);
}
</style>
