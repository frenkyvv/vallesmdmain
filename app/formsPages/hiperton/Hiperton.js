"use client";
import React, { useState } from "react";
import "bulma/css/bulma.min.css";

export default function Hiperton() {
  const [mililitros, setMililitros] = useState("");
  const [resultado, setResultado] = useState("");

  const handleChange = (event) => {
    setMililitros(event.target.value);
  };

  const calcularMedioOsmolar = () => {
    const agua = mililitros / 2;
    setResultado(
      `Necesitas mezclar ${agua} mls de solución salina al 0.9% más ${agua} ml de agua inyectable. Con esto tendrás una concentración de ${mililitros} mls al 0.45%.`
    );
  };

  const calcularUnoOcho = () => {
    const wat = mililitros * 5;
    const hiper = wat / 100;
    const fis = mililitros - hiper;
    setResultado(
      `Necesitas mezclar ${fis} ml de solución salina al 0.9% más ${hiper} mls de solución salina al 17.7% (Hiperton). Con esto tendrás una concentración de ${mililitros} mls al 1.8%.`
    );
  };

  const calcularTres = () => {
    const wat = mililitros * 12.3;
    const hiper = wat / 100;
    const fis = mililitros - hiper;
    setResultado(
      `Necesitas mezclar ${fis} ml de solución salina al 0.9% más ${hiper} mls de solución salina al 17.7% (Hiperton). Con esto tendrás una concentración de ${mililitros} mls al 3%.`
    );
  };

  const calcularCinco = () => {
    const wat = mililitros * 24;
    const hiper = wat / 100;
    const fis = mililitros - hiper;
    setResultado(
      `Necesitas mezclar ${fis} ml de solución salina al 0.9% más ${hiper} mls de solución salina al 17.7% (Hiperton). Con esto tendrás una concentración de ${mililitros} mls al 5%.`
    );
  };

  return (
    <div className="box" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1 className="title is-4 has-text-centered">Cálculo de Soluciones Hipertónicas</h1>
      <div className="field">
        <label className="label">Mililitros:</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Ingresa los mililitros"
            value={mililitros}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="buttons is-centered">
        <button className="button is-primary" onClick={calcularMedioOsmolar}>
          0.45 %
        </button>
        <button className="button is-link" onClick={calcularUnoOcho}>
          1.8 %
        </button>
        <button className="button is-warning" onClick={calcularTres}>
          3 %
        </button>
        <button className="button is-danger" onClick={calcularCinco}>
          5 %
        </button>
      </div>

      {resultado && (
  <div className="notification is-info has-text-centered" style={{ marginTop: "20px"  }}>
    <div className="is-flex is-justify-content-center">
      <strong>{resultado}</strong>
    </div>
  </div>
)}
    </div>
  );
}