import React from 'react';

import Tab from '@/components/common/Tab';

import styles from './index.scss';

const CollectionTypeSelect = (props) => {
  const { types, currentCollectionType, changeCollectionTypeAC } = props;
  const tabs = types.map(type => (
    <Tab
      key={type}
      text={type}
      isChosen={currentCollectionType === type}
      onClick={() => changeCollectionTypeAC(type)}
    />
  ));
  return <div className={styles.tabsContainer}>{tabs}</div>;
};

export default CollectionTypeSelect;
