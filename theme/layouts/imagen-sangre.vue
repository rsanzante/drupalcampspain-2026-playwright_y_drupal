<!--
  DCS 11 / 12 · Imagen a sangre y texto (diapositivas 11 y 12 de la plantilla)
  Imagen a todo el alto en una mitad y, en la otra, antetítulo, título y texto.
  Contenido: # Título y párrafos de texto.
  Frontmatter:
    imagen: /foto.jpg          imagen (opcional; sin ella, hueco con icono)
    lado: derecha              la imagen a la derecha (12); por defecto, izquierda (11)
    antetitulo: 'Caso práctico'   texto azul sobre el título (opcional)
-->
<script setup lang="ts">
withDefaults(defineProps<{ imagen?: string, lado?: 'izquierda' | 'derecha', antetitulo?: string }>(), { lado: 'izquierda' })
</script>

<template>
  <div class="slidev-layout dcs-imagen-sangre dcs-fondo-bruma" :class="lado">
    <div class="imagen">
      <img v-if="imagen" :src="imagen" alt="">
      <svg v-else class="hueco" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
           stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="9" cy="9" r="1.8" /><path d="M21 15l-5-5-11 11" />
      </svg>
    </div>
    <DcsLogo class="logo" />
    <div class="texto">
      <p v-if="antetitulo" class="antetitulo">{{ antetitulo }}</p>
      <slot />
    </div>
    <DcsPie :numero="false" class="pie" />
  </div>
</template>

<style scoped>
.dcs-imagen-sangre {
  position: relative;
  height: 100%;
  padding: 0;
}
/* Posiciones del PPTX (slides 11 y 12), en px */
.imagen {
  position: absolute;
  top: 0;
  width: 595px;
  height: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--dcs-cielo);
}
.izquierda .imagen { left: 0; }
.derecha .imagen { left: 685px; }
.imagen img { width: 100%; height: 100%; object-fit: cover; }
.imagen .hueco { width: 58px; height: 58px; color: var(--dcs-azul); }
.derecha .logo { left: var(--dcs-margen-x); right: auto; }
.texto {
  position: absolute;
  top: 149px;
  width: 570px;
}
.izquierda .texto { left: 653px; }
.derecha .texto { left: var(--dcs-margen-x); }
.antetitulo {
  height: 34px;
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 16px; /* 12 pt */
  font-weight: 700;
  text-transform: uppercase;
  color: var(--dcs-azul);
}
.texto :deep(h1) {
  margin: 4px 0 32px;
  font-size: 43px; /* 32 pt */
  line-height: 1.2;
}
.texto :deep(p:not(.antetitulo)) { font-size: 21px; color: var(--dcs-tinta); } /* 16 pt */
.izquierda .pie { left: 653px; }
</style>
