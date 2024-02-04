/* eslint-disable */

import React from "react";
import { useState } from "react";

const Game = () => {
  const [squares, setSquares] = useState([
    "X",
    "O",
    "X",
    "O",
    "X",
    "O",
    "X",
    "O",
    "X",
  ]);

  function renderSquare(i) {
    return <button>{squares[i]}</button>;
  }
  return (
    <>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
};

export default Game;
