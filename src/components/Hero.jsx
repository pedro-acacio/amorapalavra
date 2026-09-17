import { MessageCircle, ArrowDown, BookHeart } from "lucide-react";
import Reveal from "./Reveal";
import { WHATSAPP_LINK } from "../data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden"
    >
      <svg
        className="absolute -top-10 right-[-10%] w-[70%] max-w-3xl opacity-40 pointer-events-none"
        viewBox="0 0 1090 500"
        fill="none"
      >
        <path
          d="M40 300c60-70 120-70 180 0s120 70 180 0 120-160 180-160 120 90 180 90 120-60 180-60"
          stroke="#4a2f35"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="220" cy="300" r="14" fill="#b8636f" />
        <circle cx="580" cy="140" r="18" fill="#b08d57" />
      </svg>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="text-xs tracking-[0.2em] text-rosa font-medium uppercase">
            Amor à Palavra
          </span>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mt-4 text-vinho">
            Cadernos e planners que te aproximam da Palavra.
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
              className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-salvia text-papel hover:bg-rosa transition-colors"
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
          <div className="relative">
            <div className="w-full h-[380px] md:h-[480px] rounded-2xl shadow-2xl bg-gradient-to-br from-rosa/25 via-dourado/15 to-salvia/20 border border-vinho/10 flex items-center justify-center">
              <BookHeart size={96} strokeWidth={1} className="text-vinho/50" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-papel border border-vinho/10 rounded-xl px-6 py-4 shadow-lg max-w-[210px]">
              <p className="font-display text-xl text-rosa leading-snug">Feito à mão</p>
              <p className="text-xs text-vinho/70 mt-1">capa por capa, em Recife-PE</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
