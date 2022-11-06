import React from "react";
import "./Background.scss";

export default function Background({ day, children }) {
  return <div className={`background day-${day}`}>{children}</div>;
}
