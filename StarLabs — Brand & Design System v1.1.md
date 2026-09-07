# StarLabs — Brand & Design System v1.1

> **Changelog v1.0 → v1.1:** v1.0 definía la paleta y las reglas de forma/motion en abstracto, pero el isotipo real seguía siendo un PNG generado por IA (glow permanente, bisel 3D, sin versión plana) que violaba la sección 7 de este mismo documento. Esta versión cierra esa brecha: define el isotipo final, sus reglas de uso concretas, y marca qué queda deprecado. Esta es ahora la **única fuente de verdad de marca** — ver nota de estado al final.

---

## 1. Arquitectura de marca

StarLabs utiliza un sistema de identidad compuesto por tres variantes:

### A. Logo completo
Uso institucional y de alto impacto.

Incluye:
- Isotipo detallado (ver sección 1bis).
- Wordmark STARLABS.
- `BUILD · AUTOMATE · EVOLVE`.
- `TECHNOLOGY FOR A BETTER TOMORROW`.

**Usos:** portadas, presentaciones, pitch decks, piezas corporativas, campañas.

### B. Logo simple
Identidad corporativa principal para el uso cotidiano.

Incluye:
- Isotipo (ver sección 1bis).
- Wordmark STARLABS.
- `TECNOLOGÍA · AUTOMATIZACIÓN · RESULTADOS`.

**Usos:** web, productos, dashboards, documentación, redes, GitHub y material corporativo.

### C. Isotipo
Símbolo independiente de StarLabs.

**Usos:** favicon, app icon, avatar, loading states, botones de marca, productos y espacios reducidos.

---

## 1bis. El isotipo — definición final

**Concepto:** una estrella de 8 facetas (triángulos, cada uno un tono distinto del degradado de marca — simula caras de cristal cortado, no un relleno plano) cuya punta inferior se resuelve en una **cola en S** — doble lectura: la estrella de "Star" y la inicial de "Labs" en el mismo trazo. Esto reemplaza cualquier lectura de "estrella genérica" por un símbolo que solo puede ser StarLabs.

**Por qué existe esta sección:** las primeras exploraciones (PNG generados por IA, `logo/ChatGPT Image *.png`) tenían la idea correcta pero la ejecución equivocada — glow permanente, bisel 3D dependiente de resolución, sin versión plana, no vectorial. Quedaron descartadas como asset final; se conservan solo como referencia histórica de dirección creativa.

**Archivos fuente (única fuente de verdad del símbolo):**
- `components/ui/Logo.tsx` — componente React, isotipo completo (8 facetas + cola en S + estela + chispas). Úsalo en cualquier contexto de producto/web.
- `public/brand/isotipo.svg` — mismo símbolo, como SVG estático (decks, README, piezas fuera de la app).
- `public/favicon.svg` (+ `.ico`, `-16.png`, `-32.png`, `-48.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`) — **variante reducida**: sin chispas, sin estela, sin costuras entre facetas. A 16–32px esos detalles se pierden y ensucian la silueta; no es una versión recortada del isotipo completo, es un dibujo aparte optimizado para tamaño chico.

**Regla:** ningún nuevo uso del isotipo se basa en los PNG de `logo/` ni en `assets/1.png`–`4.png`/`ChatGPT Image *.png` heredados. Esos archivos quedan como material de referencia de la exploración inicial, no como asset de marca.

---

## 1ter. Personalidad de marca

**Lo que StarLabs debe transmitir, en este orden:**
1. Confianza / seriedad técnica — la marca de un ingeniero, no de una agencia de humo.
2. Innovación / vanguardia — que va adelante, se anima a probar cosas nuevas.
3. Cercanía / accesibilidad — que hay una persona real detrás, no una corporación fría.

**Dónde vive cada uno, para que no compitan por el mismo pixel:**
- Confianza + innovación → sistema visual base ya implementado: paleta cyan/blue/violet/purple, isotipo faceteado, geometría precisa, mono para estado de sistema.
- Cercanía → **no** vive en el color base. Vive en (a) tono de copy — primera persona plural ("construimos"), cero buzzwords tipo "sinergia/disruptivo/de clase mundial"; (b) un acento cálido secundario (bronze/terracota `#E3A567`/`#C17F3E`, heredado del sistema anterior) reservado *exclusivamente* para testimonios, contacto, y nombres reales de casos de portafolio — nunca en nav, CTAs primarios ni UI de estado.

---

## 2. Modos de interfaz

StarLabs tendrá dos modos oficiales:

### DARK MODE

El modo oscuro será la identidad visual predominante de StarLabs.

**Base:** `--bg-950: #050816` · `--bg-900: #0B1024` · `--bg-800: #111831` · `--bg-750: #171F3D` · `--line: #263158`

