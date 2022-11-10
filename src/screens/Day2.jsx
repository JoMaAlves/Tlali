import React, { useEffect, useState } from "react";
import { day2 } from "../utils/days/day2";

import MainContainer from "../components/MainContainer";

export default function Day2({ endDay, endGame, setEndDay2 }) {
  const [step, setStep] = useState(day2.InitialStep);

  useEffect(() => {
    step.endDayType ? setEndDay2(step.endDayType) : null;
    step.endDay ? endDay() : null;
    step.endGame ? endGame() : null;
  }, [step]);

  const handleClick = (choice) => {};

  const handleChangeStep = (step) => {
    setStep(day2[step]);
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
