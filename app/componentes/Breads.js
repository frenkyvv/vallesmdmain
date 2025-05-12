"use client";
import React from "react";
import Link from "next/link";
import "bulma/css/bulma.min.css"; // Importa Bulma
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importa FontAwesome

export default function Breads({}) {
  return (
    <div className="container">
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link href="/" className="has-text-black">
              <span className="icon is-small">
                <i className="fas fa-home" aria-hidden="true"></i>
              </span>
              <span>VallesMD</span>
            </Link>
          </li>

          <li>
            <Link href="/formulas" className="has-text-black">
              <span className="icon is-small">
                <i className="fas fa-puzzle-piece" aria-hidden="true"></i>
              </span>
              <span>Formulas</span>
            </Link>
          </li>
          <li className="is-active">
            <Link href="#" className="has-text-black">
              <span className="icon is-small">
                <i className="fas fa-thumbs-up" aria-hidden="true"></i>
              </span>
              <span>Team</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
