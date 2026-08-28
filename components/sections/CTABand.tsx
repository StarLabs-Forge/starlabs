import { Button } from "../ui/Button";
import "./CTABand.css";

// Reemplaza los 4 bloques .ctaband casi idénticos (home, servicios, portafolio) — texto cambia via props.
interface CTABandProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export function CTABand({ title, description, ctaLabel, ctaHref }: CTABandProps) {
  return (
    <div className="ctaband">
      <div className="wrap">
        <h2>{title}</h2>
        <p>{description}</p>
        <Button href={ctaHref}>{ctaLabel}</Button>
      </div>
    </div>
  );
}
