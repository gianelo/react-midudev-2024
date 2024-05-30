import { boardType } from "../../utils/types";

export const saveGameStorage = ({
  newBoard,
  newTurn,
}: {
  newBoard: boardType;
  newTurn: string;
}) => {
  window.localStorage.setItem("board", JSON.stringify(newBoard));
  window.localStorage.setItem("turn", newTurn);
};

export const resetGameStorage = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};
