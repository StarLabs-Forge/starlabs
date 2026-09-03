import { useEffect, useRef, useState } from "react";
import "./Process.css";

// Las 5 etapas del proceso (Home). Contenido fijo, no reutilizado en otra
// página — no justifica una capa de datos separada.
const STEPS = [
  { num: "01", title: "Hablamos", description: "Entendemos qué necesitas." },
  { num: "02", title: "Definimos", description: "Convertimos la idea en una solución clara." },
  { num: "03", title: "Construimos", description: "Diseñamos y desarrollamos." },
  { num: "04", title: "Probamos", description: "Comprobamos que funcione." },
  { num: "05", title: "Lanzamos", description: "Lo ponemos en marcha y seguimos evolucionando." },
];

// Al entrar en la sección, la línea se ilumina y cada etapa aparece en
// secuencia — "una idea avanza hasta convertirse en un producto".
export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`timeline${active ? " in" : ""}`} ref={ref}>
      <span className="timeline-fill" aria-hidden="true" />
      <span className="timeline-pulse" aria-hidden="true" />
      {STEPS.map((step, i) => (
        <div
          className={`timeline-step${i === STEPS.length - 1 ? " done" : ""}`}
          key={step.num}
          style={{ transitionDelay: active ? `${160 + i * 130}ms` : "0ms" }}
        >
          <span className="timeline-node">{step.num}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  );
}
