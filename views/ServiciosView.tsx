import { Hero } from "../components/sections/Hero";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { CTABand } from "../components/sections/CTABand";
import { Reveal } from "../components/ui/Reveal";
import { Meta } from "../components/seo/Meta";

export default function ServiciosView() {
  return (
    <>
      <Meta
        title="Servicios — StarLabs"
        description="Qué construimos en StarLabs: web, apps, sistemas y soluciones a medida."
      />
      <Hero
        eyebrow="Servicios"
        title="¿Qué podemos construir contigo?"
        lead="Desde una idea hasta una solución lista para usar."
        variant="page"
        paddingBottom={56}
      />

      <section className="tight">
        <div className="wrap">
          <ServicesGrid />
          <Reveal delay={100} className="services-followup">
            <p>
              ¿No sabes cuál necesitas? <br /> Cuéntanos qué quieres conseguir. Nosotros encontramos cómo hacerlo.
            </p>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <CTABand
          title="Cuéntanos tu idea."
          description="No necesitas tenerlo todo claro. Empecemos por lo que tienes."
          ctaLabel="Hablemos"
          ctaHref="/contacto"
        />
      </Reveal>
    </>
  );
}
