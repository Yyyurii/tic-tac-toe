import './board.css';

import Cell from '../Cell/Cell';

const Board = () => {
  return (
    <div className="board x" id="board">
      <Cell />
    </div>
  )
};

export default Board;