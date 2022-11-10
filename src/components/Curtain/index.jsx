import React, { useState } from "react";
import "./Curtain.scss";

export default function Curtain({ step, nextStep }) {
  const [page, setPage] = useState(0);

  const handleNextPage = () => {
    if (page + 1 === step.texts.length) {
      nextStep(step.nextStep);
    }
    setPage(page + 1);
  };

  return (
    <div className="curtain">
      <div className="curtain__text-container">
        <h1>{step.texts[page]}</h1>
      </div>

      <button className="curtain__button" onClick={handleNextPage}>
        <h2>Continuar</h2>
      </button>
    </div>
  );
}
