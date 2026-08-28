import Link from "next/link";
import { services } from "../../data/services";
import { socials } from "../../data/socials";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col">
            <h5>StarLabs.dev</h5>
            <p style={{ maxWidth: "30ch" }}>Tecnología para convertir ideas en soluciones reales.</p>
          </div>
          <div className="foot-col">
            <h5>Enlaces</h5>
            <Link href="/">Inicio</Link>
            <Link href="/#identidad">Sobre</Link>
            <Link href="/#proceso">Proceso</Link>
            <Link href="/servicios">Servicios</Link>
            <Link href="/portafolio">Portafolio</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
          <div className="foot-col">
            <h5>Categorías</h5>
            {services.map((service) => (
              <Link key={service.id} href="/servicios">
                {service.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 STARLABS.dev</span>
          <ul className="foot-social">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.name} — ${social.handle}`}
                  title={social.handle}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d={social.icon} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
