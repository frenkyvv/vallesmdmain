import React from "react"
import NihssCalculator from "./Nihss"
import Link from "next/link"
import "bulma/css/bulma.min.css"

export default function Pagina16() {
  return (
   
      <div className="container" style={{ width: "350px" }}>
        {/* Título principal */}
        <div className="section">
          <div className="has-text-centered">
            <h1 className="title is-3 has-text-weight-bold has-text-primary">
              Escala de NIHSS
            </h1>
            <p className="subtitle is-5 has-text-grey">
              National Institute of Health Stroke Score
            </p>
          </div>
          <div className="box">
            <NihssCalculator />
          </div>
        </div>
        <div className="buttons is-centered">
          <Link href="/formulas" className="button is-link is-medium">
            Back
          </Link>
        </div>
      </div>
    
  )
}