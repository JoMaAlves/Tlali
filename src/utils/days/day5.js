export const day5 = {
  InitialStep: {
    texts: [
      "Sabem que estão bem próximos do rio, a vegetação está inclusive mais úmida",
      "Se deparam com uma onça enorme e fugir parece mais difícil dessa vez.",
    ],
    nextStep: "choice_1",
  },
  choice_1: {
    choices: [
      {
        value: 2,
        text: "Decidem fugir",
        monologue: "Precisamos fugir para um lugar seguro!",
        nextStep: "choice_2",
      },
      {
        value: 1,
        text: "Decidem unir forças e lutarem",
        monologue: "Pela primeira vez, não fugir! Precisamos lutar!",
        nextStep: "choice_3",
      },
    ],
    name: "Yoali",
    text: "Precisamos pensar rápido!",
  },
  choice_2: {
    texts: ["São pegos pela onça que acaba ferindo fatalmente toda da família"],
    nextStep: "endGame",
  },

  choice_3: {
    texts: [
      "Aqui pode acontecer a morte de algum personagem, porém a tendência é que a onça seja derrotada",
    ],
  },

  endDay: {
    endDay: true,
  },
  endGame: {
    endGame: true,
  },
};
