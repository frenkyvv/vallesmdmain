"use client";
import React, { useState } from "react";
import "bulma/css/bulma.min.css";

export default function BicarbonatoForm() {
  const [peso, setPeso] = useState("");
  const [bicarbonato, setBicarbonato] = useState("");
  const [resultado, setResultado] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const pesr = peso * 0.4;
    const hcor = 24 - bicarbonato;
    const resu = pesr * hcor;
    const entre3 = resu / 3;
    const fcos = entre3 / 7.5;

    setResultado(
      `El déficit de HCO3 es: ${resu.toFixed(0)} mEq/L, el cual dividimos entre 3 
      para administrarlo cada 8 hrs serían: ${entre3.toFixed(1)}. Si dividimos entre la cantidad de mEq/L por frasco
      serían ${fcos.toFixed(0)} frascos. Si es mayor de 10, se puede dividir la dosis en dos partes: aplicar la mitad 
      directa y la otra mitad diluirla en 250 ml de Sol. Fisiológica.`
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
            placeholder="Ingresa el peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Campo para el bicarbonato */}
      <div className="field">
        <label className="label">Bicarbonato (mEq/L):</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Ingresa el bicarbonato"
            value={bicarbonato}
            onChange={(e) => setBicarbonato(e.target.value)}
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
          <strong >Resultado:</strong> {resultado}
        </div>
      )}
    </form>
  );
}