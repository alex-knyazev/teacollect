import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import Component from '@/components/Login';

const LoginMutation = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      username
    }
  }
`;

function Login(props) {
  return (
    <Mutation
      mutation={LoginMutation}
      update={(cache, { data: { login } }) => {
        // todo: get token and write it to cookie;
        const { history } = props;
        history.push('/');
      }}
    >
      {(login, { data }) => {
        const handleLogin = (username, password) => {
          login({ variables: { input: { username, password } } });
        };
        return <Component handleLogin={handleLogin} />;
      }}
    </Mutation>
  );
}

export default withRouter(Login);
