'use client'
import React, { useState } from "react"

function WellsScore() {
  const [confusion, setConfusion] = useState(false)
  const [urea, setUrea] = useState(false)
  const [respiration, setRespiration] = useState(false)
  const [bloodPressure, setBloodPressure] = useState(false)
  const [age, setAge] = useState(false)
  const [cancer, setCa] = useState(false)
  const [hemoptisis, setHemoptisis] = useState(false)

  let score = 0
  if (confusion) score += 3
  if (urea) score += 3
  if (respiration) score += 1.5
  if (bloodPressure) score += 1.5
  if (age) score += 1.5
  if (cancer) score += 1
  if (hemoptisis) score += 1

  let result = ""
  if (score === 1) result = "Probabilidad Baja"
  else if (score > 2 && score < 7) result = "Probabilidad Moderada"
  else if (score >= 7) result = "Probabilidad Alta"

  return (
    <div className="box">
      <h2 className="title is-4">Wells Score</h2>
      <div className="content">
        <div className="field">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={confusion}
              onChange={e => setConfusion(e.target.checked)}
            />
            TEP es la primera posibilidad diagnóstica
          </label>
        </div>
        <div className="field">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={urea}
              onChange={e => setUrea(e.target.checked)}
            />
            Signos o síntomas de TVP
          </label>
        </div>
        <div className="field">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={respiration}
              onChange={e => setRespiration(e.target.checked)}
            />
            Diagnóstico de TEP ó TVP previo
          </label>
        </div>
        <div className="field">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={bloodPressure}
              onChange={e => setBloodPressure(e.target.checked)}
            />
            Frecuencia cardiaca mayor a 100 latidos/min
          </label>
        </div>
        <div className="field">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={age}
              onChange={e => setAge(e.target.checked)}
            />
            Inmovilización mayor a 3 días o cirugía en las 4 semanas previas
          </label>
        </div>
        <div className="field">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={cancer}
              onChange={e => setCa(e.target.checked)}
            />
            Cáncer tratado en los 6 meses previos o en tratamiento paliativo
          </label>
        </div>
        <div className="field">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={hemoptisis}
              onChange={e => setHemoptisis(e.target.checked)}
            />
            Hemoptisis
          </label>
        </div>
      </div>
      <div className="content">
        <h3 className="title is-5">Score: {score}</h3>
        <p className={`has-text-weight-bold ${result === "Probabilidad Alta" ? "has-text-danger" : "has-text-primary"}`}>
          {result}
        </p>
      </div>
    </div>
  )
}

export default WellsScore