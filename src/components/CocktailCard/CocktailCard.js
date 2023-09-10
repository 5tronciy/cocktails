import React from 'react';
import styles from './style.module.css';
import { productIcon } from '../../data/products';

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
            <div className={styles.ingredientIconWrapper}>
              <img
                className={styles.ingredientIcon}
                src={productIcon[item.name]}
                alt=""
              />
            </div>
            <div className={styles.ingredientCount}>{item.volume}</div>
            <div className={styles.ingredientName}>{item.name}</div>
          </div>
        ))}
      </div>
      <div className={styles.receipt}>{receipt}</div>
    </div>
  );
};

export default CocktailCard;
