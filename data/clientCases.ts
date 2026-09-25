// Casos de trabajo para clientes (VEXORA Web) — formato liviano, DISTINTO
// del caso técnico de caseStudies.ts (que es para productos propios de
// VEXORA: problema/solución/módulos/stack/métricas de arquitectura). Acá el
// foco es el encargo real: qué pidió el cliente, qué se construyó, el
// alcance entregado y el tiempo — sin simular una arquitectura que un
// landing de cliente no tiene. Consumido por <ClientCase> vía <CaseModal>.
export interface ClientCase {
  slug: string;
  name: string;
  eyebrowLabel: string;
  role: string;
  statusLabel: string;
  request: string;
  delivery: string;
  scope: string[];
  timeline: string;
  liveUrl: string;
  closingNote: string;
}

export const clientCases: ClientCase[] = [
  {
    slug: "aura-tumbler",
    name: "Aura Tumbler",
    eyebrowLabel: "Trabajo para cliente — VEXORA Web",
    role: "Landing de venta",
    statusLabel: "ENTREGADO",
    request:
      "Una estudiante necesitaba una página de venta para su producto — un termo inteligente — con una imagen premium, personalización visual y checkout directo, sin depender de un marketplace.",
    delivery:
      "Landing de una sola página: propuesta de valor, personalizador de color con simulador de bebida, oferta con temporizador de cuenta regresiva, FAQ y llamados a la acción directos al carrito.",
    scope: [
      "Diseño y desarrollo del landing completo",
      "Selector/personalizador de color interactivo",
      "Sección de oferta con temporizador",
      "FAQ y pie con contacto",
    ],
    timeline: "Entregado en una sola iteración, sobre un requerimiento cerrado.",
    liveUrl: "https://venta-producto.vercel.app/",
    closingNote:
      "Encargo puntual de VEXORA Web — diseñado y construido a medida para un tercero, fuera del roadmap de productos propios de VEXORA.",
  },
];
