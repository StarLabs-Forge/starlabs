import { Link } from "react-router-dom";
import type { CaseStudy } from "../../data/caseStudies";
import "./ProjectTeaser.css";

// Patrón fijo tipo QR (5x5) — motivo visual de CHECK, no un código real.
const QR_PATTERN = [
  1, 1, 1, 0, 1,
  1, 0, 1, 0, 0,
  1, 1, 1, 0, 1,
  0, 0, 1, 1, 0,
  1, 0, 0, 1, 1,
];

// Tarjeta de portafolio para el teaser de Home: imagen + nombre + descripción
// breve + categoría + acción. El detalle completo (problema, stack, métricas)
// vive en /portafolio — esta tarjeta es la puerta de entrada, no el caso.
export function ProjectTeaser({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="project-teaser">
      <div className="project-teaser-visual" aria-hidden="true">
        <div className="qr-mark">
          {QR_PATTERN.map((on, i) => (
            <span key={i} className={on ? "on" : ""} />
          ))}
        </div>
      </div>
      <div className="project-teaser-body">
        <span className="project-teaser-category">{caseStudy.category.join(" · ")}</span>
        <h3>{caseStudy.name}</h3>
        <p>{caseStudy.solution}</p>
        <span className="project-teaser-status">{caseStudy.statusLabel}</span>
        <Link to="/portafolio" className="btn-ghost">
          Ver proyecto <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
}
