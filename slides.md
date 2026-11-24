---
theme: ./theme
title: Playwright y Drupal
info: |
  Charla para DrupalCamp Spain 2026
layout: cover
selectable: true
---

# Playwright y Drupal

Ricardo Sanz · Metadrop

---
layout: ponente
nombre: Ricardo Sanz
cargo: DevOps/JS/TS
etiqueta: Testing
foto: /ponente.jpg
logo: /metadrop.svg
empresa: Metadrop
---

Drupal, software libre y música rara.

---
layout: agenda
---

# De qué vamos a hablar

1. Testing en Drupal core
2. Qué es Playwright
3. Usando Playwright
4. Playwright en Drupal
5. Más allá del testing
6. Playwright e IA
7. Conclusiones

---
layout: section
seccion: '01'
---

# Testing en Drupal core

---
layout: default
seccion: '01'
---

# Tests en Drupal

Tipos de tests usados en Drupal _core_

<div class="grid grid-cols-2 gap-6">
  <div class="dcs-tarjeta-blanca">
    <p class="dcs-antetitulo">Sin navegador</p>
    <ul class="mt-3">
      <li><strong>Unit</strong>: una clase aislada</li>
      <li><strong>Kernel</strong>: con base de datos y servicios</li>
      <li><strong>Functional</strong>: peticiones HTTP, sin JavaScript</li>
    </ul>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Con navegador real</p>
    <ul class="mt-3">
      <li><strong>FunctionalJavascript</strong>: PHPUnit + WebDriver</li>
      <li><strong>Nightwatch</strong>: tests en JS desde Drupal 8.6</li>
    </ul>
  </div>
  <div class="dcs-tarjeta-amanecer">
    <p class="dcs-antetitulo">Fuera de <em>core</em></p>
    <ul class="mt-3">
      <li><strong>Behat</strong>: muy usado en proyectos</li>
    </ul>
  </div>
</div>

<!--
Nos centramos en Nightwatch.
-->

---
seccion: '01'
---

# Problemas de Nightwatch

- La comunidad JS se ha movido a Cypress y Playwright
- En Drupal apenas se usa fuera del _core_
- Esperas y tests inestables según la experiencia de Drupal
- Ineficiencia debido a WebDriver
  - Comunicación mediante peticiones HTTP
  - Poca información de red y consola, y solo en Chrome
  - Sincronización de versiones: navegador, driver y Nightwatch
- La depuración es difícil


<!--

