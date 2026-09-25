import { useState } from "react";
import { Hero } from "../components/sections/Hero";
import { Meta } from "../components/seo/Meta";
import { Reveal } from "../components/ui/Reveal";
import { Eyebrow } from "../components/ui/Eyebrow";
import { ProjectCard } from "../components/portfolio/ProjectCard";
import { CaseModal } from "../components/portfolio/CaseModal";
import { portfolioProjects } from "../data/portfolioProjects";
import { caseStudies } from "../data/caseStudies";
import { clientCases } from "../data/clientCases";
import "./styles/PortafolioView.css";

// Grid de proyectos (imagen + frase simple + dos botones), pensado para
// alguien que no sabe de tecnología y solo quiere saber si le sirve o le
// interesa sumarse. El detalle técnico completo (antes suelto en la página)
// ahora vive solo dentro de <CaseModal>, detrás de "Ver más".
// Separa "Productos propios" (kind:"product", ideas de VEXORA) de "Trabajos
// para clientes" (kind:"client", encargos de StarLabs Web) en dos secciones:
// mismo <ProjectCard>, pero nunca en la misma grilla.
export default function PortafolioView() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const ownProducts = portfolioProjects.filter((p) => p.kind === "product");
  const clientWork = portfolioProjects.filter((p) => p.kind === "client");

  const openProject = portfolioProjects.find((p) => p.slug === openSlug);
  const openCaseStudy = openProject?.caseStudySlug
    ? caseStudies.find((c) => c.slug === openProject.caseStudySlug)
    : undefined;
  const openClientCase = openProject?.clientCaseSlug
    ? clientCases.find((c) => c.slug === openProject.clientCaseSlug)
    : undefined;

  return (
    <>
      <Meta
        title="Portafolio — VEXORA"
        description="Proyectos reales construidos por VEXORA: productos propios y trabajos para clientes. Caso destacado: CHECK, control de acceso para vida nocturna en La Paz."
      />
      <div className="page-hero-block">
        <Hero
          eyebrow="Portafolio"
          title="No te lo contamos. Te lo mostramos."
          lead="Proyectos que nacieron como ideas y se convirtieron en productos reales — o están en camino de serlo."
          variant="page"
          paddingBottom={48}
        />

        <section className="tight">
          <div className="wrap">
            <div className="pgrid">
              {ownProducts.map((project, index) => (
                <Reveal key={project.slug} delay={index * 60}>
                  <ProjectCard project={project} onOpenDetail={setOpenSlug} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {clientWork.length > 0 && (
          <section className="tight">
            <div className="wrap">
              <Reveal className="section-head">
                <Eyebrow>Trabajos para clientes</Eyebrow>
                <h2>También construimos para otros</h2>
                <p style={{ color: "var(--text-500)", marginTop: 10 }}>
                  Encargos reales de StarLabs Web — sitios y landings que diseñamos y desarrollamos para terceros.
                </p>
              </Reveal>
              <div className="pgrid">
                {clientWork.map((project, index) => (
                  <Reveal key={project.slug} delay={index * 60}>
                    <ProjectCard project={project} onOpenDetail={setOpenSlug} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {(openCaseStudy || openClientCase) && (
        <CaseModal caseStudy={openCaseStudy} clientCase={openClientCase} onClose={() => setOpenSlug(null)} />
      )}
    </>
  );
}
