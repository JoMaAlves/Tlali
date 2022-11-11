import { useEffect, useState } from "react";
import "./App.scss";

import Background from "./components/Background";
import StatusBar from "./components/StatusBar";

import MainPage from "./screens/MainPage/MainPage";
import Day1 from "./screens/Day1";
import Day2 from "./screens/Day2";
import Day3 from "./screens/Day3";
import Day4 from "./screens/Day4";
import Day5 from "./screens/Day5";
import DayEndPage from "./screens/DayEndPage";

function App() {
  const [day, setDay] = useState(0);
  const [dayPage, setDayPage] = useState(null);

  const [endDay2, setEndDay2] = useState("initialStep_A");

  const [tool, setTool] = useState("");
  const [food, setFood] = useState(0);
  const [health, setHealth] = useState(3);
  const [riskFactor, setRiskFactor] = useState(0);

  const [endDay, setEndDay] = useState(false);

  const restart = () => {
    setTool("");
    setFood(0);
    setHealth(3);
    setRiskFactor(0);
  };

  const handleEndGame = () => {
    setDay(0);
  };

  const handleStartGame = () => {
    restart();
    setDay(1);
  };

  const handleEndDay = () => {
    if (day === 1) {
      handleDayManagement();
      return;
    }

    setEndDay(true);
  };

  const handleDayManagement = () => {
    setDay(day + 1);
    setEndDay(false);
  };

  const handleRiskFactor = (value) => {
    if (riskFactor < 3 && value !== 0) {
      setRiskFactor(value);
    }
  };

  useEffect(() => {
    switch (day) {
      case 1:
        setDayPage(
          <Day1 setTool={setTool} setFood={setFood} endDay={handleEndDay} />
        );
        break;
      case 2:
        setDayPage(
          <Day2
            endDay={handleEndDay}
            endGame={handleEndGame}
            setEndDay2={setEndDay2}
            riskFactor={riskFactor}
            onRiskFactor={handleRiskFactor}
          />
        );
        break;
      case 3:
        setDayPage(
          <Day3
            initialStep={endDay2}
            endDay={handleEndDay}
            endGame={handleEndGame}
            riskFactor={riskFactor}
            onRiskFactor={handleRiskFactor}
          />
        );
        break;
      case 4:
        setDayPage(
          <Day4
            endDay={handleEndDay}
            endGame={handleEndGame}
            riskFactor={riskFactor}
            onRiskFactor={handleRiskFactor}
          />
        );
        break;
      case 5:
        setDayPage(
          <Day5
            endDay={handleEndDay}
            endGame={handleEndGame}
            riskFactor={riskFactor}
            onRiskFactor={handleRiskFactor}
          />
        );
        break;
      default:
        setDayPage(<MainPage onStart={handleStartGame} />);
        break;
    }
  }, [day]);

  return (
    <div className="App">
      <Background day={day}>
        <div className="game-screen">
          {!!day && (
            <div className="status-container">
              <StatusBar
                title="Vitalidade"
                levels={["Bem", "Cansados", "Exautos"]}
                value={health}
              />
              <StatusBar
                title="Fator de Risco"
                levels={["Baixo", "Medio", "Alto"]}
                value={riskFactor}
              />
            </div>
          )}

          {dayPage}
          {endDay && (
            <DayEndPage
              day={day}
              onContinue={handleDayManagement}
              food={food}
              riskFactor={riskFactor}
            />
          )}
        </div>
      </Background>
    </div>
  );
}

export default App;
