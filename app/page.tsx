"use client";
import React from "react";
import "./globals.css";
import "bulma/css/bulma.min.css";
import Breads from "./componentes/Breads";
import Columns from "./componentes/Columns";

export default function Home() {
  return (
    <div className="container">
      <h1 className="title"> VallesMD</h1>
      <h2 className="subtitle">Asesoria médica especializada</h2>
      <Breads />
      <div className="body">
        <h1 className="title has-text-left">Articulos de Interes</h1>
        <Columns />
      </div>
    </div>
  );
}
