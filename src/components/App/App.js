import { useState, useEffect } from 'react';

import Board from '../Board/Board';
import Score from '../Score/Score';
import Popup from '../Popup/Popup';

const App = () => {

  const [cells, setCells] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [draw, setDraw] = useState(false);
  const [firstPlayer, setFirstPlayer] = useState('');
  const [secondPlayer, setSecondPlayer] = useState('');
  const [showPopup, setShowPopup] = useState(true);
  

  const winner = calculateWinner(cells);

  useEffect(() => {
    function isDraw() {
      const draw = cells.filter(cell => cell === null);

      if (draw.length <= 0) {
        setDraw(true);
      }
    };

    isDraw();

  }, [cells]);

  const enterFirstPlayer = (e) => setFirstPlayer(e.target.value);
  const enterSecondPlayer = (e) => setSecondPlayer(e.target.value);

  const handleClick = (i) => {
    const cellsCopy = [...cells];

    if (winner || cellsCopy[i]) return;

    cellsCopy[i] = xTurn ? 'x' : 'circle';

    setCells(cellsCopy);
    setXTurn(!xTurn);
  }

  const isShowPopup = () => {
    setShowPopup(false)
  }

  function endGame() {
    setTimeout(() => {
      setCells(Array(9).fill(null));
      setDraw(false);
    }, 5000);

    if (draw) {
      return 'Draw!'
    } else {
      return `${xTurn ? "O's" : "X's"} Wins!`
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <>
      <Board
        cells={cells}
        handleClick={handleClick}
        xTurn={xTurn} />
      <Score
        firstPlayer={firstPlayer}
        secondPlayer={secondPlayer}
        enterName={showPopup} />
      {winner || draw ? endGame() : null}
      <Popup
        isShowPopup={isShowPopup}
        showPopup={showPopup}
        firstPlayer={firstPlayer}
        secondPlayer={secondPlayer}
        enterFirstPlayer={enterFirstPlayer}
        enterSecondPlayer={enterSecondPlayer} />
    </>
  )
}

export default App;