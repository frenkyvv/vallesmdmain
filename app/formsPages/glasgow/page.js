"use client";
import React from "react";
import "bulma/css/bulma.min.css";
import GlasgowComaScale from "./GSC";

export default function Pagina12() {
  return (
    
      <div className="container">
        {/* Título principal */}
        <div className="box has-text-centered has-background-primary-light">
          <h1 className="title is-3 has-text-primary">Escala de Glasgow</h1>
          <p className="subtitle is-5 has-text-grey-dark">
            Escala de coma de Glasgow
          </p>
        </div>

        {/* Formulario */}
        <div className="box">
          <GlasgowComaScale />
        </div>

        {/* Botón para regresar */}
        <div className="has-text-centered" style={{ marginTop: "30px" }}>
          <a href="/formulas" className="button is-danger is-medium">Regresar</a>
        </div>
      </div>
    
  );
}