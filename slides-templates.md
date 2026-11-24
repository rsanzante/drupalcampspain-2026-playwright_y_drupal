---
layout: cover
---

# Sesión de bienvenida

Nombre Apellido · Empresa

<!--
PPTX 01 · PORTADA - PLANO (layout: cover)
- Portada por defecto: plano de Madrid con el logo principal.
- El título sale en mayúsculas automáticamente. Mejor si cabe en dos líneas.
- El primer párrafo es el subtítulo (azul); un segundo párrafo saldría más
  pequeño, en tinta.
- `fecha:` en el frontmatter cambia el antetítulo (por defecto
  "Madrid · 19–21 noviembre 2026").
-->

---
layout: cover-foto
---

# Título de la presentación

Autor / Author

<!--
PPTX 02 · PORTADA - FOTO (layout: cover-foto)
- Tarjeta blanca con logo, fecha, título y autor.
- `imagen: /sede.jpg` pone una foto a sangre de fondo (por ejemplo, la sede).
  Sin foto se ve el plano de Madrid.
- `fecha:` cambia el antetítulo, como en la portada plano.
-->

---
layout: ponente
nombre: Nombre Apellido
cargo: Frontend developer
etiqueta: Frontend
# foto: /ponente.jpg
logo: /metadrop.svg
empresa: Metadrop
---

Bio breve: experiencia con Drupal, temas en los que trabajas y por qué te interesa esta charla.

<!--
PPTX 23 · PONENTE (layout: ponente)
- Copia tu foto a public/ y descomenta `foto:`. Sin foto sale un hueco
  azul claro. Mejor una foto cuadrada: se recorta a 422×422.
- `cargo:` sin la empresa. La línea queda «Cargo · Empresa»: con `logo:`
  (en public/) sale el logo (en blanco sobre navy, en su color sobre cielo),
  y si no, el texto de
  `empresa:`. El logo se mueve con el texto del cargo.
- `etiqueta:` es la píldora amarilla (track, nivel…). Opcional.
- La bio es el contenido de la diapositiva. Dos o tres líneas.
- Variante clara: `fondo: cielo` (siguiente diapositiva).
-->

---
layout: ponente
fondo: cielo
nombre: Nombre Apellido
cargo: Frontend developer
etiqueta: Frontend
logo: /metadrop.svg
empresa: Metadrop
---

Bio breve: experiencia con Drupal, temas en los que trabajas y por qué te interesa esta charla.

<!--
PPTX 24 · PONENTE - CIELO (layout: ponente, fondo: cielo)
- Igual que la anterior, sobre el degradado cielo y con textos oscuros.
- Úsala si la de navy choca con la diapositiva anterior o siguiente.
-->

---
layout: agenda
---

# De qué vamos a hablar

1. Contexto y punto de partida
2. Arquitectura de componentes
3. Caso práctico
4. Lecciones aprendidas
5. Preguntas

<!--
PPTX 03 · AGENDA (layout: agenda)
- El título va en la columna navy; la lista numerada, a la derecha.
- `antetitulo:` en el frontmatter cambia el texto amarillo ("Agenda").
- Hasta seis o siete puntos caben con holgura.
-->

---
layout: section
seccion: '01'
---

# Cuéntanos tu sesión

Convocatorias, cambios de bloque o de tema

<!--
PPTX 04 · SECCIÓN - SOL SOBRE NAVY (layout: section)
- Para convocatorias, cambios de bloque o de tema.
- `seccion:` es el número grande. Pon el mismo número en las diapositivas
  de contenido de esa sección para que aparezca junto al título.
- El párrafo bajo el título es el subtítulo. Opcional.
-->

---
layout: section-cielo
seccion: '02'
---

# Despierta la DrupalCamp

Anuncios y aperturas

<!--
PPTX 05 · SECCIÓN - GRADIENTE CIELO (layout: section-cielo)
- Para anuncios y aperturas. Mismo contenido que `section`, con texto navy.
- Alterna `section` y `section-cielo` para que las secciones no se vean
  todas iguales.
-->

---
layout: section-tarjeta
seccion: '03'
---

# Caso práctico

