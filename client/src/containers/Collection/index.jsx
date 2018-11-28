import React from 'react';
import { Query } from 'react-apollo';

import CollectionC from '@/components/Collections/Collection';
import Loading from '@/components/common/Loading';

import getTeas from '@/graphql/teas/getTeasMainInfo.gql';

const Collection = () => (
  <Query query={getTeas}>
    {({ loading, error, data }) => {
      if (error) {
        return 'error';
      }
      if (loading || !data) return <Loading />;
      const { teas } = data;
      return <CollectionC teas={teas} />;
    }}
  </Query>
);

export default Collection;
