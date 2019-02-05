import React from 'react';
import { Formik } from 'formik';

const withFormik = (Component) => {
  return (props) => {
    const { registerMutation, registerData } = props;
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, actions) => {
          registerMutation({ variables: { input: values } }).finally(() => {
            actions.setSubmitting(false);
          });
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'для регистрации введите email';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Некорректный email';
          }
          if (!values.password) {
            errors.password = 'для регистрации введите пароль';
          } else if (values.password.length < 5) {
            errors.password = 'минимальная длина - 5 символов';
          }

          return errors;
        }}
        render={(formikProps) => {
          return <Component {...props} {...formikProps} />;
        }}
      />
    );
  };
};

export default withFormik;
