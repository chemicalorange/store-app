import React from 'react';
import styles from './Modal.module.css';
import ModalImage from '../assets/images/tshirt-photo.svg';
import CloseIcon from '../assets/images/close-icon.svg';
import Button from '../components/Button';


function Modal({ isOpen, toggleModal }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.closeBlock} onClick={toggleModal}>
          <img src={CloseIcon} alt="Закрыть" />
        </div>
        <div className={styles.modalImage}>
          <img src={ModalImage} alt="Модальное фото" className={styles.img} />
        </div>
        <div className={styles.modalTextBlock}>
          <p className={styles.modalName}>DREW HOUSE Yellow T-Shirt</p>
          <p className={styles.modalText}>Single knit yarns woven to create a mid-weight yet soft fabric with a nice drape. an everyday staple for a daily drew fit. We custom wove it to make sure that we love it, and so you’ll probably love it too.</p>
          <div className={styles.modalPriceBlock}>
            <Button className={styles.button} onClick={toggleModal}>add to card</Button>
            <p className={styles.cardPrice}>$40.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
