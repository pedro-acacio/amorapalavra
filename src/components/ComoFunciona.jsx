import { Truck, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { COMO_FUNCIONA, LOCAL } from "../data";

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="px-6 py-24 bg-vinho">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <span className="text-xs tracking-[0.2em] text-creme/50 font-medium uppercase">
            Como funciona
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-creme mt-4">
            Do pedido ao seu novo caderno
          </h2>
          <p className="mt-6 text-creme/75 leading-relaxed max-w-2xl mx-auto">
            {COMO_FUNCIONA}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3 text-creme/90">
              <Truck size={20} className="text-rosa" />
              <span className="text-sm">Envio para todo o Brasil</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-creme/20" />
            <div className="flex items-center gap-3 text-creme/90">
              <MapPin size={20} className="text-rosa" />
              <span className="text-sm">Atendimento presencial em {LOCAL}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
