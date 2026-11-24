<!--
  DCS 16 · Cita (diapositiva 22 de la plantilla)
  Contenido: un párrafo con la cita y, opcionalmente, otro con la fuente.
-->
<template>
  <div class="slidev-layout dcs-cita dcs-fondo-navy dcs-oscuro">
    <span class="comillas" aria-hidden="true">“</span>
    <div class="contenido">
      <slot />
    </div>
    <DcsLogo variante="blanco" class="logo" />
    <DcsPie oscuro :numero="false" />
  </div>
</template>

<style scoped>
.dcs-cita {
  position: relative;
  height: 100%;
  padding: 0;
}
/* Posiciones del PPTX (slideLayout16 y slide22), en px */
.comillas {
  position: absolute;
  left: 53px;
  top: 43px;
  font-size: 200px; /* 150 pt */
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 700;
  line-height: 1;
  color: var(--dcs-cian);
}
.contenido {
  position: absolute;
  left: var(--dcs-margen-x);
  top: 192px;
  width: 1008px;
}
.contenido :deep(p:first-child) {
  margin: 0;
  min-height: 278px;
  font-size: 48px; /* 36 pt */
  font-weight: 700;
  line-height: 1.25;
  color: #fff;
}
.contenido :deep(p + p) {
  margin: 20px 0 0;
  font-size: 24px; /* 18 pt */
  color: var(--dcs-cielo);
}
.dcs-cita .logo {
  top: 605px;
  right: 57px;
}
</style>
