import React from "react"
import WellsScore from "./Wells"
import "bulma/css/bulma.min.css"

export default function Pagina14() {
  return (
      <div className="container">
        <div className="section">
          <div className="has-text-centered">
            <h1 className="title is-4 has-text-weight-bold">Wells Score</h1>
            <p className="subtitle is-6 has-text-weight-normal">
              Escala para valorar el riesgo de TVP
            </p>
          </div>
          <div className="box">
            <WellsScore />
          </div>
        </div>
        <div className="buttons is-centered">
          <a href="/formulas" className="button is-link">
            Back
          </a>
        </div>
      </div>
    
  )
}