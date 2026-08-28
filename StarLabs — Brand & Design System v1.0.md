# StarLabs — Brand & Design System v1.0

## 1. Arquitectura de marca

StarLabs utiliza un sistema de identidad compuesto por tres variantes:

### A. Logo completo
Uso institucional y de alto impacto.

Incluye:
- Isotipo detallado.
- Wordmark STARLABS.
- `BUILD · AUTOMATE · EVOLVE`.
- `TECHNOLOGY FOR A BETTER TOMORROW`.

**Usos:** portadas, presentaciones, pitch decks, piezas corporativas, campañas y hero sections.

### B. Logo simple
Identidad corporativa principal para el uso cotidiano.

Incluye:
- Isotipo simplificado.
- Wordmark STARLABS.
- `TECNOLOGÍA · AUTOMATIZACIÓN · RESULTADOS`.

**Usos:** web, productos, dashboards, documentación, redes, GitHub y material corporativo.

### C. Isotipo
Símbolo independiente de StarLabs.

**Usos:** favicon, app icon, avatar, loading states, botones de marca, productos y espacios reducidos.

---

# 2. Modos de interfaz

StarLabs tendrá dos modos oficiales:

## DARK MODE

El modo oscuro será la identidad visual predominante de StarLabs.

### Base
- Background principal: `#050816`
- Background secundario: `#0B1024`
- Surface: `#111831`
- Surface elevada: `#171F3D`
- Border: `#263158`

### Texto
- Primary: `#F5F7FF`
- Secondary: `#B8C1DA`
- Muted: `#707B9D`

### Brand
- Cyan: `#20D9FF`
- Blue: `#287BFF`
- Violet: `#7657FF`
- Purple: `#A855F7`

El gradiente principal será:

`#20D9FF → #287BFF → #7657FF → #A855F7`

El dark mode representa:
**tecnología + profundidad + exploración + innovación.**

---

# 3. LIGHT MODE

El modo claro no será simplemente invertir los colores del dark mode.

Debe conservar la identidad StarLabs pero con mayor claridad y contraste.

### Base
- Background principal: `#F7F9FC`
- Background secundario: `#FFFFFF`
- Surface: `#FFFFFF`
- Surface elevada: `#EEF2FA`
- Border: `#D9E0EF`

### Texto
- Primary: `#0B1020`
- Secondary: `#46516B`
- Muted: `#7A849C`

### Brand

Se mantienen los colores principales de marca:

- Cyan: `#079CC2`
- Blue: `#2563EB`
- Violet: `#6547D9`
- Purple: `#8B3FD9`

Gradiente:

`#079CC2 → #2563EB → #6547D9 → #8B3FD9`

El light mode representa:

**claridad + accesibilidad + precisión + profesionalismo.**

---

# 4. Reglas de los logos

## Dark

Preferencia:
- Logo original con elementos luminosos.
- Wordmark claro.
- Gradientes completos.
- Fondos oscuros.

## Light

Preferencia:
- Isotipo con menor glow.
- Wordmark oscuro o combinado.
- Gradiente ligeramente más saturado.
- Fondos blancos o gris muy claro.

### Regla fundamental

El logo nunca debe depender exclusivamente del glow para ser reconocible.

Debe funcionar también en una versión plana.

---

# 5. Tipografía

La identidad tipográfica debe transmitir:

**precisión + tecnología + modernidad.**

### Display / Branding
Una tipografía geométrica futurista para títulos y wordmark.

Características:
- Geométrica.
- Limpia.
- Ancho medio.
- Formas angulares controladas.

### UI / Producto
Una sans-serif altamente legible.

Recomendación inicial:

**Inter**

Pesos:
- 400 — Regular
- 500 — Medium
- 600 — Semibold
- 700 — Bold

### Escala

- Display: 56–72 px
- H1: 40–48 px
- H2: 32–36 px
- H3: 24–28 px
- Body: 16 px
- Small: 14 px
- Caption: 12 px

---

# 6. Espaciado

Sistema basado en múltiplos de 4:

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96`

Esto permitirá que el sistema sea consistente tanto en web como en aplicaciones.

---

# 7. Forma visual

StarLabs utilizará:

- Bordes ligeramente redondeados.
- Geometría limpia.
- Contraste elevado.
- Líneas finas.
- Gradientes utilizados como acento.
- Glow utilizado con moderación.
- Mucho espacio negativo.

Evitar:

- Exceso de neón.
- Sombras pesadas.
- Gradientes en absolutamente todo.
- Interfaces saturadas.
- Efectos 3D innecesarios.

La estética debe sentirse:

**futurista, pero profesional.**

No queremos que StarLabs parezca una página de gaming de 2012.

---

# 8. Componentes de interfaz

El sistema deberá definir posteriormente:

- Buttons
- Inputs
- Cards
- Modals
- Navigation
- Sidebar
- Tabs
- Dropdowns
- Badges
- Alerts
- Tables
- Tooltips
- Loading states
- Empty states
- Toast notifications

Todos deberán tener variantes:

**Light / Dark / Hover / Active / Disabled / Focus**

---

# 9. Iconografía

Los iconos deben ser:

- Minimalistas.
- Geométricos.
- Preferentemente outline.
- Stroke consistente.
- Sin exceso de detalle.

El isotipo StarLabs será la referencia geométrica de la iconografía de marca.

---

# 10. Motion

La animación deberá comunicar tecnología sin convertirse en espectáculo.

Principios:

**Entrada → respuesta → transición → estabilización**

Preferencias:
- Microinteracciones rápidas.
- Transiciones suaves.
- Hover sutil.
- Glow dinámico únicamente en elementos importantes.
- Movimiento orbital reservado para branding.

Evitar animaciones permanentes que distraigan del producto.

---

# 11. Responsive

El sistema debe diseñarse desde el inicio para:

- Mobile
- Tablet
- Desktop
- Wide Desktop

El logo completo no debe utilizarse cuando el espacio sea insuficiente.

Prioridad:

`Logo completo → Logo simple → Isotipo`

según disponibilidad de espacio.

---

# 12. Design Tokens

La implementación futura deberá convertir estos valores en tokens:

```text
color.background
color.surface
color.text.primary
color.text.secondary

color.brand.cyan
color.brand.blue
color.brand.violet
color.brand.purple

radius.sm
radius.md
radius.lg

spacing.1
spacing.2
spacing.3
spacing.4
...

shadow.sm
shadow.md
shadow.lg

motion.fast
motion.normal
motion.slow
```

El objetivo es que cambiar el tema no implique modificar componente por componente.

---

# 13. Estructura futura

StarLabs deberá evolucionar hacia:

**Brand Identity**
→ Logo  
→ Color  
→ Typography  
→ Iconography  
→ Motion  

**Design System**
→ Tokens  
→ Components  
→ Patterns  
→ Layout  
→ Accessibility  

**Product UI**
→ Web  
→ Dashboard  
→ SaaS  
→ Mobile  
→ Internal Tools  

La identidad visual será la capa superior y el Design System será su traducción técnica.

---

# 14. Principio rector

> **BUILD · AUTOMATE · EVOLVE**

StarLabs no debe verse únicamente como una empresa "de tecnología".

La identidad debe comunicar una empresa que:

**construye sistemas, automatiza procesos y evoluciona soluciones.**