<!--
PPTX 06 · SECCIÓN - FOTO (layout: section-tarjeta)
- Separador con foto: `imagen: /foto.jpg` la pone en el hueco de la derecha.
  Sin imagen se ve un hueco con un icono.
- Solo lleva título; el número sale encima.
-->

---
layout: section-tarjeta
seccion: '04'
oscuro: true
---

# Lecciones aprendidas

<!--
PPTX 07 · SECCIÓN - FOTO NAVY (layout: section-tarjeta, oscuro: true)
- Como la anterior, con la tarjeta navy y el texto blanco.
-->

---
seccion: '01'
---

# Título y contenido

- Texto de cuerpo a 18 pt en Inter, en Tinta sobre fondo blanco
- Máximo unos 70 caracteres por línea
- El número de la cabecera indica la sección en la que estás
- Cifras siempre tabulares: 60 € · 100 € · 65 €

<!--
PPTX 08 · TÍTULO Y CONTENIDO (layout por defecto)
- El primer `#` se coloca en la cabecera, junto al número de sección.
- Sin `seccion:` en el frontmatter, el título se alinea a la izquierda.
- Si no indicas layout, se usa `default`. Todas las diapositivas de
  contenido que siguen usan este layout con una clase de `patrones.css`.
- Código en línea con comillas invertidas: `drush cr`.
- Clases de texto (escala del PPTX, en `theme/styles/patrones.css`), para
  usar en cualquier diapositiva: texto-pequeno (16 pt), texto-grande y
  subtitulo (20 pt, navy y azul), titulo-pequeno (18 pt), titulo-bloque
  (20 pt), titulo-tarjeta (22 pt), mensaje (24 pt), cifra (28 pt, azul) y
  frase (32 pt). El cuerpo (18 pt) no necesita clase. Úsalas en lugar de
  tamaños sueltos como text-[22px].
-->

---
seccion: '01'
---

# Antes y después

<div class="columnas">
<div>
<h3 class="subtitulo">Antes</h3>
<ul class="texto-pequeno"><li>Plantillas Twig duplicadas</li><li>Estilos dispersos por el tema</li><li>Cambios lentos y arriesgados</li></ul>
</div>
<div>
<h3 class="subtitulo">Después</h3>
<ul class="texto-pequeno"><li>Componentes SDC reutilizables</li><li>Tokens de diseño centralizados</li><li>Iteraciones rápidas y seguras</li></ul>
</div>
</div>

<!--
PPTX 09 · ANTES Y DESPUÉS (clase .columnas)
- Dos columnas con subtítulo azul y lista. Sirve para cualquier comparación.
- Dentro de un `<div>` HTML las listas se escriben en HTML (`<ul>` y `<li>`).
- Variante con tarjetas: envuelve cada columna en
  `<div class="dcs-tarjeta-blanca">` / `dcs-tarjeta-cielo`.
-->

---
seccion: '02'
---

# Texto e imagen

<div class="texto-imagen">
<div class="texto">
<p>Texto de ejemplo a 16 pt: explica la idea en dos o tres líneas, sin pasar de unos 70 caracteres por línea.</p>
</div>
<div class="hueco-imagen"><DcsIcono nombre="imagen" /><span>Inserta una imagen en el hueco de la derecha</span></div>
</div>

<!--
PPTX 10 · TEXTO E IMAGEN (clase .texto-imagen)
- Texto a la izquierda e imagen a la derecha, recortada con esquinas
  redondeadas.
- Sustituye el `.hueco-imagen` por
  `<img src="/captura.png" class="rounded-dcs object-cover w-full h-full">`.
- `<p class="frase">` dentro de `.texto` da una frase grande antes del párrafo.
-->

---
layout: imagen-sangre
antetitulo: Caso práctico
---

# Título junto a una imagen a sangre

Texto de ejemplo a 16 pt: explica la idea en dos o tres líneas, sin pasar de unos 70 caracteres por línea.

<!--
PPTX 11 · IMAGEN A SANGRE Y TEXTO (layout: imagen-sangre)
- Imagen a todo el alto en la mitad izquierda: `imagen: /foto.jpg`.
  Sin imagen se ve un hueco con un icono.
