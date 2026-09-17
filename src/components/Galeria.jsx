import { ImageIcon } from "lucide-react";
import Reveal from "./Reveal";
import { GALERIA } from "../data";

const GRADIENTS = [
  "from-rosa/30 via-dourado/15 to-salvia/20",
  "from-dourado/25 via-salvia/15 to-rosa/20",
  "from-salvia/25 via-rosa/15 to-dourado/20",
];

export default function Galeria() {
  return (
    <section id="galeria" className="px-6 py-24 bg-papel">
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
              <div className="group block w-full rounded-2xl overflow-hidden border border-vinho/10 bg-white/40">
                <div
                  className={`aspect-[4/3] flex items-center justify-center bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]}`}
                >
                  <ImageIcon size={36} strokeWidth={1} className="text-vinho/40" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-vinho">{p.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
