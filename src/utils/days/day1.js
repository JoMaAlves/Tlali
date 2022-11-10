export const day1 = {
  InitialStep: {
    curtain: true,
    texts: [
      "Em algum lugar do que hoje chamamos de América do Sul",
      "Sua família é muito importante e influente na região, já que dominam a manufatura de ferramentas, mantendo uma boa relação com a vila vizinha, que fornece matéria-prima crucial para ferramentas leves e eficazes",
      "Ytzcoatl, patriarca da família, resolveu fazer uma viagem de rotina, onde iria pegar mais madeira na vila vizinha para suprir a necessidade do seu povo, que teve uma colheita abundante e precisava de ferramentas o mais rápido possível",
      "Porém, os dias passaram e Ytzcoatl ainda não retornou, a pressão é grande, já que a colheita está no momento ideal para ser feita.",
      "O Cacique conversa com Yoali Ehecalt sobre suas suspeitas de que talvez seu marido esteja em perigo. Alinhando essa suspeita com sonhos recorrentes de Toci, mãe de Ytzcoatl, a família toma uma decisão que vai mudar para sempre suas vidas",
      "Eles decidem ir atrás do pai",
      "Rapidamente vocês decidem o que levar para a jornada, prevista para 3 dias.",
      "Será uma jornada intensa, onde o risco é uma mecânica principal, aumentando e diminuindo de acordo com suas escolhas. Fique sempre atento ao medidor de risco presente na tela, quanto maior o risco, mais as chances de algo dar errado.",
      "Ao fim do dia, você poderá gerenciar recursos e distribuir para os membros da família, de acorco com a necessidade deles.",
      "Algumas escolhas iniciais precisarão ser tomadas e já afetarão o medidor de risco, escolha sabiamente. Além disso, momentos de descanso implicam no consumo de mantimentos.",
    ],
    nextStep: "choice_1",
  },
  choice_1: {
    choices: [
      {
        value: 3,
        text: "Máxima quantidade de mantimentos",
      },
      {
        value: 2,
        text: "Média quantidade de mantimentos",
      },
      {
        value: 1,
        text: "Minima quantidade de mantimentos",
        riskFactor: 1,
      },
    ],
    explanationText:
      "Os mantimentos são uma fonte de energia, mas influenciam no peso inicial de sua jornada",
    name: "Yoali",
    nextStep: "choice_2",
    text: "Qual a quantidade de mantimentos que levaremos?",
  },
  choice_2: {
    choices: [
      {
        value: "axe",
        text: "Um machado",
      },
      {
        value: "bow",
        text: "Um arco e flecha",
      },
      {
        value: "",
        text: "Nada, vamos levar mais comida",
        riskFactor: 1,
      },
    ],
    explanationText:
      "Por existirem poucas ferramentas na tribo, rumores de ameaças humanas vindo de outras tribos, você precisa escolher apenas uma ferramenta para levar.",
    name: "Yoali",
    text: "Levaremos alguma ferramenta?",
    nextStep: "endDay",
  },
  endDay: {
    endDay: true,
  },
};
