import React from 'react';
import Square from './Square'

export default ({squares, onClick})=>{


    return (<>
        <div className="board">
            {squares.map((square,i)=>{

               return <Square 
                key={i} 
                value={square} 
                onClick={()=>onClick(i)}></Square>
            })}
        </div>
    </>)
}