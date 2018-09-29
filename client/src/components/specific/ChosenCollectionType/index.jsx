import React from 'react';

import Collection from '@/components/specific/Collection';

const ChosenCollectionType = props => {
  const { teas } = props;

  return (
    <div>
      <Collection teas={teas} />
    </div>
  );
};

export default ChosenCollectionType;
