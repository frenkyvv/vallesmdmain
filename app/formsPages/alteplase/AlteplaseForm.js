"use client";
import React, { useState } from "react";
import "bulma/css/bulma.min.css";

export default function AlteplaseForm() {
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Cálculo de la dosis de Alteplase
    const dosisTotal = peso * 0.9; // 0.9 mg/kg
    const bolo = dosisTotal * 0.1; // 10% en bolo
    const infusion = dosisTotal * 0.9; // 90% en infusión

    setResultado(
      `Dosis total: ${dosisTotal.toFixed(2)} mg. Administrar ${bolo.toFixed(
        2
      )} mg como bolo y ${infusion.toFixed(
        2
      )} mg en infusión durante 60 minutos.`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="box">
      {/* Campo para el peso */}
      <div className="field">
        <label className="label">Peso (kg):</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Ingresa el peso del paciente"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Botón para calcular */}
      <div className="field is-grouped is-grouped-centered">
        <div className="control">
          <button className="button is-primary" type="submit">
            Calcular
          </button>
        </div>
      </div>

      {/* Mostrar el resultado */}
      {resultado && (
        <div className="notification is-info has-text-centered" style={{ marginTop: "20px", width: "250px" }}>
          <strong>{resultado}</strong>
        </div>
      )}
    </form>
  );
}