import { MessageCircle, ArrowDown, Heart } from "lucide-react";
import Reveal from "./Reveal";
import NotebookMock from "./NotebookMock";
import logo from "../assets/logo.jpg";
import { WHATSAPP_LINK } from "../data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 overflow-hidden"
    >
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="absolute -top-10 -right-20 w-80 h-80 rounded-full object-cover opacity-[0.08] pointer-events-none rotate-6"
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="font-script text-3xl text-rosa leading-none">
            uma missão de fé
          </span>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mt-3 text-vinho">
            Cadernos que te aproximam da Palavra.
          </h1>
          <p className="mt-6 text-base md:text-lg text-vinho/80 max-w-md leading-relaxed">
            Cadernos devocionais, blocos de estudo bíblico, planners e agendas
            feitos à mão, capa por capa, para o seu tempo diário com Deus.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-rosa text-creme hover:bg-vinho transition-colors"
            >
              <MessageCircle size={17} />
              Fazer pedido
            </a>
            <a
              href="#produtos"
              className="flex items-center gap-2 text-sm text-vinho/80 hover:text-rosa transition-colors"
            >
              Ver produtos
              <ArrowDown size={15} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative h-[380px] md:h-[440px]">
            <NotebookMock
              cover="#f3c8d5"
              rotate={-6}
              className="absolute left-2 top-6 w-56 md:w-64 h-72 md:h-80"
            >
              <Heart size={40} strokeWidth={1.2} className="text-rosa/70" />
            </NotebookMock>
            <NotebookMock
              cover="#cf9a4c"
              rotate={4}
              className="absolute right-2 top-0 w-56 md:w-64 h-72 md:h-80"
            >
              <Heart size={40} strokeWidth={1.2} className="text-vinho/60" />
            </NotebookMock>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-8 bg-vinho text-creme rounded-xl px-6 py-4 shadow-lg max-w-[210px]">
              <p className="font-script text-2xl leading-snug">Feito à mão</p>
              <p className="text-xs text-creme/75 mt-1">capa por capa, em Recife-PE</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
