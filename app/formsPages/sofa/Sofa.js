'use client'
import React, { useState } from "react"
import "bulma/css/bulma.min.css"

const SofaScore = () => {
  const [eyeOpening, setEyeOpening] = useState(0)
  const [verbalResponse, setVerbalResponse] = useState(0)
  const [motorResponse, setMotorResponse] = useState(0)
  const [cardiovascular, setCardioResponse] = useState(0)
  const [hematologico, setHematoResponse] = useState(0)
  const [neurologico, setNeuroResponse] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()
    const total =
      eyeOpening +
      verbalResponse +
      motorResponse +
      cardiovascular +
      hematologico +
      neurologico
    alert(`La puntuación total de la escala de SOFA es: ${total}`)
  }

  return (
    <div className="box">
      <h1 className="title is-4 has-text-centered">SOFA Score</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Respiratorio (PaO2/FiO2)</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setEyeOpening(parseInt(e.target.value))}>
                <option value="0">Selecciona una opción</option>
                <option value="0">Mayor a 400</option>
                <option value="1">Menor o = a 400</option>
                <option value="2">Menor o = a 300</option>
                <option value="3">Menor o = a 200 con Vent Mec</option>
                <option value="4">Menor o = a 100 con Vent Mec</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Renal (Cr o diuresis)</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setVerbalResponse(parseInt(e.target.value))}>
                <option value="0">Selecciona una opción</option>
                <option value="0">Menos de 1-2</option>
                <option value="1">1.2 - 1.9</option>
                <option value="2">2 - 3.4</option>
                <option value="3">3.5 - 4.9 o Menos 500 ml/dia</option>
                <option value="4">Mayor de 5 o Menos de 200 ml/dia</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Hepático (Bilirrubinas)</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setMotorResponse(parseInt(e.target.value))}>
                <option value="0">Selecciona una opción</option>
                <option value="0">Menos de 1.2</option>
                <option value="1">1.2 a 1.9</option>
                <option value="2">2 - 5.9</option>
                <option value="3">6 - 11.9</option>
                <option value="4">Mayor de 12</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Cardiovascular (Hipotensión o Fármacos)</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setCardioResponse(parseInt(e.target.value))}>
                <option value="0">Selecciona una opción</option>
                <option value="0">Sin Hipotensión</option>
                <option value="1">PAM Menos de 70 mmHg</option>
                <option value="2">Dopamina menor a 5 o Dubatamina</option>
                <option value="3">
                  Dopamina mayor a 5 o Noradrenalina Menor a 0.1
                </option>
                <option value="4">
                  Dopamina Mayor a 15 o Noradrenalina Mayor a 0.1
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Hematológico (Plaquetas)</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setHematoResponse(parseInt(e.target.value))}>
                <option value="0">Selecciona una opción</option>
                <option value="0">Más de 150k</option>
                <option value="1">Menos o igual a 150k</option>
                <option value="2">Menos o igual a 100k</option>
                <option value="3">Menos o igual a 50k</option>
                <option value="4">Menos o igual a 20</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Neurológico (Glasgow)</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setNeuroResponse(parseInt(e.target.value))}>
                <option value="0">Selecciona una opción</option>
                <option value="0">15</option>
                <option value="1">13 - 14</option>
                <option value="2">10 - 12</option>
                <option value="3">6 - 9</option>
                <option value="4">Menos de 6</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control has-text-centered">
            <button type="submit" className="button is-link is-medium">
              Calcular puntuación
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SofaScore