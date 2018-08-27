import React from 'react';

import Collection from '@/components/specific/Collection';

const ChoosedCollectionType = (props) => {
  const { data, isWaiting, isError } = props;

  if (isWaiting) {
    return <div> wait </div>;
  }

  if (isError) {
    return <div> error </div>;
  }

  return (
    <div>
      <Collection data={data} />
    </div>
  );
};

export default ChoosedCollectionType;
