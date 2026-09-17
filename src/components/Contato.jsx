import { MessageCircle, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import InstagramIcon from "./InstagramIcon";
import PedidoForm from "./PedidoForm";
import { WHATSAPP_LINK, INSTAGRAM_URL, INSTAGRAM_HANDLE, LOCAL } from "../data";

export default function Contato() {
  return (
    <section id="contato" className="px-6 py-24 bg-creme">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[minmax(0,300px)_1fr] gap-14 items-start">
        <Reveal>
          <span className="text-xs tracking-[0.2em] text-rosa font-medium uppercase">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-vinho mt-4">
            Vamos fazer o seu caderno
          </h2>
          <p className="mt-5 text-vinho/75 leading-relaxed">
            Conte um pouco sobre o que você quer. O primeiro passo é uma
            conversa no WhatsApp — o resto a gente combina por lá.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-vinho/85 hover:text-rosa transition-colors"
            >
              <MessageCircle size={18} className="text-rosa" />
              Chamar no WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-vinho/85 hover:text-rosa transition-colors"
            >
              <InstagramIcon size={18} className="text-rosa" />
              {INSTAGRAM_HANDLE}
            </a>
            <div className="flex items-center gap-3 text-vinho/85">
              <MapPin size={18} className="text-rosa" />
              {LOCAL}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <PedidoForm />
        </Reveal>
      </div>
    </section>
  );
}
