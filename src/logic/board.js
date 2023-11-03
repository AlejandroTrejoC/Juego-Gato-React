import { COMBOS_GANADORES } from "../constants";

export const revisaGanador = (boardRevisar) => {
  for (const combo of COMBOS_GANADORES) {
    const [a, b, c] = combo;
    if (
      boardRevisar[a] &&
      boardRevisar[a] === boardRevisar[b] &&
      boardRevisar[a] === boardRevisar[c]
    ) {
      return boardRevisar[a];
    }
  }
  return null;
};

export const empateGame = (nuevoBoard) => {
  return nuevoBoard.every((square) => square !== null);
};
