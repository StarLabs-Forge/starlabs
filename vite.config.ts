import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

// El proyecto no usa src/: las capas (views/, components/, data/, styles/)
// viven en la raíz, tal como describe ESTRUCTURA.md. Vite lo soporta sin más
// que dejar index.html en la raíz apuntando a /main.tsx.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(".", import.meta.url)),
    },
  },
});
