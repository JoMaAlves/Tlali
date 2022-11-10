export const day2 = {
  InitialStep: {
    texts: [
      "A viagem estava tranquila, o caminho era conhecido por todos, já que as relações com a tribo vizinha era totalmente amigável. O ritmo foi um pouco mais lento que o normal, já que Toci, por ter uma idade mais avançada, não conseguiria acompanhar o ritmo jovial dos outros membros da família",
      "Estavam há apenas 3 horas da vila quando notaram, no caminho, dois corpos.",
      "Ao se aproximarem, percebem que os corpos pertencem a pessoas com vestimentas completamente diferentes das que eles usam, são armaduras brilhantes e roupas bastante coloridas.",
      "Na mão de um dos corpos percebem uma ferramenta, claramente feita por Ytzcoatl.",
    ],
    nextStep: "choice_1",
  },
  choice_1: {
    choices: [
      {
        value: 1,
        text: "Voltar para a vila",
        monologue:
          "Esta jornada está perigosa demais, precisamos voltar com mais pessoas, não podemos nos arriscar tanto.",
        nextStep: "choice_2",
      },
      {
        value: 2,
        text: "Continuar em direção à vila",
        monologue:
          "Precisamos nos apressar e descobrir o que aconteceu com Ytzcoatl, ele deve estar em segurança na vila, vamos reportar esses corpos e buscar ajuda de lá.",
        nextStep: "choice_3",
      },
      {
        value: 3,
        requiredItem: "axe",
        text: "Ir até a vila por um atalho",
        monologue:
          "Existe um caminho que nos levará mais rapidamente até a vila, Ytzcoatl pode estar correndo perigo!",
        nextStep: "choice_4",
      },
    ],
    name: "Yoali",
    text: "O que faremos agora? Se tivermos um machado podemos ir por aquele atalho!",
  },
  choice_2: {
    texts: [
      "No caminho de volta são pegos de surpresa por um bando de colonizadores e feitos de escravos.",
    ],
    nextStep: "endGame",
  },
  choice_3: {
    texts: [
      "Ao chegarem na vila, notam que há pessoas deconhecidas, com vestimentas diferentes, fisionomia também diferente, parecem estar confraternizando, porém, não há sinal dos moradores da vila.",
    ],
    nextStep: "choice_5",
  },

  choice_5: {
    choices: [
      {
        value: 2,
        text: "Tentar se aproximar dos homens misteriosos",
        monologue:
          "Os homens parecem felizes e não estão armados, talvez possam ajudar.",
        riskFactor: 1,
        nextStep: "choice_6",
      },
      {
        value: 1,
        text: "Esperar que eles saiam",
        monologue:
          "Talvez eles não demorem tanto para sair, podemos esperar até que garantida a nossa segurança.",
        riskFactor: -1,
        nextStep: "choice_7",
      },
    ],
    name: "Yoali",
    text: "Como devemos lidar com essa situação?",
  },
  choice_6: {
    texts: ["No primeiro contato notam que os homens são hostis"],
    nextStep: "choice_8",
  },

  choice_8: {
    choices: [
      {
        value: 2,
        text: "Continuar a tentativa de comunicação",
        monologue:
          "Talvez eles apenas estão assustados com a nossa presença e ainda possam ajudar",
        nextStep: "choice_9",
      },
      {
        value: 1,
        text: "Fugir",
        monologue:
          "Mesmo sem um caminho muito claro para seguir, a única opção parece ser fugir dessas pessoas.",
        riskFactor: 1,
        nextStep: "choice_10",
      },
    ],
    name: "Yoali",
    text: "E agora?",
  },

  choice_9: {
    texts: [
      "São mortos pelos homens brancos, sendo uma das muitas vítimas que a colonização causou por toda a américa.",
    ],
    nextStep: "endGame",
  },

  choice_7: {
    choices: [
      {
        value: 1,
        text: "Vasculhar a vila vazia",
        monologue:
          "Podemos encontrar evidência de um possível local aonde os moradores e possivelmente Ytzcoatl foi",
        nextStep: "choice_11",
      },
    ],
    name: "Yoali",
    text: "O que faremos agora?",
  },

  choice_10: {
    texts: [
      "Com a tomada abrupta de decisão, a família encontra um caminho mais fechado pela mata, mas o único possível para a fuga",
      "Após um tempo, já sem ninguém os seguindo, acham uma pequena caverna no meio do mato e um caminho mais aberto com marcações de símbolos familiares em árvores",
      "A família encontra-se muito exausta para continuar e resolve descansar numa caverna que encontram",
    ],
    nextStep: "endDay",
    riskFactor: -1,
    endDayType: "initialStep_A",
  },

  choice_11: {
    choices: [
      {
        value: 1,
        text: "Seguir viagem",
        monologue:
          "Mesmo com o anoitecer próximo, é melhor ter pressa para encontrar Ytzcoatl.",
        riskFactor: 1,
        nextStep: "choice_12",
      },
      {
        value: 2,
        text: "Descansar na vila abandonada",
        monologue:
          "Um lugar tranquilo para descansar antes de voltar para essa jornada perigosa, que precisará tirar todos da zona de conforto.",
        riskFactor: -1,
        nextStep: "choice_13",
      },
    ],
    name: "Yoali",
    text: "Devemos parar para descansar ou seguiremos viagem?",
  },
  choice_12: {
    texts: [
      "Andam ao longo da noite.",
      "Resolvem parar para descansar dentro de uma caverna pequena por algumas horas antes de seguir viagem",
    ],
    riskFactor: -1,
    nextStep: "endDay",
    endDayType: "initialStep_A",
  },
  choice_13: {
    texts: [
      "A família decide descansar, recursos poderão ser geridos a partir daqui.",
    ],
    nextStep: "endDay",
    endDayType: "initialStep_B",
  },
  choice_4: {
    texts: [
      "Desbravam um atalho menos conhecido a fim de chegar ainda mais rápido em buscar do pai.",
      "Acabam gastando mais energia pois precisam abrir parte do caminho, que possui mata fechada",
      "Ao chegarem na vila dão de caras com homens brancos, completamente diferentes do que eles conheciam, e claramente são hostis, já que não parecem felizes em ver a família ali.",
      "Todos veem apenas uma escolha: fugir.",
    ],
    riskFactor: 1,
    nextStep: "choice_10",
  },
  endDay: {
    endDay: true,
  },
  endGame: {
    endGame: true,
  },
};
