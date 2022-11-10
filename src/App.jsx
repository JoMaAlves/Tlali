import { useEffect, useState } from "react";
import "./App.scss";

import Background from "./components/Background";

import MainPage from "./screens/MainPage";
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

  const handleEndGame = () => {
    setDay(0);
  };

  const handleStartGame = () => {
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
            onRiskFactor={setRiskFactor}
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
            onRiskFactor={setRiskFactor}
          />
        );
        break;
      case 4:
        setDayPage(
          <Day4
            endDay={handleEndDay}
            endGame={handleEndGame}
            riskFactor={riskFactor}
            onRiskFactor={setRiskFactor}
          />
        );
        break;
      case 5:
        setDayPage(
          <Day5
            endDay={handleEndDay}
            endGame={handleEndGame}
            riskFactor={riskFactor}
            onRiskFactor={setRiskFactor}
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
          {dayPage}
          {endDay && <DayEndPage day={day} onContinue={handleDayManagement} />}
        </div>
      </Background>
    </div>
  );
}

export default App;
