import "./Logo.css";

// Isotipo AETHRON con gradiente de colores vibrante (cyan → azul → púrpura → magenta)
// Diseño escalable que funciona en todos los tamaños
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="126"
      height="140"
      viewBox="0 0 126 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="AETHRON"
      className={`sl-logo ${className}`.trim()}
    >
      <defs>
        {/* Gradiente principal: cyan → azul → púrpura → magenta */}
        <linearGradient id="aethron-gradient" x1="16.8" y1="133" x2="105" y2="12.6" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#20D9FF" />
          <stop offset="38%" stopColor="#287BFF" />
          <stop offset="68%" stopColor="#7657FF" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>

      {/* Triángulo "A" principal con gradiente */}
      <path
        d="M12.6 128.8L58.8 14C60.55 9.66 65.45 9.66 67.2 14L113.4 128.8L92.4 101.5L63.7 35.7L33.6 102.2L12.6 128.8Z"
        fill="url(#aethron-gradient)"
      />

      {/* Detalle interno superior: blanco semi-opaco */}
      <path
        d="M44.8 84.7L63 43.4L81.2 84.7L72.1 75.6L63 57.4L53.9 75.6L44.8 84.7Z"
        fill="#F7F9FC"
        fillOpacity="0.96"
      />

      {/* Detalle decorativo central: azul claro */}
      <path
        d="M63 57.4C64.96 72.24 69.16 78.54 83.3 81.2C69.16 83.86 64.96 90.16 63 105C61.04 90.16 56.84 83.86 42.7 81.2C56.84 78.54 61.04 72.24 63 57.4Z"
        fill="#78A7FF"
      />

      {/* Detalle decorativo inferior: blanco */}
      <path
        d="M63 65.8C64.05 74.9 66.5 79.1 74.9 81.2C66.5 83.3 64.05 87.5 63 96.6C61.95 87.5 59.5 83.3 51.1 81.2C59.5 79.1 61.95 74.9 63 65.8Z"
        fill="white"
      />
    </svg>
  );
}
