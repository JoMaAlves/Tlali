import React, { useEffect, useState } from "react";
import { day5 } from "../utils/days/day5";

import MainContainer from "../components/MainContainer";

export default function Day5({ endDay, endGame }) {
  const [step, setStep] = useState(day5.InitialStep);

  useEffect(() => {
    step.endDay ? endDay() : null;
    step.endGame ? endGame() : null;
  }, [step]);

  const handleClick = (choice) => {};

  const handleChangeStep = (step) => {
    setStep(day5[step]);
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
