export default function Logo({ className = "", mark = "currentColor", text = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 220 40"
      className={className}
      role="img"
      aria-label="Amor à Palavra"
    >
      <path
        d="M10 8c0-3 2.4-5 5.4-5 2.6 0 4.9 1.5 6.1 3.8C22.7 4.5 25 3 27.6 3c3 0 5.4 2 5.4 5 0 6.2-11.5 14-11.5 14S10 14.2 10 8Z"
        fill={mark}
      />
      <text
        x="42"
        y="27"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="24"
        fontWeight="600"
        fill={text}
      >
        Amor à Palavra
      </text>
    </svg>
  );
}
