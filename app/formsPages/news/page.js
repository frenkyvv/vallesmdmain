import React from "react"
import NewsScore from "./News"
import Link from "next/link"
import "bulma/css/bulma.min.css"

export default function Pagina17() {
  return (
    
      <div className="container" style={{ width: "280px" }}>
        <div className="section">
          <div className="has-text-centered">
            <h1 className="title is-3 has-text-weight-bold has-text-primary">
              Escala de News
            </h1>
            <p className="subtitle is-5 has-text-grey">
              National Early Warning Score
            </p>
          </div>
          <div className="box">
            <NewsScore />
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