import React from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import Collection from '@/components/Collections/Collection';
import Loading from '@/components/common/Loading';

import getTeas from '@/graphql/teas/getTeasMainInfo.gql';

const CollectionCont = props => {
  const {
    match: { path },
  } = props;

  return (
    <Query query={getTeas}>
      {({ loading, error, data }) => {
        if (error) {
          return 'error';
        }
        if (loading || !data) return <Loading />;
        const { teas } = data;
        return <Collection teas={teas} />;
      }}
    </Query>
  );
};

export default withRouter(CollectionCont);
