import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../data";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
        "Oi! Vim pela landing page da Amor à Palavra."
      )}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-rosa text-creme shadow-xl hover:bg-vinho transition-colors"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
