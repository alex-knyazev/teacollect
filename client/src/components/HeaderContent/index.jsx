import React from 'react';
import { Link } from 'react-router-dom';

import routes from '@/pages';

import logoIconImg from '@/public/logo-icon.png';
import { Person } from '@material-ui/icons';
import styles from './index.module.scss';

const HeaderContent = () => (
  <div className={styles.headerContent}>
    <div>
      <Link to={routes.COLLECTIONS_PAGE}>
        <span>Teacollect</span>
        <img src={logoIconImg} alt="logo" />
      </Link>
    </div>
    <div className={styles.actions}>
      <div className={styles.loginItem}>
        <Link to={routes.LOGIN_PAGE}>
          <button type="button">
            <span>Коллекции</span>
          </button>
        </Link>
      </div>
      <div className={styles.loginItem}>
        <Link to={routes.LOGIN_PAGE}>
          <button type="button">
            <span>Статьи</span>
          </button>
        </Link>
      </div>
      <div className={styles.loginItem}>
        <Link to={routes.LOGIN_PAGE}>
          <button type="button">
            <span>
              <Person />
            </span>
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default HeaderContent;
