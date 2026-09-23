// Consumido por CaseStudy (portafolio) y por el bloque "caso en curso" del home.
export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  eyebrowLabel: string;
  role: string;
  category: string[];
  statusLabel: string;
  problem: string;
  solution: string;
  modules: string[];
  stack: string[];
  metrics: Metric[];
  closingNote: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "check",
    name: "CHECK",
    eyebrowLabel: "Caso destacado — Vida nocturna",
    role: "Arquitectura · Backend · App móvil · Dashboard web",
    category: ["Producto", "Apps", "Sistemas"],
    statusLabel: "EN PILOTO · LA PAZ",
    problem:
      "Los locales nocturnos de La Paz siguen controlando el acceso y las reservas de mesa con listas en papel y coordinación manual por WhatsApp — sin visibilidad en tiempo real ni forma de validar una entrada sin margen de error humano.",
    solution:
      "Un QR único y firmado como eje de toda la operación: cada reserva de mesa o entrada genera un código que el staff valida en la puerta, en tiempo real, desde una app propia.",
    modules: [
      "Gestión de eventos y mesas",
      "Reservas y tickets",
      "Check-in por QR en tiempo real",
      "Dashboard administrativo y gestión de staff",
    ],
    stack: [
      "Flutter · móvil staff",
      "Flutter Web · dashboard",
      "Node.js + Express",
      "Supabase PostgreSQL",
      "Supabase Realtime",
    ],
    metrics: [
      { value: "1", label: "local real en piloto, La Paz" },
      { value: "QR", label: "eje único de toda la operación" },
      { value: "2", label: "roles: Admin y Staff" },
    ],
    closingNote:
      "CHECK opera como producto independiente, con su propio modelo de negocio y sitio. Diseñamos y construimos su arquitectura, backend y aplicaciones, y seguimos acompañando su operación.",
  },
  {
    slug: "kolla",
    name: "KOLLA",
    eyebrowLabel: "Caso en desarrollo — Lectura y escritura",
    role: "Arquitectura · Backend · Base de datos · Frontend web",
    category: ["Producto", "Apps"],
    statusLabel: "ACCESO ANTICIPADO",
    problem:
      "Los autores independientes de habla hispana no tienen un espacio propio para publicar historias por capítulos y construir audiencia — las plataformas dominantes de lectura seriada están pensadas para el mercado angloparlante, sin foco en descubrimiento ni en la experiencia del autor hispanohablante.",
    solution:
      "Una plataforma de lectura y escritura seriada diseñada desde cero para el mercado hispanohablante: los autores publican capítulo a capítulo con control total sobre sus borradores, y los lectores descubren historias nuevas y siguen su progreso de lectura.",
    modules: [
      "Gestión de historias y capítulos",
      "Borradores con visibilidad restringida al autor (RLS)",
      "Catálogo y descubrimiento de contenido",
      "Biblioteca personal y progreso de lectura",
      "Perfil de autor",
    ],
    stack: [
      "Next.js + React + TypeScript",
      "Supabase Auth + Storage",
      "PostgreSQL con Row Level Security",
    ],
    metrics: [
      { value: "3", label: "roles: lector, autor y administrador" },
      { value: "RLS", label: "capítulos no publicados, visibles solo para su autor" },
    ],
    closingNote:
      "KOLLA está en acceso anticipado: la base funcional ya está publicada y disponible por link, mientras seguimos puliendo la experiencia de lectura y escritura antes del lanzamiento público.",
  },
];
