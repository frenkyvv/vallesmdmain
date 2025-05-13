import React from "react"
import CHa2ds2 from "./Cha2dds2"
import "bulma/css/bulma.min.css"

export default function Pagina20() {
  return (
    
      <div className="container">
        <div className="section">
          <div className="has-text-centered">
            <h1 className="title is-3 has-text-weight-bold has-text-primary">
              Escala de CHA2DS2-VASc
            </h1>
            <p className="subtitle is-5 has-text-grey">
              Estima el riesgo que tiene un paciente con fibrilación o flutter de sufrir un ictus en 1 año
            </p>
          </div>
          <div className="box">
            <CHa2ds2 />
          </div>
        </div>
        <div className="buttons is-centered">
          <a href="/formulas" className="button is-link is-medium">
            Back
          </a>
        </div>
      </div>

  )
}