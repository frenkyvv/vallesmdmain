import React from "react"
import RockallForm from "./Rockall"
import "bulma/css/bulma.min.css"

export default function Pagina21() {
  return (
    
      <div className="container">
        <div className="section">
          <div className="has-text-centered">
            <h1 className="title is-3 has-text-weight-bold has-text-primary">
              Escala de Rockall
            </h1>
            <p className="subtitle is-5 has-text-grey">
              Predictor de riesgo en pacientes con HDA
            </p>
          </div>
          <div className="box">
            <RockallForm />
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