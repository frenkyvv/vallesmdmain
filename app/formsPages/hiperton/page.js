"use client";
import React from "react";
import "bulma/css/bulma.min.css";
import Hiperton from "./Hiperton";

export default function Pagina10() {
  return (
    
      <div className="container">
        {/* Título principal */}
        <div className="box has-text-centered has-background-primary-light">
          <h1 className="title is-3 has-text-primary">Soluciones Hipertónicas</h1>
          <p className="subtitle is-5 has-text-grey-dark">
            Concentraciones Hipertónicas
          </p>
        </div>

        {/* Formulario */}
        <div className="box">
          <Hiperton />
        </div>

        {/* Botón para regresar */}
        <div className="has-text-centered" style={{ marginTop: "30px" }}>
          <a href="/formulas" className="button is-danger is-medium">Regresar</a>
        </div>
      </div>
    
  );
}