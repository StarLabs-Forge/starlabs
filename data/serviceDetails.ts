// Contenido completo de las páginas dedicadas a cada categoría de servicio
// (/servicios/web, /servicios/apps, /servicios/sistemas). Separado de
// services.ts porque ese archivo alimenta la card corta del grid; este
// alimenta la página larga a la que esa card ahora enlaza.
export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceDetail {
  id: "web" | "apps" | "sistemas";
  eyebrow: string;
  title: string;
  lead: string;
  intro: string;
  featuresLabel: string;
  features: ServiceFeature[];
  examplesLabel: string;
  examples: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
}

export const serviceDetails: Record<ServiceDetail["id"], ServiceDetail> = {
  web: {
    id: "web",
    eyebrow: "Servicios · Web",
    title: "Sitios y experiencias web que sí funcionan",
    lead: "Desde una página corporativa hasta una plataforma web completa — construimos lo que tu proyecto necesita, no una plantilla genérica.",
    intro:
      "En StarLabs Web trabajamos el sitio como lo que es: la primera prueba real de que tu proyecto funciona. Eso puede ser una página corporativa que transmita confianza, una landing pensada para convertir, o una plataforma con lógica propia — paneles, contenido dinámico, autenticación. El problema que resolvemos no es \"no tener página web\": es tener una que no representa lo que estás construyendo, o que no hace nada por ti más allá de existir.",
    featuresLabel: "Qué construimos",
    features: [
      {
        title: "Sitios corporativos",
        description: "Presencia digital seria y rápida, pensada para generar confianza desde el primer segundo.",
      },
      {
        title: "Landing pages",
        description: "Páginas de una sola pantalla, optimizadas para convertir en cada campaña o lanzamiento.",
      },
      {
        title: "Plataformas web",
        description: "Productos completos con lógica propia: paneles, contenido dinámico, autenticación, roles.",
      },
      {
        title: "Interfaces y experiencias digitales",
        description: "Diseño de interacción cuidado y responsive de verdad, no una adaptación forzada de escritorio.",
      },
    ],
    examplesLabel: "Tipos de proyectos",
    examples: ["Sitio institucional", "Landing de producto o campaña", "Portal de clientes", "Sistema web a medida"],
    ctaTitle: "¿Tienes un proyecto web en mente?",
    ctaDescription: "Cuéntanos qué necesitas mostrar o resolver — nosotros vemos cómo construirlo.",
    ctaLabel: "Hablemos de tu proyecto",
  },
  apps: {
    id: "apps",
    eyebrow: "Servicios · Apps",
    title: "Aplicaciones que resuelven problemas reales",
    lead: "Construimos productos digitales pensados desde la experiencia de quien los usa, no desde una lista de funciones.",
    intro:
      "Una app no vale por la tecnología que usa, sino por el problema que le resuelve a quien la abre. En StarLabs Apps partimos de ahí: entendemos qué necesita lograr tu usuario y diseñamos la aplicación — móvil, con backend propio, conectada a otros sistemas — alrededor de eso. Cuando la idea todavía no está del todo probada, empezamos por un prototipo o un MVP: lo justo para validarla antes de invertir en construir de más.",
    featuresLabel: "Qué construimos",
    features: [
      {
        title: "Aplicaciones móviles",
        description: "Para iOS y Android, con una experiencia que se siente nativa y fluida.",
      },
      {
        title: "Productos digitales",
        description: "De la idea al producto usable, con foco en resolver un problema concreto para tu usuario.",
      },
      {
        title: "Funcionalidades y sistemas conectados",
        description: "Integraciones, notificaciones, pagos, datos en tiempo real — la app hablando con lo que ya usas.",
      },
      {
        title: "Prototipos y MVP",
        description: "Validamos la idea rápido, con lo esencial, antes de construir la versión completa.",
      },
    ],
    examplesLabel: "Tipos de proyectos",
    examples: ["App para usuarios finales", "App interna de gestión", "MVP para validar una idea", "Producto con backend propio"],
    ctaTitle: "¿Tienes una idea de app?",
    ctaDescription: "No necesita estar completa. Cuéntanos qué problema quieres resolver.",
    ctaLabel: "Cuéntanos tu idea",
  },
  sistemas: {
    id: "sistemas",
    eyebrow: "Servicios · Sistemas",
    title: "Menos trabajo. Más control.",
    lead: "Sistemas que organizan, automatizan y ponen en orden los procesos que hoy dependen de hojas de cálculo, mensajes sueltos o memoria.",
    intro:
      "Sistemas es distinto a Web y a Apps: acá el objetivo no es un sitio público ni un producto para el usuario final, sino una herramienta para que tu operación funcione mejor. Construimos software que organiza información, automatiza tareas repetitivas y conecta procesos que hoy están sueltos — para que dejes de depender de que una persona recuerde hacer algo, y empieces a depender de un sistema que lo hace por ti.",
    featuresLabel: "Qué construimos",
    features: [
      {
        title: "Sistemas de gestión",
        description: "Centralizan información que hoy vive repartida entre planillas, chats y memoria.",
      },
      {
        title: "Automatización de procesos",
        description: "Tareas repetitivas que dejan de depender de que alguien las haga a mano cada vez.",
      },
      {
        title: "Herramientas internas",
        description: "Paneles y flujos hechos a la medida de cómo trabaja tu equipo, no al revés.",
      },
      {
        title: "Integración de procesos",
        description: "Conectamos lo que ya usas en vez de reemplazarlo todo desde cero.",
      },
    ],
    examplesLabel: "Tipos de proyectos",
    examples: ["Sistema de reservas o accesos", "Panel de control interno", "Automatización de tareas", "Integración entre herramientas"],
    ctaTitle: "¿Qué proceso te está quitando tiempo?",
    ctaDescription: "Cuéntanos cómo trabajas hoy — nosotros te decimos qué se puede automatizar.",
    ctaLabel: "Cuéntanos qué necesitas",
  },
};
