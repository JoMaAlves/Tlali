import React, { useEffect, useState } from "react";
import "./StatusBar.scss";

export default function StatusBar({ title, levels, value }) {
  const [gridPosition, setGridPosition] = useState();

  useEffect(() => {
    setGridPosition(title === "Vitalidade" ? 4 - value : value + 1);
  }, [value]);

  return (
    <div className="status-bar">
      <div className="status-bar__title">
        <span>{title}</span>
      </div>
      <div className="status-bar__container">
        <span>{levels[0]}</span>
        <span>{levels[1]}</span>
        <span>{levels[2]}</span>

        <div className="status-bar__container__grid">
          <div
            style={{
              gridArea: `1 / ${gridPosition} / 1 / ${gridPosition}`,
            }}
            className="status-bar__container__grid__marker"
          ></div>
        </div>
      </div>
    </div>
  );
}
