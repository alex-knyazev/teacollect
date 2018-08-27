import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCollectionTypeAC } from '@/actionCreators/collectionsTypes';

import CollectionTypeSelectC from '@/components/specific/CollectionTypeSelect';

const CollectionTypeSelect = (props) => {
  const {
    collectionsTypes: { currentCollectionType, types },
    changeCollectionTypeAC,
  } = props;

  const propsC = { types, currentCollectionType, changeCollectionTypeAC };
  return <CollectionTypeSelectC {...propsC} />;
};

CollectionTypeSelect.propTypes = {
  collectionsTypes: PropTypes.shape({
    currentCollectionType: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  changeCollectionTypeAC: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  collectionsTypes: state.collectionsTypes,
});

const mapDispatchToProps = {
  changeCollectionTypeAC,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CollectionTypeSelect);
