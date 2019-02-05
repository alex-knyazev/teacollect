import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';
import { Link } from '@/base/extraRoutes';
import withApollo from './withApollo';
import withFormik from './withFormik';
import withStore from './withStore';

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

const SignUp = (props) => {
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
          <Typography variant="h5">Регистрация</Typography>
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
            <Link href="signin" passHref>
              <Button>Уже зарегистрированы?</Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default withStyles(styles)(SignUp)
  |> withFormik
  |> withApollo
  |> withStore;
