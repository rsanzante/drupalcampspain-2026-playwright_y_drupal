<!--
  DCS 06 / 07 · Sección - Foto / Foto navy (diapositivas 6 y 7 de la plantilla)
  Tarjeta con logo, número y título a la izquierda; imagen a la derecha.
  Contenido: # Título.
  Frontmatter:
    seccion: '03'           número sobre el título (opcional)
    oscuro: true            tarjeta navy (07) en lugar de blanca (06)
    imagen: /captura.png    imagen de la derecha (opcional; sin ella, hueco)
-->
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ seccion?: string | number, oscuro?: boolean, imagen?: string }>()
const numero = computed(() =>
  props.seccion === undefined ? '' : String(props.seccion).padStart(2, '0'),
)
</script>

<template>
  <div class="slidev-layout dcs-seccion-tarjeta dcs-fondo-bruma">
    <div class="tarjeta" :class="{ 'dcs-oscuro': oscuro }">
      <DcsLogo :variante="oscuro ? 'blanco' : 'color'" class="logo" />
      <span v-if="numero" class="numero">{{ numero }}</span>
      <div class="contenido">
        <slot />
      </div>
    </div>
    <div class="imagen">
      <img v-if="imagen" :src="imagen" alt="">
      <svg v-else class="hueco" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
           stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="9" cy="9" r="1.8" /><path d="M21 15l-5-5-11 11" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.dcs-seccion-tarjeta {
  position: relative;
  height: 100%;
  padding: 0;
}
/* Posiciones del PPTX (slideLayout6/7), en px */
.tarjeta {
  position: absolute;
  left: 58px;
  top: 58px;
  width: 403px;
  height: 605px;
  border-radius: 12px;
  background: #fff;
}
.tarjeta.dcs-oscuro { background: var(--dcs-navy); }
.tarjeta .logo {
  top: 48px;
  left: 43px;
  right: auto;
  width: 288px;
}
.numero {
  position: absolute;
  left: 43px;
  top: 249px;
  height: 96px;
  display: flex;
  align-items: flex-end;
  font-size: 80px; /* 60 pt */
  font-weight: 700;
  line-height: 1;
  color: var(--dcs-azul);
}
.dcs-oscuro .numero { color: var(--dcs-cielo); }
.contenido {
  position: absolute;
  left: 43px;
  top: 355px;
  width: 322px;
}
.contenido :deep(h1) {
  margin: 0;
  font-size: 37px; /* 28 pt */
  line-height: 1.2;
}
.imagen {
  position: absolute;
  left: 490px;
  top: 58px;
  width: 733px;
  height: 605px;
  border-radius: 12px;
  overflow: hidden;
}
.imagen {
  background: var(--dcs-cielo);
  display: flex;
  align-items: center;
  justify-content: center;
}
.imagen .hueco {
  width: 58px;
  height: 58px;
  color: var(--dcs-azul);
}
.imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
