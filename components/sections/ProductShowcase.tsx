"use client";

import { useRef, type PointerEvent } from "react";
import "./ProductShowcase.css";

// Elemento visual del hero (home). Representa "una idea convertida en producto
// digital funcionando" — un dashboard real en laptop + móvil, sin terminales,
// código ni interfaces técnicas. Reemplaza a TerminalPanel solo en el hero.
//
// Inclinación 3D muy leve según la posición del cursor — el teléfono se mueve
// un poco más que la laptop para dar sensación de dos capas independientes.
// No aplica en touch/reduced-motion: sin hover fino no hay listener que la dispare.
export function ProductShowcase() {
  const wrapRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--tilt-x", `${(py * -5).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${(px * 5).toFixed(2)}deg`);
    el.style.setProperty("--tilt-x-phone", `${(py * -3).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y-phone", `${(px * 8).toFixed(2)}deg`);
  }

  function resetTilt() {
    const el = wrapRef.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
    el.style.setProperty("--tilt-x-phone", "0deg");
    el.style.setProperty("--tilt-y-phone", "0deg");
  }

  return (
    <div
      className="showcase"
      ref={wrapRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      aria-hidden="true"
    >
      <div className="showcase-glow" />

      <div className="laptop">
        <div className="laptop-screen">
          <div className="app-topbar">
            <span className="app-dot" />
            <span className="app-dot" />
            <span className="app-dot" />
            <span className="app-title">Panel del proyecto</span>
          </div>
          <div className="app-body">
            <div className="app-stats">
              <div className="app-stat">
                <span className="app-stat-label">Progreso</span>
                <span className="app-stat-value">82%</span>
              </div>
              <div className="app-stat">
                <span className="app-stat-label">Entregas</span>
                <span className="app-stat-value">12</span>
              </div>
              <div className="app-stat">
                <span className="app-stat-label">Estado</span>
                <span className="app-stat-value ok">Activo</span>
              </div>
            </div>
            <div className="app-chart">
              <svg viewBox="0 0 240 60" preserveAspectRatio="none">
                <polyline points="0,48 30,36 60,42 90,20 120,28 150,12 180,22 210,8 240,16" />
              </svg>
            </div>
            <div className="app-rows">
              <div className="app-row">
                <span className="app-row-dot ok" />
                Módulo de pagos desplegado
              </div>
              <div className="app-row">
                <span className="app-row-dot ok" />
                Onboarding listo para producción
              </div>
              <div className="app-row">
                <span className="app-row-dot" />
                Sincronizando datos en vivo
              </div>
            </div>
          </div>
        </div>
        <div className="laptop-base" />
      </div>

      <div className="phone">
        <div className="phone-screen">
          <span className="phone-app">Mi proyecto</span>
          <div className="phone-ring">
            <span>75%</span>
          </div>
          <span className="phone-caption">Tareas al día</span>
        </div>
      </div>
    </div>
  );
}