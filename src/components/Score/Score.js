import './score.css';

const Score = ({ enterName, firstPlayer, secondPlayer }) => {
  return (
    <div className="score">
      <p>Score</p>
      <p>{!enterName ? firstPlayer : 'Player 1'}: </p>
      <p>{!enterName ? secondPlayer : 'Player 2'}: </p>
    </div>
  )
};

export default Score;