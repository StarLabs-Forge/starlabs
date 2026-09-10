import { useState } from "react";
import { Hero } from "../components/sections/Hero";
import { CTABand } from "../components/sections/CTABand";
import { Reveal } from "../components/ui/Reveal";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Meta } from "../components/seo/Meta";
import { ProjectCard } from "../components/portfolio/ProjectCard";
import { CaseModal } from "../components/portfolio/CaseModal";
import { portfolioProjects } from "../data/portfolioProjects";
import { caseStudies } from "../data/caseStudies";
import "../components/sections/ServiceDetail.css";
import "./styles/PortafolioView.css";

// A diferencia de /servicios/*, esta página no habla de trabajo para
// clientes: es el lado de StarLabs que investiga problemas propios y los
// convierte en productos propios. Reutiliza la misma lista y la misma
// <ProjectCard> que /portafolio — agregar un producto nuevo es agregar una
// entrada en data/portfolioProjects.ts, no rediseñar esta página.
export default function ProductosView() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const openProject = portfolioProjects.find((p) => p.slug === openSlug);
  const openCaseStudy = openProject?.caseStudySlug
    ? caseStudies.find((c) => c.slug === openProject.caseStudySlug)
    : undefined;

  const hasProducts = portfolioProjects.length > 0;

  return (
    <>
      <Meta
        title="Productos propios — StarLabs"
        description="Los productos y proyectos que nacen dentro de StarLabs, no por encargo de un cliente."
      />
      <div className="page-hero-block">
        <Hero
          eyebrow="StarLabs"
          title="Productos que nacen de nuestras propias ideas."
          lead="Nuestras ideas, hechas realidad."
          variant="page"
          paddingBottom={56}
        />

        <section className="tight">
          <div className="wrap">
            <Reveal className="svc-lead">
              <p>
                StarLabs no solo construye para otros: también investigamos problemas, planteamos ideas propias,
                diseñamos soluciones y desarrollamos nuestros propios productos tecnológicos. Estos son los proyectos
                que nacen dentro de StarLabs — no por encargo de un cliente, sino porque vimos un problema que
                queríamos resolver.
              </p>
            </Reveal>

            <Reveal delay={80} className="section-head">
              <Eyebrow>Nuestros productos</Eyebrow>
              <h2>Lo que estamos construyendo</h2>
            </Reveal>

            <div className="pgrid">
              {portfolioProjects.map((project, index) => (
                <Reveal key={project.slug} delay={index * 60}>
                  <ProjectCard project={project} onOpenDetail={setOpenSlug} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      {openCaseStudy && <CaseModal caseStudy={openCaseStudy} onClose={() => setOpenSlug(null)} />}

      <Reveal>
        <CTABand
          title={hasProducts ? "Conoce nuestros proyectos" : "Estamos construyendo lo que sigue."}
          description={
            hasProducts
              ? "Cada caso completo — el problema, la solución y el estado actual — vive en nuestro portafolio."
              : "Todavía no hay suficiente para mostrar, pero ya estamos trabajando en ello."
          }
          ctaLabel={hasProducts ? "Ver portafolio completo" : "Volver al inicio"}
          ctaHref={hasProducts ? "/portafolio" : "/"}
        />
      </Reveal>
    </>
  );
}
