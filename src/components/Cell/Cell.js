import './cell.css';

const Cell = ({handleClick, value}) => {
  
  return (
    <>
      <div 
        className={value ? 'cell ' + value : 'cell'}
        onClick={handleClick}></div>
    </>
  )
};

export default Cell;