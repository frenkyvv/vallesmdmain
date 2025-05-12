'use client'
import React, { useState } from "react"
import "bulma/css/bulma.min.css"

const NewsScore = () => {
  const [frecuenciaResp, setfrecuenciaResp] = useState(0)
  const [saturacion, setsaturacion] = useState(0)
  const [saturacionEpoc, setsaturacionEpoc] = useState(0)
  const [oxigeno, setoxigeno] = useState(0)
  const [tas, setTas] = useState(0)
  const [frecuenciaCardio, setfrecuenciaCardio] = useState(0)
  const [conciencia, setconciencia] = useState(0)
  const [temperatura, settemperatura] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()
    const total =
      frecuenciaResp +
      saturacion +
      saturacionEpoc +
      oxigeno +
      tas +
      frecuenciaCardio +
      conciencia +
      temperatura
    alert(`La puntuación total de la escala de NEWS es: ${total}`)
  }

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Frecuencia Respiratoria</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                onChange={e => setfrecuenciaResp(parseInt(e.target.value))}
              >
                <option value="0">Selecciona una opción</option>
                <option value="3">Menor o Igual a 8</option>
                <option value="1">9 a 11</option>
                <option value="0">12 a 20</option>
                <option value="2">21 a 24</option>
                <option value="3">Mayor o igual a 25</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Saturación de Oxígeno</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setsaturacion(parseInt(e.target.value))}>
                <option value="0">Selecciona una opción</option>
                <option value="3">Menos o igual a 91%</option>
                <option value="2">92% a 93%</option>
                <option value="1">94% a 95%</option>
                <option value="0">Mayor o igual a 96%</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Saturación en caso de EPOC</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                onChange={e => setsaturacionEpoc(parseInt(e.target.value))}
              >
                <option value="0">Selecciona una opción</option>
                <option value="3">Menos o Igual a 83%</option>
                <option value="2">84% a 85%</option>
                <option value="1">86% a 87%</option>
                <option value="0">88% a 93% sin Oxígeno</option>
                <option value="1">93% a 94% con Oxígeno</option>
                <option value="2">95% a 96% con Oxígeno</option>
                <option value="3">Mayor o Igual a 97% con Oxígeno</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">¿Oxígeno suplementario?</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setoxigeno(parseInt(e.target.value))}>
                <option value="0">Selecciona una opción</option>
                <option value="2">Sí</option>
                <option value="0">No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Presión Arterial Sistólica</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setTas(parseInt(e.target.value))}>
                <option value="0">Selecciona una opción</option>
                <option value="3">Menos de 90</option>
                <option value="2">91 a 100</option>
                <option value="1">101 a 110</option>
                <option value="0">111 a 219</option>
                <option value="3">Mayor o Igual a 220</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Frecuencia Cardiaca</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                onChange={e => setfrecuenciaCardio(parseInt(e.target.value))}
              >
                <option value="0">Selecciona una opción</option>
                <option value="3">Menos de 40</option>
                <option value="1">41 a 50</option>
                <option value="0">51 a 90</option>
                <option value="1">91 a 110</option>
                <option value="2">111 a 130</option>
                <option value="3">Mayor o Igual a 131</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Estado de Conciencia</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setconciencia(parseInt(e.target.value))}>
                <option value="0">Selecciona una opción</option>
                <option value="0">Alerta</option>
                <option value="3">
                  C, V, D, I (Alteraciones en: Alerta, Confusión, Voz, Dolor,
                  Inconsciente)
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Temperatura</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                onChange={e => settemperatura(parseInt(e.target.value))}
              >
                <option value="0">Selecciona una opción</option>
                <option value="3">Menos o Igual a 35.0°</option>
                <option value="1">35.1° a 36°</option>
                <option value="0">36.1° a 38°</option>
                <option value="1">38.1° a 39°</option>
                <option value="2">Mayor o Igual a 39.1°</option>
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

export default NewsScore