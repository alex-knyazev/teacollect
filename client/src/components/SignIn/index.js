import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';
import { withFormik } from 'formik';
import { Link } from '@/base/extraRoutes';

import formLogic from './formLogic';

const styles = (theme) => ({
  RegistrationForm: {
    width: 350,
  },
  RegistrationFormItem: {
    marginBottom: 40,
  },
  RegistrationTitle: {
    textAlign: 'center',
  },
  RegistrationActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  Progress: {
    color: 'white',
  },
});

const SignIn = (props) => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    classes,
  } = props;

  return (
    <div className={classes.RegistrationForm}>
      <form onSubmit={handleSubmit}>
        <div
          className={[
            classes.RegistrationFormItem,
            classes.RegistrationTitle,
          ].join(' ')}
        >
          <Typography variant="h1" gutterBottom>
            Teacollect
          </Typography>
          <Typography variant="h5">Ваш пропуск в мир чая</Typography>
        </div>
        <div className={classes.RegistrationFormItem}>
          <TextField
            fullWidth
            name="email"
            type="email"
            error={errors.email && touched.email}
            label={touched.email && errors.email ? errors.email : 'email'}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
        </div>
        <div className={classes.RegistrationFormItem}>
          <TextField
            fullWidth
            type="password"
            name="password"
            error={errors.password && touched.password}
            label={
              touched.password && errors.password ? errors.password : 'пароль'
            }
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
        </div>
        <div className={classes.RegistrationActions}>
          <div>
            <Button variant="contained" color="primary" type="submit">
              {isSubmitting ? (
                <CircularProgress className={classes.Progress} size={18} />
              ) : (
                'OK'
              )}
            </Button>
          </div>
          <div>
            <Link prefetch href="signup" passHref>
              <Button>Ещё не зарегистрированы?</Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default withFormik(formLogic)(withStyles(styles)(SignIn));
