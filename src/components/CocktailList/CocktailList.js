import React from 'react';
import CocktailCard from '../CocktailCard/CocktailCard';
import { cocktails } from '../../data/cocktails';
import styles from './style.module.css';

const CocktailList = () => {
  return (
    <div className={styles.cocktailList}>
      {cocktails.map((item, index) => (
        <CocktailCard
          key={index}
          src={item.src}
          name={item.name}
          composition={item.composition}
          receipt={item.receipt}
        />
      ))}
    </div>
  );
};

export default CocktailList;
