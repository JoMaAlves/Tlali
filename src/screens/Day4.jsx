import React, { useEffect, useState } from "react";
import { day4 } from "../utils/days/day4";

import MainContainer from "../components/MainContainer";

export default function Day4({ endDay, endGame }) {
  const [step, setStep] = useState(day4.InitialStep);

  useEffect(() => {
    step.endDay ? endDay() : null;
    step.endGame ? endGame() : null;
  }, [step]);

  const handleClick = (choice) => {};

  const handleChangeStep = (step) => {
    setStep(day4[step]);
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
