"use client";
import React from "react";
import "./globals.css";
import "bulma/css/bulma.min.css";
import Breads from "./componentes/Breads";
import Columns from "./componentes/Columns";

export default function Home() {
  return (
    <div className="section has-background-light">
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Título principal */}
        <div className="box has-text-centered has-background-primary-light">
          <h1 className="title is-1 is-size-3-mobile has-text-primary">VallesMD</h1>
          <h2 className="subtitle is-4 is-size-6-mobile has-text-grey-dark">
            Compañía médica especializada
          </h2>
        </div>

        {/* Breadcrumbs */}
        <Breads />

        {/* Artículos de interés */}
        <div className="section">
          <h1 className="title has-text-left is-size-4 is-size-5-mobile">Artículos de Interés</h1>
          <Columns />
        </div>
      </div>
    </div>
  );
}