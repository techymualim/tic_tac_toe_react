/* eslint-disable */

import React from "react";
import { useState } from "react";

import Board from "./Board";

const Game = () => {
  //   const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentStep, setcurrentStep] = useState(0);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const squares = history[currentStep];
  const winner = calculateWinner(squares);
  const nextValue = calculateNextValue(squares);
  const status = calculateStatus(squares, winner, nextValue);

  const moves = history.map((val, step) => {
    const desc = `Go to step#${step}`;
    const bttnDisabled = step === currentStep;
    return (
      <li key={step}>
        <button disabled={bttnDisabled} onClick={() => setcurrentStep(step)}>
          {desc}
        </button>
      </li>
    );
  });

//   function selectSquare(i) {
//     if (winner || squares[i]) {
//       return;
//     }

//     // let sqCpy = [...squares];
//     // sqCpy[i] = nextValue;
//     // let historyCpy = [...history];
//     // historyCpy.push(sqCpy);

//     // setHistory(historyCpy);

//     let sqCpy = [...squares];
//     sqCpy[i] = nextValue;
//     let historyCpy = history.slice(0, currentStep + 1);
//     setHistory([...historyCpy, squares])
//     setcurrentStep(historyCpy.length)
//   }

function selectSquare(square) {
    if (winner || squares[square]) {
      return
    }

    const newHistory = history.slice(0, currentStep + 1)
    const squaress = [...squares]

    squaress[square] = nextValue
    setHistory([...newHistory, squaress])
    setcurrentStep(newHistory.length)
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
      <ol>{moves}</ol>
      <Board squares={squares} onclick={selectSquare} />
    </>
  );
};

export default Game;
