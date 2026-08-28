"use client";

import { useEffect } from "react";

// Transición Hero → Sobre: al hacer scroll, el Hero se lee como una capa que
// se aleja hacia la siguiente (fondo, glow y showcase reaccionan vía
// --hero-progress, consumida en globals.css). No toca el Hero ni su markup —
// solo escribe una custom property sobre el nodo .hero ya existente.
export function HeroScrollFx() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const hero = document.querySelector(".hero");
    if (!(hero instanceof HTMLElement)) return;

    let raf = 0;
    const update = () => {
      const height = hero.offsetHeight || 1;
      const progress = Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / height));
      hero.style.setProperty("--hero-progress", progress.toFixed(3));
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
