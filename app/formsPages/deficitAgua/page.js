"use client";
import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import DeficitHombre from "./DeficitHombre";
import DeficitMujer from "./DeficitMujer";

export default function Pagina4() {
  const [mostrarHombre, setMostrarHombre] = useState(false);
  const [mostrarMujer, setMostrarMujer] = useState(false);

  const handleClickHombre = () => {
    setMostrarHombre(true);
    setMostrarMujer(false);
  };

  const handleClickMujer = () => {
    setMostrarHombre(false);
    setMostrarMujer(true);
  };

  return (
    <div className="section has-background-light">
      <div className="container">
        {/* Título principal */}
        <div className="box has-text-centered has-background-primary-light">
          <h1 className="title is-3 has-text-primary">Déficit de Agua</h1>
          <p className="subtitle is-5 has-text-grey-dark">
            Fórmula para calcular el déficit de agua
          </p>
        </div>

        {/* Botones para seleccionar */}
        <div className="buttons is-centered" style={{ marginTop: "20px" }}>
          <button
            className="button is-primary"
            onClick={handleClickHombre}
          >
            Hombre
          </button>
          <button
            className="button is-link"
            onClick={handleClickMujer}
          >
            Mujer
          </button>
        </div>

        {/* Formularios */}
        {mostrarHombre && (
          <div className="box" style={{ marginTop: "20px" }}>
            <DeficitHombre />
          </div>
        )}
        {mostrarMujer && (
          <div className="box" style={{ marginTop: "20px" }}>
            <DeficitMujer />
          </div>
        )}

        {/* Botón para regresar */}
        <div className="has-text-centered" style={{ marginTop: "30px" }}>
          <a href="/formulas" className="button is-danger">Regresar</a>
        </div>
      </div>
    </div>
  );
}