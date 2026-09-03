import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../ui/Logo";
import "./Navbar.css";

// Reemplaza el toggle imperativo + nav elevation de /script.js:3-37.
// Misma lógica, expresada como estado de React en vez de manipulación directa del DOM.
const NAV_LINKS = [
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap">
        <Link to="/" className="logo">
          <Logo className="mark" />
          <span className="wordmark">STARLABS</span>
          <span className="sub">.dev</span>
        </Link>
        <div className={`navlinks${open ? " open" : ""}`}>
          <Link to="/" aria-current={pathname === "/" ? "page" : undefined} onClick={() => setOpen(false)}>
            Inicio
          </Link>
          {/* Anchors a secciones de la Home — funcionan desde cualquier página:
              React Router navega a "/" y <ScrollManager> salta al hash. No pasan
              por aria-current porque no son rutas, son secciones dentro de "/". */}
          <Link to="/#identidad" onClick={() => setOpen(false)}>
            Sobre
          </Link>
          <Link to="/#proceso" onClick={() => setOpen(false)}>
            Proceso
          </Link>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contacto" className="btn" onClick={() => setOpen(false)}>
            Hablemos
          </Link>
        </div>
        <button
          className="navtoggle"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "×" : "≡"}
        </button>
      </div>
    </nav>
  );
}
