import React from "react"
import SofaScore from "./Sofa"
import "bulma/css/bulma.min.css"

export default function Pagina15() {
  return (
    
      <div className="container">
        <div className="section">
          <div className="has-text-centered">
            <h1 className="title is-3 has-text-weight-bold has-text-primary">
              SOFA Score
            </h1>
            <p className="subtitle is-5 has-text-grey">
              Secuential Organ Failure Assessment
            </p>
          </div>
          <div className="box">
            <SofaScore />
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