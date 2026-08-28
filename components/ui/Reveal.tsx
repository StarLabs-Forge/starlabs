"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Fade-up genérico al entrar en viewport. Sin JS (o con prefers-reduced-motion)
// el contenido nunca lleva la clase "reveal" y queda completamente visible —
// el movimiento es una mejora progresiva, no un requisito para ver el contenido.
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    setArmed(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = [armed ? "reveal" : "", visible ? "in" : "", className ?? ""].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={classes || undefined} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
