import React, { useEffect, useState } from "react";
import { day5 } from "../utils/days/day5";

import MainContainer from "../components/MainContainer";

export default function Day5({ endDay, endGame, riskFactor, onRiskFactor }) {
  const [step, setStep] = useState(day5.InitialStep);

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
