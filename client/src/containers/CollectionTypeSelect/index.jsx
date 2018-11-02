import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import { changeCollectionTypeAC } from '@/actionCreators/collectionsTypes';

import CollectionTypeSelectC from '@/components/CollectionTypeSelect';

const CollectionTypeSelect = props => {

  const { chosenCollectionType, changeCollectionTypeAC } = props;

  return (
    <CollectionTypeSelectC
      chosenCollectionType={chosenCollectionType}
      changeCollectionTypeAC={changeCollectionTypeAC}
    />
  );
};

const mapStateToProps = state => {
  const { collectionsTypes } = state;
  return { chosenCollectionType: collectionsTypes.chosenCollectionType };
};

const mapDispatchToProps = {
  changeCollectionTypeAC,
};

export default graphql(getCollectionTypes)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CollectionTypeSelect),
);
