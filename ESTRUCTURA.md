# Estructura del proyecto — StarLabs.dev

> **Estado:** este documento define la estructura **objetivo**. El repositorio
> hoy está organizado por tipo (`components/sections/`, `components/cases/`,
> `data/` global) y todavía **no** tiene esta forma. La tabla de
> [Migración](#migración-desde-la-estructura-actual) dice qué va a dónde.
> Todo archivo nuevo se crea ya con esta estructura.

---

## Las cuatro capas

El proyecto se organiza en cuatro capas, de más concreta a más genérica:

| Capa | Carpeta | Qué contiene | Se reutiliza |
|---|---|---|---|
| **Rutas** | `app/` | URLs, metadata, layout de Next | — |
| **Vistas** | `views/` | La composición de cada página | No |
| **Secciones** | `sections/` | Cada bloque de la web, con todo lo suyo | No |
| **Componentes** | `components/` | Piezas que usan varias secciones | Sí |

La regla para decidir dónde va un archivo es una sola pregunta:

> **¿Lo usa una sola sección, o lo usan varias?**

- **Una sola** → vive dentro de esa sección, en `sections/<seccion>/`.
- **Varias** → sube a `components/`, `styles/`, `assets/` o `data/` de la raíz.

Cuando dudes, empieza dentro de la sección. Ya lo subirás el día que una segunda
sección lo necesite. Es mucho más fácil subir algo que bajarlo.

---

## Árbol

```
nextjs-starlabs/
│
├── app/                          # RUTAS. Delgado: solo envuelve vistas.
│   ├── layout.tsx
│   ├── page.tsx                  # → <HomeView />
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── servicios/page.tsx        # → <ServiciosView />
│   ├── portafolio/page.tsx       # → <PortafolioView />
│   └── contacto/page.tsx         # → <ContactoView />
│
├── views/                        # VISTAS. Qué secciones lleva cada página.
│   ├── HomeView.tsx
│   ├── ServiciosView.tsx
│   ├── PortafolioView.tsx
│   └── ContactoView.tsx
│
├── sections/                     # SECCIONES. El corazón del proyecto.
│   ├── hero/
│   ├── identidad/
│   ├── proceso/
│   ├── servicios/
│   ├── portafolio/
│   ├── contacto/
│   └── cta/
│
├── components/                   # COMPONENTES REUTILIZABLES (globales)
│   ├── ui/                       # Button, Tag, Status, Eyebrow, Reveal
│   └── layout/                   # Navbar, Footer
│
├── styles/                       # Estilos globales
│   ├── tokens.css                # Colores, tipografías, espaciados
│   └── globals.css
│
├── assets/                       # Imágenes usadas por varias secciones
│   └── logo/
│
├── data/                         # Datos que cruzan secciones
│   ├── services.ts
│   └── socials.ts
│
├── public/                       # Archivos servidos por URL directa
│   └── brand/
│
├── ESTRUCTURA.md                 # este archivo
└── StarLabs — Brand & Design System v1.0.md
```

### ⚠️ Sobre el nombre `views/`

Esta es la carpeta de "pages" del proyecto. **No puede llamarse `pages/`.**

Next.js reserva `pages/` (en la raíz y en `src/`) para el *Pages Router*, el
sistema de rutas antiguo. Como este proyecto usa el *App Router* (`app/`), crear
una carpeta `pages/` haría que Next intente convertir cada archivo de dentro en
una URL, y el build fallaría.

`views/` cumple exactamente la misma función sin ese conflicto. Si prefieres
conservar la palabra, `components/pages/` también es segura: Next solo mira
`pages/` cuando está en la raíz o en `src/`, no anidada.

---

## Anatomía de una sección

Cada carpeta en `sections/` tiene siempre la misma forma:

```
sections/servicios/
├── components/          # Los .tsx de esta sección
│   ├── ServicesGrid.tsx
│   └── ServiceCard.tsx
├── styles/              # Un .css por componente, mismo nombre
│   ├── ServicesGrid.css
│   └── ServiceCard.css
├── assets/              # Imágenes/iconos que solo usa esta sección
│   └── icono-sistemas.svg
├── data/                # Contenido y tipos de esta sección
│   └── categorias.ts
└── index.ts             # La puerta de entrada (ver abajo)
```

**Las cuatro carpetas son opcionales.** Si una sección no tiene imágenes
propias, no creas un `assets/` vacío. Solo `components/` e `index.ts` son
obligatorios.

### El `index.ts` — la puerta de entrada

Cada sección expone lo que el resto del proyecto puede usar, y nada más:

```ts
// sections/servicios/index.ts
export { ServicesGrid } from "./components/ServicesGrid";
export type { Categoria } from "./data/categorias";
```

Esto define la **frontera** de la sección. Desde fuera se importa la sección
entera, nunca un archivo suelto de su interior:

```tsx
// ✅ Bien — entras por la puerta
import { ServicesGrid } from "@/sections/servicios";

// ❌ Mal — te metes por la ventana
import { ServicesGrid } from "@/sections/servicios/components/ServicesGrid";
```

La ventaja práctica: mientras el `index.ts` siga exportando lo mismo, puedes
renombrar, partir o reorganizar archivos dentro de la sección sin romper nada
fuera de ella.

> El alias `@/` ya está configurado en `tsconfig.json` y apunta a la raíz.
> Úsalo siempre en vez de `../../`.

---

## Rutas y vistas: por qué están separadas

Hoy `app/page.tsx` tiene ~180 líneas: metadata, datos de iconos, maquetado de
cinco secciones y textos. Mezcla tres responsabilidades distintas.

Con la separación, cada archivo hace una sola cosa:

```tsx
// app/page.tsx — RUTA: la URL, la metadata. Nada más.
import type { Metadata } from "next";
import { HomeView } from "@/views/HomeView";

export const metadata: Metadata = {
  title: "StarLabs — ¿Tienes una idea? Hagámosla realidad",
  description: "StarLabs crea contigo páginas web, aplicaciones y sistemas...",
};

export default function Page() {
  return <HomeView />;
}
```

```tsx
// views/HomeView.tsx — VISTA: qué secciones lleva la home y en qué orden.
import { Hero } from "@/sections/hero";
import { Identidad } from "@/sections/identidad";
import { Proceso } from "@/sections/proceso";
import { Servicios } from "@/sections/servicios";
import { Portafolio } from "@/sections/portafolio";
import { CTABand } from "@/sections/cta";

export function HomeView() {
  return (
    <>
      <Hero />
      <Identidad />
      <Proceso />
      <Servicios />
      <Portafolio />
      <CTABand />
    </>
  );
}
```

Leyendo la vista entiendes la página completa de un vistazo. Reordenar la home
es mover una línea. Y el maquetado interno de cada bloque —los `<section>`, los
`Eyebrow`, los títulos, el número de índice— baja a su propia sección, que es
donde se mantiene.

---

## Qué sube a la raíz y qué se queda en la sección

`components/` es para lo genérico y reutilizable, no para "lo que no supe dónde
poner". Antes de subir algo, comprueba que **de verdad** lo usan dos secciones.

| Sube a la raíz | Se queda en la sección |
|---|---|
| `Button`, `Tag`, `Status` — piezas sin contenido propio | `ProcessStep` — solo existe dentro de Proceso |
| `tokens.css`, `globals.css` | `Hero.css` |
| El logo de StarLabs | La foto de un caso concreto |
| `socials.ts` (Footer + Contacto) | Los pasos del proceso |

**Regla del contenido:** un componente de `components/ui/` no debe contener
texto de la marca. Recibe todo por props. Si tiene copy escrito adentro,
pertenece a una sección.

### El caso de `data/`

Un dato vive en la sección que lo usa. Sube a `data/` de la raíz **solo** cuando
lo consuma más de una:

- `services.ts` → `data/` — lo usan Servicios, el Footer y la home.
- `socials.ts` → `data/` — lo usa el Footer, y luego Contacto.
- `caseStudies.ts` → `sections/portafolio/data/` — solo lo usa Portafolio.

Todo archivo de datos sigue el patrón que ya usamos: una `interface` exportada,
un array con tipo explícito, y un comentario arriba diciendo qué es y de dónde
sale el contenido.

```ts
export interface Service { id: string; name: string; /* ... */ }
export const services: Service[] = [ /* ... */ ];
```

### El caso de `assets/` vs `public/`

Se distinguen por **cómo se consumen**, no por qué son:

- **`assets/`** (de sección o de raíz) — se importan desde el código. Next les
  pone hash, los optimiza y avisa en build si borras uno que se usa. Es el caso
  normal.

  ```tsx
  import icono from "../assets/icono-sistemas.svg";
  ```

- **`public/`** — se sirven por URL fija. Solo para lo que necesita una ruta
  estable: favicon, `og-image.png`, `robots.txt`, algo enlazado desde fuera.

Ante la duda, `assets/`.

---

## Cómo agregar una sección nueva

Ejemplo: una sección "Equipo".

1. **Crea la carpeta** con lo mínimo:

   ```
   sections/equipo/
   ├── components/Equipo.tsx
   ├── styles/Equipo.css
   ├── data/miembros.ts
   └── index.ts
   ```

2. **Escribe el componente.** Importa su propio CSS, como ya hacen todos:

   ```tsx
   import { miembros } from "../data/miembros";
   import "../styles/Equipo.css";

   export function Equipo() { /* ... */ }
   ```

3. **Exporta desde `index.ts`:**

   ```ts
   export { Equipo } from "./components/Equipo";
   ```

4. **Móntala en la vista.** La sección no decide dónde aparece:

   ```tsx
   // views/HomeView.tsx
   import { Equipo } from "@/sections/equipo";
   ```

5. **Prefija sus clases CSS** con el nombre de la sección (`.equipo-grid`,
   `.equipo-card`) para que no choquen con las de otra.

---

## Convenciones

| Qué | Regla | Ejemplo |
|---|---|---|
| Carpeta de sección | minúsculas, en español, como la sección en la web | `portafolio/` |
| Componente | `PascalCase.tsx`, export nombrado | `ServicesGrid.tsx` |
| Vista | `PascalCase` + sufijo `View` | `HomeView.tsx` |
| CSS | mismo nombre que su componente | `ServicesGrid.css` |
| Datos | `camelCase.ts`, en plural | `caseStudies.ts` |
| Clases CSS | prefijo de sección, kebab-case | `.hero-line` |
| Imports | siempre `@/`, nunca `../../` | `@/sections/hero` |

**Reglas que sostienen la estructura:**

1. Una sección **no importa** de otra sección. Si dos necesitan lo mismo, eso va
   a `components/` o `data/` de la raíz.
2. `app/` solo lleva metadata y renderiza una vista. Sin maquetado propio.
3. Las vistas componen y pasan props. Sin lógica ni CSS propio.
4. Los colores, tipografías y espaciados salen de `styles/tokens.css`. Nada de
   valores en crudo en el CSS de una sección.
5. Cada componente importa su propio CSS. No hay un archivo central de imports.

---

## Migración desde la estructura actual

| Hoy | Destino |
|---|---|
| `components/sections/Hero.*`, `ProductShowcase.*` | `sections/hero/` |
| `components/effects/HeroScrollFx.tsx` | `sections/hero/components/` |
| `components/sections/Identity.*` | `sections/identidad/` |
| `components/sections/Process.*` | `sections/proceso/` |
| `components/sections/ServicesGrid.*` | `sections/servicios/` |
| `components/cases/CaseStudy.*`, `Metric.*`, `ProjectTeaser.*` | `sections/portafolio/` |
| `components/sections/ContactForm.*` | `sections/contacto/` |
| `components/sections/CTABand.*` | `sections/cta/` |
| `components/ui/*` | se queda igual ✅ |
| `components/layout/*` | se queda igual ✅ |
| `styles/*` | se queda igual ✅ |
| `data/services.ts`, `data/socials.ts` | se quedan igual ✅ |
| `data/caseStudies.ts` | `sections/portafolio/data/` |
| Maquetado dentro de `app/page.tsx` | se reparte entre `views/HomeView.tsx` y cada sección |
| `app/*/page.css` | al `styles/` de la sección que corresponda |

Tres detalles a resolver durante la migración:

- **`app/page.tsx`** tiene el array `TAGLINE_ITEMS` con iconos SVG en línea.
  Eso es contenido del Hero: va a `sections/hero/data/tagline.tsx`.
- **`app/contacto/page.css` y `app/portafolio/page.css`** contienen estilos que
  hoy viven en la ruta. Deben repartirse al `styles/` de su sección; en `app/`
  no debería quedar CSS.
- **`assets/1.png`–`4.png`** y la imagen con nombre de ChatGPT necesitan nombres
  descriptivos y repartirse a la sección que las usa.

La migración se puede hacer sección por sección: mover una, arreglar sus
imports, verificar con `npx tsc --noEmit`, y seguir con la siguiente.
