import React, { useState } from 'react';

import CollectionTypeSelect from '@/components/Collections/CollectionTypeSelect';
import { routesVocabulary } from '@/pages';
import { withRouter } from 'react-router-dom';

const CollectionTypeSelectCont = props => {
  const collectionTypeToRoute = {
    [routesVocabulary.COLLECTIONS_WORLD_PAGE.name]: 'all',
    [routesVocabulary.COLLECTIONS_MY_TRIED_PAGE.name]: 'tried',
    [routesVocabulary.COLLECTIONS_MY_WANT_PAGE.name]: 'want',
  };

  const {
    match: { path },
  } = props;

  const chosenCollectionType = collectionTypeToRoute[path];

  // const [chosenCollectionType, setCollectionType] = useState('all');

  const allCollectionTypes = [
    {
      label: 'Всемирная коллекция',
      value: 'all',
      route: routesVocabulary.COLLECTIONS_WORLD_PAGE.name,
    },
    {
      label: 'Пробовал',
      value: 'tried',
      route: routesVocabulary.COLLECTIONS_MY_TRIED_PAGE.name,
    },
    {
      label: 'Хочу попробовать',
      value: 'want',
      route: routesVocabulary.COLLECTIONS_MY_WANT_PAGE.name,
    },
  ];
  // const changeCollectionType = (event, value) => {
  //   setCollectionType(value);
  // };
  return (
    <CollectionTypeSelect
      allCollectionTypes={allCollectionTypes}
      chosenCollectionType={chosenCollectionType}
      // handleChangeCollectionType={changeCollectionType}
    />
  );
};

export default withRouter(CollectionTypeSelectCont);
