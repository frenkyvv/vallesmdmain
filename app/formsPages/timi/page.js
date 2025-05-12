import React from "react"
import TimiScoreCalculator from "./Timi"
import "bulma/css/bulma.min.css"

export default function Pagina17() {
  return (
    
      <div className="container">
        <div className="section">
          <div className="has-text-centered">
            <h1 className="title is-3 has-text-weight-bold has-text-primary">
              Escala de TIMI
            </h1>
            <p className="subtitle is-5 has-text-grey">
              Puntaje Riesgo TIMI para IAM con SDST
            </p>
          </div>
          <div className="box">
            <TimiScoreCalculator />
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