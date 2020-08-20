import React, {useState} from 'react';
import {calculateWinner} from '../helper.js'
import Board from "./Board"

export default()=>{
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(history[stepNumber])
    const x0 = xIsNext ? "X" : "O"

    const handleClick = (i) =>{
        const historyPoint = history.slice(0, stepNumber+1)
        // const current = historyPoint[stepNumber]
        const squares = [...historyPoint[stepNumber]]
        console.log(squares[i])
        if(winner || squares[i]) return
        squares[i] = x0
        setHistory([...historyPoint, squares])
        setStepNumber(historyPoint.length)
        setXIsNext(!xIsNext)
    }

    const jumpTo = (step) =>{
        if(step === 0)
        setHistory([Array(9).fill(null)])
        setStepNumber(step)
        setXIsNext(step % 2 === 0)
    }

    const renderMoves = () =>{
        return history.map((_step, move)=>{
            const destination = move ? "Go to move #" + move : "Go to start"
        
            return <li key={move}>
                <button onClick={()=>jumpTo(move)}>{destination}</button>
            </li>
        })
    }

    return <>
        <h1>React tic tac toe with hooks</h1>
        <Board squares = {history[stepNumber]} onClick = {handleClick}></Board>
        <div className="info-wrapper">
            <div>
                 <h3>History</h3>
                {renderMoves()}
            </div>
        <h3>
            {winner ? "Winner " + winner : "Next Player " + x0}
        </h3> 
        </div>
    </>
}