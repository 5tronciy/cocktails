import React from 'react';
import styles from './style.module.css';

const GlassCard = ({ src, name }) => {
  return (
    <div className={styles.glassCard}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={src} alt={name} />
      </div>
      <div className={styles.title}>{name}</div>
    </div>
  );
};

export default GlassCard;