- `antetitulo:` es el texto azul sobre el título. Opcional.
-->

---
layout: imagen-sangre
lado: derecha
antetitulo: Caso práctico
---

# Título junto a una imagen a sangre

Texto de ejemplo a 16 pt: explica la idea en dos o tres líneas, sin pasar de unos 70 caracteres por línea.

<!--
PPTX 12 · IMAGEN A SANGRE A LA DERECHA (layout: imagen-sangre, lado: derecha)
- Como la anterior, con la imagen a la derecha.
-->

---
seccion: '02'
---

# Tres imágenes con pie

<div class="tres-imagenes">
<div><div class="hueco-imagen"><DcsIcono nombre="imagen" /></div><p class="texto-pequeno">Pie de imagen breve que explica lo que se ve en la foto.</p></div>
<div><div class="hueco-imagen"><DcsIcono nombre="imagen" /></div><p class="texto-pequeno">Pie de imagen breve que explica lo que se ve en la foto.</p></div>
<div><div class="hueco-imagen"><DcsIcono nombre="imagen" /></div><p class="texto-pequeno">Pie de imagen breve que explica lo que se ve en la foto.</p></div>
</div>

<!--
PPTX 13 · TRES IMÁGENES CON PIE (clase .tres-imagenes)
- Tres capturas o fotos con un pie corto cada una: pasos de un proceso,
  antes/durante/después, tres ejemplos.
- Sustituye cada `.hueco-imagen` por
  `<img src="/foto.jpg" class="rounded-dcs object-cover w-full h-[280px]">`.
-->

---
seccion: '02'
---

# Texto y galería

<div class="galeria">
<p class="texto">Texto de ejemplo a 16 pt: explica la idea en dos o tres líneas, sin pasar de unos 70 caracteres por línea. Debajo, una fila de cuatro imágenes.</p>
<div class="fotos">
<div class="hueco-imagen"><DcsIcono nombre="imagen" /></div>
<div class="hueco-imagen"><DcsIcono nombre="imagen" /></div>
<div class="hueco-imagen"><DcsIcono nombre="imagen" /></div>
<div class="hueco-imagen"><DcsIcono nombre="imagen" /></div>
</div>
</div>

<!--
PPTX 14 · TEXTO Y GALERÍA (clase .galeria)
- Un párrafo arriba y una fila de cuatro imágenes debajo.
- Sustituye cada `.hueco-imagen` por `<img src="/foto.jpg" alt="">`: se
  recorta sola con esquinas redondeadas.
-->

---
seccion: '03'
---

# Proceso en cuatro pasos

<div class="proceso">
  <div class="paso"><span class="circulo"><DcsIcono nombre="buscar" /></span><p class="titulo-pequeno">Analizar</p><div class="numero"><span>1</span></div><p class="texto-pequeno">Descripción breve del paso en dos o tres líneas.</p></div>
  <div class="paso"><span class="circulo atardecer"><DcsIcono nombre="lapiz" /></span><p class="titulo-pequeno">Diseñar</p><div class="numero"><span>2</span></div><p class="texto-pequeno">Descripción breve del paso en dos o tres líneas.</p></div>
  <div class="paso"><span class="circulo amanecer"><DcsIcono nombre="codigo" /></span><p class="titulo-pequeno">Construir</p><div class="numero"><span>3</span></div><p class="texto-pequeno">Descripción breve del paso en dos o tres líneas.</p></div>
  <div class="paso"><span class="circulo blanco"><DcsIcono nombre="cohete" /></span><p class="titulo-pequeno">Lanzar</p><div class="numero"><span>4</span></div><p class="texto-pequeno">Descripción breve del paso en dos o tres líneas.</p></div>
</div>

<!--
PPTX 15 · PROCESO EN CUATRO PASOS (clase .proceso)
- Icono, nombre, número sobre una línea y descripción.
- Otro número de pasos: `<div class="proceso" style="--pasos:3">`.
- `<div class="numero contrib">` pinta el número en amarillo para destacar un
  paso.
