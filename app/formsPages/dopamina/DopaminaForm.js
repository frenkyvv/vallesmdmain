"use client";
import React, { useState } from "react";
import Link from "next/link"; // Importa Link para navegación
import "bulma/css/bulma.min.css";

export default function DopaminaForm() {
  const [peso, setPeso] = useState("");
  const [dosis, setDosis] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const res = (peso * dosis) / 66.6;
    setResultado(res.toFixed(2));
  };

  return (
    <div className="container">
      <h1 className="title has-text-centered">Cálculo de Dopamina</h1>
      
      <form onSubmit={handleSubmit} className="box">
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

      {/* Mostrar el texto y el resultado solo si hay un resultado */}
      {resultado && (
        <>
          <p className="has-text-centered" style={{ width: "200px" }}>
            Aforar 2 amp de Dopamina (400mg) en 100ml de solución glucosada 5% e
            iniciar la infusión a:
          </p>
          <div className="notification is-info has-text-centered">
            <strong>Resultado:</strong> {resultado} ml/hr
          </div>
        </>
      )}

      {/* Botón para regresar a la página de Formulas */}
      <div className="has-text-centered" style={{ marginTop: "20px" }}>
        <Link href="/formulas">
          <button className="button is-link">Regresar a Fórmulas</button>
        </Link>
      </div>
    </div>
  );
}