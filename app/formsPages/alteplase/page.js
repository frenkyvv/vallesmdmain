"use client";
import React from "react";
import "bulma/css/bulma.min.css";
import AlteplaseForm from "./AlteplaseForm";

export default function Pagina7() {
  return (
    <div className="section has-background-light">
      <div className="container">
        <div className="box has-text-centered has-background-primary-light">
          <h1 className="title is-3 has-text-primary">Dosis de Alteplase</h1>
          <p className="subtitle is-5 has-text-grey-dark">
            Fórmula para el uso del Alteplase
          </p>
        </div>

        <div className="box">
          <AlteplaseForm />
        </div>

        <div className="has-text-centered" style={{ marginTop: "30px" }}>
          <a href="/formulas" className="button is-danger is-medium">Regresar</a>
        </div>
      </div>
    </div>
  );
}