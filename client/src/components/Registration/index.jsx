import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

import stylesM from './index.module.scss';

const styles = theme => ({
  progress: {
    color: 'white',
  },
});

function Registration(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    handleGoToSignIn,
    isSubmitting,
    classes,
  } = props;

  return (
    <div className={stylesM.RegistrationWrapper}>
      <div className={stylesM.RegistrationForm}>
        <form onSubmit={handleSubmit}>
          <div className={[stylesM.RegistrationFormItem, stylesM.RegistrationTitle].join(' ')}>
            <Typography gutterBottom variant="h4">
              Teacollect
            </Typography>
            <Typography variant="body">Регистрация</Typography>
          </div>
          <div className={[stylesM.RegistrationFormItem]}>
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
          <div className={stylesM.RegistrationFormItem}>
            <TextField
              fullWidth
              type="password"
              name="password"
              error={errors.password && touched.password}
              label={touched.password && errors.password ? errors.password : 'пароль'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </div>
          <div className={stylesM.RegistrationActions}>
            <div>
              <Button variant="contained" color="primary" type="submit">
                {isSubmitting ? <CircularProgress className={classes.progress} size={18} /> : 'OK'}
              </Button>
            </div>
            <div>
              <Button onClick={handleGoToSignIn}>Уже зарегистрированы?</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withStyles(styles)(Registration);
