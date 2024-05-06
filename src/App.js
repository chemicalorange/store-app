import React, { useState } from 'react';
import './App.css';
import Modal from './forms/Modal';
import CardImage from './assets/images/cap-photo.svg';


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

        <Modal isOpen={isModalOpen} toggleModal={toggleModal} />

      </div>
    </div>

  );
}

export default App;
