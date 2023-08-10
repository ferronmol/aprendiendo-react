import { useState } from "react"
import  conffeti  from "canvas-confetti"


import { Square }  from "./components/Square.jsx"
import {  TURNS } from "./constants.js"
import { checkWinnerFrom , checkEndGame} from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"



function App() {
  console.log('render')

  const  [board, setBoard]  = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage 
          ? JSON.parse(boardFromStorage)
          : Array(9).fill(null)
  })  
  // console.log(board);
  const [turn, setTurn] = useState(TURNS.X)
  //para hacer ganador
  const [winner, setWinner] = useState(null)
//ganara el que haga combinacion ganadora


//reseteo poniendo los estados iniciales
const resetGame = () => {
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)
}



  const updateBoard =  (index) => {
    //para que no actualize si ya tiene algo o tenemos ganador
    if (board[index] || winner) return
    //actualizar el tablero
    const newBoard =[...board]  //hago una copia spread y rest operator
    newBoard [index]= turn
    setBoard(newBoard) 
    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //guardar la partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', turn)
    //revisamos si tenemos ganador
    const newWinner =  checkWinnerFrom(newBoard)
    if (newWinner) {
      
      setWinner(newWinner) //asincrono
      conffeti()
     // alert(`El ganador es: ${newWinner}`)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board">
       <h1>JUEGO DE LAS TRES EN RAYA</h1>
       <button onClick={resetGame}>Volver a empezar</button> 
       <section className="game">
         {
           board.map((square, index) => {
             return (
               <Square 
                 key={index}
                 index={index}
                 updateBoard={updateBoard}
                >
                 {square}
               </Square>
             )
           })
         }
       </section>
       <section className="turn">
         <Square isSelected={turn===TURNS.X}> 
           {TURNS.X}
         </Square>
         <Square isSelected={turn===TURNS.O}> 
          {TURNS.O}
         </Square>
       </section>  

       <WinnerModal resetGame={resetGame} winner={winner} />  
   </main>
  )
}
export default App
