import { useState } from "react";
import { Hero } from "../components/sections/Hero";
import { Meta } from "../components/seo/Meta";
import { Reveal } from "../components/ui/Reveal";
import { ProjectCard } from "../components/portfolio/ProjectCard";
import { CaseModal } from "../components/portfolio/CaseModal";
import { portfolioProjects } from "../data/portfolioProjects";
import { caseStudies } from "../data/caseStudies";
import "./styles/PortafolioView.css";

// Grid de proyectos (imagen + frase simple + dos botones), pensado para
// alguien que no sabe de tecnología y solo quiere saber si le sirve o le
// interesa sumarse. El detalle técnico completo (antes suelto en la página)
// ahora vive solo dentro de <CaseModal>, detrás de "Ver más".
export default function PortafolioView() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const openProject = portfolioProjects.find((p) => p.slug === openSlug);
  const openCaseStudy = openProject?.caseStudySlug
    ? caseStudies.find((c) => c.slug === openProject.caseStudySlug)
    : undefined;

  return (
    <>
      <Meta
        title="Portafolio — StarLabs"
        description="Proyectos reales construidos por StarLabs, y lo que viene. Caso destacado: CHECK, control de acceso para vida nocturna en La Paz."
      />
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
            {portfolioProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 60}>
                <ProjectCard project={project} onOpenDetail={setOpenSlug} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {openCaseStudy && <CaseModal caseStudy={openCaseStudy} onClose={() => setOpenSlug(null)} />}
    </>
  );
}
