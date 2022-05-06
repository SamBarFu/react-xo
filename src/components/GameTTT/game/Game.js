import React, { useEffect, useState } from "react";
import calculateWinner from "../../../utils/calculate";

import Board from "../board/Board";
import Players from "../players/Players";
import Equis from "../PlayerTokens/Equis";
import Cero from "../PlayerTokens/Cero";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

import StyledGame from "./StyledGame";

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [historyWinner, setHistoryWinner] = useState([]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIxnext] = useState(true);
  const [players, setPlayers] = useState([
    {
      icon: <Equis />,
      name: "x",
      wins: 0,
      currentTurn: xIsNext ?? true,
    },
    {
      icon: <Cero />,
      name: "o",
      wins: 0,
      currentTurn: !xIsNext ?? true,
    },
  ]);

  const historyGame = history;
  const current = historyGame[stepNumber];
  const winner = calculateWinner(current.squares);

  const setCurrentTurn = () => {
    if (winner) return;
    setPlayers([
      { ...players[0], currentTurn: xIsNext ?? true },
      { ...players[1], currentTurn: !xIsNext ?? false },
    ]);
  };

  const setCountWinner = () => {
    if (!winner) return;
    setHistoryWinner([
      ...historyWinner,
      {
        stripe: winner.stripe ?? false,
        win: winner.win,
        lastMove: current.squares.slice(),
      },
    ]);
    setPlayers([
      {
        ...players[0],
        wins: winner.win === "X" ? (players[0].wins += 1) : players[0].wins,
      },
      {
        ...players[1],
        wins: winner.win === "O" ? (players[1].wins += 1) : players[1].wins,
      },
    ]);
  };

  useEffect(() => {
    setCurrentTurn();
  }, [xIsNext]);

  useEffect(() => {
    setCountWinner();
  }, [history]);

  /* if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }  */

  const handleClick = (i) => {
    const historyGame = history.slice(0, stepNumber + 1);
    const current = historyGame[historyGame.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = xIsNext ? "X" : "O";

    setHistory(
      history.concat([
        {
          squares: squares,
        },
      ])
    );
    setStepNumber(history.length);
    setXIxnext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIxnext(step % 2 === 0);
  };

  /* const moves = historyGame.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        
        return (
            <li key="{move}">
            <button onClick={()=>jumpTo(move)} >{desc}</button>
            </li>
        );
    }); */

  const getDrawsCount = () => {
    return historyWinner.filter((history) => history.win === "draw").length;
  };

  return (
    <>
      <Header onClick={() => jumpTo(0)} />
      <StyledGame>
        <React.StrictMode>
          dasdsaasd
          <Players playersInfo={players} draws={getDrawsCount()} />
          <Board
            squares={current.squares}
            winner={winner}
            onClick={(i) => handleClick(i)}
          />
        </React.StrictMode>
      </StyledGame>
      <Footer />
    </>
  );
};

export default Game;
