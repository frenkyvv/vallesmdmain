'use client'
import React, { useState } from "react"
import "bulma/css/bulma.min.css"

const timiCriteria = [
  {
    label: "Edad 65 - 74 años",
    value: 2,
  },
  {
    label: "Edad ≥ a 75 años",
    value: 3,
  },
  {
    label: "DM2 o HTA o Angina",
    value: 1,
  },
  {
    label: "Clase Killip Kimbal ≥ 2",
    value: 1,
  },
  {
    label: "Presión Arterial Sistólica < 100",
    value: 3,
  },
  {
    label: "Frecuencia Cardiaca > 100",
    value: 2,
  },
  {
    label: "Peso ≤ 67 kg",
    value: 1,
  },
  {
    label: "Supradesnivel ST anterior o BRIHH",
    value: 1,
  },
  {
    label: "Tiempo de pre perfusión mayor a 4 hrs",
    value: 1,
  },
]

const TimiScoreCalculator = () => {
  const [score, setScore] = useState(0)

  const handleCheckboxChange = (value, checked) => {
    setScore(checked ? score + value : score - value)
  }

  return (
    <div className="box">
      <h1 className="title is-4 has-text-centered">Calculadora TIMI</h1>
      <form>
        {timiCriteria.map((item, index) => (
          <div className="field" key={index}>
            <div className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  onChange={e =>
                    handleCheckboxChange(item.value, e.target.checked)
                  }
                />
                &nbsp;{item.label}
              </label>
            </div>
          </div>
        ))}
        <div className="field">
          <label className="label">Puntuación total</label>
          <div className="control">
            <input
              className="input is-static"
              type="text"
              readOnly
              value={score}
              style={{ textAlign: "center" }}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default TimiScoreCalculator