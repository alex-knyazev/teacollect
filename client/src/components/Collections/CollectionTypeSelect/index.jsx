import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function CollectionTypeSelect(props) {
  const { chosenCollectionType, handleChangeCollectionType } = props;
  return (
    <div>
      <Tabs value={chosenCollectionType} onChange={handleChangeCollectionType}>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </div>
  );
}
