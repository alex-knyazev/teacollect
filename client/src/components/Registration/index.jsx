import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import styles from './index.module.scss';

function Registration(props) {
  const { handleSignIn, handleSignUp } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className={styles.RegistrationWrapper}>
      <div className={styles.RegistrationForm}>
        <div className={styles.RegistrationTitle}>
          <Typography gutterBottom variant="h4">
            Teacollect
          </Typography>
          <Typography variant="body">Регистрация</Typography>
        </div>
        <div>
          <TextField
            fullWidth
            value={username}
            placeholder="email"
            onChange={event => setUsername(event.target.value)}
          />
        </div>
        <div className={styles.AppName}>
          <TextField
            fullWidth
            type="password"
            value={password}
            placeholder="пароль"
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div className={styles.RegistrationActions}>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSignUp(username, password)}
            >
              OK
            </Button>
          </div>
          <div>
            <Button onClick={() => handleSignIn(username, password)}>Уже зарегистрированы?</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
