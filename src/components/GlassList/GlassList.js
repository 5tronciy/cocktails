import React from 'react';
import GlassCard from '../GlassCard/GlassCard';
import { glasses } from '../../data/glasses';

const GlassList = () => {
  return (
    <>
      {glasses.map((_, index) => (
        <GlassCard key={index} />
      ))}
    </>
  );
};

export default GlassList;
