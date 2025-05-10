"use client";
import React from "react";
import "bulma/css/bulma.min.css"; // Importa Bulma
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importa FontAwesome

export default function Breads({}) {
  return (
    <div className="container">
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="#" className="has-text-black">
              <span className="icon is-small">
                <i className="fas fa-home" aria-hidden="true"></i>
              </span>
              <span>VallesMD</span>
            </a>
          </li>
          <li>
            <a href="#" className="has-text-black">
              <span className="icon is-small">
                <i className="fas fa-book" aria-hidden="true"></i>
              </span>
              <span>Documentos</span>
            </a>
          </li>
          <li>
            <a href="#" className="has-text-black">
              <span className="icon is-small">
                <i className="fas fa-puzzle-piece" aria-hidden="true"></i>
              </span>
              <span>Formulas</span>
            </a>
          </li>
          <li className="is-active">
            <a href="#" className="has-text-black">
              <span className="icon is-small">
                <i className="fas fa-thumbs-up" aria-hidden="true"></i>
              </span>
              <span>Quienes Somos</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
