import React from 'react';

import styles from './index.scss';

const CardsGrid = (props) => {
  const { children } = props;
  return <div className={styles.grid}>{children}</div>;
};

export default CardsGrid;
