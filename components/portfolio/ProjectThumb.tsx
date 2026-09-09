import "./ProjectThumb.css";

// "Screenshot" del proyecto sin depender de una captura real (todavía no
// existe para la mayoría) — un mockup abstracto de pantalla, en la misma
// lógica visual que <ProductShowcase> en el home: nunca código ni terminales,
// siempre "un producto funcionando". El color cambia por proyecto (accent);
// el estado deshabilitado (desaturado + candado) lo aplica <ProjectCard>.
interface ProjectThumbProps {
  accent: "cyan" | "blue" | "violet" | "purple";
  name: string;
}

export function ProjectThumb({ accent, name }: ProjectThumbProps) {
  return (
    <div className={`pthumb accent-${accent}`} aria-hidden="true">
      <div className="pthumb-bar">
        <span className="pthumb-dot" />
        <span className="pthumb-dot" />
        <span className="pthumb-dot" />
      </div>
      <div className="pthumb-body">
        <span className="pthumb-mark">{name.slice(0, 1)}</span>
        <div className="pthumb-lines">
          <span className="pthumb-line" style={{ width: "70%" }} />
          <span className="pthumb-line" style={{ width: "45%" }} />
          <span className="pthumb-line" style={{ width: "58%" }} />
        </div>
      </div>
    </div>
  );
}
