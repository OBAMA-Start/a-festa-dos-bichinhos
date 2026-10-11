import { useState } from "react";
import { FASES } from "./data/fases.js";
import Inicio from "./components/Inicio.jsx";
import Fase from "./components/Fase.jsx";

export default function App() {
  const [view, setView] = useState("inicio");

  return (
    <>
      {view === "inicio" && <Inicio onOpen={(i) => setView(i)} />}
      {FASES.map((fase, i) => (
        <Fase
          key={i}
          index={i}
          fase={fase}
          ativa={view === i}
          onVoltar={() => setView("inicio")}
        />
      ))}
    </>
  );
}
