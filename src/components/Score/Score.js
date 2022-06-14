import './score.css';

const Score = ({ enterName, firstPlayer, secondPlayer, score, draw }) => {
  return (
    <div className="score">
      <p>Score</p>
      <p>{!enterName ? firstPlayer + ' - x' : 'Player 1'}: {score.firstPlayer} </p>
      <p>{!enterName ? secondPlayer + ' - o' : 'Player 2'}: {score.secondPlayer}</p>
      <p className={draw ? 'draw show' : 'draw'}>Draw !</p>
    </div>
  )
};

export default Score;