import { useEffect, useState } from "react";
import "./App.scss";
import Background from "./components/Background";
import Curtain from "./components/Curtain";
import MainContainer from "./components/MainContainer";

function App() {
  const [day, setDay] = useState(1);

  const fetchData = async (day) => {
    setDay(JSON.parse());
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <Background day={day}>
        <div className="game-screen">
          <Curtain />
          {/* <MainContainer /> */}
        </div>
      </Background>
    </div>
  );
}

export default App;
