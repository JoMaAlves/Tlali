import React, { useEffect, useState } from "react";
import { day4 } from "../utils/days/day4";

import MainContainer from "../components/MainContainer";

export default function Day4({ endDay, endGame, riskFactor, onRiskFactor }) {
  const [step, setStep] = useState(day4.InitialStep);

  useEffect(() => {
    step.endDay ? endDay() : null;
    step.endGame ? endGame() : null;
    step.riskFactor || step.riskFactor === -1
      ? onRiskFactor(riskFactor + step.riskFactor)
      : null;
  }, [step]);

  const handleClick = (choice) => {
    if (typeof choice.riskFactor === "number") {
      const sum = riskFactor + choice.riskFactor;
      onRiskFactor(sum);
    }
  };

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
