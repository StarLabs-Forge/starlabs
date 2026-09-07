import { useEffect } from "react";

// Extiende el mismo patrón de HeroScrollFx a las secciones que ya tienen
// .section-index (Identidad, Proceso, Servicios): cada .section-deco escribe
// su propio --section-progress mientras cruza el viewport, y el número de
// fondo en globals.css se mueve a una velocidad distinta que el contenido —
// la "profundidad de scroll, capas a velocidades distintas" que define el
// doc de marca (10ter), sin librería nueva y sin WebGL.
export function SectionParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".section-deco"));
    if (sections.length === 0) return;

    let raf = 0;
    const update = () => {
      const vh = window.innerHeight || 1;
      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        // 0 cuando el section empieza a entrar por abajo, 1 cuando termina de salir por arriba.
        const span = vh + rect.height || 1;
        const progress = Math.min(1, Math.max(0, (vh - rect.top) / span));
        el.style.setProperty("--section-progress", progress.toFixed(3));
      }
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
