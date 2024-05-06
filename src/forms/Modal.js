import React from 'react';
import styles from './Modal.module.css';
import ModalImage from '../assets/images/tshirt-photo.svg';
import CloseIcon from '../assets/images/close-icon.svg';
import Button from '../components/Button';


function Modal({ product,isOpen, toggleModal }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.closeBlock} onClick={toggleModal}>
          <img src={CloseIcon} alt="Закрыть" />
        </div>
        <div className={styles.modalImage}>
          <img src={product.image} alt="Модальное фото" className={styles.img} />
        </div>
        <div className={styles.modalTextBlock}>
          <p className={styles.modalName}>{product.title}</p>
          <p className={styles.modalText}>{product.description}</p>
          <div className={styles.modalPriceBlock}>
            <Button className={styles.button} onClick={toggleModal}>add to card</Button>
            <p className={styles.cardPrice}>${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
