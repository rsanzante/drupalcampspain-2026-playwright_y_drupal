<!--
  DCS 17 / 18 · Ponente / Ponente - Cielo (diapositivas 23 y 24 de la plantilla)
  Contenido: la bio breve (párrafos).
  Frontmatter:
    nombre:   'Nombre Apellido'
    cargo:    'Frontend developer'      cargo, sin la empresa
    etiqueta: 'Frontend'                píldora amarilla (opcional)
    foto:     '/ponente.jpg'            ruta en public/ (opcional; sin ella, hueco)
    empresa:  'Empresa'                 texto alternativo del logo; sin logo, se añade tras el cargo («Cargo · Empresa»)
    logo:     '/empresa.png'            logo bajo la foto, en tarjeta blanca (opcional)
    fondo:    'cielo'                   variante clara (18); por defecto, plano navy (17)
-->
<script setup lang="ts">
defineProps<{
  nombre?: string
  cargo?: string
  etiqueta?: string
  foto?: string
  logo?: string
  empresa?: string
  fondo?: 'navy' | 'cielo'
}>()
</script>

<template>
  <div class="slidev-layout dcs-ponente" :class="fondo === 'cielo' ? 'cielo dcs-fondo-cielo' : 'dcs-fondo-plano-navy'">
    <div class="foto" :class="{ vacia: !foto }">
      <img v-if="foto" :src="foto" :alt="nombre">
      <svg v-else class="hueco" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
           stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="9" cy="9" r="1.8" /><path d="M21 15l-5-5-11 11" />
      </svg>
    </div>
    <div v-if="logo" class="logo-empresa">
      <img :src="logo" :alt="empresa">
    </div>

    <p class="antetitulo">Ponente</p>
    <h1 class="nombre">{{ nombre }}</h1>
    <p class="cargo">
      {{ cargo }}<template v-if="empresa && !logo">
        <span v-if="cargo"> · </span>{{ empresa }}
      </template>
    </p>
    <span v-if="etiqueta" class="etiqueta">{{ etiqueta }}</span>
    <div class="bio">
      <slot />
    </div>

    <DcsLogo :variante="fondo === 'cielo' ? 'color' : 'blanco'" class="logo-dcs" />
    <DcsPie :numero="false" class="pie" />
  </div>
</template>

<style scoped>
.dcs-ponente {
  position: relative;
  height: 100%;
  padding: 0;
}
/*
 * La plantilla reserva un hueco de 422×422 px en (58, 120) para la foto.
 * Aquí la foto es un 20 % más pequeña (338 px), redonda y con marco blanco,
 * y lleva debajo el logo de la empresa. Ambos se centran en el eje del
 * hueco original (x = 269 px).
 */
.foto {
  position: absolute;
  left: 100px;
  top: 74px;
  width: 338px;
  height: 338px;
  box-sizing: border-box;
  border-radius: 50%;
  border: 8px solid #fff;
  background: var(--dcs-cielo);
  overflow: hidden;
}
.foto.vacia {
  display: flex;
  align-items: center;
  justify-content: center;
}
.foto .hueco { width: 58px; height: 58px; color: var(--dcs-azul); }
.foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.logo-empresa {
  position: absolute;
  left: 139px;
  top: 470px;
  width: 270px;
  height: 80px;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 12px;
  background: #fff;
}
.logo-empresa img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Columna derecha: posiciones del PPTX (slide23), en px */
.antetitulo,
.nombre,
.cargo,
.etiqueta,
.bio {
  position: absolute;
  left: 538px;
  margin: 0;
}
.antetitulo {
  top: 120px;
  height: 34px;
  display: flex;
  align-items: center;
  font-size: 16px; /* 12 pt */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--dcs-amarillo);
}
.slidev-layout .nombre {
  top: 163px;
  width: 682px;
  font-size: 53px; /* 40 pt */
  line-height: 1.2;
  color: #fff;
}
.cargo {
  top: 264px;
  width: 682px;
  font-size: 27px; /* 20 pt */
  color: var(--dcs-cielo);
}
.etiqueta {
  top: 331px;
  width: 211px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--dcs-amanecer);
  font-size: 16px; /* 12 pt */
  font-weight: 700;
  text-transform: uppercase;
  color: var(--dcs-navy);
}
.bio {
  top: 394px;
  width: 682px;
  font-size: 21px; /* 16 pt */
  color: #fff;
}
.bio :deep(p) {
  margin: 0 0 12px;
}
.dcs-ponente .logo-dcs {
  top: 605px;
}
.pie :deep(.hashtag) {
  color: var(--dcs-cielo);
}
/* Variante cielo (slideLayout18): textos oscuros */
.cielo .antetitulo { color: var(--dcs-azul); }
.slidev-layout.cielo .nombre { color: var(--dcs-navy); }
.cielo .cargo { color: var(--dcs-azul); }
.cielo .bio { color: var(--dcs-tinta); }
.cielo .pie :deep(.hashtag) { color: var(--dcs-azul); }
</style>
