/* eslint-disable */

import React from "react";

import { useState } from "react";

const Board = ({ squares, onclick }) => {
  //   const [squares, setSquares] = useState([
  //     "X",
  //     "O",
  //     "X",
  //     "",
  //     "X",
  //     "O",
  //     "X",
  //     "O",
  //     "X",
  //   ]);

  function renderSquare(i) {
    return <button onClick={() => onclick(i)}>{squares[i]}</button>;
  }
  return (
    <>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
};

export default Board;
