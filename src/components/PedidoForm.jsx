import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { WHATSAPP_LINK } from "../data";

const PRODUTO_OPTIONS = [
  "Caderno devocional",
  "Estudo bíblico",
  "Planner",
  "Agenda 2026",
  "Curso de encadernação",
  "Outro",
];

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-vinho/15 bg-white/60 text-vinho text-sm outline-none focus:border-rosa transition-colors";

function buildMessage(data) {
  const lines = ["*Novo pedido — Amor à Palavra*", ""];
  if (data.nome) lines.push(`Nome: ${data.nome}`);
  if (data.produto) lines.push(`Produto de interesse: ${data.produto}`);
  if (data.personalizacao) lines.push(`Personalização desejada: ${data.personalizacao}`);
  return lines.join("\n");
}

export default function PedidoForm() {
  const [data, setData] = useState({});
  const [done, setDone] = useState(false);

  const setValue = (key, value) => setData((d) => ({ ...d, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = buildMessage(data);
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`, "_blank");
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center text-center gap-3 py-8">
        <CheckCircle2 size={36} className="text-rosa" />
        <p className="font-display text-xl text-vinho">Pedido pronto!</p>
        <p className="text-sm text-vinho/70 max-w-sm leading-relaxed">
          Abrimos o WhatsApp com as informações do seu pedido preenchidas. É só
          confirmar o envio por lá que a Gabi recebe tudo certinho.
        </p>
        <button
          type="button"
          onClick={() => {
            setData({});
            setDone(false);
          }}
          className="mt-2 text-sm font-medium text-rosa hover:underline"
        >
          Fazer outro pedido
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium text-vinho mb-1.5">
          Nome completo *
        </label>
        <input
          required
          value={data.nome || ""}
          onChange={(e) => setValue("nome", e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-vinho mb-1.5">
          Produto de interesse *
        </label>
        <div className="flex flex-col gap-2 mt-1">
          {PRODUTO_OPTIONS.map((opt) => (
            <label key={opt} className="flex items-center gap-2.5 text-sm text-vinho/85 cursor-pointer">
              <input
                type="radio"
                name="produto"
                required
                checked={data.produto === opt}
                onChange={() => setValue("produto", opt)}
                className="accent-rosa w-4 h-4 shrink-0"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-vinho mb-1.5">
          Personalização desejada
        </label>
        <p className="text-xs text-vinho/55 mb-1.5">
          Tecido, cor, tema ou frase — fotos de referência podem ser enviadas depois, direto pelo WhatsApp.
        </p>
        <textarea
          rows={4}
          value={data.personalizacao || ""}
          onChange={(e) => setValue("personalizacao", e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-salvia text-papel hover:bg-rosa transition-colors mt-2"
      >
        <Send size={16} /> Enviar pelo WhatsApp
      </button>
    </form>
  );
}
