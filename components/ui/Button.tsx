import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Button.css";

// Equivalente a .btn / .btn-ghost en /styles.css. Mismos tokens, sin valores nuevos.
interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  showArrow?: boolean;
}

// Un href externo (otra app de StarLabs, un mailto, un subdominio) no puede
// pasar por <Link>: React Router intentaría resolverlo como ruta interna y la
// navegación se quedaría dentro de la SPA. Se detecta aquí para que quien use
// <Button> no tenga que pensarlo.
function isExternal(href: string) {
  return /^([a-z][a-z0-9+.-]*:|\/\/)/i.test(href);
}

export function Button({ href, children, variant = "solid", showArrow = true }: ButtonProps) {
  const className = variant === "solid" ? "btn" : "btn-ghost";
  const content = (
    <>
      {children}
      {showArrow && <span className="arrow">→</span>}
    </>
  );

  if (isExternal(href)) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {content}
    </Link>
  );
}
