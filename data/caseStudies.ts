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
      "CHECK opera como producto independiente, con su propio modelo de negocio y sitio. StarLabs diseñó y construyó su arquitectura, backend y aplicaciones, y sigue acompañando su operación.",
  },
];
