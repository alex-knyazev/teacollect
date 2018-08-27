import React from 'react';

import CardsGrid from '@/components/specific/CardsGrid';
import Card from '@/components/specific/Card';

import styles from './index.scss';

const Collection = (props) => {
  const { data } = props;
  const cards = data.map((el) => <Card key={el.id} data={el} />);
  return (
    <div className={styles.collection}>
      <CardsGrid>{cards}</CardsGrid>
    </div>
  );
};

export default Collection;
