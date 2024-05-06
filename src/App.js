import React, { useState } from 'react';
import './App.css';
import Card from './components/Card'; 
import Modal from './forms/Modal';
import CardImage from './assets/images/cap-photo.svg';


function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (index) => {
    setSelectedCard(index);
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
      setSelectedCard(null);
    }
  };


  return (
    <div className="container">
      <div className="cardContainer">
      {[...Array(20)].map((_, index) => (
          <Card
            key={index}
            image={CardImage}
            name="drew house cap"
            price="40.00"
            isSelected={selectedCard === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
        
        <Modal isOpen={isModalOpen} toggleModal={toggleModal} />
      </div>
    </div>

  );
}

export default App;
