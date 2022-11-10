import React from "react";
import "./DayEndPage.scss";

export default function DayEndPage({ day, onContinue }) {
  const handleClick = () => {
    onContinue();
  };

  return (
    <div className="day-end-page">
      <div className="day-end-page__container">
        <h1>Fim do Dia</h1>
        <div className="day-end-page__container__ornament">Day {day}</div>
        <button
          className="day-end-page__container__button"
          onClick={handleClick}
        >
          <h2>Continuar</h2>
        </button>
      </div>
    </div>
  );
}
