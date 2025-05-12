"use client";
import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import OsmoPlasmaticaForm from "./OsmoPlas";
import OsmoEfectiva from "./OsmoEfe";

export default function Pagina8() {
  const [mostrarPlasmatica, setMostrarPlasmatica] = useState(false);
  const [mostrarEfectiva, setMostrarEfectiva] = useState(false);

  const handleClickPlasmatica = () => {
    setMostrarPlasmatica(true);
    setMostrarEfectiva(false);
  };

  const handleClickEfectiva = () => {
    setMostrarPlasmatica(false);
    setMostrarEfectiva(true);
  };

  return (
    <div className="section has-background-light">
      <div className="container">
        {/* Título principal */}
        <div className="box has-text-centered has-background-primary-light">
          <h1 className="title is-3 has-text-primary">Osmolaridad</h1>
          <p className="subtitle is-5 has-text-grey-dark">
            Fórmula para calcular la Osmolaridad
          </p>
        </div>

        {/* Botones para seleccionar */}
        <div className="buttons is-centered" style={{ marginTop: "20px" }}>
          <button
            className="button is-primary"
            onClick={handleClickPlasmatica}
          >
            Plasmática
          </button>
          <button
            className="button is-link"
            onClick={handleClickEfectiva}
          >
            Específica
          </button>
        </div>

        {/* Formularios */}
        {mostrarPlasmatica && (
          <div className="box" style={{ marginTop: "20px" }}>
            <OsmoPlasmaticaForm />
          </div>
        )}
        {mostrarEfectiva && (
          <div className="box" style={{ marginTop: "20px" }}>
            <OsmoEfectiva />
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