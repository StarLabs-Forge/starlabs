import type { ReactNode } from "react";
import Link from "next/link";
import "./Button.css";

// Equivalente a .btn / .btn-ghost en /styles.css. Mismos tokens, sin valores nuevos.
interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  showArrow?: boolean;
}

export function Button({ href, children, variant = "solid", showArrow = true }: ButtonProps) {
  const className = variant === "solid" ? "btn" : "btn-ghost";
  return (
    <Link href={href} className={className}>
      {children}
      {showArrow && <span className="arrow">→</span>}
    </Link>
  );
}
