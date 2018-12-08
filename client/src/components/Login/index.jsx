import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import styles from './index.module.scss';

function Login(props) {
  const { handleSignIn, handleSignUp } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className={styles.LoginWrapper}>
      <div className={styles.LoginForm}>
        <div className={styles.LoginTitle}>
          <Typography gutterBottom variant="h4">
            Teacollect
          </Typography>
          <Typography variant="body">Ваш пропуск в мир чая</Typography>
        </div>
        <div>
          <TextField
            fullWidth
            value={username}
            placeholder="email"
            autoFocus
            onChange={event => setUsername(event.target.value)}
          />
        </div>
        <div className={styles.AppName}>
          <TextField
            fullWidth
            type="password"
            placeholder="пароль"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div className={styles.LoginActions}>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSignIn(username, password)}
            >
              Войти
            </Button>
          </div>
          <div>
            <Button onClick={() => handleSignUp(username, password)}>
              Еще не зарегистрированы?
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
