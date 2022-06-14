import './popup.css';

import { useState, useEffect } from 'react';

const Popup = (props) => {

  const { firstPlayer, secondPlayer, enterFirstPlayer, enterSecondPlayer, isShowPopup, showPopup } = props;

  const [disabledBtn, setDisabledBtn] = useState(true);

  useEffect(() => {
    function isDisabled() {
      if (firstPlayer && secondPlayer !== '') {
        setDisabledBtn(false);
      }
    }

    isDisabled();
  }, [firstPlayer, secondPlayer]);

  return (
    <div className={showPopup ? "popup show" : "popup"}>
      <div className="popup__content">
        <div className="popup__form">
          <form className="form" action="#">
            <h2>Enter player name</h2>
            <input
              required
              className="form__input"
              name="first-name"
              type="text"
              placeholder="Player 1"
              onChange={(e) => enterFirstPlayer(e)} />
            <input
              required
              className="form__input"
              name="second-name"
              type="text"
              placeholder="Player 2"
              onChange={(e) => enterSecondPlayer(e)} />
            <button
              disabled={disabledBtn ? true : false}
              className="form__start-btn"
              onClick={(e) => {
                e.preventDefault();
                isShowPopup()
              }}>Start game</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Popup;