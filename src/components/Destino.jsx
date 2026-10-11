import Item from "./Item.jsx";

export default function Destino({
  baseEmoji,
  ocupante,
  selecionadoOcupante,
  onAtivarOcupante,
  destacado,
  onClicar,
  onSoltar
}) {
  return (
    <div
      className={
        "destino" +
        (ocupante ? " ocupado" : "") +
        (destacado ? " destacado" : "")
      }
      onClick={onClicar}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const emoji = e.dataTransfer.getData("text/plain");
        if (emoji) onSoltar(emoji);
      }}
    >
      {ocupante ? (
        <Item
          emoji={ocupante.emoji}
          selecionado={selecionadoOcupante}
          onAtivar={onAtivarOcupante}
        />
      ) : (
        baseEmoji
      )}
    </div>
  );
}
