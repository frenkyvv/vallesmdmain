"use client";
import React, { useState } from "react";
import "bulma/css/bulma.min.css";

export default function OsmoPlasmaticaForm() {
  const [sodio, setSodio] = useState("");
  const [potasio, setPotasio] = useState("");
  const [glucosa, setGlucosa] = useState("");
  const [urea, setUrea] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const res = parseFloat(glucosa) / 18 + parseFloat(urea) / 6 + parseFloat(potasio) * 2 + parseFloat(sodio) * 2;
    setResultado(res.toFixed(1));
  };

  return (
    <form onSubmit={handleSubmit} className="box" style={{ width: "350px" }}>
      {/* Campo para el Sodio */}
      <div className="field">
        <label className="label">Sodio (mEq/L):</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Ingresa el sodio"
            value={sodio}
            onChange={(e) => setSodio(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Campo para el Potasio */}
      <div className="field">
        <label className="label">Potasio (mEq/L):</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Ingresa el potasio"
            value={potasio}
            onChange={(e) => setPotasio(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Campo para la Glucosa */}
      <div className="field">
        <label className="label">Glucosa (mg/dL):</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Ingresa la glucosa"
            value={glucosa}
            onChange={(e) => setGlucosa(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Campo para la Urea */}
      <div className="field">
        <label className="label">Urea (mg/dL):</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Ingresa la urea"
            value={urea}
            onChange={(e) => setUrea(e.target.value)}
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
          <strong>La Osmolaridad Plasmática es: {resultado}</strong>
        </div>
      )}
    </form>
  );
}