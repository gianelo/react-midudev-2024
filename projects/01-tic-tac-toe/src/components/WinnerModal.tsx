import Square from "./Square";

function WinnerModal({
  winner,
  resetGame,
}: {
  winner: string | boolean | null;
  resetGame: () => void;
}) {
  if (winner === null) return null;

  const winnerText =
    winner === false ? "It's a draw" : `Player ${winner} wins!`;

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={resetGame}>Start again</button>
        </footer>
      </div>
    </section>
  );
}

export default WinnerModal;
