"use client";
import React, { useState } from "react";
import "bulma/css/bulma.min.css";

export default function DeficitHombre() {
  const [peso, setPeso] = useState("");
  const [naSerico, setNaSerico] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const prim = peso * 0.5;
    const sec = naSerico / 140;
    const ter = sec - 1;
    const resul = prim * ter;
    setResultado(resul.toFixed(1));
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
            placeholder="Ingresa el peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Campo para el Na Sérico */}
      <div className="field">
        <label className="label">Na Sérico (mEq/L):</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Ingresa el Na Sérico"
            value={naSerico}
            onChange={(e) => setNaSerico(e.target.value)}
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
        <div className="notification is-info has-text-centered" style={{ marginTop: "20px" }}>
          <strong>Resultado:</strong> Se requieren {resultado} Litros para llevar el Sodio a 140 mEq/dl.
        </div>
      )}
    </form>
  );
}