import React from "react";
import "./DayEndPage.scss";

export default function DayEndPage({ day, food, onContinue, riskFactor }) {
  const handleClick = () => {
    onContinue();
  };

  return (
    <div className="day-end-page">
      <div className="day-end-page__container">
        <h1>Fim do Dia</h1>
        <div className="day-end-page__container__ornament">Day {day}</div>
        <h2>Distribuicão de Recursos</h2>
        <div className="day-end-page__container__bottom-container">
          <div className="day-end-page__container__bottom-container__paper">
            <h1>Recursos: {food}</h1>
            <h1>Risco: {riskFactor}</h1>
          </div>
          <button
            className="day-end-page__container__bottom-container__button"
            onClick={handleClick}
          >
            <h2>Continuar</h2>
          </button>
        </div>
      </div>
    </div>
  );
}
