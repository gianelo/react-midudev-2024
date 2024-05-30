import { useState } from "react";
import confetti from "canvas-confetti";
import { TURNS } from "./utils/constants";
import { checkEndGame, checkWinner } from "./logic/board";
import { boardType } from "./utils/types";
import WinnerModal from "./components/WinnerModal";
import Square from "./components/Square";
import { resetGameStorage, saveGameStorage } from "./logic/storage";

function App() {
  const [board, setBoard] = useState<boardType>(() => {
    const boradFromStorage = window.localStorage.getItem("board");
    return boradFromStorage
      ? JSON.parse(boradFromStorage)
      : Array(9).fill(null);
  });

  const [turn, setTurn] = useState<string>(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });

  const [winner, setWinner] = useState<string | boolean | null>(null);

  const updateBoard = (index: number) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    saveGameStorage({ newBoard, newTurn });

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Start again</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
