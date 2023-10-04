import React from 'react';
import GlassCard from '../GlassCard/GlassCard';
import { glasses } from '../../data/glasses';
import styles from './style.module.css';

const GlassList = () => {
  return (
    <div className={styles.glassList}>
      {glasses.map((item, index) => (
        <GlassCard key={index} src={item.src} name={item.name} />
      ))}
    </div>
  );
};

export default GlassList;
