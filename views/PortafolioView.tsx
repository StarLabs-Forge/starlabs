import { Hero } from "../components/sections/Hero";
import { CaseStudy } from "../components/cases/CaseStudy";
import { Tag } from "../components/ui/Tag";
import { Reveal } from "../components/ui/Reveal";
import { Meta } from "../components/seo/Meta";
import { caseStudies } from "../data/caseStudies";
import "./styles/PortafolioView.css";

export default function PortafolioView() {
  const check = caseStudies.find((c) => c.slug === "check")!;

  return (
    <>
      <Meta
        title="Portafolio — StarLabs"
        description="Casos reales construidos por StarLabs. Caso destacado: CHECK, plataforma de control de acceso para vida nocturna en La Paz."
      />
      <Hero
        eyebrow="Portafolio"
        title="No te lo contamos. Te lo mostramos."
        lead="Proyectos que nacieron como ideas y se convirtieron en productos reales."
        variant="page"
        paddingBottom={48}
      />

      <section className="tight">
        <div className="wrap">
          <Reveal>
            <CaseStudy caseStudy={check} indexLabel="01 / SELECTED WORK" />
          </Reveal>
        </div>
      </section>

      <section className="tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <span className="idx">02 / PRÓXIMOS CASOS</span>
          <Reveal delay={80}>
            <div
              className="card"
              style={{ border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", background: "var(--bg-900)" }}
            >
              <Tag variant="beta">PRÓXIMAMENTE</Tag>
              <h3 style={{ marginTop: 14 }}>Más casos, a medida que salen de beta</h3>
              <p style={{ marginTop: 8 }}>
                Los proyectos que hoy están en StarLabs Innovations se suman aquí cuando validan su primer uso real —
                el mismo criterio que aplicamos con CHECK.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
