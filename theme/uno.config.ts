import { defineConfig } from 'unocss'

// Paleta oficial (guía de estilo, diapositiva 26 de la plantilla)
const dcs = {
  'navy': '#12285F',
  'azul': '#016AA9', // Azul Drupal
  'cian': '#009CDE',
  'amarillo': '#FFC422',
  'tinta': '#1A2238',
  'cielo': '#CCEDF9', // Azul cielo
  'bruma': '#EDF9FD', // Azul bruma
  'atardecer': '#EEEAF6', // V. atardecer
  'amanecer': '#FFEAAF', // V. amanecer
  'blanco': '#FFFFFF',
}

export default defineConfig({
  theme: {
    colors: { dcs },
    borderRadius: { dcs: '12px' },
  },
  shortcuts: {
    // Componentes de la guía de estilo
    'dcs-boton': 'inline-flex items-center rounded-full px-6 py-2 font-bold text-[20px] leading-none',
    'dcs-boton-navy': 'dcs-boton bg-dcs-navy text-white',
    'dcs-boton-amarillo': 'dcs-boton bg-dcs-amarillo text-dcs-navy',
    'dcs-etiqueta': 'dcs-boton bg-dcs-amanecer text-dcs-navy uppercase tracking-wide',
    'dcs-antetitulo': 'text-[16px] font-bold uppercase tracking-wide text-dcs-azul',
    // Tarjetas (esquinas ~12px como en la plantilla)
    'dcs-tarjeta': 'rounded-dcs p-6',
    'dcs-tarjeta-cielo': 'dcs-tarjeta bg-dcs-cielo',
    'dcs-tarjeta-atardecer': 'dcs-tarjeta bg-dcs-atardecer',
    'dcs-tarjeta-amanecer': 'dcs-tarjeta bg-dcs-amanecer',
    'dcs-tarjeta-blanca': 'dcs-tarjeta bg-white',
    'dcs-tarjeta-borde': 'dcs-tarjeta border-2 border-dcs-tinta',
  },
})
