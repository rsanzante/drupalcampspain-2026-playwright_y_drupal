<script setup lang="ts">
withDefaults(
  defineProps<{ oscuro?: boolean, numero?: boolean, hashtag?: boolean }>(),
  { oscuro: false, numero: true, hashtag: true },
)
</script>

<template>
  <footer class="dcs-pie" :class="{ oscuro }">
    <span class="hashtag">{{ hashtag ? '#DrupalCampSpain2026' : '' }}</span>
    <span v-if="numero" class="numero">{{ $page }}</span>
  </footer>
</template>

<style scoped>
.dcs-pie {
  position: absolute;
  left: var(--dcs-margen-x);
  right: 57px;
  top: var(--dcs-pie-top);
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px; /* 12 pt */
  line-height: 1;
  color: var(--dcs-azul);
}
.hashtag { font-weight: 700; }
.oscuro { color: var(--dcs-cielo); }
</style>
