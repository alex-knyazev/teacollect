import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import Component from '@/components/Login';

const LoginMutation = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      username
      token
    }
  }
`;

function Login(props) {
  const { history } = props;

  const handleSignUp = () => {
    history.push('/registration');
  };

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
        const handleSignIn = (username, password) => {
          login({ variables: { input: { username, password } } });
        };
        return <Component handleSignUp={handleSignUp} handleLogin={handleSignIn} />;
      }}
    </Mutation>
  );
}

export default withRouter(Login);
