import React from 'react';
import GlassCard from '../GlassCard/GlassCard';
import { glasses } from '../../data/glasses';
import styles from './style.module.css';

const GlassList = () => {
  return (
    <div className={styles.glassList}>
      {glasses.map((_, index) => (
        <GlassCard key={index} />
      ))}
    </div>
  );
};

export default GlassList;
