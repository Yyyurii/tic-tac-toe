import './board.css';

import Cell from '../Cell/Cell';

const Board = ({cells, handleClick, xTurn}) => {
  return (
    <div className={xTurn ? "board x" : "board circle"} id="board">
      {
        cells.map((cell, i) => (
          <Cell key={i} value={cell} handleClick={() => handleClick(i)} />
        ))
      }
    </div>
  )
};

export default Board;