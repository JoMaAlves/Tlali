import React, { useState } from "react";
import "./MainContainer.scss";
import InformativeContainer from "../InformativeContainer";
import Choice from "../Choice";

export default function MainContainer({
  dayOne = false,
  step,
  onNextStep,
  onClick,
  mode,
}) {
  const [story, setStory] = useState(0);
  const [monologue, setMonologue] = useState("");

  const handleClick = (choice, index) => {
    dayOne ? onClick(choice.value) : onClick(choice);
    dayOne
      ? onNextStep(step.nextStep)
      : onNextStep(step.choices[index].nextStep);
    setStory(0);
  };

  const handleNextStory = () => {
    if (story + 1 === step.texts.length) {
      onNextStep(step.nextStep);
      setStory(0);
      return;
    }
    setStory(story + 1);
  };

  const handleMonologueOn = (text) => {
    setMonologue(text);
  };

  const handleMonologueOut = () => {
    setMonologue("");
  };

  return (
    <div className="main-container">
      <InformativeContainer
        name={step.name}
        text={mode === "story" ? step.texts[story] : step.text}
        monologue={monologue}
      />

      {mode === "choices" ? (
        <div className="main-container__choices-container">
          <div className="main-container__choices-container__grid">
            {!!step.choices &&
              step.choices.map((choice, index) => {
                let gridPosition = [0, 0, 0, 0];

                if (index === 0 && step.choices.length === 1)
                  gridPosition = [1, 2, 1, 3];
                if (index === 0 && step.choices.length > 1)
                  gridPosition = [1, 1, 1, 2];
                if (index === 1) gridPosition = [1, 3, 1, 4];
                if (index === 2 && step.choices.length === 3)
                  gridPosition = [2, 2, 2, 3];
                if (index === 2 && step.choices.length === 4)
                  gridPosition = [2, 1, 2, 2];
                if (index === 3) gridPosition = [2, 3, 2, 4];

                return (
                  <Choice
                    gridPosition={gridPosition}
                    index={index}
                    key={index}
                    monologue={choice.monologue ? choice.monologue : ""}
                    onClick={handleClick}
                    onMouseLeave={handleMonologueOut}
                    onMouseOver={handleMonologueOn}
                    text={choice.text}
                    value={choice.value}
                    choice={choice}
                  />
                );
              })}
          </div>
        </div>
      ) : (
        <button className="main-container__button" onClick={handleNextStory}>
          <h2>{step.nextStep === "endGame" ? "Menu" : "Continuar"}</h2>
        </button>
      )}
    </div>
  );
}
