// Consumido por components/testimonials/Testimonials.tsx.
// A propósito vacío: el acento cálido (ver Brand & Design System v1.1,
// sección "1ter. Personalidad de marca") solo debe usarse con testimonios
// reales. Mientras este array esté vacío, Testimonials.tsx muestra un
// estado "PRÓXIMAMENTE" — nunca se inventa contenido para llenar el hueco.
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [];
