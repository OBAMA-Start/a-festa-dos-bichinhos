import { FASES } from "../data/fases.js";

export default function Card({ index, onOpen }) {
  const fase = FASES[index];
  return (
    <div
      className="card"
      tabIndex={0}
      role="button"
      aria-label={fase.titulo}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      <div className="fase-imagem">{fase.imagem}</div>
      <h2 className="fase-title">{fase.titulo}</h2>
      <div className="fase-texto">{fase.texto}</div>
    </div>
  );
}
