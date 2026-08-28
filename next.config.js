/** @type {import('next').NextConfig} */
// NEXT_DIST_DIR permite lanzar un build de verificación en otra carpeta
// (ej. .next-check) sin pisar el .next que usa `next dev`. Mezclar artefactos
// de dev y de producción en el mismo .next rompe el dev server con errores
// tipo "TypeError: e[o] is not a function" al leer los manifests.
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

module.exports = nextConfig;
