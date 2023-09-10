import React from 'react';
import styles from './style.module.css';

const CocktailCard = ({ src, name, composition, receipt }) => {
  return (
    <div className={styles.cocktailCard}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={src} alt={name} />
      </div>
      <div className={styles.title}>{name}</div>
      <div className={styles.ingredients}>
        {composition.map((item, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.ingredientName}>{item.name}</div>
            <div className={styles.ingredientCount}>{item.volume}</div>
          </div>
        ))}
      </div>
      <div className={styles.receipt}>{receipt}</div>
    </div>
  );
};

export default CocktailCard;
