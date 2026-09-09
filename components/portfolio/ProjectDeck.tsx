import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import { Link } from "react-router-dom";
import { ProjectThumb } from "./ProjectThumb";
import { Tag } from "../ui/Tag";
import { portfolioProjects } from "../../data/portfolioProjects";
import "./ProjectCard.css";
import "./ProjectDeck.css";

// Vitrina "deck" del Home: recorre los 5 productos de StarLabs en un
// carrusel 3D tipo glass — es el tráiler, no la película. Muestra nombre +
// una frase + estado, nunca el detalle técnico (eso vive en /portafolio,
// que sigue siendo página propia). El nav del header manda "Portafolio" acá
// (sección, no ruta) porque el sitio se presenta como landing de una sola
// página; /portafolio queda para quien pide explícitamente profundizar.
// Pendiente a futuro (no implementado): cuando StarLabs tenga video propio
// (canal YouTube/TikTok) explicando qué es CHECK, la tarjeta activa podría
// llevar un botón "Ver video" tipo trailer sobre el thumb — dejar espacio
// para eso al tocar este componente de nuevo.
const DRAG_THRESHOLD = 40;

export function ProjectDeck() {
  const count = portfolioProjects.length;
  const [active, setActive] = useState(0);
  const shellRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ dragging: false, startX: 0, delta: 0 });

  const goTo = (i: number) => setActive(((i % count) + count) % count);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); goTo(active - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); goTo(active + 1); }
    };
    shell.addEventListener("keydown", onKeyDown);
    return () => shell.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    drag.current = { dragging: true, startX: e.clientX, delta: 0 };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current.dragging) return;
    drag.current.delta = e.clientX - drag.current.startX;
  };
  const onPointerUp = () => {
    if (!drag.current.dragging) return;
    const { delta } = drag.current;
    drag.current.dragging = false;
    if (delta > DRAG_THRESHOLD) goTo(active - 1);
    else if (delta < -DRAG_THRESHOLD) goTo(active + 1);
  };

  return (
    <div className="deck">
      <div
        className="deck-shell"
        ref={shellRef}
        tabIndex={0}
        role="group"
        aria-roledescription="carrusel"
        aria-label="Productos StarLabs"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className="deck-glow"
          style={{ background: `radial-gradient(circle, var(--${portfolioProjects[active].accent}), transparent 65%)` }}
          aria-hidden="true"
        />

        {portfolioProjects.map((project, i) => {
          let offset = i - active;
          if (offset > count / 2) offset -= count;
          if (offset < -count / 2) offset += count;
          const abs = Math.abs(offset);
          const isActive = offset === 0;
          const isSoon = project.status === "soon";

          const style: CSSProperties =
            abs > 2
              ? {
                  opacity: 0,
                  transform: `translate3d(${offset > 0 ? 520 : -520}px,0,-400px) scale(.6)`,
                  filter: "blur(6px)",
                  zIndex: 0,
                  pointerEvents: "none",
                }
              : {
                  transform: `translate3d(${offset * 168}px,0,${-abs * 140}px) rotateY(${offset * -8}deg) scale(${
                    isActive ? 1 : 0.82 - (abs - 1) * 0.08
                  })`,
                  opacity: Math.max(isActive ? 1 : 0.55 - (abs - 1) * 0.15, 0.15),
                  filter: `blur(${isActive ? 0 : 2 + abs * 1.5}px)`,
                  zIndex: 10 - abs,
                };

          return (
            <div
              key={project.slug}
              className={`deck-card${isActive ? " is-active" : ""}${isSoon ? " pcard-soon" : ""}`}
              style={style}
              aria-hidden={!isActive}
              onClick={() => !isActive && goTo(i)}
            >
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

              <div className="deck-card-body">
                <div className="pcard-head">
                  <h3>{project.name}</h3>
                  <Tag variant={isSoon ? "beta" : "on"}>{project.statusLabel}</Tag>
                </div>
                <p className="pcard-pitch">
                  {isSoon ? "Estamos construyendo esto — todavía no hay nada para mostrar." : project.pitch}
                </p>
                <Link to="/portafolio" className="btn-ghost deck-cta" tabIndex={isActive ? 0 : -1}>
                  Ver portafolio completo <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="deck-controls">
        <button type="button" className="deck-arrow" aria-label="Proyecto anterior" onClick={() => goTo(active - 1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="deck-ticks">
          {portfolioProjects.map((project, i) => (
            <button
              key={project.slug}
              type="button"
              className={`deck-tick${i === active ? " active" : ""}`}
              style={{ "--tick-color": `var(--${project.accent})` } as CSSProperties}
              aria-label={`Ir a ${project.name}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <button type="button" className="deck-arrow" aria-label="Siguiente proyecto" onClick={() => goTo(active + 1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
