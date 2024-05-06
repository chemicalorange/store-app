import React from 'react';
import styles from './Card.module.css';

function Card({ image, name, price, isSelected, onClick }) {
    const handleButtonClick = (e) => {
        e.stopPropagation();
        onClick();
      };

  return (
    <div className={isSelected ? `${styles.card} ${styles.highlighted}` : styles.card}>
      <div className={styles.cardImageContainer}>
        <img src={image} alt="Карточка товара" className={styles.img} />
      </div>
      <div className={styles.cardTextBlock}>
        <p className={styles.cardName}>{name}</p>
        <p className={styles.cardPrice}>${price}</p>
        <button className={styles.button} onClick={handleButtonClick}>add to card</button>
      </div>
    </div>
  );
}

export default Card;
