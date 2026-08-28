import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Button } from "../components/ui/Button";
import "./not-found.css";

export const metadata: Metadata = {
  title: "Página no encontrada — StarLabs",
  description: "Esta página no existe o se movió de lugar.",
};

// app/not-found.tsx — Next.js lo renderiza automáticamente para cualquier
// ruta que no matchee dentro de /app, dentro del mismo layout raíz
// (nav + footer se mantienen).
export default function NotFound() {
  return (
    <section className="notfound gridlines">
      <span className="notfound-digits" aria-hidden="true">404</span>
      <div className="wrap">
        <div className="notfound-body">
          <span className="notfound-mark">
            <Image src="/brand/isotipo.png" alt="" width={34} height={34} />
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
            <Link href="/servicios">Servicios</Link>
            <Link href="/portafolio">Portafolio</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
