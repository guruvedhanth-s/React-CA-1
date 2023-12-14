import React, { useEffect, useState } from "react";
import Data from "./info";
import Options from "./Options";
import "../App.css";

function Question({
  style,
  switchResult,
  transferScore,
  handleToggle,
  handleClick,
  mode,
}) {
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);

  const display = (e) => {
    if (e.target.attributes.iscorrect.value === "true") {
      setScore((prevScore) => prevScore + 1);
    }
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (count === 5) {
      switchResult();
      transferScore(score);
    }
  }, [count]);

  if (count < 5) {
    return (
      <>
        <br />
        <hr className="line" />
        <div className="container">
          <h1 style={{ color: style.color }}>{Data[count].text}</h1>
          <h3 style={{ color: style.color }}>{count + 1} of 5</h3>
          {Data[count].options.map((item, index) => (
            <Options option={item} key={index} func={(e) => display(e)} />
          ))}
        </div>
        <hr className="line" />
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
        <br />
      </>
    );
  }
}

export default Question;
