<script setup lang="ts">
import logoColor from '../assets/logos/logo-color.png'
import logoBlanco from '../assets/logos/logo-blanco.png'

withDefaults(defineProps<{ variante?: 'color' | 'blanco' }>(), { variante: 'color' })
</script>

<template>
  <img
    :src="variante === 'blanco' ? logoBlanco : logoColor"
    alt="DrupalCamp Spain Madrid"
    class="dcs-logo"
  >
</template>

<style scoped>
/* Tamaño y posición de la plantilla: 221×61 px, esquina superior derecha */
.dcs-logo {
  position: absolute;
  top: 48px;
  right: 57px;
  width: 221px;
  height: auto;
}
</style>