- Fondos del círculo: `circulo` (cielo), `atardecer`, `amanecer`, `blanco`,
  `bruma`. Iconos disponibles en `theme/components/DcsIcono.vue`.
-->

---
seccion: '03'
---

# Cuatro ideas clave

<div class="tarjetas-icono">
  <div class="dcs-tarjeta-cielo"><span class="circulo"><DcsIcono nombre="personas" /></span><h3 class="titulo-bloque">Comunidad</h3><p class="texto-pequeno">Texto breve que desarrolla la idea en pocas líneas.</p></div>
  <div class="dcs-tarjeta-atardecer"><span class="circulo"><DcsIcono nombre="graduado" /></span><h3 class="titulo-bloque">Aprendizaje</h3><p class="texto-pequeno">Texto breve que desarrolla la idea en pocas líneas.</p></div>
  <div class="dcs-tarjeta-amanecer"><span class="circulo"><DcsIcono nombre="mano" /></span><h3 class="titulo-bloque">Networking</h3><p class="texto-pequeno">Texto breve que desarrolla la idea en pocas líneas.</p></div>
  <div class="dcs-tarjeta-blanca"><span class="circulo"><DcsIcono nombre="chispa" /></span><h3 class="titulo-bloque">Innovación</h3><p class="texto-pequeno">Texto breve que desarrolla la idea en pocas líneas.</p></div>
</div>

<!--
PPTX 16 · CUATRO IDEAS CLAVE (clase .tarjetas-icono)
- Tarjetas con icono, título y texto breve.
- Otro número de columnas: `<div class="tarjetas-icono" style="--cols:3">`.
- Como en el PPTX, cada tarjeta de un color: cielo, atardecer, amanecer y
  blanca. El círculo del icono es bruma.
-->

---
seccion: '03'
---

# Icono, título y texto

<div class="icono-texto">
  <div><span class="circulo"><DcsIcono nombre="capas" /></span><div><h3 class="titulo-bloque">Arquitectura</h3><p class="texto-pequeno">Texto de ejemplo a 16 pt: explica la idea en dos o tres líneas, sin pasar de unos 70 caracteres por línea.</p></div></div>
  <div><span class="circulo atardecer"><DcsIcono nombre="accesible" /></span><div><h3 class="titulo-bloque">Accesibilidad</h3><p class="texto-pequeno">Texto de ejemplo a 16 pt: explica la idea en dos o tres líneas, sin pasar de unos 70 caracteres por línea.</p></div></div>
  <div><span class="circulo amanecer"><DcsIcono nombre="velocidad" /></span><div><h3 class="titulo-bloque">Rendimiento</h3><p class="texto-pequeno">Texto de ejemplo a 16 pt: explica la idea en dos o tres líneas, sin pasar de unos 70 caracteres por línea.</p></div></div>
  <div><span class="circulo blanco"><DcsIcono nombre="escudo" /></span><div><h3 class="titulo-bloque">Seguridad</h3><p class="texto-pequeno">Texto de ejemplo a 16 pt: explica la idea en dos o tres líneas, sin pasar de unos 70 caracteres por línea.</p></div></div>
</div>

<!--
PPTX 17 · ICONO, TÍTULO Y TEXTO (clase .icono-texto)
- Cuadrícula 2×2 sin tarjetas: icono a la izquierda, título y texto a la
  derecha. Círculos cielo, atardecer, amanecer y blanco; icono navy. Para cuatro conceptos con algo más de texto que las ideas clave.
-->

---
seccion: '03'
---

# Tres tarjetas de color

<div class="tarjetas-color">
  <div class="dcs-tarjeta-cielo"><h3 class="titulo-tarjeta">Título de la tarjeta</h3><p class="texto-pequeno">Texto de ejemplo a 16 pt: explica la idea en dos o tres líneas, sin pasar de unos 70 caracteres por línea.</p></div>
  <div class="dcs-tarjeta-atardecer"><h3 class="titulo-tarjeta">Título de la tarjeta</h3><p class="texto-pequeno">Texto de ejemplo a 16 pt: explica la idea en dos o tres líneas, sin pasar de unos 70 caracteres por línea.</p></div>
  <div class="dcs-tarjeta-amanecer"><h3 class="titulo-tarjeta">Título de la tarjeta</h3><p class="texto-pequeno">Texto de ejemplo a 16 pt: explica la idea en dos o tres líneas, sin pasar de unos 70 caracteres por línea.</p></div>
