import { Logo } from "../components/ui/Logo";
import "./styles/Loading.css";

// Fallback de <Suspense> en App.tsx mientras carga el chunk de una vista.
// En Next este archivo (app/loading.tsx) lo montaba el framework solo; aquí se
// pasa a mano, que es la única diferencia real.
export function Loading() {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <span className="loading-mark">
        <Logo className="loading-svg" />
      </span>
      <span className="loading-word">
        <span className="grad">STARLABS</span>
        <span className="dim">.dev</span>
      </span>
      <span className="loading-bar" aria-hidden="true" />
      <span className="loading-hint">Cargando…</span>
    </div>
  );
}
