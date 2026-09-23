import { Button } from "../ui/Button";
import { Eyebrow } from "../ui/Eyebrow";
import type { ClientCase as ClientCaseData } from "../../data/clientCases";
import "./CaseStudy.css";

// Equivalente a <CaseStudy> pero para trabajos de cliente (kind:"client" en
// portfolioProjects.ts) — mismo lenguaje visual (.case/.case-grid/.case-block,
// ver CaseStudy.css) pero con el contenido adaptado: qué pidió el cliente y
// qué se entregó, en vez de problema/solución/stack técnico. Renderizado por
// <CaseModal> cuando el proyecto abierto tiene clientCaseSlug en vez de
// caseStudySlug.
const scopeListStyle = {
  fontSize: 13.5,
  color: "var(--text-300)",
  paddingLeft: 16,
  position: "relative" as const,
  marginBottom: 7,
};

interface ClientCaseProps {
  clientCase: ClientCaseData;
  indexLabel?: string;
}

export function ClientCase({ clientCase, indexLabel }: ClientCaseProps) {
  return (
    <div className="case">
      <div className="case-top">
        <div>
          {indexLabel && <span className="idx">{indexLabel}</span>}
          <Eyebrow>{clientCase.eyebrowLabel}</Eyebrow>
          <h3 className="case-name" style={{ marginTop: 10 }}>{clientCase.name}</h3>
          <span className="role">{clientCase.role}</span>
        </div>
        <span className="case-status">{clientCase.statusLabel}</span>
      </div>

      <div className="case-grid">
        <div className="case-block">
          <h4>Qué pidió</h4>
          <p>{clientCase.request}</p>

          <h4>Qué construimos</h4>
          <p>{clientCase.delivery}</p>
        </div>

        <div>
          <div className="case-block" style={{ marginBottom: 26 }}>
            <h4>Alcance entregado</h4>
            <ul style={{ listStyle: "none" }}>
              {clientCase.scope.map((item) => (
                <li key={item} style={scopeListStyle}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="case-block">
            <h4>Tiempo de entrega</h4>
            <p style={{ marginBottom: 0 }}>{clientCase.timeline}</p>
          </div>
        </div>
      </div>

      <hr className="divider" style={{ margin: "32px 0 24px" }} />
      <p style={{ color: "var(--text-500)", fontSize: 13, maxWidth: "60ch" }}>{clientCase.closingNote}</p>
      <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button href={clientCase.liveUrl} variant="solid">
          Ver el sitio en vivo
        </Button>
        <Button href="/contacto" variant="ghost">
          Quiero algo así para mi negocio
        </Button>
      </div>
    </div>
  );
}
