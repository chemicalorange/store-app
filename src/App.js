import React, { useState } from 'react';
import './App.css';
import CardImage from './assets/images/cap-photo.svg';
import ModalImage from './assets/images/tshirt-photo.svg'

function App() {
  const [highlighted, setHighlighted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleHighlight = () => {
    setHighlighted(!highlighted);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <div className="container">
      <div className="cardContainer">
        <div className={`card ${highlighted ? 'highlighted' : ''}`} >
          <div className="cardImageContainer">
            <img src={CardImage} alt="Карточка товара" />
          </div>
          <div className="cardTextBlock">
            <p className="cardName">drew house cap</p>
            <p className="cardPrice">$40.00</p>
            <button onClick={toggleModal}>add to card</button>
          </div>
        </div>

        <div className={`card ${highlighted ? 'highlighted' : ''}`} >
          <div className="cardImageContainer">
            <img src={CardImage} alt="Карточка товара" />
          </div>
          <div className="cardTextBlock">
            <p className="cardName">drew house cap</p>
            <p className="cardPrice">$40.00</p>
            <button onClick={toggleModal}>add to card</button>
          </div>
        </div>

        {isModalOpen && (
        <div className="modal">
          <div className="modalContent">
            <div className="modalImage">
              <img src={ModalImage} alt="Модальное фото" />
            </div>
            <div className="modalTextBlock">
              <p className="modalName">DREW HOUSE Yellow T-Shirt</p>
              <p className='modalText'>Single knit yarns woven to create a mid-weight yet soft fabric with a nice drape. an everyday staple for a daily drew fit. We custom wove it to make sure that we love it, and so you’ll probably love it too.</p>
              <button onClick={() => { toggleModal();}}>add to card</button>
              <p className="cardPrice">$40.00</p>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>

  );
}

export default App;
