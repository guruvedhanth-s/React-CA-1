import React, { useState, useEffect } from "react";

function Result({ score, playagain }) {
  const [Mode, setMode] = useState("Dark");
  const [colors, setColor] = useState("black");
  const handleClick = () => {
    setTheme((prevtheme) => !prevtheme);
  };
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (theme == true) {
      document.body.classList.add("dark");
      setMode("Light");
      setColor("white");
    } else {
      document.body.classList.remove("dark");
      setMode("Dark");
      setColor("black");
    }
  }, [theme]);

  return (
    <div className="container-2">
      <br />
      <hr className="line" />
      <h1 style={{ color: colors }}>Final reuslts..</h1>
      <div className="scorecard" style={{ color: colors }}>
        ( {score} out of 5 = {(score / 5) * 100}% )
      </div> 
      <div>
        <button className="play" onClick={() => playagain()}>
          Play Again
        </button>
        <button className="theme" onClick={handleClick}>
          {Mode}
        </button>
      </div>
      <hr className="line" />
      <br />
    </div>
  );
}

export default Result;
