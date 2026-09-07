import { Tag } from "../ui/Tag";
import { Testimonial } from "./Testimonial";
import { testimonials } from "../../data/testimonials";
import "./Testimonials.css";

// Sección de testimonios. Mientras data/testimonials.ts esté vacío se
// muestra un estado "PRÓXIMAMENTE" honesto — mismo patrón que "02 / PRÓXIMOS
// CASOS" en PortafolioView — en vez de inventar contenido para no dejar el
// acento cálido sin uso. Cuando haya testimonios reales, se listan acá.
export function Testimonials() {
  if (testimonials.length === 0) {
    return (
      <div className="testimonials-empty">
        <Tag variant="beta">PRÓXIMAMENTE</Tag>
        <h3 style={{ marginTop: 14 }}>Acá van a estar las palabras de quienes ya trabajaron con nosotros</h3>
        <p style={{ marginTop: 8 }}>
          Todavía no tenemos testimonios reales que mostrar — preferimos esperar a tenerlos antes que inventarlos.
        </p>
      </div>
    );
  }

  return (
    <div className="testimonials-grid">
      {testimonials.map((t) => (
        <Testimonial key={t.name} {...t} />
      ))}
    </div>
  );
}
