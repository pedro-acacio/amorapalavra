import { Heart } from "lucide-react";
import Reveal from "./Reveal";
import NotebookMock from "./NotebookMock";
import BrandMark from "./BrandMark";
import { GALERIA } from "../data";

const COVERS = ["#f3c8d5", "#cf9a4c", "#e8b4c4", "#dba8b8", "#e3c88f", "#f0d3dd"];

export default function Galeria() {
  return (
    <section id="galeria" className="px-6 py-24 bg-creme">
      <div className="max-w-6xl mx-auto">
        <Reveal className="max-w-xl">
          <span className="text-xs tracking-[0.2em] text-rosa font-medium uppercase">
            Galeria
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-vinho mt-4">
            Peças feitas à mão
          </h2>
          <p className="mt-3 text-sm text-vinho/60">
            Em breve, fotos reais dos produtos. Por enquanto, um espaço reservado
            para cada categoria.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALERIA.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <NotebookMock cover={COVERS[i % COVERS.length]} className="w-full aspect-[4/3]">
                {i % 2 === 0 ? (
                  <Heart size={32} strokeWidth={1.2} className="text-vinho/40" />
                ) : (
                  <BrandMark className="w-12 h-12" ring="transparent" line="#55231f" heart="#55231f" />
                )}
              </NotebookMock>
              <p className="mt-3 text-center font-display text-lg text-vinho">{p.title}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
