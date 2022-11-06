import React from "react";
import "./MainContainer.scss";
import InformativeContainer from "../InformativeContainer";
import Choice from "../Choice";

export default function MainContainer() {
  return (
    <div className="main-container">
      <InformativeContainer
        name="hello"
        text="asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfas dfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfas dfasdfasdfasdfasdfasdfasdfasdfasdf"
      />

      <div className="main-container__choices-container">
        <div className="main-container__choices-container__grid">
          <Choice gridPosition={[1, 1, 1, 2]} text="asdfasdfasdf" />
          <Choice gridPosition={[1, 3, 1, 4]} text="asdfasdfasdf" />
          <Choice gridPosition={[2, 1, 2, 2]} text="asdfasdfasdf" />
          <Choice gridPosition={[2, 3, 2, 4]} text="asdfasdfasdf" />
        </div>
      </div>
    </div>
  );
}
