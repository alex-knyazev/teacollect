import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import ChosenCollectionTypeC from '@/components/specific/ChosenCollectionType';
import Loading from '@/components/common/Loading';

import getTeas from '@/graphql/teas/getTeasMainInfo.gql';

const ChosenCollectionType = () => (
  <Query query={GET_TEAS}>
    {({ loading, error, data }) => {
      if (loading || !data) return <Loading />;
      const { teas } = data;
      return <ChosenCollectionTypeC teas={teas} />;
    }}
  </Query>
);

export default ChosenCollectionType;
