import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';

import Component from '@/components/Registration';
import { LOGIN_PAGE } from '@/pages';
import { notificationGraphQLErrorShow } from '@/actionCreators/notification';

const RegisterMutation = gql`
  mutation register($input: RegistrationInput!) {
    register(input: $input) {
      token
    }
  }
`;

function Login(props) {
  const { history, notificationShowAC } = props;
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
      onError={error => {
        notificationShowAC(error);
      }}
    >
      {(register, { data, error, loading }) => {
        const handleSignUp = async ({ email, password }) => {
          register({ variables: { input: { email, password } } });
        };

        return (
          <Formik
            initialValues={{ email: 'a@mail.ru', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'требуется email';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Некорректный email';
              }
              if (!values.password) {
                errors.password = 'требуется пароль';
              } else if (values.password.length < 5) {
                errors.password = 'минимальная длина - 5 символов';
              }

              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              await handleSignUp({ ...values });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              /* and other goodies */
            }) => (
              <Component
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                handleSignIn={handleSignIn}
                handleSignUp={handleSignUp}
                isSubmitting={loading}
              />
            )}
          </Formik>
        );
      }}
    </Mutation>
  );
}

const mapStateToProps = state => ({
  notification: state.notification,
});

const mapDispatchToProps = {
  notificationGraphQLErrorShow,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Login));
