// Fileira de argolas — referência direta à encadernação espiral dos
// cadernos da loja, usada como elemento decorativo recorrente.
export default function SpiralEdge({ count = 9, className = "", color = "#55231f", direction = "column" }) {
  return (
    <div
      className={`flex ${direction === "row" ? "flex-row" : "flex-col"} items-center justify-between ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="block rounded-full border-2"
          style={{ width: 10, height: 10, borderColor: color, opacity: 0.55 }}
        />
      ))}
    </div>
  );
}
