<!--
  Icono de trazo (24×24), en el estilo de la plantilla. Los de las diapositivas 15–20
  son de Lucide (ISC), como en el PPTX.
  Uso: <DcsIcono nombre="paleta" />
  Nombres: paleta, fichero, git, codigo, navegador, capas, etiqueta, diana, llaves, libro,
  prohibido, piezas, chispa, personas, check, cruz, imagen, buscar, lapiz, cohete,
  graduado, mano, accesible, velocidad, escudo, micro, llave, rama
-->
<script setup lang="ts">
defineProps<{ nombre: string }>()
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="dcs-icono">
    <template v-if="nombre === 'paleta'">
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-.9-.7-1.3-.7-2.1 0-.9.7-1.5 1.6-1.5H17a4 4 0 0 0 4-4C21 6.9 17 3 12 3z" />
      <circle cx="7.5" cy="11" r="1" /><circle cx="10" cy="7" r="1" /><circle cx="14.5" cy="7" r="1" />
    </template>
    <template v-else-if="nombre === 'fichero'">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </template>
    <template v-else-if="nombre === 'git'">
      <circle cx="6" cy="6" r="2.2" /><circle cx="6" cy="18" r="2.2" /><circle cx="18" cy="8" r="2.2" />
      <path d="M6 8.2v7.6M18 10.2c0 4-6 3-11 6" />
    </template>
    <template v-else-if="nombre === 'codigo'">
      <path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" />
    </template>
    <template v-else-if="nombre === 'navegador'">
      <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M6.5 6.5h.01M9 6.5h.01" />
    </template>
    <template v-else-if="nombre === 'capas'">
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </template>
    <template v-else-if="nombre === 'etiqueta'">
      <path d="M3 12V4h8l10 10-8 8z" /><circle cx="7.5" cy="8" r="1.2" />
    </template>
    <template v-else-if="nombre === 'diana'">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" />
    </template>
    <template v-else-if="nombre === 'llaves'">
      <path d="M8 4c-2 0-2.5 1-2.5 3v2.5c0 1.2-.8 2.5-2.5 2.5 1.7 0 2.5 1.3 2.5 2.5V17c0 2 .5 3 2.5 3" />
      <path d="M16 4c2 0 2.5 1 2.5 3v2.5c0 1.2.8 2.5 2.5 2.5-1.7 0-2.5 1.3-2.5 2.5V17c0 2-.5 3-2.5 3" />
    </template>
    <template v-else-if="nombre === 'libro'">
      <path d="M4 5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2z" /><path d="M4 20a2 2 0 0 0 2 2h13v-4" />
    </template>
    <template v-else-if="nombre === 'prohibido'">
      <circle cx="12" cy="12" r="9" /><path d="M5.6 5.6l12.8 12.8" />
    </template>
    <template v-else-if="nombre === 'piezas'">
      <rect x="3" y="3" width="8" height="8" rx="1.5" /><rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" /><rect x="13" y="13" width="8" height="8" rx="1.5" />
    </template>
    <template v-else-if="nombre === 'chispa'">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /><path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" />
    </template>
    <template v-else-if="nombre === 'personas'">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </template>
    <template v-else-if="nombre === 'check'">
      <path d="M5 12.5l4.5 4.5L19 7" />
    </template>
    <template v-else-if="nombre === 'cruz'">
      <path d="M6 6l12 12M18 6L6 18" />
    </template>
    <template v-else-if="nombre === 'imagen'">
      <rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="9" cy="9" r="1.8" /><path d="M21 15l-5-5-11 11" />
    </template>
    <template v-else-if="nombre === 'buscar'">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
    </template>
    <template v-else-if="nombre === 'lapiz'">
      <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" /><path d="m8 6 2-2" /><path d="m18 16 2-2" /><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" /><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" />
    </template>
    <template v-else-if="nombre === 'cohete'">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </template>
    <template v-else-if="nombre === 'graduado'">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </template>
    <template v-else-if="nombre === 'mano'">
      <path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" />
    </template>
    <template v-else-if="nombre === 'accesible'">
      <circle cx="16" cy="4" r="1" /><path d="m18 19 1-7-6 1" /><path d="m5 8 3-3 5.5 3-2.36 3.5" /><path d="M4.24 14.5a5 5 0 0 0 6.88 6" /><path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </template>
    <template v-else-if="nombre === 'velocidad'">
      <path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </template>
    <template v-else-if="nombre === 'escudo'">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" />
    </template>
    <template v-else-if="nombre === 'micro'">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><path d="M12 19v3" />
    </template>
    <template v-else-if="nombre === 'llave'">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </template>
    <template v-else-if="nombre === 'rama'">
      <path d="M6 3v12" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" />
    </template>
    <template v-else>
      <circle cx="12" cy="12" r="9" />
    </template>
  </svg>
</template>

<style scoped>
.dcs-icono {
  width: 1em;
  height: 1em;
  display: inline-block;
  flex-shrink: 0;
}
</style>
