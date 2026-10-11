import { useState } from "react";
import Item from "./Item.jsx";
import Destino from "./Destino.jsx";

export default function Fase({ fase, ativa, onVoltar, index }) {
  const total = fase.itens.length;
  const [pecas, setPecas] = useState(() =>
    fase.itens.map((emoji) => ({ emoji, zona: "area" }))
  );
  const [selecionado, setSelecionado] = useState(null);

  const concluido =
    pecas.filter((p) => p.zona !== "area").length === total;

  function colocar(emoji, idx) {
    setPecas((prev) =>
      prev.map((p) => {
        if (p.emoji === emoji) return { ...p, zona: idx };
        if (p.zona === idx) return { ...p, zona: "area" };
        return p;
      })
    );
    setSelecionado(null);
  }

  function devolver(emoji) {
    setPecas((prev) =>
      prev.map((p) => (p.emoji === emoji ? { ...p, zona: "area" } : p))
    );
    setSelecionado(null);
  }

  function reiniciar() {
    setPecas(fase.itens.map((emoji) => ({ emoji, zona: "area" })));
    setSelecionado(null);
  }

  function clicarItem(p) {
    if (p.zona === "area") {
      setSelecionado(selecionado === p.emoji ? null : p.emoji);
    } else {
      devolver(p.emoji);
    }
  }

  function clicarDestino(idx) {
    if (selecionado) colocar(selecionado, idx);
  }

  return (
    <div
      className={"fase-detalhe" + (ativa ? " ativa" : "")}
      id={"fase" + (index + 1)}
    >
      <button
        className="back-button"
        type="button"
        onClick={onVoltar}
      >
        ⬅ Voltar
      </button>
      <button
        className="reset-button"
        type="button"
        onClick={reiniciar}
      >
        ↺ Recomeçar
      </button>

      <p className="instrucoes">{fase.instrucao}</p>

      <div className="area-jogo">
        <div className="area-itens">
          {pecas
            .filter((p) => p.zona === "area")
            .map((p) => (
              <Item
                key={p.emoji}
                emoji={p.emoji}
                selecionado={selecionado === p.emoji}
                onAtivar={() => clicarItem(p)}
              />
            ))}
        </div>

        <div className="area-destinos">
          {fase.itens.map((_, idx) => {
            const ocupante = pecas.find((x) => x.zona === idx);
            return (
              <Destino
                key={idx}
                baseEmoji={fase.destino}
                ocupante={ocupante}
                selecionadoOcupante={ocupante ? selecionado === ocupante.emoji : false}
                onAtivarOcupante={() => ocupante && clicarItem(ocupante)}
                destacado={!!selecionado}
                onClicar={() => clicarDestino(idx)}
                onSoltar={(emoji) => colocar(emoji, idx)}
              />
            );
          })}
        </div>
      </div>

      <p className="mensagem" hidden={!concluido}>
        {concluido ? "Muito bem! 🎉 Tudo no lugar!" : ""}
      </p>
    </div>
  );
}
