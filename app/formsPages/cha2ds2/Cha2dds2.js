'use client'
import React, { useState } from "react"
import "bulma/css/bulma.min.css"

const timiCriteria = [
  { label: "Insuficiencia cardiaca o FEVI < 40%", value: 1 },
  { label: "Hipertensión Arterial", value: 1 },
  { label: "Edad menor a 65 años", value: 0 },
  { label: "Edad entre 65 y 74 años", value: 1 },
  { label: "Edad mayor a 75 años", value: 2 },
  { label: "Diabetes Mellitus", value: 1 },
  { label: "Ictus, embolia periférica o AIT", value: 2 },
  { label: "Enfermedad Vascular periférica, coronaria o aórtica", value: 1 },
  {
    label: "Sexo Femenino (solo contabiliza si hay otro factor de riesgo)",
    value: 1,
  },
]

const CHa2ds2 = () => {
  const [score, setScore] = useState(0)

  const handleCheckboxChange = (value, checked) => {
    setScore(checked ? score + value : score - value)
  }

  return (
    <div className="box">
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
              style={{ textAlign: "center" }}
              type="text"
              readOnly
              value={score}
            />
          </div>
        </div>

        <div className="table-container">
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Puntuación CHA2DS2-VASc</th>
                <th>Interpretación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>Riesgo bajo. No precisa anticoagulación</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  Riesgo moderado. Considerar anticoagulación o antiagregación
                </td>
              </tr>
              <tr>
                <td>&gt;2</td>
                <td>
                  Riesgo alto. Anticoagulación, salvo contraindicación
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  )
}

export default CHa2ds2