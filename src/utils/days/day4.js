export const day4 = {
  InitialStep: {
    texts: [
      "Todos estavam dormindo, acordam com som de movimentos próximos, vendo logo em seguida um homem se aproximando.",
      "Ao aproximar-se reconhecem-o de uma outra vila vizinha, o homem fala que estava a caminho de um lugar que falavam ser a salvação para seu povo. Além disso, deu dicas sobre um rio, chamado Guatavita, que guardava um segredo sobre esse lugar, dando instruções para o caminho até esse rio.",
      "Ele achou aquilo tudo muito esquisito. Sentindo que corria perigo, que estava seguindo em direção à sua morte e por isso fugiu.",
    ],
    nextStep: "choice_1",
  },
  choice_1: {
    choices: [
      {
        value: 2,
        text: "Acreditar no homem",
        monologue:
          "Resolvem acreditar no homem e segui-lo até um local que ele considere seguro.",
        nextStep: "choice_2",
      },
      {
        value: 1,
        text: "Continuar seguindo as pistas",
        monologue:
          "Continuar seguindo a jornada com as pistas dadas pelo homem.",
        nextStep: "choice_3",
      },
    ],
    name: "Yoali",
    text: "Temos novas informações, o que devemos fazer?",
  },

  choice_2: {
    texts: [
      "Voltam a vila e depois se juntam com outro grupo que também decidiu não abandonar sua moradia, e lá viverão o resto de suas vidas escondidos dos colonizadores, sem reencontrar o pai.",
    ],
    nextStep: "endGame",
  },

  choice_3: {
    texts: [
      "O caminho passa por uma praia, ao chegarem, encontram um barco atracando com os colonizadores",
    ],
    nextStep: "choice_4",

    name: "Yoali",
  },

  choice_4: {
    choices: [
      {
        value: 2,
        text: "Tentar se aproximar dos homens",
        monologue: "Talvez eles sejam mais legais.",
        nextStep: "choice_5",
      },
      {
        value: 1,
        text: "Se esconder até eles sairem",
        monologue: "Talvez seja a decisão mais prudente.",
        nextStep: "choice_6",
      },
    ],
    name: "Yoali",
    text: "Nós já vimos homens parecidos antes, devemos nos aproximar?",
  },

  choice_5: {
    texts: [
      "São detectados pelos coloniadores e precisam fugir às pressas.",
      "Demoram muito para despistarem os coloniadores e ficam muito exaustos. Encontram um ponto de descanso",
    ],
    nextStep: "endDay",
  },

  choice_6: {
    texts: [
      "Conseguem passar sem serem detectados pelos colonizadores",
      "Seguindo por um caminho mais tranquilo até acharem um ponto para descanso",
    ],
    nextStep: "endDay",
  },
  endDay: {
    endDay: true,
  },
  endGame: {
    endGame: true,
  },
};
