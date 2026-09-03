import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Next restauraba el scroll y saltaba al hash por su cuenta; React Router no.
// Al cambiar de ruta subimos arriba, y si la URL trae hash (los enlaces
// "/#identidad" y "/#proceso" del nav y del footer) buscamos ese elemento.
// El reintento existe porque las vistas son lazy: cuando llega la navegación
// el <section id="..."> todavía puede no estar montado.
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    let frames = 0;
    let raf = 0;
    const findTarget = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      // ~1s a 60fps antes de rendirse, por si el chunk tarda en cargar.
      if (frames++ < 60) raf = requestAnimationFrame(findTarget);
    };
    raf = requestAnimationFrame(findTarget);

    return () => cancelAnimationFrame(raf);
  }, [pathname, hash]);

  return null;
}
