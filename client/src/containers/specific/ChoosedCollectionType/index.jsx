import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ApolloConsumer } from 'react-apollo';

import { getCollectionAC } from '@/actionCreators/collection';
import ChoosedCollectionTypeC from '@/components/specific/ChoosedCollectionType';

class ChoosedCollectionType extends Component {
  componentDidMount = () => {
    const { getCollectionAC } = this.props;
    getCollectionAC();
  };

  render() {
    const { collection } = this.props;
    const { data, isWaiting, isError } = collection;
    return (
      <ApolloConsumer>
        {(client) => {
          debugger;
          return (
            <div>
              <h1>The current cache is:</h1>
              <pre>123123123</pre>
            </div>
          );
        }}
      </ApolloConsumer>
    );

    // return <ChoosedCollectionTypeC data={data} isWaiting={isWaiting} isError={isError} />;
  }
}

ChoosedCollectionType.propTypes = {
  collection: PropTypes.shape({
    isError: PropTypes.bool.isRequired,
    isWaiting: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getCollectionAC: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  collection: state.collection,
});

const mapDispatchToProps = {
  getCollectionAC,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChoosedCollectionType);
