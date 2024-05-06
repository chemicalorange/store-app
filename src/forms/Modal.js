import React from 'react';
import './Modal.css';
import ModalImage from '../assets/images/tshirt-photo.svg';
import CloseIcon from '../assets/images/close-icon.svg';

function Modal({ isOpen, toggleModal }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modalContent">
        <div className="closeBlock" onClick={toggleModal}>
          <img src={CloseIcon} alt="Закрыть" />
        </div>
        <div className="modalImage">
          <img src={ModalImage} alt="Модальное фото" />
        </div>
        <div className="modalTextBlock">
          <p className="modalName">DREW HOUSE Yellow T-Shirt</p>
          <p className='modalText'>Single knit yarns woven to create a mid-weight yet soft fabric with a nice drape. An everyday staple for a daily drew fit. We custom wove it to make sure that we love it, and so you’ll probably love it too.</p>
          <div className="modalPriceBlock">
            <button onClick={toggleModal}>add to card</button>
            <p className="cardPrice">$40.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
