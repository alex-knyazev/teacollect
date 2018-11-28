import React from 'react';

import CollectionTypeSelectCont from '@/containers//CollectionTypeSelect';
import CollectionCont from '@/containers/Collection';
// import SortsFilter from '@/containers//SortsFilter';

import styles from './index.module.scss';

const Collections = () => (
  <div className={styles.collections}>
    <CollectionTypeSelectCont />
    {/* <SortsFilter /> */}
    <CollectionCont />
  </div>
);
export default Collections;
