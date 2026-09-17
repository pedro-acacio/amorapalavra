import { NotebookPen, BookOpenCheck, CalendarHeart, Scissors } from "lucide-react";
import Reveal from "./Reveal";
import { PRODUTOS } from "../data";

const ICONS = [NotebookPen, BookOpenCheck, CalendarHeart, Scissors];

export default function Produtos() {
  return (
    <section id="produtos" className="px-6 py-24 bg-creme">
      <div className="max-w-6xl mx-auto">
        <Reveal className="max-w-xl">
          <span className="text-xs tracking-[0.2em] text-rosa font-medium uppercase">
            Produtos
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-vinho mt-4">
            O que fazemos com as mãos
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {PRODUTOS.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="h-full p-8 rounded-2xl border border-vinho/10 bg-white/40 hover:border-rosa/40 transition-colors">
                  <Icon className="text-rosa" size={26} strokeWidth={1.5} />
                  <h3 className="font-display text-xl text-vinho mt-5">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-vinho/75 leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
