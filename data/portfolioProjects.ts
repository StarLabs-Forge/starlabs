// Lista liviana para el grid de /portafolio (una card por proyecto StarLabs,
// en lenguaje simple orientado a quien va a USAR el producto, no a quien lo
// construyó). El detalle técnico completo vive en data/caseStudies.ts y solo
// se muestra si el proyecto tiene caseStudySlug — ahí lo abre <CaseModal>.
export type ProjectAccent = "cyan" | "blue" | "violet" | "purple";

export interface PortfolioProject {
  slug: string;
  name: string;
  // Frase corta, en español simple, sobre qué resuelve para el usuario final.
  // Nunca menciona stack, arquitectura ni módulos — eso queda para el modal.
  pitch: string;
  statusLabel: string;
  status: "live" | "soon";
  accent: ProjectAccent;
  // Si existe, "Ver más" abre el modal con el caso completo de caseStudies.ts.
  caseStudySlug?: string;
  // Si no existe (todavía no hay sitio propio publicado), "Ir a la app" se
  // muestra deshabilitado en vez de asumir una URL que no existe.
  appUrl?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "check",
    name: "CHECK",
    pitch: "Entra a tus eventos favoritos sin filas ni papeleo — reserva tu mesa y valida tu acceso desde el celular.",
    statusLabel: "En piloto",
    status: "live",
    accent: "cyan",
    caseStudySlug: "check",
    appUrl: "https://check-seven-alpha.vercel.app/",
  },
  {
    slug: "clandest",
    name: "CLANDEST",
    pitch: "Descubre qué está pasando esta noche en La Paz, antes de que se llene.",
    statusLabel: "Muy pronto",
    status: "soon",
    accent: "violet",
  },
  {
    slug: "kolla",
    name: "KOLLA",
    pitch: "Lee y escribe historias por capítulos, junto a una comunidad de autores en español.",
    statusLabel: "Muy pronto",
    status: "soon",
    accent: "blue",
  },
  {
    slug: "scriptlib",
    name: "ScriptLib",
    pitch: "Publica y vende tu libro independiente, sin pasar por una editorial.",
    statusLabel: "Muy pronto",
    status: "soon",
    accent: "purple",
  },
  {
    slug: "sor",
    name: "SOR",
    pitch: "Un club digital privado, con verificación real, para conectar con las personas correctas.",
    statusLabel: "Muy pronto",
    status: "soon",
    accent: "cyan",
  },
];
