import React from "react";
import "./MainPage.scss";

export default function MainPage({ onStart }) {
  return (
    <div className="main-page">
      <div className="main-page__central-container">
        <h1 className="title">Tlalli</h1>

        <button className="button" onClick={onStart}>
          Jogar
        </button>
      </div>
    </div>
  );
}
