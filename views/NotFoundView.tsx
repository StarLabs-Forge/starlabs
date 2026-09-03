import { Link } from "react-router-dom";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Button } from "../components/ui/Button";
import { Meta } from "../components/seo/Meta";
import "./styles/NotFoundView.css";

// Ruta comodín en App.tsx: cualquier URL que no matchee cae aquí, dentro del
// mismo layout (nav + footer se mantienen), igual que app/not-found.tsx.
export default function NotFoundView() {
  return (
    <section className="notfound gridlines">
      <Meta title="Página no encontrada — StarLabs" description="Esta página no existe o se movió de lugar." />
      <span className="notfound-digits" aria-hidden="true">404</span>
      <div className="wrap">
        <div className="notfound-body">
          <span className="notfound-mark">
            <img src="/brand/isotipo.png" alt="" width={34} height={34} />
          </span>
          <Eyebrow>Error 404</Eyebrow>
          <h1>
            Esta página <em>no existe.</em>
          </h1>
          <p className="lead">
            Puede que el enlace esté roto o que la hayamos movido. Volvamos a algo que sí funcione.
          </p>
          <div className="notfound-actions">
            <Button href="/">Volver al inicio</Button>
            <Button href="/contacto" variant="ghost" showArrow={false}>
              Cuéntanos tu idea
            </Button>
          </div>
          <nav className="notfound-links" aria-label="Enlaces útiles">
            <Link to="/servicios">Servicios</Link>
            <Link to="/portafolio">Portafolio</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
