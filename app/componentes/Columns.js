"use client";
import React from "react";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Marco from "./Marco.js";

export default function Columns({}) {
  return (
    <div className="columns">
      <div className="column">
        <Marco
          title="Yanfei Chen"
          subtitle="@yanchein"
          content="Angiotensinogen: a new era beyond lactate as a biomarker?"
          imageCardSrc="https://live.staticflickr.com/65535/54509109578_b0892561df_h.jpg"
          dateTime="2024"
          downloadLink="https://drive.google.com/file/d/1BBoq8p_TDH7LydMcVgPVcUhCi-LFs226/view?usp=sharing"
        />
        <Marco
          title="Wei Yu Chua"
          subtitle="@weiyuchua"
          content="Corticosteroides en pacientes críticos con neumonía adquirida en la comunidad: una revisión sistemática y un metanálisis bayesiano - 2024"
          imageCardSrc="https://live.staticflickr.com/65535/54509006819_e8589ede93_h.jpg"
          dateTime="2025-05-09"
          downloadLink="https://drive.google.com/file/d/16OGUzJ1OYf_8mFbnMxJ2hG6YVzyHtIOu/view?usp=share_link"
        />
      </div>
      <div className="column">
        <Marco
          title="Tanya Egodage"
          subtitle="@tanyaegodage"
          content="The Intensivist’s Perspective of Shock, Volume Management, and Hemodynamic Monitoring"
          imageCardSrc="https://live.staticflickr.com/65535/54509188895_aeb4c2eace_c.jpg"
          downloadLink="https://drive.google.com/file/d/1n8c06oNn21B9n9nNMMj8Rkpa35kni0WH/view?usp=sharing"
          dateTime="2024"
        />
        <Marco
          title="Kianoush Kashani"
          subtitle="@kashani"
          content="Emergency doctor, owner of the company."
          imageCardSrc="https://live.staticflickr.com/65535/54509191430_e0e4e4fd78_c.jpg"
          downloadLink="https://drive.google.com/file/d/1r61o6wXspQ0swRhAX1gjfPqEzGKe_iQ_/view?usp=sharing"
          dateTime="2022"
        />
      </div>
    </div>
  );
}
