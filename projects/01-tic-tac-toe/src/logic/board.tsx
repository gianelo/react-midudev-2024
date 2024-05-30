import { boardType } from "../utils/types";
import { COMBO_WINNIERS } from "../utils/constants";

export const checkWinner = (checkBoard: boardType) => {
  for (const combo of COMBO_WINNIERS) {
    const [a, b, c] = combo;
    if (
      checkBoard[a] &&
      checkBoard[a] === checkBoard[b] &&
      checkBoard[a] === checkBoard[c]
    ) {
      return checkBoard[a];
    }
  }
  return null;
};

export const checkEndGame = (newBoard: boardType) => {
  return newBoard.every((square) => square !== null);
};
