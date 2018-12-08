import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import Component from '@/components/Registration';
import { LOGIN_PAGE } from '@/pages';

const RegisterMutation = gql`
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      username
      token
    }
  }
`;

function Login(props) {
  const { history } = props;

  const handleSignIn = () => {
    history.push(LOGIN_PAGE.name);
  };

  return (
    <Mutation
      mutation={RegisterMutation}
      update={(cache, { data: { register } }) => {
        // todo: get token and write it to cookie;
        const { history } = props;
        history.push('/');
      }}
    >
      {(register, { data }) => {
        const handleSignUp = (username, password) => {
          register({ variables: { input: { username, password } } });
        };
        return <Component handleSignIn={handleSignIn} handleSignUp={handleSignUp} />;
      }}
    </Mutation>
  );
}

export default withRouter(Login);
