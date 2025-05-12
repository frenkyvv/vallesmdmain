"use client";
import React, { useState } from "react";
import "bulma/css/bulma.min.css";

export default function DobutaminaForm() {
  const [peso, setPeso] = useState("");
  const [dosis, setDosis] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const res = (peso * dosis) / 66.6;
    setResultado(res.toFixed(2));
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Peso (kg):</label>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="Ingresa el peso"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Dosis (mcg/kg/min):</label>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="Ingresa la dosis"
              value={dosis}
              onChange={(e) => setDosis(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field is-grouped is-grouped-centered">
          <div className="control">
            <button className="button is-primary" type="submit">
              Calcular
            </button>
          </div>
        </div>
      </form>

      {/* Mostrar el resultado solo si existe */}
      {resultado && (
        <div className="notification is-info has-text-centered" style={{ marginTop: "20px" }}>
          <strong>Resultado:</strong> {resultado} ml/hr
        </div>
      )}
    </div>
  );
}