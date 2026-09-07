import type { Testimonial as TestimonialData } from "../../data/testimonials";
import "./Testimonial.css";

// Tarjeta individual. El acento cálido (--warm-accent) vive solo en el
// nombre — mismo criterio puntual que en CaseStudy/ProjectTeaser: es un
// acento, no una paleta nueva.
export function Testimonial({ quote, name, role }: TestimonialData) {
  return (
    <figure className="testimonial">
      <blockquote>&ldquo;{quote}&rdquo;</blockquote>
      <figcaption>
        <span className="testimonial-name">{name}</span>
        <span className="testimonial-role">{role}</span>
      </figcaption>
    </figure>
  );
}
