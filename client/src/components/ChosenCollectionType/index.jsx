import React from 'react';

import Collection from '@/components/Collection';

const ChosenCollectionType = props => {
  const { teas } = props;

  return (
    <div>
      <Collection teas={teas} />
    </div>
  );
};

export default ChosenCollectionType;
