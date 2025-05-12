"use client";
import React, { useState } from "react";
import "bulma/css/bulma.min.css";

const GlasgowComaScale = () => {
  const [eyeOpening, setEyeOpening] = useState(0);
  const [verbalResponse, setVerbalResponse] = useState(0);
  const [motorResponse, setMotorResponse] = useState(0);
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = eyeOpening + verbalResponse + motorResponse;
    setResultado(`La puntuación total de la escala de Glasgow es: ${total}`);
  };

  return (
    <div className="box" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1 className="title is-4 has-text-centered">Escala de Glasgow</h1>
      <form onSubmit={handleSubmit}>
        {/* Apertura ocular */}
        <div className="field">
          <label className="label">Apertura ocular</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={(e) => setEyeOpening(parseInt(e.target.value))}>
                <option value="0">Selecciona una opción</option>
                <option value="1">Ninguna</option>
                <option value="2">Al dolor</option>
                <option value="3">Al estímulo verbal</option>
                <option value="4">Espontánea</option>
              </select>
            </div>
          </div>
        </div>

        {/* Respuesta verbal */}
        <div className="field">
          <label className="label">Respuesta verbal</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                onChange={(e) => setVerbalResponse(parseInt(e.target.value))}
              >
                <option value="0">Selecciona una opción</option>
                <option value="1">Ninguna</option>
                <option value="2">Sonidos incomprensibles</option>
                <option value="3">Palabras inapropiadas</option>
                <option value="4">Confuso</option>
                <option value="5">Orientado</option>
              </select>
            </div>
          </div>
        </div>

        {/* Respuesta motora */}
        <div className="field">
          <label className="label">Respuesta motora</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                onChange={(e) => setMotorResponse(parseInt(e.target.value))}
              >
                <option value="0">Selecciona una opción</option>
                <option value="1">Ninguna</option>
                <option value="2">Extensión anormal</option>
                <option value="3">Flexión anormal</option>
                <option value="4">Retirada al dolor</option>
                <option value="5">Localiza el dolor</option>
                <option value="6">Obedece órdenes</option>
              </select>
            </div>
          </div>
        </div>

        {/* Botón para calcular */}
        <div className="field is-grouped is-grouped-centered">
          <div className="control">
            <button className="button is-primary" type="submit">
              Calcular puntuación
            </button>
          </div>
        </div>
      </form>

      {/* Mostrar resultado */}
      {resultado && (
        <div className="notification is-info has-text-centered" style={{ marginTop: "20px" }}>
          <strong>{resultado}</strong>
        </div>
      )}
    </div>
  );
};

export default GlasgowComaScale;