import React from 'react';

import CollectionTypeSelect from '@/components/Collections/CollectionTypeSelect';

const CollectionTypeSelectCont = props => {
  const { chosenCollectionType, changeCollectionType } = props;

  return (
    <CollectionTypeSelect
      chosenCollectionType={chosenCollectionType}
      handleChangeCollectionType={changeCollectionType}
    />
  );
};

export default CollectionTypeSelectCont;
