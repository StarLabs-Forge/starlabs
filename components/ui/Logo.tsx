import "./Logo.css";

// Isotipo StarLabs: estrella faceteada (8 triángulos en la paleta de marca) que
// remata en una cola en S — doble lectura estrella / inicial de "Labs". Vector
// puro, sin dependencia de glow para leerse (funciona apagado, ver Logo.css).
// Reemplaza el PNG generado por IA que vivía en /public/brand/isotipo.png.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 210"
      role="img"
      aria-label="StarLabs"
      className={`sl-logo ${className}`.trim()}
    >
      <defs>
        <linearGradient id="sl-mark-fill" x1="8%" y1="92%" x2="92%" y2="8%">
          <stop offset="0%" stopColor="#20D9FF" />
          <stop offset="38%" stopColor="#287BFF" />
          <stop offset="68%" stopColor="#7657FF" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
        <linearGradient id="sl-mark-ribbon" x1="0%" y1="0%" x2="20%" y2="100%">
          <stop offset="0%" stopColor="#7657FF" />
          <stop offset="55%" stopColor="#287BFF" />
          <stop offset="100%" stopColor="#20D9FF" />
        </linearGradient>
      </defs>

      <path
        className="sl-ribbon"
        d="M118 150 C128 140,130 122,116 118 C104 115,96 122,100 132 C104 142,116 138,112 126 C108 116,92 112,80 122 C68 132,70 150,84 158"
        fill="none"
        stroke="url(#sl-mark-ribbon)"
        strokeWidth={13}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g stroke="#050816" strokeWidth={1.2} strokeOpacity={0.35} strokeLinejoin="round" fill="url(#sl-mark-fill)">
        <polygon points="100,100 100,12 118,82" />
        <polygon points="100,100 118,82 172,100" />
        <polygon points="100,100 172,100 118,118" />
        <polygon points="100,100 118,118 100,188" />
        <polygon points="100,100 100,188 82,118" />
        <polygon points="100,100 82,118 28,100" />
        <polygon points="100,100 28,100 82,82" />
        <polygon points="100,100 82,82 100,12" />
      </g>

      <polyline
        points="100,12 82,82 28,100"
        fill="none"
        stroke="#EAF6FF"
        strokeWidth={1.4}
        strokeOpacity={0.55}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon points="24,164 146,44 158,50 36,170" fill="#F5F7FF" opacity={0.35} style={{ mixBlendMode: "screen" }} />
      <path
        d="M152 28 C153.4 34 155 35.6 161 37 C155 38.4 153.4 40 152 46 C150.6 40 149 38.4 143 37 C149 35.6 150.6 34 152 28 Z"
        fill="#EAF6FF"
      />
      <path
        d="M170 50 C170.8 53.4 171.7 54.3 175 55 C171.7 55.7 170.8 56.6 170 60 C169.2 56.6 168.3 55.7 165 55 C168.3 54.3 169.2 53.4 170 50 Z"
        fill="#EAF6FF"
        opacity={0.85}
      />
    </svg>
  );
}
