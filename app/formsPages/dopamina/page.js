"use client";
import React from "react";
import DopaminaForm from "./DopaminaForm"; // Asegúrate de que la ruta sea correcta
import "bulma/css/bulma.min.css";

function SecondPage() {
  return (
    
      <div className="container">
        <div className="box has-text-centered">
          <h1 className="title is-3 has-text-primary">Dosis de Dopamina</h1>
          <p className="subtitle is-5">
            Fórmula para calcular la dosis de Dopamina
          </p>
          <hr />
          <div className="content">
            <DopaminaForm />
          </div>
        </div>
      </div>
    
  );
}

export default SecondPage;