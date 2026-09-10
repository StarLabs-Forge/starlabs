import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";
import type { ServiceDetail as ServiceDetailData } from "../../data/serviceDetails";
import "./ServiceDetail.css";

// Cuerpo compartido por las 3 páginas de /servicios/* (Web, Apps, Sistemas):
// párrafo de contexto + grid "qué construimos" + fila de ejemplos. El texto
// cambia por props (data/serviceDetails.ts); la estructura y el estilo no.
interface ServiceDetailProps {
  detail: ServiceDetailData;
}

export function ServiceDetail({ detail }: ServiceDetailProps) {
  return (
    <>
      <section className="tight">
        <div className="wrap">
          <Reveal className="svc-lead">
            <p>{detail.intro}</p>
          </Reveal>

          <Reveal delay={80} className="section-head">
            <Eyebrow>{detail.featuresLabel}</Eyebrow>
            <h2>¿Qué incluye trabajar con nosotros?</h2>
          </Reveal>

          <div className="svc-features">
            {detail.features.map((feature, index) => (
              <Reveal key={feature.title} delay={100 + index * 70}>
                <div className="svc-feature">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="svc-examples">
            <Eyebrow>{detail.examplesLabel}</Eyebrow>
            <div className="svc-examples-list">
              {detail.examples.map((example) => (
                <span className="svc-example" key={example}>
                  {example}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
