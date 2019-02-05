import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const TEAS_QUERY = gql`
  query teas {
    teas {
      type {
        name
      }
      name
    }
  }
`;

const withApollo = (Component) => {
  return (props) => (
    <Query query={TEAS_QUERY}>
      {({ loading, data: { teas } }) => {
        if (loading) return <span>loading....</span>;
        debugger;
        return <Component {...props} />;
        // return <h1>Welcome back {currentUser.firstName}</h1>
      }}
    </Query>
  );
};

export default withApollo;
