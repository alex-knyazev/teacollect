import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import ChosenCollectionTypeC from '@/components/ChosenCollectionType';
import Loading from '@/components/common/Loading';

import getTeas from '@/graphql/teas/getTeasMainInfo.gql';

const ChosenCollectionType = () => (
  <Query query={getTeas}>
    {({ loading, error, data }) => {
      if (loading || !data) return <Loading />;
      const { teas } = data;
      return <ChosenCollectionTypeC teas={teas} />;
    }}
  </Query>
);

export default ChosenCollectionType;
