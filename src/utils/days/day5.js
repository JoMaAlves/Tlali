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
      "Conseguem derrotar a onça.",
      "Após esse momento de superação e união familiar, todos seguem a jornada juntos, mesmo com ferimentos",
      "Encontram o rio e percebem que ele é diferente, há uma neblina nas suas margem e a água parece completamente limpa, como se não se misturasse com o barro e areia que está em baixo da agua",
      "Todos começam a sentir uma euforia, um bem estar físico e mental e são atraídos para perto do rio e repentinamente adormecem.",
      "Quando acordam, percebem que estão curados e num lugar seguro e reluzente junto a Itzcoatl, que explica os problemas que o impediram de explicar a demora no seu retorno. ",
      "Eles estão numa nova cidade chamada Eldorado, que acabou de fechar para sempre os portões, a fim de fugir dos colonizadores, homens brancos capazes de acabarem com povos inteiros.",
      "Fim do jogo.",
    ],
    nextStep: "endGame",
  },

  endDay: {
    endDay: true,
  },
  endGame: {
    endGame: true,
  },
};
