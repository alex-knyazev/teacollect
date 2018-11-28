import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import styles from './index.module.scss';

function Login(props) {
  const { handleLogin } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className={styles.LoginWrapper}>
      <div className={styles.LoginForm}>
        <div style={{ textAlign: 'center' }}>
          <p>Teacollect</p>
        </div>
        <div>
          <TextField
            fullWidth
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </div>
        <div>
          <TextField
            fullWidth
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleLogin(username, password)}
          >
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