**Texto:** `--text-100: #F5F7FF` · `--text-300: #B8C1DA` · `--text-500: #707B9D`

**Brand:** `--cyan: #20D9FF` · `--blue: #287BFF` · `--violet: #7657FF` · `--purple: #A855F7`

Gradiente principal: `#20D9FF → #287BFF → #7657FF → #A855F7`

El dark mode representa: **tecnología + profundidad + exploración + innovación.**

### LIGHT MODE

No es un dark mode invertido. Conserva la identidad pero con mayor claridad y contraste.

**Base:** `#F7F9FC` / `#FFFFFF` / `#EEF2FA` / `#D9E0EF`

**Texto:** `#0B1020` / `#46516B` / `#7A849C`

**Brand:** `--cyan: #079CC2` · `--blue: #2563EB` · `--violet: #6547D9` · `--purple: #8B3FD9`

Gradiente: `#079CC2 → #2563EB → #6547D9 → #8B3FD9`

El light mode representa: **claridad + accesibilidad + precisión + profesionalismo.**

**Estado de implementación:** `styles/tokens.css` ya usa la paleta dark de esta sección como tokens base del proyecto. La variante light de estos mismos colores está definida aquí pero **aún no tiene un toggle implementado en la UI** — es la especificación a seguir el día que se construya.

---

## 3. Reglas del isotipo por modo

### Dark
- Isotipo completo (con estela y chispas).
- Wordmark en gradiente claro (`background-clip: text` sobre el gradiente dark).
- Fondos oscuros (`--bg-950`/`--bg-900`).

### Light
- Mismo isotipo — el gradiente cambia a los tonos light de la sección 2, más saturados para mantener contraste sobre blanco (ver `theme-card.light` de la propuesta revisada).
- Wordmark con el gradiente light equivalente.
- Fondos blancos o `--bg-750`-equivalente claro.

### Regla fundamental (ya cumplida por el SVG actual)
El isotipo **no depende del glow para ser reconocible.** El glow es una capa de motion opcional (hover/focus), nunca parte de la silueta base — ver sección 10bis.

---

## 4. Tipografía

**Display:** Space Grotesk 600/700 — títulos y wordmark.
**UI/Producto:** Inter 400/500/600.
**Utilitaria/etiquetas:** JetBrains Mono 400/500/700 — eyebrows, tags, labels, código. (Ya en uso en `tokens.css` y en todo el sitio como lenguaje de "estado explícito": `.eyebrow`, `.tag`, `.modstatus`.)

### Escala
Display 56–72px · H1 40–48px · H2 32–36px · H3 24–28px · Body 16px · Small 14px · Caption 12px.

---

## 5. Espaciado

Múltiplos de 4: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96`.

---

## 6. Forma visual

StarLabs utiliza:
- Bordes ligeramente redondeados (`--radius: 3px`, `--radius-lg: 6px` — no border-radius grande tipo SaaS).
- Geometría limpia, contraste elevado, líneas finas.
- Gradientes usados como acento — no en absolutamente todo.
- Glow con moderación — solo en hover/focus de elementos interactivos o de marca, nunca ambiental/permanente.
- Mucho espacio negativo.

**Evitar (regla que el isotipo final ahora sí cumple):**
- Exceso de neón.
- Sombras pesadas / bisel 3D.
- Gradientes en absolutamente todo.
- Interfaces saturadas.
- Efectos 3D innecesarios.

La estética debe sentirse: **futurista, pero profesional.** No queremos que StarLabs parezca una página de gaming de 2012.

---

## 7. Iconografía

Minimalista, geométrica, preferentemente outline, stroke consistente, sin exceso de detalle. El isotipo StarLabs es la referencia geométrica de toda la iconografía de marca.

---

## 8. Design Tokens

```text
color.background        color.brand.cyan       radius.sm
color.surface           color.brand.blue       radius.md
color.text.primary      color.brand.violet     spacing.1…14
color.text.secondary    color.brand.purple     shadow.sm/md/lg
                                                motion.fast/normal/slow
