"use client";
import React from "react";
import DobutaminaForm from "./DobutaminaForm"; // Asegúrate de que la ruta sea correcta
import "bulma/css/bulma.min.css";

function Pagina3() {
  return (
    <div className="section has-background-light">
      <div className="container">
        <div className="box has-text-centered">
          <h1 className="title is-3 has-text-primary">Dosis de Dobutamina</h1>
          <p className="subtitle is-5">
            Fórmula para calcular la dosis de Dobutamina
          </p>
          <hr />
          <div className="content">
            <DobutaminaForm />
          </div>
          <div className="has-text-centered" style={{ marginTop: "20px" }}>
            <a href="/formulas" className="button is-link">Regresar a Fórmulas</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagina3;