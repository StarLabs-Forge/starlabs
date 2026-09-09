import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CaseStudy } from "../cases/CaseStudy";
import type { CaseStudy as CaseStudyData } from "../../data/caseStudies";
import "./CaseModal.css";

// Ventana con el detalle completo que antes vivía suelto en la página de
// portafolio (problema/solución/módulos/stack/métricas) — ahora solo aparece
// cuando alguien pide explícitamente "Ver más" desde <ProjectCard>. Cierra con
// Escape, click en el overlay, o el botón X; bloquea el scroll del body
// mientras está abierto.
interface CaseModalProps {
  caseStudy: CaseStudyData;
  onClose: () => void;
}

export function CaseModal({ caseStudy, onClose }: CaseModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div className="case-modal-overlay" onClick={onClose}>
      <div
        className="case-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`Detalle del proyecto ${caseStudy.name}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="case-modal-close" onClick={onClose} aria-label="Cerrar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <div className="case-modal-scroll">
          <CaseStudy caseStudy={caseStudy} />
        </div>
      </div>
    </div>,
    document.body
  );
}
