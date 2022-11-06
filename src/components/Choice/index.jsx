import React from "react";
import "./Choice.scss";

export default function Choice({ gridPosition, text }) {
  return (
    <div
      className="choice"
      style={{
        gridArea: `${gridPosition[0]} 
                  / ${gridPosition[1]} 
                  / ${gridPosition[2]} 
                  / ${gridPosition[3]}`,
      }}
    >
      <p className="choice__text-container">{text}</p>
    </div>
  );
}
