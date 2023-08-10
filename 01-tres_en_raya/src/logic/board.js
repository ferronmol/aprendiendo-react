import { WINNER_COMBOS } from "../constants"

//componente logico para chequear ganador y finalizarlo
export const checkWinnerFrom = (boardToCheck) => {

    for (const combo of WINNER_COMBOS) {
     const [a,b,c] = combo
     if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
     )  {
        return boardToCheck[a]
     }
    }  //si no hay ganador
    return null
 }
 export const checkEndGame = (newBoard) => {
    //si todos los huecos estan completos empate
    return newBoard.every((square) => square !==null)
 }
 