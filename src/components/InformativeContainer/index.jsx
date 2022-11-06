import React from "react";
import "./InformativeContainer.scss";

export default function InformativeContainer({ className, name, text }) {
  return (
    <div className={`informative-container ${className}`}>
      <div className="informative-container__name-container">
        <p className="informative-container__name-container__text">{name}</p>
      </div>

      <div className="informative-container__text-container">
        <p className="informative-container__text-container__paragraph">
          {text}
        </p>
      </div>
    </div>
  );
}
