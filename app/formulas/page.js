"use client";
import React from "react";
import "bulma/css/bulma.min.css";
import Link from "next/link";
import Breads from "@/app/componentes/Breads"; // Asegúrate de que la ruta sea correcta
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Formulas() {
  return (
    <div className="section has-background-light">
      <div className="container">
        {/* Título principal */}
        <div className="box has-text-centered">
          <h1 className="title is-2 has-text-primary">Fórmulas</h1>
          <p className="subtitle is-5">
            Bienvenido a la página de fórmulas. Aquí puedes seleccionar la fórmula que deseas calcular.
          </p>
        </div>

        {/* Breadcrumbs */}
        <Breads />

        {/* Botones de fórmulas */}
        <div className="columns is-centered" style={{ marginTop: "30px" }}>
          <div className="column is-half">
            <div className="box has-text-centered">
              <h2 className="title is-4">Dopamina</h2>
              <p className="subtitle is-6">Cálculo de dosis de Dopamina</p>
              <Link href="/formsPages/dopamina">
                <button className="button is-primary is-fullwidth">Ir a Dopamina</button>
              </Link>
            </div>
            <div className="box has-text-centered">
              <h2 className="title is-4">Deficit Agua</h2>
              <p className="subtitle is-6">Cálculo de deficit de Agua</p>
              <Link href="/formsPages/deficitAgua">
                <button className="button is-info is-fullwidth">Ir a Deficit</button>
              </Link>
            </div>
            <div className="box has-text-centered">
              <h2 className="title is-4">Sodio</h2>
              <p className="subtitle is-6">Cálculo de sodio corregido</p>
              <Link href="/formsPages/sodiocorregido">
                <button className="button is-danger is-fullwidth">Ir a Sodio</button>
              </Link>
            </div>
            <div className="box has-text-centered">
              <h2 className="title is-4">Osmolaridad</h2>
              <p className="subtitle is-6">Cálculo de Osmolaridad</p>
              <Link href="/formsPages/osmolaridad">
                <button className="button is-primary is-fullwidth">Ir a Osmolaridad</button>
              </Link>
            </div>
            <div className="box has-text-centered">
              <h2 className="title is-4">Hiperton</h2>
              <p className="subtitle is-6">Soluciones Hipertonicas</p>
              <Link href="/formsPages/hiperton">
                <button className="button is-warning is-fullwidth">Ir a Hiperton</button>
              </Link>
            </div>
            <div className="box has-text-centered">
              <h2 className="title is-4">CURB65</h2>
              <p className="subtitle is-6">Escala de CURB 65</p>
              <Link href="/formsPages/curb65">
                <button className="button is-dark is-fullwidth">Ir a CURB 65</button>
              </Link>
            </div>
          </div>
          <div className="column is-half">
            <div className="box has-text-centered">
              <h2 className="title is-4">Dobutamina</h2>
              <p className="subtitle is-6">Cálculo de dosis de Dobutamina</p>
              <Link href="/formsPages/dobutamina">
                <button className="button is-info is-fullwidth">Ir a Dobutamina</button>
              </Link>
            </div>
            <div className="box has-text-centered">
              <h2 className="title is-4">Bicarbonato</h2>
              <p className="subtitle is-6">Cálculo de deficit de HCO3</p>
              <Link href="/formsPages/bicarbonato">
                <button className="button is-link is-fullwidth">Ir a Bicarbonato</button>
              </Link>
            </div>
            <div className="box has-text-centered">
              <h2 className="title is-4">Alteplase</h2>
              <p className="subtitle is-6">Cálculo de dosis de Alteplase</p>
              <Link href="/formsPages/alteplase">
                <button className="button is-primary is-fullwidth">Ir a Alteplase</button>
              </Link>
            </div>

            <div className="box has-text-centered">
              <h2 className="title is-4">Glasgow</h2>
              <p className="subtitle is-6">Escala de coma de Glasgow</p>
              <Link href="/formsPages/glasgow">
                <button className="button is-dark is-fullwidth">Ir a Glasgow</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}