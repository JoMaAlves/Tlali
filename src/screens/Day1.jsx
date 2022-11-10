import { useEffect, useState } from "react";
import { day1 } from "../utils/days/day1";

import Curtain from "../components/Curtain";
import MainContainer from "../components/MainContainer";

export default function Day1({ endDay, setFood, setTool }) {
  const [step, setStep] = useState(day1.InitialStep);
  const [foodValue, setFoodValue] = useState(0);

  useEffect(() => {
    step.endDay ? endDay() : null;
  }, [step]);

  const handleClick = (choice) => {
    if (step.nextStep === "choice_2") {
      setFood(choice);
      setFoodValue(choice);
    }

    if (step.nextStep === "endDay") {
      if (choice) {
        setTool(choice);
      }
      setFood(foodValue + 1);
    }
  };

  const handleChangeStep = (step) => {
    setStep(day1[step]);
  };

  return (
    <>
      {!!step.curtain ? (
        <Curtain step={step} nextStep={handleChangeStep} />
      ) : (
        <MainContainer
          dayOne
          mode="choices"
          onNextStep={handleChangeStep}
          step={step}
          onClick={handleClick}
        />
      )}
    </>
  );
}
