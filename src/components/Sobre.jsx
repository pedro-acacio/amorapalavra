import { Heart, BookOpen, Scissors } from "lucide-react";
import Reveal from "./Reveal";
import BrandMark from "./BrandMark";
import { MISSAO, SOBRE_FUNDADORA, FUNDADORA } from "../data";

const VALORES = [
  { icon: Heart, label: "Fé em cada detalhe" },
  { icon: Scissors, label: "Feito à mão, com cuidado" },
  { icon: BookOpen, label: "Pensado para a Palavra" },
];

export default function Sobre() {
  return (
    <section id="sobre">
      <div className="bg-vinho px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[minmax(0,260px)_1fr] gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="bg-creme rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col gap-5">
              {VALORES.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.label} className="flex items-center gap-3">
                    <Icon size={22} className="text-rosa shrink-0" strokeWidth={1.5} />
                    <span className="text-sm text-vinho/85">{v.label}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="font-script text-2xl text-rosa-clara leading-none">
              a nossa missão
            </span>
            <div className="mt-4 flex flex-col gap-4">
              {MISSAO.map((paragrafo) => (
                <p key={paragrafo.slice(0, 24)} className="text-sm md:text-base text-creme/90 leading-relaxed">
                  {paragrafo}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="px-6 py-24 bg-creme">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="w-full max-w-sm mx-auto md:mx-0 aspect-square rounded-full bg-rosa-clara/50 flex items-center justify-center">
              <BrandMark className="w-2/3 h-2/3" ring="#d8527d" line="#55231f" heart="#55231f" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="text-xs tracking-[0.2em] text-rosa font-medium uppercase">
              Quem faz
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-vinho mt-4">
              {FUNDADORA}
            </h2>
            <p className="mt-6 text-vinho/80 leading-relaxed">{SOBRE_FUNDADORA}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