Nightwatch está construido sobre WebDriver. Desde la versión 2 tiene algo de
red y consola vía CDP, pero solo en Chrome.
Popularidad (issue #3467492): Playwright ~16 M descargas semanales en npm,
Nightwatch ~112 K.
Hay que sincronizar las versiones del navegador, su driver y Nightwatch, porque son componentes distintos.

-->

---
seccion: '01'
---

# ¿Playwright reemplazo de Nightwatch?

Parecía que sí… pero la migración está parada.

<div class="grid grid-cols-4 gap-4">
  <div class="dcs-tarjeta-blanca">
    <p class="dcs-antetitulo">2018</p>
    <p class="mt-2">Nightwatch llega a Drupal 8.6</p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Octubre 2025</p>
    <p class="mt-2">Decisión: Playwright sustituirá a Nightwatch</p>
    <p class="mt-2 text-[18px] text-dcs-azul">Issue de política #3467492</p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Noviembre 2026</p>
    <p class="mt-2">Migración pospuesta. Los tests de accesibilidad se están pasando a PHPUnit</p>
    <p class="mt-2 text-[18px] text-dcs-azul">Issue de implementación #3553673</p>
  </div>
  <div class="dcs-tarjeta-amanecer">
    <p class="dcs-antetitulo">¿Futuro?</p>
    <p class="mt-2">Reevaluar qué necesita de verdad Playwright</p>
    <p class="mt-2 text-[18px]">
      <a href="https://www.drupal.org/project/drupal/issues/3638792">#3638792: Añadir @drupal/playwright a core para usarlo <em class="whitespace-nowrap">out-of-the-box</em></a>
    </p>
  </div>
</div>

<!--
Issues:
- #3467492 «[policy, no patch] Replace Nightwatch with Playwright», Fixed
  21 oct 2025.
- #3553673 «Migrate from Nightwatch to Playwright (and phpunit Axe) tests»,
  MR !14733 contra main. Pospuesta el 17 nov 2026: la mayoría de lo que hace
  Nightwatch quedará cubierto al pasar los tests de a11y a PHPUnit
  (#3338664). Después se reevaluará qué necesita de verdad Playwright.
  73 tests pasaban en ~15 min.
- #3638792: añadir @drupal/playwright a las dependencias de core y un job
  de CI que ejecute tests de Playwright si existen. Needs work.
- #3338664 tests de accesibilidad (Axe) a PHPUnit, también Needs work.
- Retirar la dependencia de Nightwatch: probablemente Drupal 12.

Revisar el estado de los issues el día antes de la charla.
Llamada a la acción: revisar el MR, probarlo, ayudar con los a11y.
-->


---
seccion: '01'
---

# Problemas para adoptar Playwright en _core_

Nadie discute sus capacidades. Las dudas son de **coste y encaje en _core_**:

<div class="grid grid-cols-2 gap-4 mt-4 text-[21px] leading-snug">
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Preparar el escenario</p>
    <p class="mt-2">Nightwatch instala módulos y da permisos por la interfaz: lento y frágil. PHPUnit lo hace con PHP en <code>setUp()</code>. Playwright necesita un puente con PHP.</p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">¿Quién los mantiene?</p>
    <p class="mt-2">Quien escribe tests en JS no suele mantenerlos. En <em>core</em> se contribuye sobre todo en PHP, y ya se conoce <code>BrowserTestBase</code>.</p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Tests inestables</p>
    <p class="mt-2">Muchos fallos «aleatorios» son condiciones de carrera reales de la aplicación. La espera automática ayuda, pero no lo arregla todo.</p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Coste en CI</p>
    <p class="mt-2">Probar en varios navegadores multiplica el tiempo del <em>pipeline</em>.</p>
  </div>
</div>

<!--
Las objeciones vienen de la issue de política (#3467492) y del MR de
migración. Nadie dice que Playwright sea peor que Nightwatch; la duda es si
compensa en core.

- Preparar el escenario (murz en #3467492, mstrelan en el MR): los tests de Nightwatch instalan módulos,
  crean roles y asignan permisos por la interfaz. Los FunctionalJavascript lo
  hacen con APIs PHP en setUp(). Playwright solo lo arregla si core construye
  un puente PHP para la preparación, y eso hay que hacerlo y mantenerlo.
- Mantenimiento (longwave, mstrelan): quien escribe los tests en JS no es
  quien acaba manteniéndolos. Los contribuidores habituales de core son sobre
  todo de PHP y ya conocen la familia BrowserTestBase.
- Inestabilidad (deviantintegral, cuyo equipo en Lullabot usa Playwright como
  estándar): la mayoría de fallos "aleatorios" que ha visto eran condiciones
  de carrera reales de la aplicación, no del framework.
- CI (murz): varios navegadores es una ventaja, pero multiplica el tiempo.
  Ni siquiera 10 ejecuciones repetidas de la suite convertida cabían en el
  límite de 30 minutos por job.

Enlace con lo que viene: en proyectos propios estos problemas pesan menos
(el equipo que escribe los tests los mantiene, y la preparación se puede
hacer con Drush).
-->


---
seccion: '01'
---

# ¿Y ahora qué?

Las objeciones son de _core_.

<div class="grid grid-cols-3 gap-6 mt-6 text-[21px] leading-snug">
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Soportado por <em>contrib</em></p>
    <p class="mt-3">Hay un <span class="[font-variant-numeric:normal]">add-on</span> de DDEV y dos paquetes npm.</p>
    <p class="mt-3">Usado por Canvas y Display Builder.</p>
  </div>
  <div class="dcs-tarjeta-amanecer">
    <p class="dcs-antetitulo">Testing avanzado y herramientas</p>
    <p class="mt-3"><em>Trace viewer</em>, UI mode y <em>codegen</em>. Capturas, regresión visual, accesibilidad, <em>scripts</em>.</p>
  </div>
  <div class="dcs-tarjeta-atardecer">
    <p class="dcs-antetitulo">Preparado para la IA</p>
    <p class="mt-3">Un agente maneja el navegador mediante MCP. Agentes que planifican, generan y corrigen tests.</p>
  </div>
</div>

<p>Fuera de Drupal, es la herramienta más usada del ecosistema JS para pruebas e2e.</p>

<!--
Después del jarro de agua fría: que core no lo adopte no cambia nada en tu
proyecto. Las cuatro objeciones de la diapo anterior pesan poco fuera de core:

- Preparar el escenario: con Drush o con los paquetes de la sección 4.
- Mantenimiento: lo mantiene el mismo equipo que lo escribe.
- Inestabilidad: muchos fallos "aleatorios" son fallos reales de la web.
- CI: decides tú cuántos navegadores y cuándo.

Las tres tarjetas adelantan lo que viene:
- Soportado por contrib (sección 4): Canvas con @drupal/playwright (contrib, aunque use el scope
  @drupal); Lullabot con ddev-playwright y @lullabot/playwright-drupal.
- Testing avanzado y herramientas (secciones 3 y 5): las herramientas de depuración responden al "la depuración
  es difícil" de Nightwatch. Y sirve para mucho más que testing.
- Preparado para la IA (sección 6): Playwright MCP y los test agents.

Cierre: la comunidad JS ya se movió a Playwright (diapo de Nightwatch).
-->


---
layout: section
seccion: '02'
---

# Qué es Playwright


---
seccion: '02'
---

# Qué es Playwright

<div class="grid grid-cols-3 gap-6">
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Origen</p>
    <p class="mt-3">Microsoft, 2020, del equipo de Puppeteer de Google</p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Licencia</p>
    <p class="mt-3">Open source, Apache 2.0</p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Lenguajes</p>
    <p class="mt-3">TypeScript/JavaScript, Python, Java y .NET</p>
  </div>
</div>

<br>

- Automatiza navegadores para __tests end-to-end__… y para cualquier otra cosa que haga una persona con un navegador.
- Todo en uno:
  - Tests y aserciones avanzadas
  - _Test runner_ y herramientas varias
  - Conexión a navegadores
  - Máximo control de diferentes navegadores

<!--
En Drupal usaremos JavaScript/TypeScript (es lo que usa core), pero existe
para otros lenguajes con la misma API.

Playwright descarga sus propios navegadores porque los que no son Chromium están parcheados para ofrecer un mayor control. Con WebDriver BiDi podría dejar de ser necesario. Desde 1.57, en lugar de Chromium usa Chrome for Testing.
-->

---
seccion: '02'
---

# Una API, tres motores

<div class="grid grid-cols-3 gap-6">
  <div class="dcs-tarjeta-blanca">
    <p class="dcs-antetitulo">Blink</p>
    <p class="mt-3">Chromium, Chrome, Edge</p>
  </div>
  <div class="dcs-tarjeta-blanca">
    <p class="dcs-antetitulo">Gecko</p>
    <p class="mt-3">Firefox</p>
  </div>
  <div class="dcs-tarjeta-blanca">
    <p class="dcs-antetitulo">WebKit</p>
    <p class="mt-3">El motor de Safari, también en Linux</p>
  </div>
</div>

- Emulación de dispositivos: móviles, tablets, geolocalización, zona horaria
- Con interfaz o sin ella (*headless*), en local o en CI
- No usa WebDriver: habla directamente con cada navegador
- Versiones propias (parcheadas) de navegadores no Chromium para mayor control
- Puede controlar navegadores remotos (p. ej., en contenedores)

<!--
Lo de WebKit en Linux es un argumento potente: probar "Safari" sin tener
un Mac.

No usar WebDriver es lo que le da velocidad y control fino (red, eventos,
varias pestañas), igual que Puppeteer pero con los tres motores.
-->

---
seccion: '02'
---

# Arquitectura de Playwright

<img src="/arquitectura_playwright.svg" class="mx-auto" style="height: 650px; margin-top: -4.5rem" alt="Arquitectura de Playwright" />

<!--
El proceso de test (Node.js) usa la API cliente para hablar con el servidor
de Playwright mediante el protocolo propio (JSON por pipe o WebSocket).
El servidor controla cada motor de forma nativa: CDP para Chromium, Juggler
para Firefox e Inspector para WebKit. Dentro del navegador hay contextos
aislados, páginas y un script inyectado que gestiona selectores y esperas.
-->


---
layout: section
seccion: '03'
---

# Usando Playwright


---
seccion: '03'
---

# Anatomía de un test

<div class="grid grid-cols-[3fr_2fr] gap-6">
  <div>
    <p class="dcs-antetitulo normal-case">tests/login.spec.ts</p>

```ts
import { test, expect } from '@playwright/test'

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/user/login')
  })
  test('admin', { tag: '@smoke' }, async ({ page }) => {
    await page.getByLabel('Username').fill('admin')
    // ...
    await expect(page).toHaveURL(/user\/1/)
  })
})
```

  </div>
  <div class="text-[21px]">

- Ficheros `*.spec.ts`
- `test()`: nombre y función. **Falla si la función lanza un error**: un `expect` que no se cumple, una excepción o un *timeout*
- `test.describe()` agrupa tests en *suites*
- *Tags* para filtrar: `--grep @smoke`
- *Hooks*: `beforeEach`, `afterEach`, `beforeAll`, `afterAll`

</div>
</div>

<!--
Visión general antes de entrar en detalle.

- El runner busca ficheros *.spec.ts (o .test.ts) en testDir, que se
  define en playwright.config.ts.
- ¿Cómo sabe que un test falla? No hay "return false": la función es
  async y si lanza una excepción (o la promesa se rechaza) el test falla.
  expect lanza cuando no se cumple; también falla por excepción no
  capturada o si se pasa del timeout (30 s por defecto).
- Suites: cada fichero es una suite y cada describe, una suite anidada.
  Los proyectos de la configuración también agrupan.
- Tags: `{ tag: '@smoke' }` en test o describe; se filtra con
  `--grep @smoke` o `--grep-invert @lento`. También test.skip,
  test.only, test.fixme.
- Hooks: beforeEach/afterEach por test, beforeAll/afterAll una vez por
  worker. En la práctica se usan más las fixtures (lo veremos).
-->

---
seccion: '03'
---

# Acciones disponibles

<div class="grid grid-cols-4 gap-4 text-[18px] leading-relaxed">
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Navegar</p>
    <p class="mt-2"><code>goto()</code> <code>goBack()</code> <code>reload()</code></p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Formularios</p>
    <p class="mt-2"><code>fill()</code> <code>check()</code> <code>selectOption()</code></p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Ratón</p>
    <p class="mt-2"><code>click()</code> <code>dblclick()</code> <code>hover()</code> <code>dragTo()</code></p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Teclado</p>
    <p class="mt-2"><code>press('Enter')</code> <code>pressSequentially()</code></p>
  </div>
  <div class="dcs-tarjeta-blanca">
    <p class="dcs-antetitulo">Ficheros</p>
    <p class="mt-2"><code>setInputFiles()</code> para subidas; también maneja descargas</p>
  </div>
  <div class="dcs-tarjeta-blanca">
    <p class="dcs-antetitulo">Ventanas</p>
    <p class="mt-2">Pestañas, <em>popups</em>, <em>iframes</em> y diálogos del navegador</p>
  </div>
  <div class="dcs-tarjeta-blanca">
    <p class="dcs-antetitulo">Leer la página</p>
    <p class="mt-2"><code>textContent()</code> <code>getAttribute()</code> <code>evaluate()</code></p>
  </div>
  <div class="dcs-tarjeta-blanca">
    <p class="dcs-antetitulo">Capturas</p>
    <p class="mt-2"><code>screenshot()</code> <code>pdf()</code> y vídeo (de cada test, solo los fallidos, solo los reintentos)</p>
  </div>
</div>

<!--
Repaso rápido de las acciones; no hay que explicar cada una. Fila de
arriba (cielo): lo básico de cualquier test. Fila de abajo (blanca): lo
que suele dar guerra con otras herramientas.

- Navegar: page.goto(url), goBack/goForward, reload. waitForURL para
  esperar una redirección.
- Formularios: fill (texto), check/uncheck (casillas y radios),
  selectOption (select). clear() para vaciar.
- Ratón: click (con opciones: botón derecho, modificadores, posición),
  dblclick, hover (menús desplegables de Drupal), dragTo (tabledrag, Layout
  Builder).
- Teclado: press('Enter'), atajos ('Control+A'), pressSequentially para
  escribir tecla a tecla (autocompletados de Drupal).
- Ficheros: setInputFiles en campos de imagen o fichero; descargas con
  page.waitForEvent('download').
- Ventanas: popups con waitForEvent('popup'), iframes con frameLocator
  (CKEditor clásico, embeds), diálogos nativos (alert, confirm, prompt,
  beforeunload) con page.on('dialog', d => d.accept()). No están en el
  DOM; por defecto Playwright los cierra solo.
- Leer: textContent, inputValue, getAttribute; evaluate ejecuta JS en la
  página (p. ej. leer drupalSettings).
- Capturas: screenshot de página o de un elemento, pdf (solo Chromium),
  vídeo de la ejecución desde la configuración.
-->

---
seccion: '03'
---

# Localizadores más humanos

<div class="grid grid-cols-2 gap-6">
  <div>
    <p class="dcs-antetitulo">Nightwatch</p>

En _core_, localizadores con selectores CSS y XPath.

```js
browser
  .setValue('#edit-name', 'admin')
  .setValue('#edit-pass', 'secreto')
  .click('#edit-submit')
```

  </div>
  <div>
    <p class="dcs-antetitulo">Playwright</p>

Localizadores basados en lo que percibe un humano.

```js
await pg.getByLabel('Username').fill('admin')
await pg.getByLabel('Password').fill('secreto')
await pg.getByRole('button', { name: 'Log in' })
  .click()
```

  </div>
</div>

- `getByRole`, `getByLabel`, `getByText`, `getByPlaceholder`, `getByTestId`
- Si el test no encuentra el elemento, quizá un lector de pantalla tampoco

<!--
Nightwatch 3 también tiene findByRole, findByLabelText o findByText, pero
los tests de core usan selectores CSS.

Los localizadores por rol usan el árbol de accesibilidad: el test se parece
a cómo una persona usa la web y no depende de IDs ni clases del tema.

Efecto secundario: empuja a tener formularios accesibles (labels bien
asociados, botones con nombre).

En Drupal multilingüe el texto cambia: usar el idioma del sitio de test o
getByTestId en casos concretos.
-->

---
seccion: '03'
---

# Espera automática y aserciones

Antes de cada acción, Playwright comprueba las propiedades necesarias del elemento:

<div class="grid grid-cols-3 gap-4 mt-4">
  <span class="dcs-etiqueta justify-center">Está en el DOM</span>
  <span class="dcs-etiqueta justify-center">Es visible</span>
  <span class="dcs-etiqueta justify-center">Está quieto</span>
  <span class="dcs-etiqueta justify-center">Recibe eventos</span>
  <span class="dcs-etiqueta justify-center">Está habilitado</span>
  <span class="dcs-etiqueta justify-center">Es editable</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6">
  <div>

```js
await expect(mensaje).toBeVisible()
await expect(mensaje)
  .toContainText('has been created')
```

  </div>
  <div>

- Si no las cumple, reintenta hasta que las cumpla o se agote el tiempo
- Las aserciones siguen el mismo principio: reintentan hasta que la página alcanza el estado esperado
- Evita muchos fallos por problemas de _timing_

</div>
</div>

<!--
"Actionability checks". Cada acción comprueba solo lo que necesita: click
no exige "editable", fill sí.

Ejemplos de Drupal donde esto salva tests: el throbber de AJAX, los
diálogos modales, BigPipe rellenando bloques, CKEditor 5 inicializándose.
"Está quieto" = no se está animando.

"Web-first assertions": toBeVisible, toHaveText, toHaveURL, toHaveValue,
toHaveCount… El error más común al empezar es leer el estado una vez y
compararlo. Si el mensaje de estado de Drupal aún no ha aparecido, falla.

Con expect(locator) Playwright reintenta hasta el timeout (5 s por
defecto, configurable).
-->

---
seccion: '03'
---

# Tests aislados y en paralelo

<div class="grid grid-cols-2 gap-6">
  <div>

```js
// auth.setup.js: inicia sesión una sola vez
setup('admin', async ({ page }) => {
  await page.goto('/user/login')
  // ...rellenar y enviar el formulario
  await page.context()
    .storageState({ path: '.auth/admin.json' })
})
```

```js
// admin.spec.js: empieza con la sesión iniciada
test.use({ storageState: '.auth/admin.json' })
test('crear página', async ({ page }) => {
  await page.goto('/node/add/page')
})
```

  </div>
  <div>

- Cada test recibe su propio **contexto**: como una ventana de incógnito nueva, y cuesta milisegundos
- `storageState`: empezar con un estado guardado, por ejemplo con la sesión ya iniciada
- Por eso todo puede ir **en paralelo**: `fullyParallel`
- El mismo test en **varios navegadores**: `projects`
- **Reintentos** en CI con traza: `retries`, `trace`


</div>
</div>

<!--
Un contexto es como un perfil de incógnito nuevo. Por eso los tests no se
contaminan entre sí y se pueden lanzar en paralelo.

storageState: el login se hace una vez en un proyecto "setup" y los demás
tests arrancan ya autenticados. En Drupal ahorra muchísimo tiempo.
- auth.setup.js se ejecuta una sola vez, antes que el resto: en
  playwright.config el proyecto de los tests declara dependencies: ['setup'].
- El JSON guarda cookies (la SSESS… de Drupal) y localStorage. Cada test sigue
  teniendo su contexto aislado, pero se crea con esas cookies ya cargadas.
- test.use() lo aplica a un fichero o a un describe. Si casi todos los tests
  usan el mismo rol, se pone en el use del proyecto en la config y no hace
  falta escribirlo en cada fichero. Un setup por rol: admin.json, editor.json…
- .auth/ va al .gitignore: son sesiones válidas.

Configuración en playwright.config.js:
- fullyParallel: true → todos los tests en paralelo, también los del mismo
  fichero.
- projects: el mismo test en Chrome y Firefox de escritorio
  (devices['Desktop Chrome'], devices['Desktop Firefox']), más el proyecto
  "setup" (testMatch: /.*\.setup\.js/) del que dependen.
- retries: process.env.CI ? 2 : 0 → reintentos solo en CI.
- trace: 'on-first-retry': si un test falla y se reintenta, guarda la
  traza. Es la respuesta al "falla en CI y no sé por qué".

Fixtures: inyección de dependencias para tests. Se ven en la siguiente
diapositiva.
-->

---
seccion: '03'
---

# Fixtures: inyección de dependencias

<div class="grid grid-cols-[3fr_2fr] gap-6">
  <div>

```js
// fixtures.js
export const test = base.extend({
  nodo: async ({ request }, use) => {
    const creado = await crearNodo(request) // antes
    await use(creado)                       // el test
    await borrarNodo(request, creado.id)    // después
  },
})
```

```js
import { test } from './fixtures'
test('editar nodo', async ({ page, nodo }) => {
  await page.goto(`/node/${nodo.id}/edit`)
})
```

  </div>
  <div>

- El test **pide** lo que necesita en sus parámetros
- Playwright lo prepara antes y lo limpia después, aunque el test falle
- Integradas: `page`, `context`, `request`, `browser`
- Propias con `test.extend()`
- Solo se crean si el test las pide, y pueden depender unas de otras

</div>
</div>

<!--
Inyección de dependencias: el test no crea lo que usa, lo declara en sus
parámetros. Playwright lee esos nombres, prepara las fixtures y solo entonces
llama al test.

La secuencia:
1. El test pide { page, nodo }.
2. Playwright prepara request (nodo depende de ella) y page.
3. Ejecuta la fixture nodo hasta use(): se crea el nodo.
4. use(creado) llama al test. Dentro del test, nodo es ese valor, no la función.
5. El test se ejecuta entero.
6. Al acabar (bien o mal), use() se resuelve y sigue la fixture: borrarNodo.
7. Playwright cierra page, context y request.

Es el mismo patrón que yield en pytest o next() en un middleware: un
try/finally alrededor del test.

request: cliente HTTP sin navegador. crearNodo puede hacer un POST a JSON:API.
Si se crea con Drush, no hace falta pedir request.

Ventajas frente a beforeEach/afterEach:
- Solo se crean si el test las usa.
- Se componen: una fixture "editor" que crea un usuario y otra "nodo" que
  usa ese usuario como autor.
- Se reutilizan entre ficheros importando ese test.

Ámbito: por defecto, una por test. Con { scope: 'worker' } se crea una vez
por worker (por ejemplo, un usuario de pruebas compartido). browser es de
worker; page y context, de test.

En Drupal: crear contenido, usuarios o términos antes del test y borrarlos
después, sin pasar por la interfaz.
-->

---
seccion: '03'
---

# Page Object Model

Una clase por página o componente: localizadores en un solo sitio y métodos cuyo nombre expresa la intención

<div class="grid grid-cols-2 gap-6" style="--slidev-code-font-size: 17px; --slidev-code-line-height: 1.4">
  <div>
    <p class="dcs-antetitulo normal-case">pages/carrito.ts</p>

```ts
export class Carrito {
  readonly vacio: Locator
  constructor(private page: Page) {
    this.vacio = page.getByText('Carrito vacío')
  }
  async conProductos(n: number) { /* … */ }
  async vaciar() {
    await this.page
      .getByRole('button', { name: 'Vaciar' })
      .click()
  }
}
```

  </div>
  <div>
    <p class="dcs-antetitulo normal-case">fixtures.ts · carrito.spec.ts</p>

```ts
const test = base.extend<{ carrito: Carrito }>({
  carrito: async ({ page }, use) => {
    await page.goto('/cart')
    await use(new Carrito(page))
  },
})

test('vaciar el carrito', async ({ carrito }) => {
  await carrito.vaciar()
  await expect(carrito.vacio).toBeVisible()
})
```

  </div>
</div>

<!--
POM: una clase que encapsula cómo se usa una página o un componente.
Ejemplo del carrito: vaciar(), cambiarCantidad(), irAlCheckout()…
Si cambia el HTML se arregla en un sitio, no en cien tests.

conProductos() se deja sin cuerpo: puede añadir los productos por la UI,
con Drush o con la API. El test no necesita saber cómo; esa es la gracia.

Enlace con la diapo de fixtures: el POM se ofrece como fixture. El test pide
{ carrito } y lo recibe ya construido y con la página abierta.

Riesgo: acabar escribiendo "una API de toda tu web". Tres reglas:
- Métodos cuando un test los necesite, no por adelantado.
- Nombres de lo que hace el usuario (publicar()), no de lo que toca
  (clickBotonGuardar()).
- Las aserciones, en el test. El POM actúa y expone localizadores; el test
  decide qué comprueba.

En Drupal compensa más un objeto por componente que por URL: CKEditor,
Media Library, el formulario de nodo, la barra de administración se repiten
en muchas páginas. Ckeditor5 de @lullabot/playwright-drupal es justo eso, y
CKEditor 5 Paste Filter tiene objects/CKEditor5.ts y objects/Drupal.ts.
-->

---
seccion: '03'
---

# ¿Y Behat?

<div class="grid grid-cols-2 gap-6" style="--slidev-code-font-size: 17px; --slidev-code-line-height: 1.4">
  <div>
    <p class="dcs-antetitulo">Behat · Gherkin</p>

```gherkin
Scenario: Vaciar el carrito
  Given I have 2 products in my cart
  When I empty the cart
  Then I should see "Carrito vacío"
```

  </div>
  <div>
    <p class="dcs-antetitulo">Playwright · POM</p>

```ts
test('vaciar el carrito', async ({ carrito }) => {
  await carrito.conProductos(2)
  await carrito.vaciar()
  await expect(carrito.vacio).toBeVisible()
})
```

  </div>
</div>

<div class="grid grid-cols-2 gap-4 mt-2 text-[21px] leading-snug">
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">¿Quién los lee?</p>
    <p class="mt-2">Gherkin compensa si lo lee negocio. Si solo lo lee desarrollo, es una capa más que mantener.</p>
  </div>
  <div class="dcs-tarjeta-amanecer">
    <p class="dcs-antetitulo">¿Sin renunciar a Gherkin?</p>
    <p class="mt-2"><code>playwright-bdd</code> ejecuta tus <code>.feature</code> con el runner de Playwright.</p>
  </div>
</div>

<!--
Pregunta real de alguien con un proyecto grande en Behat: "me preocupa
perder legibilidad".

- Las step definitions de Behat ya son un POM, con expresiones regulares en
  medio. En Playwright quitas la traducción: el editor autocompleta y te
  lleva a la definición.
- Con POM el test se lee casi como un escenario. test.step('Dado…') añade
  pasos con nombre que salen en el informe HTML y en el trace.
- playwright-bdd (vitalets/playwright-bdd, 9.x): convierte los .feature en
  tests de Playwright. Conservas los escenarios y reescribes solo los steps,
  y ganas paralelismo, trace, UI mode…
- Migración corta, no gradual: convivir años con dos stacks (dos CI, dos
  formas de preparar datos) sale más caro, y los de Behat acaban sin
  actualizar. Con IA haciendo el grueso de la traducción, compensa migrar de
  una vez:
  - PoC con los escenarios difíciles. Traducir el texto es fácil; lo difícil
    es lo que da la Drupal Extension ("logged in as a user with the editor
    role", "article content:" con tabla, la limpieza). Si la PoC resuelve eso
    con Drush o fixtures, el resto es mecánico.
  - Revisar lo que traduce la IA: el riesgo es un test que pasa sin comprobar
    lo mismo. Truco: romper la funcionalidad y ver que el test nuevo falla.
  - Fecha para apagar Behat: ningún test nuevo en Behat desde el primer día;
    cada .feature se borra cuando su equivalente pasa en CI.
- playwright-bdd no es un paso intermedio (alargaría la convivencia) sino un
  destino para quien tenga a negocio leyendo los .feature.
-->



---
seccion: '03'
---

# Otras herramientas

<div class="grid grid-cols-2 gap-6">
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">codegen</p>
    <p class="mt-2">Genera el test a partir de lo que haces en el navegador</p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">UI mode · <code>--ui</code></p>
    <p class="mt-2">Lanza, filtra y depura tests paso a paso</p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Trace Viewer</p>
    <p class="mt-2">DOM, red, consola y capturas de cada paso, también de ejecuciones en CI</p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Informe HTML</p>
    <p class="mt-2">Resultados con trazas, vídeos y capturas adjuntas</p>
  </div>
</div>

<!--
Esta es la diapositiva que responde al "la depuración es difícil" de
Nightwatch.
La traza es un fichero zip que se descarga de los artefactos de CI y se
abre con `npx playwright show-trace` o en trace.playwright.dev (en local,
no se sube nada).

Hay también extensión oficial para VS Code.
-->

---
layout: none
---

<img src="/playwright_ui_mode.png" alt="UI mode de Playwright" class="absolute inset-0 w-full h-full object-cover" />


---
seccion: '03'
---

# Y además…

<div class="grid grid-cols-2 gap-6">
  <div class="dcs-tarjeta-blanca">
    <p class="dcs-antetitulo">Regresión visual</p>
    <p class="mt-2"><code>toHaveScreenshot()</code> compara píxel a píxel</p>
    <p class="mt-2">Detención de animaciones, enmascarado de elementos, umbral de diferencia aceptable, etc.</p>
  </div>
  <div class="dcs-tarjeta-blanca">
    <p class="dcs-antetitulo">Aria snapshots</p>
    <p class="mt-2"><code>toMatchAriaSnapshot()</code> compara la estructura accesible</p>
  </div>
  <div class="dcs-tarjeta-blanca">
    <p class="dcs-antetitulo">Red</p>
    <p class="mt-2">Intercepta, modifica o simula peticiones</p>
    <p class="mt-2">Inyectar cabeceras, simular respuestas, redirigir, emular la red, etc.</p>
  </div>
  <div class="dcs-tarjeta-blanca">
    <p class="dcs-antetitulo">API</p>
    <p class="mt-2">La fixture <code>request</code> prueba JSON:API o REST sin navegador</p>
  </div>
</div>

<!--
Pasar rápido, es un escaparate.

- Visual: útil para el tema; cuidado con fuentes y SO distintos entre
  local y CI (generar las capturas de referencia en el mismo contenedor).
- Aria snapshot: YAML con roles y nombres, menos frágil que una captura.
- route(): simular que un servicio externo falla o tarda.
- request: comprobar JSON:API o preparar datos antes del test.
-->


---
seccion: '03'
---

# Accesibilidad con axe-core

```js
import AxeBuilder from '@axe-core/playwright'

test('la portada no tiene errores de accesibilidad', async ({ page }) => {
  await page.goto('/')
  const resultado = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze()
  expect(resultado.violations).toEqual([])
})
```

- Automatiza la parte detectable de WCAG: contraste, etiquetas, ARIA…
- No sustituye a una revisión manual

<!--
@axe-core/playwright es el paquete oficial de Deque.

Conexión con core: los tests a11y de Nightwatch usan axe; en core van a
pasar a PHPUnit (#3338664). En un proyecto se puede hacer directamente con
Playwright.

Las herramientas automáticas detectan entre un 30 % y un 57 % de los
problemas de accesibilidad, según el estudio (GDS / Deque).
-->

---
layout: section
seccion: '04'
---

# Playwright en Drupal


---
seccion: '04'
---

# Usar Playwright en Drupal

<div class="grid grid-cols-3 gap-6">
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Entorno · add-on de DDEV</p>
    <p class="mt-2 font-bold [font-variant-numeric:normal]">Lullabot/ddev-playwright</p>
    <p class="mt-2">Playwright, navegadores y KasmVNC dentro del contenedor <code>web</code></p>
  </div>
  <div class="dcs-tarjeta-blanca">
    <p class="dcs-antetitulo">Paquete npm · sitios</p>
    <p class="mt-2 font-bold [font-variant-numeric:normal]">@lullabot/<wbr><span class="whitespace-nowrap">playwright-drupal</span></p>
    <p class="mt-2">Orientado a testear sitios completos</p>
  </div>
  <div class="dcs-tarjeta-blanca">
    <p class="dcs-antetitulo">Paquete npm · componentes</p>
    <p class="mt-2 font-bold [font-variant-numeric:normal]">@drupal/playwright</p>
    <p class="mt-2">Orientado a testear componentes, como módulos o temas</p>
  </div>
</div>

<p class="mt-6">Los dos paquetes npm añaden <em>fixtures</em> y acciones sobre Drupal: login, crear usuarios, instalar módulos…</p>


<!--
- Lullabot/ddev-playwright: solo el entorno, no sabe nada de Drupal.
  Navegadores en una capa de la imagen (solo si ejecutas
  `ddev install-playwright`), KasmVNC en :8444, informe en :9324, confía en
  el certificado HTTPS de DDEV, tmpfs para SQLite.
- Nombres: en npm, @organización/paquete es un paquete con scope. Solo esa
  organización puede publicar con ese prefijo, así que @drupal/playwright es
  oficial de la comunidad Drupal y @lullabot/... es de Lullabot. Se instalan
  con npm i -D <nombre> en la carpeta de los tests.
  Lullabot/ddev-playwright es usuario/repositorio de GitHub: es lo que
  recibe `ddev add-on get`.
- @lullabot/playwright-drupal (v2.1.1): `test` extendido que da a cada test
  su copia SQLite del sitio ya preparado (drush site:install, tu config o tu
  BD MySQL convertida a SQLite). Adjunta al informe los errores PHP y de
  consola (no hace fallar el test).
  Ayudas: execDrushInTestSite, login, formularios, AJAX, CKEditor 5, Media
  Library, Gin, dblog, accesibilidad, capturas. Solo soportado con DDEV,
  también en CI.
- @drupal/playwright (v2.0.0, proyecto drupal.org/project/playwright,
  publicado en npm): instala Drupal con core/scripts/test-site.php, como los
  tests funcionales y Nightwatch. Fixtures parallelWorker, isolatedPerTest e
  isolatedPerTestSnapshot. Objeto drupal: loginAsAdmin, createUser,
  createRole, addPermissions, installModules, applyRecipe, dr().
  Funciona sin DDEV (CI de drupal.org).
-->

---
seccion: '04'
---

# <span class="[font-variant-numeric:normal]">Lullabot/ddev-playwright</span>

<div class="grid grid-cols-2 gap-4">
  <div class="dcs-tarjeta-cielo !py-4">
    <p class="dcs-antetitulo">Add-on de DDEV</p>
    <p class="mt-1">No sabe nada de Drupal: sirve para cualquier proyecto</p>
  </div>
  <div class="dcs-tarjeta-cielo !py-4">
    <p class="dcs-antetitulo">En el contenedor <code>web</code></p>
    <p class="mt-1">Los tests pueden usar PHP, Drush y la base de datos</p>
  </div>
  <div class="dcs-tarjeta-blanca !py-4">
    <p class="dcs-antetitulo">KasmVNC</p>
    <p class="mt-1">Escritorio del contenedor accesible por web, con la interfaz de Playwright: <span class="whitespace-nowrap"><code>--headed</code>, <code>--ui</code>, <code>codegen</code></span></p>
  </div>
  <div class="dcs-tarjeta-blanca !py-4">
    <p class="dcs-antetitulo">Navegadores listos</p>
    <p class="mt-1">Instalados solo si se piden</p>
    <p class="mt-1">Aceptan el HTTPS de DDEV</p>
  </div>
</div>

```bash
ddev add-on get Lullabot/ddev-playwright
ddev install-playwright   # navegadores, solo en quien los necesite
ddev playwright test      # KasmVNC en :8444, informe en :9324
```

<!--
- Agnóstico: igual vale para un proyecto Laravel o un WordPress. La parte de
  Drupal la pone la librería @lullabot/playwright-drupal.
- Mismo contenedor que web: la diferencia con el otro add-on (julienloizelet),
  que usa un contenedor aparte con la imagen de Microsoft. Como Node y PHP
  están juntos, las librerías pueden lanzar drush o test-site.php.
- KasmVNC: https://<proyecto>.ddev.site:8444, sin login. Informe HTML en
  https://<proyecto>.ddev.site:9324 con `ddev playwright show-report`.
- Navegadores: se instalan en una capa de la imagen, cacheada, según la
  versión de @playwright/test del package.json. Quien no ejecuta
  `ddev install-playwright` no paga el coste. Chromium, Firefox y WebKit
  confían en la CA de mkcert: no hace falta ignoreHTTPSErrors.
- Extras pensados para la librería de Lullabot: monta /tmp/sqlite en memoria
  (se borra con ddev restart) e instala go-task y uv.
- Tests por defecto en test/playwright (PLAYWRIGHT_TEST_DIR en .ddev/.env).
-->

---
seccion: '04'
---

# <span class="[font-variant-numeric:normal]">@lullabot/playwright-drupal</span>

<div class="grid grid-cols-3 gap-4 text-[21px] leading-snug">
  <div class="dcs-tarjeta-cielo !py-3">
    <p class="dcs-antetitulo">Una copia por test</p>
    <p class="mt-1">Sitio en SQLite: tests en paralelo sin interferir</p>
  </div>
  <div class="dcs-tarjeta-cielo !py-3">
    <p class="dcs-antetitulo">La base es tu sitio</p>
    <p class="mt-1">Drush, tu configuración o tu base de datos convertida</p>
  </div>
  <div class="dcs-tarjeta-cielo !py-3">
    <p class="dcs-antetitulo">Errores en el informe</p>
    <p class="mt-1">Log de PHP y errores JS adjuntos al resultado</p>
  </div>
</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-[18px] leading-snug [font-variant-numeric:normal]">
  <div class="dcs-tarjeta-blanca !py-2">
    <p><code>login(page, 'editor')</code></p>
    <p class="mt-1">Enlace de Drush, sin pasar por el formulario</p>
  </div>
  <div class="dcs-tarjeta-blanca !py-2">
    <p><code>execDrushInTestSite()</code></p>
    <p class="mt-1">Drush contra la copia del test</p>
  </div>
  <div class="dcs-tarjeta-blanca !py-2">
    <p><code>new Ckeditor5(…).fill()</code></p>
    <p class="mt-1">Escribe en el editor, no en el <em>textarea</em> oculto</p>
  </div>
  <div class="dcs-tarjeta-blanca !py-2">
    <p><code>saveDrupalForm()</code></p>
    <p class="mt-1">Espera al AJAX, guarda e indica si ha ido bien</p>
  </div>
  <div class="dcs-tarjeta-blanca !py-2">
    <p><code>checkDblogForErrors()</code></p>
    <p class="mt-1">Errores del log de Drupal para comprobar con <code>expect</code></p>
  </div>
  <div class="dcs-tarjeta-blanca !py-2">
    <p><code>a11y.check()</code></p>
    <p class="mt-1">axe sin los falsos positivos habituales de Drupal</p>
  </div>
</div>

<p class="mt-3"><span class="dcs-etiqueta">Requiere</span> <span class="ml-3 [font-variant-numeric:normal]">DDEV + ddev-playwright, <code>settings.playwright.php</code> y un <code>Taskfile.yml</code></span></p>

<!--
Cómo funciona la copia:
1. Antes de los tests (globalSetup), si no existe /tmp/sqlite/.ht.sqlite,
   ejecuta `task playwright:install` con PLAYWRIGHT_SETUP=1:
   settings.playwright.php cambia la conexión a ese fichero, así que tu
   MariaDB no se toca. Usa tu tarea playwright:install:hook o, si no hay,
   `drush site:install demo_umami`.
2. Cada test: copia .ht.sqlite a /tmp/sqlite/<id>/ y pone la cookie
   SIMPLETEST_USER_AGENT. Drupal la reconoce como petición de test y
   settings.playwright.php la manda a esa copia. Al acabar, la borra.
3. Tu navegación normal (sin cookie) sigue en MariaDB.

Base de tu sitio: `drush site:install --existing-config` en el hook (hay que
activar el módulo sqlite y exportar config) o
`ddev exec task playwright:mysql-to-sqlite` para convertir tu MariaDB.

Sin aislamiento: PLAYWRIGHT_NO_TEST_ISOLATION=1, contra MariaDB, mejor con
--workers=1.

Ayudas: execDrushInTestSite, login, saveDrupalForm, waitForAjax, Gin,
Media Library, dblog, informe de estado, axe con exclusiones para Drupal,
comparación visual. definePlaywrightDrupalConfig() para la configuración.

Solo soportado con DDEV, también en CI (GitHub Actions, GitLab CI).


Requerido:
  - Incluir settings.playwright.php después del de DDEV para que así una petición
    con la cookie use la BD correspondiente de SQLite.
  - El Taskfile hay que crearlo, aunque basta con incluir el que ofrece la librería.

Ayudas:
Todo se importa de '@packages/playwright-drupal' (la copia que hace el
globalSetup), no del nombre npm.

- login(page, user = 'admin'): genera un enlace de un solo uso con
  drush user:login, navega a él y comprueba la cookie de sesión.
- execDrushInTestSite('…'): Drush arranca contra el sitio del test, no
  contra el normal.
- Ckeditor5: new Ckeditor5(page, '#edit-body-wrapper').fill('…').
- saveDrupalForm(page, { fallback, addFormPathPattern }): espera AJAX, pulsa
  el "Save" real (compatible con Gin y autosave_form), devuelve 'ok' si la
  URL deja la de alta o 'error' si aparece .messages--error. Debajo:
  waitForAjax (mismo criterio que assertWaitOnAjaxRequest de core),
  openAllDetails, clickSaveButton, waitForSaveOutcome.
- truncateDblog() al empezar + checkDblogForErrors() al final, con
  formatLogErrors() para el mensaje: errores y críticos del watchdog.
- a11y.check(): fixture con axe; excluye skip link, landmarks, vistas
  previas de media. checkAccessibility y takeAccessibleScreenshot también.

Otras: selectFirstMediaFromLibrary, uploadManagedFile, fillOembedUrl,
extractEntityIdFromPage, validateRequiredModules, getStatusReport,
clickSubmit (Gin), dismissAutosaveDraft, idPrefixSelector,
defineVisualDiffConfig.

Firmas comprobadas en el código de la v2.1.1.

dblog no es automático: truncateDblog() al empezar, checkDblogForErrors()
al final y expect(errors, formatLogErrors(errors)).toEqual([]).

Y más: Media Library, subida de ficheros, Gin, autosave_form, informe de
estado, comparación visual…
-->

---
seccion: '04'
---

# <span class="[font-variant-numeric:normal]">@drupal/playwright</span>

<div class="grid grid-cols-2 gap-4">
  <div class="dcs-tarjeta-amanecer !py-4">
    <p class="dcs-antetitulo">Un Drupal limpio</p>
    <p class="mt-1">Instala desde un perfil, como los tests funcionales de core</p>
  </div>
  <div class="dcs-tarjeta-amanecer !py-4">
    <p class="dcs-antetitulo">Aislamiento al gusto</p>
    <p class="mt-1">Una instalación por <em>worker</em>, una por test, o una por <em>worker</em> restaurando una instantánea (SQLite y ficheros) antes de cada test</p>
  </div>
  <div class="dcs-tarjeta-blanca !py-4">
    <p class="dcs-antetitulo">El objeto <code class="normal-case">drupal</code></p>
    <p class="mt-1">Puente con el Drupal bajo test: login, usuarios, roles, permisos, módulos, recetas, etc.</p>
  </div>
  <div class="dcs-tarjeta-blanca !py-4">
    <p class="dcs-antetitulo">Sin DDEV</p>
    <p class="mt-1">Ya se ejecuta en el CI de D.o. Lo usa Canvas.</p>
    <p class="mt-1"><em>Podría</em> funcionar con DDEV (no probado).</p>
  </div>
</div>

<!--
Proyecto drupal.org/project/playwright, publicado en npm como
@drupal/playwright (v2.0.0, 6 nov 2026). Lo mantiene Sally Young.

Instala con `php core/scripts/test-site.php install`, el mismo script que
usa Nightwatch en core.

Fixtures:
- parallelWorker: un sitio por worker, los tests lo comparten (no deben
  dejar cambios).
- isolatedPerTest: una instalación por test. Lo más seguro y lo más lento.
- isolatedPerTestSnapshot: instala una vez por worker y restaura una
  instantánea antes de cada test. Necesita SQLite. Con snapshotCache la
  instantánea se reutiliza entre ejecuciones si el código no cambia.

Opciones con test.use: installProfile, modules, enableTestExtensions.

Objeto drupal: loginAsAdmin, login, logout, createUser, createRole,
addPermissions, installModules, uninstallModules, applyRecipe, clearCache,
dr() (Drupal 11.4+).

Variables: DRUPAL_TEST_BASE_URL, DRUPAL_TEST_DB_URL, DRUPAL_TEST_DRUPAL_ROOT.
Incluye una regla de ESLint para usar rutas relativas ('./user/login'), porque
el CI de drupal.org sirve el sitio en un subdirectorio.
-->

---
layout: section
seccion: '05'
---

# Más allá del testing

---
seccion: '05'
---

# Un navegador programable

```js
import { chromium } from 'playwright'

const urls = ['/', '/blog', '/contacto']
const browser = await chromium.launch()
const page = await browser.newPage()
for (const url of urls) {
  await page.goto(`https://drupal.ddev.site${url}`)
  await page.screenshot({ path: `capturas${url.replaceAll('/', '_')}.png`, fullPage: true })
}
await browser.close()
```

- Solo la librería, sin runner ni aserciones: un script de Node normal

<!--
Volvemos al "todo en uno" del bloque 2: aquí solo usamos la conexión a
navegadores. Este script hace capturas de
página completa de una lista de URLs. Se podría leer la lista del
sitemap.xml del sitio.

La misma API que en los tests: page.goto, locators, etc.
-->

---
seccion: '05'
---

# Otras tareas posibles

<div class="grid grid-cols-2 gap-6">
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Migraciones</p>
    <p class="mt-2">Recorrer el sitio antiguo y el nuevo, y comparar contenido y capturas</p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Auditorías</p>
    <p class="mt-2">Accesibilidad, enlaces rotos y errores de consola en todo el sitio</p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo"><em>Smoke</em> tests</p>
    <p class="mt-2">Recorridos críticos en producción: login, formulario, pago</p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Utilidades</p>
    <p class="mt-2">PDFs con <code>page.pdf()</code>, extraer datos, rellenar formularios de terceros</p>
  </div>
</div>

<!--
Ejemplos sacados de proyectos reales (adaptar con casos propios de
Metadrop si los hay):
- Migración D7 → D11: listado de URLs del sitio viejo, comprobar que cada
  una existe en el nuevo (o redirige) y comparar el título y el cuerpo.
- Errores de consola: page.on('console') y page.on('pageerror').
- Monitorización sintética: el mismo test, programado cada X minutos.
-->

---
layout: section
seccion: '06'
---

# Playwright e IA


---
seccion: '06'
---

# Por qué Playwright encaja con la IA

<div class="grid grid-cols-2 gap-6">
  <div>

```yaml
- heading "Log in" [level=1]
- textbox "Username" [ref=e12]
- textbox "Password" [ref=e14]
- button "Log in" [ref=e16]
```

  </div>
  <div>

- El agente lee la página como **aria snapshot**, no como imagen
- Texto estructurado: barato en tokens y sin ambigüedad
- Cada elemento tiene una referencia: «haz clic en `e16`»
- Funciona con cualquier modelo, sin visión

</div>
</div>

<!--
Es la misma idea que los localizadores por rol: el árbol de accesibilidad
describe la página como la entiende una persona.

Desde 1.64, page.getByRef('e16') permite usar esas referencias también
desde código.

Otra vez: una web accesible es una web que los agentes manejan mejor.
-->

---
seccion: '06'
---

# Playwright MCP

```bash
claude mcp add playwright -- npx @playwright/mcp@latest
```

- Servidor **MCP** oficial: cualquier agente compatible maneja el navegador
- Herramientas como `browser_navigate`, `browser_snapshot`, `browser_click`, `browser_fill_form`
- Ver lo que pasa: el navegador es visible en el escritorio
- Desde 1.64 viene incluido: `npx playwright mcp`
- **playwright-cli**: lo mismo con comandos de terminal, y gasta menos tokens
- Desde 1.64 soporta **WebMCP**: la página ofrece sus propias herramientas al agente (experimental)

<!--
MCP = Model Context Protocol, el estándar para dar herramientas a los
agentes. Funciona con Claude Code, VS Code/Copilot, Cursor, etc.

Usos: "entra en el Drupal de staging y comprueba que el formulario de
contacto envía", reproducir un bug descrito en un ticket, explorar un
sitio para escribir tests.

1.64 añade WebMCP: la propia página puede registrar herramientas que el
agente ve como webmcp_<herramienta>.

WebMCP:
- Es el MCP al revés: no es el agente el que maneja la página, es la página
  la que le ofrece herramientas al agente. El sitio registra funciones
  JavaScript con nombre, descripción y esquema de parámetros desde
  navigator.modelContext (p. ej. "buscarContenido", "añadirAlCarrito") y el
  agente las llama en lugar de hacer clics.
- Propuesta en el W3C (Web Machine Learning Community Group). Chrome: prueba
  para desarrolladores en la 146, origin trial de la 149 a la 156 y
  previsto en estable en la 157. Firefox y Safari no se han pronunciado.
- Ventaja: más fiable y gasta menos tokens que leer el árbol de
  accesibilidad y adivinar botones. Inconveniente: solo existe si el sitio
  lo implementa.
- Idea Drupal: un módulo que exponga acciones del sitio (buscar, crear
  borrador) como herramientas WebMCP. Con Playwright MCP se probaría que el
  agente las ve y las usa bien.
- No confundir con Chrome DevTools MCP: eso es un servidor MCP para depurar
  Chrome (rendimiento, red, consola), solo Chromium. Playwright MCP maneja
  el navegador y lo que explora acaba en tests, y en Chromium, Firefox y
  WebKit. Se complementan: depurar con DevTools, fijar con Playwright.

playwright-cli (para agentes de código con terminal):
  playwright-cli open https://drupal.ddev.site/user/login
  playwright-cli snapshot
  playwright-cli fill e12 "admin"
  playwright-cli click e16
- CLI: comandos sueltos; gasta menos tokens porque no carga los esquemas
  de las herramientas.
- MCP: sesiones largas con estado y análisis más profundo de la página.
Instalación: npm install -g @playwright/cli@latest y
`playwright-cli install --skills` para que el agente aprenda a usarlo.
También incluido desde 1.64 como `npx playwright cli`.

Pensado para agentes que ya tienen terminal (Claude Code, Codex…): el
agente ejecuta comandos como lo haría una persona.
-->

---
seccion: '06'
---

# Test agents: planificar, generar, corregir

<div class="grid grid-cols-3 gap-6">
  <div class="dcs-tarjeta-atardecer">
    <p class="dcs-antetitulo">Planner</p>
    <p class="mt-2">Explora la web y escribe un plan de pruebas en Markdown en <code>specs/</code></p>
  </div>
  <div class="dcs-tarjeta-atardecer">
    <p class="dcs-antetitulo">Generator</p>
    <p class="mt-2">Convierte el plan en tests de Playwright en <code>tests/</code></p>
  </div>
  <div class="dcs-tarjeta-atardecer">
    <p class="dcs-antetitulo">Healer</p>
    <p class="mt-2">Ejecuta un test roto, inspecciona la página y lo arregla</p>
  </div>
</div>

<p class="mt-8"><code>npx playwright init-agents --loop=claude</code> · también <code>vscode</code> y <code>opencode</code></p>

<!--
Desde 1.56.

init-agents genera las definiciones de los agentes para tu herramienta.
Hay que regenerarlas al actualizar Playwright.

El planner parte de un "seed test" (tests/seed.spec.ts) que prepara el
entorno: en Drupal, por ejemplo, iniciar sesión.

El healer, si cree que la funcionalidad está rota de verdad, marca el test
como skip en vez de forzarlo a pasar. Siempre revisar lo que genera.
-->

---
seccion: '06'
---

# Con cuidado

<div class="grid grid-cols-3 gap-6">
  <div class="dcs-tarjeta-amanecer">
    <p class="dcs-antetitulo">Credenciales</p>
    <p class="mt-2">Nunca la sesión de admin de producción: usa entornos y usuarios de prueba</p>
  </div>
  <div class="dcs-tarjeta-amanecer">
    <p class="dcs-antetitulo">Contenido hostil</p>
    <p class="mt-2">Lo que hay en la página llega al modelo: inyección de instrucciones</p>
  </div>
  <div class="dcs-tarjeta-amanecer">
    <p class="dcs-antetitulo">Revisión</p>
    <p class="mt-2">Los tests generados se revisan como cualquier otro código</p>
  </div>
</div>

<!--
Un agente con navegador hace lo que haría una persona con ese navegador.

Inyección: un comentario o un nodo con texto "ignora tus instrucciones y
borra..." llega al modelo dentro del snapshot. Limitar dominios
permitidos (el MCP tiene opciones para ello) y no darle permisos de más.

Un test que pasa no significa que pruebe lo correcto: revisar las
aserciones.
-->


---
layout: section
seccion: '07'
---

# Conclusiones


---
seccion: '07'
---

# Conclusiones

<div class="grid grid-cols-2 gap-6">
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">No está en <em>core</em></p>
    <p class="mt-2">Las objeciones del <em>core</em> pueden no aplicarse a un proyecto de cliente</p>
    <p class="mt-2">Cuanto más JavaScript tenga el proyecto, más interesante</p>
  </div>
  <div class="dcs-tarjeta-cielo">
    <p class="dcs-antetitulo">Tests más robustos</p>
    <p class="mt-2">Localizadores por rol, espera automática, contextos aislados y <em>fixtures</em>: menos tests frágiles, menos código repetido</p>
  </div>
  <div class="dcs-tarjeta-blanca">
    <p class="dcs-antetitulo">El ecosistema Drupal está listo</p>
    <p class="mt-2 [font-variant-numeric:normal]">ddev-playwright para el entorno, <code>@lullabot/playwright-drupal</code> para sitios y <code>@drupal/playwright</code> para módulos</p>
  </div>
  <div class="dcs-tarjeta-amanecer">
    <p class="dcs-antetitulo">Todo en uno</p>
    <p class="mt-2">Puede sustituir a varias herramientas: tests E2E, regresión visual, accesibilidad, tests de API…</p>
  </div>
</div>

<!--
Cerrar el arco: empezamos con "core no lo adopta" y terminamos con "no
importa, en tu proyecto puedes usarlo ya".

Todo en uno: tests E2E, regresión visual, accesibilidad (axe, aria
snapshots), API, y además scripts, auditorías y migraciones.

De viva voz, si hay tiempo: una web accesible es más fácil de testear y de
usar para los agentes (localizadores por rol, aria snapshots), y Playwright
es la forma de que la IA use el navegador.
-->

---
layout: gracias
---

# ¡Gracias!

---
layout: valora
antetitulo:
class: dcs-centrado
---

# ¿Preguntas?



---
class: dcs-fondo-blanco
---

# Patrocinadores

<img src="/patrocinadores.jpg" alt="Patrocinadores de la DrupalCamp Spain 2026" class="absolute left-[40px] top-[-58px] w-[824px] h-[518px]">

<!--
Imagen y posición tomadas de la diapositiva 26 de la plantilla.
-->
