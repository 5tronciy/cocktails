import React from 'react';
import CocktailCard from '../CocktailCard/CocktailCard';
import { cocktails } from '../../data/cocktails';

const CocktailList = () => {
  return (
    <>
      {cocktails.map((_, index) => (
        <CocktailCard key={index} />
      ))}
    </>
  );
};

export default CocktailList;
