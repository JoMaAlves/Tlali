import React, { useEffect, useState } from "react";
import { day3 } from "../utils/days/day3";

import MainContainer from "../components/MainContainer";

export default function Day3({ endDay, endGame, initialStep }) {
  const [step, setStep] = useState(day3[initialStep]);

  useEffect(() => {
    step.endDay ? endDay() : null;
    step.endGame ? endGame() : null;
  }, [step]);

  const handleClick = (choice) => {};

  const handleChangeStep = (step) => {
    setStep(day3[step]);
  };

  return (
    <>
      <MainContainer
        mode={!!step.texts ? "story" : "choices"}
        onNextStep={handleChangeStep}
        step={step}
        onClick={handleClick}
      />
    </>
  );
}
