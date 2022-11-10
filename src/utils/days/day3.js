export const day3 = {
  initialStep_A: {
    texts: ["Ouvem um estrondo e notam que está chovendo fortemente"],
    nextStep: "choice_1",
  },
  initialStep_B: {
    texts: ["Ouvem um estrondo e notam que está chovendo fortemente"],
    nextStep: "choice_2",
  },
  choice_1: {
    texts: [
      "Voces acordaram com o susto e notam que precisarao tomar uma decisao",
    ],
    nextStep: "choice_3",
  },
  choice_3: {
    choices: [
      {
        value: 1,
        text: "Seguir durante a chuva",
        monologue:
          "Sob o pretexto de que precisam se apressar, decidem partir assim mesmo, debaixo de chuva.",
        riskFactor: 1,
        nextStep: "choice_4",
      },
      {
        value: 2,
        text: "Esperar a chuva passar",
        monologue:
          "A chuva pode prejudicar muito nossa jornada, melhor esperarmos ela passar aqui na caverna. ",
        riskFactor: -1,
        nextStep: "choice_5",
      },
    ],
    name: "Yoali",
    text: "Como devemos lidar com essa chuva toda?",
  },

  choice_4: {
    texts: [
      "Se deparam com um lamaçal pequeno, mas que precisarão atravessar",
      "Mesmo molhados e sujos de lama, conseguem seguir a jornada com certa dificuldade",
      "Após o lamaçal, conseguem seguir sem muitas dificuldades até pararam para descansar",
    ],
    nextStep: "endDay",
  },

  choice_5: {
    texts: [
      "Mesmo sob chuva, precisam seguir a jornada",
      "Se deparam com o caminho obstruído por um deslizamento.",
      "Precisam encontrar um novo caminho.",
      "Se deparam com um lamaçal, mas que precisarão atravessar",
      "Após o lamaçal, conseguem seguir sem muitas dificuldades até pararam para descansar.",
    ],
    riskFactor: 2,
    nextStep: "endDay",
  },

  choice_2: {
    texts: [
      "Percebem que chuva não vai cessar nem tão cedo e resolvem seguir caminho",
      "Se deparam com um lamaçal grande, mas que precisarão atravessar",
      "Após o lamaçal, conseguem seguir sem muitas dificuldades até pararam para descansar",
    ],
    riskFactor: 2,
    nextStep: "endDay",
  },

  endDay: {
    endDay: true,
  },
  endGame: {
    endGame: true,
  },
};
