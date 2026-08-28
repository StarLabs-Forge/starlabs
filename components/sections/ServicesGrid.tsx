"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "../../data/services";
import imgWeb from "../../assets/1.png";
import imgApps from "../../assets/2.png";
import imgSistemas from "../../assets/3.png";
import imgMedida from "../../assets/4.png";
import "./ServicesGrid.css";

// Assets 1–4 ya generados/recortados — asignación fija, no reordenar.
const SERVICE_IMAGES: Record<string, typeof imgWeb> = {
  web: imgWeb,
  apps: imgApps,
  sistemas: imgSistemas,
  medida: imgMedida,
};

function useCardTilt() {
  const ref = useRef<HTMLAnchorElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>) {
    if (event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
    el.style.setProperty("--rx", `${((0.5 - py) * 5).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${((px - 0.5) * 5).toFixed(2)}deg`);
  }

  function resetTilt() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return { ref, handlePointerMove, resetTilt };
}

function ServiceCard({ id, name, hook, description, index }: (typeof services)[number] & { index: number }) {
  const { ref, handlePointerMove, resetTilt } = useCardTilt();

  return (
    <Link
      href="/contacto"
      className={`service-card service-card--${index % 2 === 0 ? "a" : "b"}`}
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <span className="service-card-spotlight" aria-hidden="true" />
      <span className="service-image">
        <Image src={SERVICE_IMAGES[id]} alt="" sizes="(max-width: 860px) 45vw, 22vw" priority={index === 0} />
      </span>
      <span className="service-card-body">
        <h3>{name}</h3>
        <p className="service-hook">{hook}</p>
        <p className="service-desc">{description}</p>
      </span>
      <span className="service-cta" aria-hidden="true">
        <span className="arrow">→</span>
      </span>
    </Link>
  );
}

// Las cuatro cosas que StarLabs construye — usado en Home y en /servicios,
// misma fuente que la fila de categorías del Hero. Stagger propio (no depende
// del <Reveal> que envuelve la sección) para que Web → Apps → Sistemas →
// Soluciones a medida entren en secuencia corta.
export function ServicesGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(true);
      return;
    }
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`services-grid${active ? " in" : ""}`} ref={gridRef}>
      {services.map((service, index) => (
        <div className="service-card-slot" key={service.id} style={{ transitionDelay: active ? `${index * 90}ms` : "0ms" }}>
          <ServiceCard {...service} index={index} />
        </div>
      ))}
    </div>
  );
}
