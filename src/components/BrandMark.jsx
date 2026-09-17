// Selo original inspirado na marca: um coração acolhido por duas curvas
// (o abraço/cuidado), com um brilho no alto — reinterpretação própria,
// não o arquivo/imagem original da loja.
export default function BrandMark({ className = "", ring = "#d8527d", line = "#55231f", heart = "#55231f" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="Amor à Palavra">
      {ring !== "transparent" && <circle cx="50" cy="50" r="50" fill={ring} />}

      <path
        d="M22 28 Q10 50 22 74"
        fill="none"
        stroke={line}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M78 28 Q90 50 78 74"
        fill="none"
        stroke={line}
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M50 68C34 56 26 46 26 34c0-10 8-16 16-10 3.4 2.6 6 6 8 10 2-4 4.6-7.4 8-10 8-6 16 0 16 10 0 12-8 22-24 34Z"
        fill={heart}
      />

      <path d="M74 18l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" fill={line} />
      <path d="M82 30l1.1 2.7 2.7 1.1-2.7 1.1L82 37.6l-1.1-2.7-2.7-1.1 2.7-1.1Z" fill={line} opacity="0.75" />
    </svg>
  );
}
