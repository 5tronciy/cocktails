import React from 'react';
import CocktailCard from '../CocktailCard/CocktailCard';
import { cocktails } from '../../data/cocktails';
import styles from './style.module.css';

const CocktailList = () => {
  return (
    <div className={styles.cocktailList}>
      {cocktails.map((_, index) => (
        <CocktailCard key={index} />
      ))}
    </div>
  );
};

export default CocktailList;
