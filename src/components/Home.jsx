import React, { useState, useEffect } from "react";
import Question from "./Question";
import Result from "./Result";

function Home() {
  const [mode, setMode] = useState("Dark");
  const [toggle, setToggle] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const handleClick = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (theme === true) {
      document.body.classList.add("dark");
      setMode("Light");
    } else {
      document.body.classList.remove("dark");
      setMode("Dark");
    }
  }, [theme]);

  const style = {
    color: toggle ? "red" : mode === "Light" ? "white" : "black",
  };

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  const switchResult = () => {
    setShowResult(true);
  };

  const transferScore = (score) => {
    setFinalScore(score);
    console.log(finalScore);
  };
  const playagain =()=>{
      setShowResult(false)
  }

  return (
    <div className="main">

      {showResult ? (
        <Result 
          score={finalScore} 
          theme={style.color} 
          playagain={playagain}
        />
      ) : (
        <Question
          style={style}
          switchResult={switchResult}
          transferScore={transferScore}
          handleToggle={handleToggle}
          handleClick={handleClick}
          mode={mode}
          
        />
      )}
      {/* <hr className="line" />
      <div>
        <button className="btn-2" onClick={handleToggle}>
          Highlite
        </button>
        <button
          className="theme"
          onClick={() => {
            handleClick();
          }}
        >
          {mode}
        </button>
      </div>
      <br /> */}
    </div>
  );
}

export default Home;