</div>

<!--
PPTX 18 · TRES TARJETAS DE COLOR (clase .tarjetas-color)
- Texto navy sobre amarillo y azul cielo; blanco sobre azul Drupal y navy.
  Nunca texto amarillo sobre azul Drupal (no pasa contraste).
- Otro número de tarjetas: `style="--cols:2"` o `--cols:4`.
-->

---
seccion: '03'
---

# Tres mensajes

<div class="mensajes">
  <div><p class="cifra">01</p><p class="mensaje">Un mensaje corto y contundente.</p></div>
  <div><p class="cifra">02</p><p class="mensaje">Un mensaje corto y contundente.</p></div>
  <div><p class="cifra">03</p><p class="mensaje">Un mensaje corto y contundente.</p></div>
</div>

<!--
PPTX 19 · TRES MENSAJES (clase .mensajes)
- Recuadros con borde navy, número azul y una frase en negrita.
- Para resúmenes y conclusiones: una idea por recuadro.
- `class="mensajes compactos"` reduce el alto si hay más texto debajo.
-->

---
seccion: '03'
---

# Tres listas

<div class="listas-icono">
<div>
<div class="cabecera"><span class="circulo"><DcsIcono nombre="micro" /></span><h3 class="titulo-tarjeta">Charlas</h3></div>
<ul class="texto-pequeno"><li>Primer punto de la lista</li><li>Segundo punto de la lista</li><li>Tercer punto de la lista</li><li>Cuarto punto de la lista</li></ul>
</div>
<div>
<div class="cabecera"><span class="circulo atardecer"><DcsIcono nombre="llave" /></span><h3 class="titulo-tarjeta">Workshops</h3></div>
<ul class="texto-pequeno"><li>Primer punto de la lista</li><li>Segundo punto de la lista</li><li>Tercer punto de la lista</li><li>Cuarto punto de la lista</li></ul>
</div>
<div>
<div class="cabecera"><span class="circulo amanecer"><DcsIcono nombre="rama" /></span><h3 class="titulo-tarjeta">Sprints</h3></div>
<ul class="texto-pequeno"><li>Primer punto de la lista</li><li>Segundo punto de la lista</li><li>Tercer punto de la lista</li><li>Cuarto punto de la lista</li></ul>
</div>
</div>

<!--
PPTX 20 · TRES LISTAS (clase .listas-icono)
- Tres columnas con cabecera (icono + título) y lista.
- Círculos cielo, atardecer y amanecer, con el icono en azul Drupal.
- `style="--cols:2"` para dos columnas.
-->

---
seccion: '03'
---

# Frase destacada

<div class="frase-destacada">
  <p class="frase">Una idea importante merece una diapositiva propia y pocas palabras.</p>
  <p class="texto-pequeno">— Fuente o contexto de la frase</p>
</div>

<!--
PPTX 21 · FRASE DESTACADA (clase .frase-destacada)
- Una sola idea en una tarjeta atardecer, con la fuente debajo.
- Sin tarjeta: `<p class="frase">` da texto grande navy en negrita.
- Variante Markdown: un `>` sale también en una tarjeta atardecer.
-->

---
layout: cita
---

Come for the software, stay for the community

— Lema de la comunidad Drupal

<!--
PPTX 22 · CITA (layout: cita)
- Fondo navy y comillas cian. El primer párrafo es la cita; el segundo, la
  fuente.
- Úsala para una cita o una pregunta al público.
-->

---
layout: valora
---

# ¿Qué te ha parecido?

What did you think?

Valora la sesión en la web de la DrupalCamp.

<!--
PPTX 25 · VALORA LA SESIÓN (layout: valora)
- Cierre de la charla. `# Título`, subtítulo (primer párrafo) y texto.
- La plantilla deja un hueco para el QR de la encuesta de tu sesión:
  añádelo como imagen en el contenido.
