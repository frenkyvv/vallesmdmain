import React from "react"
import Fine from "./Fine"
import "bulma/css/bulma.min.css"

export default function Pagina17() {
  return (
    
      <div className="container" style={{ width: "350px" }}>
        {/* Título principal */}
        <div className="section">
          <div className="has-text-centered">
            <h1 className="title is-3 has-text-weight-bold has-text-primary">
              Escala de Fine (PSI)
            </h1>
            <p className="subtitle is-5 has-text-grey">
              Escala de gravedad de Neumonía Adquirida en la Comunidad
            </p>
          </div>
          <div className="box">
            <Fine />
          </div>
        </div>
        <div className="buttons is-centered">
          <a href="/" className="button is-link is-medium">
            Back
          </a>
        </div>
      </div>
    
  )
}