import { useEffect } from "react";

const WinLine = () => {
  useEffect(() => {
    const allWithClass = Array.from(
      document.getElementsByClassName('cell')
    );
    console.log(allWithClass[2].getBoundingClientRect());
  }, []);

  return (
    null
  )
};

export default WinLine;