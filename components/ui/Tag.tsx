import type { ReactNode } from "react";
import "./Tag.css";

// Equivalente a .tag.on / .tag.beta. .case-status es una clase distinta
// (ver CaseStudy.tsx) y no pasa por este componente.
interface TagProps {
  children: ReactNode;
  variant: "on" | "beta";
}

export function Tag({ children, variant }: TagProps) {
  return <span className={`tag ${variant}`}>{children}</span>;
}
