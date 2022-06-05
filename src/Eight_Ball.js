import React from "react";
import { useState } from "react";
import "./Eight_Ball.css";
import "./Eight_Ball_DB";
import Eight_Ball_DB from "./Eight_Ball_DB";

const Eight_Ball = () => {
  const [response, changeResponse] = useState("Think of a Question");
  const [color, changeColor] = useState("black");
  const ClickBall = () => {
    let idx = Eight_Ball_DB[Math.floor(Math.random() * (20 - 0 + 1))];
    let msg = idx.msg;
    let col = idx.color;

    changeResponse(msg);
    changeColor(col);
  };

  return (
    <>
      <div className={`eight-ball-response-div ${color}`} onClick={ClickBall}>
        <p className="eight-ball-response-text">{response}</p>
      </div>
    </>
  );
};

export default Eight_Ball;
