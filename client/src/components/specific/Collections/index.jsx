import React from 'react';

import CollectionTypeSelect from '@/containers/specific/CollectionTypeSelect';
import ChoosedCollectionType from '@/containers/specific/ChoosedCollectionType';
import SortsFilter from '@/containers/specific/SortsFilter';
import styles from './index.module.scss';

const Collections = () => (
  <div className={styles.collections}>
    <CollectionTypeSelect />
    <SortsFilter />
    <ChoosedCollectionType />
  </div>
);
export default Collections;
