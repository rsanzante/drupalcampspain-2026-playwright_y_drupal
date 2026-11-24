<!--
  Gracias (propio, no está en la plantilla)
  Contenido: # Título, centrado y a gran tamaño, sobre el fondo
  "Sol sobre navy" de las secciones.
-->
<template>
  <div class="slidev-layout dcs-gracias dcs-fondo-sol-navy">
    <div class="contenido">
      <slot />
    </div>
    <DcsLogo variante="blanco" class="logo" />
  </div>
</template>

<style scoped>
.dcs-gracias {
  position: relative;
  height: 100%;
  padding: 0;
}
.contenido {
  position: absolute;
  inset: 0 var(--dcs-margen-x) 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contenido :deep(h1) {
  margin: 0;
  font-size: 200px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: #fff;
  text-align: center;
}
.dcs-gracias .logo {
  top: 612px;
  right: 56px;
}
</style>
