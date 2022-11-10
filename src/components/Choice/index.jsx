import React from "react";
import "./Choice.scss";

export default function Choice({
  gridPosition,
  index,
  monologue,
  onClick,
  onMouseLeave,
  onMouseOver,
  text,
  value,
}) {
  const handleClick = () => {
    onClick(value, index);
    onMouseLeave();
  };

  const handleMouseOver = () => {
    onMouseOver(monologue);
  };

  const handleMouseLeave = () => {
    onMouseLeave();
  };

  return (
    <div
      className="choice"
      style={{
        gridArea: `${gridPosition[0]} 
                  / ${gridPosition[1]} 
                  / ${gridPosition[2]} 
                  / ${gridPosition[3]}`,
      }}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <p className="choice__text-container" onClick={handleClick}>
        {text}
      </p>
    </div>
  );
}