- `antetitulo:` cambia el texto azul ("Feedback").
-->

---
seccion: '03'
---

# Bloque de código

```php
/**
 * Implements hook_form_alter().
 */
function mimodulo_form_alter(array &$form, FormStateInterface $form_state, $form_id) {
  if ($form_id === 'user_login_form') {
    $form['actions']['submit']['#value'] = t('Entrar');
  }
}
```

- Una línea de explicación bajo el código

<!--
EXTRA SLIDEV · CÓDIGO (no está en el PPTX)
- Resaltado con Shiki: indica el lenguaje tras las tres comillas.
- A 20 px caben unas 12 líneas y 80 caracteres por línea; en media
  columna, unos 40.
- `{2,4}` tras el lenguaje resalta líneas: ```php {2,4}
-->

---
seccion: '03'
---

# Código y texto

<div class="grid grid-cols-2 gap-6">
  <div>

```yaml
# mimodulo.services.yml
services:
  mimodulo.saludo:
    class: Drupal\mimodulo\Saludo
    arguments: ['@current_user']
```

  </div>
  <div>

- Explicación del código de la izquierda
- Otro detalle importante
- Y un tercero

</div>
</div>

<!--
EXTRA SLIDEV · CÓDIGO + TEXTO (no está en el PPTX)
- Para mezclar Markdown dentro de `<div>`, deja una línea en blanco tras la
  etiqueta de apertura y antes de la de cierre.
- OJO: el `</div>` que va justo después de una lista Markdown no puede
  llevar sangría, o se interpreta como parte de la lista y falla la build.
-->

---
seccion: '03'
---

# Línea de tiempo

<div class="grid grid-cols-4 gap-4">
  <div class="dcs-tarjeta-blanca">
    <p class="dcs-antetitulo">2023</p>
    <p class="mt-2">Primer hito</p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">2024</p>
    <p class="mt-2">Segundo hito</p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">2025</p>
    <p class="mt-2">Tercer hito</p>
  </div>
  <div class="dcs-tarjeta-amanecer">
    <p class="dcs-antetitulo">Próximamente</p>
    <p class="mt-2">Lo que falta</p>
  </div>
</div>

<div class="mt-12">Conclusión de la línea de tiempo.</div>

<!--
EXTRA SLIDEV · LÍNEA DE TIEMPO (no está en el PPTX)
- Tarjetas en fila; el color marca pasado, presente y futuro.
- dcs-antetitulo: etiqueta en mayúsculas, azul, sobre el texto.
-->

---
seccion: '03'
---

# Demo: qué vamos a ver

<div class="grid grid-cols-3 gap-6">
  <div class="dcs-tarjeta-amanecer">
    <p class="dcs-antetitulo">1 · Paso</p>
    <p class="mt-2">Primer paso de la demo</p>
  </div>
  <div class="dcs-tarjeta-amanecer">
    <p class="dcs-antetitulo">2 · Paso</p>
    <p class="mt-2">Segundo paso de la demo</p>
  </div>
  <div class="dcs-tarjeta-amanecer">
    <p class="dcs-antetitulo">3 · Paso</p>
    <p class="mt-2">Tercer paso de la demo</p>
  </div>
</div>

<!--
EXTRA SLIDEV · DEMO (no está en el PPTX)
- Diapositiva que se deja en pantalla mientras haces la demo.
- Usa las notas para el guion paso a paso y el plan B (vídeo grabado).
-->

---
seccion: '03'
---

# Enlaces

<div class="grid grid-cols-2 gap-6 texto-pequeno">
  <div>
    <p class="dcs-antetitulo">Documentación</p>
    <ul class="mt-2">
      <li>drupal.org/docs</li>
      <li>api.drupal.org</li>
    </ul>
  </div>
  <div>
    <p class="dcs-antetitulo">Código</p>
    <ul class="mt-2">
      <li>git.drupalcode.org/…</li>
      <li>github.com/…</li>
    </ul>
  </div>
</div>

<!--
EXTRA SLIDEV · ENLACES (no está en el PPTX)
- Enlaces cortos, sin https://, para que se lean desde la sala.
-->
