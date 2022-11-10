import React from "react";
import "./InformativeContainer.scss";

export default function InformativeContainer({
  className,
  monologue,
  name,
  text,
}) {
  return (
    <div className={`informative-container ${className}`}>
      <div
        className="informative-container__name-container"
        style={name ? { display: "flex" } : { display: "none" }}
      >
        <p className="informative-container__name-container__text">{name}</p>
      </div>

      <div className="informative-container__text-container">
        <p className="informative-container__text-container__paragraph">
          {monologue ? monologue : text}
        </p>
      </div>
    </div>
  );
}
