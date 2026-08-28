import Image from "next/image";
import "./loading.css";

// Next.js muestra este archivo automáticamente (vía Suspense) mientras
// carga un segmento de ruta — no necesita estar montado a mano en ningún lado.
export default function Loading() {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <span className="loading-mark">
        <Image src="/brand/isotipo.png" alt="" width={40} height={40} priority />
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
