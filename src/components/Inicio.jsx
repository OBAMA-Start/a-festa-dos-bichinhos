import { useState } from "react";
import Card from "./Card.jsx";

export default function Inicio({ onOpen }) {
  const [tela, setTela] = useState("menu");

  return (
    <main id="inicio">
      {tela === "menu" ? (
        <div className="menu-inicial">
          <img src="./../../title-bichinhos.png" alt="A Festa dos Bichinhos" className="titulo-menu" />
          <div className="botoes-menu">
            <button className="botao-menu" onClick={() => setTela("iniciar")}>
              Iniciar
            </button>
            <button className="botao-menu" onClick={() => setTela("creditos")}>
              Crédito
            </button>
          </div>
          <p className="habilidades-bncc">HABILIDADES BNCC: EF01MA02</p>
        </div>
      ) : tela === "iniciar" ? (
        <div className="selecao-fases">
          <h1>A Festa dos Bichinhos</h1>
          <div className="container">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} index={i} onOpen={() => onOpen(i)} />
            ))}
          </div>
          <button className="botao-voltar" onClick={() => setTela("menu")}>
            Voltar
          </button>
        </div>
      ) : (
        <div className="tela-creditos">
          <h1>Créditos</h1>
          <div className="creditos-conteudo">
            <ul className="lista-autores">
              <li>Daniele Nascimento</li>
              <li>Igor Dias</li>
              <li>Guilherme Luiz</li>
            </ul>
            <img src="/creditos.jpeg" alt="Créditos" className="imagem-creditos" />
          </div>
          <button className="botao-voltar" onClick={() => setTela("menu")}>
            Voltar
          </button>
        </div>
      )}
    </main>
  );
}
