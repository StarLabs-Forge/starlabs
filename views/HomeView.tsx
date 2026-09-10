import { Link } from "react-router-dom";
import { Meta } from "../components/seo/Meta";
import { Hero } from "../components/sections/Hero";
import { ProductShowcase } from "../components/sections/ProductShowcase";
import { Process } from "../components/sections/Process";
import { Identity } from "../components/sections/Identity";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { ProjectDeck } from "../components/portfolio/ProjectDeck";
import { Testimonials } from "../components/testimonials/Testimonials";
import { CTABand } from "../components/sections/CTABand";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Reveal } from "../components/ui/Reveal";
import { HeroScrollFx } from "../components/effects/HeroScrollFx";
import { SectionParallax } from "../components/effects/SectionParallax";

const TAGLINE_ITEMS = [
  {
    label: "Web",
    icon: (
      <svg viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" />
        <path d="M1.5 8h13M8 1.5c1.8 1.8 2.8 4 2.8 6.5S9.8 12.7 8 14.5C6.2 12.7 5.2 10.5 5.2 8S6.2 3.3 8 1.5Z" stroke="currentColor" />
      </svg>
    ),
  },
  {
    label: "Apps",
    icon: (
      <svg viewBox="0 0 16 16" fill="none">
        <rect x="4" y="1.5" width="8" height="13" rx="1.6" stroke="currentColor" />
        <path d="M7 12.3h2" stroke="currentColor" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Sistemas",
    icon: (
      <svg viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5 14 5v6l-6 3.5L2 11V5l6-3.5Z" stroke="currentColor" strokeLinejoin="round" />
        <path d="M2 5l6 3.5L14 5M8 8.5V15" stroke="currentColor" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Productos propios",
    icon: (
      <svg viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="2.2" stroke="currentColor" />
        <path
          d="M8 1.8v1.6M8 12.6v1.6M14.2 8h-1.6M3.4 8H1.8M12.3 3.7l-1.1 1.1M4.8 11.2l-1.1 1.1M12.3 12.3l-1.1-1.1M4.8 4.8 3.7 3.7"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function HomeView() {
  return (
    <>
      <Meta
        title="StarLabs — ¿Tienes una idea? Hagámosla realidad"
        description="StarLabs crea contigo páginas web, aplicaciones y sistemas que convierten tus ideas en algo real y que funciona."
      />
      <Hero
        title={
          <>
            <span className="hero-line" style={{ animationDelay: "0.05s" }}>
              ¿Tienes una idea?
            </span>
            <br />
            <span className="hero-line" style={{ animationDelay: "0.18s" }}>
              Hagámosla <em>realidad.</em>
            </span>
          </>
        }
        lead="Creamos contigo páginas web, aplicaciones y sistemas que convierten tus ideas en algo real y que funciona."
        variant="home"
        cta={{
          label: "Cuéntanos tu idea",
          href: "/contacto",
          ghostLabel: "Ver nuestro trabajo",
          ghostHref: "/portafolio",
        }}
        tagline={TAGLINE_ITEMS}
        scrollHint="Desliza para descubrir"
      >
        <ProductShowcase />
      </Hero>
      <HeroScrollFx />
      <SectionParallax />

      <section id="identidad" className="section-deco gridlines section-snap">
        <div className="section-index">01</div>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="idx">01 / SOBRE</span>
            <Eyebrow>Sobre StarLabs</Eyebrow>
            <h2>Las buenas ideas merecen convertirse en algo real</h2>
          </Reveal>
          <Reveal delay={100}>
            <Identity />
          </Reveal>
        </div>
      </section>

      <section id="proceso" className="section-deco section-snap">
        <div className="section-index">02</div>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="idx">02 / PROCESO</span>
            <Eyebrow>Cómo trabajamos</Eyebrow>
            <h2>
              De la idea al resultado. <br /> Sin perderse por el camino.
            </h2>
          </Reveal>
          <Process />
        </div>
      </section>

      <section id="servicios" className="section-deco gridlines section-snap">
        <div className="section-index">03</div>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="idx">03 / SERVICIOS</span>
            <Eyebrow>Qué construimos</Eyebrow>
            <h2>¿Qué podemos construir contigo?</h2>
            <p style={{ color: "var(--text-500)", marginTop: 10 }}>
              Desde una idea hasta una solución lista para usar.
            </p>
          </Reveal>
          <ServicesGrid />
          <Reveal delay={150} className="services-followup">
            <p>
              ¿No sabes cuál necesitas? <br /> Cuéntanos qué quieres conseguir. Nosotros encontramos cómo hacerlo.
            </p>
            <Link to="/contacto" className="btn-ghost">
              Hablemos <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="proyectos" className="tight section-snap">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="idx">04 / PORTAFOLIO</span>
            <Eyebrow>Portafolio</Eyebrow>
            <h2>Ya construimos uno. Vienen cuatro más.</h2>
            <p style={{ color: "var(--text-500)", marginTop: 10 }}>
              Un vistazo rápido a lo que StarLabs tiene en producción y en camino.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ProjectDeck />
          </Reveal>
        </div>
      </section>

      <section id="testimonios" className="tight section-snap">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="idx">05 / TESTIMONIOS</span>
            <Eyebrow>Lo que dicen quienes trabajaron con nosotros</Eyebrow>
            <h2>Construimos, y quien nos contrató lo cuenta.</h2>
          </Reveal>
          <Reveal delay={100}>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      <Reveal>
        <CTABand
          title="Cuéntanos tu idea."
          description="No necesitas tenerlo todo claro. Empecemos por lo que tienes."
          ctaLabel="Empecemos"
          ctaHref="/contacto"
        />
      </Reveal>
    </>
  );
}
