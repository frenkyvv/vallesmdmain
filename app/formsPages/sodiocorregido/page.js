"use client";
import React from "react";
import "bulma/css/bulma.min.css";
import SodioForm from "./SodioCorregidoForm";

export default function Pagina6() {
  return (
    <div className="section has-background-light">
      <div className="container">
        {/* Título principal */}
        <div className="box has-text-centered has-background-primary-light">
          <h1 className="title is-3 has-text-primary">Sodio Corregido</h1>
          <p className="subtitle is-5 has-text-grey-dark">
            Fórmula para calcular el sodio corregido
          </p>
        </div>

        {/* Formulario */}
        <div className="box">
          <SodioForm />
        </div>

        {/* Botón para regresar */}
        <div className="has-text-centered" style={{ marginTop: "30px" }}>
          <a href="/formulas" className="button is-danger">Regresar</a>
        </div>
      </div>
    </div>
  );
}