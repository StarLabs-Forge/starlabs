import type { CSSProperties, ReactNode } from "react";
import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";
import "./Hero.css";

// Cubre el hero de las 4 páginas: home usa variant="home" (grid 2 columnas + children
// para el termpanel + CTAs + sys-status); las subpáginas usan variant="page" (wrap en
// bloque, h1 más chico, sin CTA/side-panel) — mismos overrides inline que hoy están
// en el style="" de cada .hero en el HTML original.
interface HeroCTA {
  label: string;
  href: string;
  ghostLabel?: string;
  ghostHref?: string;
}

interface HeroTaglineItem {
  icon: ReactNode;
  label: string;
}

interface HeroProps {
  eyebrow?: string;
  title: ReactNode;
  lead: string;
  variant?: "home" | "page";
  paddingBottom?: number;
  titleMaxWidthCh?: number;
  cta?: HeroCTA;
  showStatus?: boolean;
  tagline?: HeroTaglineItem[];
  scrollHint?: string;
  children?: ReactNode;
}

export function Hero({
  eyebrow,
  title,
  lead,
  variant = "page",
  paddingBottom,
  titleMaxWidthCh = 24,
  cta,
  showStatus = false,
  tagline,
  scrollHint,
  children,
}: HeroProps) {
  const headerStyle: CSSProperties | undefined =
    paddingBottom !== undefined ? { paddingBottom } : undefined;
  const wrapStyle: CSSProperties | undefined =
    variant === "page" ? { display: "block" } : undefined;
  const titleStyle: CSSProperties | undefined =
    variant === "page"
      ? { maxWidth: `${titleMaxWidthCh}ch`, fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)" }
      : undefined;

  return (
    <header className="hero" style={headerStyle}>
      <div className="wrap" style={wrapStyle}>
        <div>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 style={titleStyle}>{title}</h1>
          <p className="lead">{lead}</p>

          {cta && (
            <div className="hero-cta">
              <Button href={cta.href}>{cta.label}</Button>
              {cta.ghostLabel && cta.ghostHref && (
                <Button href={cta.ghostHref} variant="ghost" showArrow={false}>
                  {cta.ghostLabel}
                </Button>
              )}
            </div>
          )}

          {showStatus && (
            <div className="sys-status">
              <span className="pulse-dot" />
              Estado del sistema: <span className="ok-text">operativo</span>
            </div>
          )}
        </div>

        {children}

        {tagline && (
          <ul className="hero-tagline">
            {tagline.map((item) => (
              <li key={item.label}>
                <span className="hero-tagline-icon" aria-hidden="true">
                  {item.icon}
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {scrollHint && (
        <div className="hero-scrollhint">
          <span className="scrollhint-mouse" aria-hidden="true" />
          {scrollHint}
        </div>
      )}
    </header>
  );
}
