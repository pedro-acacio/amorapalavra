import { BookOpenText, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { GUIAS } from "../data";

export default function GuiasBiblicos() {
  return (
    <section id="guias" className="px-6 py-24 bg-vinho">
      <div className="max-w-6xl mx-auto">
        <Reveal className="max-w-xl">
          <span className="font-script text-2xl text-rosa-clara leading-none">
            para estudar em casa
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-creme mt-3">
            Guias bíblicos digitais
          </h2>
          <p className="mt-3 text-sm text-creme/70">
            PDFs de estudo para baixar na hora, com pagamento seguro pela Kiwify.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {GUIAS.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <a
                href={g.link}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col gap-4 p-8 rounded-2xl border border-creme/15 bg-creme/5 hover:bg-creme/10 hover:border-rosa/50 transition-colors"
              >
                <BookOpenText className="text-rosa" size={28} strokeWidth={1.5} />
                <h3 className="font-display text-xl text-creme">{g.title}</h3>
                <p className="text-sm text-creme/70 leading-relaxed flex-1">{g.text}</p>
                <span className="flex items-center gap-1.5 text-sm font-medium text-rosa">
                  Comprar na Kiwify
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
