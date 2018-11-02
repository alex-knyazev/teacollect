import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterSortsAC } from '@/actionCreators/collection';

import SortsFilterC from '@/components/SortsFilter';

const SortsFilter = (props) => {
  const {
    collectionsTypes: { currentCollectionType },
    filterSortsAC,
    teaTypes,
  } = props;
  const propsC = { filterSortsAC, currentCollectionType, teaTypes };
  return <SortsFilterC {...propsC} />;
};

SortsFilter.propTypes = {
  collectionsTypes: PropTypes.shape({
    currentCollectionType: PropTypes.string.isRequired,
  }).isRequired,
  filterSortsAC: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  collectionsTypes: state.collectionsTypes,
  teaTypes: state.teaTypes,
});

const mapDispatchToProps = {
  filterSortsAC,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortsFilter);
