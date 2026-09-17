import SpiralEdge from "./SpiralEdge";

// Simula a capa de um caderno de espiral — o produto real da loja —
// como bloco decorativo enquanto não há fotos reais dos produtos.
export default function NotebookMock({ cover = "#f3c8d5", className = "", rotate = 0, children }) {
  return (
    <div
      className={`flex flex-col rounded-2xl shadow-xl border border-vinho/10 overflow-hidden bg-creme ${className}`}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      <SpiralEdge count={11} direction="row" className="px-4 pt-3 pb-1 shrink-0" color="#55231f" />
      <div className="flex-1 flex items-center justify-center" style={{ background: cover }}>
        {children}
      </div>
    </div>
  );
}
