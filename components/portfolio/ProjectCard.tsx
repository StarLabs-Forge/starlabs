import { ProjectThumb } from "./ProjectThumb";
import { Tag } from "../ui/Tag";
import type { PortfolioProject } from "../../data/portfolioProjects";
import "./ProjectCard.css";

// Unidad repetible del grid de /portafolio. Por defecto solo muestra imagen +
// nombre + una frase para el usuario final + dos botones — el detalle técnico
// completo (problema/solución/módulos/stack/métricas) vive detrás de "Ver más"
// en <CaseModal>, nunca suelto en la card. Los proyectos "soon" se ven
// desaturados, con overlay de candado y ambos botones inactivos.
interface ProjectCardProps {
  project: PortfolioProject;
  onOpenDetail: (slug: string) => void;
}

export function ProjectCard({ project, onOpenDetail }: ProjectCardProps) {
  const isSoon = project.status === "soon";
  const canOpenDetail = !isSoon && Boolean(project.caseStudySlug);

  return (
    <div className={`pcard${isSoon ? " pcard-soon" : ""}`}>
      <div className="pcard-thumb-wrap">
        <ProjectThumb accent={project.accent} name={project.name} />
        {isSoon && (
          <div className="pcard-lock">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.6" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            <span>Muy pronto</span>
          </div>
        )}
      </div>

      <div className="pcard-body">
        <div className="pcard-head">
          <h3>{project.name}</h3>
          <Tag variant={isSoon ? "beta" : "on"}>{project.statusLabel}</Tag>
        </div>

        <p className="pcard-pitch">
          {isSoon ? "Estamos construyendo esto — todavía no hay nada para mostrar." : project.pitch}
        </p>

        <div className="pcard-actions">
          <button
            type="button"
            className="btn"
            disabled={!canOpenDetail}
            onClick={() => canOpenDetail && onOpenDetail(project.slug)}
          >
            Ver más
          </button>

          {project.appUrl ? (
            <a className="btn-ghost" href={project.appUrl} target="_blank" rel="noopener noreferrer">
              Ir a la app
            </a>
          ) : (
            <button
              type="button"
              className="btn-ghost"
              disabled
              title={isSoon ? "Todavía no está disponible" : "Publicamos el enlace apenas esté disponible"}
            >
              Ir a la app
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
