import { Hero } from "../components/sections/Hero";
import { ContactForm } from "../components/sections/ContactForm";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Reveal } from "../components/ui/Reveal";
import { Meta } from "../components/seo/Meta";
import "./styles/ContactoView.css";

export default function ContactoView() {
  return (
    <>
      <Meta
        title="Contacto — StarLabs"
        description="Cuéntanos tu idea. No necesitas tenerlo todo claro, empecemos por lo que tienes."
      />
      <div className="page-hero-block">
        <Hero
          eyebrow="Contacto"
          title="Cuéntanos tu idea."
          lead="No necesitas tenerlo todo claro. Empecemos por lo que tienes."
          variant="page"
          paddingBottom={48}
          titleMaxWidthCh={20}
        />

        <section className="tight">
          <div className="wrap">
            <div className="contact-grid">
              <Reveal>
                <ContactForm />
              </Reveal>
              <Reveal delay={100} className="contact-direct">
                <Eyebrow>¿Prefieres hablar directamente?</Eyebrow>
                <a href="mailto:hola@starlabs.dev" className="val">
                  hola@starlabs.dev
                </a>
                <span className="contact-direct-location">La Paz, Bolivia</span>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
