import React from 'react';

// import CollectionTypeSelect from '@/containers//CollectionTypeSelect';
import ChosenCollectionType from '@/containers//ChosenCollectionType';
// import SortsFilter from '@/containers//SortsFilter';

import styles from './index.module.scss';

const Collections = () => (
  <div className={styles.collections}>
    {/* <CollectionTypeSelect />
    <SortsFilter /> */}
    <ChosenCollectionType />
  </div>
);
export default Collections;
