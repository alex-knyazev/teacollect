export default {
  mapPropsToValues: (some) => {
    return { email: '', password: '' };
  },

  validate: (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'для входа введите email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Некорректный email';
    }
    if (!values.password) {
      errors.password = 'для входа введите пароль';
    } else if (values.password.length < 5) {
      errors.password = 'минимальная длина - 5 символов';
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    debugger;
    setTimeout(() => {
      // alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'BasicForm',
};
