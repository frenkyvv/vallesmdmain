"use client";
import React, { useState } from "react";
import "bulma/css/bulma.min.css";

function Curb65() {
  const [confusion, setConfusion] = useState(false);
  const [urea, setUrea] = useState(false);
  const [respiration, setRespiration] = useState(false);
  const [bloodPressure, setBloodPressure] = useState(false);
  const [age, setAge] = useState(false);

  const calculateScore = () => {
    let score = 0;
    if (confusion) score += 1;
    if (urea) score += 1;
    if (respiration) score += 1;
    if (bloodPressure) score += 1;
    if (age) score += 1;

    if (score >= 2) {
      return "Altas posibilidades de perder la vida!";
    } else {
      return "Bajo riesgo.";
    }
  };

  const score = calculateScore();

  return (
    <div className="box" style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h1 className="title is-4 has-text-centered">Escala CURB-65</h1>
      <div className="field">
        <label className="checkbox">
          <input
            type="checkbox"
            checked={confusion}
            onChange={(e) => setConfusion(e.target.checked)}
          />
          &nbsp; Confusión
        </label>
      </div>
      <div className="field">
        <label className="checkbox">
          <input
            type="checkbox"
            checked={urea}
            onChange={(e) => setUrea(e.target.checked)}
          />
          &nbsp; BUN &gt; 19 mg/dL
        </label>
      </div>
      <div className="field">
        <label className="checkbox">
          <input
            type="checkbox"
            checked={respiration}
            onChange={(e) => setRespiration(e.target.checked)}
          />
          &nbsp; Frecuencia respiratoria &gt; 30/min
        </label>
      </div>
      <div className="field">
        <label className="checkbox">
          <input
            type="checkbox"
            checked={bloodPressure}
            onChange={(e) => setBloodPressure(e.target.checked)}
          />
          &nbsp; PAS &lt; 90 mmHg
        </label>
      </div>
      <div className="field">
        <label className="checkbox">
          <input
            type="checkbox"
            checked={age}
            onChange={(e) => setAge(e.target.checked)}
          />
          &nbsp; Edad &ge; 65 años
        </label>
      </div>
      <div className="content has-text-centered">
        <h3 className="title is-5">Puntaje: {score}</h3>
        <p className={`has-text-${score === "Altas posibilidades de perder la vida!" ? "danger" : "success"}`}>
          {score}
        </p>
      </div>
    </div>
  );
}

export default Curb65;