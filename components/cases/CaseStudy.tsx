import { Button } from "../ui/Button";
import { Eyebrow } from "../ui/Eyebrow";
import { Metric } from "./Metric";
import type { CaseStudy as CaseStudyData } from "../../data/caseStudies";
import "./CaseStudy.css";

// Equivalente a .case en portafolio.html — recibe un caso de /data/caseStudies.ts.
// Nota: .case-status es una clase independiente de .tag (ver DESIGN_SYSTEM.md sección 7,
// "tres variantes de la misma idea") — no reutiliza el componente Tag.
const moduleListStyle = {
  fontSize: 13.5,
  color: "var(--text-300)",
  paddingLeft: 16,
  position: "relative" as const,
  marginBottom: 7,
};

interface CaseStudyProps {
  caseStudy: CaseStudyData;
  indexLabel?: string;
}

export function CaseStudy({ caseStudy, indexLabel }: CaseStudyProps) {
  return (
    <div className="case">
      <div className="case-top">
        <div>
          {indexLabel && <span className="idx">{indexLabel}</span>}
          <Eyebrow>{caseStudy.eyebrowLabel}</Eyebrow>
          <h3 style={{ marginTop: 10 }}>{caseStudy.name}</h3>
          <span className="role">{caseStudy.role}</span>
        </div>
        <span className="case-status">{caseStudy.statusLabel}</span>
      </div>

      <div className="case-grid">
        <div className="case-block">
          <h4>El problema</h4>
          <p>{caseStudy.problem}</p>

          <h4>La solución</h4>
          <p>{caseStudy.solution}</p>

          <h4>Módulos construidos</h4>
          <ul style={{ listStyle: "none" }}>
            {caseStudy.modules.map((mod) => (
              <li key={mod} style={moduleListStyle}>
                {mod}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="case-block" style={{ marginBottom: 26 }}>
            <h4>Stack</h4>
            <div className="stacklist">
              {caseStudy.stack.map((item) => (
                <span key={item} className="stackpill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="case-block">
            <h4>Estado</h4>
            <div className="metrics">
              {caseStudy.metrics.map((m) => (
                <Metric key={m.label} {...m} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" style={{ margin: "32px 0 24px" }} />
      <p style={{ color: "var(--text-500)", fontSize: 13, maxWidth: "60ch" }}>{caseStudy.closingNote}</p>
      <div style={{ marginTop: 18 }}>
        <Button href="/contacto" variant="ghost">
          Hablar sobre un proyecto como este
        </Button>
      </div>
    </div>
  );
}
