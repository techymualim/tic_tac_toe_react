/* eslint-disable */

import React from "react";
import { useState } from "react";

import Board from "./Board";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);
  const nextValue = calculateNextValue(squares);
  const status = calculateStatus(squares, winner, nextValue);

  function selectSquare(i) {
    if (winner || squares[i]) {
      return;
    }
    let sqCpy = [...squares];
    sqCpy[i] = nextValue;
    setSquares(sqCpy);
  }

  function calculateStatus(squares, winner, nextValue) {
    return squares.filter(Boolean).length == 9
      ? "Draw"
      : winner
      ? `Winner is ${winner}`
      : `Next Player is ${nextValue}`;
  }
  function calculateNextValue(squares) {
    return squares.filter(Boolean).length % 2 == 0 ? "X" : "O";
  }
  function calculateWinner(squares) {
    const winners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winners.length; i++) {
      let [a, b, c] = winners[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <>
      {status}
      <Board squares={squares} onclick={selectSquare} />
    </>
  );
};

export default Game;
