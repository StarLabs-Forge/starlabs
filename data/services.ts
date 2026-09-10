// Las cuatro cosas que StarLabs construye — mismas categorías que la fila del
// Hero ("Web · Apps · Sistemas · Productos propios"). Fuente única para el
// resumen en Home, para /servicios y para el footer, evita que diverjan en
// texto o en el link al que apuntan.
export interface Service {
  id: string;
  name: string;
  hook: string;
  description: string;
  // Página propia de esta categoría — la card ya no redirige a /contacto,
  // cada una es puerta de entrada a su propia página (ver App.tsx).
  path: string;
}

export const services: Service[] = [
  {
    id: "web",
    name: "Web",
    hook: "Tu presencia digital.",
    description: "Sitios y plataformas web pensados para crecer.",
    path: "/servicios/web",
  },
  {
    id: "apps",
    name: "Apps",
    hook: "Tu idea, convertida en producto.",
    description: "Aplicaciones diseñadas para tus usuarios.",
    path: "/servicios/apps",
  },
  {
    id: "sistemas",
    name: "Sistemas",
    hook: "Más control. Menos trabajo.",
    description: "Sistemas que organizan y automatizan tus procesos.",
    path: "/servicios/sistemas",
  },
  {
    id: "productos",
    name: "Productos propios",
    hook: "Nuestras ideas, hechas realidad.",
    description: "Productos y proyectos que nacen dentro de StarLabs.",
    path: "/productos",
  },
];
