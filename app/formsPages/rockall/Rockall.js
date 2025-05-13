'use client'
import React, { useState } from "react"
import "bulma/css/bulma.min.css"

const RockallForm = () => {
  const [eyeOpening, setEyeOpening] = useState(0)
  const [verbalResponse, setVerbalResponse] = useState(0)
  const [motorResponse, setMotorResponse] = useState(0)
  const [cardiovascular, setCardioResponse] = useState(0)
  const [hematologico, setHematoResponse] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()
    const total =
      eyeOpening +
      verbalResponse +
      motorResponse +
      cardiovascular +
      hematologico
    alert(`La puntuación total de la escala de Rockall es: ${total}`)
  }

  return (
    <div className="box" style={{ width: "350px" }}>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Edad</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setEyeOpening(parseInt(e.target.value))}>
                <option value="0">Selecciona una opción</option>
                <option value="0">Menos de 60 años</option>
                <option value="1">60 a 79 años</option>
                <option value="2">Más de 80 años</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Shock</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setVerbalResponse(parseInt(e.target.value))}>
                <option value="0">Selecciona una opción</option>
                <option value="0">Sin Shock</option>
                <option value="1">Taquicardia (FC mayor a 100, PAS mayor a 100)</option>
                <option value="2">Hipotensión (PAS menor a 100)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Comorbilidades</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setMotorResponse(parseInt(e.target.value))}>
                <option value="0">Selecciona una opción</option>
                <option value="0">Sin comorbilidad</option>
                <option value="2">Insuficiencia Cardiaca, Cardiopatía Isquémica, otra Comorbilidad</option>
                <option value="3">Insuficiencia Renal, Insuficiencia Hepática, neoplasia diseminada</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Diagnóstico</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setCardioResponse(parseInt(e.target.value))}>
                <option value="0">Selecciona una opción</option>
                <option value="0">Síndrome de Mallory-Weiss, no lesión identificada y no estigmas de sangrado reciente</option>
                <option value="1">Todos los otros diagnósticos</option>
                <option value="2">Neoplasia de TDA</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Estigmas</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setHematoResponse(parseInt(e.target.value))}>
                <option value="0">Selecciona una opción</option>
                <option value="0">Ninguno</option>
                <option value="2">Sangre, coágulo, vaso</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field has-text-centered">
          <button type="submit" className="button is-link is-medium">
            Calcular puntuación
          </button>
        </div>
      </form>
    </div>
  )
}

export default RockallForm