# StarLabs — Estudio de Ingeniería de Producto

Sitio web de **StarLabs**, un estudio especializado en diseño y construcción de software real para negocios reales. Arquitectura, MVP y operación en producción.

## 🚀 Tecnología

- **Framework**: [Vite](https://vitejs.dev/) + [React](https://react.dev/) 18.3
- **Lenguaje**: TypeScript 5.5
- **Enrutamiento**: React Router v6
- **Estilos**: CSS modular con tokens de diseño
- **Build Tool**: Vite 5.4

## 📁 Estructura del Proyecto

```
.
├── components/              # Componentes reutilizables
│   ├── layout/             # Navbar, Footer, ScrollManager
│   ├── sections/           # Secciones de página (Hero, Services, Process, etc)
│   ├── ui/                 # Componentes base (Button, Logo, Tag, etc)
│   ├── cases/              # Componentes para casos de estudio
│   ├── testimonials/       # Testimonios
│   ├── portfolio/          # Componentes del portafolio
│   ├── effects/            # Efectos visuales (parallax, scroll effects)
│   └── seo/                # Meta tags y SEO
├── views/                  # Vistas principales (páginas de la app)
│   ├── HomeView.tsx        # Página de inicio
│   ├── ServiciosView.tsx   # Página de servicios
│   ├── PortafolioView.tsx  # Página de portafolio
│   ├── ContactoView.tsx    # Página de contacto
│   ├── NotFoundView.tsx    # Página 404
│   └── Loading.tsx         # Fallback de carga
├── data/                   # Datos estáticos y constantes
│   ├── socials.ts          # Enlaces de redes sociales
│   └── portfolioProjects.ts # Proyectos del portafolio
├── styles/                 # Estilos globales
│   ├── globals.css         # Estilos base
│   ├── tokens.css          # Tokens de diseño (colores, tipografía, etc)
│   └── *View.css           # Estilos específicos por vista
├── App.tsx                 # Componente raíz con routing
├── main.tsx                # Punto de entrada
├── index.html              # HTML principal
└── vite.config.ts          # Configuración de Vite
```

## 🏗️ Características Principales

### Code Splitting Automático
Las vistas se cargan bajo demanda usando `React.lazy()` y `Suspense`, reduciendo el bundle inicial:

```tsx
const HomeView = lazy(() => import("./views/HomeView"));
```

### Alias de Rutas
Se utiliza el alias `@/` para importes absolutos:

```tsx
import { Navbar } from "@/components/layout/Navbar";
```

### Tokens de Diseño
Sistema centralizado de diseño en `styles/tokens.css` con variables CSS para colores, tipografía y espaciado.

### Componentes Modulares
Cada componente es independiente y reutilizable, siguiendo el patrón de carpetas por funcionalidad.

## 🛠️ Desarrollo

### Requisitos
- Node.js 18+
- npm o yarn

### Instalación

```bash
npm install
```

### Servidor de Desarrollo

```bash
npm run dev
```

El servidor iniciará en `http://localhost:5173` con hot module replacement (HMR).

### Build para Producción

```bash
npm run build
```

Ejecuta la verificación de tipos (`tsc --noEmit`) y construye el proyecto optimizado en la carpeta `dist/`.

### Preview de Build

```bash
npm run preview
```

Previsualiza la build de producción localmente.

## 📋 Verificación de Tipos

El proyecto está configurado con `strict: true` en TypeScript. Antes de hacer commit, asegúrate de que no hay errores de tipo:

```bash
npx tsc --noEmit
```

## 🌐 Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Página de inicio |
| `/servicios` | Servicios ofrecidos |
| `/portafolio` | Proyectos completados |
| `/contacto` | Formulario de contacto |
| `*` | Página 404 (no encontrada) |

## 🎨 Diseño y Estilos

El proyecto usa un sistema de diseño basado en tokens CSS:

- **Tipografía**: Space Grotesk (títulos), Inter (cuerpo), JetBrains Mono (código)
- **Colores**: Definidos en `tokens.css`
- **Spacing**: Escala consistente en `tokens.css`

Las fuentes se cargan desde Google Fonts en `index.html`.

## 📱 SEO y Meta Tags

La carpeta `components/seo/` contiene el componente `Meta` que gestiona los meta tags de las páginas.

## 🚀 Deploy en Vercel

El proyecto está optimizado para desplegar en Vercel. Ver [`VERCEL_DEPLOYMENT_RULES.md`](./VERCEL_DEPLOYMENT_RULES.md) para los requisitos y mejores prácticas.

## 📝 Convenciones de Código

- **TypeScript Strict**: Todo el código es type-safe
- **Naming**: camelCase para variables/funciones, PascalCase para componentes
- **Estructura**: Componentes pequeños y enfocados
- **Imports**: Preferir rutas relativas en una carpeta, rutas absolutas (@/) entre carpetas

## 📄 Licencia

Todos los derechos reservados © StarLabs
