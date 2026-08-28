import type { ReactNode } from "react";

// Equivalente a .eyebrow — dot con glow + label mono uppercase.
export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}