```

**Estado:** ya implementados como custom properties en `styles/tokens.css` (naming ligeramente distinto pero 1:1 en valores — `--bg-950`, `--accent`, `--space-1`…`--space-14`, etc.). No hace falta una segunda capa de tokens: `tokens.css` **es** la implementación de esta sección.

---

## 9. Componentes de interfaz

Buttons, Inputs, Cards, Modals, Navigation, Sidebar, Tabs, Dropdowns, Badges, Alerts, Tables, Tooltips, Loading states, Empty states, Toast notifications — todos con variantes Light / Dark / Hover / Active / Disabled / Focus.

**Estado:** Button, Tag, Status, Eyebrow y Navbar/Footer ya construidos en `components/ui/` y `components/layout/`. El resto de la lista queda pendiente de construirse conforme el producto lo requiera (no antes — ver regla de "no over-engineering" del proyecto).

---

## 10. Motion

La animación comunica tecnología sin convertirse en espectáculo.

**Principios:** Entrada → respuesta → transición → estabilización.

- Microinteracciones rápidas, transiciones suaves, hover sutil.
- Glow dinámico únicamente en elementos importantes.
- Movimiento orbital reservado para branding (si se usa, ver 1bis — no forma parte del isotipo actual).
- Evitar animaciones permanentes que distraigan del producto.
- Respetar `prefers-reduced-motion` en todo lo nuevo, sin excepción.

### 10bis. Motion del isotipo — regla concreta ya implementada

`components/ui/Logo.tsx` + `Logo.css`:
- En reposo: sin glow, sin animación ambiental. La única animación de entrada (`logoIn`, fade + scale al montar) vive en `Navbar.css` sobre `.mark` y ya existía antes de este símbolo.
- En hover/focus del link que lo contiene: la cola en S recibe un `drop-shadow` sutil (glow), 0.4s, `--ease`. Se apaga completo bajo `prefers-reduced-motion`.
- Este es el único lugar del sitio donde el isotipo "brilla", y es intencional: confirma interactividad, no decora.

### 10ter. Motion — dirección definida

Se evaluó y **se descartó explícitamente** el real-time rendering (WebGL/Three.js, escenas 3D reales) como dirección de marca — no por limitación técnica sino por costo de implementación y mantenimiento desproporcionado para el tamaño del equipo (sin rol dedicado a 3D, riesgo de performance en gama media, que son los dispositivos de los clientes reales).

Dirección elegida: **scrollytelling** — parallax y reveals cinematográficos activados por scroll, extendiendo lo que ya existe (`HeroScrollFx` + `Reveal`) en vez de agregar una librería nueva. Más secciones con profundidad de scroll, capas moviéndose a velocidades distintas, sin WebGL.

**Estado: parcialmente implementado.** `HeroScrollFx` cubre la transición Hero → Sobre en Home. `SectionParallax` (`components/effects/SectionParallax.tsx`) extiende el mismo patrón a Identidad, Proceso y Servicios: el número de fondo (`.section-index`) se mueve a distinta velocidad que el contenido mientras la sección cruza el viewport, vía la custom property `--section-progress`. Ambos se apagan solos bajo `prefers-reduced-motion` (nunca escriben la property, el CSS cae a su valor por defecto = sin movimiento). Pendiente: Portafolio/CaseStudy todavía no usa `.section-deco`, así que ahí no hay profundidad de scroll — solo el fade-up genérico de `Reveal`.

---

## 11. Responsive

Mobile / Tablet / Desktop / Wide Desktop. El logo completo no se usa cuando el espacio es insuficiente.

**Prioridad:** Logo completo → Logo simple → Isotipo, según disponibilidad de espacio (navbar = isotipo + wordmark = "Logo simple" sin tagline).

---

## 12. Estructura futura

**Brand Identity** → Logo → Color → Typography → Iconography → Motion
**Design System** → Tokens → Components → Patterns → Layout → Accessibility
**Product UI** → Web → Dashboard → SaaS → Mobile → Internal Tools

---

## 13. Principio rector

> **BUILD · AUTOMATE · EVOLVE**

StarLabs no debe verse únicamente como una empresa "de tecnología". La identidad debe comunicar una empresa que **construye sistemas, automatiza procesos y evoluciona soluciones.**

---

## 14. Estado de la documentación de marca (leer antes de tocar nada de branding)

- **Este documento (`Brand & Design System v1.1`) es la única fuente de verdad de identidad visual de StarLabs.**
- `docs/DESIGN_SYSTEM.md` (paleta bronze/warm, "ingeniero de sistemas, no agencia creativa") queda **deprecado** — describía una dirección de marca que el código ya no sigue desde que `tokens.css` migró a la paleta cyan/blue/violet/purple de este documento. Se conserva como archivo histórico, marcado con un aviso al inicio; no se sigue para trabajo nuevo.
- `docs/MIGRATION_TO_NEXT.md` describe una migración a Next.js que **no es la que ocurrió** — el proyecto real es Vite + React Router (ver `ESTRUCTURA.md`, que sí es vigente). Queda marcado como histórico por la misma razón.
- Cualquier logo, color o regla de forma que aparezca en un archivo no listado aquí como vigente (incluyendo cualquier PNG suelto en `logo/` o `assets/`) se considera exploración descartada, no especificación.
