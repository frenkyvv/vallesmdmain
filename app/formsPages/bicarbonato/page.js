"use client";
import React from "react";
import "bulma/css/bulma.min.css";
import BicarbonatoForm from "./BicaForm";

export default function Pagina5() {
  return (
    
      <div className="container">
        {/* Título principal */}
        <div className="box has-text-centered has-background-primary-light">
          <h1 className="title is-3 has-text-primary">Déficit de Bicarbonato</h1>
          <p className="subtitle is-5 has-text-grey-dark">
            Fórmula para calcular el déficit de bicarbonato
          </p>
        </div>

        <div className="box">
          <BicarbonatoForm />
        </div>

        <div className="has-text-centered" style={{ marginTop: "30px" }}>
          <a href="/formulas" className="button is-danger">Regresar</a>
        </div>
      </div>
   
  );
}