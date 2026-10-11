export default function Item({ emoji, selecionado, onAtivar }) {
  return (
    <div
      className={"item" + (selecionado ? " selecionado" : "")}
      draggable
      data-emoji={emoji}
      onClick={(e) => {
        e.stopPropagation();
        onAtivar();
      }}
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", emoji);
        e.dataTransfer.effectAllowed = "move";
      }}
    >
      {emoji}
    </div>
  );
}
