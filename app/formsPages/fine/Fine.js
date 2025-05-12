'use client'
import React, { useState } from "react"
import "bulma/css/bulma.min.css"

const timiCriteria = [
  { label: "Asistencia sanitaria domiciliaria", value: 10 },
  { label: "Neoplasia", value: 30 },
  { label: "Hepatopatía", value: 20 },
  { label: "Insuficiencia Cardiaca Congestiva", value: 10 },
  { label: "Enfermedad Cerebro Vascular", value: 10 },
  { label: "Enfermedad renal", value: 10 },
  { label: "Frecuencia Cardiaca > 100", value: 20 },
  { label: "Alteración de conciencia", value: 20 },
  { label: "Frecuencia respiratoria > 30 rpm", value: 20 },
  { label: "Presión sistólica menor a 90 mmHg", value: 20 },
  { label: "Temperatura < 35 o > 40 °C", value: 15 },
  { label: "Frecuencia Cardiaca >= 135 lpp", value: 10 },
  { label: "pH Arterial < 7.35", value: 30 },
  { label: "BUN > 30", value: 20 },
  { label: "Sodio < 130", value: 20 },
  { label: "Glucosa >= 250", value: 10 },
  { label: "Hematocrito < 30%", value: 10 },
  { label: "paO2 < 60", value: 10 },
  { label: "Derrame Pleural", value: 10 },
]

const Fine = () => {
  const [baseScore, setBaseScore] = useState(0)
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")

  const handleCheckboxChange = (value, checked) => {
    setBaseScore(currentBaseScore =>
      checked ? currentBaseScore + value : currentBaseScore - value
    )
  }

  const handleAgeChange = e => {
    setAge(e.target.value)
  }

  const handleGenderChange = e => {
    setGender(e.target.value)
  }

  const calculateFinalScore = () => {
    let finalScore = baseScore + parseInt(age || 0, 10)
    if (gender === "female") {
      finalScore -= 10
    }
    return finalScore
  }

  return (
    <div className="box">
      <form>
        <div className="field">
          <label className="label">Género del paciente</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select value={gender} onChange={handleGenderChange}>
                <option value="">Seleccione...</option>
                <option value="male">Hombre</option>
                <option value="female">Mujer</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Edad del paciente</label>
          <div className="control">
            <input
              className="input"
              type="number"
              value={age}
              onChange={handleAgeChange}
              placeholder="Ingresa la edad del paciente"
            />
          </div>
        </div>

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
              value={calculateFinalScore()}
            />
          </div>
        </div>

        <div className="table-container">
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Total</th>
                <th>Clase</th>
                <th>Mortalidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Menor de 70</td>
                <td>Clase II</td>
                <td>0.6%</td>
              </tr>
              <tr>
                <td>71 - 90</td>
                <td>Clase III</td>
                <td>0.9%</td>
              </tr>
              <tr>
                <td>91 - 130</td>
                <td>Clase IV</td>
                <td>9.5%</td>
              </tr>
              <tr>
                <td>Mayor a 130</td>
                <td>Clase V</td>
                <td>26.7%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  )
}

export default Fine